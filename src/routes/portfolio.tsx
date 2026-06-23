import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { portfolio } from "@/lib/site-data";
import { ArrowRight, X } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Sky Nest Constructions — Interior & Build Projects" },
      { name: "description", content: "Browse Sky Nest's portfolio: living rooms, modular kitchens, bedrooms, offices and commercial fit-outs delivered across South India." },
      { property: "og:title", content: "Sky Nest Portfolio — Delivered Projects" },
      { property: "og:description", content: "Photo-real projects, real handovers. Explore Sky Nest's delivered interiors and constructions." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(portfolio.map((p) => p.category)))], []);
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const items = filter === "All" ? portfolio : portfolio.filter((p) => p.category === filter);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-hero py-32">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary-glow">Portfolio</span>
          <h1 className="mt-4 font-[Playfair_Display] text-5xl font-bold text-white sm:text-6xl">
            Recent <span className="italic text-primary-glow">handovers.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">A rotating selection of projects shipped in the last 12 months.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                filter === c ? "bg-gradient-brand text-primary-foreground shadow-soft" : "bg-secondary text-foreground/70 hover:bg-secondary/70"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.button
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04 }}
              onClick={() => setLightbox(p.img)}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl text-left"
            >
              <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/85 via-primary-deep/20 to-transparent" />
              <div className="absolute bottom-0 p-5 text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary-glow">{p.category}</p>
                <p className="mt-1 font-[Playfair_Display] text-xl font-semibold">{p.title}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">Want to see something specific?</p>
          <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary-deep">
            Request project visit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-primary-deep/95 p-5 backdrop-blur"
        >
          <button className="absolute top-5 right-5 text-white" onClick={() => setLightbox(null)} aria-label="Close">
            <X className="h-8 w-8" />
          </button>
          <img src={lightbox} alt="" className="max-h-[85vh] max-w-full rounded-2xl shadow-elegant" />
        </motion.div>
      )}
    </SiteLayout>
  );
}