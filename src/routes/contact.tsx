import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sky Nest Constructions | Get a Free Quote" },
      { name: "description", content: "Talk to Sky Nest Constructions. Call, WhatsApp or send us a message for a free interior or construction consultation. Available 24/7 across India." },
      { property: "og:title", content: "Contact Sky Nest Constructions" },
      { property: "og:description", content: "Reach Sky Nest by phone, WhatsApp or contact form. Free consultations within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-hero py-32">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary-glow">Contact</span>
          <h1 className="mt-4 font-[Playfair_Display] text-5xl font-bold text-white sm:text-6xl">
            Let's <span className="italic text-primary-glow">build together.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Share your idea — call, WhatsApp or drop a message. We respond within 24 hours, 365 days a year.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <MapSection />
    </SiteLayout>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "Interior Design", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hi Sky Nest, I'm ${form.name}. Phone: ${form.phone}. Email: ${form.email}. Interested in: ${form.service}. ${form.message}`;
    window.open(`https://wa.me/918778758472?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }

  if (sent) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="grid place-items-center rounded-3xl bg-card p-12 text-center shadow-elegant">
        <CheckCircle2 className="h-16 w-16 text-accent" />
        <h3 className="mt-6 font-[Playfair_Display] text-3xl font-bold">Message ready!</h3>
        <p className="mt-3 text-muted-foreground">We've opened WhatsApp with your details. Hit send and we'll respond within 24 hours.</p>
        <button onClick={() => setSent(false)} className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Send another</button>
      </motion.div>
    );
  }

  const input = "mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-base outline-none transition focus:border-primary focus:shadow-soft";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="rounded-3xl bg-card p-7 shadow-elegant sm:p-10"
    >
      <h2 className="font-[Playfair_Display] text-3xl font-bold">Tell us about your project</h2>
      <p className="mt-2 text-sm text-muted-foreground">Submitting opens WhatsApp pre-filled with your details.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Your Name
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={input} placeholder="Arunraj K." />
        </label>
        <label className="block text-sm font-medium">
          Mobile
          <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={input} placeholder="+91 ..." />
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Email
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={input} placeholder="you@example.com" />
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Service Required
          <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={input}>
            {["Interior Design", "Modular Kitchen", "Wardrobe", "False Ceiling", "Home Renovation", "Commercial Interior", "Office Interior", "3D Design", "Other"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Project Details
          <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={input} placeholder="Tell us about your space, timeline and budget…" />
        </label>
      </div>

      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-4 font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.02] sm:w-auto">
        Send Message <Send className="h-4 w-4" />
      </button>
    </motion.form>
  );
}

function ContactInfo() {
  const items = [
    { icon: Phone, label: "Call us", value: "+91 87787 58472", href: "tel:+918778758472" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat now", href: "https://wa.me/918778758472" },
    { icon: Mail, label: "Email", value: "skynestconstructions@gmail.com", href: "mailto:skynestconstructions@gmail.com" },
    { icon: MapPin, label: "Studio", value: "No.184-A, Ganapathiyapuram Street, Seevalaperi Main Road, Palayamkottai", href: "https://maps.app.goo.gl/RpqxK5x585aUFD3CA?g_st=ac" },
    { icon: Clock, label: "Working hours", value: "Open 24 / 7" },
  ];
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
      <h2 className="font-[Playfair_Display] text-3xl font-bold">Reach us directly</h2>
      <p className="text-muted-foreground">Prefer not to fill a form? Use any channel below.</p>
      <div className="mt-4 space-y-3">
        {items.map((it) => {
          const Comp: any = it.href ? "a" : "div";
          return (
            <Comp key={it.label} href={it.href} target={it.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-elegant">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                <it.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{it.label}</p>
                <p className="mt-1 font-semibold break-words">{it.value}</p>
              </div>
            </Comp>
          );
        })}
      </div>
    </motion.div>
  );
}

function MapSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
      <div className="overflow-hidden rounded-3xl shadow-elegant">
        <iframe
          title="Sky Nest location"
          src="https://www.google.com/maps?q=Palayamkottai,+Tirunelveli&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[420px] w-full border-0"
        />
      </div>
    </section>
  );
}