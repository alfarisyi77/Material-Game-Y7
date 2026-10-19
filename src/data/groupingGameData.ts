import { GroupingItem, Language } from '../types';

export const GROUPING_ITEMS_EN: GroupingItem[] = [
  // Hardware - Input
  {
    id: "hw-keyboard",
    name: "Mechanical Keyboard",
    iconName: "Keyboard",
    description: "Physical typing board with tactile switches to input alphanumeric text and shortcut keys.",
    categoryL1: "hardware",
    subCategoryHW: "input",
    funFact: "The QWERTY key arrangement was designed in the typewriter era to prevent mechanical arms from jamming!",
    analogi: "Like our hands and fingers typing a written message."
  },
  {
    id: "hw-mouse",
    name: "Optical Gaming Mouse",
    iconName: "Mouse",
    description: "High-precision pointing device using infrared LED sensors to navigate the on-screen cursor.",
    categoryL1: "hardware",
    subCategoryHW: "input",
    funFact: "The very first computer mouse in 1964 was carved out of a wooden block by inventor Douglas Engelbart!",
    analogi: "Like our index finger pointing at objects in front of us."
  },
  {
    id: "hw-webcam",
    name: "Full HD Webcam",
    iconName: "Camera",
    description: "Digital video camera streaming real-time visuals for virtual classrooms and video meetings.",
    categoryL1: "hardware",
    subCategoryHW: "input",
    funFact: "The world's first webcam at Cambridge University was set up just to check if the staff coffee pot was empty!",
    analogi: "Like human eyes watching and taking in surroundings."
  },
  {
    id: "hw-scanner",
    name: "Barcode Scanner",
    iconName: "ScanLine",
    description: "Optical reader that shoots a red laser to decode barcode lines on grocery packages.",
    categoryL1: "hardware",
    subCategoryHW: "input",
    funFact: "The very first item ever scanned by a grocery barcode was a pack of Wrigley's chewing gum in 1974!",
    analogi: "Instantly reading a secret encoded price tag."
  },
  {
    id: "hw-mic",
    name: "Condenser Microphone",
    iconName: "Mic",
    description: "Transducer capturing physical sound vibrations and converting them into digital audio streams.",
    categoryL1: "hardware",
    subCategoryHW: "input",
    funFact: "Microphone diaphragms vibrate to acoustic waves just like the human ear eardrum!",
    analogi: "Like human ears listening to sound waves."
  },

  // Hardware - Process
  {
    id: "hw-cpu",
    name: "CPU Processor (Intel Core i7)",
    iconName: "Cpu",
    description: "Central microchip executing logic, binary math operations, and instruction scheduling.",
    categoryL1: "hardware",
    subCategoryHW: "process",
    funFact: "Modern processors pack over 10 billion microscopic transistors, each smaller than a human virus!",
    analogi: "The master brain doing rapid calculations and making decisions."
  },
  {
    id: "hw-motherboard",
    name: "Main Motherboard PCB",
    iconName: "CircuitBoard",
    description: "Main circuit board linking the CPU, RAM, graphics card, and storage drives together.",
    categoryL1: "hardware",
    subCategoryHW: "process",
    funFact: "Called a 'Motherboard' because it acts as the primary parent board feeding all peripheral daughter cards.",
    analogi: "The skeletal spine and nervous highway connecting every organ."
  },
  {
    id: "hw-gpu",
    name: "GPU (Graphics Card)",
    iconName: "Tv",
    description: "Dedicated coprocessor designed to crunch millions of visual pixels, 3D gaming, and video frames.",
    categoryL1: "hardware",
    subCategoryHW: "process",
    funFact: "Modern GPUs feature thousands of miniature parallel computing cores running simultaneously!",
    analogi: "A lightning-fast painter drawing 60 to 144 fresh pictures every single second."
  },

  // Hardware - Storage
  {
    id: "hw-ram",
    name: "DDR5 High-Speed RAM",
    iconName: "Layers",
    description: "Volatile primary memory providing ultra-fast working workspace for actively open programs.",
    categoryL1: "hardware",
    subCategoryHW: "storage",
    funFact: "RAM is Volatile: the exact moment power cuts off, all active data inside it evaporates immediately!",
    analogi: "A student desk: the wider your desk, the more open notebooks you can spread out at once."
  },
  {
    id: "hw-ssd",
    name: "NVMe M.2 1TB SSD",
    iconName: "HardDrive",
    description: "Ultra-fast non-volatile solid-state storage utilizing silicon flash memory chips without moving parts.",
    categoryL1: "hardware",
    subCategoryHW: "storage",
    funFact: "Modern NVMe SSDs read data up to 30 times faster than mechanical spinning hard disks!",
    analogi: "A fireproof steel library cabinet where files stay safely stored forever."
  },
  {
    id: "hw-flashdisk",
    name: "USB Flash Thumb Drive",
    iconName: "Usb",
    description: "Pocket-sized portable flash storage used to transfer homework, slide presentations, and projects.",
    categoryL1: "hardware",
    subCategoryHW: "storage",
    funFact: "Invented by Malaysian engineer Pua Khein-Seng and launched to the world in the early 2000s!",
    analogi: "A mini briefcase to carry school assignments between computers."
  },

  // Hardware - Output
  {
    id: "hw-monitor",
    name: "144Hz Gaming Monitor",
    iconName: "Monitor",
    description: "Visual display panel rendering colorful graphic user interfaces, videos, and game animations.",
    categoryL1: "hardware",
    subCategoryHW: "output",
    funFact: "A 4K monitor screen is composed of over 8 million tiny colored glowing dots called subpixels (Red, Green, Blue)!",
    analogi: "A cinema movie screen displaying the finished animated story."
  },
  {
    id: "hw-printer",
    name: "Color Inkjet Printer",
    iconName: "Printer",
    description: "Produces hard copy documents by spraying micro-droplets of ink onto paper sheets.",
    categoryL1: "hardware",
    subCategoryHW: "output",
    funFact: "Inkjet nozzles spray dots smaller than a human hair at speeds exceeding 50 kilometers per hour!",
    analogi: "A robotic artist writing your homework report onto paper."
  },
  {
    id: "hw-speaker",
    name: "Stereo Speakers",
    iconName: "Volume2",
    description: "Converts digital audio frequencies into physical sound waves you can hear and feel.",
    categoryL1: "hardware",
    subCategoryHW: "output",
    funFact: "Speakers vibrate air using permanent magnets and an electromagnetic voice coil!",
    analogi: "A singing voice projecting musical sounds across the room."
  },
  {
    id: "hw-proyektor",
    name: "Classroom LCD Projector",
    iconName: "Presentation",
    description: "Beams computer display output onto large classroom screens for group presentations.",
    categoryL1: "hardware",
    subCategoryHW: "output",
    funFact: "Modern laser projectors can blast sharp visuals over 120 inches wide with zero light bulbs!",
    analogi: "A powerful theatrical spotlight casting giant pictures on the wall."
  },

  // Software - OS
  {
    id: "sw-windows",
    name: "Microsoft Windows 11",
    iconName: "LayoutGrid",
    description: "The world's leading desktop operating system managing system resources and file management.",
    categoryL1: "software",
    subCategorySW: "os",
    funFact: "The first Windows version debuted in 1985 as a graphical interface running atop MS-DOS!",
    analogi: "The school building principal coordinating rooms, bells, and hallway security."
  },
  {
    id: "sw-linux",
    name: "Ubuntu Linux OS",
    iconName: "Terminal",
    description: "Free and open-source operating system famous for rock-solid stability, security, and developer freedom.",
    categoryL1: "software",
    subCategorySW: "os",
    funFact: "Over 90% of cloud servers, supercomputers, and NASA space rovers run on Linux!",
    analogi: "A community-built public library where anyone can inspect the blueprint."
  },
  {
    id: "sw-android",
    name: "Android 15 Mobile OS",
    iconName: "Smartphone",
    description: "Leading mobile operating system powering billions of smartphones, tablets, and smart devices.",
    categoryL1: "software",
    subCategorySW: "os",
    funFact: "Earlier Android versions were famously named alphabetically after delicious desserts: KitKat, Oreo, Pie!",
    analogi: "The smart conductor orchestrating all the sensors and apps on your smartphone."
  },

  // Software - Apps
  {
    id: "sw-chrome",
    name: "Google Chrome Browser",
    iconName: "Globe",
    description: "Web application used to browse the internet, search knowledge, and stream educational videos.",
    categoryL1: "software",
    subCategorySW: "aplikasi",
    funFact: "Chrome includes an offline 8-bit T-Rex jumping game whenever internet disconnects!",
    analogi: "A supersonic jetliner flying you across the worldwide web."
  },
  {
    id: "sw-word",
    name: "Microsoft Word",
    iconName: "FileText",
    description: "Word processor program designed for writing essays, reports, formatting tables, and formatting text.",
    categoryL1: "software",
    subCategorySW: "aplikasi",
    funFact: "Microsoft Word was originally created back in 1983 under the name Multi-Tool Word!",
    analogi: "An infinite digital notebook with automatic spellcheck and neat formatting tools."
  },
  {
    id: "sw-canva",
    name: "Canva Graphic Designer",
    iconName: "Palette",
    description: "Creative design software used to build aesthetic posters, infographics, and presentations.",
    categoryL1: "software",
    subCategorySW: "aplikasi",
    funFact: "Designers create over 50 million graphics every single day using web creative platforms!",
    analogi: "A magical art studio with endless palettes, stickers, and canvas templates."
  },
  {
    id: "sw-scratch",
    name: "Scratch 3.0",
    iconName: "Code",
    description: "Visual block-based programming environment developed by MIT Media Lab for young coders.",
    categoryL1: "software",
    subCategorySW: "aplikasi",
    funFact: "Over 100 million student games and animations have been created worldwide with Scratch!",
    analogi: "Digital LEGO blocks you can snap together to bring cartoon stories to life."
  },

  // Software - Utilities
  {
    id: "sw-antivirus",
    name: "Antivirus (Windows Defender)",
    iconName: "ShieldCheck",
    description: "Protective utility that scans, detects, and quarantines malicious malware, viruses, and trojans.",
    categoryL1: "software",
    subCategorySW: "utilitas",
    funFact: "Cybersecurity labs detect over 450,000 new malicious malware variants every single day!",
    analogi: "A round-the-clock bodyguard and digital doctor protecting your PC's health."
  },
  {
    id: "sw-winrar",
    name: "WinRAR / 7-Zip",
    iconName: "Archive",
    description: "File compression utility that bundles and compresses large folder contents into tiny .zip archives.",
    categoryL1: "software",
    subCategorySW: "utilitas",
    funFact: "Compression removes duplicate patterns from files, shrinking sizes by up to 80%!",
    analogi: "A space-saving vacuum bag that compresses fluffy blankets inside luggage."
  },
  {
    id: "sw-diskcleanup",
    name: "Disk Cleanup / CCleaner",
    iconName: "Trash2",
    description: "System maintenance utility that sweeps away temporary junk cache to reclaim SSD storage space.",
    categoryL1: "software",
    subCategorySW: "utilitas",
    funFact: "Temporary browser cache files can quietly swallow several gigabytes of storage over time!",
    analogi: "A broom and recycling bin sweeping up crumbs to keep your room tidy."
  },

  // Brainware
  {
    id: "bw-programmer",
    name: "Programmer / Software Developer",
    iconName: "Code2",
    description: "Human engineer who writes programmatic algorithms and builds video games and software.",
    categoryL1: "brainware",
    funFact: "The world's very first computer programmer was a visionary mathematician named Ada Lovelace in 1843!",
    analogi: "The creative architect who invents the digital blueprints for buildings."
  },
  {
    id: "bw-operator",
    name: "Student End-User (You!)",
    iconName: "UserCheck",
    description: "Person who operates the computer to study, write essays, browse information, and play games.",
    categoryL1: "brainware",
    funFact: "You playing this educational game right now are a vital member of the Brainware team!",
    analogi: "The driver holding the steering wheel and pressing the accelerator pedal."
  },
  {
    id: "bw-admin",
    name: "School Network Administrator",
    iconName: "ServerCog",
    description: "Technical specialist managing school Wi-Fi networks, server backups, and cybersecurity protocols.",
    categoryL1: "brainware",
    funFact: "Network admins ensure that school internet connections stay lightning fast and secure from intrusions!",
    analogi: "The air traffic controller ensuring every flight lands safely and smoothly."
  },
];

export const GROUPING_ITEMS_ID: GroupingItem[] = [
  // Hardware - Input
  {
    id: "hw-keyboard",
    name: "Keyboard Mekanikal",
    iconName: "Keyboard",
    description: "Papan ketik dengan switch fisik untuk mengetik teks dan perintah pintasan.",
    categoryL1: "hardware",
    subCategoryHW: "input",
    funFact: "Susunan huruf QWERTY dirancang sejak era mesin tik agar tuas ketik tidak gampang macet!",
    analogi: "Seperti jari tangan kita saat mengetikkan surat."
  },
  {
    id: "hw-mouse",
    name: "Mouse Optik Gaming",
    iconName: "Mouse",
    description: "Alat penunjuk berakurasi tinggi dengan sensor cahaya infra-merah.",
    categoryL1: "hardware",
    subCategoryHW: "input",
    funFact: "Mouse komputer pertama di dunia tahun 1964 dibuat dari balok kayu oleh Douglas Engelbart!",
    analogi: "Seperti jari telunjuk yang menunjuk ke benda di depan kita."
  },
  {
    id: "hw-webcam",
    name: "Webcam Full HD",
    iconName: "Camera",
    description: "Kamera penangkap video langsung untuk video call dan streaming online.",
    categoryL1: "hardware",
    subCategoryHW: "input",
    funFact: "Webcam pertama di dunia dibuat di Universitas Cambridge cuma untuk memantau teko kopi!",
    analogi: "Seperti mata kita yang melihat lingkungan sekitar."
  },
  {
    id: "hw-scanner",
    name: "Barcode Scanner Kasir",
    iconName: "ScanLine",
    description: "Pemindai garis kode harga barang belanjaan di meja kasir minimarket.",
    categoryL1: "hardware",
    subCategoryHW: "input",
    funFact: "Barang belanjaan pertama yang pernah dipindai barcode adalah sebungkus permen karet!",
    analogi: "Membaca teks rahasia dalam sekejap mata."
  },
  {
    id: "hw-mic",
    name: "Mikrofon Kondensor",
    iconName: "Mic",
    description: "Mengubah gelombang getaran suara mulut menjadi sinyal audio digital.",
    categoryL1: "hardware",
    subCategoryHW: "input",
    funFact: "Mikrofon bekerja dengan diafragma tipis mirip gendang telinga manusia!",
    analogi: "Seperti telinga yang mendengarkan suara."
  },

  // Hardware - Process
  {
    id: "hw-cpu",
    name: "Prosesor (CPU Core i7)",
    iconName: "Cpu",
    description: "Chip silikon utama penghitung instruksi, logika, dan aritmetika komputer.",
    categoryL1: "hardware",
    subCategoryHW: "process",
    funFact: "CPU modern memiliki miliaran transistor mikroskopis yang ukurannya lebih kecil dari virus!",
    analogi: "Otak utama yang selalu berpikir dan mengambil keputusan."
  },
  {
    id: "hw-motherboard",
    name: "Motherboard Gaming",
    iconName: "CircuitBoard",
    description: "Papan induk yang menghubungkan CPU, RAM, GPU, dan SSD agar saling terhubung.",
    categoryL1: "hardware",
    subCategoryHW: "process",
    funFact: "Motherboard disebut 'ibu' karena menjadi tempat bersarangnya seluruh anak komponen komputer.",
    analogi: "Sistem saraf tulang belakang tubuh manusia."
  },
  {
    id: "hw-gpu",
    name: "GPU (NVIDIA RTX)",
    iconName: "Tv",
    description: "Kartu grafis khusus pemroses jutaan pixel visual 3D, animasi, dan game realtime.",
    categoryL1: "hardware",
    subCategoryHW: "process",
    funFact: "GPU memiliki ribuan core kecil yang bekerja bersamaan secara paralel!",
    analogi: "Pelukis super cepat yang menggambar 60 bingkai gambar per detik."
  },

  // Hardware - Storage
  {
    id: "hw-ram",
    name: "RAM DDR5 16GB",
    iconName: "Layers",
    description: "Memori berkecepatan tinggi tempat CPU meletakkan aplikasi yang sedang aktif berjalan.",
    categoryL1: "hardware",
    subCategoryHW: "storage",
    funFact: "RAM bersifat Volatile: saat mati listrik, seluruh data di dalamnya lenyap seketika!",
    analogi: "Meja kerja: luas mejanya menentukan berapa banyak buku yang bisa dibuka bersamaan."
  },
  {
    id: "hw-ssd",
    name: "SSD NVMe M.2 1TB",
    iconName: "HardDrive",
    description: "Penyimpanan data permanen super kencang berbasis chip flash tanpa piringan berputar.",
    categoryL1: "hardware",
    subCategoryHW: "storage",
    funFact: "SSD bisa membaca data 10x hingga 30x lebih kencang dibanding Hard Disk jadul piringan!",
    analogi: "Lemari arsip modern yang bisa diambil bukunya dalam sekejap."
  },
  {
    id: "hw-flashdisk",
    name: "Flashdisk USB 64GB",
    iconName: "Usb",
    description: "Media penyimpanan portabel saku untuk memindahkan tugas sekolah antar komputer.",
    categoryL1: "hardware",
    subCategoryHW: "storage",
    funFact: "Ditemukan oleh insinyur keturunan Malaysia-Taiwan bernama Pua Khein-Seng!",
    analogi: "Tas jinjing kecil untuk membawa berkas tugas."
  },

  // Hardware - Output
  {
    id: "hw-monitor",
    name: "Monitor IPS 144Hz",
    iconName: "Monitor",
    description: "Layar panel untuk menampilkan teks dokumen, game, dan video visual penuh warna.",
    categoryL1: "hardware",
    subCategoryHW: "output",
    funFact: "Layar monitor tersusun dari jutaan titik kecil yang disebut Pixel (Red, Green, Blue)!",
    analogi: "Papan pengumuman bioskop yang menampilkan gambar."
  },
  {
    id: "hw-printer",
    name: "Printer Warna Inkjet",
    iconName: "Printer",
    description: "Mencetak tulisan tugas makalah dan foto dari komputer ke lembaran kertas nyata.",
    categoryL1: "hardware",
    subCategoryHW: "output",
    funFact: "Printer menyemprotkan titik tinta mikroskopis yang lebih tipis dari sehelai rambut manusia!",
    analogi: "Tangan terampil yang menuliskan hasil karangan ke kertas."
  },
  {
    id: "hw-speaker",
    name: "Speaker Stereo Bass",
    iconName: "Volume2",
    description: "Mengeluarkan suara musik, efek ledakan game, dan suara guru saat video materi.",
    categoryL1: "hardware",
    subCategoryHW: "output",
    funFact: "Speaker bekerja dengan menggetarkan membran udara menggunakan magnet elektromagnetik!",
    analogi: "Mulut yang menyanyikan lagu riang."
  },
  {
    id: "hw-proyektor",
    name: "Proyektor Kelas",
    iconName: "Presentation",
    description: "Menyorotkan tampilan layar komputer ke layar putih besar di depan kelas SMP.",
    categoryL1: "hardware",
    subCategoryHW: "output",
    funFact: "Bisa menghasilkan tampilan hingga ukuran 100 inci lebih!",
    analogi: "Lampu senter ajaib yang memproyeksikan bayangan raksasa."
  },

  // Software - OS
  {
    id: "sw-windows",
    name: "Microsoft Windows 11",
    iconName: "LayoutGrid",
    description: "Sistem operasi komputer paling populer di dunia untuk laptop dan PC desktop.",
    categoryL1: "software",
    subCategorySW: "os",
    funFact: "Versi pertama Windows dirilis tahun 1985 dan awalnya hanya antarmuka grafis di atas MS-DOS!",
    analogi: "Manajer gedung kantor yang mengatur keamanan dan membukakan pintu."
  },
  {
    id: "sw-linux",
    name: "Linux Ubuntu",
    iconName: "Terminal",
    description: "Sistem operasi open-source gratis berlogo penguin yang sangat aman dan stabil.",
    categoryL1: "software",
    subCategorySW: "os",
    funFact: "Mayoritas server internet dunia, NASA, hingga HP Android sebenarnya berbasis kernel Linux!",
    analogi: "Gotong royong sukarelawan sedunia membangun jembatan gratis."
  },
  {
    id: "sw-android",
    name: "Android 15 Mobile",
    iconName: "Smartphone",
    description: "Sistem operasi populer untuk smartphone, tablet, dan Smart TV pintar.",
    categoryL1: "software",
    subCategorySW: "os",
    funFact: "Dahulu setiap versi Android dinamai nama kue manis: KitKat, Lollipop, Oreo, Pie!",
    analogi: "Otak pengendali HP pintar yang ada di kantongmu."
  },

  // Software - Aplikasi
  {
    id: "sw-chrome",
    name: "Google Chrome",
    iconName: "Globe",
    description: "Peramban (browser) untuk menjelajahi internet, mencari tugas, dan menonton video.",
    categoryL1: "software",
    subCategorySW: "aplikasi",
    funFact: "Chrome memiliki fitur game dinosaurus offline jika internetmu terputus!",
    analogi: "Pesawat terbang yang membawamu keliling dunia internet."
  },
  {
    id: "sw-word",
    name: "Microsoft Word",
    iconName: "FileText",
    description: "Aplikasi pengolah kata untuk membuat makalah, cerpen, tabel tugas, dan surat resmi.",
    categoryL1: "software",
    subCategorySW: "aplikasi",
    funFact: "Dirilis pertama kali pada tahun 1983 dengan nama Multi-Tool Word!",
    analogi: "Buku tulis dan mesin ketik modern dengan fitur pemeriksa ejaan."
  },
  {
    id: "sw-canva",
    name: "Canva / Photoshop",
    iconName: "Palette",
    description: "Aplikasi desain grafis untuk mengedit foto poster, spanduk, dan presentasi estetik.",
    categoryL1: "software",
    subCategorySW: "aplikasi",
    funFact: "Desain digital kini didukung jutaan template yang memudahkan pemula berkreasi!",
    analogi: "Kanvas lukis ajaib lengkap dengan palet warna dan kuas tak terbatas."
  },
  {
    id: "sw-scratch",
    name: "Scratch 3.0",
    iconName: "Code",
    description: "Aplikasi belajar coding blok visual kreatif khusus remaja karya MIT Media Lab.",
    categoryL1: "software",
    subCategorySW: "aplikasi",
    funFact: "Karakter kucing oranye Scratch bernama 'Scratch Cat'!",
    analogi: "Balok LEGO digital yang bisa disusun menjadi animasi hidup."
  },

  // Software - Utilitas
  {
    id: "sw-antivirus",
    name: "Antivirus (Windows Defender)",
    iconName: "ShieldCheck",
    description: "Program pelindung yang mendeteksi dan membasmi virus, trojan, dan malware berbahaya.",
    categoryL1: "software",
    subCategorySW: "utilitas",
    funFact: "Setiap hari ada lebih dari 450.000 program malware jahat baru diciptakan oleh hacker!",
    analogi: "Satpam dan dokter imunisasi yang menjaga keamanan komputer."
  },
  {
    id: "sw-winrar",
    name: "WinRAR / 7-Zip",
    iconName: "Archive",
    description: "Program utilitas untuk memadatkan (mengompresi) ukuran file agar lebih hemat kuota.",
    categoryL1: "software",
    subCategorySW: "utilitas",
    funFact: "Bisa membungkus puluhan file dokumen menjadi 1 file arsip berakhiran .zip!",
    analogi: "Kantong vakum pakaian yang mengempiskan selimut tebal saat disimpan di koper."
  },
  {
    id: "sw-diskcleanup",
    name: "Disk Cleanup / CCleaner",
    iconName: "Trash2",
    description: "Membersihkan file sampah sementara (cache/junk) agar ruang SSD kembali lega.",
    categoryL1: "software",
    subCategorySW: "utilitas",
    funFact: "File sampah sementara bisa menumpuk bergiga-giga jika tidak pernah dibersihkan!",
    analogi: "Tukang sapu dan tempat sampah yang membersihkan remah-remah kotoran."
  },

  // Brainware
  {
    id: "bw-programmer",
    name: "Programmer / Developer",
    iconName: "Code2",
    description: "Manusia yang menulis kode logika dan menciptakan game serta software komputer.",
    categoryL1: "brainware",
    funFact: "Programmer pertama di dunia adalah seorang wanita bangsawan bernama Ada Lovelace!",
    analogi: "Arsitek dan insinyur yang merancang dan membangun istana digital."
  },
  {
    id: "bw-operator",
    name: "Siswa Pengguna (End User)",
    iconName: "UserCheck",
    description: "Pengguna yang mengoperasikan komputer untuk belajar, mengetik, dan bermain.",
    categoryL1: "brainware",
    funFact: "Kamu yang sedang memainkan game ini adalah bagian penting dari Brainware!",
    analogi: "Pengemudi mobil yang menginjak pedal gas dan memutar setir kemudi."
  },
  {
    id: "bw-admin",
    name: "Network Administrator",
    iconName: "ServerCog",
    description: "Pakar yang bertugas mengelola jaringan internet sekolah dan keamanan server lab.",
    categoryL1: "brainware",
    funFact: "Admin jaringan memastikan internet sekolah tetap ngebut dan tidak diretas orang lain!",
    analogi: "Komandan polisi lalu lintas di jalan raya digital."
  },
];

export const getGroupingItems = (lang: Language): GroupingItem[] =>
  lang === 'en' ? GROUPING_ITEMS_EN : GROUPING_ITEMS_ID;
