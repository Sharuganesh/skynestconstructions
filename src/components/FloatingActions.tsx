import { WhatsAppIcon, PhoneIcon } from "./BrandIcons";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a
        href="https://wa.me/918778758472?text=Hi%20Sky%20Nest%2C%20I'd%20like%20a%20free%20consultation%20for%20my%20project"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-5 text-white shadow-elegant transition hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
        <span className="hidden text-sm font-semibold sm:inline">Free Quote</span>
      </a>
      <a
        href="tel:+918778758472"
        aria-label="Call Sky Nest"
        className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand py-3 pl-3 pr-5 text-primary-foreground shadow-elegant transition hover:scale-105"
      >
        <PhoneIcon className="h-6 w-6" />
        <span className="hidden text-sm font-semibold sm:inline">Call Now</span>
      </a>
    </div>
  );
}