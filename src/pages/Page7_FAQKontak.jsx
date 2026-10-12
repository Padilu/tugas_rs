import { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Phone,
  Siren,
  MessageCircle,
  MapPin,
  Mail,
  Send,
  Clock,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { faqList, infoRumahSakit } from '../utils/dummyData';

/**
 * Page 7: FAQ & Kontak Kami (FAQKontak)
 * Accordion interaktif untuk FAQ, Pusat Hotline 24/7, Peta Lokasi RS, & Formulir Pesan Masukan
 */
export default function Page7_FAQKontak() {
  const [openFaqId, setOpenFaqId] = useState(faqList[0]?.id || null);
  const [inquiryForm, setInquiryForm] = useState({
    nama: '',
    email: '',
    telepon: '',
    kategori: 'Informasi Umum',
    pesan: '',
  });
  const [isSent, setIsSent] = useState(false);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInquiryForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setInquiryForm({
        nama: '',
        email: '',
        telepon: '',
        kategori: 'Informasi Umum',
        pesan: '',
      });
    }, 400);
  };

  return (
    <div className="space-y-16 py-12 sm:py-16">
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-(--color-accent)/30 bg-(--color-accent)/10 px-3.5 py-1 text-xs font-semibold text-(--color-accent)">
            <HelpCircle className="h-4 w-4" />
            Pusat Informasi & Bantuan Pasien
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-(--color-text-primary) sm:text-4xl lg:text-5xl">
            Pertanyaan Umum & <span className="text-gradient">Hubungi Kami</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-(--color-text-secondary) sm:text-base">
            Temukan jawaban cepat atas pertanyaan seputar BPJS, antrean, dan layanan medis kami, atau hubungi pusat layanan terpadu RS Sehat Sentosa 24 jam.
          </p>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-(--color-text-primary)">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="mt-1 text-xs text-(--color-text-secondary)">
            Klik pertanyaan untuk membuka dan membaca rincian jawaban lengkap
          </p>
        </div>

        <div className="space-y-3">
          {faqList.map((item) => {
            const isOpen = openFaqId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-card) transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="focus-ring flex w-full items-center justify-between p-5 text-left text-sm font-bold text-(--color-text-primary) transition-colors hover:bg-(--color-bg-secondary)/50"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{item.pertanyaan}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-(--color-accent) transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="animate-fade-in border-t border-(--color-border)/50 bg-(--color-bg-secondary)/30 px-5 py-4 text-xs leading-relaxed text-(--color-text-secondary)">
                    {item.jawaban}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Emergency Hotlines Strip */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-600 to-teal-700 p-8 text-white shadow-xl sm:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                <Siren className="h-7 w-7 animate-pulse-soft" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-emerald-100">IGD Darurat 24 Jam</p>
                <p className="text-xl font-black">{infoRumahSakit.teleponDarurat}</p>
                <p className="text-[11px] text-emerald-100">Siaga Ambulans & Dokter Resusitasi</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                <Phone className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-emerald-100">Call Center Rumah Sakit</p>
                <p className="text-xl font-black">{infoRumahSakit.telepon}</p>
                <p className="text-[11px] text-emerald-100">Pendaftaran & Informasi Pasien</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                <MessageCircle className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-emerald-100">WhatsApp Resmi RS</p>
                <p className="text-xl font-black">{infoRumahSakit.whatsapp}</p>
                <p className="text-[11px] text-emerald-100">Layanan Konsultasi & CS Cepat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid: Formulir Pesan Masukan & Peta Lokasi Interaktif */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Formulir Kontak (6 cols) */}
          <div className="rounded-2xl border border-(--color-border) bg-(--color-card) p-6 shadow-sm lg:col-span-6 sm:p-8">
            <h3 className="text-lg font-bold text-(--color-text-primary)">
              Kirimkan Pesan atau Pertanyaan
            </h3>
            <p className="mt-1 text-xs text-(--color-text-secondary)">
              Tim humas dan pelayanan pasien kami akan membalas via email atau WhatsApp dalam 1x24 jam kerja.
            </p>

            {isSent ? (
              <div className="animate-fade-in my-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-500" />
                <h4 className="mt-2 text-sm font-bold text-(--color-text-primary)">
                  Pesan Anda Telah Terkirim!
                </h4>
                <p className="mt-1 text-xs text-(--color-text-secondary)">
                  Terima kasih telah menghubungi RS Sehat Sentosa. Kami akan segera menindaklanjuti pesan Anda.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="focus-ring mt-4 rounded-xl bg-(--color-accent) px-4 py-2 text-xs font-bold text-white hover:bg-(--color-accent-dark)"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-(--color-text-primary)">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="nama"
                    required
                    value={inquiryForm.nama}
                    onChange={handleInputChange}
                    placeholder="Nama Anda"
                    className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) px-3.5 py-2.5 text-xs text-(--color-text-primary)"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-(--color-text-primary)">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={inquiryForm.email}
                      onChange={handleInputChange}
                      placeholder="email@domain.com"
                      className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) px-3.5 py-2.5 text-xs text-(--color-text-primary)"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-(--color-text-primary)">
                      Nomor Telepon / WA *
                    </label>
                    <input
                      type="tel"
                      name="telepon"
                      required
                      value={inquiryForm.telepon}
                      onChange={handleInputChange}
                      placeholder="08123456789"
                      className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) px-3.5 py-2.5 text-xs text-(--color-text-primary)"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-(--color-text-primary)">
                    Kategori Bantuan *
                  </label>
                  <select
                    name="kategori"
                    value={inquiryForm.kategori}
                    onChange={handleInputChange}
                    className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) px-3 py-2.5 text-xs text-(--color-text-primary)"
                  >
                    <option value="Informasi Umum">Informasi Umum Layanan RS</option>
                    <option value="Pelayanan BPJS">Pertanyaan Seputar BPJS Kesehatan</option>
                    <option value="Jadwal Dokter">Konfirmasi Jadwal Dokter Spesialis</option>
                    <option value="Kritik & Saran">Kritik, Masukan & Saran Layanan</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-(--color-text-primary)">
                    Isi Pesan / Pertanyaan *
                  </label>
                  <textarea
                    name="pesan"
                    rows={4}
                    required
                    value={inquiryForm.pesan}
                    onChange={handleInputChange}
                    placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                    className="focus-ring w-full rounded-xl border border-(--color-border) bg-(--color-bg-secondary) p-3 text-xs text-(--color-text-primary)"
                  />
                </div>

                <button
                  type="submit"
                  className="focus-ring btn-press flex w-full items-center justify-center gap-2 rounded-xl bg-(--color-accent) px-6 py-3 text-xs font-bold text-white shadow transition-all hover:bg-(--color-accent-dark)"
                >
                  <Send className="h-4 w-4" />
                  Kirim Pesan Sekarang
                </button>
              </form>
            )}
          </div>

          {/* Lokasi & Peta Placeholder (6 cols) */}
          <div className="space-y-6 lg:col-span-6">
            <div className="rounded-2xl border border-(--color-border) bg-(--color-card) p-6 shadow-sm">
              <h3 className="text-lg font-bold text-(--color-text-primary)">
                Lokasi Gedung Rumah Sakit
              </h3>
              <p className="mt-1 text-xs text-(--color-text-secondary)">
                {infoRumahSakit.alamat}
              </p>

              {/* Interactive map placeholder */}
              <div className="relative mt-4 h-64 overflow-hidden rounded-xl border border-(--color-border) bg-(--color-bg-secondary)">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-accent) text-white shadow-lg animate-bounce">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h4 className="mt-3 text-sm font-bold text-(--color-text-primary)">
                    Gedung Utama RS Sehat Sentosa
                  </h4>
                  <p className="mt-1 text-[11px] text-(--color-text-secondary)">
                    Akses mudah: 500m dari Exit Tol Medika Jaya, halte TransJakarta Sehat Makmur tepat di depan lobi.
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring btn-press mt-3 inline-flex items-center gap-1.5 rounded-lg border border-(--color-border) bg-(--color-card) px-3 py-1.5 text-xs font-bold text-(--color-accent) shadow-sm hover:border-(--color-accent)"
                  >
                    <span>Buka di Google Maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Info Jam Buka */}
              <div className="mt-5 space-y-2 border-t border-(--color-border) pt-4 text-xs text-(--color-text-secondary)">
                <div className="flex items-center justify-between">
                  <span>Instalasi Gawat Darurat (IGD):</span>
                  <span className="font-bold text-emerald-500">24 Jam (Setiap Hari)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Poliklinik Spesialis:</span>
                  <span className="font-bold text-(--color-text-primary)">Senin - Sabtu: 08:00 - 17:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Farmasi & Apotek RS:</span>
                  <span className="font-bold text-(--color-text-primary)">24 Jam Siaga</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
