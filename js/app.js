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

  // المشغل الصوتي التفاعلي الموحد (النوادر والابتهالات)
  modernPlayer: {
    track: null,
    isLooping: false,
    isMinimized: false,
    isLyricsVisible: true
  },

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

  // تهيئة نوادر التلاوات القرآنية الخالدة
  initRareQuranSection();

  // تهيئة التواشيح والابتهالات الدينية الشاملة
  initIbtehalatSection();

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
  STATE.quranAudio.addEventListener('ended', () => {
    stopQuranSyncLoop();
    onQuranAyahEnded();
  });
  STATE.quranAudio.addEventListener('play', () => {
    updateHudPlayBtn(true);
    startQuranSyncLoop();
  });
  STATE.quranAudio.addEventListener('pause', () => {
    updateHudPlayBtn(false);
    stopQuranSyncLoop();
  });
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

  // تهيئة عنصر صوت الأذان المستقل
  STATE.adhanAudio = document.getElementById('adhan-audio-element');

  // أحداث المشغل الصوتي التفاعلي الموحد (الإذاعة والابتهالات والنوادر)
  if (STATE.globalAudio) {
    STATE.globalAudio.preload = 'metadata';
    STATE.globalAudio.addEventListener('play', () => {
      updateModernPlayBtn(true);
    });
    STATE.globalAudio.addEventListener('playing', () => {
      updateModernPlayBtn(true);
      if (STATE.isCairoRadioPlaying) {
        updateCairoRadioUI(true);
      }
    });
    STATE.globalAudio.addEventListener('pause', () => {
      updateModernPlayBtn(false);
      if (STATE.isCairoRadioPlaying) {
        updateCairoRadioUI(false);
      }
    });
    STATE.globalAudio.addEventListener('ended', () => {
      updateModernPlayBtn(false);
      if (STATE.isCairoRadioPlaying) {
        updateCairoRadioUI(false);
      }
    });
    STATE.globalAudio.addEventListener('timeupdate', onModernAudioTimeUpdate);
    STATE.globalAudio.addEventListener('loadedmetadata', onModernAudioLoadedMetadata);
    STATE.globalAudio.addEventListener('error', (e) => {
      // تجنب إظهار رسالة الخطأ إذا كان الصوت متوقفاً أو المصدر فارغاً
      if (!STATE.globalAudio.src || STATE.globalAudio.src === '' || STATE.globalAudio.src === window.location.href) return;

      if (STATE.isCairoRadioPlaying) {
        cairoRadioFallbackIndex++;
        if (cairoRadioFallbackIndex < CAIRO_RADIO_URLS.length) {
          const nextUrl = CAIRO_RADIO_URLS[cairoRadioFallbackIndex];
          console.warn(`[Cairo Radio Fallback] Switching to mirror #${cairoRadioFallbackIndex}: ${nextUrl}`);
          STATE.globalAudio.src = nextUrl;
          STATE.globalAudio.play().catch(err => console.warn('Mirror play error:', err));
          return;
        }
      }
      console.warn('Audio playback error on source:', STATE.globalAudio.src);
      updateModernPlayBtn(false);
      if (STATE.isCairoRadioPlaying) {
        updateCairoRadioUI(false);
        STATE.isCairoRadioPlaying = false;
      }
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
      const prayerKey = `${now.toDateString()}_${STATE.nextPrayer.id}`;
      if (!STATE.adhanSettings.playedToday[prayerKey]) {
        STATE.adhanSettings.playedToday[prayerKey] = true;
        if (STATE.nextPrayer.id !== 'Sunrise') {
          playAdhanAudio(STATE.nextPrayer.name, STATE.nextPrayer.id);
        }
      }
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

function toggleMasterAdhan() {
  STATE.adhanSettings.enabled = !STATE.adhanSettings.enabled;
  savePersistedData('app_adhan_master_enabled', STATE.adhanSettings.enabled);
  updateAdhanMasterUI();

  if (STATE.adhanSettings.enabled) {
    // تجربة الصوت فوراً لتفعيل إذن Autoplay في المتصفح
    if (!STATE.adhanAudio) {
      STATE.adhanAudio = document.getElementById('adhan-audio-element');
    }
    if (STATE.adhanAudio) {
      STATE.adhanAudio.volume = 1.0;
      STATE.adhanAudio.currentTime = 0;
      STATE.adhanAudio.play().then(() => {
        setTimeout(() => {
          if (STATE.adhanAudio && !STATE.isAdhanActive) {
            try {
              STATE.adhanAudio.pause();
              STATE.adhanAudio.currentTime = 0;
            } catch(e){}
          }
        }, 2200);
      }).catch(err => {
        console.warn('Adhan preview error:', err);
      });
    }
    showToast('تم تفعيل الأذان التلقائي وسماح الصوت بنجاح 🔔');
  } else {
    if (STATE.adhanAudio) {
      try {
        STATE.adhanAudio.pause();
        STATE.adhanAudio.currentTime = 0;
      } catch(e){}
    }
    showToast('تم كتم الأذان التلقائي 🔕');
  }
}

function updateAdhanMasterUI() {
  const isEn = STATE.adhanSettings.enabled;
  const btnHero = document.getElementById('adhan-master-toggle-btn');
  const btnPage = document.getElementById('adhan-master-toggle-btn-page');

  if (btnHero) {
    btnHero.classList.toggle('muted', !isEn);
    const icon = document.getElementById('adhan-toggle-icon');
    const text = document.getElementById('adhan-toggle-text');
    if (icon) icon.textContent = isEn ? '🔊' : '🔕';
    if (text) text.textContent = isEn ? 'الأذان التلقائي: مفعّل (انقر للتجربة / كتم)' : 'الأذان التلقائي: مكتوم (انقر للتفعيل)';
  }

  if (btnPage) {
    btnPage.classList.toggle('muted', !isEn);
    const icon = btnPage.querySelector('.adhan-page-toggle-icon');
    const text = btnPage.querySelector('.adhan-page-toggle-text');
    if (icon) icon.textContent = isEn ? '🔊' : '🔕';
    if (text) text.textContent = isEn ? 'الأذان التلقائي: مفعّل (انقر للتجربة / كتم)' : 'الأذان التلقائي: مكتوم (انقر للتفعيل)';
  }
}

function playAdhanAudio(prayerName, prayerId) {
  if (!STATE.adhanSettings.enabled) return;
  if (!STATE.adhanAudio) {
    STATE.adhanAudio = document.getElementById('adhan-audio-element');
  }
  if (!STATE.adhanAudio) return;

  STATE.isAdhanActive = true;
  STATE.adhanAudio.currentTime = 0;
  STATE.adhanAudio.volume = 1.0;

  // إيقاف أي مشغل آخر يعمل حالياً لرفع الأذان بوضوح
  if (STATE.globalAudio) {
    try { STATE.globalAudio.pause(); } catch(e){}
  }
  if (STATE.quranAudio) {
    try { STATE.quranAudio.pause(); } catch(e){}
  }

  STATE.adhanAudio.play().then(() => {
    showToast(`🕌 الله أكبر.. حان الآن موعد ${prayerName} حسب التوقيت المحلي لمصر 🇪🇬`, 6000);
  }).catch(err => {
    console.warn('Adhan autoplay blocked by browser:', err);
    showToast(`🕌 حان موعد ${prayerName} (انقر هنا لسماع الأذان) 🔊`, 8000);
  });
}

function triggerAdhanAlert(prayerName, prayerId) {
  playAdhanAudio(prayerName, prayerId);
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

  // التجديد التلقائي لذكر ودعاء اليوم من مصفوفة الـ 31 يوماً الشاملة
  if (typeof DAILY_ROTATING_ADHKAR !== 'undefined' && DAILY_ROTATING_ADHKAR.length > 0) {
    const itemIndex = (dayOfMonth - 1) % DAILY_ROTATING_ADHKAR.length;
    const item = DAILY_ROTATING_ADHKAR[itemIndex];
    if (duaEl && item.text) {
      duaEl.textContent = item.text;
    }
  } else if (typeof DAILY_RENEWAL_DATA !== 'undefined' && DAILY_RENEWAL_DATA.length > 0) {
    const itemIndex = (dayOfMonth - 1) % DAILY_RENEWAL_DATA.length;
    const item = DAILY_RENEWAL_DATA[itemIndex];
    if (duaEl && item.dua) {
      duaEl.textContent = item.dua;
    }
  }

  // ورد اليوم القرآني
  if (typeof DAILY_RENEWAL_DATA !== 'undefined' && DAILY_RENEWAL_DATA.length > 0) {
    const itemIndex = (dayOfMonth - 1) % DAILY_RENEWAL_DATA.length;
    const item = DAILY_RENEWAL_DATA[itemIndex];
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

  resetQuranSyncState();

  container.innerHTML = verses.map(v => {
    const ayahNum = v.verse_number;
    const wordsHtml = v.words.map((w, wIdx) => {
      if (w.char_type_name === 'end') return '';
      const pos = w.position || (wIdx + 1);
      const cleanWord = w.text_uthmani || w.text;
      return `<span class="quran-word" id="word-${ayahNum}-${pos}" data-ayah="${ayahNum}" data-pos="${pos}" onclick="onWordClicked(${ayahNum}, ${pos})">${cleanWord}</span>`;
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
      resetQuranSyncState();
      const ayahs = data.data.ayahs;
      container.innerHTML = ayahs.map((a, idx) => {
        let text = a.text;
        if (surahNumber !== 1 && surahNumber !== 9 && idx === 0) {
          text = text.replace(/^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/, '')
                     .replace(/^بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\s*/, '')
                     .trim();
        }

        const words = text.split(/\s+/);
        const wordsHtml = words.map((w, wIdx) => {
          const pos = wIdx + 1;
          return `<span class="quran-word" id="word-${a.numberInSurah}-${pos}" data-ayah="${a.numberInSurah}" data-pos="${pos}" onclick="onWordClicked(${a.numberInSurah}, ${pos})">${w}</span>`;
        }).join(' ');

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

function getQdcReciterId(reciterId, mode) {
  const map = {
    hussary: 6,
    minshawi: mode === 'mojawwad' ? 8 : 9,
    abdulbasit: mode === 'mojawwad' ? 1 : 2,
    sudais: 3,
    shatri: 4,
    alafasy: 7,
    shuraim: 10,
    tablawi: 11
  };
  return map[reciterId] || 7;
}

// مؤشرات التخزين المؤقت لتحقيق O(1) في التزامن ومنع التقطيع تماماً
let currentActiveAyahNumber = -1;
let currentActiveAyahEl = null;
let currentActiveWordId = null;
let currentActiveWordEl = null;
let quranRafId = null;

function resetQuranSyncState() {
  currentActiveAyahNumber = -1;
  currentActiveAyahEl = null;
  currentActiveWordId = null;
  currentActiveWordEl = null;
}

function startQuranSyncLoop() {
  if (quranRafId) cancelAnimationFrame(quranRafId);
  function syncLoop() {
    if (STATE.quranAudio && !STATE.quranAudio.paused) {
      const curr = STATE.quranAudio.currentTime;
      const dur = STATE.quranAudio.duration;
      if (!isNaN(dur) && dur > 0) {
        syncActiveWordAtTime(curr, dur);
      }
      quranRafId = requestAnimationFrame(syncLoop);
    } else {
      quranRafId = null;
    }
  }
  quranRafId = requestAnimationFrame(syncLoop);
}

function stopQuranSyncLoop() {
  if (quranRafId) {
    cancelAnimationFrame(quranRafId);
    quranRafId = null;
  }
}

async function fetchWordTimings(surahNumber, reciter) {
  STATE.wordSegments = [];
  try {
    const qdcReciterId = getQdcReciterId(reciter ? reciter.id : '', STATE.currentMode);
    const res = await fetch(`https://api.quran.com/api/v4/chapter_recitations/${qdcReciterId}/${surahNumber}?segments=true`);
    const data = await res.json();
    if (data.audio_file && data.audio_file.timestamps) {
      STATE.wordSegments = data.audio_file.timestamps;
    }
  } catch (e) {
    console.warn('Word timings fetch notice (fallback mode active):', e);
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

  // في حال توقف حلقة RAF أو عدم تفعيلها، نضمن استمرار التزامن
  if (!quranRafId) {
    syncActiveWordAtTime(curr, dur);
  }
}

function syncActiveWordAtTime(currentTimeSec, totalDurationSec) {
  // إضافة إزاحة استباقية ذكية (50 مللي ثانية) لتعويض تأخر فك التشفير وإدراك الأذن البشرية
  const currentMs = (currentTimeSec * 1000) + 50;

  if (STATE.wordSegments && STATE.wordSegments.length > 0) {
    for (let i = 0; i < STATE.wordSegments.length; i++) {
      const seg = STATE.wordSegments[i];
      if (currentMs >= seg.timestamp_from && currentMs <= seg.timestamp_to) {
        const ayahNum = parseInt(seg.verse_key.split(':')[1]);
        highlightActiveAyah(ayahNum);

        if (seg.segments && seg.segments.length > 0) {
          for (let j = 0; j < seg.segments.length; j++) {
            const s = seg.segments[j];
            const wPos = s[0];
            const wStart = s[1];
            const wEnd = s[2];
            if (currentMs >= wStart && currentMs <= wEnd) {
              highlightActiveWord(ayahNum, wPos);
              return;
            }
          }
        }
        return;
      }
    }
  }

  // التزامن التقديري السلس والآمن بدون ثقل على المتصفح
  const verses = document.querySelectorAll('.verse');
  if (verses.length === 0 || totalDurationSec <= 0) return;

  const progressRatio = Math.max(0, Math.min(1, currentTimeSec / totalDurationSec));
  const estimatedAyahIdx = Math.min(verses.length - 1, Math.floor(progressRatio * verses.length));
  const activeAyahEl = verses[estimatedAyahIdx];

  if (activeAyahEl) {
    const ayahNum = parseInt(activeAyahEl.dataset.verse);
    highlightActiveAyah(ayahNum);

    const wordsInAyah = activeAyahEl.querySelectorAll('.quran-word');
    if (wordsInAyah.length > 0) {
      const ayahRatio = (progressRatio * verses.length) - estimatedAyahIdx;
      const wordIdx = Math.min(wordsInAyah.length - 1, Math.floor(ayahRatio * wordsInAyah.length));
      highlightActiveWord(ayahNum, wordIdx + 1);
    }
  }
}

function highlightActiveWord(ayahNum, wordPos) {
  const wordId = `word-${ayahNum}-${wordPos}`;
  if (currentActiveWordId === wordId) return;

  if (currentActiveWordEl) {
    currentActiveWordEl.classList.remove('active-word');
  }

  currentActiveWordId = wordId;
  currentActiveWordEl = document.getElementById(wordId);
  if (currentActiveWordEl) {
    currentActiveWordEl.classList.add('active-word');
  }
}

function highlightActiveAyah(ayahNum, autoScroll = true) {
  if (currentActiveAyahNumber === ayahNum) return;

  if (currentActiveAyahEl) {
    currentActiveAyahEl.classList.remove('active');
  }

  currentActiveAyahNumber = ayahNum;
  currentActiveAyahEl = document.getElementById(`verse-${ayahNum}`);
  if (currentActiveAyahEl) {
    currentActiveAyahEl.classList.add('active');
    if (autoScroll) {
      currentActiveAyahEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

function onWordClicked(ayahNum, wordPos) {
  highlightActiveAyah(ayahNum, true);
  highlightActiveWord(ayahNum, wordPos);
  playAyahByNumber(ayahNum, wordPos);
}

function playAyahByNumber(ayahNum, targetWordPos = null) {
  highlightActiveAyah(ayahNum, true);

  if (STATE.wordSegments && STATE.wordSegments.length > 0) {
    const seg = STATE.wordSegments.find(s => s.verse_key === `${STATE.currentSurahNumber}:${ayahNum}`);
    if (seg && STATE.quranAudio) {
      if (targetWordPos && seg.segments && seg.segments.length > 0) {
        const wordSeg = seg.segments.find(s => s[0] === targetWordPos);
        if (wordSeg) {
          STATE.quranAudio.currentTime = wordSeg[1] / 1000;
          if (STATE.quranAudio.paused) toggleHudPlay();
          return;
        }
      }
      STATE.quranAudio.currentTime = seg.timestamp_from / 1000;
      if (STATE.quranAudio.paused) toggleHudPlay();
      return;
    }
  }

  const surah = SURAHS_LIST.find(s => s.number === STATE.currentSurahNumber);
  if (surah && STATE.quranAudio && STATE.quranAudio.duration) {
    const ratio = (ayahNum - 1) / surah.ayahCount;
    STATE.quranAudio.currentTime = ratio * STATE.quranAudio.duration;
    if (STATE.quranAudio.paused) toggleHudPlay();
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

// ═══════════════════════════════════════════════════════════════
// 13. المشغل الصوتي التفاعلي الموحد (Unified Modern Interactive Player)
// ═══════════════════════════════════════════════════════════════

function getSheikhAvatarSvg(name, isIbtehal = false) {
  const icon = isIbtehal ? '🎙️' : '📖';
  const cleanName = (name || '').replace(/الشيخ\s*/g, '').trim().split(' ')[0] || 'المجلس';
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%231c261c"/><stop offset="100%" stop-color="%230c120c"/></linearGradient><linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23f5d77f"/><stop offset="100%" stop-color="%23d4af37"/></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(%23bg)" stroke="url(%23gold)" stroke-width="3"/><text x="50" y="44" font-size="28" text-anchor="middle">${icon}</text><text x="50" y="74" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="%23ffffff">${cleanName}</text></svg>`;
}

function showFloatingPlayerForRadio() {
  const minBar = document.getElementById('minimized-floating-bar');
  if (minBar) {
    minBar.style.display = 'flex';
    const titleEl = document.getElementById('min-track-title');
    if (titleEl) titleEl.textContent = 'إذاعة القرآن الكريم من القاهرة';
    const artistEl = document.getElementById('min-artist-name');
    if (artistEl) artistEl.textContent = 'بث مباشر حي 24 ساعة';
    const minAvatar = document.getElementById('min-avatar-img');
    if (minAvatar) minAvatar.src = getSheikhAvatarSvg('إذاعة القاهرة', true);
  }

  const fullPlayer = document.getElementById('unified-modern-player');
  if (fullPlayer) {
    const titleEl = document.getElementById('player-track-title');
    if (titleEl) titleEl.textContent = 'إذاعة القرآن الكريم من القاهرة';
    const artistEl = document.getElementById('player-artist-name');
    if (artistEl) artistEl.textContent = 'صوت الأزهر الشريف ومصر - بث حي 24 ساعة';
    const sourceTag = document.getElementById('player-source-tag');
    if (sourceTag) sourceTag.textContent = 'المصدر: البث الإذاعي المباشر';
    const verTag = document.getElementById('player-version-tag');
    if (verTag) verTag.textContent = 'التردد: 98.8 FM';
    const lyricsText = document.getElementById('player-lyrics-text');
    if (lyricsText) lyricsText.textContent = 'إذاعة القرآن الكريم من القاهرة.. إذاعة كل بيت مسلم ونبض التلاوات العطرة على مدار الساعة';
    const avatar = document.getElementById('player-avatar-img');
    if (avatar) avatar.src = getSheikhAvatarSvg('إذاعة القاهرة', true);
  }
  updateModernPlayBtn(true);
}

function playModernTrack(track) {
  if (!track || !track.url) return;
  if (!STATE.globalAudio) initAudioElements();

  // إيقاف صوت المصحف إذا كان قيد التشغيل
  if (STATE.quranAudio && !STATE.quranAudio.paused) {
    STATE.quranAudio.pause();
    updateHudPlayBtn(false);
  }

  // إيقاف بث إذاعة القاهرة
  STATE.isCairoRadioPlaying = false;
  updateCairoRadioUI(false);

  STATE.modernPlayer.track = track;

  // تهيئة عنصر الصوت الرئيسي
  STATE.globalAudio.preload = 'metadata';
  STATE.globalAudio.src = track.url;
  STATE.globalAudio.loop = !!STATE.modernPlayer.isLooping;
  STATE.globalAudio.load();
  STATE.globalAudio.play().catch(err => {
    console.warn('Modern audio playback notice:', err);
    showToast('جاري بدء تشغيل التسجيل المبارك...');
  });

  // تحديث واجهة المشغل التفاعلي الموحد
  const fullPlayer = document.getElementById('unified-modern-player');
  if (fullPlayer) fullPlayer.style.display = 'block';

  const minBar = document.getElementById('minimized-floating-bar');
  if (minBar) minBar.style.display = 'none';

  const titleEl = document.getElementById('player-track-title');
  if (titleEl) titleEl.textContent = track.title || 'مقطع مبارك';

  const artistEl = document.getElementById('player-artist-name');
  if (artistEl) artistEl.textContent = track.reciter || track.sheikh || 'القارئ';

  const sourceTag = document.getElementById('player-source-tag');
  if (sourceTag) {
    sourceTag.textContent = track.sourceTag || (track.category === 'ramadan' ? 'المصدر: تراث رمضان' : (track.lyricsQuote ? 'المصدر: ابتهال ديني' : 'المصدر: نوادر التلاوات'));
  }

  const verTag = document.getElementById('player-version-tag');
  if (verTag) {
    verTag.textContent = track.versionTag || track.badge || 'النسخة: تسجيل أصلي نادر';
  }

  const avatarSvg = track.avatar || getSheikhAvatarSvg(track.reciter || track.sheikh, !!track.lyricsQuote);
  const avatarImg = document.getElementById('player-avatar-img');
  if (avatarImg) avatarImg.src = avatarSvg;

  const minAvatarImg = document.getElementById('min-avatar-img');
  if (minAvatarImg) minAvatarImg.src = avatarSvg;

  const minTitle = document.getElementById('min-track-title');
  if (minTitle) minTitle.textContent = track.title || '';

  const minSub = document.getElementById('min-artist-name');
  if (minSub) minSub.textContent = track.reciter || track.sheikh || '';

  const lyricsText = document.getElementById('player-lyrics-text');
  if (lyricsText) {
    lyricsText.textContent = track.lyricsQuote || track.desc || 'استمع بقلب خاشع ونفحات إيمانية مباركة';
  }

  const curTimeEl = document.getElementById('player-current-time');
  if (curTimeEl) curTimeEl.textContent = '00:00';

  const remTimeEl = document.getElementById('player-remaining-time');
  if (remTimeEl) remTimeEl.textContent = '-' + (track.duration || '00:00');

  const rangeEl = document.getElementById('player-seek-range');
  if (rangeEl) rangeEl.value = 0;

  const fillEl = document.getElementById('player-progress-fill');
  if (fillEl) fillEl.style.width = '0%';

  updateModernPlayBtn(true);

  // تحديث تمييز الكارت النشط في القوائم
  document.querySelectorAll('.audio-item-card, .media-audio-card').forEach(c => c.classList.remove('is-playing'));
  if (track.id) {
    const activeCard = document.getElementById(`track-card-${track.id}`);
    if (activeCard) activeCard.classList.add('is-playing');
  }
}

function playMediaTrack(url, title, subtitle) {
  playModernTrack({
    id: 'generic_' + Date.now(),
    title: title || 'تسجيل صوتي',
    reciter: subtitle || 'الإذاعة',
    url: url,
    sourceTag: 'تسجيل مبارك',
    versionTag: 'تسجيل عالي الجودة'
  });
}

function toggleModernPlayPause() {
  if (!STATE.globalAudio || !STATE.globalAudio.src) {
    if (STATE.modernPlayer.track) {
      playModernTrack(STATE.modernPlayer.track);
    }
    return;
  }

  if (STATE.globalAudio.paused) {
    STATE.globalAudio.play().then(() => {
      updateModernPlayBtn(true);
      if (STATE.isCairoRadioPlaying) updateCairoRadioUI(true);
    }).catch(console.warn);
  } else {
    STATE.globalAudio.pause();
    updateModernPlayBtn(false);
    if (STATE.isCairoRadioPlaying) updateCairoRadioUI(false);
  }
}

function toggleGlobalAudioPlay() {
  toggleModernPlayPause();
}

function updateModernPlayBtn(isPlaying) {
  const mainBtnIcon = document.getElementById('player-play-icon');
  if (mainBtnIcon) mainBtnIcon.textContent = isPlaying ? '⏸' : '▶';

  const minBtn = document.getElementById('min-play-btn');
  if (minBtn) minBtn.textContent = isPlaying ? '⏸' : '▶';

  const badge = document.getElementById('player-status-badge');
  if (badge) badge.textContent = isPlaying ? 'قيد التشغيل الآن' : 'متوقف مؤقتاً';
}

function updateFloatPlayBtn(isPlaying) {
  updateModernPlayBtn(isPlaying);
}

function seekModernRelative(seconds) {
  if (!STATE.globalAudio || !STATE.globalAudio.src) return;
  const cur = STATE.globalAudio.currentTime || 0;
  const dur = STATE.globalAudio.duration;
  let target = cur + seconds;
  if (target < 0) target = 0;
  if (dur && target > dur) target = dur;
  STATE.globalAudio.currentTime = target;
  onModernAudioTimeUpdate();
}

function toggleModernRepeat() {
  if (!STATE.globalAudio) return;
  STATE.modernPlayer.isLooping = !STATE.modernPlayer.isLooping;
  STATE.globalAudio.loop = STATE.modernPlayer.isLooping;

  const repeatBtn = document.getElementById('player-repeat-btn');
  if (repeatBtn) {
    repeatBtn.classList.toggle('active', STATE.modernPlayer.isLooping);
  }
  showToast(STATE.modernPlayer.isLooping ? 'تم تفعيل تكرار المقطع 🔁' : 'تم إلغاء التكرار');
}

function togglePlayerLyrics() {
  STATE.modernPlayer.isLyricsVisible = !STATE.modernPlayer.isLyricsVisible;
  const lyricsCard = document.getElementById('player-lyrics-card');
  const toggleBtnText = document.getElementById('player-lyrics-toggle-text');
  const toggleBtnIcon = document.getElementById('player-lyrics-toggle-icon');

  if (lyricsCard) {
    lyricsCard.classList.toggle('collapsed', !STATE.modernPlayer.isLyricsVisible);
  }
  if (toggleBtnText) {
    toggleBtnText.textContent = STATE.modernPlayer.isLyricsVisible ? 'إخفاء الكلمات' : 'إظهار الكلمات';
  }
  if (toggleBtnIcon) {
    toggleBtnIcon.textContent = STATE.modernPlayer.isLyricsVisible ? '👁️' : '📝';
  }
}

function onModernSeekInput(val) {
  const fillEl = document.getElementById('player-progress-fill');
  if (fillEl) fillEl.style.width = val + '%';
  if (STATE.globalAudio && STATE.globalAudio.duration) {
    const cur = (val / 100) * STATE.globalAudio.duration;
    const curTimeEl = document.getElementById('player-current-time');
    if (curTimeEl) curTimeEl.textContent = formatAudioTime(cur);
    const remTimeEl = document.getElementById('player-remaining-time');
    if (remTimeEl) remTimeEl.textContent = '-' + formatAudioTime(Math.max(0, STATE.globalAudio.duration - cur));
  }
}

function onModernSeekChange(val) {
  if (STATE.globalAudio && STATE.globalAudio.duration) {
    STATE.globalAudio.currentTime = (val / 100) * STATE.globalAudio.duration;
  }
}

function onModernAudioTimeUpdate() {
  if (!STATE.globalAudio) return;
  const cur = STATE.globalAudio.currentTime || 0;
  const dur = STATE.globalAudio.duration;

  const curTimeEl = document.getElementById('player-current-time');
  if (curTimeEl) curTimeEl.textContent = formatAudioTime(cur);

  const remTimeEl = document.getElementById('player-remaining-time');
  if (remTimeEl) {
    if (dur && !isNaN(dur) && isFinite(dur)) {
      const rem = Math.max(0, dur - cur);
      remTimeEl.textContent = '-' + formatAudioTime(rem);
    } else {
      remTimeEl.textContent = '-00:00';
    }
  }

  const rangeEl = document.getElementById('player-seek-range');
  const fillEl = document.getElementById('player-progress-fill');
  if (dur && !isNaN(dur) && isFinite(dur) && dur > 0) {
    const pct = (cur / dur) * 100;
    if (rangeEl && !rangeEl.matches(':active')) rangeEl.value = pct;
    if (fillEl) fillEl.style.width = pct + '%';
  }
}

function onModernAudioLoadedMetadata() {
  const dur = STATE.globalAudio.duration;
  const remTimeEl = document.getElementById('player-remaining-time');
  if (remTimeEl && dur && !isNaN(dur) && isFinite(dur)) {
    remTimeEl.textContent = '-' + formatAudioTime(dur);
  }
}

function minimizeModernPlayer() {
  const full = document.getElementById('unified-modern-player');
  const min = document.getElementById('minimized-floating-bar');
  if (full) full.style.display = 'none';
  if (min) min.style.display = 'flex';
  STATE.modernPlayer.isMinimized = true;
}

function expandModernPlayer() {
  const full = document.getElementById('unified-modern-player');
  const min = document.getElementById('minimized-floating-bar');
  if (full) full.style.display = 'block';
  if (min) min.style.display = 'none';
  STATE.modernPlayer.isMinimized = false;
}

function closeModernPlayer() {
  if (STATE.globalAudio) {
    try {
      STATE.globalAudio.pause();
      STATE.globalAudio.currentTime = 0;
      STATE.globalAudio.removeAttribute('src');
      STATE.globalAudio.src = '';
    } catch(e) {}
  }
  STATE.isCairoRadioPlaying = false;
  updateCairoRadioUI(false);
  updateModernPlayBtn(false);

  const full = document.getElementById('unified-modern-player');
  if (full) full.style.display = 'none';

  const min = document.getElementById('minimized-floating-bar');
  if (min) min.style.display = 'none';

  document.querySelectorAll('.audio-item-card, .media-audio-card').forEach(c => c.classList.remove('is-playing'));
}

function closeGlobalAudioPlayer() {
  closeModernPlayer();
}

function shareCurrentModernTrack() {
  const track = STATE.modernPlayer.track;
  if (!track) return;
  const shareData = {
    title: track.title,
    text: `استمع إلى: ${track.title} بصوت ${track.reciter || ''} عبر تطبيق المجلس - الموسوعة القرآنية والابتهالات`,
    url: track.url || window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(track.url).then(() => {
      showToast('تم نسخ رابط التسجيل إلى الحافظة 📋');
    }).catch(() => {
      showToast('تم نسخ العنوان للمشاركة 📋');
    });
  } else {
    showToast('رابط التسجيل جاهز للمشاركة 📋');
  }
}

// ═══════════════════════════════════════════════════════════════
// 14. نوادر التلاوات القرآنية الخالدة (قسم مخصص ومستقل)
// ═══════════════════════════════════════════════════════════════

function initRareQuranSection() {
  renderRareQuranList('all');
}

function renderRareQuranList(filterCat) {
  const container = document.getElementById('rare-quran-list');
  if (!container || typeof RARE_RECITATIONS_DATA === 'undefined') return;

  const filtered = (!filterCat || filterCat === 'all') ?
    RARE_RECITATIONS_DATA : RARE_RECITATIONS_DATA.filter(item => item.category === filterCat);

  if (filtered.length === 0) {
    container.innerHTML = `<div class="card" style="text-align: center; color: var(--text-secondary); padding: 24px;">لا توجد تسجيلات نادرة متوفرة في هذا القسم حالياً.</div>`;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const avatar = getSheikhAvatarSvg(item.reciter, false);
    const isCurPlaying = STATE.modernPlayer.track && STATE.modernPlayer.track.id === item.id && STATE.isGlobalPlaying;
    return `
      <div class="audio-item-card ${isCurPlaying ? 'is-playing' : ''}" id="track-card-${item.id}" onclick="playRareQuranTrack('${item.id}')">
        <div class="audio-card-avatar">
          <img src="${avatar}" alt="${item.reciter}">
        </div>
        <div class="audio-card-meta">
          <div class="audio-card-title">${item.title}</div>
          <div class="audio-card-artist">${item.reciter}</div>
          <div class="audio-card-details">
            <span class="rare-badge">${item.badge || 'تسجيل نادر'}</span>
            ${item.duration ? `<span>⏱ ${item.duration}</span>` : ''}
          </div>
        </div>
        <button class="audio-card-play-btn" aria-label="تشغيل">
          ${isCurPlaying ? '⏸' : '▶'}
        </button>
      </div>
    `;
  }).join('');
}

function filterRareQuran(category) {
  document.querySelectorAll('#page-rare-quran .chip-btn').forEach(btn => {
    const onclickAttr = btn.getAttribute('onclick') || '';
    btn.classList.toggle('active', onclickAttr.includes(`'${category}'`));
  });
  renderRareQuranList(category);
}

function playRareQuranTrack(trackId) {
  const track = RARE_RECITATIONS_DATA.find(t => t.id === trackId);
  if (track) playModernTrack(track);
}

// ═══════════════════════════════════════════════════════════════
// 14.1. التواشيح والابتهالات الدينية الشاملة (قسم مستقل)
// ═══════════════════════════════════════════════════════════════

function initIbtehalatSection() {
  renderIbtehalatList('all');
}

function initRareAndIbtehalat() {
  initIbtehalatSection();
}

function renderIbtehalatList(filterCat) {
  const container = document.getElementById('ibtehalat-list');
  if (!container || typeof IBTEHALAT_DATA === 'undefined') return;

  const normalizedCat = (filterCat === 'tobar') ? 'tobour' : filterCat;
  const filtered = (!normalizedCat || normalizedCat === 'all') ?
    IBTEHALAT_DATA : IBTEHALAT_DATA.filter(i => i.category === normalizedCat);

  if (filtered.length === 0) {
    container.innerHTML = `<div class="card" style="text-align: center; color: var(--text-secondary); padding: 24px;">لا توجد ابتهالات متوفرة في هذا القسم حالياً.</div>`;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const avatar = getSheikhAvatarSvg(item.reciter, true);
    const isCurPlaying = STATE.modernPlayer.track && STATE.modernPlayer.track.id === item.id && STATE.isGlobalPlaying;
    return `
      <div class="audio-item-card ${isCurPlaying ? 'is-playing' : ''}" id="track-card-${item.id}" onclick="playIbtehalTrack('${item.id}')">
        <div class="audio-card-avatar">
          <img src="${avatar}" alt="${item.reciter}">
        </div>
        <div class="audio-card-meta">
          <div class="audio-card-title">${item.title}</div>
          <div class="audio-card-artist">${item.reciter}</div>
          <div class="audio-card-details">
            <span class="rare-badge">${item.badge || 'ابتهال'}</span>
            ${item.duration ? `<span>⏱ ${item.duration}</span>` : ''}
          </div>
        </div>
        <button class="audio-card-play-btn" aria-label="تشغيل">
          ${isCurPlaying ? '⏸' : '▶'}
        </button>
      </div>
    `;
  }).join('');
}

function filterIbtehalat(category) {
  document.querySelectorAll('#page-ibtehalat .chip-btn').forEach(btn => {
    const onclickAttr = btn.getAttribute('onclick') || '';
    btn.classList.toggle('active', onclickAttr.includes(`'${category}'`));
  });
  renderIbtehalatList(category);
}

function playIbtehalTrack(trackId) {
  const track = IBTEHALAT_DATA.find(t => t.id === trackId);
  if (track) playModernTrack(track);
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
// 16. حصن المسلم: الأذكار والعدادات التفاعلية المتقدمة
// ═══════════════════════════════════════════════════════════════
function initAzkarSection() {}

function openAzkarCategory(catKey) {
  if (catKey === 'sleep') catKey = 'sleep_wake';
  if (catKey === 'afterPrayer') catKey = 'post_prayer';
  if (catKey === 'general') catKey = 'quranic_duas';
  if (catKey === 'prophetic') catKey = 'prophetic_duas';
  if (catKey === 'mosque_wudhu') catKey = 'masjid_wudhu';

  const cat = (typeof AZKAR_DATA !== 'undefined') ? AZKAR_DATA[catKey] : null;
  if (!cat || !cat.items) return;

  navigateTo('azkar-detail');

  const titleEl = document.getElementById('azkar-detail-title');
  if (titleEl) titleEl.textContent = cat.title;

  const iconEl = document.getElementById('azkar-detail-icon');
  if (iconEl) iconEl.textContent = cat.icon || '📿';

  const container = document.getElementById('azkar-items-container');
  if (!container) return;

  const saved = JSON.parse(localStorage.getItem(`zikr_progress_${catKey}`) || '{}');

  container.innerHTML = cat.items.map((item, idx) => {
    const current = saved[idx] || 0;
    const remaining = Math.max(0, item.count - current);
    const isDone = remaining === 0;
    const virtue = item.fadl || item.reward;

    return `
      <div class="azkar-item-card ${isDone ? 'is-completed' : ''}" id="zikr-card-${catKey}-${idx}">
        <div class="azkar-text-arabic">${item.text}</div>
        ${virtue ? `<div class="azkar-virtue-box">⭐ ${virtue}</div>` : ''}
        <div class="azkar-actions-footer">
          <span class="azkar-target-badge">العدد المطلوب: ${toArabicDigits(item.count)} ${item.count === 1 ? 'مرة' : 'مرات'}</span>
          <button class="azkar-counter-btn ${isDone ? 'done' : ''}" id="zikr-btn-${catKey}-${idx}" onclick="tapZikrItem('${catKey}', ${idx}, ${item.count})" ${isDone ? 'disabled' : ''}>
            ${isDone ? '✓ تَمّ بحمد الله' : toArabicDigits(remaining)}
          </button>
        </div>
      </div>
    `;
  }).join('') + `
    <div style="text-align: center; margin: 24px 0 40px;">
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
  const card = document.getElementById(`zikr-card-${catKey}-${idx}`);

  if (remaining === 0) {
    if (btn) {
      btn.textContent = '✓ تَمّ بحمد الله';
      btn.classList.add('done');
      btn.disabled = true;
    }
    if (card) card.classList.add('is-completed');

    if (navigator.vibrate) navigator.vibrate([40, 30, 40]);
    showToast('تقبل الله طاعتكم وجزاكم خيراً 🤲');
  } else {
    if (btn) btn.textContent = toArabicDigits(remaining);
    if (navigator.vibrate) navigator.vibrate(35);
  }
}

function resetZikrCategory(catKey) {
  localStorage.removeItem(`zikr_progress_${catKey}`);
  openAzkarCategory(catKey);
  showToast('تمت إعادة ضبط العدادات لهذا القسم 🔄');
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
