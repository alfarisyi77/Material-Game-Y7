import React, { useState } from 'react';
import { Language } from '../types';
import {
  Cpu,
  HardDrive,
  Tv,
  Layers,
  Zap,
  Power,
  Fan,
  Sparkles,
  Info,
  CheckCircle,
  Monitor,
  User,
  Sliders,
} from 'lucide-react';
import { sounds } from '../utils/audio';

interface LabComponent {
  id: string;
  name: string;
  category: string;
  role: string;
  analogy: string;
  detail: string;
  speed: string;
  funFact: string;
}

const LAB_COMPONENTS_EN: Record<string, LabComponent> = {
  cpu: {
    id: 'cpu',
    name: 'Central Processing Unit (CPU)',
    category: 'Processing',
    role: 'The Computer Brain',
    analogy: 'The human brain calculating math, making logical judgments, and commanding all body organs.',
    detail: 'Executes billions of binary calculations and instructions every second. Made up of the Arithmetic Logic Unit (ALU) and Control Unit (CU).',
    speed: 'Up to 5.0 GHz (5 Billion Cycles/Sec)',
    funFact: 'A single transistor inside modern CPUs measures just 3 nanometers across—thousands of times thinner than a human red blood cell!',
  },
  ram: {
    id: 'ram',
    name: 'Random Access Memory (RAM)',
    category: 'Storage',
    role: 'Fast Working Desktop Memory',
    analogy: 'A student study desk: The wider the desk surface, the more open notebooks you can review at once without stacking.',
    detail: 'Temporarily buffers active programs and data for ultra-fast CPU access. Volatile: everything clears when power turns off.',
    speed: 'DDR5 6000 MT/s Ultra-Bandwidth',
    funFact: 'If you open 50 browser tabs and your computer starts stuttering, your RAM is likely running at maximum capacity!',
  },
  gpu: {
    id: 'gpu',
    name: 'Graphics Processing Unit (GPU)',
    category: 'Graphics',
    role: '3D Visual & Game Artist',
    analogy: 'A super-fast painter with thousands of hands drawing millions of colored pixels in the blink of an eye.',
    detail: 'Dedicated parallel micro-architecture engineered for rapid 3D geometry rendering, ray-tracing, and high-framerate video games.',
    speed: 'Thousands of Parallel Cores',
    funFact: 'Beyond video games, GPUs are now the primary powerhouse driving generative artificial intelligence (AI) globally!',
  },
  ssd: {
    id: 'ssd',
    name: 'Solid State Drive (NVMe SSD)',
    category: 'Storage',
    role: 'Permanent High-Speed Storage',
    analogy: 'A secure library filing cabinet: Keeps all files, photos, and game saves safely preserved even when power is off.',
    detail: 'Non-volatile flash-based secondary storage with no moving spinning parts. Retains files reliably for years.',
    speed: 'Up to 7,000 MB/sec Read/Write',
    funFact: 'SSDs contain zero spinning magnetic platters, making them silent, durable, and immune to physical shaking!',
  },
  motherboard: {
    id: 'motherboard',
    name: 'Main Motherboard PCB',
    category: 'Circuits & Bus',
    role: 'The System Spine & Data Highway',
    analogy: 'The skeleton and spinal nervous system linking the brain to hands, sensory organs, and legs.',
    detail: 'The primary printed circuit board uniting the CPU socket, RAM slots, PCIe graphics slots, and peripheral bus lanes.',
    speed: 'PCIe 5.0 High Bandwidth Bus',
    funFact: 'A single motherboard PCB contains millions of microscopic copper traces stacked in up to 12 layered sandwiches!',
  },
  psu: {
    id: 'psu',
    name: 'Power Supply Unit (PSU)',
    category: 'Power Delivery',
    role: 'The Electric Beating Heart',
    analogy: 'The human heart pumping fresh oxygenated blood to all living tissue cells.',
    detail: 'Converts household AC mains voltage into clean, regulated DC voltage rails (12V, 5V, 3.3V) to safeguard sensitive microchips.',
    speed: '80 Plus Gold Efficiency',
    funFact: 'A cheap or failing power supply can cause a gaming PC to shut down abruptly during heavy graphical moments!',
  },
  cooler: {
    id: 'cooler',
    name: 'CPU Heatsink & Cooling Fan',
    category: 'Cooling',
    role: 'Thermal Heat Dissipation',
    analogy: 'Perspiration and cooling breeze preventing the human body from overheating with a severe fever.',
    detail: 'Directly pulls heat away from billions of hard-working transistors in the CPU and exhausts it via dense aluminum fins.',
    speed: '2000 RPM Silent Airflow',
    funFact: 'Without a cooler installed, a modern CPU can spike over 100°C within mere seconds of starting up!',
  },
};

const LAB_COMPONENTS_ID: Record<string, LabComponent> = {
  cpu: {
    id: 'cpu',
    name: 'Prosesor (Central Processing Unit)',
    category: 'Proses',
    role: 'Otak Utama Komputer',
    analogy: 'Otak manusia yang menghitung, mengambil keputusan logika, dan mengomandoi seluruh organ tubuh.',
    detail: 'Menjalankan miliaran perhitungan matematika dan instruksi biner per detik. Terdiri dari ALU (Arithmetic Logic Unit) dan CU (Control Unit).',
    speed: 'Hingga 5.0 GHz (5 Milyar Siklus Detik)',
    funFact: 'Ukuran satu transistor di dalam chip CPU masa kini mencapai 3 nanometer, ribuan kali lebih kecil dari sel darah merah!',
  },
  ram: {
    id: 'ram',
    name: 'RAM (Random Access Memory)',
    category: 'Penyimpanan',
    role: 'Meja Kerja Memori Cepat',
    analogy: 'Meja belajar: Semakin luas mejanya, semakin banyak buku PR yang bisa dibuka secara bersamaan tanpa saling tumpuk.',
    detail: 'Menyimpan data dan program yang sedang aktif dibuka CPU secara sementara. Bersifat Volatile (hilang jika listrik mati).',
    speed: 'DDR5 6000 MT/s Super Cepat',
    funFact: 'Jika kamu membuka 50 tab Google Chrome sekaligus dan komputermu mulai lemot, itu tandanya RAM-mu sedang penuh!',
  },
  gpu: {
    id: 'gpu',
    name: 'GPU (Graphics Processing Unit)',
    category: 'Grafis',
    role: 'Pelukis Visual & Game 3D',
    analogy: 'Pelukis ajaib dengan ribuan tangan yang menggambar ribuan piksel warna dalam sekejap mata.',
    detail: 'Dikhususkan untuk memproses kalkulasi visual, bayangan cahaya (ray tracing), rendering video 4K, dan game 3D berkecapatan tinggi.',
    speed: 'Ribuan CUDA Cores Paralel',
    funFact: 'Selain untuk game, GPU saat ini juga menjadi mesin penggerak utama teknologi kecerdasan buatan (AI) di seluruh dunia!',
  },
  ssd: {
    id: 'ssd',
    name: 'SSD (Solid State Drive) NVMe',
    category: 'Penyimpanan',
    role: 'Lemari Arsip Permanen Kencang',
    analogy: 'Lemari rak buku besar: Tempat menyimpan semua buku, foto, dan file tugas selamanya walau lampu rumah padam.',
    detail: 'Media penyimpanan sekunder berbasis chip flash. Bersifat Non-Volatile (file tetap utuh saat komputer dimatikan).',
    speed: 'Hingga 7.000 MB/detik Read/Write',
    funFact: 'SSD tidak memiliki bagian berputar seperti piringan Harddisk lama, sehingga tahan guncangan dan tidak bising!',
  },
  motherboard: {
    id: 'motherboard',
    name: 'Motherboard (Papan Induk Sirkuit)',
    category: 'Daya & Sirkuit',
    role: 'Tulang Punggung & Jalan Raya Data',
    analogy: 'Rangka tubuh dan susunan urat saraf yang menghubungkan otak ke tangan, kaki, dan jantung.',
    detail: 'Papan sirkuit cetak utama tempat dipasangnya CPU, RAM, kartu grafis, dan soket periferal agar dapat bertukar data lewat jalur Bus.',
    speed: 'PCIe 5.0 Bus Bandwidth Tinggi',
    funFact: 'Terdapat jutaan jalur tembaga mikroskopis yang dicetak bertumpuk hingga belasan lapisan di dalam satu papan motherboard!',
  },
  psu: {
    id: 'psu',
    name: 'Power Supply Unit (PSU)',
    category: 'Daya & Sirkuit',
    role: 'Jantung Pemasok Arus Listrik',
    analogy: 'Jantung manusia yang memompa darah segar beroksigen ke seluruh jaringan organ tubuh.',
    detail: 'Mengubah arus bolak-balik (AC 220V dari colokan PLN) menjadi arus searah (DC 12V, 5V, 3.3V) yang aman dan stabil bagi komponen sensitif.',
    speed: 'Efisiensi Daya 80 Plus Gold',
    funFact: 'Komputer yang kekurangan daya atau memakai PSU abal-abal bisa tiba-tiba mati mendadak saat menjalankan game berat!',
  },
  cooler: {
    id: 'cooler',
    name: 'Pendingin CPU (Fan Cooler / Heatsink)',
    category: 'Pendingin',
    role: 'Penyerap Hawa Panas & Penjaga Suhu',
    analogy: 'Keringat dan hembusan kipas angin yang menjaga tubuh manusia tidak kepanasan atau demam tinggi.',
    detail: 'Menyerap panas tinggi yang dihasilkan oleh miliaran transistor CPU saat bekerja keras, lalu membuangnya lewat sirip aluminium kipas.',
    speed: '2000 RPM Rotasi Hening',
    funFact: 'Jika CPU tidak dipasangi pendingin sama sekali, suhunya bisa melonjak melewati 100°C hanya dalam waktu beberapa detik!',
  },
};

interface VirtualLabProps {
  lang: Language;
}

export const VirtualLab: React.FC<VirtualLabProps> = ({ lang }) => {
  const isEn = lang === 'en';
  const componentsMap = isEn ? LAB_COMPONENTS_EN : LAB_COMPONENTS_ID;
  const [selectedCompId, setSelectedCompId] = useState<string>('cpu');
  const selectedComp = componentsMap[selectedCompId] || componentsMap['cpu'];

  // Tri-Synergy Simulation State
  const [hwActive, setHwActive] = useState<boolean>(true);
  const [swActive, setSwActive] = useState<boolean>(true);
  const [bwActive, setBwActive] = useState<boolean>(true);

  const togglePillar = (type: 'hw' | 'sw' | 'bw') => {
    sounds.playClick();
    if (type === 'hw') setHwActive(!hwActive);
    if (type === 'sw') setSwActive(!swActive);
    if (type === 'bw') setBwActive(!bwActive);
  };

  const getSystemStatus = () => {
    if (!hwActive) {
      return {
        status: isEn ? 'Powered Off (No Hardware)' : 'Mati Total (No Hardware)',
        color: 'text-rose-400 bg-rose-950/40 border-rose-500/40',
        message: isEn
          ? 'Pitch black screen! Without physical hardware, software and user instructions have no physical vessel.'
          : 'Layar gelap gulita! Tanpa wadah fisik hardware, komputer hanyalah ide di angan-angan.',
        screenText: isEn
          ? '⚡ NO ELECTRICAL CIRCUIT / HARDWARE ABSENT'
          : '⚡ TIDAK ADA ALIRAN LISTRIK / PERANGKAT MATI TOTAL',
      };
    }
    if (!swActive) {
      return {
        status: isEn ? 'Boot Failed (No Software)' : 'Layar Blank / Boot Error (No Software)',
        color: 'text-amber-400 bg-amber-950/40 border-amber-500/40',
        message: isEn
          ? 'Fans spin, but screen shows BIOS error: "Operating System Not Found! Insert Boot Media."'
          : 'Kipas berputar tapi layar menampilkan layar hitam BIOS: "Operating System Not Found!"',
        screenText: 'BIOS ERROR: NO BOOTABLE OPERATING SYSTEM FOUND. HALTED.',
      };
    }
    if (!bwActive) {
      return {
        status: isEn ? 'Idling / Standby (No Brainware)' : 'Standby / Menganggur (No Brainware)',
        color: 'text-blue-400 bg-blue-950/40 border-blue-500/40',
        message: isEn
          ? 'Computer is fully powered on, waiting silently for a human to touch the mouse or enter a command.'
          : 'Komputer menyala normal, tapi diam seribu bahasa menunggu manusia menggerakkan mouse atau mengetik perintah.',
        screenText: 'SYSTEM READY: AWAITING USER COMMAND INPUT [ _ ]',
      };
    }
    return {
      status: isEn ? 'Operating Harmoniously! (3 Pillars Active)' : 'Sistem Beroperasi Sempurna! (3 Pilar Harmonis)',
      color: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/40',
      message: isEn
        ? 'Splendid! Brainware provides intent, Software translates logic, and Hardware computes at lightning speed!'
        : 'Luar biasa! Brainware memberikan perintah, Software mengeksekusi instruksi, dan Hardware bekerja mengolah data secepat kilat!',
      screenText: isEn ? 'WELCOME TO CYBERSISWA GRADE 7 COMPUTING LAB 🚀' : 'WELCOME BACK! SELAMAT BELAJAR DI CYBERSISWA KELAS 7 🚀',
    };
  };

  const currentStatus = getSystemStatus();

  return (
    <div className="space-y-8">
      {/* SECTION 1: Virtual PC Hardware Anatomy Lab */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {isEn ? "Virtual Hands-On Lab" : "Eksplorasi Praktikum Virtual"}
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
              {isEn ? "Virtual Computer Anatomy Laboratory" : "Laboratorium Anatomi Komputer Maya"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {isEn
                ? "Click any motherboard component on the board to examine its function, human body analogy, and technical specs!"
                : "Klik setiap komponen pada diagram sirkuit untuk melihat fungsi, analogi tubuh manusia, dan spesifikasi kuncinya!"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Interactive Motherboard Layout Board */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-4 sm:p-6 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-2 right-3 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              MOTHERBOARD ARCHITECTURE REV 7.0
            </div>

            <div className="grid grid-cols-3 gap-3 my-4">
              {/* CPU Slot */}
              <button
                onClick={() => { sounds.playClick(); setSelectedCompId('cpu'); }}
                className={`col-span-2 p-4 rounded-xl border flex items-center gap-3 transition-all ${
                  selectedCompId === 'cpu'
                    ? 'border-cyan-400 bg-cyan-950/40 ring-2 ring-cyan-400/50 scale-[1.02]'
                    : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Cpu className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-bold uppercase text-cyan-400 tracking-wider">
                    {isEn ? "Central Brain" : "Otak Utama"}
                  </span>
                  <h4 className="text-sm font-bold text-white">CPU Socket</h4>
                  <p className="text-[11px] text-slate-400">
                    {isEn ? "Math & Logic Hub" : "Pusat Hitung & Logika"}
                  </p>
                </div>
              </button>

              {/* Fan Cooler */}
              <button
                onClick={() => { sounds.playClick(); setSelectedCompId('cooler'); }}
                className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                  selectedCompId === 'cooler'
                    ? 'border-sky-400 bg-sky-950/40 ring-2 ring-sky-400/50 scale-[1.02]'
                    : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <Fan className="w-6 h-6 text-sky-400 animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-xs font-bold text-white text-center">CPU Fan</span>
                <span className="text-[10px] text-slate-400">{isEn ? "Heatsink" : "Pendingin"}</span>
              </button>

              {/* RAM Slots */}
              <button
                onClick={() => { sounds.playClick(); setSelectedCompId('ram'); }}
                className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all ${
                  selectedCompId === 'ram'
                    ? 'border-emerald-400 bg-emerald-950/40 ring-2 ring-emerald-400/50 scale-[1.02]'
                    : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-bold text-emerald-400 uppercase">Volatile</span>
                  <h4 className="text-xs font-bold text-white">RAM DIMM</h4>
                </div>
              </button>

              {/* SSD NVMe Slot */}
              <button
                onClick={() => { sounds.playClick(); setSelectedCompId('ssd'); }}
                className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all ${
                  selectedCompId === 'ssd'
                    ? 'border-indigo-400 bg-indigo-950/40 ring-2 ring-indigo-400/50 scale-[1.02]'
                    : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
                  <HardDrive className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-bold text-indigo-400 uppercase">Non-Volatile</span>
                  <h4 className="text-xs font-bold text-white">NVMe M.2</h4>
                </div>
              </button>

              {/* GPU PCIe Slot */}
              <button
                onClick={() => { sounds.playClick(); setSelectedCompId('gpu'); }}
                className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all ${
                  selectedCompId === 'gpu'
                    ? 'border-purple-400 bg-purple-950/40 ring-2 ring-purple-400/50 scale-[1.02]'
                    : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0">
                  <Tv className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-bold text-purple-400 uppercase">3D Visual</span>
                  <h4 className="text-xs font-bold text-white">PCIe GPU</h4>
                </div>
              </button>

              {/* Motherboard Base */}
              <button
                onClick={() => { sounds.playClick(); setSelectedCompId('motherboard'); }}
                className={`col-span-2 p-3 rounded-xl border flex items-center gap-2.5 transition-all ${
                  selectedCompId === 'motherboard'
                    ? 'border-amber-400 bg-amber-950/40 ring-2 ring-amber-400/50 scale-[1.02]'
                    : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-amber-600/30 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Sliders className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-bold text-amber-400 uppercase">
                    {isEn ? "System Bus Traces" : "Jalur Sirkuit Bus"}
                  </span>
                  <h4 className="text-xs font-bold text-white">Motherboard PCB</h4>
                </div>
              </button>

              {/* PSU Slot */}
              <button
                onClick={() => { sounds.playClick(); setSelectedCompId('psu'); }}
                className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all ${
                  selectedCompId === 'psu'
                    ? 'border-rose-400 bg-rose-950/40 ring-2 ring-rose-400/50 scale-[1.02]'
                    : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-rose-600/30 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-bold text-rose-400 uppercase">
                    {isEn ? "DC Power" : "Daya Listrik"}
                  </span>
                  <h4 className="text-xs font-bold text-white">PSU Unit</h4>
                </div>
              </button>
            </div>

            {/* Instruction footnote */}
            <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-2 border-t border-slate-900">
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              {isEn ? "Tap or click any component to inspect details on the right panel!" : "Sentuh atau klik komponen untuk membedah fungsinya di panel kanan!"}
            </p>
          </div>

          {/* Component Detail Inspector Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 rounded-2xl p-6 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {isEn ? "Category: " : "Kategori: "}{selectedComp.category}
              </span>
              <span className="text-xs font-bold text-amber-400 font-mono">
                {selectedComp.speed}
              </span>
            </div>

            <h3 className="text-xl font-heading font-bold text-white mb-1">
              {selectedComp.name}
            </h3>
            <p className="text-xs font-semibold text-cyan-300 mb-4">
              {isEn ? "Role: " : "Peran: "}{selectedComp.role}
            </p>

            <div className="space-y-3 mb-5">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-[11px] font-bold text-slate-400 uppercase block mb-1">
                  {isEn ? "Description & Function:" : "Deskripsi & Cara Kerja:"}
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {selectedComp.detail}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30">
                <span className="text-[11px] font-bold text-indigo-300 uppercase block mb-1 flex items-center gap-1.5">
                  {isEn ? "💡 Human Body Analogy:" : "💡 Analogi Tubuh Manusia:"}
                </span>
                <p className="text-xs text-slate-200 leading-relaxed italic">
                  "{selectedComp.analogy}"
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30">
                <span className="text-[11px] font-bold text-amber-300 uppercase block mb-1 flex items-center gap-1.5">
                  {isEn ? "⭐ Did You Know? (Fun Fact):" : "⭐ Tahukah Kamu? (Fun Fact):"}
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {selectedComp.funFact}
                </p>
              </div>
            </div>

            <button
              onClick={() => { sounds.playCorrect(); }}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center justify-center gap-2 border border-slate-700 transition-colors"
            >
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              {isEn ? "I Understand This Component!" : "Saya Sudah Paham Komponen Ini!"}
            </button>
          </div>

        </div>
      </div>

      {/* SECTION 2: Tri-Synergy Simulator (Hardware + Software + Brainware) */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-indigo-500/30 shadow-xl">
        <div className="max-w-3xl mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-2">
            <Sliders className="w-3.5 h-3.5" />
            {isEn ? "Concept Mastery Simulator" : "Eksperimen Pemahaman Konsep"}
          </div>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1">
            {isEn
              ? 'Computing Tri-Synergy: "What Happens When One Pillar is Missing?"'
              : 'Simulasi Tri-Sinergi Komputer: "Apa yang Terjadi Jika Salah Satu Hilang?"'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            {isEn
              ? "A computer system can only work when Hardware, Software, and Brainware synchronize. Try toggling the switches below and observe the simulated screen!"
              : "Sistem komputer hanya dapat berfungsi jika Hardware, Software, dan Brainware saling melengkapi. Coba matikan salah satu saklar di bawah dan lihat simulasi layarnya!"}
          </p>
        </div>

        {/* 3 Switches */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* Hardware Toggle */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${hwActive ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">1. Hardware</h4>
                <p className="text-[11px] text-slate-400">
                  {hwActive ? (isEn ? 'Physical Ready ✅' : 'Fisik Siap ✅') : (isEn ? 'Physical Missing ❌' : 'Fisik Hilang ❌')}
                </p>
              </div>
            </div>
            <button
              onClick={() => togglePillar('hw')}
              className={`p-2 rounded-xl transition-colors ${hwActive ? 'bg-blue-600/30 text-blue-400 border border-blue-500/40' : 'bg-slate-800 text-slate-500'}`}
              title="Toggle Hardware"
            >
              <Power className="w-5 h-5" />
            </button>
          </div>

          {/* Software Toggle */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${swActive ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">2. Software</h4>
                <p className="text-[11px] text-slate-400">
                  {swActive ? (isEn ? 'OS/Apps Installed ✅' : 'OS/Aplikasi Ada ✅') : (isEn ? 'No OS/Apps ❌' : 'Tanpa OS/Aplikasi ❌')}
                </p>
              </div>
            </div>
            <button
              onClick={() => togglePillar('sw')}
              className={`p-2 rounded-xl transition-colors ${swActive ? 'bg-emerald-600/30 text-emerald-400 border border-emerald-500/40' : 'bg-slate-800 text-slate-500'}`}
              title="Toggle Software"
            >
              <Power className="w-5 h-5" />
            </button>
          </div>

          {/* Brainware Toggle */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bwActive ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                <User className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">3. Brainware</h4>
                <p className="text-[11px] text-slate-400">
                  {bwActive ? (isEn ? 'User Active ✅' : 'Pengguna Aktif ✅') : (isEn ? 'No User Present ❌' : 'Tanpa Manusia ❌')}
                </p>
              </div>
            </div>
            <button
              onClick={() => togglePillar('bw')}
              className={`p-2 rounded-xl transition-colors ${bwActive ? 'bg-amber-600/30 text-amber-400 border border-amber-500/40' : 'bg-slate-800 text-slate-500'}`}
              title="Toggle Brainware"
            >
              <Power className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live Computer Screen Simulation */}
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="flex items-center justify-between mb-3 border-b border-slate-900 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-slate-400 ml-2">SIMULATED VIRTUAL MONITOR</span>
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${currentStatus.color}`}>
              {currentStatus.status}
            </span>
          </div>

          {/* Screen Output Terminal */}
          <div className={`p-6 rounded-xl font-mono text-xs sm:text-sm min-h-[140px] flex flex-col justify-center items-center text-center transition-all ${
            !hwActive ? 'bg-black text-slate-700' : !swActive ? 'bg-blue-950 text-cyan-300' : !bwActive ? 'bg-slate-900 text-amber-300' : 'bg-slate-900 text-emerald-300'
          }`}>
            <p className="font-bold text-sm sm:text-base mb-2">
              {currentStatus.screenText}
            </p>
            <p className="text-xs text-slate-400 max-w-md">
              {currentStatus.message}
            </p>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-slate-900 text-xs text-slate-300 flex items-center justify-between">
            <span>
              💡 <strong>{isEn ? "Core Takeaway:" : "Kesimpulan Guru:"}</strong>{' '}
              {isEn
                ? "A computer cannot function in isolation if any pillar is absent. Hardware is the body, Software is the mind, and Brainware is the pilot!"
                : "Komputer tidak bisa berdiri sendiri jika salah satu pilar hilang. Hardware adalah raganya, Software adalah jiwanya, dan Brainware adalah pengemudinya!"}
            </span>
            {(!hwActive || !swActive || !bwActive) && (
              <button
                onClick={() => { sounds.playCorrect(); setHwActive(true); setSwActive(true); setBwActive(true); }}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shrink-0 ml-3"
              >
                {isEn ? "Power All ON" : "Reset Semua Nyala"}
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
