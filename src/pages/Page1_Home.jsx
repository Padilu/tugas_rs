import { Link } from 'react-router-dom';
import {
  Heart,
  Stethoscope,
  Ticket,
  FlaskConical,
  MessageCircle,
  ArrowRight,
  Users,
  Award,
  Clock,
  ShieldCheck,
  Building,
  CheckCircle2,
  Calendar,
  Sparkles,
  PhoneCall,
} from 'lucide-react';
import { dokterList, statistikRS, infoRumahSakit, fasilitasList } from '../utils/dummyData';

/**
 * Page 1: Home (Beranda Utama)
 * Hero Section, Quick RS Overview, Founders Showcase, Facilities & CTAs
 */
export default function Page1_Home({ onOpenAuth }) {
  return (
    <div className="space-y-0">
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden bg-(--color-bg-secondary) px-4 py-20 sm:py-28 lg:py-32">
        {/* Glow ambient background lights */}
        <div className="absolute top-0 right-0 -z-0 h-96 w-96 rounded-full bg-(--color-accent)/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Text left column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="animate-fade-in">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-(--color-accent)/30 bg-(--color-accent)/10 px-4 py-1.5 text-xs font-semibold text-(--color-accent)">
                  <ShieldCheck className="h-4 w-4" />
                  Akreditasi KARS Paripurna Bintang Lima
                </span>

                <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-(--color-text-primary) sm:text-5xl lg:text-6xl">
                  Kesehatan Anda,{' '}
                  <span className="text-gradient">Prioritas Utama Kami</span>
                </h1>

                <p className="mt-6 text-base leading-relaxed text-(--color-text-secondary) sm:text-lg">
                  Selamat datang di <strong>{infoRumahSakit.namaLengkap}</strong>. Pusat pelayanan medis terpadu berbasis keunggulan klinis, teknologi modern, dan dedikasi 5 dokter spesialis pendiri untuk seluruh keluarga Indonesia.
                </p>

                {/* Primary Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/antrean"
                    className="focus-ring btn-press inline-flex items-center gap-2 rounded-xl bg-(--color-accent) px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:bg-(--color-accent-dark) hover:shadow-xl"
                  >
                    <Ticket className="h-4 w-4" />
                    Ambil Antrean Online
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    to="/konsultasi"
                    className="focus-ring btn-press inline-flex items-center gap-2 rounded-xl border border-(--color-border) bg-(--color-card) px-6 py-3.5 text-sm font-bold text-(--color-text-primary) shadow-sm transition-all duration-300 hover:border-(--color-accent) hover:shadow-md"
                  >
                    <Calendar className="h-4 w-4" />
                    Buat Janji Dokter
                  </Link>

                  {onOpenAuth && (
                    <button
                      type="button"
                      onClick={onOpenAuth}
                      className="focus-ring btn-press inline-flex items-center gap-2 rounded-xl bg-(--color-bg-secondary) px-4 py-3.5 text-xs font-bold text-(--color-text-secondary) transition-all hover:text-(--color-text-primary)"
                    >
                      <Users className="h-3.5 w-3.5" />
                      Portal Pasien
                    </button>
                  )}
                </div>

                {/* Emergency banner helper */}
                <div className="mt-8 flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-xs text-(--color-text-secondary)">
                  <PhoneCall className="h-4 w-4 text-(--color-accent)" />
                  <span>
                    Butuh ambulans atau tindakan darurat? Hubungi IGD 24 Jam kami di{' '}
                    <strong className="text-(--color-accent)">{infoRumahSakit.teleponDarurat}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats & Live Highlights right column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="animate-fade-in space-y-4 rounded-3xl border border-(--color-border) bg-(--color-card) p-6 shadow-xl sm:p-8">
                <div className="flex items-center justify-between border-b border-(--color-border) pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-(--color-accent) text-white">
                      <Heart className="h-5 w-5 fill-current" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-(--color-text-primary)">
                        RS Sehat Sentosa
                      </h3>
                      <p className="text-[10px] text-(--color-text-secondary)">Pusat Layanan Unggulan</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    Buka 24 Jam
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between rounded-xl bg-(--color-bg-secondary) p-3">
                    <span className="text-xs text-(--color-text-secondary)">Tingkat Kepuasan Pasien</span>
                    <span className="text-sm font-black text-(--color-accent)">{statistikRS.tingkatKepuasanPasien}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-(--color-bg-secondary) p-3">
                    <span className="text-xs text-(--color-text-secondary)">Pasien Telah Terlayani</span>
                    <span className="text-sm font-black text-(--color-text-primary)">{statistikRS.totalPasienTerlayani}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-(--color-bg-secondary) p-3">
                    <span className="text-xs text-(--color-text-secondary)">Dokter Spesialis & Sub-Spesialis</span>
                    <span className="text-sm font-black text-(--color-accent)">{statistikRS.jumlahDokterSpesialis} Dokter</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-(--color-bg-secondary) p-3">
                    <span className="text-xs text-(--color-text-secondary)">Kapasitas Tempat Tidur</span>
                    <span className="text-sm font-black text-(--color-text-primary)">{statistikRS.jumlahTempatTidur} Bed Modern</span>
                  </div>
                </div>

                <Link
                  to="/profil"
                  className="focus-ring btn-press flex w-full items-center justify-center gap-2 rounded-xl bg-(--color-accent)/10 py-3 text-xs font-bold text-(--color-accent) transition-all hover:bg-(--color-accent) hover:text-white"
                >
                  Lihat Profil Lengkap RS & Fasilitas
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Layanan Unggulan Section ===== */}
      <section className="bg-(--color-bg-primary) px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-(--color-accent)">
              Pelayanan Rumah Sakit
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-(--color-text-primary) sm:text-4xl">
              Layanan Utama Terpadu
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-(--color-text-secondary)">
              Akses cepat dan mudah ke seluruh fasilitas kesehatan digital RS Sehat Sentosa secara transparan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Ticket,
                title: 'Antrean Online Mandiri',
                desc: 'Pesan nomor antrean poli dari rumah dengan estimasi waktu akurat dan barcode otomatis.',
                link: '/antrean',
              },
              {
                icon: Stethoscope,
                title: 'Jadwal Dokter Spesialis',
                desc: 'Lihat jadwal praktik harian 5 dokter spesialis pendiri dan dokter spesialis lainnya.',
                link: '/dokter',
              },
              {
                icon: MessageCircle,
                title: 'Telemedisin & Janji Temu',
                desc: 'Konsultasi keluhan medis secara daring via chat interaktif atau jadwalkan temu langsung.',
                link: '/konsultasi',
              },
              {
                icon: FlaskConical,
                title: 'Akses Hasil Lab & Radiologi',
                desc: 'Unduh dan cek laporan rekam medis laboratorium darah, rontgen, dan MRI secara digital.',
                link: '/hasil-lab',
              },
            ].map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Link
                  key={srv.title}
                  to={srv.link}
                  className="card-hover group rounded-2xl border border-(--color-border) bg-(--color-card) p-6 shadow-sm transition-all"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-accent)/10 text-(--color-accent) transition-colors group-hover:bg-(--color-accent) group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-(--color-text-primary)">{srv.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-(--color-text-secondary)">{srv.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-(--color-accent)">
                    Akses Fitur <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Founders Showcase Preview Cards ===== */}
      <section className="bg-(--color-bg-secondary) px-4 py-16 sm:py-20 border-t border-(--color-border)">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-(--color-accent)">
                Tenaga Medis Berpengalaman
              </span>
              <h2 className="mt-1 text-3xl font-extrabold text-(--color-text-primary)">
                5 Dewan Pendiri & Dokter Spesialis
              </h2>
              <p className="mt-1 text-xs text-(--color-text-secondary)">
                Para pionir di balik berdirinya RS Sehat Sentosa dengan dedikasi lebih dari satu dekade.
              </p>
            </div>

            <Link
              to="/dokter"
              className="focus-ring btn-press inline-flex items-center gap-1.5 rounded-xl border border-(--color-border) bg-(--color-card) px-4 py-2.5 text-xs font-bold text-(--color-text-primary) shadow-sm hover:border-(--color-accent)"
            >
              Lihat Jadwal Seluruh Dokter
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {dokterList.map((doc) => (
              <div
                key={doc.id}
                className="card-hover group rounded-2xl border border-(--color-border) bg-(--color-card) p-5 text-center shadow-sm"
              >
                <div className="relative mx-auto mb-3 h-20 w-20 overflow-hidden rounded-full border-2 border-(--color-accent)/30 bg-emerald-50 p-0.5">
                  <img
                    src={doc.foto}
                    alt={doc.nama}
                    className="h-full w-full rounded-full object-cover"
                  />
                  <span className="absolute right-0 bottom-0 flex h-5 w-5 items-center justify-center rounded-full bg-(--color-accent) text-white text-[10px]">
                    ★
                  </span>
                </div>

                <h3 className="text-xs font-bold text-(--color-text-primary)">{doc.nama}</h3>
                <p className="mt-0.5 text-[11px] font-semibold text-(--color-accent)">{doc.spesialisasi}</p>
                <span className="mt-1 inline-block rounded-full bg-(--color-bg-secondary) px-2 py-0.5 text-[10px] text-(--color-text-secondary)">
                  {doc.peran}
                </span>

                <div className="mt-3 border-t border-(--color-border) pt-2 text-[10px] text-(--color-text-secondary)">
                  <span>Pengalaman: {doc.pengalaman}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
