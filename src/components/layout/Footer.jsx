import { Link } from 'react-router-dom';
import {
  Heart,
  Phone,
  Siren,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  ExternalLink,
} from 'lucide-react';
import { infoRumahSakit } from '../../utils/dummyData';

/**
 * Footer — Bagian bawah halaman dengan informasi kontak darurat,
 * tautan cepat, alamat, dan hak cipta RS Sehat Sentosa.
 */

const quickLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Profil Rumah Sakit', path: '/profil' },
  { label: 'Dokter & Jadwal', path: '/dokter' },
  { label: 'Ambil Antrean Online', path: '/antrean' },
  { label: 'Konsultasi Online', path: '/konsultasi' },
  { label: 'Hasil Lab & Radiologi', path: '/hasil-lab' },
  { label: 'FAQ & Kontak', path: '/faq' },
];

const layananLinks = [
  { label: 'Instalasi Gawat Darurat', path: '/profil' },
  { label: 'Rawat Inap', path: '/profil' },
  { label: 'Laboratorium', path: '/hasil-lab' },
  { label: 'Radiologi', path: '/hasil-lab' },
  { label: 'Farmasi', path: '/profil' },
  { label: 'Rehabilitasi Medik', path: '/profil' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-(--color-border) bg-(--color-bg-secondary)"
      role="contentinfo"
    >
      {/* Emergency strip */}
      <div className="bg-(--color-accent) px-4 py-3">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Phone className="h-4 w-4 animate-pulse-soft" />
            <span>Hotline 24/7: {infoRumahSakit.telepon}</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Siren className="h-4 w-4 animate-pulse-soft" />
            <span>IGD Darurat: {infoRumahSakit.teleponDarurat}</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp: {infoRumahSakit.whatsapp}</span>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Tentang RS */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-(--color-accent) shadow-lg">
                <Heart className="h-5 w-5 text-white" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-base font-bold text-(--color-text-primary)">
                  RS Sehat Sentosa
                </h3>
                <p className="text-[10px] text-(--color-text-secondary)">
                  {infoRumahSakit.slogan}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-(--color-text-secondary)">
              Rumah sakit umum dengan pelayanan kesehatan berkualitas, didukung oleh tim dokter
              spesialis berpengalaman dan fasilitas medis modern.
            </p>
            <div className="flex items-start gap-2 text-sm text-(--color-text-secondary)">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-(--color-accent)" />
              <span>{infoRumahSakit.alamat}</span>
            </div>
          </div>

          {/* Column 2 — Tautan Cepat */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-(--color-text-primary)">
              Tautan Cepat
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path + link.label}>
                  <Link
                    to={link.path}
                    className="focus-ring group inline-flex items-center gap-1.5 rounded text-sm
                               text-(--color-text-secondary) transition-colors hover:text-(--color-accent)"
                  >
                    <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Layanan Kami */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-(--color-text-primary)">
              Layanan Kami
            </h4>
            <ul className="space-y-2.5">
              {layananLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="focus-ring group inline-flex items-center gap-1.5 rounded text-sm
                               text-(--color-text-secondary) transition-colors hover:text-(--color-accent)"
                  >
                    <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Jam Operasional & Kontak */}
          <div className="space-y-5">
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-(--color-text-primary)">
                Jam Operasional
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-(--color-text-secondary)">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-(--color-accent)" />
                  <div>
                    <span className="font-medium text-(--color-text-primary)">Poliklinik:</span>
                    <br />
                    {infoRumahSakit.jamOperasional.poliklinik}
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm text-(--color-text-secondary)">
                  <Siren className="mt-0.5 h-4 w-4 shrink-0 text-(--color-accent)" />
                  <div>
                    <span className="font-medium text-(--color-text-primary)">IGD:</span>
                    <br />
                    {infoRumahSakit.jamOperasional.igd}
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-(--color-text-primary)">
                Kontak
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-(--color-text-secondary)">
                  <Mail className="h-4 w-4 text-(--color-accent)" />
                  <a href={`mailto:${infoRumahSakit.email}`} className="hover:text-(--color-accent) transition-colors">
                    {infoRumahSakit.email}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-(--color-text-secondary)">
                  <Phone className="h-4 w-4 text-(--color-accent)" />
                  <span>{infoRumahSakit.telepon}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-(--color-border) bg-(--color-bg-primary) px-4 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-xs text-(--color-text-secondary)">
            &copy; {currentYear} {infoRumahSakit.namaLengkap}. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <p className="text-xs text-(--color-text-secondary)">
            Dibangun dengan{' '}
            <Heart className="inline h-3 w-3 text-red-500" fill="currentColor" /> oleh Tim Pendiri
            RS Sehat Sentosa
          </p>
        </div>
      </div>
    </footer>
  );
}
