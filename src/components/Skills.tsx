import { useState } from 'react';
import { 
  FileText, 
  Presentation, 
  Palette, 
  MessageSquare, 
  Users, 
  PenTool, 
  Cpu, 
  Plus, 
  Edit3, 
  Check, 
  Sparkles,
  Search
} from 'lucide-react';
import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
  onUpdateSkills: (skills: Skill[]) => void;
}

export default function Skills({ skills, onUpdateSkills }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [newSkillModalOpen, setNewSkillModalOpen] = useState(false);

  // Form states for edit
  const [editName, setEditName] = useState('');
  const [editDesc, setEditDesc] = useState('');
  const [editCategory, setEditCategory] = useState<'Aplikasi & Desain' | 'Soft Skills' | 'Belajar Teknologi'>('Aplikasi & Desain');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-6 h-6 text-blue-600" />;
      case 'Presentation':
        return <Presentation className="w-6 h-6 text-amber-600" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-violet-600" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-emerald-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-indigo-600" />;
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-purple-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-violet-600" />;
    }
  };

  const categories = ['Semua', 'Aplikasi & Desain', 'Soft Skills', 'Belajar Teknologi'];

  const filteredSkills = skills.filter((item) => {
    const matchCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleOpenEdit = (skill: Skill) => {
    setEditingSkill(skill);
    setEditName(skill.name);
    setEditDesc(skill.description);
    setEditCategory(skill.category);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSkill) return;

    const updated = skills.map((s) =>
      s.id === editingSkill.id
        ? { ...s, name: editName, description: editDesc, category: editCategory }
        : s
    );
    onUpdateSkills(updated);
    setEditingSkill(null);
  };

  const handleCreateSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editName.trim()) return;

    const newSkill: Skill = {
      id: `skill-${Date.now()}`,
      name: editName,
      category: editCategory,
      description: editDesc || 'Keahlian pendukung dalam studi Sistem Informasi dan kolaborasi tim.',
      iconName: editCategory === 'Aplikasi & Desain' ? 'Palette' : editCategory === 'Soft Skills' ? 'Users' : 'Cpu',
      points: ['Kemampuan dipelajari secara aktif dalam perkuliahan']
    };

    onUpdateSkills([...skills, newSkill]);
    setNewSkillModalOpen(false);
    setEditName('');
    setEditDesc('');
  };

  return (
    <section id="keahlian" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-violet-600 uppercase mb-2">
              Kompetensi & Kapabilitas
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Keahlian
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Kompetensi nyata yang dikembangkan melalui perkuliahan, pembuatan dokumen dan materi presentasi, kerja sama kelompok, serta pembelajaran teknologi baru.
            </p>
          </div>

          {/* Action to customize or add skill */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setEditName('');
                setEditDesc('');
                setEditCategory('Aplikasi & Desain');
                setNewSkillModalOpen(true);
              }}
              className="px-4 py-2.5 bg-violet-50 hover:bg-violet-100 text-violet-700 border border-violet-200 rounded-xl text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Keahlian</span>
            </button>
          </div>
        </div>

        {/* Filter Controls (Zero-Pill compliant button tabs) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1 p-1 bg-slate-100/80 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari keahlian..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-violet-500 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="group bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-violet-300 rounded-2xl p-6 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {getIcon(skill.iconName)}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium text-slate-500">
                      {skill.category}
                    </span>
                    <button
                      onClick={() => handleOpenEdit(skill)}
                      className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all cursor-pointer"
                      title="Ubah deskripsi keahlian"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Verified focus bullets (no fake percentage bars) */}
              <div className="pt-4 border-t border-slate-200/60 space-y-1.5">
                {skill.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <span className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Transparency Footer */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Keahlian disajikan secara faktual dan kontekstual tanpa rekayasa persentase atau sertifikasi yang belum valid.</span>
          </div>
          <span className="text-[11px] text-violet-600 font-medium">Bisa Disesuaikan</span>
        </div>
      </div>

      {/* Edit Skill Modal */}
      {editingSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 text-slate-900 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Edit3 className="w-5 h-5 text-violet-600" />
              <span>Sesuaikan Keterangan Keahlian</span>
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Ubah rincian penerapan keahlian ini agar sesuai dengan perkembangan studi Anda di Universitas Komputama.
            </p>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Keahlian
                </label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kategori
                </label>
                <select
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value as any)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500"
                >
                  <option value="Aplikasi & Desain">Aplikasi & Desain</option>
                  <option value="Soft Skills">Soft Skills</option>
                  <option value="Belajar Teknologi">Belajar Teknologi</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Deskripsi Penerapan
                </label>
                <textarea
                  rows={3}
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500 resize-none"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setEditingSkill(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-medium text-white bg-violet-600 hover:bg-violet-500 rounded-xl transition-colors cursor-pointer"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add New Skill Modal */}
      {newSkillModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 text-slate-900 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Plus className="w-5 h-5 text-violet-600" />
              <span>Tambah Keahlian Baru</span>
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Tambahkan perangkat lunak, keahlian komunikasi, atau kemampuan teknis baru yang sedang Anda pelajari.
            </p>

            <form onSubmit={handleCreateSkill} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Keahlian
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Notion & Manajemen Catatan"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kategori
                </label>
                <select
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value as any)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500"
                >
                  <option value="Aplikasi & Desain">Aplikasi & Desain</option>
                  <option value="Soft Skills">Soft Skills</option>
                  <option value="Belajar Teknologi">Belajar Teknologi</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Deskripsi Keahlian
                </label>
                <textarea
                  rows={3}
                  placeholder="Jelaskan bagaimana Anda menggunakannya dalam perkuliahan atau tugas..."
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500 resize-none"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setNewSkillModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-medium text-white bg-violet-600 hover:bg-violet-500 rounded-xl transition-colors cursor-pointer"
                >
                  Tambahkan Keahlian
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
