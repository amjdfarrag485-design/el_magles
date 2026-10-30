/* =============================================================================
   تطبيق «المجلس: الموسوعة القرآنية والابتهالات»
   الملف البرمجي الرئيسي المعتمد: js/app.js
   الإصدار: 2.1 - ترميز UTF-8 نقي 100%
   - إذاعة القرآن الكريم من القاهرة (بث مباشر 24 ساعة)
   - المصحف التفاعلي المرتل والمجود مع نظام الترقيم الثلاثي وعلامة الختمة
   - مؤقت النوم والإيقاف التلقائي (15، 30، 45، 60 دقيقة)
   - السبحة الإلكترونية الذكية مع الاهتزاز والعداد اليومي
   - موسوعة التواشيح والابتهالات الشاملة في صفحة واحدة
   - مواقيت الصلاة ونظام التجدد التلقائي اليومي
   ============================================================================= */

// ═══════════════════════════════════════════════════════════════
// 1. حالة التطبيق المركزية (State Management)
// ═══════════════════════════════════════════════════════════════
const STATE = {
  currentPage: 'home',
  currentSurahNumber: 1,
  currentAyahIndex: 0,
  currentMode: 'murattal', // 'murattal' | 'mojawwad'
  currentReciter: null,

  // المشغل الصوتي للمصحف ونظام الاسترداد الذكي
  quranAudio: null,
  audioFallbackChain: [],
  audioFallbackIndex: 0,
  wordSegments: [],
  activeWordIndex: -1,

  // المشغل الصوتي العام (إذاعة القاهرة والابتهالات)
  globalAudio: null,
  activeAudioTrack: null,
  isGlobalPlaying: false,
  isCairoRadioPlaying: false,

  // مؤقت النوم والإيقاف التلقائي (Sleep Timer)
  sleepTimer: {
    minutes: 0,
    targetTimestamp: null,
    intervalId: null
  },

  // علامة الختمة والتوقف (Bookmark)
  bookmark: null,

  // قارئ القصص الصوتي الآلي (Speech Synthesis)
  speechSynth: window.speechSynthesis || null,
  speechUtterance: null,
  isSpeechPlaying: false,

  // مواقيت الصلاة والأذان
  prayerTimes: null,
  nextPrayer: null,
  countdownInterval: null,
  adhanMuteSettings: {},

  // السبحة الإلكترونية الذكية
  tasbeeh: {
    count: 0,
    total: 0,
    dailyTotal: 0,
    lastDate: '',
    dhikrId: 'subhanallah'
  }
};

// ═══════════════════════════════════════════════════════════════
// 2. تشغيل التطبيق (DOM Initialization)
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initIslamicApp();
});

function initIslamicApp() {
  console.log('🕌 بدء تشغيل تطبيق المجلس - الموسوعة القرآنية والابتهالات...');

  // استرجاع الإعدادات المحفوظة محلياً
  loadPersistedData();

  // تهيئة مشغلات الصوت
  initAudioElements();

  // تهيئة مواقيت الصلاة في صدارة التطبيق
  initPrayerSystem();

  // تهيئة نظام التجدد التلقائي اليومي
  initDailyRenewalSystem();

  // تهيئة المصحف التفاعلي وتزامن الكلمات
  initQuranReader();

  // تهيئة علامة الختمة
  initBookmarkSystem();

  // تهيئة إذاعة القرآن الكريم من القاهرة
  initRadioSection();

  // تهيئة التواشيح والابتهالات الشاملة
  initRareAndIbtehalat();

  // تهيئة موسوعة كبار القراء
  initRecitersEncyclopedia();

  // تهيئة حصن المسلم
  initAzkarSection();

  // تهيئة قصص الأنبياء وقارئ الصوت الآلي
  initStoriesSection();

  // تهيئة السبحة الإلكترونية الذكية
  initTasbeehSection();

  // نظام التذكير بالصلاة على النبي ﷺ كل ساعتين
  setupSalawatReminder();

  // معالجة التنقل الداخلي (Hash routing)
  handleInitialRoute();

  // إخفاء شاشة البداية بسلاسة
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading');
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      setTimeout(() => { loadingScreen.style.display = 'none'; }, 400);
    }
  }, 450);
}

// ═══════════════════════════════════════════════════════════════
// 3. التخزين المحلي (LocalStorage)
// ═══════════════════════════════════════════════════════════════
function loadPersistedData() {
  try {
    // استرجاع بيانات السبحة والتسبيح اليومي
    const todayStr = new Date().toISOString().slice(0, 10);
    const savedTasbeeh = localStorage.getItem('app_tasbeeh_data');
    if (savedTasbeeh) {
      STATE.tasbeeh = { ...STATE.tasbeeh, ...JSON.parse(savedTasbeeh) };
      if (STATE.tasbeeh.lastDate !== todayStr) {
        STATE.tasbeeh.dailyTotal = 0;
        STATE.tasbeeh.lastDate = todayStr;
      }
    } else {
      STATE.tasbeeh.lastDate = todayStr;
    }

    // استرجاع إعدادات كتم الأذان
    const savedAdhan = localStorage.getItem('app_adhan_settings');
    if (savedAdhan) {
      STATE.adhanMuteSettings = JSON.parse(savedAdhan);
    } else {
      STATE.adhanMuteSettings = { Fajr: true, Dhuhr: true, Asr: true, Maghrib: true, Isha: true };
    }

    // استرجاع علامة الختمة
    const savedBookmark = localStorage.getItem('quran_bookmark');
    if (savedBookmark) {
      STATE.bookmark = JSON.parse(savedBookmark);
    }
  } catch (e) {
    console.warn('LocalStorage load error:', e);
  }
}

function savePersistedData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('LocalStorage save error:', e);
  }
}

// ═══════════════════════════════════════════════════════════════
// 4. نظام التنقل السلس بين الأقسام
// ═══════════════════════════════════════════════════════════════
function navigateTo(pageId) {
  if (!pageId) return;

  const targetPage = document.getElementById(`page-${pageId}`);
  if (!targetPage) return;

  STATE.currentPage = pageId;

  // إخفاء كافة الصفحات وتفعيل الصفحة المطلوبة
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  targetPage.classList.add('active');

  // تحديث شريط التنقل السفلي
  document.querySelectorAll('.nav-tab-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === pageId);
  });

  // التمرير لأعلى بسلاسة
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // تحديث الرابط في المتصفح
  if (window.location.hash.replace('#', '') !== pageId) {
    window.location.hash = pageId;
  }
}

function handleInitialRoute() {
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(`page-${hash}`)) {
    navigateTo(hash);
  } else {
    navigateTo('home');
  }

  window.addEventListener('popstate', () => {
    const page = window.location.hash.replace('#', '') || 'home';
    if (document.getElementById(`page-${page}`)) {
      navigateTo(page);
    }
  });
}

// ═══════════════════════════════════════════════════════════════
// 5. تهيئة عناصر الصوت والمشغلات
// ═══════════════════════════════════════════════════════════════
function initAudioElements() {
  STATE.globalAudio = document.getElementById('main-audio-element');
  STATE.quranAudio = new Audio();
  STATE.quranAudio.preload = 'metadata';

  // أحداث مشغل صوت المصحف
  STATE.quranAudio.addEventListener('timeupdate', onQuranAudioTimeUpdate);
  STATE.quranAudio.addEventListener('loadedmetadata', onQuranAudioLoadedMetadata);
  STATE.quranAudio.addEventListener('durationchange', onQuranAudioLoadedMetadata);
  STATE.quranAudio.addEventListener('ended', onQuranAyahEnded);
  STATE.quranAudio.addEventListener('play', () => updateHudPlayBtn(true));
  STATE.quranAudio.addEventListener('pause', () => updateHudPlayBtn(false));
  STATE.quranAudio.addEventListener('error', (e) => {
    console.warn('[Smart Fallback] Audio error on:', STATE.quranAudio.src);
    if (STATE.audioFallbackChain && STATE.audioFallbackIndex < STATE.audioFallbackChain.length - 1) {
      STATE.audioFallbackIndex++;
      const nextSource = STATE.audioFallbackChain[STATE.audioFallbackIndex];
      showToast('⚠️ جاري التبديل التلقائي إلى خادم بديل مباشر...');
      STATE.quranAudio.src = nextSource;
      STATE.quranAudio.load();
      STATE.quranAudio.play().catch(() => {});
    } else {
      updateHudPlayBtn(false);
      showToast('تعذر تشغيل هذا المقطع حالياً ⚠️');
    }
  });

  // أحداث المشغل الصوتي العام (إذاعة القاهرة والابتهالات)
  if (STATE.globalAudio) {
    STATE.globalAudio.preload = 'metadata';
    STATE.globalAudio.addEventListener('play', () => {
      STATE.isGlobalPlaying = true;
      updateFloatPlayBtn(true);
    });
    STATE.globalAudio.addEventListener('playing', () => {
      STATE.isGlobalPlaying = true;
      updateFloatPlayBtn(true);
      if (STATE.isCairoRadioPlaying) {
        updateCairoRadioUI(true);
      }
    });
    STATE.globalAudio.addEventListener('pause', () => {
      STATE.isGlobalPlaying = false;
      updateFloatPlayBtn(false);
      if (STATE.isCairoRadioPlaying) {
        updateCairoRadioUI(false);
      }
    });
    STATE.globalAudio.addEventListener('ended', () => {
      STATE.isGlobalPlaying = false;
      updateFloatPlayBtn(false);
      if (STATE.isCairoRadioPlaying) {
        updateCairoRadioUI(false);
      }
    });
    STATE.globalAudio.addEventListener('error', () => {
      if (STATE.isCairoRadioPlaying) {
        cairoRadioFallbackIndex++;
        if (cairoRadioFallbackIndex < CAIRO_RADIO_URLS.length) {
          const nextUrl = CAIRO_RADIO_URLS[cairoRadioFallbackIndex];
          console.warn(`[Cairo Radio Fallback] Switching to mirror #${cairoRadioFallbackIndex}: ${nextUrl}`);
          STATE.globalAudio.src = nextUrl;
          STATE.globalAudio.load();
          STATE.globalAudio.play().catch(e => console.warn('Mirror play error:', e));
          return;
        }
      }
      showToast('تعذر تشغيل البث أو التسجيل حالياً ⚠️');
      updateFloatPlayBtn(false);
      updateCairoRadioUI(false);
      STATE.isCairoRadioPlaying = false;
    });
  }
}

function onQuranAudioLoadedMetadata() {
  if (!STATE.quranAudio || isNaN(STATE.quranAudio.duration)) return;
  const totEl = document.getElementById('hud-time-total');
  if (totEl && STATE.quranAudio.duration > 0 && STATE.quranAudio.duration !== Infinity) {
    totEl.textContent = formatAudioTime(STATE.quranAudio.duration);
  }
}

// ═══════════════════════════════════════════════════════════════
// 6. مواقيت الصلاة والعد التنازلي في صدارة الصفحة الرئيسية
// ═══════════════════════════════════════════════════════════════
async function initPrayerSystem() {
  updateHomeDates();

  // جلب الإحداثيات الجغرافية أو اعتماد القاهرة كقيمة افتراضية رئيسية
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => fetchPrayerTimings(pos.coords.latitude, pos.coords.longitude),
      () => fetchPrayerTimings(30.0444, 31.2357, "القاهرة، مصر"),
      { timeout: 8000 }
    );
  } else {
    fetchPrayerTimings(30.0444, 31.2357, "القاهرة، مصر");
  }
}

async function fetchPrayerTimings(lat, lng, fallbackLocation = null) {
  try {
    const today = new Date();
    const dateStr = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    const url = `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${lat}&longitude=${lng}&method=5`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.code === 200 && data.data) {
      STATE.prayerTimes = data.data.timings;

      const locText = fallbackLocation || data.data.meta.timezone;
      const heroLoc = document.getElementById('hero-location-text');
      if (heroLoc) heroLoc.textContent = locText;
      const fullLoc = document.getElementById('full-prayer-location');
      if (fullLoc) fullLoc.textContent = locText;

      if (data.data.date && data.data.date.hijri) {
        const h = data.data.date.hijri;
        const hijriStr = `${h.day} ${h.month.ar} ${h.year} هـ`;
        const heroHijri = document.getElementById('home-hijri-date');
        if (heroHijri) heroHijri.textContent = hijriStr;
        const fullDate = document.getElementById('full-prayer-date');
        if (fullDate) fullDate.textContent = `${hijriStr} | ${data.data.date.gregorian.day} ${data.data.date.gregorian.month.en} ${data.data.date.gregorian.year}`;
      }

      renderHeroPrayers(data.data.timings);
      renderFullPrayersPage(data.data.timings);
      startPrayerCountdownLoop();
    }
  } catch (error) {
    console.warn('Error fetching prayer times:', error);
  }
}

function updateHomeDates() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const gStr = now.toLocaleDateString('ar-EG', options);
  const el = document.getElementById('home-gregorian-date');
  if (el) el.textContent = gStr;
}

function renderHeroPrayers(timings) {
  const prayers = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
  prayers.forEach(p => {
    const raw = timings[p];
    if (raw) {
      const clean = raw.split(' ')[0];
      const target = document.querySelector(`#mini-p-${p.toLowerCase()} .mini-p-time`);
      if (target) target.textContent = clean;
    }
  });

  updateActivePrayerHero();
}

function updateActivePrayerHero() {
  if (!STATE.prayerTimes) return;

  const now = new Date();
  const prayerKeys = [
    { id: 'Fajr', name: 'صلاة الفجر' },
    { id: 'Sunrise', name: 'الشروق' },
    { id: 'Dhuhr', name: 'صلاة الظهر' },
    { id: 'Asr', name: 'صلاة العصر' },
    { id: 'Maghrib', name: 'صلاة المغرب' },
    { id: 'Isha', name: 'صلاة العشاء' }
  ];

  let nextP = null;
  let nextDate = null;

  for (const p of prayerKeys) {
    if (p.id === 'Sunrise') continue;
    const raw = STATE.prayerTimes[p.id];
    if (!raw) continue;

    const [h, m] = raw.split(' ')[0].split(':').map(Number);
    const pDate = new Date(now);
    pDate.setHours(h, m, 0, 0);

    if (pDate > now) {
      nextP = p;
      nextDate = pDate;
      break;
    }
  }

  if (!nextP) {
    nextP = prayerKeys[0];
    const rawFajr = STATE.prayerTimes['Fajr'];
    const [fh, fm] = rawFajr ? rawFajr.split(' ')[0].split(':').map(Number) : [5, 0];
    nextDate = new Date(now);
    nextDate.setDate(now.getDate() + 1);
    nextDate.setHours(fh, fm, 0, 0);
  }

  STATE.nextPrayer = { ...nextP, date: nextDate };

  const nameEl = document.getElementById('hero-next-prayer-name');
  if (nameEl) nameEl.textContent = nextP.name;

  const timeEl = document.getElementById('hero-next-prayer-time');
  const rawTime = STATE.prayerTimes[nextP.id];
  if (timeEl && rawTime) timeEl.textContent = rawTime.split(' ')[0];

  document.querySelectorAll('.mini-prayer-item').forEach(item => item.classList.remove('active'));
  const activeMini = document.getElementById(`mini-p-${nextP.id.toLowerCase()}`);
  if (activeMini) activeMini.classList.add('active');
}

function startPrayerCountdownLoop() {
  if (STATE.countdownInterval) clearInterval(STATE.countdownInterval);

  STATE.countdownInterval = setInterval(() => {
    if (!STATE.nextPrayer || !STATE.nextPrayer.date) return;

    const now = new Date();
    const diff = STATE.nextPrayer.date - now;

    if (diff <= 0) {
      triggerAdhanAlert(STATE.nextPrayer.name, STATE.nextPrayer.id);
      updateActivePrayerHero();
      return;
    }

    const hrs = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const cdEl = document.getElementById('hero-prayer-countdown');
    if (cdEl) {
      cdEl.textContent = `متبقي: ${hrs > 0 ? hrs + ' س و ' : ''}${mins} د و ${secs} ث`;
    }
  }, 1000);
}

function triggerAdhanAlert(prayerName, prayerId) {
  showToast(`🕌 حان الآن موعد ${prayerName}`);
}

function renderFullPrayersPage(timings) {
  const container = document.getElementById('full-prayer-times-list');
  if (!container) return;

  const prayerNames = [
    { id: 'Fajr', name: 'الفجر', icon: '🌌' },
    { id: 'Sunrise', name: 'الشروق', icon: '🌅' },
    { id: 'Dhuhr', name: 'الظهر', icon: '☀️' },
    { id: 'Asr', name: 'العصر', icon: '🌤️' },
    { id: 'Maghrib', name: 'المغرب', icon: '🌇' },
    { id: 'Isha', name: 'العشاء', icon: '🌙' }
  ];

  container.innerHTML = prayerNames.map(p => {
    const raw = timings[p.id];
    if (!raw) return '';
    const clean = raw.split(' ')[0];
    const isMuted = STATE.adhanMuteSettings[p.id] === false;

    return `
      <div class="card" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 16px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 1.6rem;">${p.icon}</span>
          <span style="font-weight: 700; font-size: 1.05rem;">صلاة ${p.name}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="font-size: 1.25rem; font-weight: 800; color: var(--gold-light);">${clean}</span>
          ${p.id !== 'Sunrise' ? `
            <button class="action-btn action-btn-secondary" style="padding: 6px 10px; font-size: 0.85rem;" onclick="toggleAdhanMute('${p.id}')">
              ${isMuted ? '🔕 مكتوم' : '🔔 مفعّل'}
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function toggleAdhanMute(prayerId) {
  STATE.adhanMuteSettings[prayerId] = !STATE.adhanMuteSettings[prayerId];
  savePersistedData('app_adhan_settings', STATE.adhanMuteSettings);
  if (STATE.prayerTimes) renderFullPrayersPage(STATE.prayerTimes);
  showToast(STATE.adhanMuteSettings[prayerId] ? `تم تفعيل تنبيه ${prayerId} 🔔` : `تم كتم تنبيه ${prayerId} 🔕`);
}

// ═══════════════════════════════════════════════════════════════
// 7. نظام التجدد التلقائي اليومي (دعاء وورد اليوم)
// ═══════════════════════════════════════════════════════════════
function initDailyRenewalSystem() {
  const today = new Date();
  const dayOfMonth = today.getDate(); // 1 - 31
  const badgeEl = document.getElementById('daily-renewal-day-badge');
  const duaEl = document.getElementById('daily-dua-text');
  const wirdEl = document.getElementById('daily-wird-text');

  if (badgeEl) {
    badgeEl.textContent = `اليوم ${toArabicDigits(dayOfMonth)} من الشهر`;
  }

  if (typeof DAILY_RENEWAL_DATA !== 'undefined' && DAILY_RENEWAL_DATA.length > 0) {
    const itemIndex = (dayOfMonth - 1) % DAILY_RENEWAL_DATA.length;
    const item = DAILY_RENEWAL_DATA[itemIndex];
    if (duaEl && item.dua) {
      duaEl.textContent = item.dua;
    }
    if (wirdEl && item.wird) {
      wirdEl.textContent = item.wird;
    }
  }
}

// ═══════════════════════════════════════════════════════════════
// 8. المصحف التفاعلي المتقدم وتزامن الكلمات (Word-by-Word Sync)
// ═══════════════════════════════════════════════════════════════
function initQuranReader() {
  // ملء قائمة السور الـ 114
  const surahSelect = document.getElementById('reader-surah-select');
  if (surahSelect && typeof SURAHS_LIST !== 'undefined') {
    surahSelect.innerHTML = SURAHS_LIST.map(s =>
      `<option value="${s.number}">سورة ${s.name} (${s.ayahCount} آية)</option>`
    ).join('');
  }

  // تعيين القارئ الافتراضي وتحديث قائمة القراء حسب وضع المرتل / المجود
  populateReaderReciters();

  // تحميل سورة الفاتحة كبداية
  loadSurah(1);
}

function switchQuranMode(mode) {
  if (mode !== 'mojawwad' && mode !== 'murattal') mode = 'murattal';
  if (STATE.currentMode === mode) return;
  STATE.currentMode = mode;

  const btnMurattal = document.getElementById('btn-mode-murattal');
  const btnMojawwad = document.getElementById('btn-mode-mojawwad');

  if (btnMurattal) btnMurattal.classList.toggle('active', mode === 'murattal');
  if (btnMojawwad) btnMojawwad.classList.toggle('active', mode === 'mojawwad');

  populateReaderReciters();
  loadSurahAudio(STATE.currentSurahNumber);

  const modeMsg = (mode === 'mojawwad') ? 'تم التبديل إلى [المصحف المجود]' : 'تم التبديل إلى [المصحف المرتل]';
  showToast(modeMsg);
}

function populateReaderReciters() {
  const reciterSelect = document.getElementById('reader-reciter-select');
  if (!reciterSelect || typeof ALL_RECITERS_DATA === 'undefined') return;

  const currentMode = STATE.currentMode;
  let filtered = [];

  if (currentMode === 'mojawwad') {
    // كبار قراء المصحف المجود حصراً (7 قراء معتمدين)
    filtered = ALL_RECITERS_DATA.filter(r => r.supportsMojawwad === true);
  } else {
    // المصحف المرتل حصراً (22 قارئاً معتمداً)
    filtered = ALL_RECITERS_DATA.filter(r => r.supportsMurattal === true);
  }

  if (filtered.length === 0) filtered = ALL_RECITERS_DATA;

  reciterSelect.innerHTML = filtered.map(r =>
    `<option value="${r.id}">${r.name}</option>`
  ).join('');

  // الحفاظ على القارئ الحالي إن كان مدعوماً في هذا النمط، أو اختيار الافتراضي
  const isCurrentValid = filtered.some(r => r.id === STATE.currentReciter?.id);
  let selectedReciter = null;

  if (isCurrentValid) {
    selectedReciter = STATE.currentReciter;
  } else {
    const defaultReciterId = (currentMode === 'mojawwad') ? 'abdulbasit' : 'hussary';
    selectedReciter = filtered.find(r => r.id === defaultReciterId) || filtered[0];
    STATE.currentReciter = selectedReciter;
  }

  reciterSelect.value = selectedReciter.id;
  updateReaderHudReciterDisplay();
}

function updateReaderHudReciterDisplay() {
  const hudReciter = document.getElementById('hud-reciter-display');
  if (!hudReciter || !STATE.currentReciter) return;

  const modeLabel = (STATE.currentMode === 'mojawwad') ? 'المصحف المجود' : 'المصحف المرتل';
  hudReciter.textContent = `${STATE.currentReciter.name} (${modeLabel})`;
}

function onReaderReciterChange(reciterId) {
  const reciter = ALL_RECITERS_DATA.find(r => r.id === reciterId);
  if (!reciter) return;

  STATE.currentReciter = reciter;

  if (reciter.supportsMurattal === false && STATE.currentMode === 'murattal') {
    STATE.currentMode = 'mojawwad';
    const btnMurattal = document.getElementById('btn-mode-murattal');
    const btnMojawwad = document.getElementById('btn-mode-mojawwad');
    if (btnMurattal) btnMurattal.classList.remove('active');
    if (btnMojawwad) btnMojawwad.classList.add('active');
    showToast(`تم توجيه التلاوة إلى [المجود] بصوت الشيخ ${reciter.name}`);
  } else if (reciter.supportsMojawwad === false && STATE.currentMode === 'mojawwad') {
    STATE.currentMode = 'murattal';
    const btnMurattal = document.getElementById('btn-mode-murattal');
    const btnMojawwad = document.getElementById('btn-mode-mojawwad');
    if (btnMurattal) btnMurattal.classList.add('active');
    if (btnMojawwad) btnMojawwad.classList.remove('active');
    showToast(`تم توجيه التلاوة إلى [المرتل] بصوت الشيخ ${reciter.name}`);
  }

  updateReaderHudReciterDisplay();
  loadSurahAudio(STATE.currentSurahNumber);
}

async function loadSurah(surahNumber) {
  STATE.currentSurahNumber = surahNumber;
  STATE.currentAyahIndex = 0;
  STATE.activeWordIndex = -1;

  const surah = SURAHS_LIST.find(s => s.number === surahNumber);
  const surahName = surah ? surah.name : surahNumber;

  const headerTitle = document.getElementById('reader-header-surah-title');
  if (headerTitle) headerTitle.textContent = `سورة ${surahName}`;

  const hudSurah = document.getElementById('hud-surah-name');
  if (hudSurah) hudSurah.textContent = `سورة ${surahName}`;

  const surahSelect = document.getElementById('reader-surah-select');
  if (surahSelect) surahSelect.value = surahNumber;

  const bismillahBanner = document.getElementById('reader-bismillah-banner');
  if (bismillahBanner) {
    bismillahBanner.style.display = (surahNumber !== 1 && surahNumber !== 9) ? 'block' : 'none';
  }

  const container = document.getElementById('reader-verses-container');
  if (container) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 0; color: var(--gold-light);">
        <div class="gold-spinner" style="margin: 0 auto 16px;"></div>
        <p>جاري تحميل آيات سورة ${surahName} بالخط العثماني...</p>
      </div>
    `;
  }

  try {
    const quranDotComUrl = `https://api.quran.com/api/v4/verses/by_chapter/${surahNumber}?language=ar&words=true&word_fields=text_uthmani,location&per_page=300`;
    const res = await fetch(quranDotComUrl);
    const data = await res.json();

    if (data.verses && data.verses.length > 0) {
      renderVersesWithWords(data.verses, surahNumber);
    } else {
      throw new Error('Fallback needed');
    }
  } catch (err) {
    fallbackLoadSurahVerses(surahNumber);
  }

  // تحميل الصوت بنظام الترقيم الثلاثي (001.mp3 إلى 114.mp3)
  loadSurahAudio(surahNumber);
}

function renderVersesWithWords(verses, surahNumber) {
  const container = document.getElementById('reader-verses-container');
  if (!container) return;

  container.innerHTML = verses.map(v => {
    const ayahNum = v.verse_number;
    const wordsHtml = v.words.map((w, wIdx) => {
      if (w.char_type_name === 'end') return '';
      const cleanWord = w.text_uthmani || w.text;
      return `<span class="quran-word" id="word-${ayahNum}-${wIdx}" data-ayah="${ayahNum}" data-word-idx="${wIdx}" onclick="onWordClicked(${ayahNum}, ${wIdx})">${cleanWord}</span>`;
    }).join(' ');

    return `
      <div class="verse" id="verse-${ayahNum}" data-verse="${ayahNum}" onclick="playAyahByNumber(${ayahNum})">
        <span class="verse-text">${wordsHtml}</span>
        <span class="verse-number-badge">﴿${toArabicDigits(ayahNum)}﴾</span>
      </div>
    `;
  }).join('');
}

async function fallbackLoadSurahVerses(surahNumber) {
  const container = document.getElementById('reader-verses-container');
  try {
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
    const data = await res.json();
    if (data.code === 200 && data.data && data.data.ayahs) {
      const ayahs = data.data.ayahs;
      container.innerHTML = ayahs.map((a, idx) => {
        let text = a.text;
        if (surahNumber !== 1 && surahNumber !== 9 && idx === 0) {
          text = text.replace(/^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/, '')
                     .replace(/^بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\s*/, '')
                     .trim();
        }

        const words = text.split(/\s+/);
        const wordsHtml = words.map((w, wIdx) =>
          `<span class="quran-word" id="word-${a.numberInSurah}-${wIdx}" data-ayah="${a.numberInSurah}" data-word-idx="${wIdx}" onclick="onWordClicked(${a.numberInSurah}, ${wIdx})">${w}</span>`
        ).join(' ');

        return `
          <div class="verse" id="verse-${a.numberInSurah}" data-verse="${a.numberInSurah}" onclick="playAyahByNumber(${a.numberInSurah})">
            <span class="verse-text">${wordsHtml}</span>
            <span class="verse-number-badge">﴿${toArabicDigits(a.numberInSurah)}﴾</span>
          </div>
        `;
      }).join('');
    }
  } catch (e) {
    console.error('All quran text sources failed:', e);
    if (container) {
      container.innerHTML = `<div class="card" style="text-align: center; color: var(--danger);">تعذر تحميل الآيات. يرجى التحقق من اتصالك بالإنترنت.</div>`;
    }
  }
}

// ═══════════════════════════════════════════════════════════════
// 9. تشغيل صوت السور بنظام الترقيم الثلاثي وحل مشكلة 0:00
// ═══════════════════════════════════════════════════════════════
function loadSurahAudio(surahNumber) {
  if (!STATE.quranAudio) {
    initAudioElements();
  } else {
    STATE.quranAudio.pause();
  }

  const reciter = STATE.currentReciter || ALL_RECITERS_DATA[0];
  // الترقيم الثلاثي الصارم: 001.mp3 إلى 114.mp3
  const paddedNum = surahNumber.toString().padStart(3, '0');
  const mode = STATE.currentMode;

  // إعادة ضبط مؤشرات وقت المشغل فوراً لتفادي التوقف الوهمي عند 0:00
  const curEl = document.getElementById('hud-time-current');
  if (curEl) curEl.textContent = '0:00';
  const totEl = document.getElementById('hud-time-total');
  if (totEl) totEl.textContent = '--:--';
  const progEl = document.getElementById('hud-progress');
  if (progEl) progEl.value = 0;

  const chain = [];

  if (mode === 'mojawwad') {
    // ─── سيرفرات المجود الرسمية المباشرة ───
    if (reciter.serverMojawwad) chain.push(`${reciter.serverMojawwad}${paddedNum}.mp3`);

    if (reciter.id === 'abdulbasit') {
      chain.push(`https://server7.mp3quran.net/basit_mjwd/${paddedNum}.mp3`);
      chain.push(`https://cdn.mp3quran.net/audio/abdulbasit-abdulsamad/r1/${paddedNum}.mp3`);
    } else if (reciter.id === 'minshawi') {
      chain.push(`https://server10.mp3quran.net/minsh_mjwd/${paddedNum}.mp3`);
      chain.push(`https://cdn.mp3quran.net/audio/muhammad-minshawi/r2/${paddedNum}.mp3`);
    } else if (reciter.id === 'hussary') {
      chain.push(`https://server13.mp3quran.net/husr_mjwd/${paddedNum}.mp3`);
      chain.push(`https://cdn.mp3quran.net/audio/mahmoud-husary/r2/${paddedNum}.mp3`);
    } else if (reciter.id === 'mustafa') {
      chain.push(`https://server8.mp3quran.net/mustafa/${paddedNum}.mp3`);
    } else if (reciter.id === 'rifaat') {
      chain.push(`https://cdn.mp3quran.net/audio/muhammad-refaat/r1/${paddedNum}.mp3`);
      chain.push(`https://server14.mp3quran.net/refat/${paddedNum}.mp3`);
    } else if (reciter.id === 'bahtimi') {
      chain.push(`https://server10.mp3quran.net/bahtimi/${paddedNum}.mp3`);
    } else if (reciter.id === 'banna') {
      chain.push(`https://server8.mp3quran.net/bna_mjwd/${paddedNum}.mp3`);
    } else if (reciter.id === 'tablawi') {
      chain.push(`https://server12.mp3quran.net/tblawi/${paddedNum}.mp3`);
    }

    chain.push(`https://server10.mp3quran.net/minsh_mjwd/${paddedNum}.mp3`);
    chain.push(`https://server7.mp3quran.net/basit_mjwd/${paddedNum}.mp3`);
  } else {
    // ─── سيرفرات المرتل الرسمية المباشرة ───
    if (reciter.serverMurattal) {
      chain.push(`${reciter.serverMurattal}${paddedNum}.mp3`);
    }
    if (reciter.id === 'rifaat') {
      chain.push(`https://cdn.mp3quran.net/audio/muhammad-refaat/r1/${paddedNum}.mp3`);
      chain.push(`https://server14.mp3quran.net/refat/${paddedNum}.mp3`);
    }

    chain.push(`https://server13.mp3quran.net/husr/${paddedNum}.mp3`);
    chain.push(`https://server10.mp3quran.net/minsh/${paddedNum}.mp3`);
    chain.push(`https://server7.mp3quran.net/basit/${paddedNum}.mp3`);
    chain.push(`https://server8.mp3quran.net/mustafa/${paddedNum}.mp3`);
    chain.push(`https://server8.mp3quran.net/afs/${paddedNum}.mp3`);
  }

  STATE.audioFallbackChain = [...new Set(chain.filter(Boolean))];
  STATE.audioFallbackIndex = 0;

  STATE.quranAudio.preload = 'metadata';
  STATE.quranAudio.src = STATE.audioFallbackChain[0];
  STATE.quranAudio.load();

  fetchWordTimings(surahNumber, reciter);
}

async function fetchWordTimings(surahNumber, reciter) {
  STATE.wordSegments = [];
  try {
    const qdcReciterId = 7; // مشاري العفاسي افتراضياً لتوقيتات الكلمات
    const res = await fetch(`https://api.quran.com/api/v4/chapter_recitations/${qdcReciterId}/${surahNumber}`);
    const data = await res.json();
    if (data.audio_file && data.audio_file.timestamps) {
      STATE.wordSegments = data.audio_file.timestamps;
    }
  } catch (e) {
    // التزامن التقديري سيعمل تلقائياً
  }
}

function toggleHudPlay() {
  if (!STATE.quranAudio) return;
  if (!STATE.quranAudio.src || STATE.quranAudio.src === window.location.href) {
    loadSurahAudio(STATE.currentSurahNumber || 1);
  }

  if (STATE.quranAudio.paused) {
    if (STATE.globalAudio && !STATE.globalAudio.paused) STATE.globalAudio.pause();
    STATE.quranAudio.play().then(() => {
      if (STATE.quranAudio.duration && !isNaN(STATE.quranAudio.duration) && STATE.quranAudio.duration !== Infinity) {
        const totEl = document.getElementById('hud-time-total');
        if (totEl) totEl.textContent = formatAudioTime(STATE.quranAudio.duration);
      }
    }).catch(console.warn);
  } else {
    STATE.quranAudio.pause();
  }
}

function updateHudPlayBtn(isPlaying) {
  const btn = document.getElementById('hud-main-play-btn');
  if (btn) btn.innerHTML = isPlaying ? '⏸' : '▶';
}

function onQuranAudioTimeUpdate() {
  if (!STATE.quranAudio || isNaN(STATE.quranAudio.duration)) return;

  const curr = STATE.quranAudio.currentTime;
  const dur = STATE.quranAudio.duration;

  const curEl = document.getElementById('hud-time-current');
  if (curEl) curEl.textContent = formatAudioTime(curr);

  const totEl = document.getElementById('hud-time-total');
  if (totEl) totEl.textContent = formatAudioTime(dur);

  const progEl = document.getElementById('hud-progress');
  if (progEl && dur > 0) {
    progEl.value = (curr / dur) * 100;
  }

  syncActiveWordAtTime(curr, dur);
}

function syncActiveWordAtTime(currentTimeSec, totalDurationSec) {
  const currentMs = currentTimeSec * 1000;

  if (STATE.wordSegments && STATE.wordSegments.length > 0) {
    for (const seg of STATE.wordSegments) {
      if (currentMs >= seg.timestamp_from && currentMs <= seg.timestamp_to) {
        const ayahNum = parseInt(seg.verse_key.split(':')[1]);
        highlightActiveAyah(ayahNum);

        if (seg.segments && seg.segments.length > 0) {
          for (const s of seg.segments) {
            const wIdx = s[0];
            const wStart = s[1];
            const wEnd = s[2];
            if (currentMs >= wStart && currentMs <= wEnd) {
              highlightActiveWord(ayahNum, wIdx);
              return;
            }
          }
        }
        return;
      }
    }
  }

  const verses = document.querySelectorAll('.verse');
  if (verses.length === 0 || totalDurationSec <= 0) return;

  const progressRatio = currentTimeSec / totalDurationSec;
  const estimatedAyahIdx = Math.min(verses.length - 1, Math.floor(progressRatio * verses.length));
  const activeAyahEl = verses[estimatedAyahIdx];

  if (activeAyahEl) {
    const ayahNum = parseInt(activeAyahEl.dataset.verse);
    highlightActiveAyah(ayahNum);

    const wordsInAyah = activeAyahEl.querySelectorAll('.quran-word');
    if (wordsInAyah.length > 0) {
      const ayahRatio = (progressRatio * verses.length) - estimatedAyahIdx;
      const wordIdx = Math.min(wordsInAyah.length - 1, Math.floor(ayahRatio * wordsInAyah.length));
      highlightActiveWord(ayahNum, wordIdx);
    }
  }
}

function highlightActiveWord(ayahNum, wordIdx) {
  document.querySelectorAll('.quran-word.active-word').forEach(el => el.classList.remove('active-word'));
  const wordEl = document.getElementById(`word-${ayahNum}-${wordIdx}`);
  if (wordEl) wordEl.classList.add('active-word');
}

function highlightActiveAyah(ayahNum) {
  document.querySelectorAll('.verse.active').forEach(v => v.classList.remove('active'));
  const verseEl = document.getElementById(`verse-${ayahNum}`);
  if (verseEl) {
    verseEl.classList.add('active');
    verseEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function onWordClicked(ayahNum, wordIdx) {
  highlightActiveAyah(ayahNum);
  highlightActiveWord(ayahNum, wordIdx);
  playAyahByNumber(ayahNum);
}

function playAyahByNumber(ayahNum) {
  highlightActiveAyah(ayahNum);

  if (STATE.wordSegments && STATE.wordSegments.length > 0) {
    const seg = STATE.wordSegments.find(s => s.verse_key === `${STATE.currentSurahNumber}:${ayahNum}`);
    if (seg && STATE.quranAudio) {
      STATE.quranAudio.currentTime = seg.timestamp_from / 1000;
      if (STATE.quranAudio.paused) STATE.quranAudio.play();
      return;
    }
  }

  const surah = SURAHS_LIST.find(s => s.number === STATE.currentSurahNumber);
  if (surah && STATE.quranAudio && STATE.quranAudio.duration) {
    const ratio = (ayahNum - 1) / surah.ayahCount;
    STATE.quranAudio.currentTime = ratio * STATE.quranAudio.duration;
    if (STATE.quranAudio.paused) STATE.quranAudio.play();
  }
}

function onQuranAyahEnded() {
  updateHudPlayBtn(false);
  if (STATE.currentSurahNumber < 114) {
    loadSurah(STATE.currentSurahNumber + 1);
  }
}

function onHudSeek(val) {
  if (STATE.quranAudio && STATE.quranAudio.duration) {
    STATE.quranAudio.currentTime = (val / 100) * STATE.quranAudio.duration;
  }
}

function seekAudioRelative(seconds) {
  if (STATE.quranAudio) {
    STATE.quranAudio.currentTime = Math.max(0, Math.min(STATE.quranAudio.duration || 0, STATE.quranAudio.currentTime + seconds));
  }
}

function playPrevAyah() {
  const currentActive = document.querySelector('.verse.active');
  const curNum = currentActive ? parseInt(currentActive.dataset.verse) : 1;
  if (curNum > 1) {
    playAyahByNumber(curNum - 1);
  }
}

function playNextAyah() {
  const currentActive = document.querySelector('.verse.active');
  const curNum = currentActive ? parseInt(currentActive.dataset.verse) : 1;
  const surah = SURAHS_LIST.find(s => s.number === STATE.currentSurahNumber);
  if (surah && curNum < surah.ayahCount) {
    playAyahByNumber(curNum + 1);
  }
}

// ═══════════════════════════════════════════════════════════════
// 10. نظام علامة الختمة (Bookmark System)
// ═══════════════════════════════════════════════════════════════
function initBookmarkSystem() {
  updateBookmarkDisplay();
}

function updateBookmarkDisplay() {
  const badge = document.getElementById('bookmark-status-text');
  if (!badge) return;

  if (STATE.bookmark && STATE.bookmark.surahNumber) {
    const surah = SURAHS_LIST.find(s => s.number === STATE.bookmark.surahNumber);
    const surahName = surah ? surah.name : STATE.bookmark.surahNumber;
    badge.textContent = `سورة ${surahName} • الآية ${toArabicDigits(STATE.bookmark.ayahNumber || 1)}`;
  } else {
    badge.textContent = 'لا توجد علامة محفوظة بعد';
  }
}

function saveCurrentBookmark() {
  const currentActive = document.querySelector('.verse.active');
  const ayahNum = currentActive ? parseInt(currentActive.dataset.verse) : 1;
  const surah = SURAHS_LIST.find(s => s.number === STATE.currentSurahNumber);
  const surahName = surah ? surah.name : STATE.currentSurahNumber;

  STATE.bookmark = {
    surahNumber: STATE.currentSurahNumber,
    surahName: surahName,
    ayahNumber: ayahNum,
    mode: STATE.currentMode,
    reciterId: STATE.currentReciter?.id || 'hussary',
    savedAt: new Date().toISOString()
  };

  savePersistedData('quran_bookmark', STATE.bookmark);
  updateBookmarkDisplay();

  if (navigator.vibrate) navigator.vibrate(40);
  showToast(`تم حفظ علامة التوقف: سورة ${surahName} - الآية ${toArabicDigits(ayahNum)} 🔖`);
}

function jumpToSavedBookmark() {
  if (!STATE.bookmark || !STATE.bookmark.surahNumber) {
    showToast('لا توجد علامة ختمة محفوظة بعد 🔖');
    return;
  }

  const { surahNumber, ayahNumber, surahName, mode, reciterId } = STATE.bookmark;

  if (STATE.currentPage !== 'reader') {
    navigateTo('reader');
  }

  if (mode && mode !== STATE.currentMode) {
    switchQuranMode(mode);
  }

  if (reciterId && ALL_RECITERS_DATA.some(r => r.id === reciterId)) {
    const reciter = ALL_RECITERS_DATA.find(r => r.id === reciterId);
    if (reciter) STATE.currentReciter = reciter;
  }

  loadSurah(surahNumber).then(() => {
    setTimeout(() => {
      playAyahByNumber(ayahNumber || 1);
      showToast(`تم الانتقال إلى علامة الختمة: سورة ${surahName} - الآية ${toArabicDigits(ayahNumber || 1)} 📖`);
    }, 600);
  });
}

// ═══════════════════════════════════════════════════════════════
// 11. مؤقت النوم والإيقاف التلقائي (Sleep Timer)
// ═══════════════════════════════════════════════════════════════
function setSleepTimer(minutes) {
  if (STATE.sleepTimer.intervalId) {
    clearInterval(STATE.sleepTimer.intervalId);
    STATE.sleepTimer.intervalId = null;
  }

  // مزامنة القوائم المنسدلة في المصحف والإذاعة
  const readerSelect = document.getElementById('reader-sleep-timer-select');
  if (readerSelect) readerSelect.value = minutes;
  const radioSelect = document.getElementById('radio-sleep-timer-select');
  if (radioSelect) radioSelect.value = minutes;

  const readerBadge = document.getElementById('reader-sleep-timer-badge');
  const radioCountdown = document.getElementById('radio-timer-countdown-text');

  if (minutes <= 0) {
    STATE.sleepTimer.minutes = 0;
    STATE.sleepTimer.targetTimestamp = null;
    if (readerBadge) readerBadge.textContent = 'متوقف';
    if (radioCountdown) radioCountdown.textContent = '';
    showToast('تم إلغاء مؤقت النوم ⏱️');
    return;
  }

  STATE.sleepTimer.minutes = minutes;
  STATE.sleepTimer.targetTimestamp = Date.now() + (minutes * 60 * 1000);

  updateSleepTimerBadges();

  STATE.sleepTimer.intervalId = setInterval(() => {
    const diff = STATE.sleepTimer.targetTimestamp - Date.now();

    if (diff <= 0) {
      clearInterval(STATE.sleepTimer.intervalId);
      STATE.sleepTimer.intervalId = null;
      STATE.sleepTimer.minutes = 0;

      // إيقاف كافة الأصوات فوراً
      if (STATE.quranAudio && !STATE.quranAudio.paused) {
        STATE.quranAudio.pause();
      }
      if (STATE.globalAudio && !STATE.globalAudio.paused) {
        STATE.globalAudio.pause();
      }
      updateCairoRadioUI(false);
      updateHudPlayBtn(false);
      updateFloatPlayBtn(false);

      if (readerBadge) readerBadge.textContent = 'متوقف';
      if (radioCountdown) radioCountdown.textContent = '';
      if (readerSelect) readerSelect.value = 0;
      if (radioSelect) radioSelect.value = 0;

      showToast('🌙 تم إيقاف الصوت تلقائياً بواسطة مؤقت النوم');
      return;
    }

    updateSleepTimerBadges();
  }, 1000);

  showToast(`تم تفعيل مؤقت النوم: إيقاف بعد ${minutes} دقيقة ⏱️`);
}

function updateSleepTimerBadges() {
  if (!STATE.sleepTimer.targetTimestamp) return;

  const diff = Math.max(0, STATE.sleepTimer.targetTimestamp - Date.now());
  const mins = Math.floor(diff / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);
  const timeText = `${mins}:${secs.toString().padStart(2, '0')}`;

  const readerBadge = document.getElementById('reader-sleep-timer-badge');
  if (readerBadge) readerBadge.textContent = timeText;

  const radioCountdown = document.getElementById('radio-timer-countdown-text');
  if (radioCountdown) radioCountdown.textContent = `(متبقي: ${timeText})`;
}

// ═══════════════════════════════════════════════════════════════
// 12. إذاعة القرآن الكريم من القاهرة (بث مباشر رسمي وحصري)
// ═══════════════════════════════════════════════════════════════
const CAIRO_RADIO_URLS = [
  "https://stream.radiojar.com/8s5u5tpdtwzuv",
  "https://n08.radiojar.com/8s5u5tpdtwzuv",
  "https://n06.radiojar.com/8s5u5tpdtwzuv",
  "https://n0c.radiojar.com/8s5u5tpdtwzuv",
  "http://stream.radiojar.com/8s5u5tpdtwzuv",
  "http://n08.radiojar.com/8s5u5tpdtwzuv"
];
let cairoRadioFallbackIndex = 0;

function initRadioSection() {
  updateCairoRadioUI(false);
}

function toggleCairoRadio() {
  if (!STATE.globalAudio) initAudioElements();

  if (STATE.isCairoRadioPlaying && !STATE.globalAudio.paused) {
    // إيقاف الإذاعة
    STATE.globalAudio.pause();
    STATE.isCairoRadioPlaying = false;
    updateCairoRadioUI(false);
    showToast('تم إيقاف إذاعة القرآن الكريم 📻');
  } else {
    // إيقاف المصحف إن كان يعمل
    if (STATE.quranAudio && !STATE.quranAudio.paused) {
      STATE.quranAudio.pause();
      updateHudPlayBtn(false);
    }

    cairoRadioFallbackIndex = 0;
    STATE.isCairoRadioPlaying = true;
    showFloatingPlayerForRadio();

    // إظهار حالة جاري الاتصال على الزر
    const label = document.getElementById('cairo-play-label');
    const icon = document.getElementById('cairo-play-icon');
    if (label) label.textContent = 'جاري الاتصال بالبث...';
    if (icon) icon.textContent = '⏳';

    const startRadio = (idx) => {
      if (idx >= CAIRO_RADIO_URLS.length) {
        showToast('تعذر الاتصال بسيرفر إذاعة القرآن الكريم حالياً ⚠️');
        updateCairoRadioUI(false);
        STATE.isCairoRadioPlaying = false;
        return;
      }
      cairoRadioFallbackIndex = idx;
      STATE.globalAudio.src = CAIRO_RADIO_URLS[idx];
      STATE.globalAudio.load();
      STATE.globalAudio.play().then(() => {
        updateCairoRadioUI(true);
        showToast('📻 البث المباشر لإذاعة القرآن الكريم من القاهرة يعمل الآن');
      }).catch(err => {
        console.warn(`Radio play failed on URL #${idx}, trying backup:`, err);
        startRadio(idx + 1);
      });
    };

    startRadio(0);
  }
}

function updateCairoRadioUI(isPlaying) {
  const icon = document.getElementById('cairo-play-icon');
  const label = document.getElementById('cairo-play-label');
  const eq = document.getElementById('cairo-equalizer');

  if (icon) icon.textContent = isPlaying ? '⏸' : '▶';
  if (label) label.textContent = isPlaying ? 'إيقاف البث الحي' : 'تشغيل البث الحي';
  if (eq) eq.style.display = isPlaying ? 'flex' : 'none';
}

function showFloatingPlayerForRadio() {
  const floatPlayer = document.getElementById('global-floating-player');
  if (!floatPlayer) return;

  floatPlayer.style.display = 'flex';
  const titleEl = document.getElementById('float-player-title');
  if (titleEl) titleEl.textContent = 'إذاعة القرآن الكريم من القاهرة';
  const subEl = document.getElementById('float-player-sub');
  if (subEl) subEl.textContent = 'البث المباشر الرسمي 24 ساعة 🔴';
  const iconEl = document.getElementById('float-player-icon');
  if (iconEl) iconEl.textContent = '📻';
  updateFloatPlayBtn(true);
}

// ═══════════════════════════════════════════════════════════════
// 13. المشغل الصوتي العائم العام
// ═══════════════════════════════════════════════════════════════
function playMediaTrack(url, title, subtitle) {
  if (!STATE.globalAudio) initAudioElements();

  if (STATE.quranAudio && !STATE.quranAudio.paused) {
    STATE.quranAudio.pause();
    updateHudPlayBtn(false);
  }

  STATE.isCairoRadioPlaying = false;
  updateCairoRadioUI(false);

  STATE.globalAudio.preload = 'metadata';
  STATE.globalAudio.src = url;
  STATE.globalAudio.load();
  STATE.globalAudio.play().catch(console.warn);

  const floatPlayer = document.getElementById('global-floating-player');
  if (floatPlayer) floatPlayer.style.display = 'flex';

  const titleEl = document.getElementById('float-player-title');
  if (titleEl) titleEl.textContent = title;

  const subEl = document.getElementById('float-player-sub');
  if (subEl) subEl.textContent = subtitle;

  const iconEl = document.getElementById('float-player-icon');
  if (iconEl) iconEl.textContent = '🎙️';

  updateFloatPlayBtn(true);
}

function toggleGlobalAudioPlay() {
  if (!STATE.globalAudio || !STATE.globalAudio.src) return;

  if (STATE.globalAudio.paused) {
    STATE.globalAudio.play().then(() => {
      updateFloatPlayBtn(true);
      if (STATE.isCairoRadioPlaying) updateCairoRadioUI(true);
    }).catch(console.warn);
  } else {
    STATE.globalAudio.pause();
    updateFloatPlayBtn(false);
    if (STATE.isCairoRadioPlaying) updateCairoRadioUI(false);
  }
}

function updateFloatPlayBtn(isPlaying) {
  const btn = document.getElementById('float-play-toggle-btn');
  if (btn) btn.innerHTML = isPlaying ? '⏸' : '▶';
}

function closeGlobalAudioPlayer() {
  if (STATE.globalAudio) {
    STATE.globalAudio.pause();
    STATE.globalAudio.src = '';
  }
  STATE.isCairoRadioPlaying = false;
  updateCairoRadioUI(false);
  const floatPlayer = document.getElementById('global-floating-player');
  if (floatPlayer) floatPlayer.style.display = 'none';
}

// ═══════════════════════════════════════════════════════════════
// 14. التواشيح والابتهالات الدينية الشاملة (صفحة واحدة متصلة)
// ═══════════════════════════════════════════════════════════════
function initRareAndIbtehalat() {
  renderIbtehalatList('all');
}

function renderIbtehalatList(filterCat) {
  const container = document.getElementById('ibtehalat-list');
  if (!container || typeof IBTEHALAT_DATA === 'undefined') return;

  const normalizedCat = (filterCat === 'tobar') ? 'tobour' : filterCat;
  const filtered = (!normalizedCat || normalizedCat === 'all') ?
    IBTEHALAT_DATA : IBTEHALAT_DATA.filter(i => i.category === normalizedCat);

  if (filtered.length === 0) {
    container.innerHTML = `<div class="card" style="text-align: center; color: var(--text-secondary); padding: 24px;">لا توجد تسجيلات متوفرة في هذا القسم حالياً.</div>`;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const safeTitle = (item.title || '').replace(/'/g, "\\'");
    const safeReciter = (item.reciter || '').replace(/'/g, "\\'");
    return `
      <div class="media-audio-card" onclick="playMediaTrack('${item.url}', '${safeTitle}', '${safeReciter}')">
        <div style="flex: 1; padding-left: 12px; overflow: hidden;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <span style="font-weight: 700; color: #fff; font-size: 0.95rem; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">${item.title}</span>
            ${item.badge ? `<span style="font-size: 0.7rem; padding: 2px 7px; background: rgba(212,175,55,0.15); color: var(--gold-primary); border-radius: 4px; border: 1px solid rgba(212,175,55,0.3); flex-shrink: 0;">${item.badge}</span>` : ''}
          </div>
          <div style="font-size: 0.82rem; color: var(--gold-light);">${item.reciter}</div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
            <span style="font-size: 0.78rem; color: var(--text-secondary); white-space: nowrap; text-overflow: ellipsis; overflow: hidden; max-width: 230px;">${item.desc || ''}</span>
            ${item.duration ? `<span style="font-size: 0.75rem; color: var(--gold-light); direction: ltr;">⏱ ${item.duration}</span>` : ''}
          </div>
        </div>
        <div class="media-play-circle" aria-label="استماع">▶</div>
      </div>
    `;
  }).join('');
}

function filterIbtehalat(category) {
  document.querySelectorAll('#page-rare-ibtehalat .chip-btn').forEach(btn => {
    const onclickAttr = btn.getAttribute('onclick') || '';
    btn.classList.toggle('active', onclickAttr.includes(`'${category}'`));
  });
  renderIbtehalatList(category);
}

// ═══════════════════════════════════════════════════════════════
// 15. موسوعة كبار القراء ومحرك البحث الفوري
// ═══════════════════════════════════════════════════════════════
function initRecitersEncyclopedia() {
  renderRecitersGrid(ALL_RECITERS_DATA);
}

function renderRecitersGrid(list) {
  const container = document.getElementById('reciters-list-container');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<div class="card" style="text-align: center; color: var(--text-muted); padding: 20px;">لم يتم العثور على قراء بهذا الاسم</div>`;
    return;
  }

  container.innerHTML = list.map(r => `
    <div class="card reciter-card" onclick="openReciterInReader('${r.id}')">
      <div>
        <div class="reciter-name-bold">${r.name}</div>
        <div class="reciter-subtitle">${r.info}</div>
      </div>
      <button class="action-btn action-btn-primary" style="padding: 6px 14px; font-size: 0.85rem;">استماع 📖</button>
    </div>
  `).join('');
}

function filterRecitersCategory(category) {
  document.querySelectorAll('#page-reciters .chip-btn').forEach(btn => {
    const onclickAttr = btn.getAttribute('onclick') || '';
    btn.classList.toggle('active', onclickAttr.includes(`'${category}'`));
  });

  const query = (document.getElementById('reciters-search-input')?.value || '').toLowerCase().trim();
  let list = category === 'all' ? ALL_RECITERS_DATA : ALL_RECITERS_DATA.filter(r => r.category === category);

  if (query) {
    list = list.filter(r => r.name.toLowerCase().includes(query) || r.info.toLowerCase().includes(query));
  }

  renderRecitersGrid(list);
}

function searchReciters(query) {
  const clean = query.toLowerCase().trim();
  let list = ALL_RECITERS_DATA;

  if (clean) {
    list = list.filter(r => r.name.toLowerCase().includes(clean) || r.info.toLowerCase().includes(clean));
  }

  renderRecitersGrid(list);
}

function openReciterInReader(reciterId) {
  const reciter = ALL_RECITERS_DATA.find(r => r.id === reciterId);
  if (!reciter) return;

  if (reciter.supportsMurattal === false && STATE.currentMode === 'murattal') {
    STATE.currentMode = 'mojawwad';
  } else if (reciter.supportsMojawwad === false && STATE.currentMode === 'mojawwad') {
    STATE.currentMode = 'murattal';
  }

  const btnMurattal = document.getElementById('btn-mode-murattal');
  const btnMojawwad = document.getElementById('btn-mode-mojawwad');
  if (btnMurattal) btnMurattal.classList.toggle('active', STATE.currentMode === 'murattal');
  if (btnMojawwad) btnMojawwad.classList.toggle('active', STATE.currentMode === 'mojawwad');

  STATE.currentReciter = reciter;
  populateReaderReciters();
  const select = document.getElementById('reader-reciter-select');
  if (select) select.value = reciterId;

  updateReaderHudReciterDisplay();

  navigateTo('reader');
  loadSurahAudio(STATE.currentSurahNumber);
  showToast(`تم اختيار القارئ: ${reciter.name}`);
}

// ═══════════════════════════════════════════════════════════════
// 16. حصن المسلم: الأذكار والعداد الرقمي
// ═══════════════════════════════════════════════════════════════
function initAzkarSection() {}

function openAzkarCategory(catKey) {
  if (catKey === 'sleep') catKey = 'sleep_wake';
  if (catKey === 'afterPrayer') catKey = 'post_prayer';
  if (catKey === 'general') catKey = 'quranic_duas';
  if (catKey === 'prophetic') catKey = 'prophetic_duas';
  if (catKey === 'mosque_wudhu') catKey = 'masjid_wudhu';

  const cat = AZKAR_DATA[catKey];
  if (!cat) return;

  navigateTo('azkar-detail');

  const titleEl = document.getElementById('azkar-detail-title');
  if (titleEl) titleEl.textContent = cat.title;

  const iconEl = document.getElementById('azkar-detail-icon');
  if (iconEl) iconEl.textContent = cat.icon;

  const container = document.getElementById('azkar-items-container');
  if (!container) return;

  const saved = JSON.parse(localStorage.getItem(`zikr_progress_${catKey}`) || '{}');

  container.innerHTML = cat.items.map((item, idx) => {
    const current = saved[idx] || 0;
    const remaining = Math.max(0, item.count - current);
    const isDone = remaining === 0;

    return `
      <div class="card azkar-item-card ${isDone ? 'gold-border' : ''}" id="zikr-card-${catKey}-${idx}">
        <div class="zikr-text-large">${item.text}</div>
        ${item.reward ? `<div style="font-size: 0.85rem; color: var(--gold-light); margin-bottom: 12px;">⭐ ${item.reward}</div>` : ''}
        <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-dark); padding-top: 12px;">
          <span style="font-size: 0.85rem; color: var(--text-secondary);">الهدف: ${item.count} مرات</span>
          <button class="zikr-counter-btn" id="zikr-btn-${catKey}-${idx}" onclick="tapZikrItem('${catKey}', ${idx}, ${item.count})" ${isDone ? 'disabled' : ''}>
            ${isDone ? '✓ تم' : remaining}
          </button>
        </div>
      </div>
    `;
  }).join('') + `
    <div style="text-align: center; margin: 24px 0;">
      <button class="action-btn action-btn-secondary" onclick="resetZikrCategory('${catKey}')">🔄 إعادة تعيين عدادات هذا القسم</button>
    </div>
  `;
}

function tapZikrItem(catKey, idx, target) {
  const saved = JSON.parse(localStorage.getItem(`zikr_progress_${catKey}`) || '{}');
  const current = (saved[idx] || 0) + 1;
  saved[idx] = current;
  localStorage.setItem(`zikr_progress_${catKey}`, JSON.stringify(saved));

  const remaining = Math.max(0, target - current);
  const btn = document.getElementById(`zikr-btn-${catKey}-${idx}`);

  if (remaining === 0) {
    if (btn) {
      btn.textContent = '✓ تم';
      btn.disabled = true;
    }
    const card = document.getElementById(`zikr-card-${catKey}-${idx}`);
    if (card) card.classList.add('gold-border');

    if (navigator.vibrate) navigator.vibrate([70, 40, 70]);
    showToast('تقبل الله طاعتكم 🤲');
  } else {
    if (btn) btn.textContent = remaining;
    if (navigator.vibrate) navigator.vibrate(30);
  }
}

function resetZikrCategory(catKey) {
  localStorage.removeItem(`zikr_progress_${catKey}`);
  openAzkarCategory(catKey);
  showToast('تمت إعادة ضبط العدادات 🔄');
}

// ═══════════════════════════════════════════════════════════════
// 17. قصص الأنبياء وقصص الأطفال وقارئ الصوت الآلي (Speech Synthesis)
// ═══════════════════════════════════════════════════════════════
function initStoriesSection() {
  renderStoriesList('prophets');
}

function switchStoriesTab(tab) {
  document.getElementById('tab-btn-prophets').classList.toggle('active', tab === 'prophets');
  document.getElementById('tab-btn-children').classList.toggle('active', tab === 'children');
  renderStoriesList(tab);
}

function renderStoriesList(type) {
  const container = document.getElementById('stories-list-container');
  if (!container || typeof STORIES_DATA === 'undefined') return;

  const list = STORIES_DATA[type] || [];
  container.innerHTML = list.map(story => `
    <div class="card" style="margin-bottom: 12px; padding: 18px;">
      <h3 style="color: var(--gold-light); font-size: 1.15rem; margin-bottom: 6px;">${story.title}</h3>
      <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 14px;">${story.summary}</p>
      <button class="action-btn action-btn-primary" onclick="openStoryDetail('${type}', '${story.id}')">
        <span>📖</span> قراءة واستماع صوتي
      </button>
    </div>
  `).join('');
}

function openStoryDetail(type, storyId) {
  const list = STORIES_DATA[type] || [];
  const story = list.find(s => s.id === storyId);
  if (!story) return;

  stopStorySpeech();
  navigateTo('story-detail');

  const heading = document.getElementById('story-detail-heading');
  if (heading) heading.textContent = story.title;

  const textEl = document.getElementById('story-detail-text');
  if (textEl) {
    textEl.innerHTML = story.content.split('\n\n').map(p =>
      `<p style="margin-bottom: 16px;">${p}</p>`
    ).join('');
  }

  window._currentStoryContent = story.content;
}

function toggleStorySpeech() {
  if (!window._currentStoryContent) return;

  if (STATE.isSpeechPlaying) {
    stopStorySpeech();
    return;
  }

  if (!('speechSynthesis' in window)) {
    showToast('خاصية القراءة الصوتية غير مدعومة في متصفحك');
    return;
  }

  window.speechSynthesis.cancel();

  if (STATE.quranAudio) STATE.quranAudio.pause();
  if (STATE.globalAudio) STATE.globalAudio.pause();

  const utterance = new SpeechSynthesisUtterance(window._currentStoryContent);
  utterance.lang = 'ar-SA';
  utterance.rate = 0.88;
  utterance.pitch = 0.85;

  const voices = window.speechSynthesis.getVoices();
  const arabicVoice = voices.find(v => v.lang.startsWith('ar'));
  if (arabicVoice) utterance.voice = arabicVoice;

  utterance.onstart = () => {
    STATE.isSpeechPlaying = true;
    const lbl = document.getElementById('speech-btn-label');
    if (lbl) lbl.textContent = 'إيقاف مؤقت';
    showToast('جاري قراءة القصة بصوت واضح 🎙️');
  };

  utterance.onend = () => {
    STATE.isSpeechPlaying = false;
    const lbl = document.getElementById('speech-btn-label');
    if (lbl) lbl.textContent = 'استماع';
  };

  utterance.onerror = () => {
    STATE.isSpeechPlaying = false;
    const lbl = document.getElementById('speech-btn-label');
    if (lbl) lbl.textContent = 'استماع';
  };

  STATE.speechUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function stopStorySpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  STATE.isSpeechPlaying = false;
  const lbl = document.getElementById('speech-btn-label');
  if (lbl) lbl.textContent = 'استماع';
}

// ═══════════════════════════════════════════════════════════════
// 18. السبحة الإلكترونية الذكية التفاعلية مع الاهتزاز والعداد اليومي
// ═══════════════════════════════════════════════════════════════
function initTasbeehSection() {
  const select = document.getElementById('tasbeeh-dhikr-select');
  if (select && typeof DHIKR_TYPES !== 'undefined') {
    select.innerHTML = DHIKR_TYPES.map(d =>
      `<option value="${d.id}" ${d.id === STATE.tasbeeh.dhikrId ? 'selected' : ''}>${d.text} (${d.target})</option>`
    ).join('');
  }

  updateTasbeehUI();
}

function onTasbeehDhikrChange(dhikrId) {
  STATE.tasbeeh.dhikrId = dhikrId;
  STATE.tasbeeh.count = 0;
  savePersistedData('app_tasbeeh_data', STATE.tasbeeh);
  updateTasbeehUI();
}

function tapTasbeehRing() {
  const dhikr = DHIKR_TYPES.find(d => d.id === STATE.tasbeeh.dhikrId);
  const target = dhikr ? dhikr.target : 33;

  STATE.tasbeeh.count++;
  STATE.tasbeeh.total++;
  STATE.tasbeeh.dailyTotal = (STATE.tasbeeh.dailyTotal || 0) + 1;
  STATE.tasbeeh.lastDate = new Date().toISOString().slice(0, 10);

  if (STATE.tasbeeh.count >= target) {
    if (navigator.vibrate) navigator.vibrate([80, 50, 80]);
    showToast(`ما شاء الله! أتممت ورد ${dhikr.text} (${target}) 🤲`);
    STATE.tasbeeh.count = 0;
  } else {
    if (navigator.vibrate) navigator.vibrate(30);
  }

  savePersistedData('app_tasbeeh_data', STATE.tasbeeh);
  updateTasbeehUI();
}

function resetTasbeehCounter() {
  STATE.tasbeeh.count = 0;
  savePersistedData('app_tasbeeh_data', STATE.tasbeeh);
  updateTasbeehUI();
  showToast('تم تصفير عداد الدورة الحالية 🔄');
}

function resetTasbeehDailyTotal() {
  STATE.tasbeeh.dailyTotal = 0;
  savePersistedData('app_tasbeeh_data', STATE.tasbeeh);
  updateTasbeehUI();
  showToast('تم تصفير مجموع التسبيحات اليومية 🔄');
}

function updateTasbeehUI() {
  const countEl = document.getElementById('tasbeeh-count-display');
  if (countEl) countEl.textContent = toArabicDigits(STATE.tasbeeh.count);

  const dailyEl = document.getElementById('tasbeeh-daily-display');
  if (dailyEl) dailyEl.textContent = toArabicDigits(STATE.tasbeeh.dailyTotal || 0);

  const dhikr = DHIKR_TYPES.find(d => d.id === STATE.tasbeeh.dhikrId);
  const targetEl = document.getElementById('tasbeeh-target-hint');
  if (targetEl && dhikr) targetEl.textContent = `الهدف: ${toArabicDigits(dhikr.target)}`;
}

// ═══════════════════════════════════════════════════════════════
// 19. نظام التذكير بالصلاة على النبي ﷺ كل ساعتين
// ═══════════════════════════════════════════════════════════════
function setupSalawatReminder() {
  if ('Notification' in window && Notification.permission === 'default') {
    setTimeout(() => {
      Notification.requestPermission().catch(() => {});
    }, 6000);
  }

  setInterval(() => {
    const title = "صلّ على النبي ﷺ";
    const body = "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ ﷺ";

    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, {
        body: body,
        icon: 'icons/icon-192x192.png',
        badge: 'icons/icon-96x96.png'
      });
    } else {
      showToast(`ﷺ ${body}`);
    }
  }, 2 * 60 * 60 * 1000);
}

// ═══════════════════════════════════════════════════════════════
// 20. دوال مساعدة عامة (Utilities)
// ═══════════════════════════════════════════════════════════════
function toArabicDigits(num) {
  if (num === null || num === undefined) return '';
  const digits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return num.toString().replace(/\d/g, d => digits[d]);
}

function formatAudioTime(seconds) {
  if (isNaN(seconds) || seconds === Infinity) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function showToast(msg, duration = 3000) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}
