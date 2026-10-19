import React, { useState, useEffect } from 'react';
import { getIpoScenarios } from '../data/ipoGameData';
import { IpoScenario, IpoScenarioCard, Language } from '../types';
import { DynamicIcon } from './DynamicIcon';
import {
  RotateCcw,
  ArrowRight,
  CheckCircle,
  XCircle,
  Play,
  Layers,
} from 'lucide-react';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

interface IpoFlowGameProps {
  lang: Language;
  onEarnReward: (points: number, stars: number) => void;
}

export const IpoFlowGame: React.FC<IpoFlowGameProps> = ({ lang, onEarnReward }) => {
  const isEn = lang === 'en';
  const scenarios = getIpoScenarios(lang);
  const [scenarioIndex, setScenarioIndex] = useState<number>(0);
  const currentScenario: IpoScenario = scenarios[scenarioIndex] || scenarios[0];

  // Cards available to place (scrambled)
  const [availableCards, setAvailableCards] = useState<IpoScenarioCard[]>([]);
  // Slots: index 0: input, index 1: process, index 2: storage, index 3: output
  const [placedSlots, setPlacedSlots] = useState<(IpoScenarioCard | null)[]>([null, null, null, null]);

  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [verificationResult, setVerificationResult] = useState<{
    success: boolean;
    slotErrors: boolean[];
    message: string;
  } | null>(null);

  const [activeFlowAnimationStep, setActiveFlowAnimationStep] = useState<number>(-1);

  // Initialize scenario when scenarioIndex or lang changes
  useEffect(() => {
    initScenario(scenarioIndex);
  }, [scenarioIndex, lang]);

  const initScenario = (idx: number) => {
    sounds.playClick();
    const sc = scenarios[idx] || scenarios[0];
    const scrambled = [...sc.cards].sort(() => 0.5 - Math.random());
    setAvailableCards(scrambled);
    setPlacedSlots([null, null, null, null]);
    setIsVerifying(false);
    setVerificationResult(null);
    setActiveFlowAnimationStep(-1);
  };

  const handleSelectCardToSlot = (card: IpoScenarioCard) => {
    sounds.playClick();
    const emptyIndex = placedSlots.findIndex((slot) => slot === null);
    if (emptyIndex === -1) return;

    const newSlots = [...placedSlots];
    newSlots[emptyIndex] = card;
    setPlacedSlots(newSlots);
    setAvailableCards(availableCards.filter((c) => c.id !== card.id));
    setVerificationResult(null);
  };

  const handleRemoveFromSlot = (slotIndex: number) => {
    sounds.playClick();
    const card = placedSlots[slotIndex];
    if (!card) return;

    const newSlots = [...placedSlots];
    newSlots[slotIndex] = null;
    setPlacedSlots(newSlots);
    setAvailableCards([...availableCards, card]);
    setVerificationResult(null);
  };

  const handleCheckSequence = () => {
    sounds.playClick();
    setIsVerifying(true);

    const slotErrors: boolean[] = [false, false, false, false];
    let allCorrect = true;

    currentScenario.correctOrder.forEach((expectedId, idx) => {
      const placed = placedSlots[idx];
      if (!placed || placed.id !== expectedId) {
        slotErrors[idx] = true;
        allCorrect = false;
      }
    });

    if (allCorrect) {
      setActiveFlowAnimationStep(0);
      sounds.playClick();

      setTimeout(() => {
        sounds.playClick();
        setActiveFlowAnimationStep(1);
      }, 700);

      setTimeout(() => {
        sounds.playClick();
        setActiveFlowAnimationStep(2);
      }, 1400);

      setTimeout(() => {
        sounds.playClick();
        setActiveFlowAnimationStep(3);
      }, 2100);

      setTimeout(() => {
        sounds.playFanfare();
        try {
          confetti({
            particleCount: 90,
            spread: 80,
            origin: { y: 0.6 },
          });
        } catch {
          // ignore
        }
        setIsVerifying(false);
        setVerificationResult({
          success: true,
          slotErrors: [false, false, false, false],
          message: isEn
            ? 'Superb! The IPO Data Flow executed flawlessly from input to output!'
            : 'Luar Biasa! Alur Siklus IPO Sempurna & Data Mengalir Mulus!',
        });
        onEarnReward(80, 1);
      }, 2800);
    } else {
      sounds.playWrong();
      setIsVerifying(false);
      setVerificationResult({
        success: false,
        slotErrors,
        message: isEn
          ? 'Some cards are misplaced. Follow the natural sequence: Input ➔ Process ➔ Storage ➔ Output!'
          : 'Ada kartu yang belum pas posisinya. Perhatikan tahapan Input ➔ Proses ➔ Storage ➔ Output!',
      });
    }
  };

  const handleNextMission = () => {
    sounds.playClick();
    if (scenarioIndex + 1 < scenarios.length) {
      setScenarioIndex((prev) => prev + 1);
    } else {
      setScenarioIndex(0);
    }
  };

  const allSlotsFilled = placedSlots.every((s) => s !== null);

  const slotLabels = isEn
    ? [
        { title: '1. INPUT', desc: 'Raw Data Ingestion', color: 'border-blue-500/50 bg-blue-950/30' },
        { title: '2. PROCESS', desc: 'CPU Logic Compute', color: 'border-amber-500/50 bg-amber-950/30' },
        { title: '3. STORAGE', desc: 'Persistent Memory', color: 'border-emerald-500/50 bg-emerald-950/30' },
        { title: '4. OUTPUT', desc: 'Rendered Information', color: 'border-purple-500/50 bg-purple-950/30' },
      ]
    : [
        { title: '1. INPUT', desc: 'Alat Masukan Data', color: 'border-blue-500/50 bg-blue-950/30' },
        { title: '2. PROSES', desc: 'Pengolah Logika', color: 'border-amber-500/50 bg-amber-950/30' },
        { title: '3. STORAGE', desc: 'Penyimpan Data', color: 'border-emerald-500/50 bg-emerald-950/30' },
        { title: '4. OUTPUT', desc: 'Hasil Keluaran', color: 'border-purple-500/50 bg-purple-950/30' },
      ];

  return (
    <div className="space-y-6">
      {/* Mission Header & Selector */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
            {isEn
              ? `Select Mission Scenario (${scenarioIndex + 1} of ${scenarios.length}):`
              : `Pilih Skenario Misi (${scenarioIndex + 1} dari ${scenarios.length}):`}
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            {scenarios.map((sc, i) => (
              <button
                key={sc.id}
                onClick={() => setScenarioIndex(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  scenarioIndex === i
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {isEn ? `Mission ${i + 1}` : `Misi ${i + 1}`}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => initScenario(scenarioIndex)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {isEn ? "Shuffle Cards" : "Acak Ulang Kartu"}
        </button>
      </div>

      {/* Main Scenario Mission Board */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-purple-500/30 shadow-2xl">
        
        {/* Scenario Story Header */}
        <div className="max-w-3xl mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
              {currentScenario.categoryBadge}
            </span>
            <span className="text-xs text-slate-400">{isEn ? "Real-World Case" : "Kasus Nyata"}</span>
          </div>

          <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-white mb-2">
            {currentScenario.title}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-3">
            {currentScenario.story}
          </p>
          <p className="text-xs text-cyan-300 font-medium">
            🎯 <strong>{isEn ? "Challenge: " : "Tantangan: "}</strong>
            {isEn
              ? "Place the 4 component cards below into the correct sequence: [INPUT] ➔ [PROCESS] ➔ [STORAGE] ➔ [OUTPUT]!"
              : "Susun 4 kartu komponen di bawah ini ke dalam slot alur siklus: [INPUT] ➔ [PROSES] ➔ [STORAGE] ➔ [OUTPUT] dengan urutan yang benar!"}
          </p>
        </div>

        {/* 4 Sequential Slots (Drop Targets) */}
        <div className="my-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {placedSlots.map((slot, idx) => {
              const label = slotLabels[idx];
              const isAnimated = activeFlowAnimationStep === idx;
              const hasError = verificationResult?.slotErrors[idx];

              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border-2 transition-all min-h-[170px] flex flex-col justify-between relative ${
                    isAnimated
                      ? 'border-yellow-400 bg-yellow-950/40 ring-4 ring-yellow-400/50 scale-105 shadow-2xl'
                      : hasError
                      ? 'border-rose-500 bg-rose-950/30 ring-2 ring-rose-500/50'
                      : slot
                      ? 'border-indigo-500/50 bg-slate-950/80'
                      : `${label.color} border-dashed`
                  }`}
                >
                  {/* Slot Header */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-300 tracking-wider">
                      {label.title}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {label.desc}
                    </span>
                  </div>

                  {/* Slot Content */}
                  {slot ? (
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex-1 flex flex-col justify-between text-left">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-7 h-7 rounded-lg bg-indigo-600/30 text-cyan-300 flex items-center justify-center">
                            <DynamicIcon name={slot.iconName} className="w-4 h-4" />
                          </div>
                          <h4 className="text-xs font-bold text-white line-clamp-1">
                            {slot.name}
                          </h4>
                        </div>
                        <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                          {slot.description}
                        </p>
                      </div>

                      {/* Remove Button */}
                      {!verificationResult?.success && (
                        <button
                          onClick={() => handleRemoveFromSlot(idx)}
                          className="mt-2 text-[10px] text-rose-400 hover:text-rose-300 font-bold underline self-end"
                        >
                          {isEn ? "Eject Card" : "Lepas Kartu"}
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-2 text-slate-500">
                      <Layers className="w-6 h-6 mb-1 opacity-50" />
                      <span className="text-xs font-medium">{isEn ? "Empty Slot" : "Slot Kosong"}</span>
                      <span className="text-[10px]">{isEn ? "Click card below" : "Klik kartu di bawah"}</span>
                    </div>
                  )}

                  {/* Visual Arrow connector between slots */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center shadow">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Available Cards Pool to Pick */}
        <div className="mt-8 p-4 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {isEn ? "Available Cards (Click to insert into next slot):" : "Pilihan Kartu Komponen (Klik untuk memasukkan ke slot):"}
            </span>
            <span className="text-xs text-slate-400">
              {isEn ? `${availableCards.length} cards remaining` : `${availableCards.length} kartu tersisa`}
            </span>
          </div>

          {availableCards.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {availableCards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => handleSelectCardToSlot(card)}
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800/90 border border-slate-800 hover:border-cyan-500/50 text-left transition-all hover:scale-[1.02] active:scale-95 group"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      <DynamicIcon name={card.iconName} className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {card.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {card.description}
                  </p>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-xs text-center py-2 text-slate-500 italic">
              {isEn
                ? 'All cards are placed in the slots above! Click "Test IPO Data Flow" to verify.'
                : 'Semua kartu sudah dimasukkan ke dalam slot di atas! Silakan klik tombol "Uji Alur Siklus IPO".'}
            </p>
          )}
        </div>

        {/* Verification Button & Result */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            {allSlotsFilled
              ? (isEn ? "All slots filled! Ready to run data stream." : "Semua slot terisi! Ayo verifikasi alur datanya.")
              : (isEn
                  ? `${placedSlots.filter((s) => s === null).length} empty slots remaining.`
                  : `Masih ada ${placedSlots.filter((s) => s === null).length} slot yang kosong.`)}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCheckSequence}
              disabled={!allSlotsFilled || isVerifying || verificationResult?.success}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-500/25 disabled:opacity-40 transition-transform active:scale-95"
            >
              <Play className="w-4 h-4 fill-white" />
              {isVerifying
                ? (isEn ? 'Streaming Data Signals...' : 'Mengalirkan Sinyal Data...')
                : (isEn ? 'Test IPO Data Flow' : 'Uji Alur Siklus IPO')}
            </button>
          </div>
        </div>

        {/* Verification Result Banner */}
        {verificationResult && (
          <div
            className={`mt-6 p-5 rounded-2xl border transition-all ${
              verificationResult.success
                ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-200'
                : 'bg-rose-950/70 border-rose-500/50 text-rose-200'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                {verificationResult.success ? (
                  <CheckCircle className="w-7 h-7 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-7 h-7 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <h4 className="font-heading font-bold text-base text-white mb-1">
                    {verificationResult.success
                      ? (isEn ? 'IPO Cycle Verified! 🎉' : 'Siklus IPO Sukses! 🎉')
                      : (isEn ? 'Sequence Misaligned! 🤔' : 'Urutan Alur Masih Keliru! 🤔')}
                  </h4>
                  <p className="text-xs text-slate-200 mb-3 leading-relaxed">
                    {verificationResult.message}
                  </p>

                  {/* Educational explanation */}
                  {verificationResult.success && (
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                      <strong className="text-cyan-300 block mb-1">
                        {isEn ? "💡 Real-World Technical Data Flow:" : "💡 Penjelasan Alur Nyata:"}
                      </strong>
                      {currentScenario.explanation}
                    </div>
                  )}
                </div>
              </div>

              {verificationResult.success && (
                <button
                  onClick={handleNextMission}
                  className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 shrink-0 shadow-lg transition-transform active:scale-95"
                >
                  <span>{isEn ? "Next Mission" : "Misi Berikutnya"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
