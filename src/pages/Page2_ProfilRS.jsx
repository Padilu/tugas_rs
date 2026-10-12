import {
  ShieldCheck,
  Award,
  Heart,
  Target,
  Eye,
  CheckCircle2,
  Building2,
  Siren,
  Scissors,
  FlaskConical,
  ScanLine,
  Pill,
  BedDouble,
  HeartPulse,
  Dumbbell,
  Users,
  Clock,
  Sparkles,
} from 'lucide-react';
import { infoRumahSakit, fasilitasList, statistikRS } from '../utils/dummyData';

/**
 * Page 2: Profil Rumah Sakit (ProfilRS)
 * Sejarah, Visi, Misi, Akreditasi, Komitmen Mutu, Unit Medis Darurat & Fasilitas Modern
 */
export default function Page2_ProfilRS() {
  const iconMap = {
    Siren: Siren,
    Scissors: Scissors,
    FlaskConical: FlaskConical,
    ScanLine: ScanLine,
    Pill: Pill,
    BedDouble: BedDouble,
    HeartPulse: HeartPulse,
    Dumbbell: Dumbbell,
  };

  return (
    <div className="space-y-16 py-12 sm:py-16">
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-(--color-border) bg-(--color-bg-secondary) p-8 sm:p-12 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-(--color-accent)/30 bg-(--color-accent)/10 px-3.5 py-1 text-xs font-semibold text-(--color-accent)">
                <Building2 className="h-4 w-4" />
                Profil & Integritas Medis
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-(--color-text-primary) sm:text-4xl lg:text-5xl">
                Rumah Sakit Umum <span className="text-gradient">Sehat Sentosa</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-(--color-text-secondary) sm:text-base">
                Didirikan sejak tahun {statistikRS.tahunBerdiri}, RS Sehat Sentosa berdedikasi mewujudkan standar tertinggi perawatan medis komprehensif yang memadukan keahlian klinis dokter spesialis dengan kasih sayang kemanusiaan.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-(--color-border) bg-(--color-card) p-5 text-center">
                <p className="text-2xl font-black text-(--color-accent)">{statistikRS.tahunBerdiri}</p>
                <p className="text-xs text-(--color-text-secondary)">Tahun Berdiri</p>
              </div>
              <div className="rounded-2xl border border-(--color-border) bg-(--color-card) p-5 text-center">
                <p className="text-2xl font-black text-(--color-accent)">{statistikRS.jumlahTempatTidur}</p>
                <p className="text-xs text-(--color-text-secondary)">Tempat Tidur</p>
              </div>
              <div className="rounded-2xl border border-(--color-border) bg-(--color-card) p-5 text-center">
                <p className="text-2xl font-black text-(--color-accent)">{statistikRS.jumlahDokterSpesialis}</p>
                <p className="text-xs text-(--color-text-secondary)">Dokter Spesialis</p>
              </div>
              <div className="rounded-2xl border border-(--color-border) bg-(--color-card) p-5 text-center">
                <p className="text-2xl font-black text-(--color-accent)">{statistikRS.tingkatKepuasanPasien}</p>
                <p className="text-xs text-(--color-text-secondary)">Kepuasan Pasien</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sejarah, Visi, Misi & Nilai Inti */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Visi & Misi */}
          <div className="rounded-2xl border border-(--color-border) bg-(--color-card) p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--color-accent)/10 text-(--color-accent)">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-(--color-text-primary)">Visi & Misi Rumah Sakit</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-bold text-(--color-accent)">
                  <Eye className="h-4 w-4" /> Visi Kami
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-(--color-text-secondary)">
                  Menjadi rumah sakit rujukan terdepan yang terpercaya di tingkat nasional dalam pelayanan medis spesialis bermutu tinggi, ramah pasien, dan berorientasi pada keselamatan jiwa.
                </p>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-sm font-bold text-(--color-accent)">
                  <Target className="h-4 w-4" /> Misi Kami
                </h3>
                <ul className="mt-2 space-y-2 text-xs text-(--color-text-secondary)">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    <span>Memberikan pelayanan kesehatan bermutu tinggi yang berorientasi pada keselamatan dan kepuasan pasien.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    <span>Mengembangkan keahlian medis dan penelitian klinis secara berkelanjutan bersama 5 dewan pendiri dokter spesialis.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    <span>Menyediakan sarana diagnostik modern, laboratorium mutakhir, dan sistem rekam medis digital terpadu.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    <span>Mewujudkan tata kelola rumah sakit yang profesional, akuntabel, transparan, dan berkeadilan bagi seluruh lapisan masyarakat.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Akreditasi & Komitmen Mutu */}
          <div className="rounded-2xl border border-(--color-border) bg-(--color-card) p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--color-accent)/10 text-(--color-accent)">
                <Award className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-(--color-text-primary)">Akreditasi & Komitmen Mutu</h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="h-3.5 w-3.5" /> Akreditasi Paripurna (Tingkat Tertinggi)
                </span>
                <p className="mt-2 text-xs text-(--color-text-secondary)">
                  Dianugerahi Sertifikat Akreditasi Paripurna oleh Komisi Akreditasi Rumah Sakit (KARS) Republik Indonesia dengan penilaian kepatuhan 99.4% terhadap standar pencegahan infeksi dan keselamatan pasien.
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-(--color-text-secondary)">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-(--color-accent)" />
                  <span>Sertifikasi ISO 9001:2015 Manajemen Mutu Layanan Kesehatan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-(--color-accent)" />
                  <span>Standar Higienitas & Pengendalian Infeksi Rumah Sakit (PPI) Internasional</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-(--color-accent)" />
                  <span>Fasilitas Penunjang Medik Siaga 24 Jam Non-Stop</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-(--color-accent)" />
                  <span>Kerjasama Resmi BPJS Kesehatan & 30+ Mitra Asuransi Swasta Terkemuka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Medis & Fasilitas Modern */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-(--color-accent)">
            Infrastruktur Kesehatan
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-(--color-text-primary)">
            Unit Layanan & Fasilitas Medis Modern
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs text-(--color-text-secondary)">
            Dilengkapi dengan teknologi terdepan untuk memastikan diagnosis akurat dan kenyamanan proses pemulihan pasien.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fasilitasList.map((fasilitas) => {
            const Icon = iconMap[fasilitas.ikon] || Building2;
            return (
              <div
                key={fasilitas.id}
                className="card-hover rounded-2xl border border-(--color-border) bg-(--color-card) p-6 shadow-sm transition-all"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-accent)/10 text-(--color-accent)">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-(--color-text-primary)">
                  {fasilitas.nama}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-(--color-text-secondary)">
                  {fasilitas.deskripsi}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
