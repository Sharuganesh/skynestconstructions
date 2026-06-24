import { Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { PhoneIcon, GmailIcon, WhatsAppIcon, MapPinIcon, InstagramIcon } from "./BrandIcons";
import logo from "@/assets/logo.asset.json";

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-primary-deep text-primary-foreground">
      <div className="absolute inset-0 opacity-20 bg-gradient-hero" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="Sky Nest" className="h-14 w-14 rounded-xl bg-white/10 p-1" />
              <div>
                <p className="font-[Playfair_Display] text-xl font-bold">Sky Nest</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">Build with Trust</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Construction & Interior craftsmanship rooted in quality, reliability and sustainability — since 2021.
            </p>
          </div>

          <div>
            <h4 className="font-[Playfair_Display] text-lg font-semibold">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {[
                ["/", "Home"],
                ["/about", "About Us"],
                ["/services", "Services"],
                ["/portfolio", "Portfolio"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-primary-glow transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[Playfair_Display] text-lg font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex gap-3"><PhoneIcon className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" /><a href="tel:+918778758472" className="hover:text-primary-glow transition">+91 87787 58472</a></li>
              <li className="flex gap-3"><WhatsAppIcon className="h-4 w-4 mt-0.5 shrink-0 text-[#25D366]" /><a href="https://wa.me/918778758472" className="hover:text-primary-glow transition">WhatsApp Chat</a></li>
              <li className="flex gap-3"><GmailIcon className="h-4 w-4 mt-0.5 shrink-0" /><a href="mailto:skynestconstructions@gmail.com" className="break-all hover:text-primary-glow transition">skynestconstructions@gmail.com</a></li>
              <li className="flex gap-3"><InstagramIcon className="h-4 w-4 mt-0.5 shrink-0" /><a href="https://instagram.com" className="hover:text-primary-glow transition">@skynestconstructions</a></li>
              <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" /> Open 24 / 7</li>
            </ul>
          </div>

          <div>
            <h4 className="font-[Playfair_Display] text-lg font-semibold">Visit Us</h4>
            <a href="https://maps.app.goo.gl/RpqxK5x585aUFD3CA?g_st=ac" target="_blank" rel="noreferrer" className="mt-4 flex gap-3 text-sm text-white/80 hover:text-primary-glow">
              <MapPinIcon className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" />
              <span>No.184-A, Ganapathiyapuram Street, Seevalaperi Main Road, Palayamkottai</span>
            </a>
            <p className="mt-4 text-xs uppercase tracking-widest text-white/60">Serving all over India</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Sky Nest Constructions. All rights reserved.</p>
          <p>Designed for craftsmanship · 16+ years of expertise</p>
        </div>
      </div>
    </footer>
  );
}