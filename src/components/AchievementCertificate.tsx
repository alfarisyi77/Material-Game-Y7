import React, { useRef } from 'react';
import { StudentProfile, Badge, Language } from '../types';
import {
  Award,
  CheckCircle,
  Printer,
  Cpu,
} from 'lucide-react';
import { sounds } from '../utils/audio';

interface AchievementCertificateProps {
  profile: StudentProfile;
  badges: Badge[];
  lang: Language;
}

export const AchievementCertificate: React.FC<AchievementCertificateProps> = ({
  profile,
  badges,
  lang,
}) => {
  const isEn = lang === 'en';
  const certificateRef = useRef<HTMLDivElement>(null);

  const handlePrintCertificate = () => {
    sounds.playFanfare();
    window.print();
  };

  const unlockedCount = badges.filter((b) => b.isUnlocked).length;
  const todayStr = isEn
    ? new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }).format(new Date())
    : new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date());

  return (
    <div className="space-y-8">
      {/* Top Banner Stats */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-yellow-400 to-amber-500 flex items-center justify-center text-3xl shadow-lg shadow-amber-500/20">
              {profile.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-heading font-bold text-white">
                  {profile.name}
                </h2>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {profile.grade}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {isEn ? "Student Rank: " : "Peringkat Siswa: "}
                <strong className="text-amber-400">
                  {isEn ? "Grade 7 Cyber Adventurer" : "Cyber Adventurer Kelas 7"}
                </strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center min-w-[90px]">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">
                {isEn ? "Total Stars" : "Total Bintang"}
              </span>
              <span className="text-lg font-bold font-mono text-amber-400 flex items-center justify-center gap-1">
                ⭐ {profile.stars}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center min-w-[90px]">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">
                {isEn ? "Total XP" : "Total Skor"}
              </span>
              <span className="text-lg font-bold font-mono text-cyan-400">
                {profile.points} XP
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center min-w-[90px]">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">
                {isEn ? "Badges" : "Lencana"}
              </span>
              <span className="text-lg font-bold font-mono text-purple-400">
                {unlockedCount} / {badges.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Badges Collection Grid */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            {isEn ? "Student Achievement Badges" : "Koleksi Lencana Penghargaan Siswa"}
          </h3>
          <span className="text-xs text-slate-400">
            {unlockedCount} {isEn ? "Unlocked" : "Terbuka"}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`p-4 rounded-2xl border transition-all flex items-start gap-3 ${
                b.isUnlocked
                  ? 'bg-gradient-to-br from-indigo-950/50 to-slate-900 border-indigo-500/40 text-slate-200 shadow-md'
                  : 'bg-slate-950/40 border-slate-800 text-slate-500 opacity-60'
              }`}
            >
              <div className="text-2xl p-2 rounded-xl bg-slate-900/80 border border-slate-800 shrink-0">
                {b.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h4 className={`text-xs font-bold ${b.isUnlocked ? 'text-white' : 'text-slate-400'}`}>
                    {b.title}
                  </h4>
                  {b.isUnlocked && (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  )}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-1">
                  {b.description}
                </p>
                <span className="text-[10px] font-mono text-cyan-400/80">
                  {isEn ? "Target: " : "Target: "}{b.requiredCondition}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Official Certificate Card (Printable) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-heading text-xl font-bold text-white">
              {isEn ? "Computer Systems Certificate of Completion" : "Sertifikat Kelulusan Misi Sistem Komputer"}
            </h3>
            <p className="text-xs text-slate-400">
              {isEn
                ? "Awarded for exceptional mastery of Grade 7 Computer Systems & The IPO Cycle"
                : "Diterbitkan atas pencapaian penguasaan materi Sistem Komputer & Siklus IPO Kelas 7 SMP"}
            </p>
          </div>

          <button
            onClick={handlePrintCertificate}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <Printer className="w-4 h-4" />
            {isEn ? "Print / Save PDF" : "Cetak / Simpan PDF"}
          </button>
        </div>

        {/* Certificate Paper */}
        <div
          ref={certificateRef}
          className="p-8 sm:p-12 rounded-3xl bg-slate-950 border-4 border-amber-500/60 shadow-2xl relative overflow-hidden text-center print:border-black print:text-black print:bg-white"
        >
          {/* Ornate corner borders */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-400" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-400" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-400" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-400" />

          {/* Watermark Logo */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <Cpu className="w-96 h-96 text-white" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-widest">
              {isEn ? "⭐ OFFICIAL INFORMATICS COMPETENCY CERTIFICATE ⭐" : "⭐ SERTIFIKAT KOMPETENSI INFORMATIKA ⭐"}
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight text-white print:text-black">
              {isEn ? "CERTIFICATE OF ACHIEVEMENT" : "SERTIFIKAT KELULUSAN"}
            </h1>

            <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-widest">
              {isEn ? "Proudly presented to outstanding scholar:" : "Diberikan dengan bangga kepada siswa berprestasi:"}
            </p>

            {/* Student Name */}
            <div className="py-2 border-b-2 border-amber-400/40 inline-block px-8">
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-amber-300 print:text-black">
                {profile.name}
              </span>
            </div>

            <p className="text-xs text-slate-400">
              {isEn ? `Student in ${profile.grade} • Informatics & Computer Science` : `Siswa ${profile.grade} • Mata Pelajaran Informatika Fase D`}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto print:text-black">
              {isEn
                ? "For successfully completing interactive learning modules in Computer Systems, demonstrating deep comprehension of Hardware, Software, and Brainware synergy, and solving the Input-Process-Output (IPO) real-world challenge missions."
                : "Telah berhasil menuntaskan pembelajaran interaktif materi Sistem Komputer, menguasai pengelompokan Perangkat Keras, Perangkat Lunak, dan Brainware, serta mahir menganalisis Siklus Input-Proses-Output (IPO)."}
            </p>

            {/* Score & Stamp Details */}
            <div className="pt-4 flex flex-wrap items-center justify-around gap-4 border-t border-slate-800">
              <div className="text-center">
                <span className="text-[10px] text-slate-400 uppercase block font-bold">
                  {isEn ? "Total XP Earned" : "Total Nilai XP"}
                </span>
                <span className="text-base font-bold font-mono text-cyan-400 print:text-black">
                  {profile.points} XP
                </span>
              </div>

              {/* Verified Digital Seal */}
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-amber-400/80 flex flex-col items-center justify-center p-1 bg-amber-500/10">
                <span className="text-[8px] font-bold text-amber-300 uppercase tracking-wider">
                  {isEn ? "OFFICIAL" : "RESMI"}
                </span>
                <span className="text-xl">🛡️</span>
                <span className="text-[8px] text-slate-400 font-mono">VERIFIED</span>
              </div>

              <div className="text-center">
                <span className="text-[10px] text-slate-400 uppercase block font-bold">
                  {isEn ? "Date Awarded" : "Tanggal Terbit"}
                </span>
                <span className="text-xs font-bold text-slate-200 print:text-black">
                  {todayStr}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
