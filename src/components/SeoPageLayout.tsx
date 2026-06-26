import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { ReactNode } from "react";

export type SeoPageLayoutProps = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  bullets: string[];
  highlights: Array<{ title: string; text: string }>;
  faqs: Array<{ question: string; answer: string }>;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  badge?: string;
  note?: string;
  children?: ReactNode;
};

export function SeoPageLayout({
  title,
  description,
  h1,
  intro,
  bullets,
  highlights,
  faqs,
  ctaLabel = "Book free consultation",
  ctaHref = "/contact",
  secondaryLabel = "WhatsApp now",
  secondaryHref = "https://wa.me/918778758472",
  badge = "Premium interior design & construction",
  note = "Based in Palayamkottai, Tirunelveli and serving clients across India.",
  children,
}: SeoPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-hero py-24">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary-glow">{badge}</span>
          <h1 className="mt-4 max-w-4xl font-[Playfair_Display] text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {h1}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/90">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to={ctaHref} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-primary-deep transition hover:scale-105">
              {ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={secondaryHref} className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20">
              <MessageCircle className="h-4 w-4" /> {secondaryLabel}
            </a>
          </div>
          <p className="mt-5 text-sm text-white/80">{note}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-[Playfair_Display] text-3xl font-bold">Why Sky Nest is the right fit</h2>
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
            {children}
          </div>
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">What you get</p>
                <p className="text-sm text-muted-foreground">Transparent scope, expert execution, faster delivery.</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-3xl bg-secondary p-6 shadow-soft">
              <h3 className="font-[Playfair_Display] text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <h2 className="text-center font-[Playfair_Display] text-3xl font-bold">Frequently asked questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl bg-card p-6 shadow-soft open:ring-1 open:ring-primary/20">
                <summary className="cursor-pointer font-semibold">{faq.question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
        <h2 className="font-[Playfair_Display] text-3xl font-bold">Ready to start your project?</h2>
        <p className="mt-3 text-lg text-muted-foreground">Get a free consultation within 24 hours and receive a clear scope for your space.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to={ctaHref} className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 font-semibold text-primary-foreground shadow-elegant transition hover:scale-105">
            {ctaLabel} <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={`tel:${"+918778758472"}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-4 font-semibold shadow-soft">
            <Phone className="h-4 w-4" /> Call +91 87787 58472
          </a>
        </div>
      </section>
    </div>
  );
}
