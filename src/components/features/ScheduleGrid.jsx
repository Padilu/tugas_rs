import { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Search,
  Filter,
  CheckCircle2,
  Stethoscope,
} from 'lucide-react';
import { dokterList, jadwalDokter } from '../../utils/dummyData';

/**
 * ScheduleGrid — Matriks jadwal praktik mingguan dokter dengan sistem filter interaktif
 * Filter berdasarkan hari, nama dokter, atau spesialisasi poliklinik.
 */
export default function ScheduleGrid({ activeDoctorIdFilter = '' }) {
  const [selectedHari, setSelectedHari] = useState('Semua');
  const [selectedDokter, setSelectedDokter] = useState(activeDoctorIdFilter || 'Semua');
  const [searchTerm, setSearchTerm] = useState('');

  const hariList = ['Semua', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

  // Flatten jadwal list
  const fullJadwalEntries = [];
  jadwalDokter.forEach((j) => {
    const doc = dokterList.find((d) => d.id === j.dokterId);
    if (doc) {
      j.jadwal.forEach((slot) => {
        fullJadwalEntries.push({
          dokterId: doc.id,
          namaDokter: doc.nama,
          spesialisasi: doc.spesialisasi,
          foto: doc.foto,
          hari: slot.hari,
          jam: slot.jam,
          ruangan: slot.ruangan,
        });
      });
    }
  });

  const filteredJadwal = fullJadwalEntries.filter((item) => {
    const matchHari = selectedHari === 'Semua' || item.hari === selectedHari;
    const matchDokter = selectedDokter === 'Semua' || item.dokterId === selectedDokter;
    const matchSearch =
      item.namaDokter.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.spesialisasi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ruangan.toLowerCase().includes(searchTerm.toLowerCase());

    return matchHari && matchDokter && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-(--color-border) bg-(--color-card) p-5 shadow-sm md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-(--color-text-secondary)" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari dokter, poli, atau ruangan praktik..."
            className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) py-2.5 pr-4 pl-10 text-xs sm:text-sm text-(--color-text-primary) placeholder:text-(--color-text-secondary)/60"
          />
        </div>

        {/* Doctor Select */}
        <div className="flex items-center gap-2">
          <Stethoscope className="h-4 w-4 text-(--color-accent)" />
          <select
            value={selectedDokter}
            onChange={(e) => setSelectedDokter(e.target.value)}
            className="focus-ring rounded-xl border border-(--color-border) bg-(--color-bg-secondary) px-3 py-2.5 text-xs text-(--color-text-primary)"
          >
            <option value="Semua">Semua Dokter Spesialis</option>
            {dokterList.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.nama}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Day Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-(--color-text-secondary)">Pilih Hari:</span>
        {hariList.map((h) => (
          <button
            key={h}
            onClick={() => setSelectedHari(h)}
            className={`focus-ring btn-press rounded-xl px-4 py-2 text-xs font-bold transition-all ${
              selectedHari === h
                ? 'bg-(--color-accent) text-white shadow-sm'
                : 'border border-(--color-border) bg-(--color-card) text-(--color-text-secondary) hover:border-(--color-accent)/40'
            }`}
          >
            {h}
          </button>
        ))}
      </div>

      {/* Schedule Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJadwal.length > 0 ? (
          filteredJadwal.map((slot, index) => (
            <div
              key={`${slot.dokterId}-${slot.hari}-${slot.jam}-${index}`}
              className="card-hover rounded-2xl border border-(--color-border) bg-(--color-card) p-5 shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={slot.foto}
                    alt={slot.namaDokter}
                    className="h-11 w-11 rounded-xl border border-(--color-border) bg-emerald-50 object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-(--color-text-primary)">
                      {slot.namaDokter}
                    </h4>
                    <p className="text-[11px] font-medium text-(--color-accent)">
                      {slot.spesialisasi}
                    </p>
                  </div>
                </div>

                <span className="rounded-lg bg-(--color-accent)/10 px-2.5 py-1 text-[11px] font-bold text-(--color-accent)">
                  {slot.hari}
                </span>
              </div>

              <div className="mt-4 space-y-2 rounded-xl bg-(--color-bg-secondary) p-3 text-xs">
                <div className="flex items-center gap-2 text-(--color-text-primary)">
                  <Clock className="h-3.5 w-3.5 text-(--color-accent)" />
                  <span className="font-semibold">{slot.jam} WIB</span>
                </div>
                <div className="flex items-center gap-2 text-(--color-text-secondary)">
                  <MapPin className="h-3.5 w-3.5 text-(--color-accent)" />
                  <span>{slot.ruangan}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full rounded-2xl border border-(--color-border) bg-(--color-card) p-10 text-center text-xs text-(--color-text-secondary)">
            Tidak ada jadwal praktik dokter yang sesuai dengan kriteria filter yang Anda pilih.
          </div>
        )}
      </div>
    </div>
  );
}
