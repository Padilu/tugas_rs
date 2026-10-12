import { Users, Clock, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

/**
 * QueueCard — Kartu informasi antrean real-time per poliklinik
 * Menampilkan nomor antrean aktif, pasien saat ini, status, dan estimasi waktu.
 */
export default function QueueCard({
  poli = 'Poli Penyakit Dalam',
  dokter = 'Dr. Fikri Nurhakim, Sp.PD',
  antreanSekarang = 'A-015',
  antreanBerikutnya = 'A-016',
  totalMenunggu = 4,
  estimasiMenit = 15,
  status = 'Aktif',
  onPilihPoli,
}) {
  const isAktif = status === 'Aktif' || status === 'Sedang Dilayani';

  return (
    <div className="card-hover relative overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-card) p-6 shadow-sm transition-all duration-300">
      {/* Header Badge & Title */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-(--color-accent)/10 px-3 py-1 text-xs font-semibold text-(--color-accent)">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--color-accent) opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-(--color-accent)"></span>
            </span>
            {status}
          </span>
          <h3 className="mt-2 text-lg font-bold text-(--color-text-primary)">{poli}</h3>
          <p className="text-xs text-(--color-text-secondary)">{dokter}</p>
        </div>

        <div className="rounded-xl border border-(--color-border) bg-(--color-bg-secondary) p-2.5 text-center">
          <span className="block text-[10px] font-medium uppercase tracking-wider text-(--color-text-secondary)">
            Dipanggil
          </span>
          <span className="text-2xl font-black text-(--color-accent)">{antreanSekarang}</span>
        </div>
      </div>

      {/* Estimasi & Info Stat */}
      <div className="mt-5 grid grid-cols-2 gap-3 border-y border-(--color-border) py-3.5">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-(--color-accent)" />
          <div>
            <p className="text-[11px] text-(--color-text-secondary)">Estimasi Tunggu</p>
            <p className="text-xs font-bold text-(--color-text-primary)">~{estimasiMenit} Menit</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-(--color-accent)" />
          <div>
            <p className="text-[11px] text-(--color-text-secondary)">Antrean Berikutnya</p>
            <p className="text-xs font-bold text-(--color-text-primary)">
              {antreanBerikutnya} ({totalMenunggu} antre)
            </p>
          </div>
        </div>
      </div>

      {/* Footer Call to Action */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-(--color-text-secondary)">
          {isAktif ? (
            <>
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              <span>Loket & Dokter Buka</span>
            </>
          ) : (
            <>
              <AlertCircle className="h-3.5 w-3.5 text-amber-500" />
              <span>Istirahat Siang</span>
            </>
          )}
        </div>

        {onPilihPoli && (
          <button
            onClick={() => onPilihPoli(poli)}
            className="focus-ring btn-press inline-flex items-center gap-1 text-xs font-semibold text-(--color-accent) transition-colors hover:text-(--color-accent-dark)"
          >
            Pilih Poli Ini
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
