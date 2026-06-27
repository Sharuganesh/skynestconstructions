import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Award, CheckCircle2, Sparkles, Leaf, ShieldCheck, Users, Calendar, Quote } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { services, portfolio, testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Interior Design & Construction Company in India | Sky Nest Constructions" },
      { name: "description", content: "Sky Nest Constructions delivers premium interior design and construction across India from our base in Tirunelveli. Modular kitchens, wardrobes, false ceilings, 3D design, home renovation and full-site execution. Free consultation. Call +91 87787 58472." },
      { property: "og:title", content: "Best Interior Design & Construction Company in India | Sky Nest Constructions" },
      { property: "og:description", content: "Premium interior design & construction across India from our base in Tirunelveli. Modular kitchens, wardrobes, 3D design, renovation and turnkey execution. Free consultation." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://skynestconstructions.in/" },
      { property: "og:image", content: "https://skynestconstructions.in/og-home.jpg" },
      { name: "twitter:image", content: "https://skynestconstructions.in/og-home.jpg" },
      { name: "twitter:title", content: "Best Interior Design & Construction Company in India | Sky Nest Constructions" },
      { name: "twitter:description", content: "Premium construction & interior design across India from our base in Tirunelveli. 120+ happy clients. Free consultation." },
      { name: "keywords", content: "interior design company india, modular kitchen india, wardrobe design india, false ceiling india, home renovation india, construction company india, best interior designers india, sky nest constructions, interior designer tirunelveli" },
    ],
    links: [{ rel: "canonical", href: "https://skynestconstructions.in/" }],
    scripts: [
      // BreadcrumbList for homepage
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://skynestconstructions.in/" },
          ],
        }),
      },
      // FAQ Schema — Homepage
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who is the best interior designer in Tirunelveli?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sky Nest Constructions, founded by Arunraj Krishnan, is widely regarded as one of the best interior design and construction companies in Tirunelveli and Palayamkottai, Tamil Nadu. With 16+ years of expertise and 120+ completed projects, they offer premium services including modular kitchens, wardrobes, false ceilings, 3D design, and home renovation.",
              },
            },
            {
              "@type": "Question",
              name: "Does Sky Nest Constructions offer free consultation?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Sky Nest Constructions offers a complimentary on-site or virtual consultation within 24 hours of enquiry. You can call +91 87787 58472, WhatsApp, or fill out the contact form at skynestconstructions.in.",
              },
            },
            {
              "@type": "Question",
              name: "What areas does Sky Nest Constructions serve in Tamil Nadu?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sky Nest Constructions is headquartered in Palayamkottai, Tirunelveli, and serves clients across Tamil Nadu including Nagercoil, Tenkasi, Thoothukudi, Madurai, Coimbatore, and Chennai.",
              },
            },
            {
              "@type": "Question",
              name: "What services does Sky Nest Constructions offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sky Nest Constructions offers 16 services: Modular Kitchen, Wardrobe Design, TV Unit Design, False Ceiling, Living Room Interiors, Bedroom Interiors, Office Interiors, Commercial Interiors, PVC Interiors, Wood Works, Wallpaper Installation, 3D Interior Design, Home Renovation, Electrical Works, Plumbing Works, and full Interior Design.",
              },
            },
            {
              "@type": "Question",
              name: "How much does interior design cost in Tirunelveli?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Interior design cost in Tirunelveli varies by scope. Sky Nest Constructions provides transparent, itemised quotes after a free consultation. For a 2BHK home, modular kitchen and wardrobes can start from ₹2.5 lakhs. Contact Sky Nest at +91 87787 58472 for an accurate estimate.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Stats />
      <FeaturedServices />
      <WhyUs />
      <ParallaxShowcase />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 160]);
  const y2 = useTransform(scrollY, [0, 600], [0, -120]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100vh] overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=75)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/85 via-primary-deep/65 to-background" />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute -right-32 top-32 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
      <motion.div style={{ y: y1 }} className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl flex-col items-start justify-center px-5 pb-24 pt-24 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5" /> Serving India from Tirunelveli · 16+ years expertise
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-[18ch] text-balance text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:mt-6 sm:max-w-2xl sm:text-5xl sm:leading-[1.05] lg:max-w-4xl lg:text-6xl"
        >
          Building India&rsquo;s finest homes &amp; offices,{" "}
          <span className="whitespace-nowrap text-primary-glow italic">end&nbsp;to&nbsp;end.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-2xl text-pretty text-base text-white/85 sm:mt-5 sm:text-lg lg:text-xl"
        >
          Award-winning interiors and turnkey construction delivered across every Indian city — from modular kitchens and wardrobes to 3D design, renovation and full-site execution.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
        >
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 font-semibold text-primary-foreground shadow-elegant transition hover:scale-105">
            Book Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20">
            View Portfolio
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70 text-xs uppercase tracking-[0.3em]">
        Scroll to explore
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { icon: Calendar, value: "16+", label: "Years of Expertise" },
    { icon: Users, value: "120+", label: "Happy Families" },
    { icon: Award, value: "16", label: "Service Specialities" },
    { icon: ShieldCheck, value: "24/7", label: "Always Available" },
  ];
  return (
    <section className="relative -mt-20 z-20 mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid grid-cols-2 gap-3 rounded-3xl bg-card p-5 shadow-elegant sm:gap-6 sm:p-8 md:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
              <it.icon className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <p className="font-[Playfair_Display] text-2xl font-bold text-primary-deep sm:text-3xl">{it.value}</p>
              <p className="text-xs text-muted-foreground sm:text-sm">{it.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeaturedServices() {
  const featured = services.slice(0, 6);
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeader
        eyebrow="What we craft"
        title={<>End-to-end <span className="text-gradient-brand">construction & interior</span></>}
        subtitle="Sixteen specialised disciplines under one accountable roof — from structural builds to the last decorative inch."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-elegant"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-[Playfair_Display] text-xl font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.blurb}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft transition hover:bg-primary-deep">
          See all 16 services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Award, title: "Premium & Luxury", desc: "Material-first finishes and architectural detailing curated for lasting beauty." },
    { icon: ShieldCheck, title: "Quality & Reliability", desc: "Every joint, every wire, every finish — checked by a senior site lead." },
    { icon: Users, title: "Customer-Centric", desc: "A dedicated project manager keeps you informed at every milestone." },
    { icon: Leaf, title: "Sustainability", desc: "Responsible sourcing, low-VOC finishes and energy-efficient design." },
    { icon: Sparkles, title: "Modern & Innovative", desc: "Photo-real 3D before we build — no surprises, only refinements." },
    { icon: CheckCircle2, title: "Professional Trust", desc: "Transparent quotes, signed scope, on-time delivery — every project." },
  ];
  return (
    <section className="relative overflow-hidden bg-secondary py-24">
      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Why Sky Nest"
          title={<>Six promises behind <span className="text-gradient-brand">every project</span></>}
          subtitle="The reasons families and businesses across India choose us as their build partner."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06 }}
              className="rounded-3xl bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-[Playfair_Display] text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParallaxShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1.15]);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2400&q=75)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/80 via-primary-deep/40 to-transparent" />
      </motion.div>
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl text-white"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary-glow">Our Philosophy</span>
          <h2 className="mt-4 font-[Playfair_Display] text-4xl font-bold sm:text-5xl">Spaces that hold stories.</h2>
          <p className="mt-5 text-lg text-white/85">
            We don't just hand over a finished room — we hand over a setting for the next decade of your life. That responsibility shapes every decision.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary-deep transition hover:bg-primary-glow hover:text-primary-foreground">
            About our studio <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeader
        eyebrow="Recent work"
        title={<>Built, finished, <span className="text-gradient-brand">photographed</span></>}
        subtitle="A glimpse into rooms, lobbies and workspaces we've delivered across South India."
      />
      <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {portfolio.slice(0, 6).map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.05 }}
            className={`group relative overflow-hidden rounded-3xl ${
              i === 0 ? "md:col-span-2 md:row-span-2" : i === 3 ? "md:row-span-2" : ""
            }`}
          >
            <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 p-5 text-white">
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary-glow">{p.category}</p>
              <p className="mt-1 font-[Playfair_Display] text-lg font-semibold">{p.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft transition hover:bg-primary-deep">
          Explore full portfolio <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="What clients say"
          title={<>Trust, <span className="text-gradient-brand">earned project by project</span></>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-3xl bg-card p-7 shadow-soft"
            >
              <Quote className="h-8 w-8 text-primary-glow" />
              <p className="mt-4 text-base leading-relaxed text-foreground/85">"{t.quote}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-primary-deep">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero p-10 text-center shadow-elegant sm:p-16">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent/40 blur-3xl" />
        <div className="relative">
          <span className="text-xs uppercase tracking-[0.3em] text-primary-glow">Build with Trust</span>
          <h2 className="mt-4 font-[Playfair_Display] text-4xl font-bold text-white sm:text-5xl">
            Ready to design your next space?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">
            Tell us about your project and we'll arrange a complimentary on-site or virtual consultation within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-primary-deep transition hover:scale-105">
              Start your project <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="https://wa.me/918778758472" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20">
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 font-[Playfair_Display] text-4xl font-bold leading-tight sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}
