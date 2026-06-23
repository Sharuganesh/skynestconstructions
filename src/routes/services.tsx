import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Sky Nest Constructions — Interior & Construction" },
      { name: "description", content: "Explore Sky Nest's 16 specialities: modular kitchens, wardrobes, false ceilings, 3D design, renovations, electrical, plumbing & more. Premium build quality across India." },
      { property: "og:title", content: "Sky Nest Services — End-to-end Construction & Interior" },
      { property: "og:description", content: "16 specialised disciplines under one accountable roof. From modular kitchens to commercial fit-outs." },
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
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.3em] text-primary-glow">Our Services</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 font-[Playfair_Display] text-5xl font-bold text-white sm:text-6xl">
          Sixteen ways to <span className="italic text-primary-glow">build better.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
          Every speciality you might need to take a project from raw site to handover — under a single, accountable studio.
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