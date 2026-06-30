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
      { property: "og:image", content: "https://skynestconstructions.in/skynest-logo.png" },
      { name: "twitter:image", content: "https://skynestconstructions.in/skynest-logo.png" },
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
      <TrustShowcase />
      <FeaturedServices />
      <WhyUs />
      <ParallaxShowcase />
      <PortfolioPreview />
      <FeaturedHighlights />
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
  const contentY = useTransform(scrollY, [0, 500], [0, 60]);
  const opacity = useTransform(scrollY, [0, 240, 500], [1, 1, 0.45]);

  return (
    <section ref={ref} className="relative min-h-[100vh] overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: "url(/works/buddha-statue-hero.jpeg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/85 via-primary-deep/65 to-background" />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute -right-32 top-32 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
      <motion.div style={{ y: y1 }} className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />

      <motion.div style={{ y: contentY, opacity }} className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl flex-col items-start justify-center px-5 pb-32 pt-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-soft backdrop-blur sm:px-4 sm:py-2.5"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-300/15 text-amber-200 shadow-lg shadow-black/20">
            <Sparkles className="h-4 w-4" />
          </span>
          Certified Pan-India Delivery
        </motion.div>
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
          Premium interiors, renovations and turnkey construction delivered across Tamil Nadu and India — from modular kitchens and wardrobes to 3D design, complete-home execution and commercial fit-outs.
        </motion.p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          {[
            {
              label: "Central Govt Certified Engineer",
              accent: "bg-gradient-to-br from-sky-500 via-cyan-500 to-indigo-600",
              icon: Award,
            },
            {
              label: "Serving Homes & Businesses Across India",
              accent: "bg-gradient-to-br from-emerald-500 via-lime-500 to-teal-500",
              icon: ShieldCheck,
            },
            {
              label: "Transparent Design-to-Execution Support",
              accent: "bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500",
              icon: CheckCircle2,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group flex w-full max-w-[21rem] items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-[0.72rem] font-semibold text-white shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:shadow-elegant sm:px-4 sm:py-2.5 sm:text-sm"
              >
                <span className={`${item.accent} inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white shadow-lg shadow-black/20`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="max-w-[10rem] leading-tight sm:max-w-none">{item.label}</span>
              </div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex w-full flex-col gap-4 sm:mt-12 sm:w-auto sm:flex-row sm:items-center sm:gap-5"
        >
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-8 py-4 font-semibold text-primary-foreground shadow-elegant transition hover:scale-105 whitespace-nowrap">
            Book Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/20 px-8 py-4 font-semibold text-white shadow-[0_20px_60px_-30px_rgba(255,255,255,0.9)] backdrop-blur transition hover:bg-white/30 hover:text-slate-950 whitespace-nowrap">
            View Portfolio
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/80 text-xs uppercase tracking-[0.3em]"
      >
        Scroll to explore
      </motion.div>
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

function TrustShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-8 pt-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-soft lg:grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-8 sm:p-10 lg:p-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Trusted by leading brands</span>
          <h2 className="mt-3 font-[Playfair_Display] text-3xl font-bold text-primary-deep sm:text-4xl">
            Approved Vendor for Muthoot Fincorp
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            We are proud to have completed renovation and interior works for Muthoot Fincorp, a milestone that reflects our commitment to quality, discipline and timely delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Renovation Execution</span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Premium Finish Standards</span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Professional Project Delivery</span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Plan Approval Assistance</span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Central Govt Certified Engineer</span>
          </div>
        </div>
        <div className="flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary p-6 sm:p-8 lg:p-10">
          <img src="/works/muthoot-fincorp.jpeg" alt="Muthoot Fincorp renovation project by Sky Nest Constructions" className="h-full w-full rounded-[1.25rem] object-cover shadow-elegant" />
        </div>
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
          style={{ backgroundImage: "url(/works/philosophy-story.jpg)" }}
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

function FeaturedHighlights() {
  const highlights = [
    {
      title: "Premium Balcony Design",
      caption: "Elegant balcony detailing with premium finishes and city-view comfort.",
      image: "/works/premium-balcony-design.jpg",
    },
    {
      title: "Modern Duplex Residence",
      caption: "A striking duplex concept balancing space, light and modern luxury.",
      image: "/works/modern-duplex-residence.png",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeader
        eyebrow="Featured projects"
        title={<>Recent <span className="text-gradient-brand">highlights</span></>}
        subtitle="Two standout concepts we are proud to showcase alongside our completed homes and commercial interiors."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="overflow-hidden rounded-[2rem] bg-card shadow-soft"
          >
            <img src={item.image} alt={item.title} loading="lazy" className="h-72 w-full object-cover" />
            <div className="p-7">
              <h3 className="font-[Playfair_Display] text-2xl font-semibold text-primary-deep">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.caption}</p>
            </div>
          </motion.div>
        ))}
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
