import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';

interface NavbarProps {
  avatarUrl?: string;
  onOpenSummary: () => void;
}

export default function Navbar({ avatarUrl, onOpenSummary }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['beranda', 'tentang', 'pendidikan', 'keahlian', 'proyek', 'pengalaman', 'cita-cita', 'kontak'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang Saya' },
    { id: 'pendidikan', label: 'Pendidikan' },
    { id: 'keahlian', label: 'Keahlian' },
    { id: 'proyek', label: 'Proyek' },
    { id: 'pengalaman', label: 'Pengalaman' },
    { id: 'kontak', label: 'Kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800/80 text-white py-3'
          : 'bg-slate-900/70 backdrop-blur-sm border-b border-slate-800/40 text-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Wordmark (Zone 1) */}
          <button
            onClick={() => scrollToSection('beranda')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-violet-400/50 shadow-md shadow-violet-900/30 group-hover:scale-105 transition-transform bg-slate-800 shrink-0">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt="Nurul Mukarromah"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white font-bold text-base">
                  NM
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-violet-300 transition-colors whitespace-nowrap">
                Nurul Mukarromah
              </span>
              <span className="text-xs text-violet-300/80 font-normal hidden sm:block whitespace-nowrap">
                Sistem Informasi · Univ. Komputama
              </span>
            </div>
          </button>

          {/* Desktop Nav Links (Zone 2) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-violet-300 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary Action Zone (Zone 3) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSummary}
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
              <span>Ringkasan CV</span>
            </button>
            <button
              onClick={() => scrollToSection('kontak')}
              className="px-4 py-2 text-xs font-medium text-white bg-violet-600 hover:bg-violet-500 active:scale-95 rounded-lg shadow-sm shadow-violet-700/40 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>Hubungi Saya</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 cursor-pointer"
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu navigasi'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 border-b border-slate-800 px-5 pt-3 pb-6 animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-violet-950/60 text-violet-300 border-l-2 border-violet-400'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSummary();
                }}
                className="w-full text-center px-4 py-2.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-violet-400" />
                <span>Lihat Ringkasan CV / Portofolio</span>
              </button>
              <button
                onClick={() => scrollToSection('kontak')}
                className="w-full text-center px-4 py-2.5 text-xs font-medium text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Hubungi Nurul Mukarromah</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
