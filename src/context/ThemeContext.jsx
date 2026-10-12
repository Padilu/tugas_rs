import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

/**
 * ThemeProvider — Penyedia konteks tema (Light/Dark Mode)
 * Menyimpan preferensi tema ke localStorage dan mengatur class 'dark' pada <html>.
 */
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('rs-theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('rs-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme — Custom hook untuk mengakses konteks tema.
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme harus digunakan di dalam ThemeProvider');
  }
  return context;
}
