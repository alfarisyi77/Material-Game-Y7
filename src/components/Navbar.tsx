import React from 'react';
import { TabType, StudentProfile, Language } from '../types';
import { BookOpen, Cpu, Gamepad2, Repeat, Trophy, Volume2, VolumeX, Sparkles, User, Globe } from 'lucide-react';
import { sounds } from '../utils/audio';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  profile: StudentProfile;
  soundMuted: boolean;
  onToggleSound: () => void;
  onOpenProfileModal: () => void;
  lang: Language;
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  profile,
  soundMuted,
  onToggleSound,
  onOpenProfileModal,
  lang,
  onToggleLanguage,
}) => {
  const isEn = lang === 'en';

  const tabs: { id: TabType; label: string; icon: React.ReactNode; badge?: string }[] = isEn
    ? [
        { id: 'materi', label: 'Lessons & Goals', icon: <BookOpen className="w-4 h-4" /> },
        { id: 'lab', label: 'Virtual PC Lab', icon: <Cpu className="w-4 h-4" /> },
        { id: 'game-kelompok', label: 'Category Quiz', icon: <Gamepad2 className="w-4 h-4" />, badge: 'Fun!' },
        { id: 'game-ipo', label: 'IPO Flow Quest', icon: <Repeat className="w-4 h-4" />, badge: 'Challenge' },
        { id: 'prestasi', label: 'Certificate & Badges', icon: <Trophy className="w-4 h-4" /> },
      ]
    : [
        { id: 'materi', label: 'Materi & CP', icon: <BookOpen className="w-4 h-4" /> },
        { id: 'lab', label: 'Lab Anatomi PC', icon: <Cpu className="w-4 h-4" /> },
        { id: 'game-kelompok', label: 'Game Kategori', icon: <Gamepad2 className="w-4 h-4" />, badge: 'Seru!' },
        { id: 'game-ipo', label: 'Game Alur IPO', icon: <Repeat className="w-4 h-4" />, badge: 'Tantangan' },
        { id: 'prestasi', label: 'Sertifikat & Badges', icon: <Trophy className="w-4 h-4" /> },
      ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo & Grade Info */}
          <div 
            onClick={() => { sounds.playClick(); setActiveTab('materi'); }}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full bg-slate-950/40 rounded-[10px] flex items-center justify-center">
                <Cpu className="w-6 h-6 text-cyan-300 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  CyberSiswa
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-300 border border-purple-500/40">
                  {isEn ? 'Grade 7 CS' : 'Kelas 7 SMP'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                {isEn ? 'Computer Systems & The IPO Cycle Adventure' : 'Petualangan Sistem Komputer & Siklus IPO'}
              </p>
            </div>
          </div>

          {/* User Score, Language Toggle & Badges Status */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher Button */}
            <button
              onClick={() => {
                sounds.playClick();
                onToggleLanguage();
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 hover:text-cyan-300 transition-all shadow-sm"
              title={isEn ? "Switch to Bahasa Indonesia" : "Ganti ke Bahasa Inggris"}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isEn ? '🇬🇧 EN' : '🇮🇩 ID'}</span>
            </button>

            {/* Student Mini Card */}
            <button
              onClick={() => { sounds.playClick(); onOpenProfileModal(); }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-left transition-all hover:border-cyan-500/50 group"
              title={isEn ? "Click to edit name or avatar" : "Klik untuk ubah nama atau avatar"}
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-sm shadow font-bold text-white">
                {profile.avatar || <User className="w-4 h-4" />}
              </div>
              <div className="hidden md:block">
                <div className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {profile.name}
                </div>
                <div className="text-[10px] text-slate-400 flex items-center gap-1.5">
                  <span className="text-amber-400 font-bold flex items-center gap-0.5">
                    ⭐ {profile.stars}
                  </span>
                  <span>•</span>
                  <span className="text-cyan-400 font-semibold flex items-center gap-0.5">
                    <Sparkles className="w-2.5 h-2.5" /> {profile.points} XP
                  </span>
                </div>
              </div>
            </button>

            {/* Sound Mute Button */}
            <button
              onClick={() => {
                sounds.playClick();
                onToggleSound();
              }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              title={soundMuted ? (isEn ? "Unmute Sound" : "Bunyikan Suara") : (isEn ? "Mute Sound" : "Matikan Suara")}
              aria-label="Sound Toggle"
            >
              {soundMuted ? (
                <VolumeX className="w-4 h-4 text-rose-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-emerald-400" />
              )}
            </button>
          </div>

        </div>

        {/* Tab Navigation Menu */}
        <nav className="flex items-center gap-1 sm:gap-2 mt-2.5 overflow-x-auto pb-1 no-scrollbar border-t border-slate-800/80 pt-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sounds.playClick();
                  setActiveTab(tab.id);
                }}
                className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all relative ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 ring-1 ring-blue-400/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/70'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase tracking-wider ${
                    isActive ? 'bg-amber-400 text-slate-950' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
