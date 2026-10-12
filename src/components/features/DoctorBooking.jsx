import { useState } from 'react';
import {
  Calendar,
  Clock,
  Video,
  Building,
  CheckCircle2,
  AlertCircle,
  FileText,
  User,
  ArrowRight,
} from 'lucide-react';
import { dokterList } from '../../utils/dummyData';

/**
 * DoctorBooking — Formulir pemesanan konsultasi Tatap Muka atau Telemedisin
 */
export default function DoctorBooking({ onBookingSuccess }) {
  const [konsultasiType, setKonsultasiType] = useState('telemedicine'); // 'offline' | 'telemedicine'
  const [formData, setFormData] = useState({
    dokterId: 'dr-001',
    namaPasien: '',
    tanggal: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    jam: '09:00 - 09:30',
    keluhan: '',
    riwayatAlergi: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const slotWaktu = [
    '08:30 - 09:00',
    '09:00 - 09:30',
    '10:00 - 10:30',
    '11:00 - 11:30',
    '13:30 - 14:00',
    '14:30 - 15:00',
    '15:30 - 16:00',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dokterObj = dokterList.find((d) => d.id === formData.dokterId);
    const bookingResult = {
      ...formData,
      jenisKonsultasi: konsultasiType === 'telemedicine' ? 'Telekonsultasi Online' : 'Tatap Muka di Poliklinik',
      dokter: dokterObj ? dokterObj.nama : '',
      spesialisasi: dokterObj ? dokterObj.spesialisasi : '',
      bookingId: `BK-${Math.floor(100000 + Math.random() * 900000)}`,
    };

    setIsSuccess(true);
    if (onBookingSuccess) {
      onBookingSuccess(bookingResult);
    }
  };

  return (
    <div className="rounded-2xl border border-(--color-border) bg-(--color-card) p-6 shadow-sm sm:p-8">
      {/* Tab Pilihan Konsultasi: Online vs Tatap Muka */}
      <div className="mb-8">
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-(--color-text-secondary)">
          Pilih Metode Konsultasi
        </label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setKonsultasiType('telemedicine')}
            className={`focus-ring flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
              konsultasiType === 'telemedicine'
                ? 'border-(--color-accent) bg-(--color-accent)/10 shadow-sm'
                : 'border-(--color-border) bg-(--color-bg-secondary) hover:border-(--color-accent)/40'
            }`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                konsultasiType === 'telemedicine'
                  ? 'bg-(--color-accent) text-white'
                  : 'bg-(--color-border) text-(--color-text-secondary)'
              }`}
            >
              <Video className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-(--color-text-primary)">
                Telekonsultasi Online
              </p>
              <p className="mt-0.5 text-xs text-(--color-text-secondary)">
                Konsultasi langsung via chat & video call tanpa perlu datang ke rumah sakit.
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setKonsultasiType('offline')}
            className={`focus-ring flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
              konsultasiType === 'offline'
                ? 'border-(--color-accent) bg-(--color-accent)/10 shadow-sm'
                : 'border-(--color-border) bg-(--color-bg-secondary) hover:border-(--color-accent)/40'
            }`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                konsultasiType === 'offline'
                  ? 'bg-(--color-accent) text-white'
                  : 'bg-(--color-border) text-(--color-text-secondary)'
              }`}
            >
              <Building className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-(--color-text-primary)">
                Tatap Muka di Poliklinik
              </p>
              <p className="mt-0.5 text-xs text-(--color-text-secondary)">
                Pemeriksaan fisik langsung dengan dokter spesialis di gedung rumah sakit.
              </p>
            </div>
          </button>
        </div>
      </div>

      {isSuccess ? (
        <div className="animate-fade-in rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-(--color-text-primary)">
            Janji Temu Berhasil Terdaftar!
          </h3>
          <p className="mx-auto mt-1 max-w-md text-xs text-(--color-text-secondary)">
            Jadwal konsultasi Anda telah dikonfirmasi oleh sistem antrean dokter. Detail verifikasi telah dikirimkan ke WhatsApp Anda.
          </p>
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="focus-ring btn-press mt-4 rounded-xl bg-(--color-accent) px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-(--color-accent-dark)"
          >
            Buat Janji Lainnya
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-(--color-text-primary)">
                Nama Pasien *
              </label>
              <div className="relative">
                <User className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-(--color-text-secondary)" />
                <input
                  type="text"
                  name="namaPasien"
                  required
                  value={formData.namaPasien}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama lengkap"
                  className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) py-2.5 pr-4 pl-10 text-sm text-(--color-text-primary) placeholder:text-(--color-text-secondary)/60"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-(--color-text-primary)">
                Pilih Dokter Spesialis *
              </label>
              <select
                name="dokterId"
                value={formData.dokterId}
                onChange={handleInputChange}
                className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) px-3 py-2.5 text-sm text-(--color-text-primary)"
              >
                {dokterList.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.nama} ({doc.spesialisasi})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-(--color-text-primary)">
                Pilih Tanggal Konsultasi *
              </label>
              <div className="relative">
                <Calendar className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-(--color-text-secondary)" />
                <input
                  type="date"
                  name="tanggal"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.tanggal}
                  onChange={handleInputChange}
                  className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) py-2.5 pr-4 pl-10 text-sm text-(--color-text-primary)"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-(--color-text-primary)">
                Pilih Sesi Jam *
              </label>
              <div className="relative">
                <Clock className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-(--color-text-secondary)" />
                <select
                  name="jam"
                  value={formData.jam}
                  onChange={handleInputChange}
                  className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) py-2.5 pr-4 pl-10 text-sm text-(--color-text-primary)"
                >
                  {slotWaktu.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot} WIB
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold text-(--color-text-primary)">
              Catatan Keluhan / Gejala Utama *
            </label>
            <textarea
              name="keluhan"
              rows={3}
              required
              value={formData.keluhan}
              onChange={handleInputChange}
              placeholder="Ceritakan gejala sakit yang dialami (misal: demam sejak 3 hari, nyeri ulu hati)..."
              className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) p-3 text-sm text-(--color-text-primary) placeholder:text-(--color-text-secondary)/60"
            />
          </div>

          <div className="rounded-xl border border-(--color-border) bg-(--color-bg-secondary) p-3 text-xs text-(--color-text-secondary)">
            <p className="flex items-center gap-1.5 font-semibold text-(--color-text-primary)">
              <AlertCircle className="h-4 w-4 text-(--color-accent)" />
              Informasi Pemesanan
            </p>
            <p className="mt-1">
              {konsultasiType === 'telemedicine'
                ? 'Link ruang telemedisin terenkripsi akan aktif otomatis di bawah ini begitu jadwal dikonfirmasi.'
                : 'Harap hadir di poliklinik lantai 2 minimal 15 menit sebelum sesi jam yang Anda pilih.'}
            </p>
          </div>

          <button
            type="submit"
            className="focus-ring btn-press flex w-full items-center justify-center gap-2 rounded-xl bg-(--color-accent) px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-(--color-accent-dark)"
          >
            Konfirmasi Pendaftaran Konsultasi
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
}
