/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  Service Worker - تطبيق «المجلس: الموسوعة القرآنية والابتهالات»║
 * ║                       الإصدار 2.0                           ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * يتولى هذا الملف:
 * - تخزين الملفات الثابتة (Cache-First)
 * - تخزين طلبات API (Network-First مع Cache Fallback)
 * - إدارة الإشعارات (Push Notifications)
 * - المزامنة الدورية (Periodic Sync)
 * - التحميل في الخلفية (Background Fetch)
 */

// ═══════════════════════════════════════════════════
// 1. أسماء التخزين المؤقت (Cache Names)
// ═══════════════════════════════════════════════════

const CACHE_NAME = 'islamic-app-v3';
const STATIC_CACHE = 'static-v3';
const DYNAMIC_CACHE = 'dynamic-v3';

// ═══════════════════════════════════════════════════
// 2. الملفات الثابتة المطلوب تخزينها عند التثبيت
// ═══════════════════════════════════════════════════

const STATIC_ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/data.js',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  './icons/icon.svg',
];

// خطوط Google المستخدمة في التطبيق
const GOOGLE_FONTS = [
  'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap',
];

// أنماط URL التي لا يجب تخزينها مؤقتاً (صوتيات وراديو)
const NO_CACHE_PATTERNS = [
  /\.mp3$/i,
  /\.ogg$/i,
  /\.wav$/i,
  /streaming\./i,
  /stream\./i,
  /radio\./i,
  /live\./i,
  /mp3quran\.net\/.*\.mp3/i,
  /server\d+\.mp3quran\.net/i,
  /Quran\/.*\.mp3/i,
];

// ═══════════════════════════════════════════════════
// 3. حدث التثبيت (Install Event)
// ═══════════════════════════════════════════════════
/**
 * عند تثبيت الـ Service Worker:
 * - يتم تخزين جميع الملفات الثابتة
 * - يتم تخزين خطوط Google
 * - يتم تخطي الانتظار للتفعيل الفوري
 */
self.addEventListener('install', (event) => {
  console.log('[SW] 📦 جاري التثبيت...');

  event.waitUntil(
    Promise.all([
      // تخزين الملفات الثابتة
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('[SW] ✅ تخزين الملفات الثابتة');
        return cache.addAll(STATIC_ASSETS);
      }),

      // تخزين خطوط Google
      caches.open(CACHE_NAME).then((cache) => {
        console.log('[SW] ✅ تخزين خطوط Google');
        // نحاول تخزين الخطوط ولكن لا نفشل إذا لم نستطع
        return Promise.allSettled(
          GOOGLE_FONTS.map((font) =>
            cache.add(font).catch((err) => {
              console.warn(`[SW] ⚠️ تعذر تخزين الخط: ${font}`, err);
            })
          )
        );
      }),
    ])
      .then(() => {
        console.log('[SW] ✅ اكتمل التثبيت بنجاح');
        // تخطي الانتظار والتفعيل فوراً
        return self.skipWaiting();
      })
      .catch((err) => {
        console.error('[SW] ❌ خطأ أثناء التثبيت:', err);
      })
  );
});

// ═══════════════════════════════════════════════════
// 4. حدث التفعيل (Activate Event)
// ═══════════════════════════════════════════════════
/**
 * عند تفعيل الـ Service Worker:
 * - يتم حذف التخزين المؤقت القديم
 * - يتم التحكم في جميع العملاء (clients)
 */
self.addEventListener('activate', (event) => {
  console.log('[SW] 🔄 جاري التفعيل...');

  // قائمة أسماء التخزين المؤقت المسموح بها
  const allowedCaches = [CACHE_NAME, STATIC_CACHE, DYNAMIC_CACHE];

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // حذف أي تخزين مؤقت غير موجود في القائمة المسموح بها
            if (!allowedCaches.includes(cacheName)) {
              console.log(`[SW] 🗑️ حذف التخزين القديم: ${cacheName}`);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] ✅ التفعيل ناجح - التحكم في جميع العملاء');
        // التحكم في جميع الصفحات المفتوحة فوراً
        return self.clients.claim();
      })
  );
});

// ═══════════════════════════════════════════════════
// 5. حدث الجلب (Fetch Event)
// ═══════════════════════════════════════════════════
/**
 * استراتيجيات التخزين المؤقت:
 *
 * 1. الملفات الثابتة → Cache-First:
 *    يبحث أولاً في التخزين المؤقت، إذا لم يجد يجلب من الشبكة
 *
 * 2. طلبات API → Network-First مع Cache Fallback:
 *    يحاول الجلب من الشبكة أولاً، إذا فشل يستخدم النسخة المخزنة
 *
 * 3. الصوتيات والراديو → Network-Only:
 *    لا يتم تخزينها لأنها ملفات كبيرة أو بث مباشر
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // تجاهل الطلبات غير HTTP/HTTPS
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // ─── التحقق إذا كان الطلب صوتي/راديو (Network-Only) ───
  if (isAudioRequest(url)) {
    // لا نتدخل - نترك المتصفح يتعامل معها مباشرة
    return;
  }

  // ─── طلبات API (Network-First) ───
  if (isApiRequest(url)) {
    event.respondWith(networkFirstStrategy(request));
    return;
  }

  // ─── خطوط Google (Cache-First مع تحديث في الخلفية) ───
  if (isGoogleFontsRequest(url)) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  // ─── الملفات الثابتة (Cache-First) ───
  event.respondWith(cacheFirstStrategy(request));
});

// ═══════════════════════════════════════════════════
// 6. دوال مساعدة لتحديد نوع الطلب
// ═══════════════════════════════════════════════════

/**
 * هل الطلب خاص بالصوتيات أو الراديو؟
 * @param {URL} url - عنوان الطلب
 * @returns {boolean}
 */
function isAudioRequest(url) {
  return NO_CACHE_PATTERNS.some((pattern) => pattern.test(url.href));
}

/**
 * هل الطلب خاص بـ API؟
 * @param {URL} url - عنوان الطلب
 * @returns {boolean}
 */
function isApiRequest(url) {
  return (
    url.hostname.includes('api.alquran.cloud') ||
    url.hostname.includes('api.aladhan.com') ||
    url.hostname.includes('mp3quran.net')
  );
}

/**
 * هل الطلب خاص بخطوط Google؟
 * @param {URL} url - عنوان الطلب
 * @returns {boolean}
 */
function isGoogleFontsRequest(url) {
  return (
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com'
  );
}

// ═══════════════════════════════════════════════════
// 7. استراتيجيات التخزين المؤقت
// ═══════════════════════════════════════════════════

/**
 * استراتيجية Cache-First:
 * يبحث في التخزين المؤقت أولاً، إذا لم يجد يجلب من الشبكة ويخزنه
 *
 * @param {Request} request - الطلب
 * @returns {Promise<Response>} الاستجابة
 */
async function cacheFirstStrategy(request) {
  try {
    // البحث في التخزين المؤقت
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // الجلب من الشبكة
    const networkResponse = await fetch(request);

    // تخزين النسخة الجديدة
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.warn('[SW] ⚠️ فشل الجلب:', request.url);
    // إرجاع صفحة عدم الاتصال
    return offlineFallback(request);
  }
}

/**
 * استراتيجية Network-First مع Cache Fallback:
 * يحاول الجلب من الشبكة أولاً، إذا فشل يستخدم النسخة المخزنة
 *
 * @param {Request} request - الطلب
 * @returns {Promise<Response>} الاستجابة
 */
async function networkFirstStrategy(request) {
  try {
    // محاولة الجلب من الشبكة مع timeout
    const networkResponse = await fetchWithTimeout(request, 8000);

    if (networkResponse.ok) {
      // تخزين الاستجابة الناجحة
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.warn('[SW] 🔄 فشلت الشبكة، جاري البحث في التخزين المؤقت:', request.url);

    // البحث في التخزين المؤقت
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // إرجاع استجابة JSON فارغة لطلبات API
    return new Response(
      JSON.stringify({
        error: true,
        message: 'أنت غير متصل بالإنترنت. يرجى المحاولة لاحقاً.',
        offline: true,
      }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      }
    );
  }
}

/**
 * استراتيجية Stale-While-Revalidate:
 * يرجع النسخة المخزنة فوراً ويحدثها في الخلفية
 *
 * @param {Request} request - الطلب
 * @returns {Promise<Response>} الاستجابة
 */
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);

  // تحديث في الخلفية
  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => {
      // تجاهل الأخطاء - لدينا نسخة مخزنة
    });

  // إرجاع النسخة المخزنة فوراً أو انتظار الشبكة
  return cachedResponse || fetchPromise;
}

/**
 * جلب مع حد زمني (Timeout)
 *
 * @param {Request} request - الطلب
 * @param {number} timeout - الحد الزمني بالميللي ثانية
 * @returns {Promise<Response>} الاستجابة
 */
function fetchWithTimeout(request, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Fetch timeout'));
    }, timeout);

    fetch(request)
      .then((response) => {
        clearTimeout(timer);
        resolve(response);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

/**
 * صفحة عدم الاتصال (Offline Fallback)
 * تُعرض عندما لا يكون هناك اتصال بالإنترنت ولا نسخة مخزنة
 *
 * @param {Request} request - الطلب الأصلي
 * @returns {Response} استجابة HTML لصفحة عدم الاتصال
 */
function offlineFallback(request) {
  // إذا كان الطلب لصفحة HTML
  if (request.headers.get('accept')?.includes('text/html')) {
    return new Response(
      `<!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>غير متصل - التطبيق الإسلامي</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Tajawal', 'Arial', sans-serif;
            background: #1a1a0e;
            color: #e8e0d0;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            text-align: center;
            padding: 20px;
          }
          .offline-container {
            max-width: 400px;
          }
          .offline-icon {
            font-size: 80px;
            margin-bottom: 20px;
            opacity: 0.8;
          }
          h1 {
            color: #d4af37;
            font-size: 24px;
            margin-bottom: 16px;
          }
          p {
            color: #a09880;
            font-size: 16px;
            line-height: 1.8;
            margin-bottom: 24px;
          }
          .retry-btn {
            background: linear-gradient(135deg, #d4af37, #b8960c);
            color: #1a1a0e;
            border: none;
            padding: 12px 32px;
            border-radius: 12px;
            font-size: 16px;
            font-family: 'Tajawal', sans-serif;
            font-weight: 700;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .retry-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
          }
          .verse {
            margin-top: 40px;
            padding: 20px;
            border: 1px solid rgba(212, 175, 55, 0.2);
            border-radius: 12px;
            background: rgba(42, 42, 26, 0.5);
          }
          .verse p {
            color: #d4af37;
            font-family: 'Amiri', serif;
            font-size: 18px;
          }
          .verse small {
            color: #a09880;
            font-size: 13px;
          }
        </style>
      </head>
      <body>
        <div class="offline-container">
          <div class="offline-icon">🕌</div>
          <h1>أنت غير متصل بالإنترنت</h1>
          <p>
            تعذر تحميل الصفحة. تأكد من اتصالك بالإنترنت وحاول مرة أخرى.
          </p>
          <button class="retry-btn" onclick="location.reload()">
            إعادة المحاولة
          </button>
          <div class="verse">
            <p>﴿ إِنَّ مَعَ الْعُسْرِ يُسْرًا ﴾</p>
            <small>سورة الشرح - آية ٦</small>
          </div>
        </div>
      </body>
      </html>`,
      {
        status: 503,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      }
    );
  }

  // لبقية أنواع الطلبات
  return new Response('غير متصل', { status: 503 });
}

// ═══════════════════════════════════════════════════
// 8. إشعارات الدفع (Push Notifications)
// ═══════════════════════════════════════════════════
/**
 * استقبال إشعارات الدفع:
 * - إشعارات الصلاة على النبي ﷺ
 * - تذكير بالأذكار
 * - تنبيهات أوقات الصلاة
 */
self.addEventListener('push', (event) => {
  console.log('[SW] 🔔 تم استقبال إشعار');

  // البيانات الافتراضية للإشعار
  const defaultData = {
    title: 'صلِّ على النبي ﷺ',
    body: 'اللهم صلِّ وسلِّم على نبينا محمد ﷺ',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    tag: 'salawat-reminder',
    data: {
      type: 'salawat',
      url: '/index.html',
    },
  };

  let notificationData = defaultData;

  // محاولة قراءة البيانات المرسلة مع الإشعار
  if (event.data) {
    try {
      const pushData = event.data.json();
      notificationData = { ...defaultData, ...pushData };
    } catch (e) {
      // إذا كانت البيانات نصية
      notificationData.body = event.data.text() || defaultData.body;
    }
  }

  // خيارات الإشعار
  const options = {
    body: notificationData.body,
    icon: notificationData.icon || defaultData.icon,
    badge: notificationData.badge || defaultData.badge,
    tag: notificationData.tag || defaultData.tag,
    dir: 'rtl',
    lang: 'ar',
    vibrate: [100, 50, 100], // نمط الاهتزاز
    renotify: true,
    requireInteraction: false,
    silent: false,
    data: notificationData.data || defaultData.data,
    actions: [
      {
        action: 'open',
        title: 'فتح التطبيق',
      },
      {
        action: 'close',
        title: 'إغلاق',
      },
    ],
  };

  event.waitUntil(
    self.registration.showNotification(
      notificationData.title || defaultData.title,
      options
    )
  );
});

// ═══════════════════════════════════════════════════
// 9. النقر على الإشعار (Notification Click)
// ═══════════════════════════════════════════════════
/**
 * عند النقر على الإشعار:
 * - إذا كان التطبيق مفتوحاً: ينتقل إلى الصفحة المناسبة
 * - إذا كان مغلقاً: يفتح التطبيق
 */
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] 👆 تم النقر على الإشعار');

  // إغلاق الإشعار
  event.notification.close();

  // التعامل مع الإجراءات
  if (event.action === 'close') {
    return; // المستخدم اختار إغلاق الإشعار فقط
  }

  // الرابط المستهدف
  const targetUrl = event.notification.data?.url || '/index.html';

  event.waitUntil(
    clients
      .matchAll({
        type: 'window',
        includeUncontrolled: true,
      })
      .then((clientList) => {
        // البحث عن نافذة مفتوحة للتطبيق
        for (const client of clientList) {
          if (client.url.includes('index.html') && 'focus' in client) {
            // التنقل إلى الصفحة المطلوبة
            client.postMessage({
              type: 'NOTIFICATION_CLICK',
              url: targetUrl,
              data: event.notification.data,
            });
            return client.focus();
          }
        }

        // فتح نافذة جديدة إذا لم تكن هناك نافذة مفتوحة
        if (clients.openWindow) {
          return clients.openWindow(targetUrl);
        }
      })
  );
});

// ═══════════════════════════════════════════════════
// 10. إغلاق الإشعار (Notification Close)
// ═══════════════════════════════════════════════════

self.addEventListener('notificationclose', (event) => {
  console.log('[SW] ❌ تم إغلاق الإشعار:', event.notification.tag);
});

// ═══════════════════════════════════════════════════
// 11. المزامنة الدورية (Periodic Background Sync)
// ═══════════════════════════════════════════════════
/**
 * تحديث دوري لأوقات الصلاة والبيانات الأخرى
 * يعمل حتى لو كان التطبيق مغلقاً
 *
 * ملاحظة: هذه الميزة تتطلب دعم المتصفح وموافقة المستخدم
 */
self.addEventListener('periodicsync', (event) => {
  console.log('[SW] 🔄 مزامنة دورية:', event.tag);

  if (event.tag === 'update-prayer-times') {
    event.waitUntil(updatePrayerTimesInBackground());
  }

  if (event.tag === 'salawat-reminder') {
    event.waitUntil(showSalawatReminder());
  }
});

/**
 * تحديث أوقات الصلاة في الخلفية
 */
async function updatePrayerTimesInBackground() {
  try {
    // محاولة الحصول على الموقع من التخزين المؤقت
    const cache = await caches.open(DYNAMIC_CACHE);

    // جلب أوقات الصلاة الجديدة
    const today = new Date();
    const dateStr = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

    // نستخدم إحداثيات القاهرة كافتراضي
    const apiUrl = `https://api.aladhan.com/v1/timings/${dateStr}?latitude=30.0444&longitude=31.2357&method=5`;

    const response = await fetch(apiUrl);
    if (response.ok) {
      await cache.put(apiUrl, response.clone());
      console.log('[SW] ✅ تم تحديث أوقات الصلاة');
    }
  } catch (error) {
    console.warn('[SW] ⚠️ فشل تحديث أوقات الصلاة في الخلفية:', error);
  }
}

/**
 * عرض تذكير بالصلاة على النبي ﷺ
 */
async function showSalawatReminder() {
  const salawatTexts = [
    'اللهم صلِّ وسلِّم على نبينا محمد ﷺ',
    'اللهم صلِّ على محمد وعلى آل محمد كما صلَّيت على إبراهيم وعلى آل إبراهيم',
    'صلوا على من بكى شوقاً لرؤيتكم ﷺ',
    'أكثروا من الصلاة على النبي ﷺ يوم الجمعة',
    'إن الله وملائكته يصلون على النبي ﷺ',
  ];

  const randomText =
    salawatTexts[Math.floor(Math.random() * salawatTexts.length)];

  return self.registration.showNotification('صلِّ على النبي ﷺ', {
    body: randomText,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    tag: 'salawat-periodic',
    dir: 'rtl',
    lang: 'ar',
    vibrate: [100, 50, 100],
    data: {
      type: 'salawat',
      url: '/index.html',
    },
  });
}

// ═══════════════════════════════════════════════════
// 12. المزامنة في الخلفية (Background Sync)
// ═══════════════════════════════════════════════════
/**
 * إعادة محاولة الطلبات الفاشلة عند عودة الاتصال
 */
self.addEventListener('sync', (event) => {
  console.log('[SW] 🔄 مزامنة خلفية:', event.tag);

  if (event.tag === 'sync-favorites') {
    event.waitUntil(syncFavorites());
  }
});

/**
 * مزامنة المفضلة المحفوظة محلياً
 */
async function syncFavorites() {
  try {
    // هنا يمكن إضافة منطق مزامنة المفضلة مع الخادم
    console.log('[SW] ✅ تمت مزامنة المفضلة');
  } catch (error) {
    console.warn('[SW] ⚠️ فشلت مزامنة المفضلة:', error);
  }
}

// ═══════════════════════════════════════════════════
// 13. التحميل في الخلفية (Background Fetch)
// ═══════════════════════════════════════════════════
/**
 * لتحميل التلاوات الكبيرة في الخلفية
 * يعمل حتى لو أغلق المستخدم التطبيق
 */
self.addEventListener('backgroundfetchsuccess', (event) => {
  console.log('[SW] ✅ اكتمل التحميل في الخلفية:', event.registration.id);

  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(DYNAMIC_CACHE);
        const records = await event.registration.matchAll();

        // تخزين الملفات المحملة في التخزين المؤقت
        for (const record of records) {
          const response = await record.responseReady;
          await cache.put(record.request, response);
        }

        // إشعار المستخدم بانتهاء التحميل
        await self.registration.showNotification('تم التحميل ✅', {
          body: 'تم تحميل التلاوة بنجاح ويمكنك الاستماع إليها بدون إنترنت',
          icon: '/icons/icon-192x192.png',
          badge: '/icons/icon-72x72.png',
          tag: 'download-complete',
          dir: 'rtl',
          lang: 'ar',
          data: {
            type: 'download',
            url: '/index.html#quran',
          },
        });

        // تحديث واجهة المستخدم
        event.updateUI({
          title: 'تم التحميل بنجاح ✅',
        });
      } catch (error) {
        console.error('[SW] ❌ خطأ في معالجة التحميل:', error);
      }
    })()
  );
});

self.addEventListener('backgroundfetchfail', (event) => {
  console.error('[SW] ❌ فشل التحميل في الخلفية:', event.registration.id);

  event.waitUntil(
    self.registration.showNotification('فشل التحميل ❌', {
      body: 'تعذر تحميل التلاوة. تأكد من اتصالك بالإنترنت وحاول مرة أخرى.',
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-72x72.png',
      tag: 'download-failed',
      dir: 'rtl',
      lang: 'ar',
    })
  );
});

self.addEventListener('backgroundfetchabort', (event) => {
  console.log('[SW] ⏹️ تم إلغاء التحميل في الخلفية:', event.registration.id);
});

// ═══════════════════════════════════════════════════
// 14. استقبال الرسائل من التطبيق
// ═══════════════════════════════════════════════════
/**
 * التواصل بين التطبيق والـ Service Worker
 */
self.addEventListener('message', (event) => {
  console.log('[SW] 💬 رسالة من التطبيق:', event.data);

  const { type, payload } = event.data || {};

  switch (type) {
    case 'SKIP_WAITING':
      // تحديث الـ Service Worker فوراً
      self.skipWaiting();
      break;

    case 'CACHE_URLS':
      // تخزين روابط إضافية
      if (payload?.urls) {
        event.waitUntil(
          caches.open(DYNAMIC_CACHE).then((cache) => {
            return Promise.allSettled(
              payload.urls.map((url) => cache.add(url).catch(() => {}))
            );
          })
        );
      }
      break;

    case 'CLEAR_CACHE':
      // مسح التخزين المؤقت
      event.waitUntil(
        caches.keys().then((names) => {
          return Promise.all(
            names.map((name) => {
              if (name === DYNAMIC_CACHE) {
                return caches.delete(name);
              }
            })
          );
        })
      );
      break;

    case 'GET_CACHE_SIZE':
      // حساب حجم التخزين المؤقت
      event.waitUntil(
        (async () => {
          const cacheNames = await caches.keys();
          let totalSize = 0;

          for (const name of cacheNames) {
            const cache = await caches.open(name);
            const keys = await cache.keys();
            totalSize += keys.length;
          }

          event.source.postMessage({
            type: 'CACHE_SIZE',
            payload: { count: totalSize, caches: cacheNames },
          });
        })()
      );
      break;

    default:
      console.log('[SW] ⚠️ نوع رسالة غير معروف:', type);
  }
});

// ═══════════════════════════════════════════════════
// 15. تسجيل الـ Service Worker جاهز
// ═══════════════════════════════════════════════════
console.log('[SW] 🕌 Service Worker جاهز - بسم الله الرحمن الرحيم');
