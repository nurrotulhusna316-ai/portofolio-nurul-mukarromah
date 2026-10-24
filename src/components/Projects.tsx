import { useState } from 'react';
import { Layers, Plus, ArrowUpRight, FileText, CheckCircle2, Link2, Sparkles, FolderGit2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  onOpenProject: (project: Project) => void;
  onAddProject: (project: Project) => void;
}

export default function Projects({ projects, onOpenProject, onAddProject }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [showAddModal, setShowAddModal] = useState(false);

  // New project form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<Project['category']>('Tugas dan Proyek Sistem Informasi');
  const [newShortDesc, setNewShortDesc] = useState('');
  const [newFullDesc, setNewFullDesc] = useState('');
  const [newTools, setNewTools] = useState('');
  const [newLink, setNewLink] = useState('');

  const categories = [
    'Semua',
    'Presentasi Pendidikan Pancasila',
    'Makalah Pendidikan Agama Islam',
    'Desain Presentasi Canva',
    'Tugas dan Proyek Sistem Informasi',
    'Ide Bisnis Digital',
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === 'Semua') return true;
    return p.category === selectedCategory;
  });

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const created: Project = {
      id: `proj-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      shortDescription: newShortDesc.trim() || 'Tugas perkuliahan Sistem Informasi Universitas Komputama.',
      fullDescription: newFullDesc.trim() || newShortDesc.trim(),
      thumbnail: '/src/assets/images/project_is_system_1792839788922.jpg',
      tools: newTools ? newTools.split(',').map((t) => t.trim()) : ['Sistem Informasi', 'Microsoft Office'],
      status: 'Tugas Perkuliahan',
      externalLink: newLink.trim(),
      linkType: 'Google Drive',
      highlights: ['Dibuat secara mandiri / kolaborasi perkuliahan', 'Pengembangan keterampilan Sistem Informasi']
    };

    onAddProject(created);
    setShowAddModal(false);
    setNewTitle('');
    setNewShortDesc('');
    setNewFullDesc('');
    setNewTools('');
    setNewLink('');
  };

  return (
    <section id="proyek" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-violet-600 uppercase mb-2">
              Galeri Karya & Tugas
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Proyek Portofolio
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Dokumentasi penugasan perkuliahan, makalah akademik, desain presentasi kreatif, dan perancangan konsep sistem informasi serta wirausaha digital.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-medium transition-colors flex items-center gap-2 cursor-pointer shadow-sm w-fit"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Proyek Kuliah</span>
          </button>
        </div>

        {/* Category Filters (Clean Segmented Tabs, Zero-Pill) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-2xl overflow-x-auto mb-10 shadow-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-slate-200/90 hover:border-violet-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Image Container */}
                <div className="relative aspect-4/3 w-full bg-slate-950 overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Top-right quick inspect icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 flex items-center justify-center shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Clean unboxed metadata with bullet separators */}
                  <div className="flex items-center gap-2 text-xs text-violet-700 font-medium mb-2.5 flex-wrap">
                    <span>{project.category}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-500 font-normal">{project.status}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-violet-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Tool tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {project.tools.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/60"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-[11px] text-slate-400 self-center">
                        +{project.tools.length - 3} lainnya
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onOpenProject(project)}
                  className="w-full py-2.5 px-4 bg-slate-100 hover:bg-violet-600 text-slate-700 hover:text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer group/btn"
                >
                  <span>Lihat Proyek & Berkas</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Ethics Context Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-violet-600 mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold text-slate-900 block">
                Catatan Transparansi Portofolio
              </span>
              <span>
                Koleksi karya di atas merupakan representasi tugas akademik dan gagasan mandiri selama berkuliah di Universitas Komputama. Tautan dapat dihubungkan ke berkas Google Drive atau dokumen presentasi asli Anda.
              </span>
            </div>
          </div>
          <span className="text-[11px] text-violet-700 font-medium shrink-0">
            {projects.length} Karya Terdaftar
          </span>
        </div>
      </div>

      {/* Add New Project Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-slate-900 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
              <Plus className="w-5 h-5 text-violet-600" />
              <span>Tambah Proyek / Tugas Kuliah</span>
            </h3>
            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              Daftarkan tugas presentasi, makalah, atau proyek sistem informasi terbaru Anda untuk melengkapi portofolio.
            </p>

            <form onSubmit={handleCreateProject} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Judul Proyek / Makalah
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Analisis Kebutuhan Sistem Administrasi Kampus"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kategori
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500"
                >
                  <option value="Presentasi Pendidikan Pancasila">Presentasi Pendidikan Pancasila</option>
                  <option value="Makalah Pendidikan Agama Islam">Makalah Pendidikan Agama Islam</option>
                  <option value="Desain Presentasi Canva">Desain Presentasi Canva</option>
                  <option value="Tugas dan Proyek Sistem Informasi">Tugas dan Proyek Sistem Informasi</option>
                  <option value="Ide Bisnis Digital">Ide Bisnis Digital</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Ringkasan Singkat (1-2 Kalimat)
                </label>
                <input
                  type="text"
                  placeholder="Garis besar topik dan materi yang dibahas..."
                  value={newShortDesc}
                  onChange={(e) => setNewShortDesc(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Deskripsi Lengkap & Poin Pembelajaran
                </label>
                <textarea
                  rows={3}
                  placeholder="Jelaskan peran Anda, tantangan pengerjaan, dan output yang dihasilkan..."
                  value={newFullDesc}
                  onChange={(e) => setNewFullDesc(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500 resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Perangkat Lunak / Tools (Pisahkan dengan koma)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Canva, Microsoft PowerPoint, Riset Jurnal"
                  value={newTools}
                  onChange={(e) => setNewTools(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tautan File / Google Drive (Opsional)
                </label>
                <input
                  type="url"
                  placeholder="https://drive.google.com/... (atau biarkan kosong)"
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-violet-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-medium text-white bg-violet-600 hover:bg-violet-500 rounded-xl transition-colors cursor-pointer"
                >
                  Simpan Karya
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
