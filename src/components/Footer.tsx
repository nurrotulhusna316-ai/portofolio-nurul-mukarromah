import { ArrowUp, Heart, Mail, MessageSquare, Compass, GraduationCap } from 'lucide-react';
import { ContactInfo } from '../types';

interface FooterProps {
  contactInfo: ContactInfo;
  onOpenSummary: () => void;
}

export default function Footer({ contactInfo, onOpenSummary }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#tentang', label: 'Tentang Saya' },
    { href: '#pendidikan', label: 'Pendidikan' },
    { href: '#keahlian', label: 'Keahlian' },
    { href: '#proyek', label: 'Proyek' },
    { href: '#pengalaman', label: 'Pengalaman' },
    { href: '#cita-cita', label: 'Cita-Cita' },
    { href: '#kontak', label: 'Kontak' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand & Brief statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-600 text-white font-bold flex items-center justify-center text-sm shadow-md">
                NM
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Nurul Mukarromah
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Mahasiswa Sistem Informasi Universitas Komputama yang berkomitmen untuk terus belajar, mengembangkan keahlian teknologi, dan berkontribusi menciptakan peluang usaha yang bermanfaat.
            </p>

            <div className="text-xs text-violet-300 font-medium">
              Genteng, Jawa Timur · Universitas Komputama
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigasi Halaman
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="hover:text-white transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Actions */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Akses Cepat
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Unduh ringkasan profil akademik untuk keperluan presentasi atau arsip penugasan perkuliahan.
            </p>
            <button
              onClick={onOpenSummary}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 rounded-xl text-xs font-medium transition-colors flex items-center gap-2 cursor-pointer w-full justify-center"
            >
              <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
              <span>Buka Ringkasan CV / Portofolio</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar with mandatory text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © 2026 Nurul Mukarromah. Dibuat dengan semangat belajar dan kreativitas.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-900 cursor-pointer"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
