import { useState } from 'react';
import {
  FileText,
  Search,
  Filter,
  Eye,
  Download,
  Calendar,
  CheckCircle2,
  Clock,
  User,
} from 'lucide-react';
import { hasilLabContoh } from '../../utils/dummyData';

/**
 * LabResultTable — Tabel rekam medis & hasil laboratorium/radiologi yang dapat difilter
 */
export default function LabResultTable({ onSelectResult }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [kategoriFilter, setKategoriFilter] = useState('Semua');
  const [statusFilter, setStatusFilter] = useState('Semua');

  // Filter logic
  const filteredData = hasilLabContoh.filter((item) => {
    const matchSearch =
      item.namaPasien.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.jenisPemeriksaan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.idPasien.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.dokterPengirim.toLowerCase().includes(searchTerm.toLowerCase());

    const matchKategori =
      kategoriFilter === 'Semua' || item.kategori === kategoriFilter;

    const matchStatus =
      statusFilter === 'Semua' || item.status === statusFilter;

    return matchSearch && matchKategori && matchStatus;
  });

  return (
    <div className="space-y-4">
      {/* Search & Filter Toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-(--color-text-secondary)" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari tes lab, nama pasien, no. RM, atau dokter..."
            className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-card) py-2.5 pr-4 pl-10 text-xs sm:text-sm text-(--color-text-primary) placeholder:text-(--color-text-secondary)/60"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={kategoriFilter}
            onChange={(e) => setKategoriFilter(e.target.value)}
            className="focus-ring rounded-xl border border-(--color-border) bg-(--color-card) px-3 py-2.5 text-xs text-(--color-text-primary)"
          >
            <option value="Semua">Semua Kategori</option>
            <option value="Laboratorium">Laboratorium</option>
            <option value="Radiologi">Radiologi</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="focus-ring rounded-xl border border-(--color-border) bg-(--color-card) px-3 py-2.5 text-xs text-(--color-text-primary)"
          >
            <option value="Semua">Semua Status</option>
            <option value="Selesai">Selesai Terbit</option>
            <option value="Proses">Sedang Dianalisis</option>
          </select>
        </div>
      </div>

      {/* Tabel Data Rekam Lab */}
      <div className="overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-card) shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-(--color-border) bg-(--color-bg-secondary) text-[11px] font-bold uppercase tracking-wider text-(--color-text-secondary)">
              <tr>
                <th className="px-5 py-3.5">Pemeriksaan & No. RM</th>
                <th className="px-5 py-3.5">Nama Pasien</th>
                <th className="px-5 py-3.5">Tanggal</th>
                <th className="px-5 py-3.5">Dokter Pengirim</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--color-border)">
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr
                    key={item.id}
                    className="transition-colors hover:bg-(--color-bg-secondary)/60"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-start gap-2.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--color-accent)/10 text-(--color-accent)">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-bold text-(--color-text-primary)">
                            {item.jenisPemeriksaan}
                          </p>
                          <span className="text-[11px] text-(--color-text-secondary)">
                            RM: {item.idPasien} • {item.kategori}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 font-medium text-(--color-text-primary)">
                      {item.namaPasien}
                    </td>

                    <td className="px-5 py-4 text-xs text-(--color-text-secondary)">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.tanggalPemeriksaan}
                      </div>
                    </td>

                    <td className="px-5 py-4 text-xs text-(--color-text-secondary)">
                      {item.dokterPengirim}
                    </td>

                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="h-3 w-3" />
                        {item.status}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => onSelectResult(item)}
                        className="focus-ring btn-press inline-flex items-center gap-1.5 rounded-xl bg-(--color-accent)/10 px-3 py-1.5 text-xs font-bold text-(--color-accent) transition-all hover:bg-(--color-accent) hover:text-white"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        Lihat PDF
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-10 text-center text-xs text-(--color-text-secondary)"
                  >
                    Tidak ada catatan hasil tes lab yang cocok dengan pencarian Anda.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
