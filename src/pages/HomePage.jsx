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
} from 'lucide-react';
import { dokterList, statistikRS, infoRumahSakit } from '../utils/dummyData';

/**
 * HomePage — Halaman utama RS Sehat Sentosa.
 * Menampilkan hero section, statistik, layanan unggulan, dan tim dokter pendiri.
 */
export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden bg-(--color-bg-secondary) px-4 py-20 sm:py-28 lg:py-32">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -z-0 h-96 w-96 rounded-full bg-(--color-accent)/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-0 h-80 w-80 rounded-full bg-(--color-accent)/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-in">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-(--color-accent)/30
                              bg-(--color-accent)/10 px-4 py-1.5 text-xs font-semibold text-(--color-accent)">
                <ShieldCheck className="h-3.5 w-3.5" />
                Rumah Sakit Terakreditasi Paripurna
              </span>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-(--color-text-primary)
                            sm:text-5xl lg:text-6xl">
                Kesehatan Anda,{' '}
                <span className="text-gradient">Prioritas Kami</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-(--color-text-secondary)">
                {infoRumahSakit.slogan}. Didukung oleh tim dokter spesialis berpengalaman dan
                fasilitas medis berstandar internasional.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/antrean"
                  className="focus-ring btn-press inline-flex items-center gap-2 rounded-xl bg-(--color-accent)
                             px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300
                             hover:bg-(--color-accent-dark) hover:shadow-xl"
                >
                  <Ticket className="h-4 w-4" />
                  Ambil Antrean Online
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/dokter"
                  className="focus-ring btn-press inline-flex items-center gap-2 rounded-xl border
                             border-(--color-border) bg-(--color-bg-primary) px-6 py-3.5 text-sm font-bold
                             text-(--color-text-primary) shadow-sm transition-all duration-300
                             hover:border-(--color-accent) hover:shadow-md"
                >
                  <Stethoscope className="h-4 w-4" />
                  Lihat Jadwal Dokter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Statistik RS ===== */}
      <section className="border-y border-(--color-border) bg-(--color-bg-primary) px-4 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { icon: Users, value: statistikRS.totalPasienTerlayani, label: 'Pasien Terlayani' },
            { icon: Stethoscope, value: statistikRS.jumlahDokterSpesialis, label: 'Dokter Spesialis' },
            { icon: Award, value: statistikRS.tingkatKepuasanPasien, label: 'Kepuasan Pasien' },
            { icon: Clock, value: '24/7', label: 'Layanan IGD' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`animate-fade-in text-center delay-${(idx + 1) * 100}`}
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl
                               bg-(--color-accent)/10 text-(--color-accent)">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-2xl font-extrabold text-(--color-text-primary) sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-(--color-text-secondary)">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== Layanan Unggulan ===== */}
      <section className="bg-(--color-bg-secondary) px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-(--color-text-primary) sm:text-4xl">
              Layanan <span className="text-gradient">Unggulan</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-(--color-text-secondary)">
              Kami menyediakan berbagai layanan kesehatan terpadu untuk memenuhi kebutuhan medis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Stethoscope,
                title: 'Konsultasi Spesialis',
                desc: 'Pemeriksaan oleh dokter spesialis berpengalaman dengan jadwal fleksibel.',
                path: '/dokter',
              },
              {
                icon: Ticket,
                title: 'Antrean Online',
                desc: 'Ambil nomor antrean dari rumah dan pantau estimasi waktu secara real-time.',
                path: '/antrean',
              },
              {
                icon: FlaskConical,
                title: 'Hasil Laboratorium',
                desc: 'Akses hasil pemeriksaan darah, radiologi, dan lab lainnya secara digital.',
                path: '/hasil-lab',
              },
              {
                icon: MessageCircle,
                title: 'Telekonsultasi',
                desc: 'Konsultasi online dengan dokter dari mana saja, kapan saja.',
                path: '/konsultasi',
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  to={service.path}
                  className={`card-hover focus-ring group rounded-2xl border border-(--color-border)
                             bg-(--color-card) p-6 shadow-sm transition-all animate-fade-in delay-${(idx + 1) * 100}`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl
                                 bg-(--color-accent)/10 text-(--color-accent) transition-colors
                                 group-hover:bg-(--color-accent) group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-(--color-text-primary)">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-(--color-text-secondary)">
                    {service.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-(--color-accent)
                                  opacity-0 transition-opacity group-hover:opacity-100">
                    Selengkapnya <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Tim Dokter Pendiri ===== */}
      <section className="bg-(--color-bg-primary) px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-(--color-text-primary) sm:text-4xl">
              Tim Pendiri & <span className="text-gradient">Dokter Spesialis</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-(--color-text-secondary)">
              Dipimpin oleh para dokter spesialis berpengalaman yang berdedikasi untuk pelayanan
              kesehatan berkualitas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {dokterList.map((doc, idx) => (
              <div
                key={doc.id}
                className={`card-hover group rounded-2xl border border-(--color-border) bg-(--color-card)
                           p-5 text-center shadow-sm animate-fade-in delay-${(idx + 1) * 100}`}
              >
                <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border-2
                               border-(--color-accent)/30 bg-(--color-bg-secondary) p-0.5
                               transition-all group-hover:border-(--color-accent)">
                  <img
                    src={doc.foto}
                    alt={`Foto ${doc.nama}`}
                    className="h-full w-full rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-bold text-(--color-text-primary)">{doc.nama}</h3>
                <p className="mt-1 text-xs font-medium text-(--color-accent)">{doc.spesialisasi}</p>
                <p className="mt-0.5 text-[10px] text-(--color-text-secondary)">{doc.peran}</p>

                <div className="mt-3 flex items-center justify-center gap-3 text-xs text-(--color-text-secondary)">
                  <span className="flex items-center gap-1">
                    <Heart className="h-3 w-3 text-amber-500" fill="currentColor" />
                    {doc.rating}
                  </span>
                  <span>{doc.totalPasien.toLocaleString('id-ID')} pasien</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/dokter"
              className="focus-ring btn-press inline-flex items-center gap-2 rounded-xl border
                         border-(--color-border) bg-(--color-bg-secondary) px-6 py-3 text-sm font-bold
                         text-(--color-text-primary) shadow-sm transition-all hover:border-(--color-accent)
                         hover:shadow-md"
            >
              Lihat Semua Dokter & Jadwal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
