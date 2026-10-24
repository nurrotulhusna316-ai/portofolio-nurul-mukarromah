import { useState } from 'react';
import { X, Calendar, User, FileText, Image as ImageIcon, Sparkles } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddExperience: (exp: Experience) => void;
}

export default function ExperienceModal({ isOpen, onClose, onAddExperience }: ExperienceModalProps) {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');
  const [role, setRole] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState<Experience['category']>('Organisasi & Kegiatan');
  const [description, setDescription] = useState('');
  const [documentationNote, setDocumentationNote] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !role.trim()) return;

    const newExp: Experience = {
      id: `exp-${Date.now()}`,
      title: title.trim(),
      role: role.trim(),
      year: year.trim() || 'Tahun Aktif',
      category,
      description: description.trim() || 'Kegiatan pengembangan diri dan partisipasi mahasiswa.',
      documentationNote: documentationNote.trim(),
      imageUrl: imageUrl.trim()
    };

    onAddExperience(newExp);
    onClose();
    setTitle('');
    setRole('');
    setYear('');
    setDescription('');
    setDocumentationNote('');
    setImageUrl('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-slate-900 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-slate-900">
            Tambah Pengalaman / Kegiatan Asli
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
          Masukkan riwayat organisasi kampus, kepanitiaan, pengalaman mengajar / berbagi, atau kegiatan akademik Anda yang sebenarnya tanpa rekayasa.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nama Kegiatan / Organisasi
            </label>
            <input
              type="text"
              placeholder="Contoh: Seminar Teknologi Kampus / Pengurus UKM / Pengalaman Tutor"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Peran / Posisi
              </label>
              <input
                type="text"
                placeholder="Contoh: Anggota, Peserta, Fasilitator"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Tahun / Periode
              </label>
              <input
                type="text"
                placeholder="Contoh: 2025 - Sekarang / 2024"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Kategori Kegiatan
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
              className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500"
            >
              <option value="Organisasi & Kegiatan">Organisasi & Kegiatan</option>
              <option value="Akademik">Akademik & Perkuliahan</option>
              <option value="Pengembangan Diri">Pengembangan Diri & Pelatihan</option>
              <option value="Mengajar / Berbagi">Pengalaman Mengajar / Berbagi</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Deskripsi Tanggung Jawab & Pembelajaran
            </label>
            <textarea
              rows={3}
              placeholder="Ceritakan peran yang Anda jalankan dan manfaat pengalaman tersebut bagi Anda..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500 resize-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Catatan Dokumentasi / Sertifikat (Opsional)
            </label>
            <input
              type="text"
              placeholder="Contoh: Sertifikat kegiatan tersedia / Dokumentasi foto kegiatan"
              value={documentationNote}
              onChange={(e) => setDocumentationNote(e.target.value)}
              className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Tautan Foto Dokumentasi (Opsional)
            </label>
            <input
              type="url"
              placeholder="https://... (URL foto kegiatan)"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-medium text-white bg-violet-600 hover:bg-violet-500 rounded-xl transition-colors cursor-pointer"
            >
              Simpan Pengalaman
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
