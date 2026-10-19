/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TabType, StudentProfile, Badge, Language } from './types';
import { Navbar } from './components/Navbar';
import { CurriculumBanner } from './components/CurriculumBanner';
import { LearningModules } from './components/LearningModules';
import { VirtualLab } from './components/VirtualLab';
import { GroupingGame } from './components/GroupingGame';
import { IpoFlowGame } from './components/IpoFlowGame';
import { AchievementCertificate } from './components/AchievementCertificate';
import { ProfileModal } from './components/ProfileModal';
import { sounds } from './utils/audio';
import { Cpu, Heart } from 'lucide-react';

const INITIAL_PROFILE_EN: StudentProfile = {
  name: "Alex Pratama",
  avatar: "🧑‍💻",
  grade: "Grade 7 CS",
  points: 120,
  stars: 3,
  groupingScore: 120,
  ipoCompletedCount: 1,
  unlockedBadges: ["badge-welcome", "badge-ipo-novice"],
};

export default function App() {
  // Default to English as explicitly requested by user!
  const [lang, setLang] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem('cybersiswa_lang');
      if (savedLang === 'en' || savedLang === 'id') return savedLang;
    } catch {
      // ignore
    }
    return 'en';
  });

  const [activeTab, setActiveTab] = useState<TabType>('materi');
  const [soundMuted, setSoundMuted] = useState<boolean>(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  // Load saved profile from localStorage if exists
  const [profile, setProfile] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem('cybersiswa_profile_7');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_PROFILE_EN;
  });

  // Save profile changes
  useEffect(() => {
    try {
      localStorage.setItem('cybersiswa_profile_7', JSON.stringify(profile));
    } catch {
      // ignore
    }
  }, [profile]);

  // Save lang changes
  useEffect(() => {
    try {
      localStorage.setItem('cybersiswa_lang', lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const handleToggleLanguage = () => {
    const nextLang: Language = lang === 'en' ? 'id' : 'en';
    setLang(nextLang);
  };

  const handleToggleSound = () => {
    const nextMuted = sounds.toggleMute();
    setSoundMuted(nextMuted);
  };

  const handleEarnReward = (pointsEarned: number, starsEarned: number) => {
    setProfile((prev) => {
      const newPoints = prev.points + pointsEarned;
      const newStars = prev.stars + starsEarned;
      const updatedBadges = [...prev.unlockedBadges];

      if (newPoints >= 100 && !updatedBadges.includes('badge-100xp')) {
        updatedBadges.push('badge-100xp');
      }
      if (newPoints >= 250 && !updatedBadges.includes('badge-250xp')) {
        updatedBadges.push('badge-250xp');
      }
      if (newStars >= 5 && !updatedBadges.includes('badge-star-5')) {
        updatedBadges.push('badge-star-5');
      }

      return {
        ...prev,
        points: newPoints,
        stars: newStars,
        unlockedBadges: updatedBadges,
      };
    });
  };

  const handleSaveProfile = (updated: Partial<StudentProfile>) => {
    setProfile((prev) => ({ ...prev, ...updated }));
  };

  const isEn = lang === 'en';

  const badgesList: Badge[] = isEn
    ? [
        {
          id: 'badge-welcome',
          title: 'Computing Pioneer',
          icon: '🚀',
          description: 'First steps exploring the world of computing systems in Grade 7.',
          requiredCondition: 'Begin learning quest',
          isUnlocked: true,
        },
        {
          id: 'badge-100xp',
          title: '100 XP Collector',
          icon: '⚡',
          description: 'Gathered 100 experience points solving computer system challenges.',
          requiredCondition: 'Reach 100 XP',
          isUnlocked: profile.points >= 100,
        },
        {
          id: 'badge-250xp',
          title: 'Systems Architect',
          icon: '🧠',
          description: 'Demonstrated mastery in Hardware, Software, and Brainware synergy.',
          requiredCondition: 'Reach 250 XP',
          isUnlocked: profile.points >= 250,
        },
        {
          id: 'badge-ipo-novice',
          title: 'IPO Master Pathfinder',
          icon: '🔄',
          description: 'Successfully routed Input, CPU Processing, Storage, and Output stages in real scenarios.',
          requiredCondition: 'Complete 1 IPO Quest',
          isUnlocked: profile.unlockedBadges.includes('badge-ipo-novice') || profile.points >= 150,
        },
        {
          id: 'badge-star-5',
          title: 'Golden Star Prodigy',
          icon: '⭐',
          description: 'Collected at least 5 golden stars from category quizzes and flow simulations.',
          requiredCondition: 'Collect 5 Stars',
          isUnlocked: profile.stars >= 5,
        },
        {
          id: 'badge-master-lab',
          title: 'Junior Hardware Specialist',
          icon: '🛠️',
          description: 'Dissected and explored all motherboard components in the Virtual Anatomy Lab.',
          requiredCondition: 'Inspect Virtual Lab',
          isUnlocked: profile.points >= 180,
        },
      ]
    : [
        {
          id: 'badge-welcome',
          title: 'Pionir Komputasi',
          icon: '🚀',
          description: 'Langkah pertama menjelajahi dunia sistem komputasi Informatika kelas 7.',
          requiredCondition: 'Mulai petualangan belajar',
          isUnlocked: true,
        },
        {
          id: 'badge-100xp',
          title: 'Kolektor 100 XP',
          icon: '⚡',
          description: 'Mengumpulkan 100 poin pengalaman dari tantangan game sistem komputer.',
          requiredCondition: 'Raih 100 XP',
          isUnlocked: profile.points >= 100,
        },
        {
          id: 'badge-250xp',
          title: 'Pakar Sistem Komputer',
          icon: '🧠',
          description: 'Menunjukkan pemahaman mendalam tentang Hardware, Software, dan Brainware.',
          requiredCondition: 'Raih 250 XP',
          isUnlocked: profile.points >= 250,
        },
        {
          id: 'badge-ipo-novice',
          title: 'Penakluk Siklus IPO',
          icon: '🔄',
          description: 'Mampu menyusun tahapan Input, Pemrosesan CPU, Penyimpanan, dan Output pada kasus nyata.',
          requiredCondition: 'Selesaikan 1 Misi Alur IPO',
          isUnlocked: profile.unlockedBadges.includes('badge-ipo-novice') || profile.points >= 150,
        },
        {
          id: 'badge-star-5',
          title: 'Bintang Prestasi Emas',
          icon: '⭐',
          description: 'Mengoleksi minimal 5 bintang emas dari kuis dan simulasi alur.',
          requiredCondition: 'Kumpulkan 5 Bintang',
          isUnlocked: profile.stars >= 5,
        },
        {
          id: 'badge-master-lab',
          title: 'Teknisi PC Cilik',
          icon: '🛠️',
          description: 'Membedah dan memahami seluruh organ motherboard di Laboratorium Anatomi PC.',
          requiredCondition: 'Eksplorasi Lab Komputer',
          isUnlocked: profile.points >= 180,
        },
      ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        profile={profile}
        soundMuted={soundMuted}
        onToggleSound={handleToggleSound}
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
        lang={lang}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
        
        {/* Banner Curricular Information */}
        {activeTab === 'materi' && (
          <CurriculumBanner
            lang={lang}
            onStartLearning={() => {
              const el = document.getElementById('learning-modules-anchor');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onGoToGame={(tab) => setActiveTab(tab)}
          />
        )}

        <div id="learning-modules-anchor">
          {activeTab === 'materi' && <LearningModules lang={lang} />}
          {activeTab === 'lab' && <VirtualLab lang={lang} />}
          {activeTab === 'game-kelompok' && (
            <GroupingGame lang={lang} onEarnReward={handleEarnReward} />
          )}
          {activeTab === 'game-ipo' && (
            <IpoFlowGame lang={lang} onEarnReward={handleEarnReward} />
          )}
          {activeTab === 'prestasi' && (
            <AchievementCertificate profile={profile} badges={badgesList} lang={lang} />
          )}
        </div>

      </main>

      {/* Profile & Name Editor Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        lang={lang}
      />

      {/* Cheerful Student Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-400">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="font-heading font-bold text-slate-300">CyberSiswa</span>
            <span>• {isEn ? "Interactive Grade 7 Computer Science Learning Platform" : "Media Pembelajaran Interaktif Informatika SMP Kelas 7"}</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>{isEn ? "Middle School Phase D Curriculum" : "Kurikulum Merdeka Fase D"}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              {isEn ? "Crafted with" : "Dibuat dengan"} <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> {isEn ? "for Young Learners" : "untuk Pelajar Indonesia"}
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
