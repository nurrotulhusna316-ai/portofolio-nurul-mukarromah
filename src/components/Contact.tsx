import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  Sparkles,
  MessageCircle,
  AlertCircle
} from 'lucide-react';
import { ContactInfo } from '../types';

interface ContactProps {
  contactInfo: ContactInfo;
  onUpdateContactInfo?: (info: ContactInfo) => void;
}

export default function Contact({ contactInfo, onUpdateContactInfo }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Edit contact info mode
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [editEmail, setEditEmail] = useState(contactInfo.email);
  const [editWa, setEditWa] = useState(contactInfo.whatsapp);
  const [editIg, setEditIg] = useState(contactInfo.instagram);
  const [editLi, setEditLi] = useState(contactInfo.linkedin);

  const validate = () => {
    const err: { [key: string]: string } = {};
    if (!name.trim()) err.name = 'Nama lengkap wajib diisi.';
    if (!email.trim()) {
      err.email = 'Alamat email wajib diisi.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      err.email = 'Format email tidak valid (contoh: nama@email.com).';
    }
    if (!message.trim()) {
      err.message = 'Pesan atau pertanyaan wajib diisi.';
    } else if (message.trim().length < 10) {
      err.message = 'Pesan minimal 10 karakter agar maksud tersampaikan jelas.';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSaveContactInfo = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateContactInfo) {
      onUpdateContactInfo({
        ...contactInfo,
        email: editEmail.trim(),
        whatsapp: editWa.trim(),
        instagram: editIg.trim(),
        linkedin: editLi.trim(),
      });
    }
    setIsEditingInfo(false);
  };

  const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    subject || 'Kontak dari Website Portofolio'
  )}&body=${encodeURIComponent(`Halo Nurul,\n\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`)}`;

  return (
    <section id="kontak" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-violet-600 uppercase mb-2">
            Terhubung & Berkolaborasi
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Kontak Saya
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Terbuka untuk komunikasi akademik, pertanyaan seputar proyek perkuliahan, atau diskusi peluang kolaborasi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <h3 className="text-base font-bold text-slate-900">
                  Saluran Komunikasi Resmi
                </h3>
                <button
                  onClick={() => setIsEditingInfo(!isEditingInfo)}
                  className="text-xs font-semibold text-violet-600 hover:text-violet-800 transition-colors cursor-pointer"
                >
                  {isEditingInfo ? 'Tutup Pengaturan' : 'Sesuaikan Kontak'}
                </button>
              </div>

              {isEditingInfo ? (
                <form onSubmit={handleSaveContactInfo} className="space-y-3 mb-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Email Asli
                    </label>
                    <input
                      type="email"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-violet-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      WhatsApp
                    </label>
                    <input
                      type="text"
                      placeholder="+62 8..."
                      value={editWa}
                      onChange={(e) => setEditWa(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Instagram Handle
                    </label>
                    <input
                      type="text"
                      placeholder="@username"
                      value={editIg}
                      onChange={(e) => setEditIg(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      LinkedIn Profil
                    </label>
                    <input
                      type="text"
                      placeholder="linkedin.com/in/..."
                      value={editLi}
                      onChange={(e) => setEditLi(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
                  >
                    Simpan Informasi Kontak
                  </button>
                </form>
              ) : (
                <div className="space-y-4">
                  {/* Email Card */}
                  <div className="flex items-start justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-500 block">Surel / Email</span>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-violet-700 transition-colors break-all"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 text-slate-400 hover:text-slate-800 hover:bg-white rounded-lg transition-colors cursor-pointer shrink-0"
                      title="Salin alamat email"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* WhatsApp Card */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-500 block">WhatsApp</span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900">
                          {contactInfo.whatsapp}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400 font-normal">Tersedia</span>
                  </div>

                  {/* Instagram Card */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
                        <Instagram className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-500 block">Instagram</span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900">
                          {contactInfo.instagram}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400 font-normal">Sosial Media</span>
                  </div>

                  {/* LinkedIn Card */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-500 block">LinkedIn</span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900">
                          {contactInfo.linkedin}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400 font-normal">Jejaring Karir</span>
                  </div>
                </div>
              )}

              {/* Location Badge */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2.5 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-violet-600 shrink-0" />
                <span>Domisili: Genteng, Jawa Timur · Universitas Komputama</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Kirim Pesan / Pertanyaan
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Silakan isi formulir di bawah ini untuk mengirim pesan langsung kepada Nurul Mukarromah.
              </p>

              {submitSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-slate-800 space-y-4 animate-in fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                      <Check className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-emerald-900">
                        Pesan Anda Berhasil Diproses!
                      </h4>
                      <p className="text-xs text-emerald-700">
                        Terima kasih atas pesan yang Anda sampaikan, {name}.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-emerald-200/80 text-xs text-slate-600">
                    <p className="mb-2">
                      <span className="font-semibold text-slate-800">Catatan Sistem:</span> Formulir website saat ini berjalan dalam mode client-side terverifikasi. Untuk mengirimkan pesan ini langsung ke kotak masuk email Nurul Mukarromah:
                    </p>
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors"
                    >
                      <span>Buka Aplikasi Email & Kirim</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setName('');
                      setEmail('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nama Lengkap Anda <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Ahmad Fauzi"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs text-slate-900 focus:outline-none focus:bg-white transition-colors ${
                          errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-violet-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Alamat Email Anda <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="nama@email.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs text-slate-900 focus:outline-none focus:bg-white transition-colors ${
                          errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-violet-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subjek / Topik Pembicaraan (Opsional)
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Diskusi Tugas Sistem Informasi / Rintisan Bisnis"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-violet-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Pesan atau Pertanyaan <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tuliskan pesan Anda secara jelas dan santun..."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs text-slate-900 focus:outline-none focus:bg-white transition-colors resize-none ${
                        errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-violet-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-[11px] text-slate-500">
                      Semua data input divalidasi dan terlindungi.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Memproses Pesan...</span>
                      ) : (
                        <>
                          <span>Kirim Pesan</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
