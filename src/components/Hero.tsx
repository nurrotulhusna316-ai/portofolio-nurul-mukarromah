import { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen, Layers, Laptop, Camera, CheckCircle2, RotateCcw } from 'lucide-react';
import { DEFAULT_AVATAR } from '../data/portfolioData';

interface HeroProps {
  avatarUrl?: string;
  onUpdateAvatar?: (url: string) => void;
}

export default function Hero({ avatarUrl, onUpdateAvatar }: HeroProps) {
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photoInput, setPhotoInput] = useState('');
  const [imgError, setImgError] = useState(false);

  const displayPhoto = avatarUrl || DEFAULT_AVATAR;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSavePhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateAvatar && photoInput.trim()) {
      onUpdateAvatar(photoInput.trim());
      setImgError(false);
    }
    setShowPhotoModal(false);
  };

  const handleResetToUploaded = () => {
    if (onUpdateAvatar) {
      onUpdateAvatar(DEFAULT_AVATAR);
      setImgError(false);
    }
    setShowPhotoModal(false);
  };

  return (
    <section id="beranda" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial Kicker with clean text separator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-900/30 border border-violet-700/30 text-violet-300 text-xs sm:text-sm font-medium w-fit mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span>Mahasiswa Sistem Informasi</span>
              <span aria-hidden="true" className="text-violet-500">·</span>
              <span className="text-slate-300">Universitas Komputama</span>
            </div>

            {/* Greeting */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-violet-200 mb-2">
              Halo, saya Nurul Mukarromah.
            </h2>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-2xl">
              Belajar Teknologi, <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-indigo-200 to-white">Menciptakan Peluang</span>, Membangun Masa Depan.
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Saya adalah mahasiswa Sistem Informasi yang tertarik pada teknologi, kreativitas, dan pengembangan bisnis digital.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('tentang')}
                className="px-6 py-3.5 bg-violet-600 hover:bg-violet-500 active:scale-95 text-white font-medium text-sm rounded-xl shadow-lg shadow-violet-900/40 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Kenali Saya</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('proyek')}
                className="px-6 py-3.5 bg-slate-800/90 hover:bg-slate-700/90 hover:border-violet-500/50 active:scale-95 text-slate-200 hover:text-white font-medium text-sm rounded-xl border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Lihat Portofolio</span>
                <Layers className="w-4 h-4 text-violet-400" />
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Eksplorasi Perancangan Sistem</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Desain Presentasi Kreatif</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Aspirasi Wirausaha Digital</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Profile Photo Anchor */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-600 rounded-3xl blur opacity-35 group-hover:opacity-100 transition duration-1000" />

              {/* Main Card Container */}
              <div className="relative bg-slate-900 border border-slate-800/90 rounded-3xl overflow-hidden shadow-2xl">
                {/* Visual Image Container - Perfectly framed for portrait */}
                <div className="relative aspect-[4/5] w-full bg-slate-950 overflow-hidden">
                  {!imgError && displayPhoto ? (
                    <img
                      src={displayPhoto}
                      alt="Foto Profil Resmi Nurul Mukarromah - Mahasiswa Sistem Informasi Universitas Komputama"
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    /* Fallback to styled workstation render */
                    <img
                      src="/src/assets/images/hero_student_workspace_1792839786176.jpg"
                      alt="Ilustrasi Ruang Belajar Sistem Informasi Nurul Mukarromah"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Gradient Scrim for Contrast & Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Top Badge: Verified Authentic Identity */}
                  <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold text-white tracking-wide">
                      Foto Profil Resmi
                    </span>
                  </div>

                  {/* Photo Customizer Trigger */}
                  <button
                    onClick={() => setShowPhotoModal(true)}
                    className="absolute top-4 right-4 bg-slate-900/85 backdrop-blur-md border border-white/15 hover:border-violet-400 p-2 rounded-xl text-slate-300 hover:text-white transition-all cursor-pointer shadow-lg group"
                    title="Sesuaikan atau ganti foto profil"
                    aria-label="Sesuaikan foto profil"
                  >
                    <Camera className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>

                  {/* Bottom Identity Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-white leading-tight">
                          Nurul Mukarromah
                        </h3>
                        <p className="text-xs text-violet-300 mt-0.5">
                          Sistem Informasi · Univ. Komputama
                        </p>
                      </div>
                      <div className="px-2.5 py-1 bg-violet-600/30 border border-violet-500/40 rounded-lg text-[11px] font-medium text-violet-200">
                        Mahasiswa
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Sub-Banner: Clean Academic Metadata */}
                <div className="p-5 bg-slate-900/95 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Laptop className="w-4 h-4 text-violet-400" />
                      <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                        Profil Akademik
                      </span>
                    </div>
                    <span className="text-xs text-violet-400 font-medium">Universitas Komputama</span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Fokus studi pada integrasi teknologi informasi, pemodelan sistem, dan pemanfaatan perangkat digital untuk pemecahan masalah bisnis.
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-slate-800/60 rounded-xl p-2.5 border border-slate-700/50">
                      <span className="block text-xs font-semibold text-white">Jawa Timur</span>
                      <span className="block text-[11px] text-slate-400">Domisili Genteng</span>
                    </div>
                    <div className="bg-slate-800/60 rounded-xl p-2.5 border border-slate-700/50">
                      <span className="block text-xs font-semibold text-white">Menulis & Menonton</span>
                      <span className="block text-[11px] text-slate-400">Hobi & Eksplorasi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal to Upload/Set Authentic Photo if User Wants to change or reset */}
      {showPhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 text-white shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Camera className="w-5 h-5 text-violet-400" />
              <span>Kelola Foto Profil</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Website saat ini menggunakan foto profil asli Nurul Mukarromah. Anda dapat memasukkan tautan foto profil baru atau mengembalikan ke foto asli yang telah diunggah kapan saja.
            </p>

            <form onSubmit={handleSavePhoto} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  URL / Tautan Foto Baru (Opsional)
                </label>
                <input
                  type="url"
                  placeholder="https://... (tautan foto Anda)"
                  value={photoInput}
                  onChange={(e) => setPhotoInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleResetToUploaded}
                  className="px-3.5 py-2 text-xs font-medium text-violet-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Foto Asli Bawaan</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPhotoModal(false)}
                    className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-xl transition-colors cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-medium text-white bg-violet-600 hover:bg-violet-500 rounded-xl transition-colors cursor-pointer"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
