export interface Project {
  id: string;
  title: string;
  category: 'Presentasi Pendidikan Pancasila' | 'Makalah Pendidikan Agama Islam' | 'Desain Presentasi Canva' | 'Tugas dan Proyek Sistem Informasi' | 'Ide Bisnis Digital';
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  tools: string[];
  status: string;
  externalLink?: string;
  linkType?: 'Canva' | 'Google Drive' | 'Dokumen' | 'Prototipe' | 'Lainnya';
  highlights: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'Aplikasi & Desain' | 'Soft Skills' | 'Belajar Teknologi';
  description: string;
  iconName: string;
  points: string[];
}

export interface Experience {
  id: string;
  title: string;
  role: string;
  year: string;
  description: string;
  category: 'Akademik' | 'Organisasi & Kegiatan' | 'Pengembangan Diri' | 'Mengajar / Berbagi';
  documentationNote?: string;
  imageUrl?: string;
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
  instagram: string;
  linkedin: string;
  location: string;
  university: string;
}
