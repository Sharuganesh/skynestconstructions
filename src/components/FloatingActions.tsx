import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/918778758472?text=Hi%20Sky%20Nest%2C%20I'd%20like%20a%20free%20consultation"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+918778758472"
        aria-label="Call Sky Nest"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-elegant transition hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}