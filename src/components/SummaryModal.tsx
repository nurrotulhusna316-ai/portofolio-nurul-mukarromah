import { X, Printer, GraduationCap, MapPin, Mail, Phone, BookOpen, Layers, CheckCircle } from 'lucide-react';
import { Project, Skill, Experience, ContactInfo } from '../types';

interface SummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  avatarUrl?: string;
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  contactInfo: ContactInfo;
}

export default function SummaryModal({
  isOpen,
  onClose,
  avatarUrl,
  projects,
  skills,
  experiences,
  contactInfo,
}: SummaryModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-slate-900">
        {/* Floating Controls (Hidden on Print) */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 bg-white/95 backdrop-blur-md border-b border-slate-200 print:hidden">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-violet-600" />
            <span className="text-sm font-bold text-slate-900">
              Pratinjau Lembar Ringkasan Profil Akademik
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Sheet Content */}
        <div className="p-8 sm:p-12 space-y-8 bg-white print:p-0 print:space-y-6">
          {/* Header Banner */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-20 rounded-xl overflow-hidden border border-slate-300 shadow-sm shrink-0 bg-slate-100">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt="Nurul Mukarromah"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-violet-700 text-white font-bold text-lg flex items-center justify-center">
                    NM
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Nurul Mukarromah
                </h1>
                <p className="text-sm font-semibold text-violet-700 mt-1">
                  Mahasiswa Sistem Informasi · Universitas Komputama
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Fokus: Analisis Sistem, Desain Presentasi & Wirausaha Digital
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-600 space-y-1 sm:text-right">
              <div>Domisili: {contactInfo.location}</div>
              <div>Email: {contactInfo.email}</div>
              <div>WhatsApp: {contactInfo.whatsapp}</div>
            </div>
          </div>

          {/* Profil Singkat */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-200 pb-1">
              Ringkasan Profil & Visi
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Mahasiswa Sistem Informasi Universitas Komputama yang memiliki semangat untuk terus belajar dan mengembangkan diri. Tertarik pada perkembangan teknologi, dunia digital, dan kreativitas. Melalui perkuliahan dan berbagai proyek, ingin meningkatkan kemampuan serta memperoleh pengalaman yang bermanfaat, dengan cita-cita menjadi pengusaha yang mampu memanfaatkan teknologi untuk menciptakan peluang dan memberikan manfaat bagi orang lain.
            </p>
          </div>

          {/* Pendidikan */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-200 pb-1">
              Pendidikan
            </h2>
            <div className="flex items-start justify-between text-xs sm:text-sm">
              <div>
                <span className="font-bold text-slate-900">Universitas Komputama</span>
                <div className="text-xs text-slate-600">Program Studi: Sistem Informasi</div>
              </div>
              <span className="font-semibold text-violet-700 text-xs">Mahasiswa Aktif</span>
            </div>
          </div>

          {/* Keahlian Utama */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-200 pb-1">
              Keahlian & Kompetensi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skills.map((skill) => (
                <div key={skill.id} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/60">
                  <span className="font-bold text-slate-800 block">{skill.name}</span>
                  <span className="text-[11px] text-slate-600 leading-snug block mt-0.5">{skill.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Proyek & Karya Terpilih */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-200 pb-1">
              Karya & Tugas Akademik Terpilih
            </h2>
            <div className="space-y-3 text-xs">
              {projects.slice(0, 4).map((proj) => (
                <div key={proj.id} className="border-b border-slate-100 pb-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-bold text-slate-900">{proj.title}</span>
                    <span className="text-[11px] text-violet-700 shrink-0">{proj.category}</span>
                  </div>
                  <p className="text-slate-600 mt-0.5">{proj.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pengalaman */}
          {experiences.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-200 pb-1">
                Pengalaman & Aktivitas
              </h2>
              <div className="space-y-2 text-xs">
                {experiences.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex items-baseline justify-between">
                      <span className="font-bold text-slate-900">{exp.title}</span>
                      <span className="text-slate-500 text-[11px]">{exp.year}</span>
                    </div>
                    <div className="text-violet-700 font-medium text-[11px]">Peran: {exp.role}</div>
                    <p className="text-slate-600 mt-0.5">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Document verification stamp */}
          <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
            <span>Arsip Portofolio Akademik · Nurul Mukarromah</span>
            <span>Universitas Komputama © 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
