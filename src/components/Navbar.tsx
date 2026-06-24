import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { PhoneIcon } from "./BrandIcons";
import logo from "@/assets/logo.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2 rounded-full bg-background/70 px-2 py-1 shadow-soft backdrop-blur-md sm:gap-3 sm:px-3 sm:py-1.5"
        >
          <img src={logo.url} alt="Sky Nest Constructions" className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11" />
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="font-[Playfair_Display] text-base font-bold text-primary sm:text-lg">
              Sky Nest
            </span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[10px] sm:tracking-[0.2em]">
              Build with Trust
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary"
              activeProps={{ className: "text-primary bg-primary/10" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+918778758472"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-105"
          >
            <PhoneIcon className="h-4 w-4" /> Call Now
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="shrink-0 rounded-full bg-card p-2 shadow-soft lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-[2px] origin-left bg-gradient-brand"
      />

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="flex flex-col px-5 py-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-lg px-4 py-3 text-base font-medium text-foreground/80"
                activeProps={{ className: "text-primary bg-primary/10" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+918778758472"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 font-semibold text-primary-foreground"
            >
              <PhoneIcon className="h-4 w-4" /> Call 8778758472
            </a>
          </div>
        </div>
      )}
    </header>
  );
}