import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AuthModal from './components/layout/AuthModal';

// Impor ke-7 Halaman Utama Lengkap
import Page1_Home from './pages/Page1_Home';
import Page2_ProfilRS from './pages/Page2_ProfilRS';
import Page3_DokterJadwal from './pages/Page3_DokterJadwal';
import Page4_AmbilAntrean from './pages/Page4_AmbilAntrean';
import Page5_KonsultasiJanji from './pages/Page5_KonsultasiJanji';
import Page6_HasilLab from './pages/Page6_HasilLab';
import Page7_FAQKontak from './pages/Page7_FAQKontak';

/**
 * App — Komponen utama aplikasi RS Sehat Sentosa.
 * Mengatur routing ke seluruh 7 halaman, layout global (Navbar & Footer), dan state AuthModal.
 */
export default function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-(--color-bg-primary) text-(--color-text-primary) transition-colors duration-300">
        {/* Navbar global dengan trigger login */}
        <Navbar onOpenAuth={() => setIsAuthOpen(true)} />

        {/* Konten utama yang terhubung ke 7 Halaman */}
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Page1_Home onOpenAuth={() => setIsAuthOpen(true)} />} />
            <Route path="/profil" element={<Page2_ProfilRS />} />
            <Route path="/dokter" element={<Page3_DokterJadwal />} />
            <Route path="/antrean" element={<Page4_AmbilAntrean />} />
            <Route path="/konsultasi" element={<Page5_KonsultasiJanji />} />
            <Route path="/hasil-lab" element={<Page6_HasilLab />} />
            <Route path="/faq" element={<Page7_FAQKontak />} />
          </Routes>
        </main>

        {/* Footer global terpadu */}
        <Footer />

        {/* Modal Autentikasi (Masuk & Daftar) */}
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      </div>
    </Router>
  );
}
