// ============================================================================
// dummyData.js — Data Mock Rumah Sakit Sehat Sentosa
// Seluruh konten dalam Bahasa Indonesia
// ============================================================================

// ===== Tim Pendiri & Dokter =====
export const dokterList = [
  {
    id: 'dr-001',
    nama: 'Dr. Fadhilah Alkahfi, Sp.B',
    spesialisasi: 'Spesialis Bedah',
    peran: 'Pendiri & Direktur Utama',
    foto: 'src/assets/Padil.jpg',
    pendidikan: 'Universitas Gunadarma — Fakultas Kedokteran',
    pengalaman: '15 tahun',
    bio: 'Seorang ahli bedah berpengalaman dengan keahlian di bidang bedah umum dan bedah minimal invasif. Berdedikasi membangun rumah sakit yang mengutamakan keselamatan pasien.',
    rating: 4.9,
    totalPasien: 3240,
  },
  {
    id: 'dr-002',
    nama: 'Dr. Fikri Nurhakim, Sp.PD',
    spesialisasi: 'Spesialis Penyakit Dalam',
    peran: 'Pendiri & Wakil Direktur',
    foto: 'src/assets/Pikri.jpg',
    pendidikan: 'Universitas Gunadarma — Fakultas Kedokteran',
    pengalaman: '49 tahun',
    bio: 'Spesialis penyakit dalam yang menangani berbagai kasus penyakit kronis dan metabolik. Dikenal dengan pendekatan holistik terhadap pasien.',
    rating: 4.8,
    totalPasien: 93045830,
  },
  {
    id: 'dr-003',
    nama: 'Dr. Firman Rizqi, Sp.A',
    spesialisasi: 'Spesialis Anak',
    peran: 'Pendiri & Kepala Departemen Pediatri',
    foto: 'src/assets/Piman.jpg',
    pendidikan: 'Universitas Gunadarma — Fakultas Kedokteran',
    pengalaman: '12 tahun',
    bio: 'Dokter spesialis anak yang berpengalaman menangani tumbuh kembang anak, imunisasi, dan penyakit anak. Ramah dan komunikatif kepada pasien kecil.',
    rating: 4.9,
    totalPasien: 5680,
  },
  {
    id: 'dr-004',
    nama: 'Dr. Gerald Matheus, Sp.JP',
    spesialisasi: 'Spesialis Jantung & Pembuluh Darah',
    peran: 'Pendiri & Kepala Departemen Kardiologi',
    foto: 'src/assets/Gerald.jpg',
    pendidikan: 'Universitas Gunadarma — Fakultas Kedokteran',
    pengalaman: '14 tahun',
    bio: 'Ahli jantung dan pembuluh darah yang menangani berbagai kasus kardiovaskular kompleks. Aktif dalam penelitian inovasi prosedur jantung.',
    rating: 4.8,
    totalPasien: 2890,
  },
  {
    id: 'dr-005',
    nama: 'Dr. Biaji Rajabiya, Sp.DVE',
    spesialisasi: 'Spesialis Kulit & Kelamin',
    peran: 'Pendiri & Kepala Departemen Dermatologi',
    foto: 'src/assets/Biaji.jpg',
    pendidikan: 'Universitas Gunadarma — Fakultas Kedokteran',
    pengalaman: '11 tahun',
    bio: 'Spesialis kulit dan kelamin dengan keahlian dalam dermatologi estetik dan penyakit kulit tropis. Mengembangkan layanan klinik kulit modern di rumah sakit.',
    rating: 1.3,
    totalPasien: 59,
  },
];

// ===== Jadwal Mingguan Dokter =====
export const jadwalDokter = [
  {
    dokterId: 'dr-001',
    jadwal: [
      { hari: 'Senin', jam: '08:00 - 12:00', ruangan: 'Poli Bedah - R.201' },
      { hari: 'Selasa', jam: '13:00 - 17:00', ruangan: 'Poli Bedah - R.201' },
      { hari: 'Rabu', jam: '08:00 - 12:00', ruangan: 'Poli Bedah - R.201' },
      { hari: 'Kamis', jam: '13:00 - 17:00', ruangan: 'Ruang Operasi - Lt.3' },
      { hari: 'Jumat', jam: '08:00 - 11:00', ruangan: 'Poli Bedah - R.201' },
    ],
  },
  {
    dokterId: 'dr-002',
    jadwal: [
      { hari: 'Senin', jam: '08:00 - 14:00', ruangan: 'Poli Penyakit Dalam - R.105' },
      { hari: 'Selasa', jam: '08:00 - 14:00', ruangan: 'Poli Penyakit Dalam - R.105' },
      { hari: 'Rabu', jam: '13:00 - 17:00', ruangan: 'Poli Penyakit Dalam - R.105' },
      { hari: 'Kamis', jam: '08:00 - 14:00', ruangan: 'Poli Penyakit Dalam - R.105' },
      { hari: 'Jumat', jam: '08:00 - 12:00', ruangan: 'Poli Penyakit Dalam - R.105' },
      { hari: 'Sabtu', jam: '08:00 - 12:00', ruangan: 'Poli Penyakit Dalam - R.105' },
    ],
  },
  {
    dokterId: 'dr-003',
    jadwal: [
      { hari: 'Senin', jam: '09:00 - 14:00', ruangan: 'Poli Anak - R.110' },
      { hari: 'Selasa', jam: '09:00 - 14:00', ruangan: 'Poli Anak - R.110' },
      { hari: 'Rabu', jam: '09:00 - 14:00', ruangan: 'Poli Anak - R.110' },
      { hari: 'Kamis', jam: '13:00 - 17:00', ruangan: 'Poli Anak - R.110' },
      { hari: 'Sabtu', jam: '09:00 - 13:00', ruangan: 'Poli Anak - R.110' },
    ],
  },
  {
    dokterId: 'dr-004',
    jadwal: [
      { hari: 'Senin', jam: '10:00 - 15:00', ruangan: 'Poli Jantung - R.302' },
      { hari: 'Rabu', jam: '10:00 - 15:00', ruangan: 'Poli Jantung - R.302' },
      { hari: 'Kamis', jam: '08:00 - 13:00', ruangan: 'Poli Jantung - R.302' },
      { hari: 'Jumat', jam: '10:00 - 15:00', ruangan: 'Poli Jantung - R.302' },
    ],
  },
  {
    dokterId: 'dr-005',
    jadwal: [
      { hari: 'Senin', jam: '13:00 - 17:00', ruangan: 'Klinik Kulit - R.215' },
      { hari: 'Selasa', jam: '09:00 - 13:00', ruangan: 'Klinik Kulit - R.215' },
      { hari: 'Rabu', jam: '13:00 - 17:00', ruangan: 'Klinik Kulit - R.215' },
      { hari: 'Jumat', jam: '09:00 - 13:00', ruangan: 'Klinik Kulit - R.215' },
      { hari: 'Sabtu', jam: '09:00 - 12:00', ruangan: 'Klinik Kulit - R.215' },
    ],
  },
];

// ===== Daftar Fasilitas Medis =====
export const fasilitasList = [
  {
    id: 'fas-001',
    nama: 'Instalasi Gawat Darurat (IGD) 24 Jam',
    deskripsi: 'Layanan darurat yang beroperasi 24/7 dengan tim medis terlatih dan peralatan lengkap untuk penanganan darurat.',
    ikon: 'Siren',
  },
  {
    id: 'fas-002',
    nama: 'Ruang Operasi Modern',
    deskripsi: 'Dilengkapi dengan teknologi laparoskopi dan peralatan bedah canggih untuk prosedur bedah minimal invasif.',
    ikon: 'Scissors',
  },
  {
    id: 'fas-003',
    nama: 'Laboratorium Klinik',
    deskripsi: 'Pemeriksaan darah lengkap, kimia klinik, serologi, dan mikrobiologi dengan hasil akurat dan cepat.',
    ikon: 'FlaskConical',
  },
  {
    id: 'fas-004',
    nama: 'Radiologi & Pencitraan',
    deskripsi: 'Layanan Rontgen digital, USG, CT-Scan, dan MRI untuk diagnosis pencitraan yang presisi.',
    ikon: 'ScanLine',
  },
  {
    id: 'fas-005',
    nama: 'Farmasi Rumah Sakit',
    deskripsi: 'Apotek yang menyediakan obat-obatan lengkap dengan layanan konsultasi farmasi oleh apoteker berpengalaman.',
    ikon: 'Pill',
  },
  {
    id: 'fas-006',
    nama: 'Ruang Rawat Inap',
    deskripsi: 'Kamar perawatan dari kelas ekonomi hingga VIP dengan fasilitas lengkap dan nyaman untuk pemulihan pasien.',
    ikon: 'BedDouble',
  },
  {
    id: 'fas-007',
    nama: 'Unit Perawatan Intensif (ICU)',
    deskripsi: 'Ruang perawatan intensif dengan monitoring 24 jam dan peralatan pendukung kehidupan yang lengkap.',
    ikon: 'HeartPulse',
  },
  {
    id: 'fas-008',
    nama: 'Rehabilitasi Medik',
    deskripsi: 'Program fisioterapi dan rehabilitasi untuk pemulihan pasca operasi, cedera, dan gangguan gerak.',
    ikon: 'Dumbbell',
  },
];

// ===== Status Antrean Contoh =====
export const antreanContoh = [
  {
    id: 'q-001',
    nomorAntrean: 'A-015',
    namaPasien: 'Ahmad Fauzan',
    poli: 'Poli Penyakit Dalam',
    dokter: 'Dr. Fikri Nurhakim, Sp.PD',
    status: 'Sedang Dilayani',
    estimasiWaktu: '~10 menit',
  },
  {
    id: 'q-002',
    nomorAntrean: 'A-016',
    namaPasien: 'Siti Rahmawati',
    poli: 'Poli Penyakit Dalam',
    dokter: 'Dr. Fikri Nurhakim, Sp.PD',
    status: 'Menunggu',
    estimasiWaktu: '~25 menit',
  },
  {
    id: 'q-003',
    nomorAntrean: 'B-008',
    namaPasien: 'Budi Santoso',
    poli: 'Poli Anak',
    dokter: 'Dr. Firman Rizqi, Sp.A',
    status: 'Sedang Dilayani',
    estimasiWaktu: '~5 menit',
  },
  {
    id: 'q-004',
    nomorAntrean: 'C-003',
    namaPasien: 'Dewi Kartika',
    poli: 'Poli Jantung',
    dokter: 'Dr. Gerald Matheus, Sp.JP',
    status: 'Menunggu',
    estimasiWaktu: '~40 menit',
  },
  {
    id: 'q-005',
    nomorAntrean: 'A-017',
    namaPasien: 'Rizky Pratama',
    poli: 'Poli Penyakit Dalam',
    dokter: 'Dr. Fikri Nurhakim, Sp.PD',
    status: 'Menunggu',
    estimasiWaktu: '~45 menit',
  },
];

// ===== Hasil Laboratorium Contoh =====
export const hasilLabContoh = [
  {
    id: 'lab-001',
    idPasien: 'P-20240001',
    namaPasien: 'Ahmad Fauzan',
    tanggalPemeriksaan: '2026-10-05',
    jenisPemeriksaan: 'Pemeriksaan Darah Lengkap',
    kategori: 'Laboratorium',
    dokterPengirim: 'Dr. Fikri Nurhakim, Sp.PD',
    status: 'Selesai',
    hasil: [
      { parameter: 'Hemoglobin (Hb)', nilai: '14.2', satuan: 'g/dL', nilaiNormal: '13.0 - 17.5', keterangan: 'Normal' },
      { parameter: 'Hematokrit (Ht)', nilai: '42.5', satuan: '%', nilaiNormal: '40.0 - 54.0', keterangan: 'Normal' },
      { parameter: 'Leukosit (WBC)', nilai: '7.800', satuan: '/µL', nilaiNormal: '4.000 - 11.000', keterangan: 'Normal' },
      { parameter: 'Trombosit', nilai: '250.000', satuan: '/µL', nilaiNormal: '150.000 - 400.000', keterangan: 'Normal' },
      { parameter: 'Eritrosit (RBC)', nilai: '5.1', satuan: 'juta/µL', nilaiNormal: '4.5 - 6.5', keterangan: 'Normal' },
      { parameter: 'Gula Darah Puasa', nilai: '102', satuan: 'mg/dL', nilaiNormal: '70 - 100', keterangan: 'Tinggi' },
      { parameter: 'Kolesterol Total', nilai: '215', satuan: 'mg/dL', nilaiNormal: '< 200', keterangan: 'Tinggi' },
      { parameter: 'SGOT', nilai: '28', satuan: 'U/L', nilaiNormal: '5 - 40', keterangan: 'Normal' },
      { parameter: 'SGPT', nilai: '32', satuan: 'U/L', nilaiNormal: '7 - 56', keterangan: 'Normal' },
    ],
  },
  {
    id: 'lab-002',
    idPasien: 'P-20240002',
    namaPasien: 'Siti Rahmawati',
    tanggalPemeriksaan: '2026-10-04',
    jenisPemeriksaan: 'MRI Kepala',
    kategori: 'Radiologi',
    dokterPengirim: 'Dr. Gerald Matheus, Sp.JP',
    status: 'Selesai',
    hasil: [
      { parameter: 'Temuan', nilai: 'Tidak ditemukan kelainan intrakranial', satuan: '-', nilaiNormal: '-', keterangan: 'Normal' },
      { parameter: 'Parenkim Otak', nilai: 'Dalam batas normal, tidak tampak lesi', satuan: '-', nilaiNormal: '-', keterangan: 'Normal' },
      { parameter: 'Sistem Ventrikel', nilai: 'Simetris, tidak melebar', satuan: '-', nilaiNormal: '-', keterangan: 'Normal' },
      { parameter: 'Kesimpulan', nilai: 'MRI kepala dalam batas normal', satuan: '-', nilaiNormal: '-', keterangan: 'Normal' },
    ],
  },
  {
    id: 'lab-003',
    idPasien: 'P-20240003',
    namaPasien: 'Budi Santoso',
    tanggalPemeriksaan: '2026-10-06',
    jenisPemeriksaan: 'Rontgen Thorax (Dada)',
    kategori: 'Radiologi',
    dokterPengirim: 'Dr. Firman Rizqi, Sp.A',
    status: 'Selesai',
    hasil: [
      { parameter: 'Jantung', nilai: 'CTR < 50%, kesan tidak membesar', satuan: '-', nilaiNormal: 'CTR < 50%', keterangan: 'Normal' },
      { parameter: 'Paru-Paru', nilai: 'Corakan bronkovaskular normal, tidak tampak infiltrat', satuan: '-', nilaiNormal: '-', keterangan: 'Normal' },
      { parameter: 'Sinus & Diafragma', nilai: 'Sinus kostofrenikus lancip, diafragma normal', satuan: '-', nilaiNormal: '-', keterangan: 'Normal' },
      { parameter: 'Kesimpulan', nilai: 'Foto thorax dalam batas normal', satuan: '-', nilaiNormal: '-', keterangan: 'Normal' },
    ],
  },
];

// ===== FAQ (Pertanyaan yang Sering Diajukan) =====
export const faqList = [
  {
    id: 'faq-001',
    pertanyaan: 'Bagaimana cara mendaftar sebagai pasien baru?',
    jawaban: 'Anda dapat mendaftar melalui portal online kami dengan mengklik tombol "Daftar" di halaman utama, atau datang langsung ke loket pendaftaran rumah sakit dengan membawa KTP/identitas diri dan kartu BPJS (jika ada). Tim kami akan membantu proses pendaftaran Anda.',
  },
  {
    id: 'faq-002',
    pertanyaan: 'Apakah rumah sakit menerima BPJS Kesehatan?',
    jawaban: 'Ya, RS Sehat Sentosa merupakan rumah sakit yang bekerja sama dengan BPJS Kesehatan. Pastikan Anda membawa kartu BPJS dan surat rujukan dari fasilitas kesehatan tingkat pertama (Faskes 1) untuk pelayanan rawat jalan spesialis.',
  },
  {
    id: 'faq-003',
    pertanyaan: 'Berapa lama waktu tunggu untuk hasil laboratorium?',
    jawaban: 'Hasil pemeriksaan darah lengkap umumnya tersedia dalam 2-4 jam. Untuk pemeriksaan khusus seperti kultur bakteri membutuhkan 3-5 hari kerja. Hasil radiologi (Rontgen, USG) tersedia dalam 1-2 jam, sedangkan MRI dan CT-Scan dalam 24 jam.',
  },
  {
    id: 'faq-004',
    pertanyaan: 'Bagaimana cara mengambil antrean secara online?',
    jawaban: 'Silakan login ke portal pasien kami, pilih menu "Ambil Antrean", lalu pilih poli dan dokter yang diinginkan. Anda akan mendapatkan nomor antrean digital beserta estimasi waktu pelayanan. Harap hadir 15 menit sebelum jadwal.',
  },
  {
    id: 'faq-005',
    pertanyaan: 'Apakah tersedia layanan konsultasi online?',
    jawaban: 'Ya, kami menyediakan layanan telekonsultasi dengan dokter spesialis melalui portal ini. Fitur ini tersedia untuk konsultasi lanjutan dan pasien yang tidak memerlukan pemeriksaan fisik langsung. Biaya konsultasi online lebih terjangkau.',
  },
  {
    id: 'faq-006',
    pertanyaan: 'Apa saja jam besuk untuk pasien rawat inap?',
    jawaban: 'Jam besuk pasien rawat inap adalah pukul 11:00 - 13:00 (siang) dan 17:00 - 19:00 (sore). Setiap pasien hanya boleh dijenguk oleh maksimal 2 orang pengunjung secara bergantian. Anak di bawah 12 tahun tidak diperkenankan masuk area rawat inap.',
  },
  {
    id: 'faq-007',
    pertanyaan: 'Apakah ada layanan ambulans?',
    jawaban: 'Ya, RS Sehat Sentosa memiliki layanan ambulans 24 jam untuk keadaan darurat. Hubungi hotline kami di (021) 555-0199 untuk permintaan ambulans. Layanan ini tersedia untuk area Jabodetabek.',
  },
];

// ===== Informasi Rumah Sakit =====
export const infoRumahSakit = {
  nama: 'RS Sehat Sentosa',
  namaLengkap: 'Rumah Sakit Umum Sehat Sentosa',
  slogan: 'Melayani dengan Hati, Menyembuhkan dengan Ilmu',
  alamat: 'Jl. Kesehatan Utama No. 88, Kelurahan Sehat Makmur, Kecamatan Medika Jaya, Jakarta Selatan 12345',
  telepon: '(021) 555-0199',
  teleponDarurat: '(021) 555-0911',
  whatsapp: '+62 812-3456-7890',
  email: 'info@rssehatsentosa.co.id',
  website: 'www.rssehatsentosa.co.id',
  jamOperasional: {
    poliklinik: 'Senin - Sabtu: 08:00 - 17:00',
    igd: '24 Jam (Setiap Hari)',
    administrasi: 'Senin - Jumat: 08:00 - 16:00',
  },
  sosialMedia: {
    instagram: '@rssehatsentosa',
    facebook: 'RS Sehat Sentosa Official',
    youtube: 'RS Sehat Sentosa',
  },
};

// ===== Data Statistik Rumah Sakit =====
export const statistikRS = {
  totalPasienTerlayani: '150.000+',
  jumlahDokterSpesialis: '25+',
  jumlahPerawat: '120+',
  tingkatKepuasanPasien: '97%',
  tahunBerdiri: 2010,
  jumlahTempatTidur: 200,
};
