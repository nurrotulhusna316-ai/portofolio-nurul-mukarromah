import { GraduationCap, BookOpen, Layers, Sparkles, Building2, LaptopMinimal, CheckCircle } from 'lucide-react';

export default function Education() {
  const learningFocus = [
    {
      title: 'Dasar & Konsep Sistem Informasi',
      desc: 'Memahami bagaimana informasi dikumpulkan, diproses, dan didistribusikan untuk mendukung pengambilan keputusan organisasi.',
    },
    {
      title: 'Manajemen Basis Data & Logika Sistem',
      desc: 'Mempelajari struktur data relasional, pengorganisasian tabel, dan alur integritas informasi sistem.',
    },
    {
      title: 'Desain Presentasi & Komunikasi Informasi',
      desc: 'Mengeksplorasi penyajian data dan gagasan berbasis visual yang rapi, komunikatif, dan mudah dipahami publik.',
    },
    {
      title: 'Pengembangan & Wawasan Bisnis Digital',
      desc: 'Mengkaji integrasi solusi digital untuk memperkuat operasional kewirausahaan dan pemberdayaan ekonomi lokal.',
    },
  ];

  return (
    <section id="pendidikan" className="py-20 bg-slate-50 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-violet-600 uppercase mb-2">
            Riwayat Pembelajaran
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Pendidikan
          </h2>
          <div className="w-12 h-1 bg-violet-600 rounded-full" />
        </div>

        {/* Main Education Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Institution Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7" />
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 block mb-1">
                    Pendidikan Tinggi
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                    Universitas Komputama
                  </h3>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs">Program Studi</span>
                    <span className="font-semibold text-slate-800">Sistem Informasi</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs">Jenjang & Status</span>
                    <span className="font-semibold text-violet-700">Mahasiswa Aktif</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs">Bidang Peminatan</span>
                    <span className="font-medium text-slate-700">Teknologi & Bisnis Digital</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Menempuh perkuliahan dengan dedikasi untuk memahami arsitektur sistem informasi, perancangan basis data, serta implementasi teknologi tepat guna yang dapat mendorong peluang wirausaha.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Timeline / Learning Track */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-violet-600" />
                  <h4 className="text-base font-bold text-slate-900">
                    Fokus Pembelajaran & Pendalaman Keilmuan
                  </h4>
                </div>
                <span className="text-xs text-slate-500">Jalur Kurikulum</span>
              </div>

              {/* Minimalist Timeline Line */}
              <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-violet-200">
                {learningFocus.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-6 sm:-left-8 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-violet-600 group-hover:scale-125 transition-transform" />
                    
                    <div className="bg-slate-50 group-hover:bg-violet-50/50 border border-slate-200/80 group-hover:border-violet-200 rounded-xl p-4 transition-colors">
                      <h5 className="text-sm font-bold text-slate-900 mb-1">
                        {item.title}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Note on Transparency & Academic Ethics */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <Sparkles className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                <span>Portofolio menyajikan informasi pembelajaran aktual dan transparan selama masa studi aktif di Universitas Komputama.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
