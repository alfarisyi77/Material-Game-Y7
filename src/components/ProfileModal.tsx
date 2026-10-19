import React, { useState } from 'react';
import { StudentProfile, Language } from '../types';
import { X, Check, User } from 'lucide-react';
import { sounds } from '../utils/audio';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile;
  onSaveProfile: (newProfile: Partial<StudentProfile>) => void;
  lang: Language;
}

const AVATAR_OPTIONS = ['🤖', '🧑‍💻', '🚀', '⚡', '🎮', '🦉', '🦊', '👾', '💻', '⭐', '🎓', '🛡️'];

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  lang,
}) => {
  const isEn = lang === 'en';
  const [name, setName] = useState<string>(profile.name);
  const [avatar, setAvatar] = useState<string>(profile.avatar);
  const [grade, setGrade] = useState<string>(profile.grade);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playCorrect();
    onSaveProfile({
      name: name.trim() || (isEn ? 'Grade 7 Student' : 'Siswa Kelas 7'),
      avatar,
      grade,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl relative">
        <button
          onClick={() => { sounds.playClick(); onClose(); }}
          className="absolute top-4 right-4 p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/30 text-indigo-400 flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-white">
              {isEn ? "Student Profile Settings" : "Profil Pelajar Ceria"}
            </h3>
            <p className="text-xs text-slate-400">
              {isEn ? "Customize your name & avatar for the certificate" : "Sesuaikan nama & avatarmu untuk sertifikat"}
            </p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          {/* Avatar Selector */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              {isEn ? "Select Character Avatar:" : "Pilih Avatar Karakter:"}
            </label>
            <div className="grid grid-cols-6 gap-2">
              {AVATAR_OPTIONS.map((em) => (
                <button
                  type="button"
                  key={em}
                  onClick={() => { sounds.playClick(); setAvatar(em); }}
                  className={`h-11 rounded-xl text-xl flex items-center justify-center transition-all ${
                    avatar === em
                      ? 'bg-indigo-600 text-white ring-2 ring-indigo-400 scale-105 shadow-md'
                      : 'bg-slate-950 border border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {em}
                </button>
              ))}
            </div>
          </div>

          {/* Student Name Input */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              {isEn ? "Student Full Name:" : "Nama Lengkap Siswa:"}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={isEn ? "e.g. Alex Henderson" : "Contoh: Faris Ananda Pratama"}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              required
              maxLength={40}
            />
          </div>

          {/* Grade / Class Input */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              {isEn ? "Class / Section:" : "Kelas / Rombel:"}
            </label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            >
              <option value="Grade 7 CS">Grade 7 CS (Informatics)</option>
              <option value="Grade 7-A">Grade 7-A</option>
              <option value="Grade 7-B">Grade 7-B</option>
              <option value="Grade 7-C">Grade 7-C</option>
              <option value="Grade 7-D">Grade 7-D</option>
              <option value="Kelas 7 SMP">Kelas 7 SMP</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <Check className="w-4 h-4" />
            {isEn ? "Save Profile Changes" : "Simpan Perubahan Profil"}
          </button>
        </form>
      </div>
    </div>
  );
};
