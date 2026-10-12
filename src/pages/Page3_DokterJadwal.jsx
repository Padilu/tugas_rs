import { useState } from 'react';
import {
  Stethoscope,
  Calendar,
  Award,
  Search,
  Filter,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { dokterList } from '../utils/dummyData';
import DoctorCard from '../components/features/DoctorCard';
import ScheduleGrid from '../components/features/ScheduleGrid';

/**
 * Page 3: Dokter & Jadwal Praktik (DokterJadwal)
 * Menampilkan profil mendalam 5 dokter pendiri & matriks jadwal praktik mingguan interaktif
 */
export default function Page3_DokterJadwal() {
  const [activeTab, setActiveTab] = useState('profil'); // 'profil' | 'jadwal'
  const [selectedDoctorFilter, setSelectedDoctorFilter] = useState('Semua');

  const handleLihatJadwalDokter = (docId) => {
    setSelectedDoctorFilter(docId);
    setActiveTab('jadwal');
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 py-12 sm:py-16">
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-(--color-accent)/30 bg-(--color-accent)/10 px-3.5 py-1 text-xs font-semibold text-(--color-accent)">
            <Stethoscope className="h-4 w-4" />
            Tim Medis Profesional
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-(--color-text-primary) sm:text-4xl lg:text-5xl">
            Dokter Spesialis & <span className="text-gradient">Jadwal Praktik</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-(--color-text-secondary) sm:text-base">
            Konsultasikan masalah kesehatan Anda bersama 5 dokter spesialis pendiri dan dokter ahli RS Sehat Sentosa dengan rekam jejak klinis terpercaya.
          </p>

          {/* Tab Switcher: Profil vs Jadwal */}
          <div className="mx-auto mt-8 inline-flex rounded-2xl border border-(--color-border) bg-(--color-card) p-1.5 shadow-sm">
            <button
              onClick={() => setActiveTab('profil')}
              className={`focus-ring btn-press flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${
                activeTab === 'profil'
                  ? 'bg-(--color-accent) text-white shadow'
                  : 'text-(--color-text-secondary) hover:text-(--color-text-primary)'
              }`}
            >
              <Award className="h-4 w-4" />
              Profil 5 Dewan Pendiri
            </button>
            <button
              onClick={() => setActiveTab('jadwal')}
              className={`focus-ring btn-press flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all ${
                activeTab === 'jadwal'
                  ? 'bg-(--color-accent) text-white shadow'
                  : 'text-(--color-text-secondary) hover:text-(--color-text-primary)'
              }`}
            >
              <Calendar className="h-4 w-4" />
              Jadwal Mingguan Interaktif
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {activeTab === 'profil' ? (
          <div className="space-y-8">
            <div className="border-b border-(--color-border) pb-4">
              <h2 className="text-xl font-bold text-(--color-text-primary)">
                5 Dokter Spesialis & Pendiri Rumah Sakit
              </h2>
              <p className="text-xs text-(--color-text-secondary)">
                Klik tombol "Lihat Jadwal" pada setiap kartu untuk langsung melihat sesi praktik mingguan dokter terkait.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dokterList.map((doc) => (
                <DoctorCard
                  key={doc.id}
                  doctor={doc}
                  onLihatJadwal={handleLihatJadwalDokter}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="border-b border-(--color-border) pb-4">
              <h2 className="text-xl font-bold text-(--color-text-primary)">
                Tabel Jadwal Praktik Poliklinik Spesialis
              </h2>
              <p className="text-xs text-(--color-text-secondary)">
                Saring jadwal dokter berdasarkan hari praktik, nama dokter, atau ruangan pemeriksaan.
              </p>
            </div>

            <ScheduleGrid activeDoctorIdFilter={selectedDoctorFilter} />
          </div>
        )}
      </section>
    </div>
  );
}
