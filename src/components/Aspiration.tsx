import { TrendingUp, Sparkles, Lightbulb, Compass, Rocket, ShieldCheck, HeartHandshake, CheckCircle } from 'lucide-react';

export default function Aspiration() {
  const pillars = [
    {
      icon: <TrendingUp className="w-6 h-6 text-violet-400" />,
      title: 'Penguasaan Sistem & Teknologi',
      desc: 'Terus memperdalam pemahaman logika pemrograman, pengelolaan data, dan infrastruktur sistem informasi agar mampu merancang solusi yang handal.'
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
      title: 'Kreativitas & Desain Presentasi',
      desc: 'Menggabungkan daya imajinasi visual, komunikasi persuasif, dan tata letak yang menarik untuk menyampaikan gagasan teknologi secara mudah.'
    },
    {
      icon: <Rocket className="w-6 h-6 text-indigo-400" />,
      title: 'Technopreneurship Berdampak',
      desc: 'Membangun rintisan usaha digital yang tidak hanya bernilai komersial, melainkan juga memberdayakan masyarakat dan membuka lapangan kerja.'
    }
  ];

  return (
    <section id="cita-cita" className="py-20 md:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Ambient background spheres */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-900/40 border border-violet-700/40 text-violet-300 text-xs font-semibold mb-4">
            <Compass className="w-3.5 h-3.5 text-violet-400" />
            <span>Visi & Cita-Cita Masa Depan</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Langkah Kecil Menuju Masa Depan Besar.
          </h2>

          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              “Saya ingin terus berkembang di bidang Sistem Informasi, memperluas wawasan teknologi, dan membangun keterampilan yang berguna. Cita-cita saya adalah menjadi pengusaha yang mampu menggabungkan teknologi dan kreativitas untuk menciptakan bisnis digital yang inovatif serta bermanfaat bagi masyarakat.”
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800/80 text-xs text-violet-300 font-medium">
              — Nurul Mukarromah, Mahasiswa Sistem Informasi Universitas Komputama
            </div>
          </div>
        </div>

        {/* 3 Pillars of Digital Business and Technology Growth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 border border-slate-800 hover:border-violet-500/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-slate-900/90 hover:scale-[1.02] shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-violet-400 font-medium">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Pilar Pengembangan Diri</span>
              </div>
            </div>
          ))}
        </div>

        {/* Inspirational Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-violet-950/60 to-indigo-950/60 border border-violet-800/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-600/30 border border-violet-500/40 text-violet-300 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Kolaborasi, Belajar, dan Berbagi Manfaat
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Terbuka untuk diskusi akademik, kolaborasi tugas kelompok, maupun pertukaran ide seputar teknologi dan inovasi bisnis.
              </p>
            </div>
          </div>

          <a
            href="#kontak"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 active:scale-95 text-white text-xs font-semibold rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            Mulai Terhubung
          </a>
        </div>
      </div>
    </section>
  );
}
