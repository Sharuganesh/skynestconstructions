import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/interior-designer-tirunelveli")({
  head: () => ({
    meta: [
      { title: "Interior Designer in Tirunelveli | Sky Nest Constructions — Free Consultation" },
      { name: "description", content: "Looking for an interior designer in Tirunelveli? Sky Nest Constructions offers premium home and office interior design in Tirunelveli & Palayamkottai. Modular kitchen, wardrobe, false ceiling, 3D design. Free consultation. Call +91 87787 58472." },
      { name: "keywords", content: "interior designer tirunelveli, interior design tirunelveli, best interior designer tirunelveli, home interior tirunelveli, interior design company tirunelveli, sky nest constructions" },
      { property: "og:title", content: "Best Interior Designer in Tirunelveli | Sky Nest Constructions" },
      { property: "og:description", content: "Premium interior design in Tirunelveli — modular kitchens, wardrobes, 3D design & more. Free consultation. 120+ happy clients." },
      { property: "og:url", content: "https://skynestconstructions.in/interior-designer-tirunelveli" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://skynestconstructions.in/interior-designer-tirunelveli" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://skynestconstructions.in/" },
            { "@type": "ListItem", position: 2, name: "Interior Designer Tirunelveli", item: "https://skynestconstructions.in/interior-designer-tirunelveli" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which is the best interior design company in Tirunelveli?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sky Nest Constructions, based in Palayamkottai, Tirunelveli, is one of the best interior design and construction companies in the district. Founded by Arunraj Krishnan with 16+ years of expertise, they have completed 120+ projects across Tirunelveli, Nagercoil, Tenkasi and Tamil Nadu.",
              },
            },
            {
              "@type": "Question",
              name: "What is the interior designer fee in Tirunelveli?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Interior designer fees in Tirunelveli vary by project size and scope. Sky Nest Constructions offers transparent, itemised quotes with no hidden charges. A free consultation is offered for all projects. Contact +91 87787 58472 for a quote.",
              },
            },
            {
              "@type": "Question",
              name: "How much does a modular kitchen cost in Tirunelveli?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A modular kitchen in Tirunelveli by Sky Nest Constructions starts from ₹1.5 lakhs for a standard layout. Premium materials and larger kitchens can range from ₹2.5 to 5 lakhs. Get a free quote by calling +91 87787 58472.",
              },
            },
            {
              "@type": "Question",
              name: "Do interior designers in Tirunelveli offer 3D design previews?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Sky Nest Constructions provides photo-realistic 3D design visualisations for every project before any work begins, so you can fully approve your space first.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: TirunelveliPage,
});

function TirunelveliPage() {
  return (
    <SiteLayout>
      <Hero />
      <WhyChoose />
      <Services />
      <FAQ />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-32">
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary-glow/30 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.3em] text-primary-glow">Tirunelveli</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 font-[Playfair_Display] text-5xl font-bold text-white sm:text-6xl">
          Interior Designer in <span className="italic text-primary-glow">Tirunelveli.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
          Sky Nest Constructions — Tirunelveli's most trusted interior design and construction studio. Based in Palayamkottai, serving all of Tirunelveli district and Tamil Nadu.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-primary-deep transition hover:scale-105">
            Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="tel:+918778758472" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur">
            Call +91 87787 58472
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const reasons = [
    { title: "16+ Years Expertise", desc: "Proven track record in Tirunelveli and Tamil Nadu" },
    { title: "120+ Happy Clients", desc: "Real projects, real people, real results" },
    { title: "Free 3D Visualisation", desc: "Approve your design before we build" },
    { title: "Transparent Pricing", desc: "No hidden charges, itemised quotes" },
    { title: "On-Time Delivery", desc: "Project managers, weekly updates" },
    { title: "Single Accountability", desc: "One team, no middlemen, 24/7 support" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <h2 className="font-[Playfair_Display] text-4xl font-bold text-center">Why choose Sky Nest as your interior designer in Tirunelveli?</h2>
      <p className="mt-4 text-center text-muted-foreground max-w-3xl mx-auto">
        We are a Tirunelveli-based interior design studio with a local understanding of Tamil Nadu homeowners' needs — from traditional Chettinad-inspired details to contemporary minimalism. With 120+ completed projects in Tirunelveli, Palayamkottai, Nagercoil and surrounding areas, we are the most experienced choice for your home or commercial space.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-3xl bg-card p-7 shadow-soft">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-[Playfair_Display] text-xl font-semibold">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const featured = services.slice(0, 6);
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <h2 className="font-[Playfair_Display] text-4xl font-bold text-center">Services We Offer in Tirunelveli</h2>
      <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
        From modular kitchens to full-home renovations, we offer 16 specialised services for homes and businesses in Tirunelveli.
      </p>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((s) => (
          <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl bg-card p-7 shadow-soft hover:shadow-elegant transition">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-[Playfair_Display] text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 font-semibold text-primary-foreground shadow-elegant transition hover:scale-105">
          View All 16 Services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Which is the best interior design company in Tirunelveli?",
      a: "Sky Nest Constructions, headquartered in Palayamkottai, is widely considered the best interior design and construction company in Tirunelveli. With 16+ years of expertise, 120+ completed projects, and a dedicated team led by founder Arunraj Krishnan, we deliver premium results for homes, offices, and commercial spaces.",
    },
    {
      q: "How much does interior design cost in Tirunelveli?",
      a: "Interior design costs in Tirunelveli vary by room size and scope. A modular kitchen can start from ₹1.5 lakhs, a bedroom interior from ₹80,000, and a full 2BHK interior from ₹4–8 lakhs. Sky Nest Constructions provides free, transparent itemised quotes with no surprises.",
    },
    {
      q: "How long does a modular kitchen take to install in Tirunelveli?",
      a: "A modular kitchen by Sky Nest Constructions in Tirunelveli is typically fabricated and installed within 15–30 days from design approval, depending on the kitchen size and finish chosen.",
    },
    {
      q: "What cities near Tirunelveli does Sky Nest serve?",
      a: "Sky Nest Constructions serves Tirunelveli, Palayamkottai, Nagercoil, Tenkasi, Thoothukudi, and expanding to Madurai, Coimbatore, and Chennai across Tamil Nadu.",
    },
  ];
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <h2 className="font-[Playfair_Display] text-3xl font-bold text-center">Interior Design FAQs — Tirunelveli</h2>
        <div className="mt-10 space-y-6">
          {faqs.map(({ q, a }) => (
            <details key={q} className="rounded-2xl bg-card p-6 shadow-soft open:ring-1 open:ring-primary/20">
              <summary className="cursor-pointer font-semibold text-base">{q}</summary>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 text-center">
      <h2 className="font-[Playfair_Display] text-4xl font-bold">Ready to design your Tirunelveli home?</h2>
      <p className="mt-4 text-muted-foreground text-lg">Free consultation · 3D visualisation · Transparent pricing · On-time delivery</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 font-semibold text-primary-foreground shadow-elegant transition hover:scale-105">
          Get Free Quote <ArrowRight className="h-4 w-4" />
        </Link>
        <a href="https://wa.me/918778758472" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-4 font-semibold shadow-soft">
          WhatsApp Now
        </a>
      </div>
    </section>
  );
}
