import { useState, useEffect, useRef } from 'react';
import {
  Send,
  User,
  Paperclip,
  CheckCheck,
  Video,
  Phone,
  MoreVertical,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { dokterList } from '../../utils/dummyData';

/**
 * ChatWindow — Simulasi UI ruang konsultasi chat telemedisin interaktif
 * Lengkap dengan balasan otomatis (mock response) dari dokter spesialis.
 */
export default function ChatWindow({ selectedDoctorId = 'dr-002', namaPasien = 'Pasien' }) {
  const doctor = dokterList.find((d) => d.id === selectedDoctorId) || dokterList[1];

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'doctor',
      text: `Halo ${namaPasien}, selamat datang di layanan Telemedisin RS Sehat Sentosa. Saya ${doctor.nama} (${doctor.spesialisasi}). Ada keluhan kesehatan apa yang bisa saya bantu hari ini?`,
      time: '09:00',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const mockReplies = [
    `Baik, saya pahami keluhannya. Apakah disertai demam, mual, atau sesak napas dalam kurun waktu 24 jam terakhir?`,
    `Untuk sementara, pastikan perbanyak minum air putih hangat dan istirahat yang cukup. Hindari makanan yang memicu asam lambung atau iritasi.`,
    `Saya sarankan untuk melakukan pemeriksaan tes darah sederhana di laboratorium kami jika keluhan berlanjut lebih dari 3 hari.`,
    `Saya buatkan resep elektronik yang dapat langsung ditebus di Instalasi Farmasi RS Sehat Sentosa atau dikirimkan ke alamat Anda.`,
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Mock doctor answer delay
    setTimeout(() => {
      const randomReply = mockReplies[Math.floor(Math.random() * mockReplies.length)];
      const docMsg = {
        id: Date.now() + 1,
        sender: 'doctor',
        text: randomReply,
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, docMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="flex h-[560px] flex-col overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-card) shadow-md">
      {/* Header Room */}
      <div className="flex items-center justify-between border-b border-(--color-border) bg-(--color-bg-secondary) px-5 py-3.5">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={doctor.foto}
              alt={doctor.nama}
              className="h-10 w-10 rounded-full border border-(--color-accent)/30 bg-emerald-50 object-cover"
            />
            <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500"></span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-(--color-text-primary)">{doctor.nama}</h3>
              <ShieldCheck className="h-3.5 w-3.5 text-(--color-accent)" title="Dokter Terverifikasi SIP" />
            </div>
            <p className="text-[11px] text-(--color-text-secondary)">
              {doctor.spesialisasi} • <span className="text-emerald-500 font-semibold">Online</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="focus-ring rounded-lg border border-(--color-border) bg-(--color-card) p-2 text-(--color-text-secondary) hover:text-(--color-accent)"
            title="Panggilan Video"
          >
            <Video className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="focus-ring rounded-lg border border-(--color-border) bg-(--color-card) p-2 text-(--color-text-secondary) hover:text-(--color-accent)"
            title="Panggilan Suara"
          >
            <Phone className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Area Chat Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto bg-(--color-bg-primary) p-4 sm:p-6">
        <div className="mx-auto my-1 flex max-w-xs items-center justify-center gap-1.5 rounded-full bg-(--color-bg-secondary) px-3 py-1 text-[10px] text-(--color-text-secondary)">
          <ShieldCheck className="h-3 w-3 text-(--color-accent)" />
          Sesi telekonsultasi terlindungi enkripsi medis RS
        </div>

        {messages.map((msg) => {
          const isDoc = msg.sender === 'doctor';
          return (
            <div
              key={msg.id}
              className={`flex items-end gap-2.5 ${isDoc ? 'justify-start' : 'justify-end'}`}
            >
              {isDoc && (
                <img
                  src={doctor.foto}
                  alt={doctor.nama}
                  className="h-7 w-7 rounded-full border border-(--color-border) object-cover"
                />
              )}

              <div
                className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm ${
                  isDoc
                    ? 'rounded-bl-none border border-(--color-border) bg-(--color-card) text-(--color-text-primary)'
                    : 'rounded-br-none bg-(--color-accent) text-white'
                }`}
              >
                <p className="leading-relaxed">{msg.text}</p>
                <div
                  className={`mt-1 flex items-center justify-end gap-1 text-[10px] ${
                    isDoc ? 'text-(--color-text-secondary)' : 'text-emerald-100'
                  }`}
                >
                  <span>{msg.time}</span>
                  {!isDoc && <CheckCheck className="h-3 w-3" />}
                </div>
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-(--color-text-secondary)">
            <img
              src={doctor.foto}
              alt={doctor.nama}
              className="h-6 w-6 rounded-full border border-(--color-border) object-cover"
            />
            <div className="flex items-center gap-1 rounded-full border border-(--color-border) bg-(--color-card) px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-(--color-accent)"></span>
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-(--color-accent) [animation-delay:0.2s]"></span>
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-(--color-accent) [animation-delay:0.4s]"></span>
              <span className="ml-1 text-[10px]">{doctor.nama.split(',')[0]} sedang mengetik...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Message Form */}
      <form
        onSubmit={handleSendMessage}
        className="flex items-center gap-2 border-t border-(--color-border) bg-(--color-bg-secondary) p-3"
      >
        <button
          type="button"
          className="focus-ring rounded-lg p-2 text-(--color-text-secondary) hover:text-(--color-accent)"
          title="Lampirkan Hasil Lab / Dokumen"
        >
          <Paperclip className="h-4 w-4" />
        </button>

        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={`Tulis pertanyaan atau gejala kepada ${doctor.nama.split(',')[0]}...`}
          className="focus-ring flex-1 rounded-xl border border-(--color-border) bg-(--color-card) px-4 py-2 text-xs sm:text-sm text-(--color-text-primary) placeholder:text-(--color-text-secondary)/60"
        />

        <button
          type="submit"
          disabled={!inputText.trim()}
          className="focus-ring btn-press flex h-9 w-9 items-center justify-center rounded-xl bg-(--color-accent) text-white shadow transition-all hover:bg-(--color-accent-dark) disabled:opacity-40"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
