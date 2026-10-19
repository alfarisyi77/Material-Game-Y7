import React, { useState } from 'react';
import {
  getHardwareCategories,
  getSoftwareCategories,
  getBrainwareData,
  getIpoExplanation,
  getFunGlossary,
} from '../data/learningContent';
import { Language } from '../types';
import {
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  BookOpen,
  HelpCircle,
  Play,
  RotateCcw,
} from 'lucide-react';
import { DynamicIcon } from './DynamicIcon';
import { sounds } from '../utils/audio';

interface LearningModulesProps {
  lang: Language;
}

export const LearningModules: React.FC<LearningModulesProps> = ({ lang }) => {
  const isEn = lang === 'en';
  const [activeSubSection, setActiveSubSection] = useState<'hardware' | 'software' | 'brainware' | 'ipo' | 'glosarium'>('hardware');

  // Localized data
  const hardwareCategories = getHardwareCategories(lang);
  const softwareCategories = getSoftwareCategories(lang);
  const brainwareData = getBrainwareData(lang);
  const ipoExplanation = getIpoExplanation(lang);
  const glossary = getFunGlossary(lang);

  // Interactive IPO mini-simulator state
  const [ipoStep, setIpoStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const startIpoSimulation = () => {
    sounds.playClick();
    setIsSimulating(true);
    setIpoStep(1);

    setTimeout(() => {
      sounds.playClick();
      setIpoStep(2);
    }, 1200);

    setTimeout(() => {
      sounds.playClick();
      setIpoStep(3);
    }, 2400);

    setTimeout(() => {
      sounds.playCorrect();
      setIpoStep(4);
      setIsSimulating(false);
    }, 3600);
  };

  const resetIpoSimulation = () => {
    sounds.playClick();
    setIpoStep(0);
    setIsSimulating(false);
  };

  return (
    <div className="space-y-6">
      {/* Sub-navigation tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
        <button
          onClick={() => { sounds.playClick(); setActiveSubSection('hardware'); }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeSubSection === 'hardware'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Cpu className="w-4 h-4 text-cyan-400" />
          {isEn ? "1. Hardware Components" : "1. Perangkat Keras (Hardware)"}
        </button>

        <button
          onClick={() => { sounds.playClick(); setActiveSubSection('software'); }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeSubSection === 'software'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-emerald-300" />
          {isEn ? "2. Software Types" : "2. Perangkat Lunak (Software)"}
        </button>

        <button
          onClick={() => { sounds.playClick(); setActiveSubSection('brainware'); }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeSubSection === 'brainware'
              ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Layers className="w-4 h-4 text-amber-300" />
          {isEn ? "3. Brainware & Synergy" : "3. Brainware & Kolaborasi"}
        </button>

        <button
          onClick={() => { sounds.playClick(); setActiveSubSection('ipo'); }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeSubSection === 'ipo'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Zap className="w-4 h-4 text-yellow-300" />
          {isEn ? "4. The IPO Cycle" : "4. Siklus IPO (Input-Proses-Output)"}
        </button>

        <button
          onClick={() => { sounds.playClick(); setActiveSubSection('glosarium'); }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeSubSection === 'glosarium'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4 text-indigo-300" />
          {isEn ? "5. Tech Glossary" : "5. Glosarium Keren"}
        </button>
      </div>

      {/* SECTION 1: HARDWARE */}
      {activeSubSection === 'hardware' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-heading font-bold text-white mb-2 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-cyan-400" />
              {isEn ? "Understanding Computer Hardware" : "Mengenal Perangkat Keras (Hardware)"}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {isEn ? (
                <>
                  <strong>Hardware</strong> comprises all tangible physical components of a computer system that you can physically touch and see. Depending on their dedicated role, computer hardware is organized into 4 core functional categories:
                </>
              ) : (
                <>
                  <strong>Perangkat keras (Hardware)</strong> adalah semua komponen fisik komputer yang dapat kita lihat secara kasat mata dan bisa disentuh dengan tangan. Berdasarkan fungsinya, hardware dibagi menjadi 4 kelompok utama:
                </>
              )}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hardwareCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-heading font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 mb-3">{cat.shortDesc}</p>

                  {/* Analogy badge */}
                  <div className="mb-4 p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200 flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">{isEn ? "💡 Human Body Analogy:" : "💡 Analogi Tubuh:"}</span>
                    <span>{cat.analogy}</span>
                  </div>

                  {/* Items list */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                      {isEn ? "Component Examples:" : "Contoh Komponen:"}
                    </span>
                    <div className="grid grid-cols-1 gap-1.5">
                      {cat.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs flex items-center justify-between text-slate-200"
                        >
                          <span className="font-semibold text-cyan-300">{item.name}</span>
                          <span className="text-[11px] text-slate-400 truncate max-w-[200px] text-right">
                            {item.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: SOFTWARE */}
      {activeSubSection === 'software' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-heading font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              {isEn ? "Understanding Computer Software" : "Mengenal Perangkat Lunak (Software)"}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {isEn ? (
                <>
                  <strong>Software</strong> refers to programs, scripts, and electronic instructions executed by a computer. While intangible, software breathes 'life' into computing hardware. Without software, even the most expensive computer is just a cold box of silicon and metal!
                </>
              ) : (
                <>
                  <strong>Perangkat lunak (Software)</strong> adalah kumpulan data elektronik dan instruksi program yang tidak berwujud fisik, namun menjadi 'jiwa' dan pengendali utama komputer. Tanpa software, hardware secanggih apa pun hanyalah seonggok besi dan kaca mati!
                </>
              )}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {softwareCategories.map((sw) => (
                <div
                  key={sw.id}
                  className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <DynamicIcon name={sw.icon} className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-emerald-300 border border-slate-700">
                        {sw.role}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-base text-white mb-2">
                      {sw.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {sw.desc}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      {isEn ? "Popular Examples:" : "Contoh Populer:"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sw.examples.map((ex, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-slate-800 text-[11px] font-medium text-slate-200 border border-slate-700"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: BRAINWARE */}
      {activeSubSection === 'brainware' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-heading font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-6 h-6 text-amber-400" />
              {isEn ? "Brainware & The 3-Pillar Synergy" : "Brainware & Kolaborasi Tiga Pilar Komputer"}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {isEn ? (
                <>
                  <strong>Brainware</strong> represents the human element: individuals who operate, program, and maintain computing systems. A computer functions only through the balanced harmony of all 3 pillars:
                </>
              ) : (
                <>
                  <strong>Brainware</strong> adalah manusia yang mengoperasikan, mengendalikan, dan mengembangkan sistem komputer. Sistem komputer bekerja sempurna hanya jika ada kolaborasi harmonis antara 3 pilar:
                </>
              )}
            </p>

            {/* The 3 Pillars Visual Diagram */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/40 text-center">
                <span className="text-2xl mb-1 block">💻</span>
                <h4 className="font-heading font-bold text-sm text-blue-300 mb-1">
                  {isEn ? "Hardware (Body)" : "Hardware (Jasmani)"}
                </h4>
                <p className="text-xs text-slate-300">
                  {isEn ? "Physical machinery: silicon chips, circuitry, cables, keyboard, and screen." : "Wadah fisik: tombol keyboard, chip CPU, kabel, dan layar kaca monitor."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center">
                <span className="text-2xl mb-1 block">💿</span>
                <h4 className="font-heading font-bold text-sm text-emerald-300 mb-1">
                  {isEn ? "Software (Soul/Mind)" : "Software (Ruh/Jiwa)"}
                </h4>
                <p className="text-xs text-slate-300">
                  {isEn ? "Logical code: operating systems, mathematical algorithms, and application instructions." : "Instruksi logika: sistem operasi, aturan algoritma, dan kode aplikasi."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-center">
                <span className="text-2xl mb-1 block">🧑‍🎓</span>
                <h4 className="font-heading font-bold text-sm text-amber-300 mb-1">
                  {isEn ? "Brainware (Driver/Pilot)" : "Brainware (Pengemudi)"}
                </h4>
                <p className="text-xs text-slate-300">
                  {isEn ? "Human intent: humans inputting prompts, steering tasks, and utilizing final results." : "Pemberi tujuan: manusia yang mengetik, memberi perintah, dan menikmati hasil."}
                </p>
              </div>
            </div>

            {/* Brainware Roles */}
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
              {isEn ? "Key Brainware Roles in the Tech World:" : "Peran-Peran Brainware di Dunia Nyata:"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {brainwareData.map((bw, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <DynamicIcon name={bw.icon} className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">{bw.role}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{bw.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: IPO CYCLE */}
      {activeSubSection === 'ipo' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
              <div>
                <h2 className="text-xl font-heading font-bold text-white mb-1 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  {ipoExplanation.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300">
                  {ipoExplanation.sub}
                </p>
              </div>

              {/* Simulation Controller */}
              <div className="flex items-center gap-2">
                <button
                  onClick={startIpoSimulation}
                  disabled={isSimulating}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-yellow-500/20 disabled:opacity-50 transition-transform active:scale-95"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  {isSimulating ? (isEn ? "Streaming Signal..." : "Memproses Data...") : (isEn ? "Simulate IPO Data Flow" : "Uji Simulasi Alur IPO")}
                </button>
                {ipoStep > 0 && !isSimulating && (
                  <button
                    onClick={resetIpoSimulation}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
                    title={isEn ? "Reset Simulation" : "Ulangi Simulasi"}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Interactive Simulation Stages Visual */}
            <div className="relative my-6 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative z-10">
                {ipoExplanation.stages.map((stage) => {
                  const isCurrent = ipoStep === stage.step;
                  const isPassed = ipoStep > stage.step;

                  return (
                    <div
                      key={stage.step}
                      className={`p-4 rounded-xl border transition-all duration-300 relative ${
                        isCurrent
                          ? 'border-yellow-400 bg-yellow-950/30 ring-2 ring-yellow-400/50 scale-105 shadow-xl'
                          : isPassed
                          ? 'border-emerald-500/50 bg-emerald-950/20 text-slate-200'
                          : 'border-slate-800 bg-slate-900/60 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                          isCurrent ? 'bg-yellow-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {isEn ? `Stage ${stage.step}` : `Tahap ${stage.step}`}
                        </span>
                        {isCurrent && (
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-ping" />
                        )}
                      </div>

                      <h4 className="font-heading font-bold text-base text-white mb-1">
                        {stage.title}
                      </h4>
                      <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                        {stage.action}
                      </p>
                      <div className="text-[11px] p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-400 italic">
                        <strong className="text-cyan-300 not-italic">{isEn ? "Example:" : "Contoh:"}</strong> {stage.example}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Simulation status banner */}
              {ipoStep > 0 && (
                <div className="mt-4 p-3 rounded-xl bg-indigo-950/50 border border-indigo-500/30 text-xs sm:text-sm text-indigo-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="animate-spin text-base">⚙️</span>
                    <span>
                      {isEn ? (
                        <>
                          {ipoStep === 1 && "Stage 1 [INPUT]: User taps 'Hello' on keyboard. Electrical signals trigger..."}
                          {ipoStep === 2 && "Stage 2 [PROCESS]: CPU translates binary ASCII codes and schedules font renderer..."}
                          {ipoStep === 3 && "Stage 3 [STORAGE]: Data buffers in RAM and saves safely to SSD..."}
                          {ipoStep === 4 && "Stage 4 [OUTPUT]: Complete! 'Hello' renders brilliantly on your monitor screen!"}
                        </>
                      ) : (
                        <>
                          {ipoStep === 1 && "Tahap 1 [INPUT]: Jari menekan tuts keyboard 'Halo'. Sinyal listrik terkirim..."}
                          {ipoStep === 2 && "Tahap 2 [PROSES]: CPU menerjemahkan kode biner dan memproses instruksi..."}
                          {ipoStep === 3 && "Tahap 3 [STORAGE]: Data disimpan ke RAM dan diarsip ke SSD..."}
                          {ipoStep === 4 && "Tahap 4 [OUTPUT]: Selesai! Teks 'Halo' terpampang cerah di monitor!"}
                        </>
                      )}
                    </span>
                  </div>
                  {ipoStep === 4 && (
                    <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40">
                      {isEn ? "Cycle Succeeded!" : "Siklus Berhasil!"}
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/30 text-xs text-blue-200 flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-blue-300 block mb-1">
                  {isEn ? "Why is the IPO Cycle So Important?" : "Mengapa Siklus IPO Sangat Penting?"}
                </strong>
                {isEn ? (
                  <>Every computing device on Earth—from pocket calculators, smartphones, barcode cash registers, to NASA spacecraft—operates on this universal golden cycle: <strong>Input ➔ Process ➔ (Storage) ➔ Output</strong>!</>
                ) : (
                  <>Semua perangkat pintar di dunia, mulai dari kalkulator tangan, smartphone, laptop kasir, hingga roket luar angkasa NASA, semuanya beroperasi mengikuti rumus siklus emas ini: <strong>Input ➔ Proses ➔ (Penyimpanan) ➔ Output</strong>!</>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: GLOSSARY */}
      {activeSubSection === 'glosarium' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-heading font-bold text-white mb-2 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-indigo-400" />
              {isEn ? "Grade 7 Computer Science Glossary" : "Glosarium Istilah Keren Informatika Kelas 7"}
            </h2>
            <p className="text-slate-300 text-sm mb-4">
              {isEn ? "Master these essential tech terms to talk like a true computer scientist:" : "Pahami istilah-istilah gaul teknologi berikut agar kamu makin paham materi sistem komputer:"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {glossary.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-indigo-500/40 transition-all group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-125 transition-transform" />
                    <h4 className="font-heading font-bold text-sm text-cyan-300">
                      {item.term}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
