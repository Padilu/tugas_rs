import { useEffect } from 'react';
import {
  X,
  Download,
  Printer,
  ShieldCheck,
  Building2,
  Calendar,
  User,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import { infoRumahSakit } from '../../utils/dummyData';

/**
 * PDFViewerModal — Modal dokumen PDF preview hasil tes lab/radiologi
 * Menampilkan kop surat resmi RS Sehat Sentosa, tabel parameter klinis, dan tombol Unduh PDF.
 */
export default function PDFViewerModal({ isOpen, onClose, labData }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !labData) return null;

  const handleDownloadSimulated = () => {
    alert(`Mengunduh berkas PDF resmi: [${labData.jenisPemeriksaan}_${labData.idPasien}.pdf]`);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-pdf-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/65 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Container Kertas Hasil PDF */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col rounded-2xl border border-(--color-border) bg-(--color-card) shadow-2xl animate-fade-in-scale">
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between border-b border-(--color-border) bg-(--color-bg-secondary) px-6 py-3.5">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-(--color-accent)/10 px-2 py-0.5 text-xs font-bold text-(--color-accent)">
              Pratinjau PDF
            </span>
            <span className="text-xs font-medium text-(--color-text-secondary)">
              {labData.idPasien}.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadSimulated}
              className="focus-ring btn-press flex items-center gap-1.5 rounded-xl bg-(--color-accent) px-3 py-1.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-(--color-accent-dark)"
            >
              <Download className="h-3.5 w-3.5" />
              Unduh PDF
            </button>
            <button
              onClick={handlePrint}
              className="focus-ring rounded-lg border border-(--color-border) bg-(--color-card) p-1.5 text-(--color-text-secondary) hover:text-(--color-text-primary)"
              title="Cetak Berkas"
            >
              <Printer className="h-4 w-4" />
            </button>
            <button
              onClick={onClose}
              className="focus-ring rounded-lg border border-(--color-border) bg-(--color-card) p-1.5 text-(--color-text-secondary) hover:text-(--color-text-primary)"
              aria-label="Tutup Pratinjau"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Lembar Dokumen Medis Resmi (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10">
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-800 shadow-sm dark:border-slate-700 sm:p-8">
            {/* Kop Surat Rumah Sakit */}
            <div className="flex items-center justify-between border-b-2 border-emerald-600 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white font-black text-xl shadow">
                  RS
                </div>
                <div>
                  <h2 className="text-lg font-black tracking-tight text-slate-900">
                    {infoRumahSakit.namaLengkap}
                  </h2>
                  <p className="text-[11px] text-slate-600">{infoRumahSakit.alamat}</p>
                  <p className="text-[10px] text-slate-500">
                    Telp: {infoRumahSakit.telepon} • Web: {infoRumahSakit.website}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="rounded border border-emerald-600 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                  AKREDITASI KARS PARIPURNA
                </span>
                <p className="mt-1 text-[10px] text-slate-500">ID Laporan: {labData.id}</p>
              </div>
            </div>

            <div className="my-5 text-center">
              <h3
                id="modal-pdf-title"
                className="text-base font-extrabold uppercase tracking-wide text-slate-900"
              >
                LEMBAR LAPORAN HASIL {labData.kategori.toUpperCase()}
              </h3>
              <p className="text-xs text-slate-600">{labData.jenisPemeriksaan}</p>
            </div>

            {/* Identitas Pasien & Dokter Pengirim */}
            <div className="grid grid-cols-2 gap-4 rounded-lg bg-slate-50 p-4 text-xs text-slate-700">
              <div className="space-y-1">
                <p>
                  <strong className="text-slate-900">No. Rekam Medis:</strong> {labData.idPasien}
                </p>
                <p>
                  <strong className="text-slate-900">Nama Pasien:</strong> {labData.namaPasien}
                </p>
                <p>
                  <strong className="text-slate-900">Jenis Kelamin:</strong> Laki-Laki / Perempuan
                </p>
              </div>
              <div className="space-y-1 text-right">
                <p>
                  <strong className="text-slate-900">Tgl Pemeriksaan:</strong>{' '}
                  {labData.tanggalPemeriksaan}
                </p>
                <p>
                  <strong className="text-slate-900">Dokter Pengirim:</strong>{' '}
                  {labData.dokterPengirim}
                </p>
                <p>
                  <strong className="text-slate-900">Status Validasi:</strong> Selesai Terverifikasi
                </p>
              </div>
            </div>

            {/* Tabel Rincian Parameter Klinis */}
            <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
              <table className="w-full text-left text-xs text-slate-800">
                <thead className="border-b border-slate-200 bg-slate-100 font-bold text-slate-700">
                  <tr>
                    <th className="px-3 py-2.5">Parameter Uji</th>
                    <th className="px-3 py-2.5">Hasil</th>
                    <th className="px-3 py-2.5">Satuan</th>
                    <th className="px-3 py-2.5">Nilai Rujukan</th>
                    <th className="px-3 py-2.5 text-right">Keterangan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {labData.hasil.map((row, idx) => {
                    const isAbnormal = row.keterangan === 'Tinggi' || row.keterangan === 'Rendah';
                    return (
                      <tr key={idx} className={isAbnormal ? 'bg-amber-50/70 font-semibold' : ''}>
                        <td className="px-3 py-2 text-slate-900">{row.parameter}</td>
                        <td className="px-3 py-2 font-bold text-slate-900">{row.nilai}</td>
                        <td className="px-3 py-2 text-slate-500">{row.satuan}</td>
                        <td className="px-3 py-2 text-slate-500">{row.nilaiNormal}</td>
                        <td className="px-3 py-2 text-right">
                          <span
                            className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold ${
                              isAbnormal
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            {row.keterangan}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Catatan Dokter Penanggung Jawab & Tanda Tangan */}
            <div className="mt-8 flex items-end justify-between border-t border-slate-200 pt-4 text-xs text-slate-600">
              <div className="max-w-xs">
                <p className="font-semibold text-slate-900">Catatan Laboratorium:</p>
                <p className="text-[11px] text-slate-500">
                  Hasil pemeriksaan ini telah divalidasi oleh analis laboratorium bersertifikasi dan dokter patologi klinik penanggung jawab.
                </p>
              </div>

              <div className="text-center">
                <p className="text-[11px] text-slate-500">Jakarta, {labData.tanggalPemeriksaan}</p>
                <div className="my-2 flex h-14 items-center justify-center text-slate-400 italic">
                  [Tanda Tangan Digital Terenkripsi]
                </div>
                <p className="font-bold text-slate-900 underline">{labData.dokterPengirim}</p>
                <p className="text-[10px] text-slate-500">SIP: 503/421-RS/DOK/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
