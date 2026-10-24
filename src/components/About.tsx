import { User, MapPin, Compass, BookOpen, Film, Heart, Sparkles, Target } from 'lucide-react';
import { DEFAULT_AVATAR } from '../data/portfolioData';

interface AboutProps {
  avatarUrl?: string;
}

export default function About({ avatarUrl }: AboutProps) {
  const displayPhoto = avatarUrl || DEFAULT_AVATAR;
  return (
    <section id="tentang" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-violet-600 uppercase mb-2">
            Profil Pribadi
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Tentang Saya
          </h2>
          <div className="w-12 h-1 bg-violet-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Bio Statement */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-violet-600" />
                <span>Semangat Belajar & Berproses</span>
              </h3>
              
              {/* Exact user-provided description */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-6">
                “Saya adalah mahasiswa Sistem Informasi yang memiliki semangat untuk terus belajar dan mengembangkan diri. Saya tertarik pada perkembangan teknologi, dunia digital, dan kreativitas. Melalui perkuliahan dan berbagai proyek, saya ingin meningkatkan kemampuan serta memperoleh pengalaman yang bermanfaat. Saya memiliki cita-cita menjadi pengusaha yang mampu memanfaatkan teknologi untuk menciptakan peluang dan memberikan manfaat bagi orang lain.”
              </p>

              {/* Core Philosophy Quote / Highlight */}
              <div className="pt-5 border-t border-slate-200/70 flex items-center justify-between text-xs sm:text-sm text-slate-500">
                <span className="font-medium text-slate-800">Nurul Mukarromah</span>
                <span>Mahasiswa Sistem Informasi · Universitas Komputama</span>
              </div>
            </div>

            {/* Quick Informational Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-5 hover:border-violet-300 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs text-slate-500 mb-1">Asal & Domisili</div>
                <div className="text-base font-semibold text-slate-900">Genteng, Jawa Timur</div>
                <div className="text-xs text-slate-600 mt-1">
                  Tumbuh dengan antusiasme terhadap kemajuan daerah dan potensi wirausaha digital lokal.
                </div>
              </div>

              <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-5 hover:border-violet-300 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="text-xs text-slate-500 mb-1">Hobi & Kegemaran</div>
                <div className="text-base font-semibold text-slate-900">Menulis & Menonton</div>
                <div className="text-xs text-slate-600 mt-1">
                  Mengekspresikan gagasan lewat tulisan dan menggali wawasan lewat tayangan edukatif serta film inspiratif.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Identity Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
              {/* Background ambient corner */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-violet-600/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-violet-400/40 shadow-lg shadow-violet-900/40 shrink-0 bg-slate-800">
                  <img
                    src={displayPhoto}
                    alt="Nurul Mukarromah"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Nurul Mukarromah</h4>
                  <p className="text-xs text-violet-300">Biodata Lengkap Mahasiswa</p>
                </div>
              </div>

              {/* Data Table-like list with clear, unboxed metadata */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400 text-xs font-medium">Nama Lengkap</span>
                  <span className="text-white font-semibold text-right text-xs sm:text-sm">Nurul Mukarromah</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400 text-xs font-medium">Status Akademik</span>
                  <span className="text-white font-semibold text-right text-xs sm:text-sm">Mahasiswa Aktif</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400 text-xs font-medium">Program Studi</span>
                  <span className="text-violet-300 font-semibold text-right text-xs sm:text-sm">Sistem Informasi</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400 text-xs font-medium">Perguruan Tinggi</span>
                  <span className="text-white font-semibold text-right text-xs sm:text-sm">Universitas Komputama</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400 text-xs font-medium">Daerah Asal</span>
                  <span className="text-white font-semibold text-right text-xs sm:text-sm">Jawa Timur</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400 text-xs font-medium">Domisili</span>
                  <span className="text-white font-semibold text-right text-xs sm:text-sm">Genteng</span>
                </div>

                <div className="flex items-start justify-between py-2">
                  <span className="text-slate-400 text-xs font-medium">Hobi Utama</span>
                  <span className="text-violet-200 font-medium text-right text-xs sm:text-sm">Menulis dan Menonton</span>
                </div>
              </div>

              {/* Goal callout box */}
              <div className="mt-6 p-4 rounded-xl bg-violet-900/30 border border-violet-700/40">
                <div className="flex items-center gap-2 mb-1.5 text-violet-300 text-xs font-semibold">
                  <Target className="w-4 h-4" />
                  <span>Cita-Cita & Tujuan Masa Depan</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Menjadi pengusaha yang mampu memanfaatkan teknologi untuk menciptakan peluang dan memberikan manfaat bagi orang lain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
