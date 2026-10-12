import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Heart,
  Home,
  Building2,
  Stethoscope,
  Ticket,
  MessageCircle,
  FlaskConical,
  HelpCircle,
  LogIn,
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

/**
 * Navbar — Navigasi utama Rumah Sakit Sehat Sentosa.
 * Responsif penuh dengan menu hamburger untuk perangkat mobile.
 */

const navLinks = [
  { label: 'Beranda', path: '/', icon: Home },
  { label: 'Profil RS', path: '/profil', icon: Building2 },
  { label: 'Dokter & Jadwal', path: '/dokter', icon: Stethoscope },
  { label: 'Ambil Antrean', path: '/antrean', icon: Ticket },
  { label: 'Konsultasi', path: '/konsultasi', icon: MessageCircle },
  { label: 'Hasil Lab', path: '/hasil-lab', icon: FlaskConical },
  { label: 'FAQ & Kontak', path: '/faq', icon: HelpCircle },
];

export default function Navbar({ onOpenAuth }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Deteksi scroll untuk efek navbar transparan → solid
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup mobile menu saat berpindah halaman
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Kunci scroll saat mobile menu terbuka
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300
        ${
          isScrolled
            ? 'border-b border-(--color-border) bg-(--color-bg-primary)/95 shadow-sm backdrop-blur-md'
            : 'bg-transparent'
        }`}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        {/* Logo */}
        <Link
          to="/"
          className="focus-ring flex items-center gap-2 rounded-lg"
          aria-label="RS Sehat Sentosa — Beranda"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-(--color-accent) shadow-lg">
            <Heart className="h-5 w-5 text-white" fill="currentColor" />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-(--color-text-primary)">
              RS Sehat{' '}
              <span className="text-(--color-accent)">Sentosa</span>
            </span>
            <p className="text-[10px] leading-tight text-(--color-text-secondary)">
              Melayani dengan Hati
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`focus-ring flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive(link.path)
                      ? 'bg-(--color-accent)/10 text-(--color-accent)'
                      : 'text-(--color-text-secondary) hover:bg-(--color-bg-secondary) hover:text-(--color-text-primary)'
                  }`}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Tombol Login / Daftar */}
          <button
            onClick={onOpenAuth}
            className="focus-ring btn-press hidden items-center gap-2 rounded-xl bg-(--color-accent)
                       px-4 py-2.5 text-sm font-bold text-white shadow-lg transition-all
                       duration-300 hover:bg-(--color-accent-dark) hover:shadow-xl sm:flex"
          >
            <LogIn className="h-4 w-4" />
            Masuk / Daftar
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus-ring btn-press flex h-10 w-10 items-center justify-center rounded-xl
                       border border-(--color-border) bg-(--color-bg-secondary) text-(--color-text-secondary)
                       transition-colors hover:text-(--color-text-primary) lg:hidden"
            aria-label={isMobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* ===== Mobile Navigation Drawer ===== */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden
          ${isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 z-50 flex h-full w-72 flex-col border-l border-(--color-border)
                    bg-(--color-bg-primary) shadow-2xl transition-transform duration-300 ease-in-out lg:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi mobile"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-(--color-border) px-4 py-4">
          <span className="text-base font-bold text-(--color-text-primary)">Menu Navigasi</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="focus-ring btn-press flex h-8 w-8 items-center justify-center rounded-lg
                       text-(--color-text-secondary) transition-colors hover:bg-(--color-bg-secondary)"
            aria-label="Tutup menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Navigasi mobile">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`focus-ring flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium
                      transition-all duration-200
                      ${
                        isActive(link.path)
                          ? 'bg-(--color-accent)/10 text-(--color-accent)'
                          : 'text-(--color-text-secondary) hover:bg-(--color-bg-secondary) hover:text-(--color-text-primary)'
                      }`}
                  >
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer footer — Login button */}
        <div className="border-t border-(--color-border) p-4">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenAuth();
            }}
            className="focus-ring btn-press flex w-full items-center justify-center gap-2 rounded-xl
                       bg-(--color-accent) px-4 py-3 text-sm font-bold text-white shadow-lg
                       transition-all duration-300 hover:bg-(--color-accent-dark)"
          >
            <LogIn className="h-4 w-4" />
            Masuk / Daftar
          </button>
        </div>
      </div>
    </header>
  );
}
