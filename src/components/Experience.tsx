import { Briefcase, Calendar, Plus, Sparkles, Image as ImageIcon, CheckCircle2, Award, Users } from 'lucide-react';
import type { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experiences: ExperienceType[];
  onOpenAddModal: () => void;
}

export default function Experience({ experiences, onOpenAddModal }: ExperienceProps) {
  return (
    <section id="pengalaman" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-violet-600 uppercase mb-2">
              Aktivitas & Rekam Jejak
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Pengalaman & Pengembangan Diri
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ruang dokumentasi pengalaman belajar, kegiatan akademik, pengalaman mengajar / berbagi, organisasi, dan aktivitas bermanfaat lainnya.
            </p>
          </div>

          <button
            onClick={onOpenAddModal}
            className="px-4 py-2.5 bg-violet-50 hover:bg-violet-100 text-violet-700 border border-violet-200 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs w-fit"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Riwayat Kegiatan</span>
          </button>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-violet-300 rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:shadow-md flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="space-y-3 flex-1">
                {/* Clean unboxed metadata with bullet separators */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <span className="text-violet-700 font-semibold">{exp.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{exp.year}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {exp.title}
                </h3>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white px-3 py-1 rounded-lg border border-slate-200/80">
                  <Users className="w-3.5 h-3.5 text-violet-600" />
                  <span>Peran: {exp.role}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {exp.description}
                </p>

                {exp.documentationNote && (
                  <div className="flex items-center gap-1.5 text-xs text-violet-700 pt-2">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Dokumentasi: {exp.documentationNote}</span>
                  </div>
                )}
              </div>

              {/* Documentation image thumbnail if exists, or aesthetic documentation placeholder */}
              <div className="w-full md:w-56 shrink-0">
                {exp.imageUrl ? (
                  <div className="aspect-16/10 rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
                    <img
                      src={exp.imageUrl}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <div className="h-full min-h-[110px] bg-white rounded-xl border border-dashed border-slate-300 p-4 flex flex-col items-center justify-center text-center">
                    <ImageIcon className="w-6 h-6 text-slate-400 mb-1.5" />
                    <span className="text-[11px] font-medium text-slate-600 block">
                      Dokumentasi Kegiatan
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      Foto / sertifikat dapat disematkan
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-violet-500 shrink-0" />
            <span>Bagian ini hanya memuat pengalaman nyata dan terbuka untuk diisi dengan riwayat kegiatan asli Nurul Mukarromah.</span>
          </div>
          <button
            onClick={onOpenAddModal}
            className="text-xs font-semibold text-violet-600 hover:text-violet-800 transition-colors cursor-pointer"
          >
            + Tambah Baru
          </button>
        </div>
      </div>
    </section>
  );
}
