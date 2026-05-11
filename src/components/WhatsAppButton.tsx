import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phone = "5500000000000"; // placeholder; cliente pode trocar
  const msg = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre as soluções da Nexcore Brasil."
  );
  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition-transform hover:scale-110"
    >
      <MessageCircle size={26} fill="white" strokeWidth={1.5} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}
