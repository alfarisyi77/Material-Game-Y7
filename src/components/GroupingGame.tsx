import React, { useState, useEffect } from 'react';
import { getGroupingItems } from '../data/groupingGameData';
import { GroupingItem, Language } from '../types';
import { DynamicIcon } from './DynamicIcon';
import {
  Sparkles,
  Trophy,
  Flame,
  RotateCcw,
  CheckCircle,
  XCircle,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

interface GroupingGameProps {
  lang: Language;
  onEarnReward: (points: number, stars: number) => void;
}

type GameLevel = 1 | 2 | 3;

export const GroupingGame: React.FC<GroupingGameProps> = ({ lang, onEarnReward }) => {
  const isEn = lang === 'en';
  const [level, setLevel] = useState<GameLevel>(1);
  const [itemsPool, setItemsPool] = useState<GroupingItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [highestStreak, setHighestStreak] = useState<number>(0);
  const [feedback, setFeedback] = useState<{
    isCorrect: boolean;
    itemName: string;
    text: string;
    funFact?: string;
  } | null>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<{ item: GroupingItem; correct: boolean }[]>([]);

  // Initialize and filter items based on chosen level and language
  useEffect(() => {
    startNewGame(level);
  }, [level, lang]);

  const startNewGame = (selectedLevel: GameLevel) => {
    sounds.playClick();
    const allItems = getGroupingItems(lang);
    let filtered: GroupingItem[] = [];

    if (selectedLevel === 1) {
      filtered = [...allItems].sort(() => 0.5 - Math.random()).slice(0, 10);
    } else if (selectedLevel === 2) {
      filtered = allItems.filter((item) => item.categoryL1 === 'hardware')
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);
    } else {
      filtered = allItems.filter((item) => item.categoryL1 === 'software')
        .sort(() => 0.5 - Math.random())
        .slice(0, 9);
    }

    setItemsPool(filtered);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setHighestStreak(0);
    setFeedback(null);
    setIsGameOver(false);
    setUserAnswers([]);
  };

  const currentItem: GroupingItem | undefined = itemsPool[currentIndex];

  const handleChoice = (chosenCategory: string) => {
    if (!currentItem || feedback) return;

    let isCorrect = false;
    let expectedCategoryName = '';

    if (level === 1) {
      isCorrect = currentItem.categoryL1 === chosenCategory;
      if (isEn) {
        expectedCategoryName =
          currentItem.categoryL1 === 'hardware'
            ? 'Hardware'
            : currentItem.categoryL1 === 'software'
            ? 'Software'
            : 'Brainware (User)';
      } else {
        expectedCategoryName =
          currentItem.categoryL1 === 'hardware'
            ? 'Perangkat Keras (Hardware)'
            : currentItem.categoryL1 === 'software'
            ? 'Perangkat Lunak (Software)'
            : 'Brainware (Pengguna)';
      }
    } else if (level === 2) {
      isCorrect = currentItem.subCategoryHW === chosenCategory;
      const mapEn: Record<string, string> = {
        input: 'Input Devices',
        process: 'Processing Devices',
        output: 'Output Devices',
        storage: 'Storage Devices',
      };
      const mapId: Record<string, string> = {
        input: 'Perangkat Masukan (Input)',
        process: 'Perangkat Pemroses (Process)',
        output: 'Perangkat Keluaran (Output)',
        storage: 'Perangkat Penyimpanan (Storage)',
      };
      expectedCategoryName = (isEn ? mapEn : mapId)[currentItem.subCategoryHW || ''] || '';
    } else {
      isCorrect = currentItem.subCategorySW === chosenCategory;
      const mapEn: Record<string, string> = {
        os: 'Operating System (OS)',
        aplikasi: 'Application Software',
        utilitas: 'Utility Software',
      };
      const mapId: Record<string, string> = {
        os: 'Sistem Operasi (OS)',
        aplikasi: 'Program Aplikasi',
        utilitas: 'Program Utilitas',
      };
      expectedCategoryName = (isEn ? mapEn : mapId)[currentItem.subCategorySW || ''] || '';
    }

    setUserAnswers((prev) => [...prev, { item: currentItem, correct: isCorrect }]);

    if (isCorrect) {
      sounds.playCorrect();
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > highestStreak) setHighestStreak(newStreak);

      const pointsGained = 20 + newStreak * 5;
      setScore((prev) => prev + pointsGained);

      setFeedback({
        isCorrect: true,
        itemName: currentItem.name,
        text: isEn
          ? `Spot on! "${currentItem.name}" correctly belongs to the ${expectedCategoryName} group.`
          : `Tepat Sekali! "${currentItem.name}" termasuk ke dalam kelompok ${expectedCategoryName}.`,
        funFact: currentItem.funFact,
      });
    } else {
      sounds.playWrong();
      setStreak(0);
      setFeedback({
        isCorrect: false,
        itemName: currentItem.name,
        text: isEn
          ? `Not quite. "${currentItem.name}" actually belongs to ${expectedCategoryName}.`
          : `Kurang tepat. "${currentItem.name}" sebenarnya masuk ke dalam kelompok ${expectedCategoryName}.`,
        funFact: currentItem.funFact,
      });
    }
  };

  const handleNextCard = () => {
    sounds.playClick();
    setFeedback(null);
    if (currentIndex + 1 < itemsPool.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      endGame();
    }
  };

  const endGame = () => {
    setIsGameOver(true);
    sounds.playFanfare();

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }

    const correctCount = userAnswers.filter((a) => a.correct).length + (feedback?.isCorrect ? 1 : 0);
    const total = itemsPool.length;
    const ratio = correctCount / total;
    const starsEarned = ratio >= 0.8 ? 3 : ratio >= 0.5 ? 2 : 1;

    onEarnReward(score, starsEarned);
  };

  const renderCategoryButtons = () => {
    if (level === 1) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => handleChoice('hardware')}
            disabled={!!feedback}
            className="p-4 rounded-2xl bg-blue-950/60 hover:bg-blue-900/60 border border-blue-500/40 text-blue-200 font-bold text-sm sm:text-base flex flex-col items-center gap-2 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
          >
            <span className="text-2xl">💻</span>
            <span>{isEn ? "Hardware" : "Hardware (Perangkat Keras)"}</span>
            <span className="text-[10px] text-blue-300 font-normal">
              {isEn ? "Physical tangible parts" : "Fisik kasat mata"}
            </span>
          </button>

          <button
            onClick={() => handleChoice('software')}
            disabled={!!feedback}
            className="p-4 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-200 font-bold text-sm sm:text-base flex flex-col items-center gap-2 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
          >
            <span className="text-2xl">💿</span>
            <span>{isEn ? "Software" : "Software (Perangkat Lunak)"}</span>
            <span className="text-[10px] text-emerald-300 font-normal">
              {isEn ? "Programs & logic code" : "Program & instruksi digital"}
            </span>
          </button>

          <button
            onClick={() => handleChoice('brainware')}
            disabled={!!feedback}
            className="p-4 rounded-2xl bg-amber-950/60 hover:bg-amber-900/60 border border-amber-500/40 text-amber-200 font-bold text-sm sm:text-base flex flex-col items-center gap-2 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
          >
            <span className="text-2xl">🧑‍🎓</span>
            <span>{isEn ? "Brainware (Users)" : "Brainware (Pengguna)"}</span>
            <span className="text-[10px] text-amber-300 font-normal">
              {isEn ? "Human operators & coders" : "Manusia operator/ahli"}
            </span>
          </button>
        </div>
      );
    }

    if (level === 2) {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            onClick={() => handleChoice('input')}
            disabled={!!feedback}
            className="p-3.5 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 border border-blue-500/40 text-blue-200 font-bold text-xs sm:text-sm flex flex-col items-center gap-1.5 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            <span className="text-xl">⌨️</span>
            <span>Input</span>
            <span className="text-[10px] text-slate-400">{isEn ? "Data Gateway" : "Pintu Masukan"}</span>
          </button>

          <button
            onClick={() => handleChoice('process')}
            disabled={!!feedback}
            className="p-3.5 rounded-xl bg-amber-950/60 hover:bg-amber-900/60 border border-amber-500/40 text-amber-200 font-bold text-xs sm:text-sm flex flex-col items-center gap-1.5 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            <span className="text-xl">🧠</span>
            <span>Process</span>
            <span className="text-[10px] text-slate-400">{isEn ? "CPU Brain" : "Pemroses / Otak"}</span>
          </button>

          <button
            onClick={() => handleChoice('storage')}
            disabled={!!feedback}
            className="p-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-200 font-bold text-xs sm:text-sm flex flex-col items-center gap-1.5 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            <span className="text-xl">💾</span>
            <span>Storage</span>
            <span className="text-[10px] text-slate-400">{isEn ? "RAM / SSD" : "Penyimpanan Data"}</span>
          </button>

          <button
            onClick={() => handleChoice('output')}
            disabled={!!feedback}
            className="p-3.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/40 text-purple-200 font-bold text-xs sm:text-sm flex flex-col items-center gap-1.5 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            <span className="text-xl">🖥️</span>
            <span>Output</span>
            <span className="text-[10px] text-slate-400">{isEn ? "Screen / Audio" : "Keluaran Informasi"}</span>
          </button>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => handleChoice('os')}
          disabled={!!feedback}
          className="p-4 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 border border-blue-500/40 text-blue-200 font-bold text-sm flex flex-col items-center gap-1.5 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
        >
          <span className="text-2xl">🪟</span>
          <span>{isEn ? "Operating System (OS)" : "Sistem Operasi (OS)"}</span>
          <span className="text-[10px] text-slate-400">Windows, Linux, Android</span>
        </button>

        <button
          onClick={() => handleChoice('aplikasi')}
          disabled={!!feedback}
          className="p-4 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-200 font-bold text-sm flex flex-col items-center gap-1.5 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
        >
          <span className="text-2xl">🎨</span>
          <span>{isEn ? "Application Software" : "Program Aplikasi"}</span>
          <span className="text-[10px] text-slate-400">Word, Chrome, Canva, Games</span>
        </button>

        <button
          onClick={() => handleChoice('utilitas')}
          disabled={!!feedback}
          className="p-4 rounded-xl bg-amber-950/60 hover:bg-amber-900/60 border border-amber-500/40 text-amber-200 font-bold text-sm flex flex-col items-center gap-1.5 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
        >
          <span className="text-2xl">🛡️</span>
          <span>{isEn ? "Utility Software" : "Program Utilitas"}</span>
          <span className="text-[10px] text-slate-400">Antivirus, Zip, Cleaners</span>
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Game Level Selector & Stats Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg flex flex-wrap items-center justify-between gap-4">
        
        {/* Level Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">
            {isEn ? "Choose Level:" : "Pilih Level:"}
          </span>
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
            <button
              onClick={() => setLevel(1)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                level === 1
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? "Lvl 1: 3 Pillars" : "Lvl 1: Trio Pilar"}
            </button>
            <button
              onClick={() => setLevel(2)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                level === 2
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? "Lvl 2: Hardware Master" : "Lvl 2: Hardware Master"}
            </button>
            <button
              onClick={() => setLevel(3)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                level === 3
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isEn ? "Lvl 3: Software Sleuth" : "Lvl 3: Software Sleuth"}
            </button>
          </div>
        </div>

        {/* Live Score & Streak */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-200 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>{isEn ? "Score:" : "Skor:"}</span>
            <span className="text-cyan-300 font-mono text-sm">{score} XP</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-950/60 border border-amber-500/30 text-amber-200 text-xs font-bold">
            <Flame className={`w-3.5 h-3.5 ${streak > 1 ? 'text-orange-500 animate-bounce' : 'text-slate-500'}`} />
            <span>Combo:</span>
            <span className="text-orange-400 font-mono text-sm">x{streak}</span>
          </div>

          <button
            onClick={() => startNewGame(level)}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title={isEn ? "Restart Level" : "Mulai Ulang Soal"}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Game Screen */}
      {!isGameOver && currentItem ? (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
          
          {/* Progress Header */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400">
                {isEn
                  ? `Card ${currentIndex + 1} of ${itemsPool.length}`
                  : `Kartu ${currentIndex + 1} dari ${itemsPool.length}`}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                {level === 1
                  ? (isEn ? 'Level 1: Hardware / Software / Brainware' : 'Level 1: Hardware / Software / Brainware')
                  : level === 2
                  ? (isEn ? 'Level 2: Input / Process / Output / Storage' : 'Level 2: Input / Proses / Output / Storage')
                  : (isEn ? 'Level 3: OS / Applications / Utilities' : 'Level 3: OS / Aplikasi / Utilitas')}
              </span>
            </div>

            <div className="w-32 bg-slate-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / itemsPool.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Current Component Card to Group */}
          <div className="max-w-xl mx-auto my-4 text-center">
            <div className="inline-block p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-950 to-indigo-950/50 border-2 border-indigo-500/40 shadow-2xl relative">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-xl shadow-cyan-500/20 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-cyan-300">
                  <DynamicIcon name={currentItem.iconName} className="w-10 h-10" />
                </div>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white mb-2">
                {currentItem.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                {currentItem.description}
              </p>

              {currentItem.analogi && (
                <div className="mt-3 text-[11px] text-indigo-300 italic">
                  💡 Hint: "{currentItem.analogi}"
                </div>
              )}
            </div>
          </div>

          {/* Target Grouping Choice Buttons */}
          <div className="mt-8 max-w-2xl mx-auto">
            <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              👉 {isEn ? "Click the matching category for the card above:" : "Klik kategori yang tepat untuk kartu di atas:"}
            </p>
            {renderCategoryButtons()}
          </div>

          {/* Instant Educational Feedback Banner */}
          {feedback && (
            <div
              className={`mt-6 p-4 rounded-2xl border transition-all animate-fadeIn ${
                feedback.isCorrect
                  ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-200'
                  : 'bg-rose-950/70 border-rose-500/50 text-rose-200'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  {feedback.isCorrect ? (
                    <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h4 className="font-bold text-sm text-white mb-1">
                      {feedback.isCorrect ? (isEn ? 'Correct Answer! 🎉' : 'Jawaban Benar! 🎉') : (isEn ? 'Keep Learning! 💡' : 'Ups, Belum Tepat! 💡')}
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-200 mb-2">
                      {feedback.text}
                    </p>
                    {feedback.funFact && (
                      <p className="text-[11px] text-amber-300 font-medium bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                        ⭐ <strong>Fun Fact:</strong> {feedback.funFact}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleNextCard}
                  className="px-4 py-2 rounded-xl bg-white text-slate-950 font-bold text-xs shrink-0 hover:bg-slate-200 flex items-center gap-1 shadow-md transition-transform active:scale-95"
                >
                  <span>{isEn ? "Next" : "Lanjut"}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      ) : isGameOver ? (
        /* Game Over Summary Screen */
        <div className="p-8 rounded-3xl bg-slate-900 border border-indigo-500/30 text-center max-w-2xl mx-auto shadow-2xl">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-500 mx-auto mb-4 flex items-center justify-center text-slate-950 shadow-xl shadow-amber-500/20">
            <Trophy className="w-10 h-10" />
          </div>

          <h2 className="text-2xl font-heading font-extrabold text-white mb-2">
            {isEn ? "Category Challenge Complete!" : "Misi Pengelompokan Selesai!"}
          </h2>
          <p className="text-slate-300 text-sm mb-6">
            {isEn
              ? `Outstanding! You successfully tackled the Level ${level} challenges.`
              : `Hebat sekali! Kamu telah menyelesaikan tantangan Level ${level} dengan cemerlang.`}
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-6">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                {isEn ? "XP Gained" : "Skor Didapat"}
              </span>
              <span className="text-xl font-bold font-mono text-cyan-400">{score} XP</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                {isEn ? "Correct Cards" : "Jawaban Benar"}
              </span>
              <span className="text-xl font-bold font-mono text-emerald-400">
                {userAnswers.filter((a) => a.correct).length} / {itemsPool.length}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                {isEn ? "Max Combo" : "Combo Tertinggi"}
              </span>
              <span className="text-xl font-bold font-mono text-amber-400">x{highestStreak}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => startNewGame(level)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              {isEn ? "Replay This Level" : "Mainkan Lagi Level Ini"}
            </button>

            {level < 3 && (
              <button
                onClick={() => setLevel((prev) => (prev + 1) as GameLevel)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
              >
                <span>{isEn ? `Advance to Level ${level + 1}` : `Tantang Level ${level + 1}`}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};
