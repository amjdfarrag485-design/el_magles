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
    serverMojawwad: "https://server10.mp3quran.net/minsh_mjwd/",
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
    serverMurattal: "https://cdn.mp3quran.net/audio/abdulrasheed-sufi/r3/",
    serverMojawwad: "",
    info: "شيخ القراءات ومتقن الروايات القرآنية بدقة إسناد عالية"
  },
  {
    id: "nourin",
    name: "نورين محمد صديق",
    category: "unique",
    supportsMurattal: true,
    supportsMojawwad: false,
    serverMurattal: "https://cdn.mp3quran.net/audio/noreen-siddiq/r1/",
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
    serverMurattal: "https://cdn.mp3quran.net/audio/islam-sobhi/r1/",
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
// 4.1. نوادر التلاوات والتسجيلات القرآنية التاريخية الخالدة لكبار القراء
// ═══════════════════════════════════════════════════════════════
const RARE_RECITATIONS_DATA = [
  // ─── 1. الشيخ محمد صديق المنشاوي (تسجيلات ونوادر خارجية خاشعة) ───
  {
    id: "rare_minshawi_hashr",
    category: "minshawi",
    title: "سورة الحشر والفجر (محفل الكويت التاريخي 1966)",
    reciter: "الشيخ محمد صديق المنشاوي",
    desc: "لو أنزلنا هذا القرآن على جبل لرأيته خاشعاً.. درة التلاوات الباكية التي هزت الكويت",
    url: "https://server10.mp3quran.net/minsh_mjwd/059.mp3",
    badge: "محفل الكويت 1966",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "23:45",
    lyricsQuote: "لَوْ أَنزَلْنَا هَٰذَا الْقُرْآنَ عَلَىٰ جَبَلٍ لَّرَأَيْتَهُ خَاشِعًا مُّتَصَدِّعًا مِّنْ خَشْيَةِ اللَّهِ ۚ وَتِلْكَ الْأَمْثَالُ نَضْرِبُهَا لِلنَّاسِ لَعَلَّهُمْ يَتَفَكَّرُونَ"
  },
  {
    id: "rare_minshawi_yusuf",
    category: "minshawi",
    title: "سورة يوسف (أحسن القصص ومقام النهاوند الخالد)",
    reciter: "الشيخ محمد صديق المنشاوي",
    desc: "نحن نقص عليك أحسن القصص.. قمة السلطنة الخاشعة وإعجاز الصوت الباكي المتقن",
    url: "https://server10.mp3quran.net/minsh_mjwd/012.mp3",
    badge: "نهاوند المنشاوي",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "53:15",
    lyricsQuote: "نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ الْقَصَصِ بِمَا أَوْحَيْنَا إِلَيْكَ هَٰذَا الْقُرْآنَ وَإِن كُنتَ مِن قَبْلِهِ لَمِنَ الْغَافِلِينَ"
  },
  {
    id: "rare_minshawi_shuara",
    category: "minshawi",
    title: "سورة الشعراء (تلاوة تهز القلوب بخشوع يفوق الوصف)",
    reciter: "الشيخ محمد صديق المنشاوي",
    desc: "طسم.. تلك آيات الكتاب المبين.. تلاوة تفيض بالخشوع الإيماني والسكينة",
    url: "https://server10.mp3quran.net/minsh_mjwd/026.mp3",
    badge: "روائع التجويد",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "46:20",
    lyricsQuote: "وَإِنَّهُ لَتَنزِيلُ رَبِّ الْعَالَمِينَ ۝ نَزَلَ بِهِ الرُّوحُ الْأَمِينُ ۝ عَلَىٰ قَلْبِكَ لِتَكُونَ مِنَ الْمُنذِرِينَ ۝ بِلِسَانٍ عَرَبِيٍّ مُّبِينٍ"
  },
  {
    id: "rare_minshawi_rahman",
    category: "minshawi",
    title: "سورة الرحمن (عروس القرآن بالتلاوة الباكية)",
    reciter: "الشيخ محمد صديق المنشاوي",
    desc: "الرحمن علم القرآن.. نبرات حزينة مبكية تلامس شغاف القلوب",
    url: "https://server10.mp3quran.net/minsh_mjwd/055.mp3",
    badge: "عروس القرآن",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "22:30",
    lyricsQuote: "الرَّحْمَٰنُ ۝ عَلَّمَ الْقُرْآنَ ۝ خَلَقَ الْإِنسَانَ ۝ عَلَّمَهُ الْبَيَانَ ۝ الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ"
  },

  // ─── 2. الشيخ كامل يوسف البهتيمي (نوادر التلاوات والمحافل) ───
  {
    id: "rare_bahtimi_maryam",
    category: "bahtimi",
    title: "سورة مريم (محفل الجامع الأزهر الشريف كامل 1963)",
    reciter: "الشيخ كامل يوسف البهتيمي",
    desc: "سلطان التلاوة القرآنية في أروع تجلياته الصوتية والمقامية برحاب الجامع الأزهر",
    url: "https://dn711107.ca.archive.org/0/items/way2sona_20160405_2216/030-_2.mp3",
    badge: "محفل الجامع الأزهر",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "45:30",
    lyricsQuote: "كهيعص ۝ ذِكْرُ رَحْمَتِ رَبِّكَ عَبْدَهُ زَكَرِيَّا ۝ إِذْ نَادَىٰ رَبَّهُ نِدَاءً خَفِيًّا"
  },
  {
    id: "rare_bahtimi_isra",
    category: "bahtimi",
    title: "سورة الإسراء (محفل الجامع الأزهر النادر)",
    reciter: "الشيخ كامل يوسف البهتيمي",
    desc: "وقضى ربك ألا تعبدوا إلا إياه.. تلاوة شجية من نفحات الرعيل الأول المخلص بالجامع الأزهر",
    url: "https://dn711107.ca.archive.org/0/items/way2sona_20160405_2216/006-_2.mp3",
    badge: "محفل الجامع الأزهر",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "41:15",
    lyricsQuote: "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا ۚ إِمَّا يَبْلُغَنَّ عِندَكَ الْكِبَرَ أَحَدُهُمَا أَوْ كِلَاهُمَا فَلَا تَقُل لَّهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا"
  },

  // ─── 3. الشيخ عبد الباسط عبد الصمد (نوادر المقامات والمحافل الخارجية) ───
  {
    id: "rare_basit_aqsa_isra",
    category: "basit",
    title: "سورة الإسراء (محفل المسجد الأقصى المبارك 1964)",
    reciter: "الشيخ عبد الباسط عبد الصمد",
    desc: "سبحان الذي أسرى بعبده ليلاً من المسجد الحرام إلى المسجد الأقصى.. أعظم محفل تاريخي للشيخ بالأقصى",
    url: "https://dn710704.ca.archive.org/0/items/khaled_alridwany_201707/%D8%A7%D9%84%D8%A7%D8%B3%D8%B1%D8%A7%D8%A1%20%D8%AA%D9%84%D8%A7%D9%88%D8%A9%202%20%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF%20%D8%A7%D9%84%D8%A7%D9%82%D8%B5%D9%89%201964.mp3",
    badge: "نوادر المسجد الأقصى",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "34:20",
    lyricsQuote: "سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا"
  },
  {
    id: "rare_basit_aqsa_yusuf",
    category: "basit",
    title: "سورة يوسف وقصار السور (محفل المسجد الأقصى)",
    reciter: "الشيخ عبد الباسط عبد الصمد",
    desc: "تسجيل تاريخي مهيب من رحاب القدس الشريف بأعلى درجات السلطنة والتجويد",
    url: "https://ia800803.us.archive.org/27/items/khaled_alridwany_201707/%D9%8A%D9%88%D8%B3%D9%81%20-%20%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF%20%D8%A7%D9%84%D8%A3%D9%82%D8%B5%D9%89.mp3",
    badge: "نوادر المسجد الأقصى",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "42:15",
    lyricsQuote: "إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَا أَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ"
  },
  {
    id: "rare_basit_aqsa_qamar",
    category: "basit",
    title: "سورة القمر والرحمن وقصار السور (المسجد الأقصى)",
    reciter: "الشيخ عبد الباسط عبد الصمد",
    desc: "اقتربت الساعة وانشق القمر.. من أندر تسجيلات الشيخ التاريخية بالقدس الشريف",
    url: "https://dn710704.ca.archive.org/0/items/khaled_alridwany_201707/%D8%A7%D9%84%D9%82%D9%85%D8%B1%20%D9%88%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86%20%D9%88%D8%A7%D9%84%D8%A8%D9%84%D8%AF%20%D9%88%D8%A7%D9%84%D8%B4%D9%85%D8%B3%20%D9%88%D8%A7%D9%84%D8%AA%D9%8A%D9%86%20%D9%88%D8%A7%D9%84%D9%86%D8%B5%D8%B1%20-%20%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF%20%D8%A7%D9%84%D8%A3%D9%82%D8%B5%D9%89.mp3",
    badge: "نوادر المسجد الأقصى",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "38:40",
    lyricsQuote: "اقْتَرَبَتِ السَّاعَةُ وَانشَقَّ الْقَمَرُ ۝ وَإِن يَرَوْا آيَةً يُعْرِضُوا وَيَقُولُوا سِحْرٌ مُّسْتَمِرٌّ"
  },
  {
    id: "rare_basit_umayyad_maryam",
    category: "basit",
    title: "سورة مريم وقصار السور (المسجد الأموي بدمشق)",
    reciter: "الشيخ عبد الباسط عبد الصمد",
    desc: "التلاوة الشامية الخالدة التي أبهرت دمشق وسجلت في التاريخ بأنصع الحروف",
    url: "https://server7.mp3quran.net/basit_mjwd/019.mp3",
    badge: "المسجد الأموي",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "31:10",
    lyricsQuote: "قَالَ كَذَٰلِكِ قَالَ رَبُّكِ هُوَ عَلَيَّ هَيِّنٌ ۖ وَلِنَجْعَلَهُ آيَةً لِّلنَّاسِ وَرَحْمَةً مِّنَّا ۚ وَكَانَ أَمْرًا مَّقْضِيًّا"
  },
  {
    id: "rare_basit_hajj",
    category: "basit",
    title: "سورة الحج (محفل تاريخي ملوكي نادر)",
    reciter: "الشيخ عبد الباسط عبد الصمد",
    desc: "يا أيها الناس اتقوا ربكم.. استعراض مقامات التلاوة الصافية والنفس الطويل المذهل",
    url: "https://server7.mp3quran.net/basit_mjwd/022.mp3",
    badge: "محفل نادر",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "35:45",
    lyricsQuote: "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمْ ۚ إِنَّ زَلْزَلَةَ السَّاعَةِ شَيْءٌ عَظِيمٌ"
  },

  // ─── 4. الشيخ مصطفى إسماعيل (محافل قصر عابدين والجامع الأزهر) ───
  {
    id: "rare_mustafa_abdeen_hajj",
    category: "mustafa",
    title: "سورة الحج وقصار السور (محفل الجامع الأزهر وقصر عابدين)",
    reciter: "الشيخ مصطفى إسماعيل",
    desc: "يا أيها الناس اتقوا ربكم.. قمة إعجاز المقامات وتفسير القرآن الكريم بالنغم في رحاب الأزهر الشريف",
    url: "https://cdn.mp3quran.net/audio/mustafa-ismail/r1/022.mp3",
    badge: "محفل قصر عابدين",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "52:40",
    lyricsQuote: "وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ"
  },
  {
    id: "rare_mustafa_maryam",
    category: "mustafa",
    title: "سورة مريم (محفل نادر تاريخي)",
    reciter: "الشيخ مصطفى إسماعيل",
    desc: "روائع الشيخ مصطفى إسماعيل في استعراض مقامات التلاوة والخشوع الملكي الفخم",
    url: "https://cdn.mp3quran.net/audio/mustafa-ismail/r1/019.mp3",
    badge: "محفل ملكي نادر",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "46:25",
    lyricsQuote: "فَأَتَتْ بِهِ قَوْمَهَا تَحْمِلُهُ ۖ قَالُوا يَا مَرْيَمُ لَقَدْ جِئْتِ شَيْئًا فَرِيًّا"
  },
  {
    id: "rare_mustafa_fatir",
    category: "mustafa",
    title: "سورة فاطر وقصار السور (محفل الإسكندرية الخالد 1965)",
    reciter: "الشيخ مصطفى إسماعيل",
    desc: "الحمد لله فاطر السماوات والأرض.. من أروع ما جادت به قريحة الشيخ في المحافل الجماهيرية",
    url: "https://server8.mp3quran.net/mustafa/035.mp3",
    badge: "محفل الإسكندرية",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "33:20",
    lyricsQuote: "الْحَمْدُ لِلَّهِ فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ جَاعِلِ الْمَلَائِكَةِ رُسُلًا أُولِي أَجْنِحَةٍ مَّثْنَىٰ وَثُلَاثَ وَرُبَاعَ"
  },

  // ─── 5. الشيخ محمد رفعت (قيثارة السماء الخالدة) ───
  {
    id: "rare_refat_kahf",
    category: "refat",
    title: "سورة الكهف المباركة (التسجيل التاريخي الخالد)",
    reciter: "الشيخ محمد رفعت",
    desc: "روائع التلاوات الخاشعة التي ارتبطت بيوم الجمعة في وجدان المسلمين",
    url: "https://cdn.mp3quran.net/audio/muhammad-refaat/r1/018.mp3",
    badge: "نوادر الجمعة",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "1:26:10",
    lyricsQuote: "الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَل لَّهُ عِوَجًا ۜ قَيِّمًا لِّيُنذِرَ بَأْسًا شَدِيدًا مِّن لَّدُنْهُ"
  },
  {
    id: "rare_refat_maryam",
    category: "refat",
    title: "سورة مريم كاملة (التسجيل التاريخي الخالد)",
    reciter: "الشيخ محمد رفعت",
    desc: "كهيعص.. تلاوة ملائكية تاريخية تهز القلوب بخشوع يفوق الوصف",
    url: "https://cdn.mp3quran.net/audio/muhammad-refaat/r1/019.mp3",
    badge: "قيثارة السماء",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "39:15",
    lyricsQuote: "كهيعص ۝ ذِكْرُ رَحْمَتِ رَبِّكَ عَبْدَهُ زَكَرِيَّا ۝ إِذْ نَادَىٰ رَبَّهُ نِدَاءً خَفِيًّا ۝ قَالَ رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي"
  },
  {
    id: "rare_refat_yusuf",
    category: "refat",
    title: "سورة يوسف (أحسن القصص)",
    reciter: "الشيخ محمد رفعت",
    desc: "إذ قال يوسف لأبيه.. أداء بديع يفيض بالإحساس والخشوع الرباني",
    url: "https://cdn.mp3quran.net/audio/muhammad-refaat/r1/012.mp3",
    badge: "تراث الإذاعة",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "48:35",
    lyricsQuote: "إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَا أَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ"
  },
  {
    id: "rare_refat_rahman",
    category: "refat",
    title: "سورة الرحمن (عروس القرآن)",
    reciter: "الشيخ محمد رفعت",
    desc: "فبأي آلاء ربكما تكذبان.. نبرات خاشعة تبكي العيون من جلال التلاوة",
    url: "https://cdn.mp3quran.net/audio/muhammad-refaat/r1/055.mp3",
    badge: "عروس القرآن",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "29:05",
    lyricsQuote: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ ۝ خَلَقَ الْإِنسَانَ مِن صَلْصَالٍ كَالْفَخَّارِ ۝ وَخَلَقَ الْجَانَّ مِن مَّارِجٍ مِّن نَّارٍ"
  },
  {
    id: "rare_refat_qisar",
    category: "refat",
    title: "قصار السور (الضحى والشرح والتين)",
    reciter: "الشيخ محمد رفعت",
    desc: "والضحى والليل إذا سجى.. تلاوة نادرة تاريخية عذبة تفيض بالسكينة والإيمان",
    url: "https://cdn.mp3quran.net/audio/muhammad-refaat/r1/093.mp3",
    badge: "قصار السور الخالدة",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "18:20",
    lyricsQuote: "وَالضُّحَىٰ ۝ وَاللَّيْلِ إِذَا سَجَىٰ ۝ مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ ۝ وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ"
  },

  // ─── 6. الشيخ محمود علي البنا (نوادر محافل القاهرة والإسكندرية) ───
  {
    id: "rare_banna_maryam",
    category: "banna",
    title: "سورة مريم (محفل مسجد الإمام الحسين بالقاهرة)",
    reciter: "الشيخ محمود علي البنا",
    desc: "تلاوة رخيمة قوية تفيض بالجلال والإتقان برحاب مسجد الإمام الحسين عليه السلام",
    url: "https://server8.mp3quran.net/bna_mjwd/019.mp3",
    badge: "محفل الحسين",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "36:10",
    lyricsQuote: "وَاذْكُرْ فِي الْكِتَابِ مَرْيَمَ إِذِ انتَبَذَتْ مِنْ أَهْلِهَا مَكَانًا شَرْقِيًّا"
  },
  {
    id: "rare_banna_ibrahim",
    category: "banna",
    title: "سورة إبراهيم (محفل تاريخي بالإسكندرية)",
    reciter: "الشيخ محمود علي البنا",
    desc: "ألم تر كيف ضرب الله مثلاً كلمة طيبة.. أداء مهيب متفرد بالخشوع والتجويد الصافي",
    url: "https://server8.mp3quran.net/bna_mjwd/014.mp3",
    badge: "محفل الإسكندرية",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "38:40",
    lyricsQuote: "أَلَمْ تَرَ كَيْفَ ضَرَبَ اللَّهُ مَثَلًا كَلِمَةً طَيِّبَةً كَشَجَرَةٍ طَيِّبَةٍ أَصْلُهَا ثَابِتٌ وَفَرْعُهَا فِي السَّمَاءِ"
  },

  // ─── 7. الشيخ محمد سلامة (شيخ القراء وأستاذ الأجيال) ───
  {
    id: "rare_salama_nahl",
    category: "salama",
    title: "سورة النحل (محفل خارجي عالي الجودة)",
    reciter: "الشيخ محمد سلامة",
    desc: "شيخ القراء وأستاذ عمالقة التلاوة في تسجيل تاريخي نادر يحفظ عبق الزمان الجميل",
    url: "https://dn710003.ca.archive.org/0/items/20240312_20240312_0307/016%20%20%20%2016%20%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%B3%D9%84%D8%A7%D9%85%D8%A9%20_..%20%D8%B3%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D9%86%D8%AD%D9%84%20%D9%85%D8%AD%D9%81%D9%84%20%D8%AE%D8%A7%D8%B1%D8%AC%D9%8A%20%D8%AC%D9%88%D8%AF%D8%A9%20%D8%B9%D8%A7%D9%84%D9%8A%D8%A9%20%20%D9%84%D8%A3%D9%88%D9%84%20%D9%85%D8%B1%D8%A9%20HD.mp3",
    badge: "شيخ المقارئ",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "1:05:45",
    lyricsQuote: "أَتَىٰ أَمْرُ اللَّهِ فَلَا تَسْتَعْجِلُوهُ ۚ سُبْحَانَهُ وَتَعَالَىٰ عَمَّا يُشْرِكُونَ"
  },
  {
    id: "rare_salama_anbiya",
    category: "salama",
    title: "سورة الأنبياء (محفل 1956 التاريخي الخالد)",
    reciter: "الشيخ محمد سلامة",
    desc: "اقترب للناس حسابهم وهم في غفلة معرضون.. تفاعل مذهل مع الجماهير وأداء أسطوري نادر",
    url: "https://dn710003.ca.archive.org/0/items/20240312_20240312_0307/021%20%20%20%2021%20%20%D9%85%D8%AD%D9%85%D9%80%D8%AF%20%D8%B3%D9%80%D9%84%D8%A7%D9%85%D9%80%D8%A9%20%20%D8%A7%D9%84%D8%A7%D9%86%D8%A8%D9%8A%D9%80%D9%80%D9%80%D8%A7%D8%A1%20%20%D8%AA%D9%80%D9%84%D8%A7%D9%88%D8%A9%20%D9%86%D9%80%D8%A7%D8%AF%D8%B1%D8%A9%20%D9%85%D9%80%D8%B9%20%D8%AA%D9%81%D9%80%D8%A7%D8%B9%D9%80%D9%84%20%D8%A7%D9%84%D8%AC%D9%85%D9%87%D9%80%D9%88%D8%B1%20%D8%B1%D8%A7%D8%A6%D8%B9%D9%80%D9%80%D8%A9%20%D8%B9%D8%A7%D9%85%201956%D9%85%20!!%20%D8%AC%D9%88%D8%AF%D8%A9%20%D8%B9%D8%A7%D9%84%D9%8A%D8%A9%20HD.mp3",
    badge: "محفل 1956",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "56:20",
    lyricsQuote: "اقْتَرَبَ لِلنَّاسِ حِسَابُهُمْ وَهُمْ فِي غَفْلَةٍ مُّعْرِضُونَ ۝ مَا يَأْتِيهِم مِّن ذِكْرٍ مِّن رَّبِّهِم مُّحْدَثٍ إِلَّا اسْتَمَعُوهُ وَهُمْ يَلْعَبُونَ"
  },

  // ─── 8. الشيخ علي جابر (تسجيلات الحرم المكي الشريف التاريخية) ───
  {
    id: "rare_jaber_haram_rahman",
    category: "jaber",
    title: "سورة الرحمن (تسجيلات الحرم المكي التاريخية)",
    reciter: "الشيخ علي جابر",
    desc: "تلاوة الحرم المكي الشريف التاريخية التي أحيت القلوب في ليالي رمضان العطرة",
    url: "https://cdn.mp3quran.net/audio/ali-jaber/r1/055.mp3",
    badge: "تراويح الحرم المكي",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "14:15",
    lyricsQuote: "كُلُّ مَنْ عَلَيْهَا فَانٍ ۝ وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ"
  },
  {
    id: "rare_jaber_haram_qiyamah",
    category: "jaber",
    title: "سورة القيامة والبلد (تسجيلات الحرم المكي التاريخية)",
    reciter: "الشيخ علي جابر",
    desc: "لا أقسم بيوم القيامة.. أداء حجازي مؤثر وخشوع يبكي جموع المصلين بالحرم المكي",
    url: "https://cdn.mp3quran.net/audio/ali-jaber/r1/075.mp3",
    badge: "تراويح الحرم المكي",
    sourceTag: "نوادر التلاوات",
    versionTag: "تسجيل أصلي نادر",
    duration: "11:50",
    lyricsQuote: "لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ ۝ وَلَا أُقْسِمُ بِالنَّفْسِ اللَّوَّامَةِ ۝ أَيَحْسَبُ الْإِنسَانُ أَلَّن نَّجْمَعَ عِظَامَهُ"
  }
];

// ═══════════════════════════════════════════════════════════════
// 4.2. موسوعة التواشيح والابتهالات الدينية الشاملة (قسم مستقل 100%)
// ═══════════════════════════════════════════════════════════════
const IBTEHALAT_DATA = [
  // ─── 1. نفحات وتواشيح رمضان التراثية ───
  {
    id: "ramadan_madfa",
    category: "ramadan",
    title: "مدفع الإفطار (النسخة الأصلية الكاملة مع أذان المغرب)",
    reciter: "تراث الإذاعة المصرية",
    desc: "مدفع الإفطار اضرب.. صوت الإفطار التاريخي المحفور في وجدان الأمة",
    url: "https://dn711202.ca.archive.org/0/items/20260913_20260913_1334/%D9%85%D8%AF%D9%81%D8%B9%20%D8%A7%D9%84%D8%A5%D9%81%D8%B7%D8%A7%D8%B1%20%D8%A7%D9%84%D9%86%D8%B3%D8%AE%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B5%D9%84%D9%8A%D8%A9.mp3",
    badge: "تراث رمضاني",
    duration: "02:15"
  },
  {
    id: "ramadan_azan_refat",
    category: "ramadan",
    title: "أذان المغرب الخالد",
    reciter: "الشيخ محمد رفعت",
    desc: "أذان مغرب رمضان الأسطوري الذي ارتبط بذكريات المسلمين لعقود",
    url: "https://dn721809.ca.archive.org/0/items/moharram1965_gmail_20180227/%D8%A7%D8%B0%D8%A7%D9%86%20%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%20%D9%84%D9%81%D8%B6%D9%8A%D9%84%D8%A9%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%B1%D9%81%D8%B9%D8%AA%20%D8%B1%D8%AD%D9%85%D8%A9%20%D8%A7%D9%84%D9%84%D9%87%20%20%D8%A7%D8%AD%D9%85%D8%AF%20%D8%B9%D8%A8%D8%AF%D9%87%20%D9%88%D9%85%D8%AF%D8%A7%D8%B1%D8%B3%20%D8%A7%D9%84%D8%AA%D9%84%D8%A7%D9%88%D8%A9.mp3",
    badge: "تسجيل تاريخي",
    duration: "04:32"
  },
  {
    id: "ramadan_marhab",
    category: "ramadan",
    title: "مرحب شهر الصوم مرحب",
    reciter: "عبد العزيز محمود",
    desc: "أنشودة استقبال شهر رمضان المبارك الرسمية في الإذاعة المصرية",
    url: "https://dn710908.ca.archive.org/0/items/Sama3almelouk_yahoo_20160518_1125/%D9%85%D8%B1%D8%AD%D8%A8%20%D8%B4%D9%87%D8%B1%20%D8%A7%D9%84%D8%B5%D9%88%D9%85.mp3",
    badge: "أيقونة رمضان",
    duration: "03:45"
  },
  {
    id: "ramadan_tobar_ashraq",
    category: "ramadan",
    title: "أشرق الحق بالهدى",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "ابتهال رمضاني فجري نادر ومؤثر في استقبال ونفحات شهر الصيام",
    url: "https://dn721607.ca.archive.org/0/items/07._20210119/03.%D8%A3%D8%B4%D8%B1%D9%82%20%D8%A7%D9%84%D8%AD%D9%82.mp3",
    badge: "نفحات الصيام",
    duration: "07:22"
  },
  {
    id: "ramadan_laylat_qadr",
    category: "ramadan",
    title: "في ليلة القدر قد طافت ملائكة",
    reciter: "الشيخ سيد النقشبندي",
    desc: "روائع الابتهالات الرمضانية في فضل ليلة القدر المباركة",
    url: "https://dn711002.ca.archive.org/0/items/Naqshabandee/%D9%81%D9%8A%20%D9%84%D9%8A%D9%84%D8%A9%20%D8%A7%D9%84%D9%82%D8%AF%D8%B1%20%D9%82%D8%AF%20%D8%B7%D8%A7%D9%81%D8%AA%20%D9%85%D9%84%D8%A7%D8%A6%D9%83%D8%A9.mp3",
    badge: "العشر الأواخر",
    duration: "08:14"
  },
  {
    id: "ramadan_nafs_tashku",
    category: "ramadan",
    title: "النفس تشكو ومن لي أن أداويها",
    reciter: "الشيخ سيد النقشبندي",
    desc: "مناجاة وتوبة خاشعة تهز الوجدان وتلين القلوب في ليالي رمضان",
    url: "https://dn711002.ca.archive.org/0/items/Naqshabandee/%D8%A7%D9%84%D9%86%D9%81%D8%B3%20%D8%AA%D8%B4%D9%83%D9%88.mp3",
    badge: "توبة ومناجاة",
    duration: "06:50"
  },
  {
    id: "ramadan_ahlan_rabia",
    category: "ramadan",
    title: "أهلاً بربيع الهدى (وافى ربيع فمرحباً)",
    reciter: "الشيخ سيد النقشبندي",
    desc: "ابتهال نادر وبديع في مدح الحبيب المصطفى ﷺ وأنوار ميلاده",
    url: "https://dn721800.ca.archive.org/0/items/Sama3almelouk_yahoo_20160525/%D8%A8%D8%B3%D9%85%20%D8%A7%D9%84%D9%84%D9%87%20%D9%88%D9%84%D8%AC%D9%86%D8%A7%20%20%D9%88%D8%A7%D9%81%D9%8A%20%D8%B1%D8%A8%D9%8A%D8%B9%20%D9%81%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B.MP3",
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
    url: "https://dn721607.ca.archive.org/0/items/07._20210119/06.%D9%85%D8%AC%D9%8A%D8%A8%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A6%D9%84%D9%8A%D9%86.mp3",
    badge: "أيقونة الفجر",
    duration: "11:15"
  },
  {
    id: "tobar_sobh",
    category: "tobour",
    title: "حين يهدي الصبح إشراق سناه",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "تحفة فجرية بديعة تشرح الصدور وتملأ النفس بالسكينة واليقين",
    url: "https://dn721607.ca.archive.org/0/items/07._20210119/03.%D8%AD%D9%8A%D9%86%20%D9%8A%D9%87%D8%AF%D9%8A%20%D8%A7%D9%84%D8%B5%D8%A8%D8%AD%20%D8%A7%D8%B4%D8%B1%D8%A7%D9%82%20%D8%B3%D9%86%D8%A7%D9%87.mp3",
    badge: "شروق وإيمان",
    duration: "10:40"
  },
  {
    id: "tobar_baree",
    category: "tobour",
    title: "يا بارئ الكون",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "تسبيح عظيم وتأمل خاشع في ملكوت السموات والأرض",
    url: "https://dn721607.ca.archive.org/0/items/07._20210119/10.%D9%8A%D8%A7%20%D8%A8%D8%A7%D8%B1%D8%A6%20%D8%A7%D9%84%D9%83%D9%88%D9%86.mp3",
    badge: "توحيد وتسبيح",
    duration: "09:20"
  },
  {
    id: "tobar_ghareeb",
    category: "tobour",
    title: "إلهي دموعي (غريب يا رب)",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "مناجاة التائب المستجير بباب ربه الكريم الرحيم",
    url: "https://dn721607.ca.archive.org/0/items/07._20210119/01.%D8%A7%D9%84%D9%87%D9%8A%20%D8%AF%D9%85%D9%88%D8%B9%D9%8A.mp3",
    badge: "مناجاة خاشعة",
    duration: "08:50"
  },
  {
    id: "tobar_kol_quloob",
    category: "tobour",
    title: "مولد الرسول ﷺ (كل القلوب إلى الحبيب تميل)",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "ومعي بذلك شاهد ودليل.. أما الدليل إذا ذكرت محمداً",
    url: "https://dn721607.ca.archive.org/0/items/07._20210119/08.%D9%85%D9%88%D9%84%D8%AF%20%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%84.mp3",
    badge: "مديح نبوي",
    duration: "07:18"
  },
  {
    id: "tobar_salik_darb",
    category: "tobour",
    title: "يا سالكين الدرب",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "ابتهال نادر من أروع ما أنشد الشيخ في التوكل والثبات واليقين",
    url: "https://dn721607.ca.archive.org/0/items/07._20210119/11.%D9%8A%D8%A7%20%D8%B3%D8%A7%D9%84%D9%83%D9%8A%D9%86%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A8.mp3",
    badge: "هداية واستقامة",
    duration: "08:05"
  },
  {
    id: "tobar_howa_allah",
    category: "tobour",
    title: "هو الله جل جلاله",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "تسبيح جامع في صفات الجلال والجمال والكمال الإلهي",
    url: "https://dn721607.ca.archive.org/0/items/07._20210119/08.%D9%87%D9%80%D9%80%D9%80%D9%80%D9%80%D9%80%D9%88%20%D8%A7%D9%84%D9%84%D9%80%D9%80%D9%80%D9%80%D9%87.mp3",
    badge: "أسماء الله الحسنى",
    duration: "09:45"
  },
  {
    id: "tobar_qabas",
    category: "tobour",
    title: "قبس من الرحمن (ضياؤك مشكاة)",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "وفيضك منبعي.. من أندر ابتهالات الشيخ طوبار التاريخية النورانية",
    url: "https://dn721607.ca.archive.org/0/items/07._20210119/05.%D8%B6%D9%8A%D8%A7%D8%A4%D9%83%20%D9%85%D8%B4%D9%83%D8%A7%D8%A9%20%D9%88%D9%81%D9%8A%D8%B6%D9%83%20%D9%85%D9%86%D8%A8%D8%B9%D9%8A.mp3",
    badge: "تسجيل نادر",
    duration: "12:30"
  },
  {
    id: "tobar_taer_rooh",
    category: "tobour",
    title: "طائر الروح (الطير سبحه)",
    reciter: "الشيخ نصر الدين طوبار",
    desc: "الطير سبحه والوحش مجده.. والموج كبره والحوت ناجاه",
    url: "https://dn721607.ca.archive.org/0/items/07._20210119/07.%D9%85%D9%86%D8%A7%D8%AC%D8%A7%D8%A9%20%D8%A7%D9%84%D8%B7%D9%8A%D8%B1%20%D8%B3%D8%A8%D9%91%D8%AD%D9%87.mp3",
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
    url: "https://dn721807.ca.archive.org/0/items/20201225_20201225_1759/%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%A7%D9%84%D9%86%D9%82%D8%B4%D8%A8%D9%86%D8%AF%D9%8A%20_%20%D9%85%D9%88%D9%84%D8%A7%D9%8A%20%D8%A5%D9%86%D9%8A%20%D8%A8%D8%A8%D8%A7%D8%A8%D9%83.mp3",
    badge: "تاج الابتهالات",
    duration: "05:42"
  },
  {
    id: "naqsh_aqool_ommati",
    category: "naqshbandi",
    title: "محمد سيد الكونين (أقول أمتي)",
    reciter: "الشيخ سيد النقشبندي",
    desc: "شفاعة النبي الأكرم ﷺ يوم القيامة بأداء يبكي العيون والقلوب",
    url: "https://dn711002.ca.archive.org/0/items/Naqshabandee/%D9%85%D8%AD%D9%85%D8%AF%20%D8%B3%D9%8A%D8%AF%20%D8%A7%D9%84%D9%83%D9%88%D9%86%D9%8A%D9%86.mp3",
    badge: "شفاعة الحبيب",
    duration: "06:18"
  },
  {
    id: "naqsh_aal_bayt",
    category: "naqshbandi",
    title: "مولاي حبك زادي (يا آل طه)",
    reciter: "الشيخ سيد النقشبندي",
    desc: "محبة آل البيت الأطهار والصلاة على الحبيب المصطفى ﷺ",
    url: "https://dn711002.ca.archive.org/0/items/Naqshabandee/%D9%85%D9%88%D9%84%D8%A7%D9%8A%20%D8%AD%D8%A8%D9%83%20%D8%B2%D8%A7%D8%AF%D9%8A.mp3",
    badge: "محبة آل البيت",
    duration: "07:35"
  },
  {
    id: "naqsh_ashraq_masoom",
    category: "naqshbandi",
    title: "كبّر المصطفى ولاح الضياء (أشرق المعصوم)",
    reciter: "الشيخ سيد النقشبندي",
    desc: "نور النبوة وإشراق الرسالة المحمدية بأنوار الهدى والإيمان",
    url: "https://dn711002.ca.archive.org/0/items/Naqshabandee/%D9%83%D8%A8%D8%B1%20%D8%A7%D9%84%D9%85%D8%B5%D8%B7%D9%81%D9%89%20%D9%88%D9%84%D8%A7%D8%AD%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D8%A1.mp3",
    badge: "أنوار المولد",
    duration: "08:12"
  },
  {
    id: "naqsh_mashi_benoor",
    category: "naqshbandi",
    title: "أغيب وذو اللطائف لا يغيب (ماشي بنور الله)",
    reciter: "الشيخ سيد النقشبندي",
    desc: "ماشي بنور الله أدعي وأقول يا رب.. من أرق ما شدى به قيثارة السماء",
    url: "https://dn711002.ca.archive.org/0/items/Naqshabandee/%D8%A3%D8%BA%D9%8A%D8%A8%20%D9%88%D8%B0%D9%88%20%D8%A7%D9%84%D9%84%D8%B7%D8%A7%D8%A6%D9%81%20%D9%84%D8%A7%D9%8A%D8%BA%D9%8A%D8%A8.mp3",
    badge: "نور وسكينة",
    duration: "04:55"
  },
  {
    id: "naqsh_in_azomat",
    category: "naqshbandi",
    title: "يا رب إن عظمت ذنوبي كثرة",
    reciter: "الشيخ سيد النقشبندي",
    desc: "فلقد علمت بأن عفوك أعظم.. أبيات الإمام الشافعي بأداء باهر",
    url: "https://dn711002.ca.archive.org/0/items/Naqshabandee/%D9%8A%D8%A7%D8%B1%D8%A8%20%D8%A5%D9%86%20%D8%B9%D8%B8%D9%85%D8%AA%20%D8%B0%D9%86%D9%88%D8%A8%D9%8A%20%D9%83%D8%AB%D8%B1%D8%A9.mp3",
    badge: "استغفار ورجاء",
    duration: "08:45"
  },
  {
    id: "naqsh_ayoha_sahir",
    category: "naqshbandi",
    title: "أسماء الله الحسنى",
    reciter: "الشيخ سيد النقشبندي",
    desc: "التسجيل الكامل لأسماء الله الحسنى بصوت قيثارة السماء الشيخ سيد النقشبندي",
    url: "https://dn711002.ca.archive.org/0/items/Naqshabandee/%D8%A3%D8%B3%D9%85%D8%A7%D8%A1%20%D8%A7%D9%84%D9%84%D9%87%20%D8%A7%D9%84%D8%AD%D8%B3%D9%86%D9%89%20%D8%A8%D8%B5%D9%88%D8%AA%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B3%D9%8A%D8%AF%20%D8%A7%D9%84%D9%86%D9%82%D8%B4%D8%A8%D9%86%D8%AF%D9%8A.mp3",
    badge: "أسماء الجلال",
    duration: "07:50"
  },

  // ─── 4. روائع الشيخ طه الفشني ───
  {
    id: "fashni_mokhtar",
    category: "fashni",
    title: "يا أيها المختار من خير الورى",
    reciter: "الشيخ طه الفشني",
    desc: "تاج التواشيح الصوفية الخالدة وإمام المنشدين في مدح خير البرية",
    url: "https://dn721901.ca.archive.org/0/items/20230916_20230916_1609/009%20%20%D9%8A%D8%A7%20%D8%A3%D9%8A%D9%87%D8%A7%20%D8%A7%D9%84%D9%85%D8%AE%D8%AA%D8%A7%D8%B1%20%D8%AB%D9%85%20%D8%AD%D8%A8%20%D8%A7%D9%84%D8%AD%D8%B3%D9%8A%D9%86%20%20%D8%B7%D9%87%20%D8%A7%D9%84%D9%81%D8%B4%D9%86%D9%8A%20%20%D8%A7%D8%A8%D8%AA%D9%87%D8%A7%D9%84%D8%A7%D8%AA.mp3",
    badge: "سيد التواشيح",
    duration: "13:20"
  },
  {
    id: "fashni_hob_hussein",
    category: "fashni",
    title: "يا آل بيت النبي (محفل نادر بحمص 1959)",
    reciter: "الشيخ طه الفشني",
    desc: "توشيح خالد من أندر وأرق ما أنشد الفشني في محبة السبط الشهيد وآل البيت الأطهار",
    url: "https://dn721901.ca.archive.org/0/items/20230916_20230916_1609/008%20%20%D9%83%D9%86%D8%B2%20%D8%AB%D9%85%D9%8A%D9%86%20!%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B7%D9%87%20%D8%A7%D9%84%D9%81%D8%B4%D9%86%D9%89%20%D8%A7%D8%A8%D8%AA%D9%87%D8%A7%D9%84%20%D9%8A%D8%A7%20%D8%A2%D9%84%20%D8%A8%D9%8A%D8%AA%20%D8%A7%D9%84%D9%86%D8%A8%D9%89%20%D8%A8%D9%85%D8%B3%D8%AC%D8%AF%20%D8%AE%D8%A7%D9%84%D8%AF%20%D8%A8%D9%86%20%D8%A7%D9%84%D9%88%D9%84%D9%8A%D8%AF%20%D8%A8%D8%AD%D9%85%D8%B5%201959%20%20%D8%AD%D8%B5%D8%B1%D9%8A%D9%91%D8%A7%D8%AA.mp3",
    badge: "شوق ومحبة",
    duration: "09:15"
  },
  {
    id: "fashni_meelad_taha",
    category: "fashni",
    title: "ميلاد طه أشرقت أنواره",
    reciter: "الشيخ طه الفشني",
    desc: "بشارة ميلاد المصطفى ﷺ بأداء فخم ومقامات صوتية بديعة نادرة",
    url: "https://dn720905.ca.archive.org/0/items/Sheikh-Taha-Al-Fashni-Ibtihalat/%D9%85%D9%8A%D9%84%D8%A7%D8%AF%20%D8%B7%D9%87%20%20%20%D8%B7%D9%87%20%D8%A7%D9%84%D9%81%D8%B4%D9%86%D9%8A%20%20%20%D8%A7%D8%A8%D8%AA%D9%87%D8%A7%D9%84%D8%A7%D8%AA.mp3",
    badge: "المولد النبوي",
    duration: "11:40"
  },
  {
    id: "fashni_ilahi_lazimtu",
    category: "fashni",
    title: "إلهي إن يكن ذنبي عظيماً (لزمت باب الرجا)",
    reciter: "الشيخ طه الفشني",
    desc: "تضرع واستغاثة خاشعة بالله العلي القدير في جوف الليل البهيم",
    url: "https://dn721901.ca.archive.org/0/items/20230916_20230916_1609/002%20%20%D8%A7%D8%A8%D8%AA%D9%87%D8%A7%D9%84%D8%A7%D8%AA%20%D8%A7%D9%84%D9%82%D8%A7%D8%B1%D8%A6%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE%20%D8%B7%D9%87%20%D8%A7%D9%84%D9%81%D8%B4%D9%86%D9%8A%20-%20%D8%A5%D9%84%D9%87%D9%8A%20%D8%A5%D9%86%20%D9%8A%D9%83%D9%86%20%D8%B0%D9%86%D8%A8%D9%8A%20%D8%B9%D8%B8%D9%8A%D9%85%D9%8B%D8%A7.mp3",
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
    url: "https://dn720700.ca.archive.org/0/items/3emran_20250909/17%20%D9%81%D9%83%D9%85%20%D9%84%D9%84%D9%87%20%D9%85%D9%86%20%D9%84%D8%B7%D9%81%20%D8%AE%D9%81%D9%8A.mp3",
    badge: "قمة المقامات",
    duration: "14:10"
  },
  {
    id: "omran_sayed_kawnayn",
    category: "omran_fayoumi",
    title: "يا سيد الكونين يا علم الهدى",
    reciter: "الشيخ محمد عمران",
    desc: "مديح نبوي فائق الروعة يحلق بالسامعين في آفاق المحبة والجمال",
    url: "https://ia600506.us.archive.org/19/items/20230916_20230916_0318/008%20%20%D9%8A%D8%A7%20%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D9%86%D9%88%D8%A7%D8%AF%D8%B1%20%20%D9%81%D9%8A%D8%AF%D9%8A%D9%88%20%D9%84%D9%84%D8%B4%D9%8A%D8%AE%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%B9%D9%85%D8%B1%D8%A7%D9%86%20%D8%A7%D8%A8%D8%AA%D9%87%D8%A7%D9%84%20%D9%86%D8%A7%D8%AF%D8%B1%20%D9%8A%D8%A7%D8%B3%D9%8A%D8%AF%20%D8%A7%D9%84%D9%83%D9%88%D9%86%D9%8A%D9%86%20%D8%B9%D8%A7%D9%85%201993%20%D8%B1%D9%88%D8%A7%D8%A6%D8%B9%20%D9%88%D9%86%D9%88%D8%A7%D8%AF%D8%B1.mp3",
    badge: "مديح شريف",
    duration: "10:25"
  },
  {
    id: "omran_adrikna",
    category: "omran_fayoumi",
    title: "قصدت باب الرجا (أدركنا يا رسول الله)",
    reciter: "الشيخ محمد عمران",
    desc: "استغاثة ومديح خاشع بصوت قيثارة الإنشاد الشيخ محمد عمران",
    url: "https://dn720700.ca.archive.org/0/items/3emran_20250909/21%20%D9%82%D8%B5%D8%AF%D8%AA%20%D8%A8%D8%A7%D8%A8%20%D8%A7%D9%84%D8%B1%D8%AC%D8%A7.mp3",
    badge: "شوق ورجاء",
    duration: "09:40"
  },
  {
    id: "omran_asmaa_allah",
    category: "omran_fayoumi",
    title: "سبحان من عنت الوجوه لوجهه",
    reciter: "الشيخ محمد عمران",
    desc: "إنشاد جليل وتسبيح عظيم لصفات الجلال والكمال الإلهي",
    url: "https://dn720700.ca.archive.org/0/items/3emran_20250909/15%20%D8%B3%D8%A8%D8%AD%D8%A7%D9%86%20%D9%85%D9%86%20%D8%B9%D9%86%D8%AA%20%D8%A7%D9%84%D9%88%D8%AC%D9%88%D9%87%20%D9%84%D9%88%D8%AC%D9%87%D9%87.mp3",
    badge: "أسماء الجلال",
    duration: "12:50"
  },
  {
    id: "fayoumi_amana_khawf",
    category: "omran_fayoumi",
    title: "أنت الحمى وأنت الأمان (أماناً أيها الخوف)",
    reciter: "الشيخ محمد الفيومي وسيد النقشبندي",
    desc: "تسجيل مشترك نادر وتاريخي يجمع بين عملاقين من عمالقة الابتهال",
    url: "https://dn711002.ca.archive.org/0/items/Naqshabandee/%D8%A3%D9%86%D8%AA%20%D8%A3%D9%86%D8%AA%20%D8%A7%D9%84%D8%AD%D9%85%D9%89%20%D9%88%D8%A3%D9%86%D8%AA%20%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%86.mp3",
    badge: "لقاء العمالقة",
    duration: "08:10"
  },
  {
    id: "fayoumi_sameea_baseer",
    category: "omran_fayoumi",
    title: "إلهي يا سميع ويا بصير",
    reciter: "الشيخ محمد الفيومي",
    desc: "شيخ المنشدين وإمام جامع الإمام الحسين عليه السلام في تضرع فجر باهر",
    url: "https://dn710807.ca.archive.org/0/items/Sama3almelouk_yahoo_20160527/%D8%A7%D9%84%D9%87%D9%89%20%D9%8A%D8%A7%D8%B3%D9%85%D9%8A%D8%B9%20%D9%88%D9%8A%D8%A7%D8%A8%D8%B5%D9%8A%D8%B1.mp3",
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
// 6. موسوعة حصن المسلم والأذكار اليومية الشاملة (أكثر من 80 ذكراً ودعاءً بالتشكيل التام)
// ═══════════════════════════════════════════════════════════════
const AZKAR_DATA = {
  morning: {
    title: "أذكار الصباح",
    icon: "☀️",
    items: [
      {
        id: "m_kursi",
        text: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ.",
        count: 1,
        reward: "مَن قرأها حين يُصبح أُجير من الجنّ حتى يُمسي"
      },
      {
        id: "m_muawidhat",
        text: "قراءة سُوَر: الإخلاص، والفلق، والناس (ثلاث مرّات).",
        count: 3,
        reward: "تكفيكَ من كلِّ شيءٍ في يومِك"
      },
      {
        id: "m_asbahna",
        text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.",
        count: 1,
        reward: "حفظ تام، ونفي الكسل، والوقاية من عذاب القبر والنار"
      },
      {
        id: "m_sayyid_istighfar",
        text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",
        count: 1,
        reward: "سيد الاستغفار: مَن قاله موقناً به ومات من يومه دخل الجنة"
      },
      {
        id: "m_raditu",
        text: "رَضِيتُ بِاللَّهِ رَبّاً، وَبِالإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ ﷺ نَبِيّاً وَرَسُولاً.",
        count: 3,
        reward: "كان حقّاً على الله أن يُرضيَه يوم القيامة"
      },
      {
        id: "m_afw_afiyah",
        text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.",
        count: 1,
        reward: "دعاء الحفظ والستر الشامل في الدين والبدن والأهل والمال"
      },
      {
        id: "m_bismillah_ladi",
        text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
        count: 3,
        reward: "لم يضرّه شيءٌ ولم تُصِبه فجأة بلاء حتى يُمسي"
      },
      {
        id: "m_aoodhu_bikalimat",
        text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
        count: 3,
        reward: "حفظ تام من شر الهوام وكل ذي شر وخبيث"
      },
      {
        id: "m_ya_hayyu",
        text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",
        count: 1,
        reward: "صلاح الشأن كله ودوام التوكل على الحي القيوم"
      },
      {
        id: "m_allahumma_bika_asbahna",
        text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.",
        count: 1,
        reward: "استشعار معية الله وتجديد العهد بحمده ونعمه"
      },
      {
        id: "m_aafini",
        text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ.",
        count: 3,
        reward: "حفظ العافية في الجسد والحواس والاستعاذة من الفقر وعذاب القبر"
      },
      {
        id: "m_fitrat_islam",
        text: "أَصْبَحْنَا عَلَى فِطْرَةِ الإِسْلَامِ، وَعَلَى كَلِمَةِ الإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ الْمُشْرِكِينَ.",
        count: 1,
        reward: "الثبات على التوحيد الخالص والفطرة النبوية المباركة"
      },
      {
        id: "m_subhan_adada_khalqihi",
        text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.",
        count: 3,
        reward: "تزن عبادة ساعات طوال من التسبيح والذكر المتواصل"
      },
      {
        id: "m_fatir_samawat",
        text: "اللَّهُمَّ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.",
        count: 1,
        reward: "الحصن الحصين من نزغات الشيطان ومكائد النفس الأمارة"
      },
      {
        id: "m_tahlil_100",
        text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
        count: 10,
        reward: "كانت له عدل عشر رقاب، وكُتبت له مائة حسنة ومُحيت عنه مائة سيئة"
      },
      {
        id: "m_salawat",
        text: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ.",
        count: 10,
        reward: "مَن صلّى عليّ حين يُصبح وحين يُمسي أدركته شفاعتي يوم القيامة"
      }
    ]
  },

  evening: {
    title: "أذكار المساء",
    icon: "🌙",
    items: [
      {
        id: "e_kursi",
        text: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ.",
        count: 1,
        reward: "مَن قرأها حين يُمسي أُجير من الجنّ حتى يُصبح"
      },
      {
        id: "e_khawateem_baqarah",
        text: "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ ۝ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ.",
        count: 1,
        reward: "مَن قرأ بالآيتين من آخر سورة البقرة في ليلةٍ كفتاه"
      },
      {
        id: "e_muawidhat",
        text: "قراءة سُوَر: الإخلاص، والفلق، والناس (ثلاث مرّات).",
        count: 3,
        reward: "حفظ ووقاية تامة من كل مكروه وشر حتى الصباح"
      },
      {
        id: "e_amsayna",
        text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.",
        count: 1,
        reward: "حفظ المساء وراحة النفس وأمان الليلة حتى يصبح"
      },
      {
        id: "e_sayyid_istighfar",
        text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",
        count: 1,
        reward: "سيد الاستغفار: مَن قاله موقناً به فمات من ليلته دخل الجنة"
      },
      {
        id: "e_raditu",
        text: "رَضِيتُ بِاللَّهِ رَبّاً، وَبِالإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ ﷺ نَبِيّاً وَرَسُولاً.",
        count: 3,
        reward: "كان حقّاً على الله أن يُرضيَه ويسعده في ليلته"
      },
      {
        id: "e_bismillah_ladi",
        text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
        count: 3,
        reward: "لم تصبه فجأة بلاء حتى يصبح في رعاية الله وحفظه"
      },
      {
        id: "e_aoodhu_bikalimat",
        text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
        count: 3,
        reward: "لم يضره في تلك الليلة شيء من لدغة أو هامة"
      },
      {
        id: "e_afw_afiyah",
        text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.",
        count: 1,
        reward: "حفظ تام من نوائب الليل وغوائله"
      },
      {
        id: "e_allahumma_ushhiduka",
        text: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ.",
        count: 4,
        reward: "مَن قالها أربع مرات أعتقه الله من النار"
      },
      {
        id: "e_ya_hayyu",
        text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",
        count: 1,
        reward: "الاعتصام برحمة الله وتوكيله في تدبير الليل كله"
      },
      {
        id: "e_allahumma_bika_amsayna",
        text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.",
        count: 1,
        reward: "حمداً لله على نعمة المساء والإقرار بالمصير إليه"
      },
      {
        id: "e_aafini",
        text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ.",
        count: 3,
        reward: "العافية في الجسد والسمع والبصر والأمان من الفتن"
      },
      {
        id: "e_subhan_100",
        text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",
        count: 100,
        reward: "حُطّت خطاياه وإن كانت مثل زبد البحر ولم يأتِ أحدٌ بأفضل مما جاء به"
      },
      {
        id: "e_astaghfirullah_100",
        text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.",
        count: 100,
        reward: "مغفرة الذنوب وفتح أبواب الرزق والسكينة"
      },
      {
        id: "e_salawat",
        text: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ.",
        count: 10,
        reward: "مَن صلّى عليّ عشراً حين يُمسي أدركته شفاعتي"
      }
    ]
  },

  post_prayer: {
    title: "أذكار بعد الصلاة",
    icon: "🕌",
    items: [
      {
        id: "p_istighfar",
        text: "أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ. اللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ، تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ.",
        count: 1,
        reward: "سنة المصطفى ﷺ فور التسليم من الفريضة"
      },
      {
        id: "p_tahlil_la_mania",
        text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ.",
        count: 1,
        reward: "الإقرار بكمال قدرة الله وتفرده بالعطاء والمنع"
      },
      {
        id: "p_la_hawla",
        text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ، لَا إِلَهَ إِلَّا اللَّهُ، وَلَا نَعْبُدُ إِلَّا إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لَا إِلَهَ إِلَّا اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ.",
        count: 1,
        reward: "تحقيق التوحيد الخالص وشكر النعم والآلاء"
      },
      {
        id: "p_tasbeeh_33",
        text: "سُبْحَانَ اللَّهِ (33)، وَالْحَمْدُ لِلَّهِ (33)، وَاللَّهُ أَكْبَرُ (33)، وَتَمَامَ الْمِائَةِ: لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
        count: 1,
        reward: "غُفرت خطاياه وإن كانت مثل زبد البحر"
      },
      {
        id: "p_kursi",
        text: "قراءة آية الكرسي دبر كل صلاة مكتوبة: {اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...}",
        count: 1,
        reward: "مَن قرأها دبر كل صلاة مكتوبة لم يمنعه من دخول الجنة إلا أن يموت"
      },
      {
        id: "p_ikhlas_muawidhat",
        text: "قراءة سورة الإخلاص، والمعوذتين (الفلق والناس) دبر كل صلاة.",
        count: 1,
        reward: "حفظ وصيانة إلهية بين الصلوات الخمس"
      },
      {
        id: "p_aanni_ala_dhikrika",
        text: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ، وَشُكْرِكَ، وَحُسْنِ عِبَادَتِكَ.",
        count: 1,
        reward: "وصية النبي ﷺ لمعاذ بن جبل رضي الله عنه"
      },
      {
        id: "p_aoodhu_minal_jubn",
        text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْجُبْنِ، وَأَعُوذُ بِكَ أَنْ أُرَدَّ إِلَى أَرْذَلِ الْعُمُرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ.",
        count: 1,
        reward: "الاستعاذة النبوية الجامعة من آفات النفس والآخرة"
      },
      {
        id: "p_qini_adhabak",
        text: "رَبِّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.",
        count: 3,
        reward: "طلب النجاة والسلامة يوم الحساب والقيامة"
      },
      {
        id: "p_fajr_maghrib_10",
        text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ (10 مرات بعد الفجر والمغرب قبل أن يثني رجليه).",
        count: 10,
        reward: "كُتبت له عشر حسنات ومُحيت عنه عشر سيئات ورُفع له عشر درجات وكان في حرز من كل مكروه"
      }
    ]
  },

  sleep_wake: {
    title: "النوم والاستيقاظ",
    icon: "😴",
    items: [
      {
        id: "s_bismika_rabbi",
        text: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.",
        count: 1,
        reward: "حفظ النفس والروح عند النوم ورعايتها بلطف الله"
      },
      {
        id: "s_nafk_kaffayn",
        text: "جمع الكفين وقراءة الإخلاص والمعوذتين، والنفث فيهما ومسح ما استطاع من الجسد (ثلاث مرّات).",
        count: 3,
        reward: "سنة المصطفى ﷺ لوقاية الجسد والروح من الكوابيس والشرور"
      },
      {
        id: "s_kursi",
        text: "قراءة آية الكرسي كاملة قبل النوم: {اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...}",
        count: 1,
        reward: "لا يزال عليك من الله حافظ ولا يقربك شيطان حتى تصبح"
      },
      {
        id: "s_aslamtu_nafsi",
        text: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ.",
        count: 1,
        reward: "مَن قالها ومات من ليلته مات على الفطرة"
      },
      {
        id: "s_tasbeeh_fatimah",
        text: "سُبْحَانَ اللَّهِ (33)، وَالْحَمْدُ لِلَّهِ (33)، وَاللَّهُ أَكْبَرُ (34) عند النوم.",
        count: 1,
        reward: "وصية النبي ﷺ لفاطمة وعلي رضي الله عنهما؛ خيرٌ لهما من خادم وقوة للبدن"
      },
      {
        id: "s_quran_mulk",
        text: "قراءة سورة الملك المباركة كاملة: {تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ...}",
        count: 1,
        reward: "المانعة المنجية من عذاب القبر"
      },
      {
        id: "s_wake_alhamdulillah",
        text: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.",
        count: 1,
        reward: "حمد الله فور اليقظة على نعمة الحياة وانبعاث الجسد"
      },
      {
        id: "s_wake_aafani",
        text: "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لِي بِذِكْرِهِ.",
        count: 1,
        reward: "شكر العافية وتجدد الأجل لذكره تبارك وتعالى"
      },
      {
        id: "s_wake_tahlil",
        text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ، اللَّهُمَّ اغْفِرْ لِي.",
        count: 1,
        reward: "مَن تعارّ من الليل فقالها ثم دعا استُجيب له، وإن قام فتوضأ وصلى قُبلت صلاته"
      },
      {
        id: "s_quran_kafirun",
        text: "قراءة سورة الكافرون كاملة: {قُلْ يَا أَيُّهَا الْكَافِرُونَ...} عند النوم.",
        count: 1,
        reward: "براءةٌ من الشرك لمن قرأها قبل أن ينام"
      }
    ]
  },

  quranic_duas: {
    title: "أدعية قرآنية مأثورة",
    icon: "📖",
    items: [
      {
        id: "q_rabbana_atina",
        text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        count: 3,
        reward: "أجمع دعاء للخير كله وسعادة الدارين ووقاية من النار"
      },
      {
        id: "q_la_tuzigh",
        text: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ",
        count: 3,
        reward: "سؤال الثبات على الصراط المستقيم والاعتصام بالرحمة الإلهية"
      },
      {
        id: "q_walidayn",
        text: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
        count: 3,
        reward: "أعظم دعاء لبر الوالدين وطلب الرحمة والرضوان لهما"
      },
      {
        id: "q_sharh_sadr",
        text: "رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي ۝ وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي ۝ يَفْقَهُوا قَوْلِي",
        count: 3,
        reward: "دعاء موسى عليه السلام لانشراح الصدر وتيسير العسير"
      },
      {
        id: "q_hab_lana_azwajina",
        text: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
        count: 3,
        reward: "صلاح الذرية والأسرة ونيل إمامة المتقين بالهدى والتقى"
      },
      {
        id: "q_yunus",
        text: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
        count: 3,
        reward: "دعوة ذي النون: ما دعا بها مسلم في كربة إلا فرّج الله عنه"
      },
      {
        id: "q_rabbana_faghfir_lana",
        text: "رَّبَّنَا إِنَّنَا سَمِعْنَا مُنَادِيًا يُنَادِي لِلْإِيمَانِ أَنْ آمِنُوا بِرَبِّكُمْ فَآمَنَّا ۚ رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الْأَبْرَارِ",
        count: 3,
        reward: "سؤال المغفرة وتكفير السيئات والوفاة مع الصالحين الأخيار"
      },
      {
        id: "q_hasbiyallah",
        text: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
        count: 7,
        reward: "مَن قالها سبع مرات كفاه الله ما أهمه من أمر الدنيا والآخرة"
      },
      {
        id: "q_rabb_innee_lima_anzalta",
        text: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
        count: 3,
        reward: "دعاء الكليم موسى عليه السلام لجلب الخير والرزق وتيسير الزواج"
      },
      {
        id: "q_rabb_hab_lee_hukman",
        text: "رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ ۝ وَاجْعَل لِّي لِسَانَ صِدْقٍ فِي الْآخِرِينَ ۝ وَاجْعَلْنِي مِن وَرَثَةِ جَنَّةِ النَّعِيمِ",
        count: 3,
        reward: "دعاء إبراهيم الخليل عليه السلام لنيل الحكمة والذكر الطيب والجنة"
      }
    ]
  },

  prophetic_duas: {
    title: "أدعية نبوية جامعة",
    icon: "🤲",
    items: [
      {
        id: "pr_huda_tuqa",
        text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى.",
        count: 3,
        reward: "جمع أصول الفلاح في النفس والمال والدين والعاقبة"
      },
      {
        id: "pr_zawaal_nimatika",
        text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ.",
        count: 3,
        reward: "استدامة النعم ودفع البلايا الفجائية والمصائب"
      },
      {
        id: "pr_ya_muqallib",
        text: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ.",
        count: 3,
        reward: "أكثر دعاء كان يدعو به الحبيب المصطفى ﷺ للثبات"
      },
      {
        id: "pr_hamm_hazan",
        text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ.",
        count: 3,
        reward: "تفريج الهموم والديون ودفع الوهن والكسل"
      },
      {
        id: "pr_sayyid_duaa",
        text: "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي، وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي، وَاجْعَلِ الْحَيَاةَ زِيَادَةً لِي فِي كُلِّ خَيْرٍ، وَاجْعَلِ الْمَوْتَ رَاحَةً لِي مِنْ كُلِّ شَرٍّ.",
        count: 1,
        reward: "دعاء جامع لخير المعاش والمعاد ومآلات الأمور كلها"
      },
      {
        id: "pr_ilm_naafi",
        text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً.",
        count: 3,
        reward: "يقال كل صباح لنيل التوفيق في العلم والرزق والعمل"
      },
      {
        id: "pr_hasbi_rabbi",
        text: "اللَّهُمَّ لَكَ أَسْلَمْتُ، وَبِكَ آمَنْتُ، وَعَلَيْكَ تَوَكَّلْتُ، وَإِلَيْكَ أَنَبْتُ، وَبِكَ خَاصَمْتُ، اللَّهُمَّ إِنِّي أَعُوذُ بِعِزَّتِكَ لَا إِلَهَ إِلَّا أَنْتَ أَنْ تُضِلَّنِي، أَنْتَ الْحَيُّ الَّذِي لَا يَمُوتُ، وَالْجِنُّ وَالإِنْسُ يَمُوتُونَ.",
        count: 1,
        reward: "الاعتصام بعزة الحي القيوم الذي لا تأخذه سنة ولا نوم"
      },
      {
        id: "pr_maghfirah_jami",
        text: "اللَّهُمَّ اغْفِرْ لِي خَطِيئَتِي وَجَهْلِي، وَإِسْرَافِي فِي أَمْرِي، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي، اللَّهُمَّ اغْفِرْ لِي جِدِّي وَهَزْلِي، وَخَطَئِي وَعَمْدِي، وَكُلُّ ذَلِكَ عِنْدِي.",
        count: 1,
        reward: "الاستغفار الجامع النبوي لجميع صنوف الزلل"
      }
    ]
  },

  masjid_wudhu: {
    title: "أذكار المسجد والوضوء",
    icon: "🕋",
    items: [
      {
        id: "w_tasmiyah",
        text: "بِسْمِ اللَّهِ (قبل الوضوء).",
        count: 1,
        reward: "لا وضوء لمن لم يذكر اسم الله عليه"
      },
      {
        id: "w_shahadah",
        text: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ.",
        count: 1,
        reward: "فُتحت له أبواب الجنة الثمانية يدخل من أيها شاء"
      },
      {
        id: "m_masjid_dukhool",
        text: "بِسْمِ اللَّهِ، وَالصَّلاَةُ وَالسَّلاَمُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ (عند دخول المسجد مع تقديم الرجل اليمنى).",
        count: 1,
        reward: "استنزال رحمات الله ودخول بيت من بيوته بطمأنينة"
      },
      {
        id: "m_masjid_khurooj",
        text: "بِسْمِ اللَّهِ، وَالصَّلاَةُ وَالسَّلاَمُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ، اللَّهُمَّ اعْصِمْنِي مِنَ الشَّيْطَانِ الرَّجِيمِ (عند الخروج مع تقديم الرجل اليسرى).",
        count: 1,
        reward: "سؤال الفضل والرزق والاعتصام من الشيطان"
      },
      {
        id: "m_adhan_say",
        text: "ترديد الأذان خلف المؤذن كما يقول، إلا في الحيعلتين فيقول: (لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ).",
        count: 1,
        reward: "غفر له ذنبه ونال مثل أجر المؤذن"
      },
      {
        id: "m_adhan_duaa",
        text: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلاَةِ الْقَائِمَةِ، آتِ مُحَمَّداً الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَاماً مَحْمُوداً الَّذِي وَعَدْتَهُ.",
        count: 1,
        reward: "حلّت له شفاعة النبي ﷺ يوم القيامة"
      }
    ]
  }
};

// ═══════════════════════════════════════════════════════════════
// 6.2. نظام الأذكار اليومية المتجددة تلقائياً (31 يوماً كاملة)
// ═══════════════════════════════════════════════════════════════
const DAILY_ROTATING_ADHKAR = [
  { day: 1, title: "ذكر التوحيد والاستفتاح", text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", reward: "عدل عتق عشر رقاب وكُتبت له مائة حسنة ومُحيت عنه مائة سيئة", count: 100 },
  { day: 2, title: "سيد الاستغفار والتوبة", text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", reward: "مَن قاله موقناً به في يومه فمات دخل الجنة", count: 1 },
  { day: 3, title: "تسبيح الملائكة وحط الخطايا", text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ", reward: "كلمتان خفيفتان على اللسان ثقيلتان في الميزان حبيبتان إلى الرحمن", count: 100 },
  { day: 4, title: "الحصن المنيع من فجأة البلاء", text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", reward: "لم يضره شيء ولم تصبه فجأة بلاء حتى يمسي", count: 3 },
  { day: 5, title: "كنز من كنوز الجنة", text: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ", reward: "كنز من تحت عرش الرحمن وباب من أبواب الجنة", count: 100 },
  { day: 6, title: "الصلاة على النبي ﷺ", text: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ", reward: "مَن صلى عليّ صلاة صلى الله عليه بها عشراً ورُفعت له عشر درجات", count: 100 },
  { day: 7, title: "دعوة ذي النون لتفريج الكروب", text: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ", reward: "ما دعا بها مكروب إلا فرّج الله عنه ونفّس كربته", count: 33 },
  { day: 8, title: "طلب العافية والستر التام", text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي", reward: "الحفظ النبوي الأتم من بين يديك ومن خلفك وعن يمينك وشمالك", count: 3 },
  { day: 9, title: "صلاح الشأن كله والاستغاثة", text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ", reward: "استدامة التوفيق والتوكل التام على القيوم", count: 3 },
  { day: 10, title: "الاعتصام بكلمات الله التامات", text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", reward: "حفظ تام من شر الهوام والحسد وذوي الشرور", count: 3 },
  { day: 11, title: "الباقيات الصالحات", text: "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ", reward: "أحب الكلام إلى الله وهن الباقيات الصالحات", count: 100 },
  { day: 12, title: "الرضا بالله ورسوله", text: "رَضِيتُ بِاللَّهِ رَبّاً، وَبِالإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ ﷺ نَبِيّاً وَرَسُولاً", reward: "كان حقاً على الله تعالى أن يرضيه يوم القيامة", count: 3 },
  { day: 13, title: "الاستعاذة من الهم والحزن", text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ", reward: "دواء نبوي مجرب لدفع الهموم والغموم وقضاء الديون", count: 3 },
  { day: 14, title: "سؤال الهدى والتقى والغنى", text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى", reward: "جامع خيري الدنيا والآخرة في النفس والمال", count: 3 },
  { day: 15, title: "حسبنا الله ونعم الوكيل", text: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ، عَلَى اللَّهِ تَوَكَّلْنَا", reward: "قالها إبراهيم حين أُلقي في النار وقالها المسلمون يوم أحد فكفاهم الله", count: 100 },
  { day: 16, title: "تسبيح يزن عبادة الساعات", text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ", reward: "تزن عبادة ساعات طوال من الذكر والتسبيح", count: 3 },
  { day: 17, title: "الثبات على الإيمان", text: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ", reward: "سؤال الثبات على الهدى حتى لقاء الله", count: 7 },
  { day: 18, title: "طلب العلم النافع والرزق الطيب", text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً", reward: "دعاء البركة والتوفيق في بداية كل صباح ومسعى", count: 3 },
  { day: 19, title: "استدامة النعمة والعافية", text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ", reward: "حفظ النعم الحاضرة واستدفاع النقم الغائبة", count: 3 },
  { day: 20, title: "العتق من النار", text: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ", reward: "مَن استجار من النار سبعاً قالت النار: يا رب أجره", count: 7 },
  { day: 21, title: "عافية الجسد والسمع والبصر", text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ", reward: "حفظ الحواس والبدن من الأمراض والأسقام", count: 3 },
  { day: 22, title: "الفطرة الإسلامية النقية", text: "أَصْبَحْنَا عَلَى فِطْرَةِ الإِسْلَامِ، وَعَلَى كَلِمَةِ الإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ", reward: "تجديد الانتماء والاعتزاز بهدي النبيين الكرام", count: 1 },
  { day: 23, title: "دعاء الكفاية والأمان", text: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ", reward: "مَن قالها سبعاً كفاه الله ما أهمه من أمر دنياه وآخرته", count: 7 },
  { day: 24, title: "الاستغفار المحاء للذنوب", text: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ", reward: "غُفرت ذنوبه وإن كان قد فرّ من الزحف", count: 100 },
  { day: 25, title: "دعاء البركة والخير العميم", text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ مَا سَأَلَكَ مِنْهُ نَبِيُّكَ مُحَمَّدٌ ﷺ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا اسْتَعَاذَ مِنْهُ نَبِيُّكَ مُحَمَّدٌ ﷺ", reward: "جامع لكل دعاء استعاذ منه أو سأله النبي الكريم", count: 3 },
  { day: 26, title: "بر الوالدين في كل وقت", text: "رَّبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا", reward: "بر الوالدين بعد موتهما وحياتهما ورفعة درجاتهم", count: 10 },
  { day: 27, title: "دعاء التيسير وانشراح الصدر", text: "رَبِّ اشْرَحْ لِي صَدْرِي، وَيَسِّرْ لِي أَمْرِي، وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي", reward: "انفراج الهموم وتسهيل العسير ونيل الفصاحة والبيان", count: 3 },
  { day: 28, title: "تطهير القلب من الغل والحسد", text: "رَبَّنَا اغْفِرْ لَنَا وَلإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالإِيمَانِ وَلا تَجْعَلْ فِي قُلُوبِنَا غِلاً لِّلَّذِينَ آمَنُوا", reward: "سلامة الصدر ونقاء القلب ومحبة الصالحين", count: 3 },
  { day: 29, title: "الاستعاذة من عذاب القبر", text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ النَّارِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ", reward: "الوقاية النبوية الكبرى من الفتن الأربع العظام", count: 3 },
  { day: 30, title: "دعاء الفرج واليسر بعد العسر", text: "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلاً، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلاً", reward: "تيسير كل شأن شاق وتفريج كل كرب مستعصٍ", count: 3 },
  { day: 31, title: "الخاتمة بالباقيات الصالحات", text: "اللَّهُمَّ اخْتِمْ لَنَا بِالْبَاقِيَاتِ الصَّالِحَاتِ أَعْمَالَنَا، وَاجْعَلْ خَيْرَ أَيَّامِنَا يَوْمَ نَلْقَاكَ، وَتَوَفَّنَا وَأَنْتَ رَاضٍ عَنَّا", reward: "نيل حسن الخاتمة والفوز برضوان الله وجنته", count: 3 }
];

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
