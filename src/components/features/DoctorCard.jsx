import { Star, Heart, Calendar, Award, GraduationCap, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * DoctorCard — Kartu profil dokter spesialis & pendiri rumah sakit
 * Menampilkan avatar, gelar spesialisasi, badge pendiri, total pasien, dan tombol aksi
 */
export default function DoctorCard({ doctor, onLihatJadwal }) {
  const isFounder = doctor.peran?.toLowerCase().includes('pendiri');

  return (
    <div className="card-hover group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-card) p-6 shadow-sm transition-all duration-300">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          {isFounder ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-1 text-[11px] font-bold text-amber-600 dark:text-amber-400">
              <Award className="h-3 w-3" />
              Dewan Pendiri RS
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-1 text-[11px] font-bold text-blue-600 dark:text-blue-400">
              Dokter Spesialis
            </span>
          )}

          <div className="flex items-center gap-1 text-xs font-bold text-(--color-text-primary)">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {doctor.rating}
          </div>
        </div>

        {/* Doctor Avatar & Basic Info */}
        <div className="my-5 flex items-center gap-4">
          <div className="relative">
            <img
              src={doctor.foto}
              alt={doctor.nama}
              className="h-16 w-16 rounded-2xl border-2 border-(--color-accent)/30 bg-emerald-50 object-cover shadow-sm group-hover:border-(--color-accent) transition-all"
            />
            <span className="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full bg-(--color-accent) text-white shadow">
              <Heart className="h-2.5 w-2.5 fill-current" />
            </span>
          </div>

          <div>
            <h3 className="text-base font-extrabold text-(--color-text-primary)">
              {doctor.nama}
            </h3>
            <p className="text-xs font-semibold text-(--color-accent)">
              {doctor.spesialisasi}
            </p>
            <p className="mt-0.5 text-[11px] text-(--color-text-secondary)">
              {doctor.peran}
            </p>
          </div>
        </div>

        {/* Bio Singkat */}
        <p className="line-clamp-2 text-xs leading-relaxed text-(--color-text-secondary)">
          {doctor.bio}
        </p>

        {/* Meta Stats: Pendidikan & Pengalaman */}
        <div className="mt-4 space-y-1.5 border-t border-(--color-border) pt-3 text-[11px] text-(--color-text-secondary)">
          <div className="flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5 text-(--color-accent)" />
            <span className="truncate">{doctor.pendidikan}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-(--color-accent)" />
            <span>Pengalaman Praktik: {doctor.pengalaman}</span>
          </div>
        </div>
      </div>

      {/* Button Actions */}
      <div className="mt-5 flex items-center gap-2 pt-3 border-t border-(--color-border)/50">
        <button
          onClick={() => onLihatJadwal && onLihatJadwal(doctor.id)}
          className="focus-ring btn-press flex-1 rounded-xl border border-(--color-border) bg-(--color-bg-secondary) py-2 text-center text-xs font-bold text-(--color-text-primary) transition-all hover:border-(--color-accent)"
        >
          Lihat Jadwal
        </button>

        <Link
          to="/konsultasi"
          className="focus-ring btn-press flex items-center justify-center gap-1 rounded-xl bg-(--color-accent) px-3 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-(--color-accent-dark)"
        >
          <span>Pesan</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
