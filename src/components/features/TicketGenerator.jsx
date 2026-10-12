import { useState } from 'react';
import {
  Ticket,
  Calendar,
  User,
  CreditCard,
  QrCode,
  Printer,
  CheckCircle2,
  Clock,
  Sparkles,
  Download,
} from 'lucide-react';
import { dokterList } from '../../utils/dummyData';

/**
 * TicketGenerator — Form pemesanan antrean online & display tiket dengan QR Code
 */
export default function TicketGenerator({ selectedPoliAwal = '', onTicketGenerated }) {
  const [formData, setFormData] = useState({
    namaPasien: '',
    nik: '',
    nomorHP: '',
    poli: selectedPoliAwal || 'Poli Penyakit Dalam',
    dokterId: 'dr-002',
    tanggal: new Date().toISOString().split('T')[0],
    penjamin: 'BPJS Kesehatan',
  });

  const [generatedTicket, setGeneratedTicket] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const poliOptions = [
    { id: 'Poli Penyakit Dalam', label: 'Poli Penyakit Dalam', defaultDoc: 'dr-002' },
    { id: 'Poli Bedah', label: 'Poli Bedah Umum', defaultDoc: 'dr-001' },
    { id: 'Poli Anak', label: 'Poli Anak (Pediatri)', defaultDoc: 'dr-003' },
    { id: 'Poli Jantung', label: 'Poli Jantung & Pembuluh Darah', defaultDoc: 'dr-004' },
    { id: 'Klinik Kulit', label: 'Klinik Kulit & Kelamin', defaultDoc: 'dr-005' },
  ];

  const handlePoliChange = (e) => {
    const chosenPoli = e.target.value;
    const match = poliOptions.find((p) => p.id === chosenPoli);
    setFormData((prev) => ({
      ...prev,
      poli: chosenPoli,
      dokterId: match ? match.defaultDoc : prev.dokterId,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const prefixMap = {
        'Poli Bedah': 'B',
        'Poli Penyakit Dalam': 'A',
        'Poli Anak': 'C',
        'Poli Jantung': 'J',
        'Klinik Kulit': 'K',
      };
      const prefix = prefixMap[formData.poli] || 'A';
      const randomNum = Math.floor(Math.random() * 40) + 18;
      const nomorAntrean = `${prefix}-${String(randomNum).padStart(3, '0')}`;
      const kodeTiket = `TKT-${new Date().getFullYear()}${Math.floor(100000 + Math.random() * 900000)}`;

      const doctorObj = dokterList.find((d) => d.id === formData.dokterId) || dokterList[0];

      const ticketResult = {
        kodeTiket,
        nomorAntrean,
        namaPasien: formData.namaPasien,
        nik: formData.nik,
        poli: formData.poli,
        dokter: doctorObj.nama,
        spesialisasi: doctorObj.spesialisasi,
        tanggal: formData.tanggal,
        penjamin: formData.penjamin,
        estimasiPelayanan: '10:30 - 11:00 WIB',
        dibuatPada: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }),
      };

      setGeneratedTicket(ticketResult);
      setIsSubmitting(false);
      if (onTicketGenerated) onTicketGenerated(ticketResult);
    }, 600);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* Form Input (7 cols) */}
      <div className="rounded-2xl border border-(--color-border) bg-(--color-card) p-6 shadow-sm lg:col-span-7 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--color-accent)/10 text-(--color-accent)">
            <Ticket className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-(--color-text-primary)">
              Formulir Ambil Antrean Mandiri
            </h2>
            <p className="text-xs text-(--color-text-secondary)">
              Isi identitas pasien untuk mendapatkan tiket antrean resmi dengan barcode verifikasi.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-(--color-text-primary)">
              Nama Lengkap Pasien *
            </label>
            <div className="relative">
              <User className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-(--color-text-secondary)" />
              <input
                type="text"
                name="namaPasien"
                required
                value={formData.namaPasien}
                onChange={handleInputChange}
                placeholder="Contoh: Muhammad Ilham"
                className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) py-2.5 pr-4 pl-10 text-sm text-(--color-text-primary) placeholder:text-(--color-text-secondary)/60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-(--color-text-primary)">
                NIK / No. KTP (16 Digit) *
              </label>
              <div className="relative">
                <CreditCard className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-(--color-text-secondary)" />
                <input
                  type="text"
                  name="nik"
                  required
                  maxLength={16}
                  value={formData.nik}
                  onChange={handleInputChange}
                  placeholder="3276xxxxxxxxxxxx"
                  className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) py-2.5 pr-4 pl-10 text-sm text-(--color-text-primary) placeholder:text-(--color-text-secondary)/60"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-(--color-text-primary)">
                Nomor WhatsApp / HP *
              </label>
              <input
                type="tel"
                name="nomorHP"
                required
                value={formData.nomorHP}
                onChange={handleInputChange}
                placeholder="0812xxxxxxxx"
                className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) px-4 py-2.5 text-sm text-(--color-text-primary) placeholder:text-(--color-text-secondary)/60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-(--color-text-primary)">
                Pilih Poliklinik *
              </label>
              <select
                name="poli"
                value={formData.poli}
                onChange={handlePoliChange}
                className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) px-3 py-2.5 text-sm text-(--color-text-primary)"
              >
                {poliOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
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
                Tanggal Kunjungan *
              </label>
              <div className="relative">
                <Calendar className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-(--color-text-secondary)" />
                <input
                  type="date"
                  name="tanggal"
                  required
                  value={formData.tanggal}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={handleInputChange}
                  className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) py-2.5 pr-4 pl-10 text-sm text-(--color-text-primary)"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-(--color-text-primary)">
                Jenis Penjamin *
              </label>
              <select
                name="penjamin"
                value={formData.penjamin}
                onChange={handleInputChange}
                className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) px-3 py-2.5 text-sm text-(--color-text-primary)"
              >
                <option value="BPJS Kesehatan">BPJS Kesehatan (Tercover 100%)</option>
                <option value="Mandiri / Umum">Pasien Umum / Mandiri</option>
                <option value="Asuransi Swasta">Asuransi Swasta / Korporasi</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="focus-ring btn-press mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-(--color-accent) px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-(--color-accent-dark) disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 animate-spin" />
                Memproses Tiket...
              </span>
            ) : (
              <>
                <Ticket className="h-4 w-4" />
                Buat Nomor Antrean Sekarang
              </>
            )}
          </button>
        </form>
      </div>

      {/* Tampilan Tiket Digital (5 cols) */}
      <div className="lg:col-span-5">
        {generatedTicket ? (
          <div className="animate-fade-in relative overflow-hidden rounded-2xl border-2 border-dashed border-(--color-accent) bg-(--color-card) p-6 shadow-xl">
            {/* Pita Status Tiket */}
            <div className="mb-4 flex items-center justify-between border-b border-(--color-border) pb-4">
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Tiket Resmi Terbit
                </span>
                <p className="mt-1 text-xs text-(--color-text-secondary)">ID: {generatedTicket.kodeTiket}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="focus-ring rounded-lg border border-(--color-border) bg-(--color-bg-secondary) p-2 text-(--color-text-secondary) hover:text-(--color-accent)"
                  title="Cetak Tiket"
                >
                  <Printer className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Nomor Antrean Utama */}
            <div className="my-5 rounded-2xl bg-(--color-bg-secondary) p-6 text-center">
              <span className="text-xs font-semibold tracking-wider text-(--color-text-secondary) uppercase">
                Nomor Antrean Anda
              </span>
              <div className="my-2 text-5xl font-black tracking-tight text-(--color-accent)">
                {generatedTicket.nomorAntrean}
              </div>
              <span className="inline-block rounded-md bg-(--color-accent)/10 px-3 py-1 text-xs font-semibold text-(--color-accent)">
                {generatedTicket.poli}
              </span>
            </div>

            {/* Rincian Tiket */}
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between border-b border-(--color-border)/50 pb-1.5">
                <span className="text-(--color-text-secondary)">Nama Pasien</span>
                <span className="font-bold text-(--color-text-primary)">{generatedTicket.namaPasien}</span>
              </div>
              <div className="flex justify-between border-b border-(--color-border)/50 pb-1.5">
                <span className="text-(--color-text-secondary)">Dokter Pemeriksa</span>
                <span className="font-bold text-(--color-text-primary)">{generatedTicket.dokter}</span>
              </div>
              <div className="flex justify-between border-b border-(--color-border)/50 pb-1.5">
                <span className="text-(--color-text-secondary)">Tanggal Kunjungan</span>
                <span className="font-bold text-(--color-text-primary)">{generatedTicket.tanggal}</span>
              </div>
              <div className="flex justify-between border-b border-(--color-border)/50 pb-1.5">
                <span className="text-(--color-text-secondary)">Estimasi Pelayanan</span>
                <span className="font-bold text-amber-500">{generatedTicket.estimasiPelayanan}</span>
              </div>
              <div className="flex justify-between pb-1.5">
                <span className="text-(--color-text-secondary)">Penjamin</span>
                <span className="font-bold text-(--color-accent)">{generatedTicket.penjamin}</span>
              </div>
            </div>

            {/* Simulated QR Code Bar */}
            <div className="mt-5 flex items-center justify-between rounded-xl border border-(--color-border) bg-(--color-bg-secondary) p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-1 text-slate-900 shadow">
                  <QrCode className="h-10 w-10" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-(--color-text-primary)">Scan di Kios Mandiri</p>
                  <p className="text-[10px] text-(--color-text-secondary)">Validasi kedatangan 15 menit sebelum poli buka</p>
                </div>
              </div>
              <Download className="h-4 w-4 text-(--color-text-secondary)" />
            </div>
          </div>
        ) : (
          <div className="flex h-full min-h-[360px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-(--color-border) bg-(--color-card)/50 p-8 text-center">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--color-bg-secondary) text-(--color-text-secondary)">
              <Ticket className="h-7 w-7 opacity-60" />
            </div>
            <h4 className="text-sm font-bold text-(--color-text-primary)">Tiket Belum Dibuat</h4>
            <p className="mt-1 max-w-xs text-xs text-(--color-text-secondary)">
              Silakan lengkapi formulir di samping untuk menerbitkan nomor antrean online dan barcode verifikasi RS.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
