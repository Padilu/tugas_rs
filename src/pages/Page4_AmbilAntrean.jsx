import { useState } from 'react';
import {
  Ticket,
  Clock,
  Users,
  CheckCircle2,
  AlertCircle,
  QrCode,
  Sparkles,
} from 'lucide-react';
import QueueCard from '../components/features/QueueCard';
import TicketGenerator from '../components/features/TicketGenerator';
import { antreanContoh } from '../utils/dummyData';

/**
 * Page 4: Ambil Antrean Mandiri (AmbilAntrean)
 * Dashboard antrean real-time per poliklinik & formulir cetak tiket online instan
 */
export default function Page4_AmbilAntrean() {
  const [selectedPoli, setSelectedPoli] = useState('Poli Penyakit Dalam');
  const [lastTicket, setLastTicket] = useState(null);

  // Status poliklinik aktif untuk QueueCard dashboard
  const poliQueues = [
    {
      poli: 'Poli Penyakit Dalam',
      dokter: 'Dr. Fikri Nurhakim, Sp.PD',
      antreanSekarang: 'A-015',
      antreanBerikutnya: 'A-016',
      totalMenunggu: 5,
      estimasiMenit: 15,
      status: 'Sedang Dilayani',
    },
    {
      poli: 'Poli Bedah',
      dokter: 'Dr. Fadhilah Alkahfi, Sp.B',
      antreanSekarang: 'B-008',
      antreanBerikutnya: 'B-009',
      totalMenunggu: 3,
      estimasiMenit: 25,
      status: 'Sedang Dilayani',
    },
    {
      poli: 'Poli Anak',
      dokter: 'Dr. Firman Rizqi, Sp.A',
      antreanSekarang: 'C-012',
      antreanBerikutnya: 'C-013',
      totalMenunggu: 4,
      estimasiMenit: 10,
      status: 'Sedang Dilayani',
    },
    {
      poli: 'Poli Jantung',
      dokter: 'Dr. Gerald Matheus, Sp.JP',
      antreanSekarang: 'J-004',
      antreanBerikutnya: 'J-005',
      totalMenunggu: 6,
      estimasiMenit: 35,
      status: 'Sedang Dilayani',
    },
    {
      poli: 'Klinik Kulit',
      dokter: 'dr. Biaji Rajabiya, Sp.DVE',
      antreanSekarang: 'K-007',
      antreanBerikutnya: 'K-008',
      totalMenunggu: 2,
      estimasiMenit: 20,
      status: 'Sedang Dilayani',
    },
  ];

  const handlePilihPoliDariCard = (namaPoli) => {
    setSelectedPoli(namaPoli);
    window.scrollTo({ top: 580, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 py-12 sm:py-16">
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-(--color-accent)/30 bg-(--color-accent)/10 px-3.5 py-1 text-xs font-semibold text-(--color-accent)">
            <Ticket className="h-4 w-4" />
            Sistem Antrean Digital Terintegrasi
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-(--color-text-primary) sm:text-4xl lg:text-5xl">
            Ambil & Pantau <span className="text-gradient">Antrean Rumah Sakit</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-(--color-text-secondary) sm:text-base">
            Pantau pergerakan antrean poliklinik secara langsung tanpa perlu berdesakan di ruang tunggu, atau daftarkan antrean mandiri untuk hari ini dan besok.
          </p>
        </div>
      </section>

      {/* Live Queue Cards Dashboard */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-(--color-text-primary)">
              Status Antrean Poli Hari Ini (Real-Time)
            </h2>
            <p className="text-xs text-(--color-text-secondary)">
              Data diperbarui secara otomatis setiap ada panggilan di loket poliklinik.
            </p>
          </div>
          <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Live Server Sinkron
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {poliQueues.map((item) => (
            <QueueCard
              key={item.poli}
              poli={item.poli}
              dokter={item.dokter}
              antreanSekarang={item.antreanSekarang}
              antreanBerikutnya={item.antreanBerikutnya}
              totalMenunggu={item.totalMenunggu}
              estimasiMenit={item.estimasiMenit}
              status={item.status}
              onPilihPoli={handlePilihPoliDariCard}
            />
          ))}
        </div>
      </section>

      {/* Ticket Generator Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 border-b border-(--color-border) pb-4">
          <h2 className="text-xl font-bold text-(--color-text-primary)">
            Pendaftaran & Penerbitan Tiket Antrean Online
          </h2>
          <p className="text-xs text-(--color-text-secondary)">
            Tiket yang diterbitkan dapat langsung ditunjukkan ke petugas loket atau di-scan pada Kios Mandiri RS Sehat Sentosa.
          </p>
        </div>

        <TicketGenerator
          selectedPoliAwal={selectedPoli}
          onTicketGenerated={(ticket) => setLastTicket(ticket)}
        />
      </section>
    </div>
  );
}
