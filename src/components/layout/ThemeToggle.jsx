import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

/**
 * ThemeToggle — Tombol untuk mengubah tema antara Mode Terang dan Mode Gelap.
 * Menampilkan ikon matahari/bulan dengan animasi transisi halus.
 */
export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="focus-ring btn-press relative flex h-10 w-10 items-center justify-center rounded-xl
                 border border-(--color-border) bg-(--color-bg-secondary) text-(--color-text-secondary)
                 transition-all duration-300 hover:border-(--color-accent) hover:text-(--color-accent)"
      aria-label={isDark ? 'Aktifkan Mode Terang' : 'Aktifkan Mode Gelap'}
      title={isDark ? 'Mode Terang' : 'Mode Gelap'}
    >
      <span className="relative h-5 w-5">
        {/* Ikon Matahari */}
        <Sun
          className={`absolute inset-0 h-5 w-5 transition-all duration-300
            ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
        />
        {/* Ikon Bulan */}
        <Moon
          className={`absolute inset-0 h-5 w-5 transition-all duration-300
            ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        />
      </span>
    </button>
  );
}
