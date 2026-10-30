/**
 * =============================================================================
 * تطبيق «المجلس: الموسوعة القرآنية والابتهالات»
 * ملف البيانات والروابط الرسمية المعتمدة (js/data.js)
 * الإصدار: 2.1 - ترميز UTF-8 صريح ونقي 100% بدون أي تشويه
 * =============================================================================
 */

// ═══════════════════════════════════════════════════════════════
// 1. فهرس السور القرآنية الـ 114 الشريفة
// ═══════════════════════════════════════════════════════════════
const SURAHS_LIST = [
  { number: 1, name: "الفاتحة", englishName: "Al-Fatihah", revelationType: "مكية", ayahCount: 7 },
  { number: 2, name: "البقرة", englishName: "Al-Baqarah", revelationType: "مدنية", ayahCount: 286 },
  { number: 3, name: "آل عمران", englishName: "Ali 'Imran", revelationType: "مدنية", ayahCount: 200 },
  { number: 4, name: "النساء", englishName: "An-Nisa", revelationType: "مدنية", ayahCount: 176 },
  { number: 5, name: "المائدة", englishName: "Al-Ma'idah", revelationType: "مدنية", ayahCount: 120 },
  { number: 6, name: "الأنعام", englishName: "Al-An'am", revelationType: "مكية", ayahCount: 165 },
  { number: 7, name: "الأعراف", englishName: "Al-A'raf", revelationType: "مكية", ayahCount: 206 },
  { number: 8, name: "الأنفال", englishName: "Al-Anfal", revelationType: "مدنية", ayahCount: 75 },
  { number: 9, name: "التوبة", englishName: "At-Tawbah", revelationType: "مدنية", ayahCount: 129 },
  { number: 10, name: "يونس", englishName: "Yunus", revelationType: "مكية", ayahCount: 109 },
  { number: 11, name: "هود", englishName: "Hud", revelationType: "مكية", ayahCount: 123 },
  { number: 12, name: "يوسف", englishName: "Yusuf", revelationType: "مكية", ayahCount: 111 },
  { number: 13, name: "الرعد", englishName: "Ar-Ra'd", revelationType: "مدنية", ayahCount: 43 },
  { number: 14, name: "إبراهيم", englishName: "Ibrahim", revelationType: "مكية", ayahCount: 52 },
  { number: 15, name: "الحجر", englishName: "Al-Hijr", revelationType: "مكية", ayahCount: 99 },
  { number: 16, name: "النحل", englishName: "An-Nahl", revelationType: "مكية", ayahCount: 128 },
  { number: 17, name: "الإسراء", englishName: "Al-Isra", revelationType: "مكية", ayahCount: 111 },
  { number: 18, name: "الكهف", englishName: "Al-Kahf", revelationType: "مكية", ayahCount: 110 },
  { number: 19, name: "مريم", englishName: "Maryam", revelationType: "مكية", ayahCount: 98 },
  { number: 20, name: "طه", englishName: "Taha", revelationType: "مكية", ayahCount: 135 },
  { number: 21, name: "الأنبياء", englishName: "Al-Anbiya", revelationType: "مكية", ayahCount: 112 },
  { number: 22, name: "الحج", englishName: "Al-Hajj", revelationType: "مدنية", ayahCount: 78 },
  { number: 23, name: "المؤمنون", englishName: "Al-Mu'minun", revelationType: "مكية", ayahCount: 118 },
  { number: 24, name: "النور", englishName: "An-Nur", revelationType: "مدنية", ayahCount: 64 },
  { number: 25, name: "الفرقان", englishName: "Al-Furqan", revelationType: "مكية", ayahCount: 77 },
  { number: 26, name: "الشعراء", englishName: "Ash-Shu'ara", revelationType: "مكية", ayahCount: 227 },
  { number: 27, name: "النمل", englishName: "An-Naml", revelationType: "مكية", ayahCount: 93 },
  { number: 28, name: "القصص", englishName: "Al-Qasas", revelationType: "مكية", ayahCount: 88 },
  { number: 29, name: "العنكبوت", englishName: "Al-'Ankabut", revelationType: "مكية", ayahCount: 69 },
  { number: 30, name: "الروم", englishName: "Ar-Rum", revelationType: "مكية", ayahCount: 60 },
  { number: 31, name: "لقمان", englishName: "Luqman", revelationType: "مكية", ayahCount: 34 },
  { number: 32, name: "السجدة", englishName: "As-Sajdah", revelationType: "مكية", ayahCount: 30 },
  { number: 33, name: "الأحزاب", englishName: "Al-Ahzab", revelationType: "مدنية", ayahCount: 73 },
  { number: 34, name: "سبأ", englishName: "Saba", revelationType: "مكية", ayahCount: 54 },
  { number: 35, name: "فاطر", englishName: "Fatir", revelationType: "مكية", ayahCount: 45 },
  { number: 36, name: "يس", englishName: "Ya-Sin", revelationType: "مكية", ayahCount: 83 },
  { number: 37, name: "الصافات", englishName: "As-Saffat", revelationType: "مكية", ayahCount: 182 },
  { number: 38, name: "ص", englishName: "Sad", revelationType: "مكية", ayahCount: 88 },
  { number: 39, name: "الزمر", englishName: "Az-Zumar", revelationType: "مكية", ayahCount: 75 },
  { number: 40, name: "غافر", englishName: "Ghafir", revelationType: "مكية", ayahCount: 85 },
  { number: 41, name: "فصلت", englishName: "Fussilat", revelationType: "مكية", ayahCount: 54 },
  { number: 42, name: "الشورى", englishName: "Ash-Shura", revelationType: "مكية", ayahCount: 53 },
  { number: 43, name: "الزخرف", englishName: "Az-Zukhruf", revelationType: "مكية", ayahCount: 89 },
  { number: 44, name: "الدخان", englishName: "Ad-Dukhan", revelationType: "مكية", ayahCount: 59 },
  { number: 45, name: "الجاثية", englishName: "Al-Jathiyah", revelationType: "مكية", ayahCount: 37 },
  { number: 46, name: "الأحقاف", englishName: "Al-Ahqaf", revelationType: "مكية", ayahCount: 35 },
  { number: 47, name: "محمد", englishName: "Muhammad", revelationType: "مدنية", ayahCount: 38 },
  { number: 48, name: "الفتح", englishName: "Al-Fath", revelationType: "مدنية", ayahCount: 29 },
  { number: 49, name: "الحجرات", englishName: "Al-Hujurat", revelationType: "مدنية", ayahCount: 18 },
  { number: 50, name: "ق", englishName: "Qaf", revelationType: "مكية", ayahCount: 45 },
  { number: 51, name: "الذاريات", englishName: "Adh-Dhariyat", revelationType: "مكية", ayahCount: 60 },
  { number: 52, name: "الطور", englishName: "At-Tur", revelationType: "مكية", ayahCount: 49 },
  { number: 53, name: "النجم", englishName: "An-Najm", revelationType: "مكية", ayahCount: 62 },
  { number: 54, name: "القمر", englishName: "Al-Qamar", revelationType: "مكية", ayahCount: 55 },
  { number: 55, name: "الرحمن", englishName: "Ar-Rahman", revelationType: "مدنية", ayahCount: 78 },
  { number: 56, name: "الواقعة", englishName: "Al-Waqi'ah", revelationType: "مكية", ayahCount: 96 },
  { number: 57, name: "الحديد", englishName: "Al-Hadid", revelationType: "مدنية", ayahCount: 29 },
  { number: 58, name: "المجادلة", englishName: "Al-Mujadilah", revelationType: "مدنية", ayahCount: 22 },
  { number: 59, name: "الحشر", englishName: "Al-Hashr", revelationType: "مدنية", ayahCount: 24 },
  { number: 60, name: "الممتحنة", englishName: "Al-Mumtahanah", revelationType: "مدنية", ayahCount: 13 },
  { number: 61, name: "الصف", englishName: "As-Saff", revelationType: "مدنية", ayahCount: 14 },
  { number: 62, name: "الجمعة", englishName: "Al-Jumu'ah", revelationType: "مدنية", ayahCount: 11 },
  { number: 63, name: "المنافقون", englishName: "Al-Munafiqun", revelationType: "مدنية", ayahCount: 11 },
  { number: 64, name: "التغابن", englishName: "At-Taghabun", revelationType: "مدنية", ayahCount: 18 },
  { number: 65, name: "الطلاق", englishName: "At-Talaq", revelationType: "مدنية", ayahCount: 12 },
  { number: 66, name: "التحريم", englishName: "At-Tahrim", revelationType: "مدنية", ayahCount: 12 },
  { number: 67, name: "الملك", englishName: "Al-Mulk", revelationType: "مكية", ayahCount: 30 },
  { number: 68, name: "القلم", englishName: "Al-Qalam", revelationType: "مكية", ayahCount: 52 },
  { number: 69, name: "الحاقة", englishName: "Al-Haqqah", revelationType: "مكية", ayahCount: 52 },
  { number: 70, name: "المعارج", englishName: "Al-Ma'arij", revelationType: "مكية", ayahCount: 44 },
  { number: 71, name: "نوح", englishName: "Nuh", revelationType: "مكية", ayahCount: 28 },
  { number: 72, name: "الجن", englishName: "Al-Jinn", revelationType: "مكية", ayahCount: 28 },
  { number: 73, name: "المزمل", englishName: "Al-Muzzammil", revelationType: "مكية", ayahCount: 20 },
  { number: 74, name: "المدثر", englishName: "Al-Muddaththir", revelationType: "مكية", ayahCount: 56 },
  { number: 75, name: "القيامة", englishName: "Al-Qiyamah", revelationType: "مكية", ayahCount: 40 },
  { number: 76, name: "الإنسان", englishName: "Al-Insan", revelationType: "مدنية", ayahCount: 31 },
  { number: 77, name: "المرسلات", englishName: "Al-Mursalat", revelationType: "مكية", ayahCount: 50 },
  { number: 78, name: "النبأ", englishName: "An-Naba", revelationType: "مكية", ayahCount: 40 },
  { number: 79, name: "النازعات", englishName: "An-Nazi'at", revelationType: "مكية", ayahCount: 46 },
  { number: 80, name: "عبس", englishName: "'Abasa", revelationType: "مكية", ayahCount: 42 },
  { number: 81, name: "التكوير", englishName: "At-Takwir", revelationType: "مكية", ayahCount: 29 },
  { number: 82, name: "الانفطار", englishName: "Al-Infitar", revelationType: "مكية", ayahCount: 19 },
  { number: 83, name: "المطففين", englishName: "Al-Mutaffifin", revelationType: "مكية", ayahCount: 36 },
  { number: 84, name: "الانشقاق", englishName: "Al-Inshiqaq", revelationType: "مكية", ayahCount: 25 },
  { number: 85, name: "البروج", englishName: "Al-Buruj", revelationType: "مكية", ayahCount: 22 },
  { number: 86, name: "الطارق", englishName: "At-Tariq", revelationType: "مكية", ayahCount: 17 },
  { number: 87, name: "الأعلى", englishName: "Al-A'la", revelationType: "مكية", ayahCount: 19 },
  { number: 88, name: "الغاشية", englishName: "Al-Ghashiyah", revelationType: "مكية", ayahCount: 26 },
  { number: 89, name: "الفجر", englishName: "Al-Fajr", revelationType: "مكية", ayahCount: 30 },
  { number: 90, name: "البلد", englishName: "Al-Balad", revelationType: "مكية", ayahCount: 20 },
  { number: 91, name: "الشمس", englishName: "Ash-Shams", revelationType: "مكية", ayahCount: 15 },
  { number: 92, name: "الليل", englishName: "Al-Layl", revelationType: "مكية", ayahCount: 21 },
  { number: 93, name: "الضحى", englishName: "Ad-Duha", revelationType: "مكية", ayahCount: 11 },
  { number: 94, name: "الشرح", englishName: "Ash-Sharh", revelationType: "مكية", ayahCount: 8 },
  { number: 95, name: "التين", englishName: "At-Tin", revelationType: "مكية", ayahCount: 8 },
  { number: 96, name: "العلق", englishName: "Al-'Alaq", revelationType: "مكية", ayahCount: 19 },
  { number: 97, name: "القدر", englishName: "Al-Qadr", revelationType: "مكية", ayahCount: 5 },
  { number: 98, name: "البينة", englishName: "Al-Bayyinah", revelationType: "مدنية", ayahCount: 8 },
  { number: 99, name: "الزلزلة", englishName: "Az-Zalzalah", revelationType: "مدنية", ayahCount: 8 },
  { number: 100, name: "العاديات", englishName: "Al-'Adiyat", revelationType: "مكية", ayahCount: 11 },
  { number: 101, name: "القارعة", englishName: "Al-Qari'ah", revelationType: "مكية", ayahCount: 11 },
  { number: 102, name: "التكاثر", englishName: "At-Takathur", revelationType: "مكية", ayahCount: 8 },
  { number: 103, name: "العصر", englishName: "Al-'Asr", revelationType: "مكية", ayahCount: 3 },
  { number: 104, name: "الهمزة", englishName: "Al-Humazah", revelationType: "مكية", ayahCount: 9 },
  { number: 105, name: "الفيل", englishName: "Al-Fil", revelationType: "مكية", ayahCount: 5 },
  { number: 106, name: "قريش", englishName: "Quraysh", revelationType: "مكية", ayahCount: 4 },
  { number: 107, name: "الماعون", englishName: "Al-Ma'un", revelationType: "مكية", ayahCount: 7 },
  { number: 108, name: "الكوثر", englishName: "Al-Kawthar", revelationType: "مكية", ayahCount: 3 },
  { number: 109, name: "الكافرون", englishName: "Al-Kafirun", revelationType: "مكية", ayahCount: 6 },
  { number: 110, name: "النصر", englishName: "An-Nasr", revelationType: "مدنية", ayahCount: 3 },
  { number: 111, name: "المسد", englishName: "Al-Masad", revelationType: "مكية", ayahCount: 5 },
  { number: 112, name: "الإخلاص", englishName: "Al-Ikhlas", revelationType: "مكية", ayahCount: 4 },
  { number: 113, name: "الفلق", englishName: "Al-Falaq", revelationType: "مكية", ayahCount: 5 },
  { number: 114, name: "الناس", englishName: "An-Nas", revelationType: "مكية", ayahCount: 6 }
];

// ═══════════════════════════════════════════════════════════════
// 2. موسوعة كبار القراء المعتمدين (22 مرتل + 7 مجود حصراً)
// ═══════════════════════════════════════════════════════════════
const ALL_RECITERS_DATA = [
  // ─── عمالقة المصحف المجود والمرتل (الرعيل الأول) ───
  {
    id: "hussary",
    name: "محمود خليل الحصري",
    category: "golden",
    supportsMurattal: true,
    supportsMojawwad: true,
    serverMurattal: "https://server13.mp3quran.net/husr/",
    serverMojawwad: "https://server13.mp3quran.net/husr_mjwd/",
    info: "شيخ عموم المقارئ المصرية وإمام التجويد والإتقان المتقن"
  },
  {
    id: "minshawi",
    name: "محمد صديق المنشاوي",
    category: "golden",
    supportsMurattal: true,
    supportsMojawwad: true,
    serverMurattal: "https://server10.mp3quran.net/minsh/",
    serverMojawwad: "https://server10.mp3quran.net/minsh_mjwd/",
    info: "الصوت الباكي العذب الخاشع رائد مدرسة الترتيل الحزينة"
  },
  {
    id: "abdulbasit",
    name: "عبد الباسط عبد الصمد",
    category: "golden",
    supportsMurattal: true,
    supportsMojawwad: true,
    serverMurattal: "https://server7.mp3quran.net/basit/",
    serverMojawwad: "https://server7.mp3quran.net/basit_mjwd/",
    info: "صوت مكة والأسطورة القرآنية الخالدة صاحب الحنجرة الذهبية"
  },
  {
    id: "mustafa",
    name: "مصطفى إسماعيل",
    category: "golden",
    supportsMurattal: true,
    supportsMojawwad: true,
    serverMurattal: "https://server8.mp3quran.net/mustafa/",
    serverMojawwad: "https://server8.mp3quran.net/mustafa/",
    info: "قارئ الملوك والرؤساء ومبدع المقامات وتفسير القرآن بالنغم"
  },
  {
    id: "rifaat",
    name: "الشيخ محمد رفعت",
    category: "golden",
    supportsMurattal: true,
    supportsMojawwad: true,
    serverMurattal: "https://server14.mp3quran.net/refat/",
    serverMojawwad: "https://cdn.mp3quran.net/audio/muhammad-refaat/r1/",
    info: "قيثارة السماء والصوت الملائكي الخاشع ورمز التلاوة التاريخي في مصر والعالم الإسلامي"
  },
  {
    id: "bahtimi",
    name: "كامل يوسف البهتيمي",
    category: "golden",
    supportsMurattal: false,
    supportsMojawwad: true,
    serverMurattal: "",
    serverMojawwad: "https://server10.mp3quran.net/bahtimi/",
    info: "سلطان التلاوة القرآنية وإمام روائع المحافل المجودة الخالدة"
  },
  {
    id: "banna",
    name: "محمود علي البنا",
    category: "golden",
    supportsMurattal: true,
    supportsMojawwad: true,
    serverMurattal: "https://server8.mp3quran.net/bna/",
    serverMojawwad: "https://server8.mp3quran.net/bna_mjwd/",
    info: "صاحب الصوت الرخيم الوقور المشرق وإمام المسجد الأحمدي بطنطا"
  },
  {
    id: "tablawi",
    name: "محمد محمود الطبلاوي",
    category: "golden",
    supportsMurattal: true,
    supportsMojawwad: true,
    serverMurattal: "https://server12.mp3quran.net/tblawi/",
    serverMojawwad: "https://server12.mp3quran.net/tblawi/",
    info: "نقيب قراء مصر الراحل وصاحب النبرة الشعبية المحبوبة المهيبة"
  },

  // ─── كوكبة أئمة المصحف المرتل المعتمدة ───
  {
    id: "sudais",
    name: "عبد الرحمن السديس",
    category: "harameen",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://server11.mp3quran.net/sds/",
    serverMojawwad: "",
    info: "إمام وخطيب المسجد الحرام ورئيس الشؤون الدينية بالحرمين"
  },
  {
    id: "shuraim",
    name: "سعود الشريم",
    category: "harameen",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://server7.mp3quran.net/shur/",
    serverMojawwad: "",
    info: "إمام المسجد الحرام السابق صاحب الصوت الشجي العذب المهيب"
  },
  {
    id: "maher",
    name: "ماهر المعيقلي",
    category: "harameen",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://server12.mp3quran.net/maher/",
    serverMojawwad: "",
    info: "إمام المسجد الحرام صاحب التلاوة الخاشعة المؤثرة في القلوب"
  },
  {
    id: "alafasy",
    name: "مشاري راشد العفاسي",
    category: "harameen",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://server8.mp3quran.net/afs/",
    serverMojawwad: "",
    info: "المصحف المرتل العذب كاملاً بصوت نقي برواية حفص عن عاصم"
  },
  {
    id: "ajmy",
    name: "أحمد بن علي العجمي",
    category: "contemporary",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://server10.mp3quran.net/ajm/",
    serverMojawwad: "",
    info: "صاحب التلاوة الحزينة الخاشعة ذات التأثير البالغ والانتشار"
  },
  {
    id: "dosari",
    name: "ياسر الدوسري",
    category: "harameen",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://server11.mp3quran.net/yasser/",
    serverMojawwad: "",
    info: "إمام وخطيب المسجد الحرام صاحب الصوت الجهوري الآسر البديع"
  },
  {
    id: "ghamdi",
    name: "سعد الغامدي",
    category: "contemporary",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://server7.mp3quran.net/s_gmd/",
    serverMojawwad: "",
    info: "المصحف المرتل المتقن الشهير بأدائه الهادئ المؤثر السلس"
  },
  {
    id: "hudhaify",
    name: "علي بن عبد الرحمن الحذيفي",
    category: "harameen",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://server9.mp3quran.net/hthfi/",
    serverMojawwad: "",
    info: "إمام وخطيب المسجد النبوي الشريف وأستاذ القراءات والتحقيق"
  },
  {
    id: "jaber",
    name: "علي عبد الله جابر",
    category: "harameen",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://server11.mp3quran.net/a_jbr/",
    serverMojawwad: "",
    info: "إمام الحرم المكي الشريف الراحل صاحب التلاوة الخاشعة الأسطورية"
  },
  {
    id: "shatri",
    name: "أبو بكر الشاطري",
    category: "contemporary",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://server11.mp3quran.net/shatri/",
    serverMojawwad: "",
    info: "الترتيل الحجازي العذب الرقيق ذو النبرة المؤثرة الباكية"
  },
  {
    id: "qatami",
    name: "ناصر القطامي",
    category: "contemporary",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://server6.mp3quran.net/qtm/",
    serverMojawwad: "",
    info: "صاحب التلاوة العاطفية الخاشعة وإمام جامع الملك عبد الله بالرياض"
  },
  {
    id: "abkar",
    name: "إدريس أبكر",
    category: "contemporary",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://server6.mp3quran.net/abkr/",
    serverMojawwad: "",
    info: "إمام جامع الشيخ زايد الكبير بأبوظبي صاحب التلاوة الآسرة"
  },
  {
    id: "soufi",
    name: "عبد الرشيد صوفي",
    category: "unique",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://server16.mp3quran.net/soufi/R رواية_حفص_عن_عاصم/",
    serverMojawwad: "",
    info: "شيخ القراءات ومتقن الروايات القرآنية بدقة إسناد عالية"
  },
  {
    id: "nourin",
    name: "نورين محمد صديق",
    category: "unique",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://server16.mp3quran.net/nourin/",
    serverMojawwad: "",
    info: "القارئ السوداني الراحل صاحب التلاوة الدورية الإفريقية الخاشعة"
  },
  {
    id: "kurdi",
    name: "رعد محمد الكردي",
    category: "contemporary",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://server6.mp3quran.net/kurdi/",
    serverMojawwad: "",
    info: "صوت عراقي شاب شجي نال محبة الملايين في العالم الإسلامي"
  },
  {
    id: "subhi",
    name: "إسلام صبحي",
    category: "contemporary",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://server14.mp3quran.net/islam/R/",
    serverMojawwad: "",
    info: "تلاوات هادئة مطمئنة للقلوب بأداء عصري خاشع"
  }
];

// ═══════════════════════════════════════════════════════════════
// 3. البث المباشر لإذاعة القرآن الكريم من القاهرة حصرياً
// ═══════════════════════════════════════════════════════════════
const RADIO_STATIONS = [
  {
    id: "cairo",
    name: "إذاعة القرآن الكريم من القاهرة - البث المباشر الرسمي",
    description: "البث الحي المباشر الرسمي على مدار 24 ساعة بدون انقطاع من القاهرة - مصر",
    streamUrl: "https://stream.radiojar.com/8s5u5tpdtwzuv",
    fallbackUrl: "https://n08.radiojar.com/8s5u5tpdtwzuv",
    fallbackUrls: [
      "https://stream.radiojar.com/8s5u5tpdtwzuv",
      "https://n08.radiojar.com/8s5u5tpdtwzuv",
      "https://n06.radiojar.com/8s5u5tpdtwzuv",
      "https://n0c.radiojar.com/8s5u5tpdtwzuv",
      "http://stream.radiojar.com/8s5u5tpdtwzuv",
      "http://n08.radiojar.com/8s5u5tpdtwzuv"
    ],
    icon: "📻",
    badge: "بث حي مستمر"
  }
];

// ═══════════════════════════════════════════════════════════════
// 4. موسوعة التواشيح والابتهالات الدينية الشاملة ونوادر التسجيلات
// ═══════════════════════════════════════════════════════════════
const IBTEHALAT_DATA = [
  // ─── 0. نوادر التسجيلات الخالدة (روائع التلاوات التاريخية النادرة) ───
  {
    id: "rare_refat_kahf",
    category: "rare_quran",
    title: "سورة الكهف المباركة (التسجيل التاريخي الخالد)",
    reciter: "الشيخ محمد رفعت",
    desc: "روائع التلاوات الخاشعة التي ارتبطت بيوم الجمعة في وجدان المسلمين",
    url: "https://cdn.mp3quran.net/audio/muhammad-refaat/r1/018.mp3",
    badge: "نوادر الجمعة",
    duration: "1:26:10"
  },
  {
    id: "rare_refat_maryam",
    category: "rare_quran",
    title: "سورة مريم كاملة (التسجيل التاريخي الخالد)",
    reciter: "الشيخ محمد رفعت",
    desc: "كهيعص.. تلاوة ملائكية تاريخية تهز القلوب بخشوع يفوق الوصف",
    url: "https://cdn.mp3quran.net/audio/muhammad-refaat/r1/019.mp3",
    badge: "قيثارة السماء",
    duration: "39:15"
  },
  {
    id: "rare_refat_yusuf",
    category: "rare_quran",
    title: "سورة يوسف (أحسن القصص)",
    reciter: "الشيخ محمد رفعت",
    desc: "إذ قال يوسف لأبيه.. أداء بديع يفيض بالإحساس والخشوع الرباني",
    url: "https://cdn.mp3quran.net/audio/muhammad-refaat/r1/012.mp3",
    badge: "تراث الإذاعة",
    duration: "48:35"
  },
  {
    id: "rare_refat_rahman",
    category: "rare_quran",
    title: "سورة الرحمن (عروس القرآن)",
    reciter: "الشيخ محمد رفعت",
    desc: "فبأي آلاء ربكما تكذبان.. نبرات خاشعة تبكي العيون من جلال التلاوة",
    url: "https://cdn.mp3quran.net/audio/muhammad-refaat/r1/055.mp3",
    badge: "عروس القرآن",
    duration: "29:05"
  },
  {
    id: "rare_refat_qisar",
    category: "rare_quran",
    title: "قصار السور (الضحى والشرح والتين)",
    reciter: "الشيخ محمد رفعت",
    desc: "والضحى والليل إذا سجى.. تلاوة نادرة تاريخية عذبة تفيض بالسكينة والإيمان",
    url: "https://cdn.mp3quran.net/audio/muhammad-refaat/r1/093.mp3",
    badge: "قصار السور الخالدة",
    duration: "18:20"
  },
  {
    id: "rare_basit_aqsa_isra",
    category: "rare_quran",
    title: "سورة الإسراء (محفل المسجد الأقصى المبارك 1964)",
    reciter: "الشيخ عبد الباسط عبد الصمد",
    desc: "سبحان الذي أسرى بعبده ليلاً من المسجد الحرام إلى المسجد الأقصى.. أعظم محفل تاريخي للشيخ بالأقصى",
    url: "https://archive.org/download/khaled_alridwany_201707/%D8%A7%D9%84%D8%A7%D8%B3%D8%B1%D8%A7%D8%A1%20%D8%AA%D9%84%D8%A7%D9%88%D8%A9%202%20%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF%20%D8%A7%D9%84%D8%A7%D9%82%D8%B5%D9%89%201964.mp3",
    badge: "نوادر المسجد الأقصى",
    duration: "34:20"
  },
  {
    id: "rare_basit_aqsa_yusuf",
    category: "rare_quran",
    title: "سورة يوسف وقصار السور (محفل المسجد الأقصى)",
    reciter: "الشيخ عبد الباسط عبد الصمد",
    desc: "تسجيل تاريخي مهيب من رحاب القدس الشريف بأعلى درجات السلطنة والتجويد",
    url: "https://archive.org/download/khaled_alridwany_201707/%D9%8A%D9%88%D8%B3%D9%81%20-%20%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF%20%D8%A7%D9%84%D8%A3%D9%82%D8%B5%D9%89.mp3",
    badge: "نوادر المسجد الأقصى",
    duration: "42:15"
  },
  {
    id: "rare_basit_aqsa_qamar",
    category: "rare_quran",
    title: "سورة القمر والرحمن وقصار السور (المسجد الأقصى)",
    reciter: "الشيخ عبد الباسط عبد الصمد",
    desc: "اقتربت الساعة وانشق القمر.. من أندر تسجيلات الشيخ التاريخية بالقدس الشريف",
    url: "https://archive.org/download/khaled_alridwany_201707/%D8%A7%D9%84%D9%82%D9%85%D8%B1%20%D9%88%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86%20%D9%88%D8%A7%D9%84%D8%A8%D9%84%D8%AF%20%D9%88%D8%A7%D9%84%D8%B4%D9%85%D8%B3%20%D9%88%D8%A7%D9%84%D8%AA%D9%8A%D9%86%20%D9%88%D8%A7%D9%84%D9%86%D8%B5%D8%B1%20-%20%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF%20%D8%A7%D9%84%D8%A3%D9%82%D8%B5%D9%89.mp3",
    badge: "نوادر المسجد الأقصى",
    duration: "38:40"
  },
  {
    id: "rare_basit_umayyad_maryam",
    category: "rare_quran",
    title: "سورة مريم وقصار السور (المسجد الأموي بدمشق)",
    reciter: "الشيخ عبد الباسط عبد الصمد",
    desc: "التلاوة الشامية الخالدة التي أبهرت دمشق وسجلت في التاريخ بأنصع الحروف",
    url: "https://server7.mp3quran.net/basit_mjwd/019.mp3",
    badge: "المسجد الأموي",
    duration: "31:10"
  },
  {
    id: "rare_mustafa_abdeen_hajj",
    category: "rare_quran",
    title: "سورة الحج وقصار السور (محفل الجامع الأزهر وقصر عابدين)",
    reciter: "الشيخ مصطفى إسماعيل",
    desc: "يا أيها الناس اتقوا ربكم.. قمة إعجاز المقامات وتفسير القرآن الكريم بالنغم في رحاب الأزهر الشريف",
    url: "https://cdn.mp3quran.net/audio/mustafa-ismail/r1/022.mp3",
    badge: "محفل الجامع الأزهر",
    duration: "52:40"
  },
  {
    id: "rare_mustafa_maryam",
    category: "rare_quran",
    title: "سورة مريم (محفل نادر تاريخي)",
    reciter: "الشيخ مصطفى إسماعيل",
    desc: "روائع الشيخ مصطفى إسماعيل في استعراض مقامات التلاوة والخشوع الملكي الفخم",
    url: "https://cdn.mp3quran.net/audio/mustafa-ismail/r1/019.mp3",
    badge: "محفل ملكي نادر",
    duration: "46:25"
  },
  {
    id: "rare_jaber_haram_rahman",
    category: "rare_quran",
    title: "سورة الرحمن (تسجيلات الحرم المكي التاريخية)",
    reciter: "الشيخ علي جابر",
    desc: "تلاوة الحرم المكي الشريف التاريخية التي أحيت القلوب في ليالي رمضان العطرة",
    url: "https://cdn.mp3quran.net/audio/ali-jaber/r1/055.mp3",
    badge: "تراويح الحرم المكي",
    duration: "14:15"
  },
  {
    id: "rare_jaber_haram_qiyamah",
    category: "rare_quran",
    title: "سورة القيامة والبلد (تسجيلات الحرم المكي التاريخية)",
    reciter: "الشيخ علي جابر",
    desc: "لا أقسم بيوم القيامة.. أداء حجازي مؤثر وخشوع يبكي جموع المصلين بالحرم المكي",
    url: "https://cdn.mp3quran.net/audio/ali-jaber/r1/075.mp3",
    badge: "تراويح الحرم المكي",
    duration: "11:50"
  },
  {
    id: "rare_bahtimi_maryam",
    category: "rare_quran",
    title: "سورة مريم (محفل الجامع الأزهر الشريف كامل)",
    reciter: "الشيخ كامل يوسف البهتيمي",
    desc: "سلطان التلاوة القرآنية في أروع تجلياته الصوتية والمقامية برحاب الجامع الأزهر",
    url: "https://archive.org/download/way2sona_20160405_2216/030-_2.mp3",
    badge: "محفل الجامع الأزهر",
    duration: "45:30"
  },
  {
    id: "rare_bahtimi_isra",
    category: "rare_quran",
    title: "سورة الإسراء (محفل الجامع الأزهر النادر)",
    reciter: "الشيخ كامل يوسف البهتيمي",
    desc: "وقضى ربك ألا تعبدوا إلا إياه.. تلاوة شجية من نفحات الرعيل الأول المخلص بالجامع الأزهر",
    url: "https://archive.org/download/way2sona_20160405_2216/006-_2.mp3",
    badge: "محفل الجامع الأزهر",
    duration: "41:15"
  },
  {
    id: "rare_salama_anbiya",
    category: "rare_quran",
    title: "سورة الأنبياء والواقعة (محفل تاريخي نادر)",
    reciter: "الشيخ محمد سلامة",
    desc: "شيخ القراء وأستاذ عمالقة التلاوة في تسجيل تاريخي نادر يحفظ عبق الزمان الجميل",
    url: "https://archive.org/download/20240312_20240312_0307/021.mp3",
    badge: "شيخ المقارئ",
    duration: "36:45"
  },
  // ─── 1. نفحات وتواشيح رمضان التراثية ───
  {
    id: "ramadan_madfa",
    category: "ramadan",
    title: "مدفع الإفطار (النسخة الأصلية الكاملة مع أذان المغرب)",
    reciter: "تراث الإذاعة المصرية",
    desc: "مدفع الإفطار اضرب.. صوت الإفطار التاريخي المحفور في وجدان الأمة",
    url: "https://archive.org/download/20260913_20260913_1334/%D9%85%D8%AF%D9%81%D8%B9%20%D8%A7%D9%84%D8%A5%D9%81%D8%B7%D8%A7%D8%B1%20%D8%A7%D9%84%D9%86%D8%B3%D8%AE%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B5%D9%84%D9%8A%D8%A9.mp3",
    badge: "تراث رمضاني",
    duration: "02:15"
  },
  {
    id: "ramadan_azan_refat",
    category: "ramadan",
    title: "أذان المغرب الخالد",
    reciter: "الشيخ محمد رفعت",
    desc: "أذان مغرب رمضان الأسطوري الذي ارتبط بذكريات المسلمين لعقود",
    url: "https://archive.org/download/moharram1965_gmail_20180227/%D8%A7%D8%B0%D8%A7%D9%86%20%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%20%D9%84%D9%81%D8%B6%D9%8A%D9%84%D8%A9%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%B1%D9%81%D8%B9%D8%AA%20%D8%B1%D8%AD%D9%85%D8%A9%20%D8%A7%D9%84%D9%84%D9%87%20%20%D8%A7%D8%AD%D9%85%D8%AF%20%D8%B9%D8%A8%D8%AF%D9%87%20%D9%88%D9%85%D8%AF%D8%A7%D8%B1%D8%B3%20%D8%A7%D9%84%D8%AA%D9%84%D8%A7%D9%88%D8%A9.mp3",
    badge: "تسجيل تاريخي",
    duration: "04:32"
  },
  {
    id: "ramadan_marhab",
    category: "ramadan",
    title: "مرحب شهر الصوم مرحب",
    reciter: "عبد العزيز محمود",
    desc: "أنشودة استقبال شهر رمضان المبارك الرسمية في الإذاعة المصرية",
    url: "https://archive.org/download/Sama3almelouk_yahoo_20160518_1125/%D9%85%D8%B1%D8%AD%D8%A8%20%D8%B4%D9%87%D8%B1%20%D8%A7%D9%84%D8%B5%D9%88%D9%85.mp3",
    badge: "أيقونة رمضان",
    duration: "03:45"
  },
  {
    id: "ramadan_tobar_ashraq",
    category: "ramadan",
    title: "رمضان أشرق بالهدى",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "ابتهال رمضاني نادر ومؤثر في استقبال ونفحات شهر الصيام",
    url: "https://archive.org/download/NasrEldin-TobartheBestOfIslamicNashed/%D8%B1%D9%85%D8%B6%D8%A7%D9%86%20%D8%A3%D8%B4%D8%B1%D9%82.mp3",
    badge: "نفحات الصيام",
    duration: "07:22"
  },
  {
    id: "ramadan_laylat_qadr",
    category: "ramadan",
    title: "ليلة القدر يا نوراً تجلى",
    reciter: "الشيخ سيد النقشبندي",
    desc: "روائع الابتهالات الرمضانية في فضل ليلة القدر المباركة",
    url: "https://archive.org/download/Sayed-AlnaqshabandytheBestOfIslamicNashed/%D9%84%D9%8A%D9%84%D8%A9%20%D8%A7%D9%84%D9%82%D8%AF%D8%B1.mp3",
    badge: "العشر الأواخر",
    duration: "08:14"
  },
  {
    id: "ramadan_nafs_tashku",
    category: "ramadan",
    title: "النفس تشكو ومن لي أن أداويها",
    reciter: "الشيخ سيد النقشبندي",
    desc: "مناجاة وتوبة خاشعة تهز الوجدان وتلين القلوب في ليالي رمضان",
    url: "https://archive.org/download/Sayed-AlnaqshabandytheBestOfIslamicNashed/%D8%A7%D9%84%D9%86%D9%81%D8%B3%20%D8%AA%D8%B4%D9%83%D9%88.mp3",
    badge: "توبة ومناجاة",
    duration: "06:50"
  },
  {
    id: "ramadan_ahlan_rabia",
    category: "ramadan",
    title: "أهلاً بربيع الهدى (وافى ربيع فمرحباً)",
    reciter: "الشيخ سيد النقشبندي",
    desc: "ابتهال نادر وبديع في مدح الحبيب المصطفى ﷺ وأنوار ميلاده",
    url: "https://archive.org/download/Sama3almelouk_yahoo_20160525/%D8%A8%D8%B3%D9%85%20%D8%A7%D9%84%D9%84%D9%87%20%D9%88%D9%84%D8%AC%D9%86%D8%A7%20%20%D9%88%D8%A7%D9%81%D9%8A%20%D8%B1%D8%A8%D9%8A%D8%B9%20%D9%81%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B.MP3",
    badge: "مديح نبوي",
    duration: "09:30"
  },

  // ─── 2. موسوعة الشيخ نصر الدين طوبار كاملاً ───
  {
    id: "tobar_mojeeb",
    category: "tobour",
    title: "يا مجيب السائلين",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "درة ابتهالات الفجر الخالدة.. يا سالك الدرب لا تركن إلى الدعة",
    url: "https://archive.org/download/NasrEldin-TobartheBestOfIslamicNashed/%D9%85%D8%AC%D9%8A%D8%A8%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A6%D9%84%D9%8A%D9%86.mp3",
    badge: "أيقونة الفجر",
    duration: "11:15"
  },
  {
    id: "tobar_sobh",
    category: "tobour",
    title: "حين يهدي الصبح إشراق سناه",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "تحفة فجرية بديعة تشرح الصدور وتملأ النفس بالسكينة واليقين",
    url: "https://archive.org/download/NasrEldin-TobartheBestOfIslamicNashed/%D8%AD%D9%8A%D9%86%20%D9%8A%D9%87%D8%AF%D9%8A%20%D8%A7%D9%84%D8%B5%D8%A8%D8%AD%20%D8%A7%D8%B4%D8%B1%D8%A7%D9%82%20%D8%B3%D9%86%D8%A7%D9%87.mp3",
    badge: "شروق وإيمان",
    duration: "10:40"
  },
  {
    id: "tobar_baree",
    category: "tobour",
    title: "يا بارئ الكون",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "تسبيح عظيم وتأمل خاشع في ملكوت السموات والأرض",
    url: "https://archive.org/download/NasrEldin-TobartheBestOfIslamicNashed/%D9%8A%D8%A7%20%D8%A8%D8%A7%D8%B1%D8%A6%20%D8%A7%D9%84%D9%83%D9%88%D9%86.mp3",
    badge: "توحيد وتسبيح",
    duration: "09:20"
  },
  {
    id: "tobar_ghareeb",
    category: "tobour",
    title: "غريب يا رب حرت في دنياي",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "مناجاة الغريب المستجير بباب ربه الكريم الرحيم",
    url: "https://archive.org/download/NasrEldin-TobartheBestOfIslamicNashed/%D8%BA%D8%B1%D9%8A%D8%A8.mp3",
    badge: "مناجاة خاشعة",
    duration: "08:50"
  },
  {
    id: "tobar_kol_quloob",
    category: "tobour",
    title: "كل القلوب إلى الحبيب تميل",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "ومعي بذلك شاهد ودليل.. أما الدليل إذا ذكرت محمداً",
    url: "https://archive.org/download/NasrEldin-TobartheBestOfIslamicNashed/%D9%83%D9%84%20%D8%A7%D9%84%D9%82%D9%84%D9%88%D8%A8%20%D8%A7%D9%84%D9%8A%20%D8%A7%D9%84%D8%AD%D8%A8%D9%8A%D8%A8%20%D8%AA%D9%85%D9%8A%D9%84.mp3",
    badge: "مديح نبوي",
    duration: "07:18"
  },
  {
    id: "tobar_salik_darb",
    category: "tobour",
    title: "يا سالك الدرب",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "ابتهال نادر من أروع ما أنشد الشيخ في التوكل والثبات",
    url: "https://archive.org/download/NasrEldin-TobartheBestOfIslamicNashed/%D9%8A%D8%A7%20%D8%B3%D8%A7%D9%84%D9%83%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A8.mp3",
    badge: "هداية واستقامة",
    duration: "08:05"
  },
  {
    id: "tobar_howa_allah",
    category: "tobour",
    title: "هو الله جل جلاله",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "تسبيح جامع في صفات الجلال والجمال والكمال الإلهي",
    url: "https://archive.org/download/NasrEldin-TobartheBestOfIslamicNashed/%D9%87%D9%88%20%D8%A7%D9%84%D9%84%D9%87.mp3",
    badge: "أسماء الله الحسنى",
    duration: "09:45"
  },
  {
    id: "tobar_qabas",
    category: "tobour",
    title: "قبس من الرحمن (ضياؤك مشكاتي)",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "وفيضك منبعي.. من أندر ابتهالات الشيخ طوبار التاريخية النورانية",
    url: "https://archive.org/download/54696850/%D9%86%D8%B5%D8%B1%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%B7%D9%88%D8%A8%D8%A7%D8%B1..%20%D8%B6%D9%8A%D9%80%D8%A7%D8%A4%D9%8F%D9%83%D9%8E%20%D9%85%D9%90%D8%B4%D9%83%D9%80%D8%A7%D8%AA%D9%8A%D8%8C%20%D9%88%D9%8E%D9%81%D9%8E%D9%8A%D8%B6%D9%8F%D9%83%20%D9%85%D9%8E%D9%86%D9%92%D8%A8%D9%8E%D8%B9%D9%8A-146974749.mp3",
    badge: "تسجيل نادر",
    duration: "12:30"
  },
  {
    id: "tobar_taer_rooh",
    category: "tobour",
    title: "طائر الروح (الطير سبحه)",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "الطير سبحه والوحش مجده.. والموج كبره والحوت ناجاه",
    url: "https://archive.org/download/54696850/%D9%86%D8%B5%D8%B1%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%B7%D9%88%D8%A8%D8%A7%D8%B1..%20%D8%A7%D9%84%D8%B7%D9%8A%D9%80%D8%B1%D9%8F%20%D8%B3%D9%8E%D8%A8%D9%91%D8%AD%D9%8E%D9%87%D9%8F-160192738.mp3",
    badge: "تسبيح الكائنات",
    duration: "10:15"
  },

  // ─── 3. موسوعة الشيخ سيد النقشبندي كاملاً ───
  {
    id: "naqsh_mawlay",
    category: "naqshbandi",
    title: "مولاي إني ببابك قد بسطت يدي",
    reciter: "الشيخ سيد النقشبندي",
    desc: "أعظم ابتهال في تاريخ الإنشاد الديني بالتعاون مع الموسيقار بليغ حمدي",
    url: "https://archive.org/download/Sayed-AlnaqshabandytheBestOfIslamicNashed/%D9%85%D9%88%D9%84%D8%A7%D9%8A%20%D8%A7%D9%86%D9%8A%20%D8%A8%D8%A8%D8%A7%D8%A8%D9%83.mp3",
    badge: "تاج الابتهالات",
    duration: "05:42"
  },
  {
    id: "naqsh_aqool_ommati",
    category: "naqshbandi",
    title: "أقول أمتي يا رب أمتي",
    reciter: "الشيخ سيد النقشبندي",
    desc: "شفاعة النبي الأكرم ﷺ يوم القيامة بأداء يبكي العيون والقلوب",
    url: "https://archive.org/download/Sayed-AlnaqshabandytheBestOfIslamicNashed/%D8%A7%D9%82%D9%88%D9%84%20%D8%A7%D9%85%D8%AA%D9%8A.mp3",
    badge: "شفاعة الحبيب",
    duration: "06:18"
  },
  {
    id: "naqsh_aal_bayt",
    category: "naqshbandi",
    title: "يا آل بيت النبي (يا آل طه)",
    reciter: "الشيخ سيد النقشبندي",
    desc: "محبة آل البيت الأطهار والصلاة على الحبيب المصطفى ﷺ",
    url: "https://archive.org/download/Sayed-AlnaqshabandytheBestOfIslamicNashed/%D9%8A%D8%A7%20%D8%A7%D9%84%20%D8%A8%D9%8A%D8%AA%20%D8%A7%D9%84%D9%86%D8%A8%D9%8A.mp3",
    badge: "محبة آل البيت",
    duration: "07:35"
  },
  {
    id: "naqsh_ashraq_masoom",
    category: "naqshbandi",
    title: "أشرق المعصوم (لما بدا في الأفق نور)",
    reciter: "الشيخ سيد النقشبندي",
    desc: "نور النبوة وإشراق الرسالة المحمدية بأنوار الهدى والإيمان",
    url: "https://archive.org/download/Sayed-AlnaqshabandytheBestOfIslamicNashed/%D8%A7%D8%B4%D8%B1%D9%82%20%D8%A7%D9%84%D9%85%D8%B9%D8%B5%D9%88%D9%85.mp3",
    badge: "أنوار المولد",
    duration: "08:12"
  },
  {
    id: "naqsh_mashi_benoor",
    category: "naqshbandi",
    title: "ماشي بنور الله",
    reciter: "الشيخ سيد النقشبندي",
    desc: "ماشي بنور الله أدعي وأقول يا رب.. من أرق ما شدى به قيثارة السماء",
    url: "https://archive.org/download/Sayed-AlnaqshabandytheBestOfIslamicNashed/%D9%85%D8%A7%D8%B4%D9%8A%20%D8%A8%D9%86%D9%88%D8%B1%20%D8%A7%D9%84%D9%84%D9%87.mp3",
    badge: "نور وسكينة",
    duration: "04:55"
  },
  {
    id: "naqsh_in_azomat",
    category: "naqshbandi",
    title: "يا رب إن عظمت ذنوبي كثرة",
    reciter: "الشيخ سيد النقشبندي",
    desc: "فلقد علمت بأن عفوك أعظم.. أبيات الإمام الشافعي بأداء باهر",
    url: "https://archive.org/download/54696850/%D8%B3%D9%8A%D8%AF%20%D8%A7%D9%84%D9%86%D9%82%D8%B4%D8%A8%D9%86%D8%AF%D9%8A%20_%20%D8%A5%D9%86%20%D8%B9%D8%B8%D9%85%D8%AA%20%D8%B0%D9%86%D9%88%D8%A8%D9%8A'%20%D8%A5%D9%86%D8%AA%D8%A7%D8%AC%20%D8%A7%D9%84%D8%A3%D8%B3%D9%88%D8%AF%20'-205796183.mp3",
    badge: "استغفار ورجاء",
    duration: "08:45"
  },
  {
    id: "naqsh_ayoha_sahir",
    category: "naqshbandi",
    title: "أيها الساهر أضناك الضنى",
    reciter: "الشيخ سيد النقشبندي",
    desc: "دعوة المؤمنين لقيام الليل ومناجاة السميع القريب في الأسحار",
    url: "https://archive.org/download/Sama3almelouk_yahoo_20160525/%D8%A3%D9%8A%D9%87%D8%A7%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A6%D9%84.mp3",
    badge: "نفحات الأسحار",
    duration: "07:50"
  },

  // ─── 4. روائع الشيخ طه الفشني ───
  {
    id: "fashni_mokhtar",
    category: "fashni",
    title: "يا أيها المختار من خير الورى",
    reciter: "الشيخ طه الفشني",
    desc: "تاج التواشيح الصوفية الخالدة وإمام المنشدين في مدح خير البرية",
    url: "https://archive.org/download/Taha-ElfashnetheBestOfIslamicNashed/%D9%8A%D8%A7%20%D8%A7%D9%8A%D9%87%D8%A7%20%D8%A7%D9%84%D9%85%D8%AE%D8%AA%D8%A7%D8%B1.mp3",
    badge: "سيد التواشيح",
    duration: "13:20"
  },
  {
    id: "fashni_hob_hussein",
    category: "fashni",
    title: "حب الحسين وسيلة وتوسل",
    reciter: "الشيخ طه الفشني",
    desc: "توشيح خالد من أرق ما أنشد الفشني في محبة السبط الشهيد وآل البيت",
    url: "https://archive.org/download/Taha-ElfashnetheBestOfIslamicNashed/%D8%AD%D8%A8%20%D8%A7%D9%84%D8%AD%D8%B3%D9%8A%D9%86.mp3",
    badge: "شوق ومحبة",
    duration: "09:15"
  },
  {
    id: "fashni_meelad_taha",
    category: "fashni",
    title: "ميلاد طه أشرقت أنواره",
    reciter: "الشيخ طه الفشني",
    desc: "بشارة ميلاد المصطفى ﷺ بأداء فخم ومقامات صوتية بديعة نادرة",
    url: "https://archive.org/download/Taha-ElfashnetheBestOfIslamicNashed/%D9%85%D9%8A%D9%84%D8%A7%D8%AF%20%D8%B7%D9%87.mp3",
    badge: "المولد النبوي",
    duration: "11:40"
  },
  {
    id: "fashni_ilahi_lazimtu",
    category: "fashni",
    title: "إلهي لزمت باب الرجا",
    reciter: "الشيخ طه الفشني",
    desc: "تضرع واستغاثة خاشعة بالله العلي القدير في جوف الليل البهيم",
    url: "https://archive.org/download/Taha-ElfashnetheBestOfIslamicNashed/%D8%A7%D9%84%D9%87%D9%8A%20%D9%84%D8%B2%D9%85%D8%AA%20%D8%A8%D8%A7%D8%A8%20%D8%A7%D9%84%D8%B1%D8%AC%D8%A7.mp3",
    badge: "تضرع ورجاء",
    duration: "08:30"
  },

  // ─── 5. عباقرة الإنشاد: الشيخ محمد عمران والشيخ محمد الفيومي ───
  {
    id: "omran_lotf",
    category: "omran_fayoumi",
    title: "فكم لله من لطف خفي",
    reciter: "الشيخ محمد عمران",
    desc: "يدق خفاه عن فهم الذكي.. قمة الإبداع الصوتي والنغمي الفريد",
    url: "https://archive.org/download/Mohamed-OmrantheBestOfIslamicNashed/%D9%81%D9%83%D9%85%20%D9%84%D9%84%D9%87%20%D9%85%D9%86%20%D9%84%D8%B7%D9%81%20%D8%AE%D9%81%D9%8A.mp3",
    badge: "قمة المقامات",
    duration: "14:10"
  },
  {
    id: "omran_sayed_kawnayn",
    category: "omran_fayoumi",
    title: "يا سيد الكونين يا علم الهدى",
    reciter: "الشيخ محمد عمران",
    desc: "مديح نبوي فائق الروعة يحلق بالسامعين في آفاق المحبة والجمال",
    url: "https://archive.org/download/Mohamed-OmrantheBestOfIslamicNashed/%D9%8A%D8%A7%20%D8%B3%D9%8A%D8%AF%20%D8%A7%D9%84%D9%83%D9%88%D9%86%D9%8A%D9%86.mp3",
    badge: "مديح شريف",
    duration: "10:25"
  },
  {
    id: "omran_adrikna",
    category: "omran_fayoumi",
    title: "أدركنا يا رسول الله",
    reciter: "الشيخ محمد عمران",
    desc: "استغاثة ومديح خاشع بصوت قيثارة الإنشاد الشيخ محمد عمران",
    url: "https://archive.org/download/Mohamed-OmrantheBestOfIslamicNashed/%D8%A7%D8%AF%D8%B1%D9%83%D9%86%D8%A7%20%D9%8A%D8%A7%20%D8%B1%D8%B3%D9%88%D9%84%20%D8%A7%D9%84%D9%84%D9%87.mp3",
    badge: "شوق للرسول",
    duration: "09:40"
  },
  {
    id: "omran_asmaa_allah",
    category: "omran_fayoumi",
    title: "أسماء الله الحسنى",
    reciter: "الشيخ محمد عمران",
    desc: "إنشاد جليل لأسماء الله الحسنى التسعة والتسعين بأداء مهيب",
    url: "https://archive.org/download/Mohamed-OmrantheBestOfIslamicNashed/%D8%A7%D8%B3%D9%85%D8%A7%D8%A1%20%D8%A7%D9%84%D9%84%D9%87%20%D8%A7%D9%84%D8%AD%D8%B3%D9%86%D9%8A.mp3",
    badge: "أسماء الجلال",
    duration: "12:50"
  },
  {
    id: "fayoumi_amana_khawf",
    category: "omran_fayoumi",
    title: "أماناً أيها الخوف (أنت الحمى وأنت الأمان)",
    reciter: "الشيخ محمد الفيومي وسيد النقشبندي",
    desc: "تسجيل مشترك نادر وتاريخي يجمع بين عملاقين من عمالقة الابتهال",
    url: "https://archive.org/download/54696850/%D8%A3%D9%86%D8%AA%D9%8E%20%D8%A3%D9%86%D8%AA%D9%8E%20%D8%A7%D9%84%D8%AD%D9%90%D9%85%D9%8E%D9%89%20%D9%88%D8%A3%D9%86%D8%AA%D9%8E%20%D8%A7%D9%84%D8%A3%D9%85%D9%8E%D8%A7%D9%86%D9%8F%20%20-%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B3%D9%8A%D8%AF%20%D8%A7%D9%84%D9%86%D9%82%D8%B4%D8%A8%D9%86%D8%AF%D9%8A-103912025.mp3",
    badge: "لقاء العمالقة",
    duration: "08:10"
  },
  {
    id: "fayoumi_sameea_baseer",
    category: "omran_fayoumi",
    title: "إلهي يا سميع ويا بصير",
    reciter: "الشيخ محمد الفيومي",
    desc: "شيخ المنشدين وإمام جامع الإمام الحسين عليه السلام في تضرع فجر باهر",
    url: "https://archive.org/download/54696850/%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D9%81%D9%8A%D9%88%D9%85%D9%8A%20-%20%D8%A5%D8%A8%D8%AA%D9%87%D8%A7%D9%84%20%D8%A5%D9%84%D9%87%D9%89%20%D9%8A%D8%A7%20%D8%B3%D9%85%D9%8A%D8%B9%20%D9%88%20%D9%8A%D8%A7%20%D8%A8%D8%B5%D9%8A%D8%B1-235896310.mp3",
    badge: "تراث الحسين",
    duration: "07:45"
  }
];

// ═══════════════════════════════════════════════════════════════
// 5. نظام التجدد التلقائي اليومي (31 يوماً كاملاً بنصوص عربية صحيحة وفخمة)
// ═══════════════════════════════════════════════════════════════
const DAILY_RENEWAL_DATA = [
  {
    day: 1,
    dua: "اللهم إنا نسألك زيادة في الدين وبركة في العمر وصحة في الجسد وسعة في الرزق وعفواً عند الحساب",
    wird: "قراءة سورة الفاتحة وأول ٥ آيات من سورة البقرة مع التدبر في معاني الهداية"
  },
  {
    day: 2,
    dua: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    wird: "قراءة سورة البقرة (الآيات 151 إلى 163) والتدبر في الصبر والشكر وذكر الله"
  },
  {
    day: 3,
    dua: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ، وَارْزُقْنِي قَلْبًا سَلِيمًا خَاشِعًا",
    wird: "قراءة سورة البقرة (آية الكرسي وخواتيم البقرة: الآيتان 285 و286)"
  },
  {
    day: 4,
    dua: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
    wird: "قراءة أوائل سورة آل عمران (الآيات 1 إلى 18) مع استشعار عظمة التوحيد"
  },
  {
    day: 5,
    dua: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي",
    wird: "قراءة سورة آل عمران (الآيات 190 إلى 200) وتأمل خلق السموات والأرض"
  },
  {
    day: 6,
    dua: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي",
    wird: "قراءة سورة طه (الآيات 1 إلى 40) والتدبر في قصة كليم الله موسى عليه السلام"
  },
  {
    day: 7,
    dua: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي بَصَرِي نُورًا، وَفِي سَمْعِي نُورًا، وَاجْعَلْ لِي نُورًا",
    wird: "قراءة آية النور في سورة النور (الآية 35) مع التدبر في أنوار الإيمان"
  },
  {
    day: 8,
    dua: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ، فَاسْتَجَبْنَا لَهُ وَنَجَّيْنَاهُ مِنَ الْغَمِّ",
    wird: "قراءة سورة الأنبياء (الآيات 83 إلى 90) وأدعية الأنبياء في الشدائد"
  },
  {
    day: 9,
    dua: "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ وَجِلَّهُ، وَأَوَّلَهُ وَآخِرَهُ، وَعَلَانِيَتَهُ وَسِرَّهُ",
    wird: "قراءة سورة الفرقان (الآيات 63 إلى 77) في صفات عباد الرحمن الأبرار"
  },
  {
    day: 10,
    dua: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    wird: "قراءة سورة الإسراء (الآيات 23 إلى 39) والوصايا الربانية الجليلة"
  },
  {
    day: 11,
    dua: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا مَبْرُورًا",
    wird: "قراءة سورة الكهف (الآيات 1 إلى 20) قصة أصحاب الكهف والاعتصام بالحق"
  },
  {
    day: 12,
    dua: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ",
    wird: "قراءة سورة النمل (الآيات 15 إلى 30) في تسخير النعم وشكر المنعم سبحانه"
  },
  {
    day: 13,
    dua: "اللَّهُمَّ اكْفِنَا بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنَا بِفَضْلِكَ عَمَّنْ سِوَاكَ يَا أَكْرَمَ الأَكْرَمِينَ",
    wird: "قراءة سورة مريم (الآيات 1 إلى 25) وقدرة الله المطلقة في استجابة الدعاء"
  },
  {
    day: 14,
    dua: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
    wird: "قراءة سورة الأعراف (الآيات 11 إلى 25) وعبرة خلق آدم وتوبة الأبوين"
  },
  {
    day: 15,
    dua: "اللَّهُمَّ يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ، وَيَا مُصَرِّفَ الْقُلُوبِ صَرِّفْ قَلْبِي عَلَى طَاعَتِكَ",
    wird: "قراءة سورة يس كاملة ونيل بركة قلب القرآن الكريم في طمأنينة النفس"
  },
  {
    day: 16,
    dua: "اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي وَعَنْ وَالِدَيَّ وَالْمُسْلِمِينَ",
    wird: "قراءة سورة الصافات (الآيات 83 إلى 113) وفداء الخليل إبراهيم عليه السلام"
  },
  {
    day: 17,
    dua: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ، فَفَرِّجْ هَمِّي وَيَسِّرْ أَمْرِي",
    wird: "قراءة سورة القصص (الآيات 20 إلى 28) والتوسل إلى الله عند الافتقار إليه"
  },
  {
    day: 18,
    dua: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْبُخْلِ، وَغَلَبَةِ الدَّيْنِ",
    wird: "قراءة سورة الحشر (الآيات 18 إلى 24) وتأمل أسماء الله الحسنى العليا"
  },
  {
    day: 19,
    dua: "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ، لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا",
    wird: "قراءة سورة الممتحنة (الآيات 4 إلى 9) في كمال التوكل والتبرؤ من الشرك"
  },
  {
    day: 20,
    dua: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ، عَدَدَ خَلْقِكَ وَرِضَا نَفْسِكَ وَزِنَةَ عَرْشِكَ",
    wird: "قراءة سورة الأحزاب (الآيات 40 إلى 56) والأمر الإلهي بالصلاة على النبي ﷺ"
  },
  {
    day: 21,
    dua: "رَبِّ زِدْنِي عِلْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ، وَاجْعَل لِّي لِسَانَ صِدْقٍ فِي الآخِرِينَ",
    wird: "قراءة سورة الشعراء (الآيات 69 إلى 89) ودعاء إبراهيم بقلب سليم"
  },
  {
    day: 22,
    dua: "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي",
    wird: "قراءة سورة الروم (الآيات 17 إلى 27) في آيات الله المبثوثة في الآفاق"
  },
  {
    day: 23,
    dua: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    wird: "قراءة أواخر سورة التوبة (الآيتان 128 و129) في محبة النبي ﷺ والتوكل"
  },
  {
    day: 24,
    dua: "اللَّهُمَّ بَارِكْ لَنَا فِي أَوْقَاتِنَا وَأَعْمَالِنَا وَأَهْلِينَا، وَاجْعَلْنَا مُبَارَكِينَ أَيْنَمَا كُنَّا",
    wird: "قراءة سورة لقمان (الآيات 12 إلى 19) ووصايا الحكمة للأبناء والبر"
  },
  {
    day: 25,
    dua: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
    wird: "قراءة سورة إبراهيم (الآيات 35 إلى 41) ودعوات البيت الحرام والبركة"
  },
  {
    day: 26,
    dua: "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُسْنَ الْخَاتِمَةِ، وَالْفَوْزَ بِالْجَنَّةِ وَالنَّجَاةَ مِنَ النَّارِ",
    wird: "قراءة سورة الملك (الآيات 1 إلى 30) كاملة المنجية من عذاب القبر"
  },
  {
    day: 27,
    dua: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنَّا، وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا",
    wird: "قراءة سورة القدر وسورة الشرح وتأمل مواسم الرحمة ومضاعفة الأجور"
  },
  {
    day: 28,
    dua: "اللَّهُمَّ رَبَّنَا تَقَبَّلْ مِنَّا صَلَاتَنَا وَصِيَامَنَا وَقِيَامَنَا وَرُكُوعَنَا وَسُجُودَنَا",
    wird: "قراءة سورة الواقعة كاملة والتدبر في أحوال السابقين وأصحاب اليمين"
  },
  {
    day: 29,
    dua: "اللَّهُمَّ اجْعَلْ آخِرَ كَلَامِنَا مِنَ الدُّنْيَا لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ",
    wird: "قراءة سورة الرحمن كاملة وتعداد آلاء الله الباهرة (فبأي آلاء ربكما تكذبان)"
  },
  {
    day: 30,
    dua: "اللَّهُمَّ لَكَ الْحَمْدُ كُلُّهُ، وَلَكَ الشُّكْرُ كُلُّهُ، وَإِلَيْكَ يُرْجَعُ الأَمْرُ كُلُّهُ عَلَانِيَتُهُ وَسِرُّهُ",
    wird: "قراءة قصار السور من سورة الضحى إلى سورة الناس مع التدبر في ختم القرآن"
  },
  {
    day: 31,
    dua: "اللَّهُمَّ اخْتِمْ لَنَا بِالْبَاقِيَاتِ الصَّالِحَاتِ أَعْمَالَنَا، وَاجْعَلْ خَيْرَ أَيَّامِنَا يَوْمَ نَلْقَاكَ",
    wird: "قراءة المعوذتين والإخلاص ثلاث مرات مع استشعار الحفظ والتحصين التام"
  }
];

// ═══════════════════════════════════════════════════════════════
// 6. موسوعة حصن المسلم والأذكار اليومية
// ═══════════════════════════════════════════════════════════════
const AZKAR_DATA = {
  morning: {
    title: "أذكار الصباح",
    icon: "☀️",
    items: [
      {
        text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ.",
        count: 1,
        reward: "حفظ تام وبركة وسعة في الرزق طوال اليوم"
      },
      {
        text: "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.",
        count: 1,
        reward: "سيد الاستغفار: من قاله موقناً به ومات دخل الجنة"
      },
      {
        text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.",
        count: 3,
        reward: "حفظ العافية في الجسد والحواس والاستعاذة من الفقر"
      },
      {
        text: "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
        count: 3,
        reward: "لم يضره شيء من فجأة بلاء حتى يمسي"
      },
      {
        text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
        count: 3,
        reward: "حفظ ووقاية تامة من كل سوء ودابة وهامة"
      },
      {
        text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",
        count: 1,
        reward: "صلاح الأمر كله والاعتصام برحمة الله القيوم"
      },
      {
        text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.",
        count: 3,
        reward: "تزن عبادة ساعات طوال من التسبيح والذكر"
      }
    ]
  },
  evening: {
    title: "أذكار المساء",
    icon: "🌙",
    items: [
      {
        text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا.",
        count: 1,
        reward: "حفظ المساء وراحة النفس وأمان الليلة حتى يصبح"
      },
      {
        text: "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.",
        count: 1,
        reward: "سيد الاستغفار: من قاله موقناً به فمات من ليلته دخل الجنة"
      },
      {
        text: "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
        count: 3,
        reward: "لم تصبه فجأة بلاء حتى يصبح في حفظ الله"
      },
      {
        text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
        count: 3,
        reward: "حفظ تام من شر الهوام وكل ذي شر"
      },
      {
        text: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ.",
        count: 4,
        reward: "من قالها أربع مرات أعتقه الله من النار"
      }
    ]
  },
  post_prayer: {
    title: "أذكار بعد الصلاة",
    icon: "🕌",
    items: [
      {
        text: "أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ. اللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ، تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ.",
        count: 1,
        reward: "سنة المصطفى ﷺ فور التسليم من الفريضة"
      },
      {
        text: "سُبْحَانَ اللَّهِ (33)، وَالْحَمْدُ لِلَّهِ (33)، وَاللَّهُ أَكْبَرُ (33)، تَمَامَ الْمِائَةِ: لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
        count: 1,
        reward: "غفرت خطاياه وإن كانت مثل زبد البحر"
      },
      {
        text: "اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.",
        count: 1,
        reward: "من قرأها دبر كل صلاة مكتوبة لم يمنعه من دخول الجنة إلا أن يموت"
      }
    ]
  },
  sleep_wake: {
    title: "النوم والاستيقاظ",
    icon: "😴",
    items: [
      {
        text: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.",
        count: 1,
        reward: "حفظ النفس والروح عند النوم ورعايتها بلطف الله"
      },
      {
        text: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.",
        count: 1,
        reward: "شكر نعمة الحياة والانتباه من النوم بالحمد"
      },
      {
        text: "قراءة سورة الإخلاص والمعوذتين والنفث في الكفين ومسح الجسد ثلاث مرات.",
        count: 3,
        reward: "حفظ من الكوابيس والشياطين حتى يصبح"
      }
    ]
  },
  quranic_duas: {
    title: "أدعية قرآنية مأثورة",
    icon: "📖",
    items: [
      {
        text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        count: 3,
        reward: "أجمع دعاء للخير كله في الأولى والآخرة"
      },
      {
        text: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
        count: 3,
        reward: "سؤال الثبات على الصراط المستقيم حتى الممات"
      },
      {
        text: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
        count: 3,
        reward: "بر الوالدين وطلب الرحمة الواسعة لهما"
      }
    ]
  },
  prophetic_duas: {
    title: "أدعية نبوية جامعة",
    icon: "🤲",
    items: [
      {
        text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
        count: 3,
        reward: "جمع أصول الفلاح في النفس والمال والدين"
      },
      {
        text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ",
        count: 3,
        reward: "استدامة النعم ودفع البلايا والمصائب"
      }
    ]
  },
  masjid_wudhu: {
    title: "أذكار المسجد والوضوء",
    icon: "🕋",
    items: [
      {
        text: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ (عند دخول المسجد). اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ (عند الخروج).",
        count: 1,
        reward: "سنة نبوية جليلة لاستنزال الرحمات والفضل"
      },
      {
        text: "أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ.",
        count: 1,
        reward: "فتحت له أبواب الجنة الثمانية يدخل من أيها شاء"
      }
    ]
  }
};

// ═══════════════════════════════════════════════════════════════
// 7. خيارات وأذكار السبحة الإلكترونية الذكية
// ═══════════════════════════════════════════════════════════════
const DHIKR_TYPES = [
  { id: "subhanallah", text: "سُبْحَانَ اللَّهِ", target: 33 },
  { id: "alhamdulillah", text: "الْحَمْدُ لِلَّهِ", target: 33 },
  { id: "allahuakbar", text: "اللَّهُ أَكْبَرُ", target: 34 },
  { id: "la_ilaha_illa_allah", text: "لاَ إِلَهَ إِلاَّ اللَّهُ", target: 100 },
  { id: "astaghfirullah", text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", target: 100 },
  { id: "salawat", text: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ", target: 100 },
  { id: "la_hawla", text: "لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ", target: 100 },
  { id: "subhan_wa_bihamdihi", text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ", target: 100 }
];

// ═══════════════════════════════════════════════════════════════
// 8. قصص الأنبياء وقصص الأطفال الميسرة
// ═══════════════════════════════════════════════════════════════
const STORIES_DATA = {
  prophets: [
    {
      id: "adam",
      title: "قصة أبي البشر آدم عليه السلام",
      summary: "خلق الله لآدم من طين ونفخ فيه من روحه وأسجد له الملائكة وعلمه الأسماء كلها",
      content: "بدأت قصة البشرية حين أخبر الله تبارك وتعالى ملائكته الكرام بأنه جاعل في الأرض خليفة. فخلق الله أبا البشر آدم عليه السلام من قبضة أخذها من جميع الأرض، فجاء بنو آدم على قدر الأرض؛ فيهم الأبيض والأسود والسهل والحزن.\n\nونفخ الله فيه من روحه، وعلمه الأسماء كلها، ثم عرضها على الملائكة لبيان فضل العلم ومكانته. وأمر الله الملائكة بالسجود لآدم سجود تحية وتكريم، فسجدوا جميعاً إلا إبليس أبى واستكبر وكان من الكافرين.\n\nأسكن الله آدم وزوجه حواء الجنة، ونهاهما عن الاقتراب من شجرة بعينها. ولكن إبليس وسوس لهما حتى أكلا منها، فبدت لهما سوءاتهما وندما ندماً شديداً، وتلقى آدم من ربه كلمات فتاب عليه إنه هو التواب الرحيم. وهبطا إلى الأرض ليعمراها بعبادة الله وتوحيده، وتبدأ مسيرة البشرية المباركة."
    },
    {
      id: "nuh",
      title: "قصة نوح عليه السلام شيخ المرسلين",
      summary: "تسعمائة وخمسون عاماً من الدعوة بالصبر واليقين، وبناء الفلك بأمر الله ونجاة المؤمنين",
      content: "بعث الله نوحاً عليه السلام إلى قومه بعدما عبدوا الأصنام وضلوا عن طريق التوحيد. فلبث فيهم تسعمائة وخمسين سنة يدعوهم ليلاً ونهاراً، وسراً وجهاراً، ولم يزدهم دعاؤه إلا فراراً.\n\nأوحى الله إلى نوح ألا يحزن وأن يصنع الفلك بأعين الله ووحيه. فسخر منه قومه كلما مروا عليه وهو يصنع السفينة في اليابسة، فقال لهم: إن تسخروا منا فإنا نسخر منكم كما تسخرون فسوف تعلمون.\n\nولما جاء أمر الله وفار التنور، أمره ربه أن يحمل في السفينة من كل زوجين اثنين وأهله إلا من سبق عليه القول ومن آمن، وما آمن معه إلا قليل. وجرت بهم في موج كالجبال، ونادى نوح ابنه وكان في معزل: يا بني اركب معنا ولا تكن مع الكافرين، فأبى ولجأ إلى الجبل، فحال بينهما الموج فكان من المغرقين. ونجى الله نوحاً والمؤمنين وقيل بعداً للقوم الظالمين."
    },
    {
      id: "ibrahim",
      title: "قصة إبراهيم خليل الرحمن عليه السلام",
      summary: "إمام الحنفاء، محطم الأصنام الذي ألقي في النار فكانت برداً وسلاماً عليه وباني الكعبة المشرفة",
      content: "نشأ خليل الرحمن إبراهيم عليه السلام في قوم يعبدون الكواكب والأصنام، فهداه الله بفطرته السليمة وتأمله في ملكوت السموات والأرض إلى التوحيد الخالص.\n\nحطم أصنام قومه ليقيم عليهم الحجة البالغة، فأوقدوا له ناراً عظيمة وألقوه فيها، لكن أمر الله النافذ سبق: يا نار كوني برداً وسلاماً على إبراهيم، فخرج منها سالماً بإذن الله.\n\nهاجر إبراهيم إلى الأرض المباركة، وابتلاه ربه برؤيا ذبح ابنه البار إسماعيل عليه السلام، فاستسلما لأمر الله، وفداه الله بذبح عظيم. ثم رفع إبراهيم مع ابنه إسماعيل قواعد البيت العتيق بمكة المكرمة ودعوا ربهما: ربنا تقبل منا إنك أنت السميع العليم، وأذن في الناس بالحج إلى يوم الدين."
    },
    {
      id: "yusuf",
      title: "قصة يوسف الصديق عليه السلام",
      summary: "أحسن القصص، من قاع الجب والمحنة إلى خزائن مصر والتمكين بالصبر وتقوى الله",
      content: "رأى يوسف في منامه أحد عشر كوكباً والشمس والقمر له ساجدين، فقصها على أبيه يعقوب عليه السلام فحذره من كيد إخوته. وبسبب الغيرة ألقاه إخوته في غيابة الجب، فالتقطته سيارة وباعوه بثمن بخس في مصر.\n\nعاش في بيت العزيز، واشتدت عليه الفتنة فاستعصم بالله وفضل السجن على معصية ربه، وقال: معاذ الله إنه ربي أحسن مثواي. وفي السجن فسر الرؤى بالحكمة والإيمان.\n\nوعندما رأى ملك مصر رؤياه وعجز الكهنة عن تأويلها، فسرها يوسف ووضع خطة إنقاذ اقتصادية أنقذت البلاد والعباد من سنوات الجفاف. فمكن الله ليوسف وجعله عزيز مصر، وجاء إخوته خاضعين فعفا عنهم وقال: لا تثريب عليكم اليوم يغفر الله لكم وهو أرحم الراحمين، ورفع أبويه على العرش وخروا له سجداً وتحققت رؤياه الصادقة."
    },
    {
      id: "musa",
      title: "قصة موسى كليم الله عليه السلام",
      summary: "نشأته في قصر فرعون، وتكليم الله له في الوادي المقدس، ومعجزة فلق البحر وغرق فرعون",
      content: "ولد موسى عليه السلام في عام يذبح فيه فرعون الذكور من بني إسرائيل، فألهم الله أمه أن تضعه في التابوت وتلقيه في اليم. فحمله النهر إلى قصر فرعون، وألقى الله عليه محبة منه وتربى في قصر عدوه.\n\nخرج إلى مدين وعاش فيها عشر سنين، ثم كلمه ربه تكليماً في الوادي المقدس طوى وأرسله بالمعجزات الباهرة إلى فرعون الطاغية ليطلق بني إسرائيل.\n\nتكبر فرعون وسحر سحرته، فألقى موسى عصاه فإذا هي تلقف ما يأفكون، فخر السحرة سجداً لله رب العالمين. ولما طاردهم فرعون بجنوده، ضرب موسى البحر بعصاه فانفلق فكان كل فرق كالطود العظيم، وعبر موسى وقومه بسلام وأغرق الله فرعون وجنوده ليكون عبرة للعالمين."
    },
    {
      id: "muhammad",
      title: "سيرة الحبيب المصطفى محمد ﷺ",
      summary: "رحمة للعالمين، الصادق الأمين، ونزول القرآن الكريم في غار حراء والهجرة النبوية المباركة",
      content: "ولد الحبيب محمد ﷺ يتيم الأب بمكة المكرمة في عام الفيل، واشتهر بين قومه بالصادق الأمين لما عرف عنه من كمال الخلق وعفة النفس وصدق الحديث.\n\nكان يتحنث في غار حراء حتى نزل عليه أمين الوحي جبريل عليه السلام بقول الله تعالى: اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ، ليبدأ فجر الإسلام وتنطلق رسالة التوحيد والنور.\n\nتحمل النبي ﷺ وأصحابه الكرام أذى قريش بالصبر والثبات، ثم أمره الله بالهجرة إلى المدينة المنورة فأسس دولة العدل والمؤاخاة، وقاد الأمة بالحكمة والرحمة والعدل. وفتح مكة فاتحاً متواضعاً وقال لأهلها: اذهبوا فأنتم الطلقاء. وبلغ الرسالة وأدى الأمانة ونصح الأمة حتى توفاه الله وقد تركنا على المحجة البيضاء ليلها كنهارها لا يزيغ عنها إلا هالك، فصلوات ربي وسلامه عليه دائماً أبداً."
    }
  ],
  children: [
    {
      id: "c_kindness",
      title: "الولد الصالح وبشارة البركة",
      summary: "قصة ممتعة للأطفال تعلمهم فضل بر الوالدين والصدق في كل الأحوال",
      content: "كان هناك فتى صغير اسمه عمر، يحب والديه كثيراً ويحرص على مساعدتهما وطاعتهما بابتسامة جميلة كل يوم.\n\nفي أحد الأيام، وجد عمر محفظة نقود مفقودة في فناء المدرسة، فذهب فوراً إلى مدير المدرسة وسلمها بأمانة كاملة. شكره المعلمون والمدير أمام جميع الطلاب ونال جائزة الأمانة.\n\nولما عاد إلى بيته، فرح والداه بأمانته ودعوا له بالبركة والنجاح، فتعلم عمر أن الصدق والأمانة هما أجمل صفات المسلم الصغير."
    },
    {
      id: "c_bismillah",
      title: "بركة بسم الله الرحمن الرحيم",
      summary: "كيف تملأ البسملة طعامنا ويومنا بالنور والبركة والسرور",
      content: "كانت الطفلة مريم تجلس مع أسرتها لتناول طعام الغداء الشهي. وقبل أن تمد يدها، تذكرت وصية النبي ﷺ وقالت بصوت نقي جميل: بسم الله الرحمن الرحيم، وأكلت بيمينها ومما يليها.\n\nابتسم والدها وقال لها: بارك الله فيكِ يا بنيتي، إن البسملة تطرد الشيطان وتجعل في طعامنا وحياتنا كلها نوراً وبركة.\n\nومنذ ذلك اليوم، أصبحت مريم تبدأ كل عمل صالح ودرس وقراءة بالبسملة، وتجد التوفيق والسعادة في كل خطواتها."
    }
  ]
};
