import { Language } from '../types';

export interface LearningGoal {
  id: string;
  code: string;
  text: string;
  detail: string;
  statusIcon: string;
}

export const CURRICULUM_DATA_ID = {
  mataPelajaran: "Informatika (Fase D)",
  kelas: "Kelas VII (Tujuh) SMP/MTs",
  elemen: "Sistem Komputer (SK)",
  capaianPembelajaran:
    "Peserta didik mampu mendeskripsikan komponen, fungsi, dan cara kerja komputer/sistem komputasi yang membentuk sistem komputasi, serta menjelaskan interaksi antara perangkat keras, perangkat lunak, dan pengguna.",
  tujuanPembelajaran: [
    {
      id: "tp1",
      code: "TP 7.1",
      text: "Mengidentifikasi Komponen Perangkat Keras",
      detail:
        "Mampu mengenali dan mengelompokkan perangkat keras (hardware) ke dalam kategori input, pemroses (processor), output, dan penyimpanan (storage) beserta fungsinya.",
      statusIcon: "Cpu",
    },
    {
      id: "tp2",
      code: "TP 7.2",
      text: "Membedakan Ragam Perangkat Lunak & Brainware",
      detail:
        "Mampu mendeskripsikan peran Sistem Operasi (OS), Program Aplikasi, dan Program Utilitas, serta mengidentifikasi peran pengguna (Brainware).",
      statusIcon: "AppWindow",
    },
    {
      id: "tp3",
      code: "TP 7.3",
      text: "Menjelaskan Kolaborasi 3 Pilar Komputasi",
      detail:
        "Mampu menguraikan interaksi harmonis antara Hardware, Software, dan Brainware, serta dampak jika salah satu komponen tidak tersedia.",
      statusIcon: "Layers",
    },
    {
      id: "tp4",
      code: "TP 7.4",
      text: "Menganalisis Siklus Input-Proses-Output (IPO)",
      detail:
        "Mampu menelusuri aliran data dari perangkat input, pemrosesan di CPU/RAM, penyimpanan, hingga menghasilkan informasi berguna pada perangkat output.",
      statusIcon: "Repeat",
    },
  ],
};

export const CURRICULUM_DATA_EN = {
  mataPelajaran: "Informatics & Computer Science",
  kelas: "Grade 7 (Middle School / Junior High)",
  elemen: "Computer Systems (CS)",
  capaianPembelajaran:
    "Students are able to describe the components, functions, and working principles of computer/computing systems, and explain the interaction between hardware, software, and users.",
  tujuanPembelajaran: [
    {
      id: "tp1",
      code: "LO 7.1",
      text: "Identify & Categorize Hardware Components",
      detail:
        "Able to recognize and classify hardware into input, processor, storage, and output devices alongside their distinct functions.",
      statusIcon: "Cpu",
    },
    {
      id: "tp2",
      code: "LO 7.2",
      text: "Differentiate Software Types & Brainware Roles",
      detail:
        "Able to describe the roles of Operating Systems (OS), Application Software, and Utility Software, as well as identify key user roles (Brainware).",
      statusIcon: "AppWindow",
    },
    {
      id: "tp3",
      code: "LO 7.3",
      text: "Explain the 3-Pillar Computing Synergy",
      detail:
        "Able to analyze the harmonious interaction between Hardware, Software, and Brainware, including what happens if any component is missing.",
      statusIcon: "Layers",
    },
    {
      id: "tp4",
      code: "LO 7.4",
      text: "Analyze the Input-Process-Output (IPO) Cycle",
      detail:
        "Able to trace data flow from input devices, processing in CPU/RAM, persistent storage, to delivering meaningful information via output devices.",
      statusIcon: "Repeat",
    },
  ],
};

export const HARDWARE_CATEGORIES_ID = [
  {
    id: "input",
    title: "1. Perangkat Masukan (Input Device)",
    shortDesc: "Pintu gerbang untuk memasukkan data dan instruksi ke komputer.",
    analogy: "Seperti panca indra manusia (mata, telinga, kulit) yang menerima sinyal dari luar.",
    items: [
      { name: "Keyboard", desc: "Papan ketik untuk memasukkan huruf, angka, dan perintah pintasan." },
      { name: "Mouse / Touchpad", desc: "Perangkat penunjuk untuk menggerakkan kursor dan memilih objek." },
      { name: "Mikrofon (Mic)", desc: "Menangkap gelombang suara analog dan mengubahnya menjadi sinyal digital." },
      { name: "Scanner / Barcode", desc: "Memindai dokumen fisik atau barcode produk menjadi data digital." },
      { name: "Webcam", desc: "Kamera digital untuk menangkap video langsung ke komputer." },
    ],
  },
  {
    id: "process",
    title: "2. Perangkat Pemroses (Process Device)",
    shortDesc: "Otak utama yang mengolah, menghitung, dan mengeksekusi instruksi data.",
    analogy: "Seperti otak manusia yang berpikir keras, berhitung matematika, dan mengambil keputusan logis.",
    items: [
      { name: "CPU (Processor)", desc: "Central Processing Unit: Otak komputer yang berisi ALU (penghitung) & CU (pengendali)." },
      { name: "Motherboard", desc: "Papan sirkuit utama yang menghubungkan seluruh komponen komputer agar dapat berkomunikasi." },
      { name: "GPU (Kartu Grafis)", desc: "Memproses visual resolusi tinggi, 3D rendering, video streaming, dan animasi game." },
      { name: "Power Supply Unit (PSU)", desc: "Mengalirkan daya listrik DC yang stabil ke seluruh komponen sirkuit." },
    ],
  },
  {
    id: "storage",
    title: "3. Perangkat Penyimpanan (Storage Device)",
    shortDesc: "Wadah penyimpanan data baik secara sementara maupun permanen.",
    analogy: "RAM seperti meja belajar aktif (dibersihkan saat mati lampu), SSD seperti lemari arsip permanen.",
    items: [
      { name: "RAM (Primary Memory)", desc: "Memori utama cepat dan Volatile (data hilang jika komputer dimatikan/restart)." },
      { name: "SSD / NVMe", desc: "Penyimpanan sekunder modern super kencang berbasis chip flash tanpa piringan putar." },
      { name: "Hard Disk Drive (HDD)", desc: "Penyimpanan magnetik berkapasitas besar untuk menyimpan file arsip jangka panjang." },
      { name: "Flashdisk & SD Card", desc: "Media penyimpanan portabel saku yang mudah dibawa lewat port USB." },
    ],
  },
  {
    id: "output",
    title: "4. Perangkat Keluaran (Output Device)",
    shortDesc: "Menampilkan hasil pengolahan komputer agar bisa dinikmati dan dipahami pengguna.",
    analogy: "Seperti mulut saat berbicara, ekspresi wajah, atau tangan saat menuliskan hasil pemikiran.",
    items: [
      { name: "Monitor / Layar", desc: "Menampilkan antarmuka visual grafis, teks dokumen, dan video animasi bergerak." },
      { name: "Speaker & Headphone", desc: "Mengubah sinyal audio digital menjadi gelombang suara yang terdengar di telinga." },
      { name: "Printer (Inkjet/Laser)", desc: "Mencetak teks dan gambar dari komputer ke media fisik lembaran kertas." },
      { name: "Proyektor LCD", desc: "Memproyeksikan tampilan layar komputer ke dinding/layar besar untuk presentasi kelas." },
    ],
  },
];

export const HARDWARE_CATEGORIES_EN = [
  {
    id: "input",
    title: "1. Input Devices",
    shortDesc: "The gateway for entering raw data and instructions into the computer system.",
    analogy: "Like human sensory organs (eyes, ears, skin) detecting signals from the outer world.",
    items: [
      { name: "Keyboard", desc: "Typing board with keys to enter letters, numbers, and command shortcuts." },
      { name: "Mouse / Trackpad", desc: "Pointing device to move the screen cursor and select digital objects." },
      { name: "Microphone", desc: "Captures acoustic sound waves and converts them into digital audio signals." },
      { name: "Barcode Scanner", desc: "Reads optical barcode lines and QR codes into product ID numbers." },
      { name: "Webcam", desc: "Digital camera capturing live video stream directly into the PC." },
    ],
  },
  {
    id: "process",
    title: "2. Processing Devices",
    shortDesc: "The computational core that executes instructions, calculations, and logic operations.",
    analogy: "Like the human brain thinking, calculating mathematical formulas, and making logical decisions.",
    items: [
      { name: "CPU (Processor)", desc: "Central Processing Unit: The brain containing ALU (arithmetic) & CU (control unit)." },
      { name: "Motherboard", desc: "Main printed circuit board interconnecting CPU, memory, and peripheral buses." },
      { name: "GPU (Graphics Card)", desc: "Dedicated chip for parallel 3D graphics rendering, video decoding, and game visuals." },
      { name: "Power Supply Unit (PSU)", desc: "Converts household AC current to clean, stable DC voltages for microchips." },
    ],
  },
  {
    id: "storage",
    title: "3. Storage Devices",
    shortDesc: "Media designed to retain digital information either temporarily or permanently.",
    analogy: "RAM is like an active desktop workspace; SSD is like a permanent lockable filing cabinet.",
    items: [
      { name: "RAM (Primary Memory)", desc: "Fast working memory; Volatile (all contents cleared when power is turned off)." },
      { name: "SSD / NVMe M.2", desc: "High-speed secondary storage using solid-state flash cells with no moving parts." },
      { name: "Hard Disk Drive (HDD)", desc: "Magnetic storage drive providing large storage capacity for archive files." },
      { name: "USB Flash Drive", desc: "Pocket-sized portable storage used to easily transfer school homework files." },
    ],
  },
  {
    id: "output",
    title: "4. Output Devices",
    shortDesc: "Translates processed computational data into human-understandable information.",
    analogy: "Like the human voice speaking, facial expressions, or hands writing down thoughts.",
    items: [
      { name: "Monitor / Display", desc: "Displays Graphical User Interface (GUI), text documents, and high-def videos." },
      { name: "Speakers & Headphones", desc: "Converts digital audio streams into physical acoustic sound waves." },
      { name: "Printer", desc: "Reproduces text and images onto physical paper sheets (Hard Copy)." },
      { name: "Classroom Projector", desc: "Projects the screen image onto a large wall or whiteboard for presentations." },
    ],
  },
];

export const SOFTWARE_CATEGORIES_ID = [
  {
    id: "os",
    title: "Sistem Operasi (Operating System / OS)",
    role: "Jembatan Pengendali & Manajer Utama",
    desc: "Perangkat lunak dasar yang bertugas mengelola seluruh perangkat keras dan menyediakan antarmuka bagi pengguna serta aplikasi lainnya.",
    examples: ["Microsoft Windows 11", "Linux (Ubuntu/Mint)", "Apple macOS", "Google Android", "Apple iOS"],
    icon: "ShieldAlert",
  },
  {
    id: "aplikasi",
    title: "Program Aplikasi (Application Software)",
    role: "Penyelesai Tugas Khusus Pengguna",
    desc: "Perangkat lunak yang dirancang langsung untuk membantu manusia melakukan pekerjaan spesifik seperti mengetik, menggambar, browsing, atau bermain.",
    examples: ["Google Chrome (Browser)", "MS Word / Docs (Ketik)", "Canva / Photoshop (Desain)", "Roblox / Minecraft (Game)"],
    icon: "Grid",
  },
  {
    id: "utilitas",
    title: "Program Utilitas (Utility Software)",
    role: "Dokter & Pemelihara Komputer",
    desc: "Perangkat lunak pembantu yang bertugas merawat, menjaga keamanan, mengompresi file, dan mengoptimalkan performa komputer.",
    examples: ["Antivirus (Windows Defender, Avast)", "WinRAR / 7-Zip (Kompresi)", "Disk Cleanup", "Backup Tools"],
    icon: "Wrench",
  },
];

export const SOFTWARE_CATEGORIES_EN = [
  {
    id: "os",
    title: "Operating System (OS)",
    role: "Resource Manager & Master Bridge",
    desc: "System software that manages hardware resources, allocates CPU/RAM time, and provides user interface & file systems.",
    examples: ["Microsoft Windows 11", "Linux (Ubuntu/Mint)", "Apple macOS", "Google Android", "Apple iOS"],
    icon: "ShieldAlert",
  },
  {
    id: "aplikasi",
    title: "Application Software (Apps)",
    role: "Specific Task Solver for Users",
    desc: "End-user programs engineered to perform distinct productive, creative, educational, or entertainment tasks.",
    examples: ["Google Chrome (Browser)", "Microsoft Word (Docs)", "Canva / Photoshop (Design)", "Roblox / Scratch (Coding/Gaming)"],
    icon: "Grid",
  },
  {
    id: "utilitas",
    title: "Utility Software",
    role: "System Maintenance & Protection",
    desc: "Support software designed to analyze, configure, optimize, compress files, and secure computers from malicious threats.",
    examples: ["Antivirus (Windows Defender, Malwarebytes)", "WinRAR / 7-Zip (Compression)", "Disk Cleanup", "Backup & Recovery"],
    icon: "Wrench",
  },
];

export const BRAINWARE_DATA_ID = [
  {
    role: "Operator / End User",
    desc: "Pengguna biasa yang memakai komputer untuk mengetik, belajar, bermain, atau browsing internet sehari-hari (seperti kamu!).",
    icon: "User",
  },
  {
    role: "Programmer / Developer",
    desc: "Pakar pembuat kode yang menulis dan mengembangkan perangkat lunak/aplikasi baru menggunakan bahasa pemrograman.",
    icon: "Code2",
  },
  {
    role: "System Administrator",
    desc: "Penjaga sistem yang bertugas merawat, mengamankan jaringan, dan mengelola server agar tidak down dan bebas malware.",
    icon: "ServerCog",
  },
  {
    role: "Database Analyst / Designer",
    desc: "Ahli yang merancang struktur penyimpanan data dan mengolah informasi digital dalam jumlah besar.",
    icon: "Database",
  },
];

export const BRAINWARE_DATA_EN = [
  {
    role: "Operator / End User",
    desc: "People who operate computers to learn, write reports, create artwork, or play video games (just like you!).",
    icon: "User",
  },
  {
    role: "Programmer / Software Engineer",
    desc: "Developers who write programming code (Python, C++, JavaScript) to build apps, operating systems, and video games.",
    icon: "Code2",
  },
  {
    role: "System Administrator (SysAdmin)",
    desc: "Network guardians responsible for managing computer infrastructure, school servers, firewalls, and data backups.",
    icon: "ServerCog",
  },
  {
    role: "Database Analyst / Architect",
    desc: "Specialists who design structured data tables, query databases, and ensure big data storage is lightning-fast and secure.",
    icon: "Database",
  },
];

export const IPO_CYCLE_EXPLANATION_ID = {
  title: "Siklus IPO (Input - Process - Output)",
  sub: "Prinsip Utama Bagaimana Setiap Komputer di Dunia Bekerja!",
  stages: [
    {
      step: 1,
      key: "Input",
      title: "Input (Masukan)",
      action: "Data mentah dimasukkan oleh pengguna menggunakan perangkat input.",
      example: "Jari menekan tombol huruf 'A' di keyboard atau kamera menangkap wajahmu.",
    },
    {
      step: 2,
      key: "Process",
      title: "Process (Pemrosesan)",
      action: "CPU dan RAM mengolah data, menerjemahkan kode biner, dan mengeksekusi instruksi matematika.",
      example: "CPU membaca sinyal tombol, mencocokkan kode biner, dan mengatur font di memori.",
    },
    {
      step: 3,
      key: "Storage",
      title: "Storage (Penyimpanan)",
      action: "Data disimpan sementara di RAM dan jika pengguna menekan Simpan (Save), disalin permanen ke SSD.",
      example: "Dokumenmu tersimpan di SSD komputer atau cloud Google Drive agar tidak hilang.",
    },
    {
      step: 4,
      key: "Output",
      title: "Output (Keluaran)",
      action: "Hasil olahan komputer disajikan kembali ke pengguna dalam bentuk informasi yang dapat dipahami.",
      example: "Huruf 'A' seketika muncul di layar monitor dalam sekejap mata!",
    },
  ],
};

export const IPO_CYCLE_EXPLANATION_EN = {
  title: "The IPO Cycle (Input - Process - Output)",
  sub: "The Universal Operating Principle Behind Every Computer on Earth!",
  stages: [
    {
      step: 1,
      key: "Input",
      title: "Input Stage",
      action: "Raw data and keystrokes are captured from external stimuli through input devices.",
      example: "Fingers tap the key 'A' on the keyboard or webcam captures your smiling face.",
    },
    {
      step: 2,
      key: "Process",
      title: "Process Stage",
      action: "CPU and memory compute binary instructions, run mathematical logic, and transform data.",
      example: "CPU converts keystroke electrical pulse into ASCII binary code (01000001).",
    },
    {
      step: 3,
      key: "Storage",
      title: "Storage Stage",
      action: "Information is temporarily buffered in RAM or saved permanently to NVMe SSD drive.",
      example: "Document saved securely to your SSD or Cloud drive so it won't be lost on reboot.",
    },
    {
      step: 4,
      key: "Output",
      title: "Output Stage",
      action: "Computed information is rendered into human-friendly sights, sounds, or printed pages.",
      example: "The letter 'A' instantaneously lights up on your vibrant monitor screen!",
    },
  ],
};

export const FUN_GLOSSARY_ID = [
  { term: "Biner (0 dan 1)", meaning: "Bahasa rahasia komputer yang hanya terdiri dari angka 0 (mati) dan 1 (hidup)." },
  { term: "CPU (ALU & CU)", meaning: "ALU bertugas berhitung matematika, CU bertugas mengomandoi lalu lintas instruksi." },
  { term: "Volatile", meaning: "Sifat RAM: Data akan terhapus seketika begitu aliran listrik komputer dimatikan." },
  { term: "Non-Volatile", meaning: "Sifat SSD/HDD: Data tetap tersimpan aman selamanya walau komputer mati berbulan-bulan." },
  { term: "Periferal (Peripheral)", meaning: "Perangkat tambahan di luar unit CPU (seperti printer, mouse, webcam, scanner)." },
  { term: "GUI (Graphical User Interface)", meaning: "Tampilan visual bergambar/ikon yang memudahkan kita mengklik tanpa ketik teks rumit." },
];

export const FUN_GLOSSARY_EN = [
  { term: "Binary Code (0s & 1s)", meaning: "The fundamental language of computers representing electric switch states: 0 (Off) and 1 (On)." },
  { term: "CPU (ALU & CU)", meaning: "Arithmetic Logic Unit (ALU) does math calculations; Control Unit (CU) directs instruction flow." },
  { term: "Volatile Memory", meaning: "Characteristic of RAM: stored data vanishes instantaneously the second electrical power turns off." },
  { term: "Non-Volatile Storage", meaning: "Characteristic of SSD/HDD: data remains permanently safe even after months without power." },
  { term: "Peripheral Devices", meaning: "Auxiliary hardware connected externally to the computer (printers, mice, webcams, barcode scanners)." },
  { term: "GUI (Graphical User Interface)", meaning: "Visual user interface with icons, windows, and buttons rather than complex command-line text." },
];

// Localized helper getters
export const getCurriculumData = (lang: Language) => (lang === 'en' ? CURRICULUM_DATA_EN : CURRICULUM_DATA_ID);
export const getHardwareCategories = (lang: Language) => (lang === 'en' ? HARDWARE_CATEGORIES_EN : HARDWARE_CATEGORIES_ID);
export const getSoftwareCategories = (lang: Language) => (lang === 'en' ? SOFTWARE_CATEGORIES_EN : SOFTWARE_CATEGORIES_ID);
export const getBrainwareData = (lang: Language) => (lang === 'en' ? BRAINWARE_DATA_EN : BRAINWARE_DATA_ID);
export const getIpoExplanation = (lang: Language) => (lang === 'en' ? IPO_CYCLE_EXPLANATION_EN : IPO_CYCLE_EXPLANATION_ID);
export const getFunGlossary = (lang: Language) => (lang === 'en' ? FUN_GLOSSARY_EN : FUN_GLOSSARY_ID);
