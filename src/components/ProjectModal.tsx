import { useState } from 'react';
import { X, ExternalLink, Link2, Check, FileText, Sparkles, BookOpen, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onUpdateLink: (projectId: string, newLink: string, linkType: string) => void;
}

export default function ProjectModal({ project, onClose, onUpdateLink }: ProjectModalProps) {
  if (!project) return null;

  const [inputLink, setInputLink] = useState(project.externalLink || '');
  const [selectedType, setSelectedType] = useState<any>(project.linkType || 'Google Drive');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateLink(project.id, inputLink.trim(), selectedType);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Tutup jendela"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Thumbnail Showcase */}
        <div className="relative aspect-video sm:aspect-21/9 bg-slate-950 overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            {/* Category without pill, clean separated text */}
            <div className="flex items-center gap-2 text-xs text-violet-300 font-medium mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.status}</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold leading-snug">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Status & Academic Context Callout */}
          <div className="p-4 rounded-xl bg-violet-50/80 border border-violet-100 flex items-start gap-3 text-xs text-slate-700">
            <Sparkles className="w-4 h-4 text-violet-600 mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold text-violet-900 block mb-0.5">
                Karya & Eksplorasi Akademik Mahasiswa
              </span>
              <span>
                Karya ini disusun dalam rangka penugasan perkuliahan dan pengembangan kompetensi di Program Studi Sistem Informasi Universitas Komputama. Tidak diklaim sebagai proyek komersial pihak ketiga yang sudah selesai.
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-2">
              Deskripsi Proyek & Tujuan Pembelajaran
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Tools & Methods */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
              Alat & Metode yang Digunakan
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium border border-slate-200/80"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-2.5">
                Poin Pembelajaran & Karakteristik Karya
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* External Link Section (With Interactive Link Binder) */}
          <div className="pt-6 border-t border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Link2 className="w-4 h-4 text-violet-600" />
              <span>Akses Berkas & Tautan Karya Asli</span>
            </h4>

            {project.externalLink ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200 gap-3">
                <div>
                  <span className="text-xs text-slate-500 block">Tautan Tersemat:</span>
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-violet-700 hover:text-violet-900 underline break-all flex items-center gap-1.5 mt-0.5"
                  >
                    <span>{project.externalLink}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>

                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium rounded-xl transition-colors flex items-center justify-center gap-1.5 shrink-0"
                >
                  <span>Buka Berkas</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs text-slate-600">
                <p className="mb-3">
                  Tautan berkas asli (Google Drive, tautan slide Canva, atau berkas online) belum disematkan pada contoh ini. Anda dapat memasukkan tautan asli langsung di bawah ini:
                </p>

                <form onSubmit={handleSave} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-violet-500 shrink-0"
                    >
                      <option value="Google Drive">Google Drive</option>
                      <option value="Canva">Canva</option>
                      <option value="Dokumen">Dokumen PDF/Word</option>
                      <option value="Prototipe">Prototipe</option>
                    </select>

                    <input
                      type="url"
                      placeholder="https://drive.google.com/... atau https://canva.com/..."
                      value={inputLink}
                      onChange={(e) => setInputLink(e.target.value)}
                      className="flex-1 px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-violet-500"
                    />

                    <button
                      type="submit"
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Simpan Tautan</span>
                    </button>
                  </div>

                  {savedSuccess && (
                    <p className="text-xs text-emerald-600 font-medium">
                      ✓ Tautan berkas berhasil disimpan ke proyek ini!
                    </p>
                  )}
                </form>
              </div>
            )}
          </div>

          {/* Modal Footer Controls */}
          <div className="pt-4 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              Tutup Pratinjau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
