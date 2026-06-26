import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Interior Design & Construction Services in India | Sky Nest" },
      { name: "description", content: "16 specialised interior design & construction services across India from our Tirunelveli base: modular kitchen, wardrobe, false ceiling, 3D design, home renovation, office interiors, PVC panels, wood works, electrical & plumbing. Free consultation." },
      { property: "og:title", content: "Interior Design Services in India | Sky Nest Constructions" },
      { property: "og:description", content: "16 services under one roof: modular kitchen, wardrobe, false ceiling, renovation & more delivered across India." },
      { property: "og:url", content: "https://skynestconstructions.in/services" },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "modular kitchen india, wardrobe design india, false ceiling india, interior design services india, home renovation india, 3d interior design india, office interior designer india, pvc interiors india, wood works india, electrical contractor india" },
    ],
    links: [{ rel: "canonical", href: "https://skynestconstructions.in/services" }],
    scripts: [
      // BreadcrumbList
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://skynestconstructions.in/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://skynestconstructions.in/services" },
          ],
        }),
      },
      // FAQ Schema for Services page
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the cost of a modular kitchen in Tirunelveli?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Modular kitchen cost in Tirunelveli depends on layout, material, and size. At Sky Nest Constructions, a standard modular kitchen starts from approximately ₹1.5 lakhs. Contact us at +91 87787 58472 for a free, itemised quote.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer 3D interior design in Tirunelveli?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Sky Nest Constructions provides photo-realistic 3D interior design visualisation for all projects in Tirunelveli and across Tamil Nadu, before any physical work begins, so clients can approve the design fully.",
              },
            },
            {
              "@type": "Question",
              name: "How long does a home renovation take with Sky Nest?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A typical home renovation with Sky Nest Constructions takes 30–90 days depending on scope. We assign a dedicated project manager and provide weekly progress updates throughout the project.",
              },
            },
            {
              "@type": "Question",
              name: "Do you do false ceiling work in Tirunelveli?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Sky Nest Constructions designs and installs false ceilings with integrated cove and accent lighting across Tirunelveli, Palayamkottai, Nagercoil, and all Tamil Nadu districts.",
              },
            },
            {
              "@type": "Question",
              name: "What types of wardrobe design do you offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sky Nest Constructions offers sliding, hinged, and walk-in wardrobe designs in wood, MDF, and PVC finishes, custom-built to maximize space for homes in Tirunelveli and Tamil Nadu.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <Hero />
      <Grid />
      <Process />
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
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.3em] text-primary-glow">Services across India</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 font-[Playfair_Display] text-5xl font-bold text-white sm:text-6xl">
          Interior Design & Construction <span className="italic text-primary-glow">Services in India.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
          Sixteen specialised disciplines delivered across India from our base in Tirunelveli — under a single, accountable studio.
        </motion.p>
      </div>
    </section>
  );
}

function Grid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: (i % 6) * 0.05 }}
            className="group relative overflow-hidden rounded-3xl bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="aspect-[5/4] overflow-hidden">
              <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-primary shadow-soft">
                <s.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-[Playfair_Display] text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Consultation", text: "We listen to your vision, lifestyle and budget on site or via WhatsApp." },
    { n: "02", title: "Design & 3D", text: "Photo-real 3D visuals, material boards and a transparent quote — before any work begins." },
    { n: "03", title: "Execution", text: "Dedicated project manager, weekly progress reports and senior quality checks." },
    { n: "04", title: "Handover", text: "Snag-free handover, on-time, with a one-year service warranty." },
  ];
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">How we work</span>
          <h2 className="mt-3 font-[Playfair_Display] text-4xl font-bold sm:text-5xl">A simple, transparent process</h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative rounded-3xl bg-card p-7 shadow-soft">
              <p className="font-[Playfair_Display] text-5xl font-bold text-primary-glow/60">{s.n}</p>
              <h3 className="mt-3 font-[Playfair_Display] text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              <CheckCircle2 className="absolute top-6 right-6 h-5 w-5 text-accent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-24 text-center lg:px-8">
      <h2 className="font-[Playfair_Display] text-4xl font-bold sm:text-5xl">Not sure which service you need?</h2>
      <p className="mt-4 text-lg text-muted-foreground">Send us a quick message — we'll guide you to the right scope, free of cost.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 font-semibold text-primary-foreground shadow-elegant transition hover:scale-105">
          Get a free quote <ArrowRight className="h-4 w-4" />
        </Link>
        <a href="https://wa.me/918778758472" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-4 font-semibold shadow-soft">
          WhatsApp now
        </a>
      </div>
    </section>
  );
}