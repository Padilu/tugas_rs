import { useState } from 'react';
import {
  MessageSquare,
  Calendar,
  Video,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import DoctorBooking from '../components/features/DoctorBooking';
import ChatWindow from '../components/features/ChatWindow';

/**
 * Page 5: Konsultasi & Janji Temu (KonsultasiJanji)
 * Integrasi form booking konsultasi (Tatap Muka/Online) & simulasi ruang telemedisin interaktif
 */
export default function Page5_KonsultasiJanji() {
  const [activeDoctorId, setActiveDoctorId] = useState('dr-002');
  const [patientName, setPatientName] = useState('Bpk. Budi');
  const [lastBooking, setLastBooking] = useState(null);

  const handleBookingSuccess = (bookingData) => {
    setLastBooking(bookingData);
    setActiveDoctorId(bookingData.dokterId);
    setPatientName(bookingData.namaPasien || 'Pasien');
    window.scrollTo({ top: 650, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 py-12 sm:py-16">
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-(--color-accent)/30 bg-(--color-accent)/10 px-3.5 py-1 text-xs font-semibold text-(--color-accent)">
            <Video className="h-4 w-4" />
            Layanan Telemedisin & Temu Janji Spesialis
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-(--color-text-primary) sm:text-4xl lg:text-5xl">
            Konsultasi Medis & <span className="text-gradient">Buat Janji Temu</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-(--color-text-secondary) sm:text-base">
            Dapatkan penanganan medis terbaik dari dokter spesialis kami baik secara tatap muka langsung di poliklinik maupun telekonsultasi digital dari rumah.
          </p>
        </div>
      </section>

      {/* Main Grid: Form Booking & Live Chat Telemedicine */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Booking Section (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between border-b border-(--color-border) pb-3">
              <div>
                <h2 className="text-lg font-bold text-(--color-text-primary)">
                  Langkah 1: Reservasi Sesi Dokter
                </h2>
                <p className="text-xs text-(--color-text-secondary)">
                  Pilih metode Tatap Muka atau Telekonsultasi Online
                </p>
              </div>
            </div>

            <DoctorBooking onBookingSuccess={handleBookingSuccess} />
          </div>

          {/* Telemedicine Simulation Section (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between border-b border-(--color-border) pb-3">
              <div>
                <h2 className="text-lg font-bold text-(--color-text-primary)">
                  Langkah 2: Ruang Telemedisin Interaktif
                </h2>
                <p className="text-xs text-(--color-text-secondary)">
                  Simulasi percakapan langsung dengan dokter spesialis RS Sehat Sentosa
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-3 w-3" />
                Enkripsi Aktif
              </span>
            </div>

            <ChatWindow
              selectedDoctorId={activeDoctorId}
              namaPasien={patientName}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
