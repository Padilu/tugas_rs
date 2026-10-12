import { useState, useEffect, useRef } from 'react';
import { X, Mail, Lock, CreditCard, User, Eye, EyeOff } from 'lucide-react';

/**
 * AuthModal — Modal overlay untuk Login dan Registrasi pasien.
 * Dilengkapi tab switch, validasi form sederhana, dan toggle visibilitas password.
 */
export default function AuthModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const modalRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nama: '',
    nik: '',
    nomorRekamMedis: '',
  });

  // Tutup modal dengan tombol Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Di tahap berikutnya akan dihubungkan ke backend
    alert(
      activeTab === 'login'
        ? 'Login berhasil! (Simulasi)'
        : 'Registrasi berhasil! (Simulasi)'
    );
    onClose();
  };

  const resetForm = () => {
    setFormData({ email: '', password: '', nama: '', nik: '', nomorRekamMedis: '' });
    setShowPassword(false);
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    resetForm();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={activeTab === 'login' ? 'Dialog Masuk' : 'Dialog Daftar'}
    >
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal container */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative z-10 w-full max-w-md rounded-2xl border border-(--color-border)
                   bg-(--color-bg-primary) shadow-2xl animate-fade-in-scale"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-(--color-border) px-6 py-4">
          <h2 className="text-lg font-bold text-(--color-text-primary)">
            {activeTab === 'login' ? 'Masuk ke Akun' : 'Daftar Akun Baru'}
          </h2>
          <button
            onClick={onClose}
            className="focus-ring btn-press flex h-8 w-8 items-center justify-center rounded-lg
                       text-(--color-text-secondary) transition-colors hover:bg-(--color-bg-secondary)
                       hover:text-(--color-text-primary)"
            aria-label="Tutup dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-(--color-border)">
          <button
            onClick={() => switchTab('login')}
            className={`focus-ring flex-1 px-4 py-3 text-sm font-semibold transition-colors
              ${
                activeTab === 'login'
                  ? 'border-b-2 border-(--color-accent) text-(--color-accent)'
                  : 'text-(--color-text-secondary) hover:text-(--color-text-primary)'
              }`}
            role="tab"
            aria-selected={activeTab === 'login'}
            aria-controls="panel-login"
          >
            Masuk
          </button>
          <button
            onClick={() => switchTab('register')}
            className={`focus-ring flex-1 px-4 py-3 text-sm font-semibold transition-colors
              ${
                activeTab === 'register'
                  ? 'border-b-2 border-(--color-accent) text-(--color-accent)'
                  : 'text-(--color-text-secondary) hover:text-(--color-text-primary)'
              }`}
            role="tab"
            aria-selected={activeTab === 'register'}
            aria-controls="panel-register"
          >
            Daftar
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          {/* Login Panel */}
          {activeTab === 'login' && (
            <div id="panel-login" role="tabpanel" className="space-y-4 animate-fade-in">
              {/* Email */}
              <div>
                <label htmlFor="login-email" className="mb-1.5 block text-sm font-medium text-(--color-text-primary)">
                  Alamat Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--color-text-secondary)" />
                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@contoh.com"
                    required
                    className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary)
                               py-2.5 pl-10 pr-4 text-sm text-(--color-text-primary) placeholder:text-(--color-text-secondary)/50
                               transition-colors focus:border-(--color-accent)"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="login-password" className="mb-1.5 block text-sm font-medium text-(--color-text-primary)">
                  Kata Sandi
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--color-text-secondary)" />
                  <input
                    id="login-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Masukkan kata sandi"
                    required
                    className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary)
                               py-2.5 pl-10 pr-10 text-sm text-(--color-text-primary) placeholder:text-(--color-text-secondary)/50
                               transition-colors focus:border-(--color-accent)"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-(--color-text-secondary)
                               transition-colors hover:text-(--color-accent)"
                    aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Nomor Rekam Medis (opsional) */}
              <div>
                <label htmlFor="login-rm" className="mb-1.5 block text-sm font-medium text-(--color-text-primary)">
                  No. Rekam Medis <span className="text-(--color-text-secondary) font-normal">(opsional)</span>
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--color-text-secondary)" />
                  <input
                    id="login-rm"
                    name="nomorRekamMedis"
                    type="text"
                    value={formData.nomorRekamMedis}
                    onChange={handleChange}
                    placeholder="P-20240001"
                    className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary)
                               py-2.5 pl-10 pr-4 text-sm text-(--color-text-primary) placeholder:text-(--color-text-secondary)/50
                               transition-colors focus:border-(--color-accent)"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Register Panel */}
          {activeTab === 'register' && (
            <div id="panel-register" role="tabpanel" className="space-y-4 animate-fade-in">
              {/* Nama Lengkap */}
              <div>
                <label htmlFor="reg-nama" className="mb-1.5 block text-sm font-medium text-(--color-text-primary)">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--color-text-secondary)" />
                  <input
                    id="reg-nama"
                    name="nama"
                    type="text"
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap"
                    required
                    className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary)
                               py-2.5 pl-10 pr-4 text-sm text-(--color-text-primary) placeholder:text-(--color-text-secondary)/50
                               transition-colors focus:border-(--color-accent)"
                  />
                </div>
              </div>

              {/* NIK */}
              <div>
                <label htmlFor="reg-nik" className="mb-1.5 block text-sm font-medium text-(--color-text-primary)">
                  NIK (Nomor Induk Kependudukan)
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--color-text-secondary)" />
                  <input
                    id="reg-nik"
                    name="nik"
                    type="text"
                    value={formData.nik}
                    onChange={handleChange}
                    placeholder="16 digit NIK"
                    required
                    maxLength={16}
                    pattern="\d{16}"
                    title="NIK harus terdiri dari 16 digit angka"
                    className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary)
                               py-2.5 pl-10 pr-4 text-sm text-(--color-text-primary) placeholder:text-(--color-text-secondary)/50
                               transition-colors focus:border-(--color-accent)"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="reg-email" className="mb-1.5 block text-sm font-medium text-(--color-text-primary)">
                  Alamat Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--color-text-secondary)" />
                  <input
                    id="reg-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@contoh.com"
                    required
                    className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary)
                               py-2.5 pl-10 pr-4 text-sm text-(--color-text-primary) placeholder:text-(--color-text-secondary)/50
                               transition-colors focus:border-(--color-accent)"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="reg-password" className="mb-1.5 block text-sm font-medium text-(--color-text-primary)">
                  Kata Sandi
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--color-text-secondary)" />
                  <input
                    id="reg-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Minimal 8 karakter"
                    required
                    minLength={8}
                    className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary)
                               py-2.5 pl-10 pr-10 text-sm text-(--color-text-primary) placeholder:text-(--color-text-secondary)/50
                               transition-colors focus:border-(--color-accent)"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-(--color-text-secondary)
                               transition-colors hover:text-(--color-accent)"
                    aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="focus-ring btn-press w-full rounded-xl bg-(--color-accent) px-4 py-3 text-sm
                       font-bold text-white shadow-lg transition-all duration-300
                       hover:bg-(--color-accent-dark) hover:shadow-xl"
          >
            {activeTab === 'login' ? 'Masuk' : 'Daftar Sekarang'}
          </button>

          {/* Footer hint */}
          <p className="text-center text-xs text-(--color-text-secondary)">
            {activeTab === 'login' ? (
              <>
                Belum punya akun?{' '}
                <button
                  type="button"
                  onClick={() => switchTab('register')}
                  className="font-semibold text-(--color-accent) hover:underline"
                >
                  Daftar di sini
                </button>
              </>
            ) : (
              <>
                Sudah punya akun?{' '}
                <button
                  type="button"
                  onClick={() => switchTab('login')}
                  className="font-semibold text-(--color-accent) hover:underline"
                >
                  Masuk di sini
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
