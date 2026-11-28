/* Supabase authentication for El Magles.
 * Browser-safe publishable key only. Never place a service_role/secret key here.
 */
(() => {
  'use strict';
  const SUPABASE_URL = 'https://xgisqwevqsvpegbwjvcc.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_fSb7x_1Rv329ZWyriwF4ww_5lrvsF7D';
  let client = null;
  let currentUser = null;

  const $ = (id) => document.getElementById(id);
  const showMessage = (message, isError = false) => {
    const node = $('council-auth-message');
    if (!node) return;
    node.textContent = message;
    node.classList.toggle('is-error', isError);
    node.hidden = false;
  };
  const setUser = (user) => {
    currentUser = user || null;
    const trigger = $('council-account-trigger');
    const status = $('council-auth-status');
    const googleButton = $('council-google-signin');
    const signout = $('council-signout');
    if (trigger) {
      trigger.textContent = currentUser ? '👤' : '♙';
      trigger.setAttribute('aria-label', currentUser ? 'حسابي' : 'تسجيل الدخول');
      trigger.title = currentUser ? (currentUser.email || 'حسابي') : 'تسجيل الدخول بحساب Google';
    }
    if (status) status.textContent = currentUser
      ? ('تم التحقق من حساب Google: ' + (currentUser.email || 'حساب موثّق'))
      : 'لم يتم تسجيل الدخول بعد';
    if (googleButton) googleButton.hidden = !!currentUser;
    if (signout) signout.hidden = !currentUser;
    const email = $('council-auth-email');
    if (email) email.textContent = currentUser ? (currentUser.email || '') : '';
  };
  const openModal = () => {
    const modal = $('council-auth-modal');
    if (modal) {
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
    }
  };
  const closeModal = () => {
    const modal = $('council-auth-modal');
    if (modal) {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    }
  };

  async function init() {
    if (!window.supabase || typeof window.supabase.createClient !== 'function') {
      showMessage('تعذر تحميل خدمة تسجيل الدخول. تحقق من اتصال الإنترنت ثم أعد المحاولة.', true);
      return;
    }
    client = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
    const { data, error } = await client.auth.getSession();
    if (error) showMessage('تعذر قراءة جلسة الحساب: ' + error.message, true);
    setUser(data && data.session ? data.session.user : null);

    client.auth.onAuthStateChange((_event, session) => {
      setUser(session ? session.user : null);
      if (session && session.user) showMessage('تم تسجيل الدخول والتحقق من حسابك بنجاح.');
    });

    $('council-account-trigger')?.addEventListener('click', openModal);
    $('council-auth-close')?.addEventListener('click', closeModal);
    $('council-auth-modal')?.addEventListener('click', (event) => {
      if (event.target === $('council-auth-modal')) closeModal();
    });
    $('council-google-signin')?.addEventListener('click', async () => {
      const button = $('council-google-signin');
      button.disabled = true;
      button.textContent = 'جارٍ الانتقال إلى Google…';
      const redirectTo = window.location.origin + window.location.pathname;
      const { error: oauthError } = await client.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo, queryParams: { prompt: 'select_account' } }
      });
      if (oauthError) {
        showMessage('لم يبدأ تسجيل Google: ' + oauthError.message + ' — تأكد من تفعيل Google داخل Supabase.', true);
        button.disabled = false;
        button.textContent = 'المتابعة باستخدام Google';
      }
    });
    $('council-signout')?.addEventListener('click', async () => {
      const { error: signoutError } = await client.auth.signOut();
      if (signoutError) showMessage('تعذر تسجيل الخروج: ' + signoutError.message, true);
      else showMessage('تم تسجيل الخروج من الحساب.');
    });
  }

  window.ElMaglesAuth = {
    open: openModal,
    close: closeModal,
    getUser: () => currentUser,
    getClient: () => client
  };
  document.addEventListener('DOMContentLoaded', init);
})();