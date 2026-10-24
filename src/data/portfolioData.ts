import { Project, Skill, Experience, ContactInfo } from '../types';

export const DEFAULT_AVATAR = '/assets/aistudio/IMG-20261024-WA0074_3c553db1.jpg';

export const INITIAL_CONTACT: ContactInfo = {
  email: 'nurrotulhusna316@gmail.com',
  whatsapp: '+62 821-xxxx-xxxx',
  instagram: '@nurulmukarromah_',
  linkedin: 'linkedin.com/in/nurul-mukarromah',
  location: 'Genteng, Jawa Timur',
  university: 'Universitas Komputama',
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Presentasi Pendidikan Pancasila: Integrasi Nilai Pancasila dalam Tata Kelola Era Digital',
    category: 'Presentasi Pendidikan Pancasila',
    shortDescription: 'Penyusunan slide presentasi terstruktur mengenai penerapan nilai-nilai Pancasila dalam menjaga etika digital dan ketahanan budaya di ruang siber.',
    fullDescription: 'Proyek presentasi perkuliahan Pendidikan Pancasila yang mengulas bagaimana kelima sila Pancasila diwujudkan dalam aktivitas kewarganegaraan digital. Materi dikemas secara sistematis dengan fokus pada toleransi informasi, gotong royong digital, dan perlindungan privasi.',
    thumbnail: '/src/assets/images/project_pancasila_slide_1792839786880.jpg',
    tools: ['Microsoft PowerPoint', 'Canva', 'Riset Materi'],
    status: 'Tugas Akademik Kuliah',
    externalLink: '',
    linkType: 'Google Drive',
    highlights: [
      'Struktur materi terbagi atas dasar etika berbangsa dan tantangan siber',
      'Desain slide komunikatif dengan visualisasi poin inti yang mudah dipahami rekan sekelas',
      'Penyusunan bahan tayang presentasi kelompok yang siap dipresentasikan di hadapan dosen'
    ]
  },
  {
    id: 'proj-2',
    title: 'Makalah Pendidikan Agama Islam: Refleksi Etika Keilmuan & Perkembangan Sains Teknologi',
    category: 'Makalah Pendidikan Agama Islam',
    shortDescription: 'Karya tulis ilmiah mahasiswa mengenai panduan moral dan etika Islam dalam pemanfaatan sains dan teknologi informasi modern.',
    fullDescription: 'Penyusunan naskah makalah akademik yang mendalam mengenai tanggung jawab intelektual seorang mahasiswa teknologi. Mengkaji pentingnya integritas, kejujuran akademik, serta bagaimana teknologi semestinya diarahkan untuk kemaslahatan umat dan kesejahteraan masyarakat luas.',
    thumbnail: '/src/assets/images/project_makalah_islam_1792839788259.jpg',
    tools: ['Microsoft Word', 'Pedoman Penulisan Ilmiah', 'Manajemen Referensi'],
    status: 'Karya Tulis Akademik',
    externalLink: '',
    linkType: 'Dokumen',
    highlights: [
      'Format tata letak dokumen standar perkuliahan dengan penomoran dan sitasi rapi',
      'Analisis konseptual integrasi etika moral dan inovasi digital',
      'Dokumentasi referensi akademik yang kredibel dan tertata'
    ]
  },
  {
    id: 'proj-3',
    title: 'Desain Presentasi Interaktif Canva: Visualisasi Informasi & Infografis Modern',
    category: 'Desain Presentasi Canva',
    shortDescription: 'Eksplorasi pembuatan slide deck presentasi berbasis estetika visual modern, infografis data seimbang, dan tipografi harmonis menggunakan Canva.',
    fullDescription: 'Pengembangan tata letak presentasi kreatif dengan perpaduan warna navy blue, lavender, dan putih. Mengutamakan kenyamanan membaca audiens, infografis alur proses, dan tata letak minimalis untuk materi pembelajaran maupun seminar mahasiswa.',
    thumbnail: '/src/assets/images/project_canva_deck_1792839788535.jpg',
    tools: ['Canva Pro', 'Infografis', 'Komposisi Visual'],
    status: 'Eksplorasi Desain Presentasi',
    externalLink: '',
    linkType: 'Canva',
    highlights: [
      'Penerapan hierarki tipografi yang jelas agar audiens fokus pada ide utama',
      'Penggunaan diagram alir dan ikon visual untuk mempermudah pemahaman data',
      'Palet warna estetik dengan kontras tinggi yang nyaman di layar proyeksi maupun laptop'
    ]
  },
  {
    id: 'proj-4',
    title: 'Tugas Perancangan Sistem Informasi: Pemodelan Alur & Dashboard Manajemen Data',
    category: 'Tugas dan Proyek Sistem Informasi',
    shortDescription: 'Studi pemodelan diagram relasi sistem informasi (ERD dasar), alur kerja administrasi, dan konsep tampilan dashboard monitoring operasional.',
    fullDescription: 'Latihan analisis kebutuhan sistem informasi pada lingkungan akademik dan organisasi. Mempelajari bagaimana entitas data terhubung, alur proses pengguna dari awal hingga akhir (use case), dan penyajian informasi ringkas melalui visualisasi dashboard.',
    thumbnail: '/src/assets/images/project_is_system_1792839788922.jpg',
    tools: ['Analisis Sistem Informasi', 'Diagram Alur (Flowchart)', 'Konsep Basis Data'],
    status: 'Tugas Perkuliahan Sistem Informasi',
    externalLink: '',
    linkType: 'Prototipe',
    highlights: [
      'Perumusan alur proses sistem secara runtut dari input hingga pelaporan',
      'Pemahaman relasi tabel data untuk mendukung keandalan pencatatan',
      'Perancangan visual antarmuka dashboard monitoring yang bersih dan ramah pengguna'
    ]
  },
  {
    id: 'proj-5',
    title: 'Konsep Ide Bisnis Digital: Platform Wirausaha Lokal & Pemberdayaan UMKM',
    category: 'Ide Bisnis Digital',
    shortDescription: 'Konseptualisasi model bisnis digital yang menggabungkan kemudahan katalog produk online dengan pendampingan adopsi teknologi bagi UMKM daerah.',
    fullDescription: 'Gagasan bisnis rintisan (technopreneurship) yang lahir dari cita-cita memadukan teknologi dan peluang wirausaha. Dirancang untuk membantu pelaku usaha lokal di Jawa Timur memperluas pasar melalui platform digital yang ramah pengguna dan terjangkau.',
    thumbnail: '/src/assets/images/hero_student_workspace_1792839786176.jpg',
    tools: ['Business Model Canvas', 'Analisis Pasar Digital', 'Rancangan Fitur Produk'],
    status: 'Konseptualisasi Ide Bisnis',
    externalLink: '',
    linkType: 'Google Drive',
    highlights: [
      'Identifikasi masalah nyata akses digital bagi pelaku usaha mikro',
      'Rancangan solusi berbasis teknologi web dan sistem pencatatan transaksi sederhana',
      'Visi berdampak sosial untuk mendorong kemandirian ekonomi masyarakat'
    ]
  }
];

export const INITIAL_SKILLS: Skill[] = [
  {
    id: 'skill-1',
    name: 'Microsoft Word',
    category: 'Aplikasi & Desain',
    description: 'Penyusunan dokumen akademik, makalah kuliah, penataan format laporan rapi, margin standar, dan daftar isi terstruktur.',
    iconName: 'FileText',
    points: ['Format dokumen ilmiah & tugas kuliah', 'Penataan gaya heading dan daftar pustaka', 'Penyusunan naskah terstruktur dan rapi']
  },
  {
    id: 'skill-2',
    name: 'Microsoft PowerPoint',
    category: 'Aplikasi & Desain',
    description: 'Perancangan slide presentasi informatif, transisi yang fungsional, dan penyusunan alur cerita materi yang mudah dipahami audiens.',
    iconName: 'Presentation',
    points: ['Desain slide ringkas dan to the point', 'Pengaturan tata letak dan hierarki teks', 'Penyajian materi presentasi kelompok']
  },
  {
    id: 'skill-3',
    name: 'Canva & Desain Presentasi',
    category: 'Aplikasi & Desain',
    description: 'Kreativitas merancang grafis visual, template presentasi estetis, infografis data, serta materi publikasi digital bertema modern.',
    iconName: 'Palette',
    points: ['Pemilihan warna harmonis & estetis', 'Desain infografis dan diagram visual', 'Eksplorasi layout kreatif yang profesional']
  },
  {
    id: 'skill-4',
    name: 'Komunikasi',
    category: 'Soft Skills',
    description: 'Penyampaian gagasan secara jelas, santun, dan efektif dalam presentasi di kelas, forum diskusi, serta komunikasi antarmahasiswa.',
    iconName: 'MessageSquare',
    points: ['Public speaking pada presentasi kelas', 'Penyampaian ide dengan bahasa santun', 'Keterampilan mendengarkan aktif']
  },
  {
    id: 'skill-5',
    name: 'Kerja Sama Tim',
    category: 'Soft Skills',
    description: 'Kemampuan berkolaborasi secara produktif, membagi tugas secara adil, dan membangun koordinasi yang solid dalam tugas kelompok.',
    iconName: 'Users',
    points: ['Kontribusi aktif dalam proyek kelompok', 'Fleksibilitas dan toleransi dalam tim', 'Komitmen terhadap tenggat waktu bersama']
  },
  {
    id: 'skill-6',
    name: 'Menulis',
    category: 'Soft Skills',
    description: 'Kemampuan menyusun artikel, esai, notula, serta karya tulis dengan alur pemikiran logis, koheren, dan tata bahasa Indonesia yang baik.',
    iconName: 'PenTool',
    points: ['Penyusunan paragraf runtut dan mudah dipahami', 'Hobi menulis gagasan dan refleksi diri', 'Penulisan laporan akademik yang akurat']
  },
  {
    id: 'skill-7',
    name: 'Kemampuan Belajar Teknologi Baru',
    category: 'Belajar Teknologi',
    description: 'Sikap adaptif dan rasa ingin tahu yang tinggi dalam mengeksplorasi perangkat lunak, sistem informasi, dan tren bisnis digital terkini.',
    iconName: 'Cpu',
    points: ['Cepat memahami antarmuka aplikasi baru', 'Tertarik pada sistem informasi dan otomatisasi', 'Semangat eksplorasi berkelanjutan']
  }
];

export const INITIAL_EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    title: 'Perkuliahan Aktif & Kolaborasi Proyek Sistem Informasi',
    role: 'Mahasiswa / Anggota Tim Proyek',
    year: 'Masa Perkuliahan',
    description: 'Terlibat aktif dalam pembelajaran tatap muka dan daring, pengerjaan tugas studi kasus sistem informasi, serta berkolaborasi menyelesaikan makalah dan materi presentasi kelompok di Universitas Komputama.',
    category: 'Akademik',
    documentationNote: 'Dokumentasi tugas kuliah, laporan sistem, dan slide presentasi akademik.'
  },
  {
    id: 'exp-2',
    title: 'Eksplorasi Mandiri Aplikasi Digital & Desain Presentasi',
    role: 'Pengembang Diri Mandiri',
    year: 'Pengembangan Berkelanjutan',
    description: 'Mengasah keahlian merancang dokumen akademik yang rapi dengan Microsoft Word, mendalami pembuatan materi presentasi visual menggunakan Canva dan PowerPoint, serta mendalami konsep kewirausahaan berbasis teknologi.',
    category: 'Pengembangan Diri',
    documentationNote: 'Portofolio slide presentasi dan materi visual yang terus diperbarui.'
  }
];
