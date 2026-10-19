import React, { useState } from 'react';
import { getCurriculumData } from '../data/learningContent';
import { Sparkles, CheckCircle2, Circle, Target, Award, ArrowRight, Play, BookOpen } from 'lucide-react';
import { TabType, Language } from '../types';
import { sounds } from '../utils/audio';

interface CurriculumBannerProps {
  lang: Language;
  onStartLearning: () => void;
  onGoToGame: (tab: TabType) => void;
}

export const CurriculumBanner: React.FC<CurriculumBannerProps> = ({
  lang,
  onStartLearning,
  onGoToGame,
}) => {
  const isEn = lang === 'en';
  const curriculum = getCurriculumData(lang);
  const [completedTps, setCompletedTps] = useState<string[]>(['tp1']);

  const toggleTp = (id: string) => {
    sounds.playClick();
    if (completedTps.includes(id)) {
      setCompletedTps(completedTps.filter((x) => x !== id));
    } else {
      sounds.playCorrect();
      setCompletedTps([...completedTps, id]);
    }
  };

  const progressPercent = Math.round((completedTps.length / curriculum.tujuanPembelajaran.length) * 100);

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/70 to-slate-900 border border-indigo-500/30 p-6 sm:p-8 shadow-2xl">
      {/* Decorative ambient lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        
        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
            <Target className="w-3.5 h-3.5 text-blue-400" />
            {curriculum.mataPelajaran}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            {curriculum.kelas}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            {curriculum.elemen}
          </span>
        </div>

        {/* Title */}
        <div className="max-w-4xl mb-6">
          <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            {isEn ? (
              <>
                Mastering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">Computer Systems</span> & The IPO Cycle
              </>
            ) : (
              <>
                Mengenal <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">Sistem Komputer</span> & Siklus IPO
              </>
            )}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {isEn ? (
              <>
                An exciting adventure unlocking how computing machines tick: how <strong className="text-cyan-300">Hardware</strong>, <strong className="text-emerald-300">Software</strong>, and <strong className="text-amber-300">Brainware</strong> unite to process data through the universal Input-Process-Output cycle!
              </>
            ) : (
              <>
                Petualangan seru membongkar rahasia mesin komputasi: bagaimana <strong className="text-cyan-300">Hardware</strong>, <strong className="text-emerald-300">Software</strong>, dan <strong className="text-amber-300">Brainware</strong> bersatu mengolah data lewat siklus Input-Proses-Output!
              </>
            )}
          </p>
        </div>

        {/* Capaian Pembelajaran Box */}
        <div className="mb-6 rounded-2xl bg-indigo-950/50 border border-indigo-500/40 p-4 sm:p-5 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-md">
              <Award className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold tracking-wider text-amber-400 uppercase">
                  {isEn ? "Curriculum Learning Outcome (Standard)" : "Capaian Pembelajaran (CP) Resmi"}
                </span>
                <span className="text-[10px] text-indigo-300 bg-indigo-900/60 px-2 py-0.5 rounded-full border border-indigo-700/50">
                  {isEn ? "Phase D Middle School" : "Kurikulum Merdeka Fase D"}
                </span>
              </div>
              <p className="text-slate-200 text-sm sm:text-base font-medium italic leading-relaxed">
                "{curriculum.capaianPembelajaran}"
              </p>
            </div>
          </div>
        </div>

        {/* Objectives Checklist Cards */}
        <div className="mb-6">
          <div className="flex items-center justify-between gap-4 mb-3">
            <h2 className="text-sm sm:text-base font-bold text-slate-200 flex items-center gap-2">
              <Target className="w-4 h-4 text-cyan-400" />
              {isEn ? "Learning Objectives (LO) & Mastery Checklist" : "Tujuan Pembelajaran (TP) & Target Capaianmu"}
            </h2>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <span>{isEn ? "Progress:" : "Progres Target:"}</span>
              <span className="text-cyan-400 font-bold">{progressPercent}%</span>
              <div className="w-20 bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {curriculum.tujuanPembelajaran.map((tp) => {
              const isDone = completedTps.includes(tp.id);
              return (
                <div
                  key={tp.id}
                  onClick={() => toggleTp(tp.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-3 ${
                    isDone
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-slate-200 shadow-sm'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-900/90'
                  }`}
                >
                  <button
                    className={`mt-0.5 shrink-0 transition-transform ${isDone ? 'scale-110 text-emerald-400' : 'text-slate-500'}`}
                    aria-label={`Mark ${tp.code}`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${isDone ? 'bg-emerald-900/50 text-emerald-300' : 'bg-slate-800 text-slate-400'}`}>
                        {tp.code}
                      </span>
                      <span className={`text-xs sm:text-sm font-bold ${isDone ? 'text-white' : 'text-slate-300'}`}>
                        {tp.text}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {tp.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => {
              sounds.playClick();
              onStartLearning();
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-95"
          >
            <BookOpen className="w-4 h-4" />
            {isEn ? "Explore Lessons" : "Eksplor Materi Lengkap"}
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onGoToGame('game-kelompok');
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-cyan-300 hover:text-white font-bold text-sm transition-all hover:scale-[1.02] active:scale-95"
          >
            <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
            {isEn ? "Play Category Quiz" : "Mainkan Game Kuis Pengelompokan"}
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onGoToGame('game-ipo');
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/40 text-purple-200 font-bold text-sm transition-all hover:scale-[1.02] active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-pink-400" />
            {isEn ? "Test IPO Data Flow" : "Tantangan Alur IPO Real-Time"}
          </button>
        </div>

      </div>
    </section>
  );
};
