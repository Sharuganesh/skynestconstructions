import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Leaf, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sky Nest Constructions | Build with Trust" },
      { name: "description", content: "Founded by Arunraj Krishnan, Sky Nest Constructions blends 16+ years of expertise with sustainable, customer-centric design. Discover our story, values and team." },
      { property: "og:title", content: "About Sky Nest Constructions" },
      { property: "og:description", content: "Premium, sustainable construction & interior services across India. Meet the studio behind 'Build with Trust'." },
      { property: "og:url", content: "https://skynestconstructions.in/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://skynestconstructions.in/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <Hero />
      <Story />
      <Values />
      <Founder />
    </SiteLayout>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=75)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/85 via-primary-deep/60 to-background" />
      </motion.div>
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center lg:px-8">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.3em] text-primary-glow">Our Story</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 max-w-3xl text-5xl font-bold text-white sm:text-6xl">
          A studio built on <span className="italic text-primary-glow">trust.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-5 max-w-2xl text-lg text-white/85">
          From a single founder's vision in 2021 to a multi-discipline studio crafting premium spaces across India.
        </motion.p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=70" alt="Sky Nest workshop" className="rounded-3xl shadow-elegant" loading="lazy" />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-card p-6 shadow-elegant sm:block">
            <p className="font-[Playfair_Display] text-4xl font-bold text-primary-deep">2021</p>
            <p className="text-sm text-muted-foreground">Founded in Palayamkottai</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Who we are</span>
          <h2 className="mt-3 font-[Playfair_Display] text-4xl font-bold sm:text-5xl">Craft + engineering, under one roof.</h2>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">
            Sky Nest Constructions was founded in 2021 by <strong className="text-foreground">Arunraj Krishnan</strong> to fix a simple problem in our industry: brilliant concepts let down by inconsistent execution. We bring designers, carpenters, electricians, plumbers and project managers into a single accountable team.
          </p>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            With 16+ years of collective expertise, we work across construction and 16 interior specialities — from modular kitchens and wardrobes to commercial fit-outs and full-scope renovations.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              ["120+", "Happy clients"],
              ["16+", "Years expertise"],
              ["24/7", "Availability"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl bg-secondary p-4 text-center">
                <p className="font-[Playfair_Display] text-2xl font-bold text-primary-deep">{v}</p>
                <p className="text-xs text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Values() {
  const vals = [
    { icon: Target, title: "Our Mission", text: "Deliver beautifully crafted, durable spaces that respect timelines, budgets and the planet." },
    { icon: Sparkles, title: "Our Vision", text: "To become South India's most trusted name in residential and commercial interior craftsmanship." },
    { icon: Heart, title: "Our Promise", text: "Honest pricing, transparent communication and finishes you'll be proud of for decades." },
  ];
  const pillars = [
    { icon: ShieldCheck, title: "Quality & Reliability" },
    { icon: Users, title: "Customer Centric" },
    { icon: Leaf, title: "Sustainability" },
    { icon: Award, title: "Modern & Innovative" },
  ];
  return (
    <section className="relative overflow-hidden bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {vals.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-3xl bg-card p-8 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-[Playfair_Display] text-2xl font-bold">{v.title}</h3>
              <p className="mt-3 text-muted-foreground">{v.text}</p>
            </motion.div>
          ))}
        </div>
        <h3 className="mt-20 text-center font-[Playfair_Display] text-3xl font-bold">Built on four core pillars</h3>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-soft">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="h-6 w-6" />
              </div>
              <p className="font-semibold">{p.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero p-10 shadow-elegant sm:p-16">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_2fr]">
          <div className="grid h-48 w-48 mx-auto place-items-center rounded-full bg-white/15 backdrop-blur border border-white/30">
            <span className="font-[Playfair_Display] text-6xl font-bold text-white">AK</span>
          </div>
          <div className="text-white">
            <span className="text-xs uppercase tracking-[0.3em] text-primary-glow">Founder's Note</span>
            <h2 className="mt-3 font-[Playfair_Display] text-4xl font-bold">Arunraj Krishnan</h2>
            <p className="mt-2 text-white/80">Founder & Principal · Sky Nest Constructions</p>
            <p className="mt-5 text-lg text-white/90 italic">
              "When you hire Sky Nest, you hire my personal commitment. Every project is an extension of my name — and I refuse to put that name on anything less than excellent."
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary-deep transition hover:scale-105">Talk to Arunraj</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}