import { IpoScenario, Language } from '../types';

export const IPO_SCENARIOS_EN: IpoScenario[] = [
  {
    id: "kasir-supermarket",
    title: "Mission 1: Smart Supermarket Checkout Counter",
    categoryBadge: "Everyday Technology Case",
    story: "You are purchasing chocolate and cold milk at a grocery store checkout. The cashier begins processing your items. How does data travel from the barcode to the printed receipt?",
    realWorldContext: "Every checkout transaction worldwide executes a complete IPO cycle within mere milliseconds!",
    explanation: "The barcode scanner optically captures the product barcode (Input) -> The Point-of-Sale CPU matches the barcode ID in the price database & computes total tax (Process) -> The transaction record is appended to the store inventory database (Storage) -> The POS monitor shows the total amount due and the thermal printer prints a paper receipt (Output).",
    cards: [
      {
        id: "c-kasir-input",
        name: "Optical Barcode Scanner",
        iconName: "ScanLine",
        description: "Shoots an infrared red laser beam to read the optical alternating stripes on the biscuit package.",
        stage: "input"
      },
      {
        id: "c-kasir-process",
        name: "POS Computer CPU & Software",
        iconName: "Cpu",
        description: "Looks up product price in inventory tables, applies discounts, calculates sales tax, and totals items.",
        stage: "process"
      },
      {
        id: "c-kasir-storage",
        name: "Store Database Server",
        iconName: "Database",
        description: "Records the transaction log, deducts stock quantities, and saves transaction invoice history.",
        stage: "storage"
      },
      {
        id: "c-kasir-output",
        name: "Thermal Receipt Printer & Monitor",
        iconName: "Printer",
        description: "Prints out physical itemized receipt slip on paper and displays change due on the cashier screen.",
        stage: "output"
      }
    ],
    correctOrder: ["c-kasir-input", "c-kasir-process", "c-kasir-storage", "c-kasir-output"]
  },
  {
    id: "tugas-sekolah",
    title: "Mission 2: Typing & Printing School Science Report",
    categoryBadge: "Student Academic Task",
    story: "Your teacher assigned a summary essay on Computer Systems. You open your laptop at home to type the report and print it onto paper.",
    realWorldContext: "Typing essays in Word or Google Docs is the classic IPO cycle you utilize each week!",
    explanation: "Fingers press mechanical keyboard keys (Input) -> The CPU & RAM convert electrical key events into binary ASCII characters and paginate margins (Process) -> Pressing Ctrl+S permanently commits the document onto the NVMe SSD (Storage) -> Formatted text displays on the monitor and is fed to the inkjet printer (Output).",
    cards: [
      {
        id: "c-tugas-input",
        name: "Keyboard & Trackpad",
        iconName: "Keyboard",
        description: "Fingers physically tap letters and punctuation keys to compose the Informatics assignment.",
        stage: "input"
      },
      {
        id: "c-tugas-process",
        name: "Laptop CPU & DDR RAM",
        iconName: "Cpu",
        description: "Translates keystroke electrical pulses into binary text tokens, performs grammar checks, and formats layouts.",
        stage: "process"
      },
      {
        id: "c-tugas-storage",
        name: "Internal NVMe SSD Drive",
        iconName: "HardDrive",
        description: "Permanently writes the 'Computer_Systems_Report.docx' binary payload to flash blocks.",
        stage: "storage"
      },
      {
        id: "c-tugas-output",
        name: "HD Monitor & Color Printer",
        iconName: "Monitor",
        description: "Displays crystal-clear typography on the screen and prints the finished assignment onto physical paper.",
        stage: "output"
      }
    ],
    correctOrder: ["c-tugas-input", "c-tugas-process", "c-tugas-storage", "c-tugas-output"]
  },
  {
    id: "selfie-filter",
    title: "Mission 3: Snapping a Cute Cat Filter Selfie",
    categoryBadge: "Social Media & Smart Cameras",
    story: "You and your classmate strike a funny pose while opening a camera app with live augmented reality 3D kitten ears.",
    realWorldContext: "Smartphone cameras leverage dedicated neural processing units (NPU) and GPUs in real-time!",
    explanation: "Front camera image sensor collects incoming light photons (Input) -> Mobile GPU & AI chip run facial landmarks detection and map 3D animated cat ears onto your head (Process) -> The high-resolution photo file saves to local phone flash memory (Storage) -> The vivid OLED display shows your funny portrait ready to share (Output).",
    cards: [
      {
        id: "c-selfie-input",
        name: "Front Camera CMOS Sensor",
        iconName: "Camera",
        description: "Captures reflected light particles of faces and converts them into digital pixel matrices.",
        stage: "input"
      },
      {
        id: "c-selfie-process",
        name: "Mobile GPU & Neural AI Engine",
        iconName: "Sparkles",
        description: "Identifies facial coordinates in 30ms and overlays realistic 3D animated kitten ears on the video stream.",
        stage: "process"
      },
      {
        id: "c-selfie-storage",
        name: "Internal Phone Flash Storage",
        iconName: "Smartphone",
        description: "Encodes and saves the final picture as a compressed JPEG photo file inside the Camera Roll gallery.",
        stage: "storage"
      },
      {
        id: "c-selfie-output",
        name: "AMOLED Touchscreen Display",
        iconName: "Maximize2",
        description: "Instantly shines with vivid colors presenting the hilarious filtered selfie ready to send to friends.",
        stage: "output"
      }
    ],
    correctOrder: ["c-selfie-input", "c-selfie-process", "c-selfie-storage", "c-selfie-output"]
  },
  {
    id: "voice-note",
    title: "Mission 4: Recording a Voice Note Message",
    categoryBadge: "Digital Communication",
    story: "You want to record a voice message to your group study chat letting everyone know that the slide deck is finished.",
    realWorldContext: "Human speech is continuous analog sound; computers must digitize it into binary 0s and 1s!",
    explanation: "The microphone diaphragm captures air vibrations from your vocal cords (Input) -> The digital signal processor (DSP) samples analog audio into binary Opus/MP3 streams and suppresses background wind noise (Process) -> The audio clip saves to local cache and syncs to cloud servers (Storage) -> Your friend's phone speaker vibrates air to recreate your clear voice (Output).",
    cards: [
      {
        id: "c-vn-input",
        name: "Smartphone Microphone",
        iconName: "Mic",
        description: "Captures physical acoustic sound waves from vocal cords when holding down the record button.",
        stage: "input"
      },
      {
        id: "c-vn-process",
        name: "Audio DSP & Codec Processor",
        iconName: "Sliders",
        description: "Converts analog wave voltages into compressed digital binary audio packets while filtering ambient noise.",
        stage: "process"
      },
      {
        id: "c-vn-storage",
        name: "Local Cache & Cloud Chat Server",
        iconName: "Cloud",
        description: "Temporarily buffers the voice note on device flash memory and pushes the payload to chat servers.",
        stage: "storage"
      },
      {
        id: "c-vn-output",
        name: "Stereo Loudspeaker",
        iconName: "Volume2",
        description: "Drives electromagnetic coil to oscillate the cone membrane, reconstructing your clear audible voice.",
        stage: "output"
      }
    ],
    correctOrder: ["c-vn-input", "c-vn-process", "c-vn-storage", "c-vn-output"]
  },
  {
    id: "game-balap",
    title: "Mission 5: Playing a 3D Car Racing Game",
    categoryBadge: "Interactive Gaming Simulation",
    story: "During computer lab break, you test a racing simulator. The sports car must drift right around the sharp corner the split second you steer!",
    realWorldContext: "Video games execute this rapid IPO cycle 60 to 120 times every single second without stuttering!",
    explanation: "Gamer presses the right-arrow key or tilts gamepad joystick (Input) -> Game engine calculates vehicle friction, collision geometry, and GPU renders 3D track frames (Process) -> Best lap time and checkpoint progress save to the game save file (Storage) -> Monitor displays the drifting race car and speakers roar with turbo engine acoustics (Output).",
    cards: [
      {
        id: "c-game-input",
        name: "Gamepad Controller / WASD Keys",
        iconName: "Gamepad2",
        description: "Detects thumb pressure as the player steers hard right and floors the acceleration pedal.",
        stage: "input"
      },
      {
        id: "c-game-process",
        name: "Game Physics Engine & 3D GPU",
        iconName: "Cpu",
        description: "Calculates tire friction dynamics, calculates drift trajectory, and renders 60 smooth graphic frames per second.",
        stage: "process"
      },
      {
        id: "c-game-storage",
        name: "Local Game Save Profile",
        iconName: "Save",
        description: "Writes your new track record time (Personal Best) and unlocked car skins to the game profile file.",
        stage: "storage"
      },
      {
        id: "c-game-output",
        name: "144Hz Monitor & Surround Speakers",
        iconName: "Tv",
        description: "Displays the thrilling drifting animation on screen while speakers blast loud screeching tire sound effects!",
        stage: "output"
      }
    ],
    correctOrder: ["c-game-input", "c-game-process", "c-game-storage", "c-game-output"]
  }
];

export const IPO_SCENARIOS_ID: IpoScenario[] = [
  {
    id: "kasir-supermarket",
    title: "Misi 1: Mesin Kasir Minimarket Canggih",
    categoryBadge: "Kasus Kehidupan Sehari-hari",
    story: "Kamu sedang membeli camilan biskuit dan minuman susu di minimarket. Kasir mulai melayani transaksimu. Bagaimanakah data mengalir dari barang hingga struk keluar?",
    realWorldContext: "Setiap transaksi di kasir menggunakan siklus IPO lengkap dalam hitungan milidetik!",
    explanation: "Barcode scanner membaca kode garis produk (Input), CPU komputer kasir mencari harga di database & menghitung total (Proses), transaksi dicatat ke database toko (Storage), lalu layar kasir menampilkan nominal bayar dan printer mencetak struk belanja (Output).",
    cards: [
      {
        id: "c-kasir-input",
        name: "Barcode Scanner",
        iconName: "ScanLine",
        description: "Menembakkan sinar laser merah untuk memindai pola garis barcode produk biskuit.",
        stage: "input"
      },
      {
        id: "c-kasir-process",
        name: "CPU & Program Kasir (POS)",
        iconName: "Cpu",
        description: "Mencari kode barang di daftar harga, menghitung PPN, dan menjumlahkan total harga belanjaan.",
        stage: "process"
      },
      {
        id: "c-kasir-storage",
        name: "Database Server Penjualan",
        iconName: "Database",
        description: "Menyimpan catatan riwayat stok barang yang berkurang dan nomor nota transaksi penjualan.",
        stage: "storage"
      },
      {
        id: "c-kasir-output",
        name: "Printer Kasir & Layar Monitor",
        iconName: "Printer",
        description: "Mencetak selembar kertas struk belanjaan fisik dan menampilkan nominal kembalian di layar.",
        stage: "output"
      }
    ],
    correctOrder: ["c-kasir-input", "c-kasir-process", "c-kasir-storage", "c-kasir-output"]
  },
  {
    id: "tugas-sekolah",
    title: "Misi 2: Mengetik & Mencetak Tugas Rangkuman",
    categoryBadge: "Aktivitas Belajar Siswa",
    story: "Pak Guru memberi tugas merangkum bab Perangkat Keras. Kamu membuka laptop di rumah untuk mengetik dan mencetaknya ke kertas HVS.",
    realWorldContext: "Mengetik tugas di MS Word atau Google Docs adalah contoh klasik siklus IPO yang kamu gunakan tiap minggu!",
    explanation: "Tombol tuts ditekan jari (Input) -> CPU & RAM memproses kode tombol menjadi karakter huruf di memori (Proses) -> Kamu menekan Ctrl+S menyimpannya ke SSD (Storage) -> Huruf muncul di layar monitor dan dicetak printer kertas (Output).",
    cards: [
      {
        id: "c-tugas-input",
        name: "Papan Keyboard & Mouse",
        iconName: "Keyboard",
        description: "Jari menekan tuts huruf kata per kata untuk menulis rangkuman Informatika.",
        stage: "input"
      },
      {
        id: "c-tugas-process",
        name: "CPU & RAM Laptop",
        iconName: "Cpu",
        description: "Mengonversi sinyal tombol menjadi kode biner teks ASCII, memeriksa margin, dan tata letak paragraf.",
        stage: "process"
      },
      {
        id: "c-tugas-storage",
        name: "SSD Internal Laptop",
        iconName: "HardDrive",
        description: "Menyimpan file dokumen 'Tugas_Informatika_Kelas7.docx' secara permanen agar tidak hilang.",
        stage: "storage"
      },
      {
        id: "c-tugas-output",
        name: "Layar Monitor & Printer Kertas",
        iconName: "Monitor",
        description: "Menampilkan teks rapi di layar laptop dan printer mencetak hasil rangkuman ke kertas HVS.",
        stage: "output"
      }
    ],
    correctOrder: ["c-tugas-input", "c-tugas-process", "c-tugas-storage", "c-tugas-output"]
  },
  {
    id: "selfie-filter",
    title: "Misi 3: Jepret Foto Selfie Filter Kucing Lucu",
    categoryBadge: "Dunia Media Sosial & Kamera",
    story: "Kamu sedang berpose bersama teman dan membuka aplikasi kamera berfilter animasi telinga kucing bergerak lucu.",
    realWorldContext: "Kamera HP kamu menggunakan kecerdasan buatan dan pemrosesan grafis super kencang secara real-time!",
    explanation: "Sensor kamera menangkap cahaya wajahmu (Input) -> GPU/NPU HP mendeteksi mata & hidung lalu menempelkan 3D filter telinga kucing (Proses) -> Foto disimpan ke memori penyimpanan HP (Storage) -> Wajah lucu tampil di layar AMOLED siap diunggah (Output).",
    cards: [
      {
        id: "c-selfie-input",
        name: "Lensa Kamera Depan HP",
        iconName: "Camera",
        description: "Menangkap pantulan berkas cahaya wajah dan mengubahnya menjadi sinyal piksel digital.",
        stage: "input"
      },
      {
        id: "c-selfie-process",
        name: "Chip Grafis (GPU / NPU HP)",
        iconName: "Sparkles",
        description: "Mendeteksi kontur kepala secara instan dan merender animasi telinga kucing 3D agar pas di kepala.",
        stage: "process"
      },
      {
        id: "c-selfie-storage",
        name: "Memori Internal Smartphone",
        iconName: "Smartphone",
        description: "Menyimpan file foto berformat JPG resolusi tinggi ke dalam folder Galeri Foto HP.",
        stage: "storage"
      },
      {
        id: "c-selfie-output",
        name: "Layar Sentuh AMOLED",
        iconName: "Maximize2",
        description: "Menampilkan hasil foto selfie yang cerah, tajam, dan penuh warna dengan filter telinga kucing menggemaskan.",
        stage: "output"
      }
    ],
    correctOrder: ["c-selfie-input", "c-selfie-process", "c-selfie-storage", "c-selfie-output"]
  },
  {
    id: "voice-note",
    title: "Misi 4: Rekam Pesan Suara (Voice Note)",
    categoryBadge: "Komunikasi Digital",
    story: "Kamu ingin mengirimkan pesan suara ke grup tugas kelas untuk memberi tahu bahwa tugas kelompok sudah siap.",
    realWorldContext: "Suara manusia adalah gelombang analog, komputer harus mengubahnya menjadi deretan angka 0 dan 1!",
    explanation: "Mikrofon menangkap getaran suara pita suaramu (Input) -> Prosesor mengonversi sinyal analog ke digital dan mengompresi audio (Proses) -> Audio tersimpan sementara di file cache aplikasi (Storage) -> Speaker HP teman memutar suara jernihmu saat tombol play ditekan (Output).",
    cards: [
      {
        id: "c-vn-input",
        name: "Mikrofon (Mic) HP",
        iconName: "Mic",
        description: "Menangkap gelombang getaran udara dari pita suara pengguna saat menekan tombol rekam mikrofon.",
        stage: "input"
      },
      {
        id: "c-vn-process",
        name: "Prosesor Audio (ADC & DSP)",
        iconName: "Sliders",
        description: "Mengonversi gelombang suara analog menjadi format digital biner terkompresi (MP3/Opus) dan menyaring kebisingan angin.",
        stage: "process"
      },
      {
        id: "c-vn-storage",
        name: "Penyimpanan Memori & Cloud Chat",
        iconName: "Cloud",
        description: "Menyimpan berkas rekaman suara secara aman di server perpesanan dan memori ponsel.",
        stage: "storage"
      },
      {
        id: "c-vn-output",
        name: "Speaker Stereo Ponsel",
        iconName: "Volume2",
        description: "Menggetarkan membran speaker untuk mengubah data digital kembali menjadi gelombang suara yang terdengar di telinga.",
        stage: "output"
      }
    ],
    correctOrder: ["c-vn-input", "c-vn-process", "c-vn-storage", "c-vn-output"]
  },
  {
    id: "game-balap",
    title: "Misi 5: Bermain Game Balapan Mobil Seru",
    categoryBadge: "Gaming & Simulasi Interaktif",
    story: "Di waktu istirahat lab komputer, kamu mencoba simulator game balap mobil. Mobil harus berbelok tepat saat kamu menekan tombol setir!",
    realWorldContext: "Video game adalah bukti kehebatan siklus IPO yang berulang hingga 60-120 kali per detik tanpa jeda!",
    explanation: "Pemain menekan tombol tombol panah/gamepad (Input) -> CPU menghitung gravitasi & GPU menggambar grafis sirkuit 3D (Proses) -> Rekor catatan waktu tercepat disimpan di SSD (Storage) -> Mobil berbelok mulus di layar dan speaker mengeluarkan deru mesin mobil kencang (Output).",
    cards: [
      {
        id: "c-game-input",
        name: "Gamepad / Tombol Keyboard W-A-S-D",
        iconName: "Gamepad2",
        description: "Menerima sentuhan jempol pemain saat menekan gas dan membelokkan roda kemudi ke kanan.",
        stage: "input"
      },
      {
        id: "c-game-process",
        name: "Game Engine & Chip GPU Grafis",
        iconName: "Cpu",
        description: "Menghitung kecepatan gesekan ban mobil di aspal sirkuit dan merender 60 frame grafis visual tiap detik.",
        stage: "process"
      },
      {
        id: "c-game-storage",
        name: "File Penyimpanan Save Game",
        iconName: "Save",
        description: "Merekam rekor waktu putaran lap tercepat (Best Lap Time) ke dalam profil pemain di SSD.",
        stage: "storage"
      },
      {
        id: "c-game-output",
        name: "Layar Monitor & Speaker Sound Effect",
        iconName: "Tv",
        description: "Menampilkan mobil meluncur drifting di layar serta speaker menggelegar suara knalpot turbo!",
        stage: "output"
      }
    ],
    correctOrder: ["c-game-input", "c-game-process", "c-game-storage", "c-game-output"]
  }
];

export const getIpoScenarios = (lang: Language): IpoScenario[] =>
  lang === 'en' ? IPO_SCENARIOS_EN : IPO_SCENARIOS_ID;
