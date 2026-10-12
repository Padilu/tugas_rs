import { useState } from 'react';
import {
  FlaskConical,
  FileText,
  Search,
  Download,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import LabResultTable from '../components/features/LabResultTable';
import PDFViewerModal from '../components/features/PDFViewerModal';
import { hasilLabContoh } from '../utils/dummyData';

/**
 * Page 6: Hasil Laboratorium & Radiologi (HasilLab)
 * Tabel penelusuran hasil uji diagnostik & modal dokumen PDF resmi dengan aksi unduh
 */
export default function Page6_HasilLab() {
  const [selectedLab, setSelectedLab] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenPdf = (labItem) => {
    setSelectedLab(labItem);
    setIsModalOpen(true);
  };

  const handleClosePdf = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-12 py-12 sm:py-16">
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-(--color-accent)/30 bg-(--color-accent)/10 px-3.5 py-1 text-xs font-semibold text-(--color-accent)">
            <FlaskConical className="h-4 w-4" />
            Portal Rekam Medis & Penunjang Diagnostik
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-(--color-text-primary) sm:text-4xl lg:text-5xl">
            Hasil Uji Laboratorium & <span className="text-gradient">Radiologi</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-(--color-text-secondary) sm:text-base">
            Akses rekam hasil pemeriksaan darah, rontgen dada thorax, dan scan MRI kepala secara aman dan tersertifikasi digital dari instalasi penunjang medik kami.
          </p>
        </div>
      </section>

      {/* Highlights Banner Penjelasan Hasil Lab */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-(--color-border) bg-(--color-card) p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-(--color-text-primary)">Tersertifikasi Digital</h3>
                <p className="text-[11px] text-(--color-text-secondary)">Dilengkapi tanda tangan digital dokter penanggung jawab</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-(--color-border) bg-(--color-card) p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-(--color-text-primary)">Akses Cepat 24/7</h3>
                <p className="text-[11px] text-(--color-text-secondary)">Hasil tes darah rutin siap dalam 2-4 jam</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-(--color-border) bg-(--color-card) p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Download className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-(--color-text-primary)">Unduh PDF Resmi</h3>
                <p className="text-[11px] text-(--color-text-secondary)">Dapat langsung dicetak untuk rujukan dokter spesialis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Table Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 border-b border-(--color-border) pb-4">
          <h2 className="text-xl font-bold text-(--color-text-primary)">
            Daftar Rekam Medis & Riwayat Pemeriksaan
          </h2>
          <p className="text-xs text-(--color-text-secondary)">
            Klik tombol "Lihat PDF" pada baris pemeriksaan untuk membuka dokumen laporan medis lengkap.
          </p>
        </div>

        <LabResultTable onSelectResult={handleOpenPdf} />
      </section>

      {/* PDF Modal Viewer */}
      <PDFViewerModal
        isOpen={isModalOpen}
        onClose={handleClosePdf}
        labData={selectedLab}
      />
    </div>
  );
}
