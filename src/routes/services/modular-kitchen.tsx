import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/SeoPageLayout";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/services/modular-kitchen")({
  head: () => ({
    meta: [
      { title: "Modular Kitchen in Tirunelveli | Sky Nest Constructions" },
      { name: "description", content: "Premium modular kitchen design and installation in Tirunelveli and across India. Get a free consultation, 3D design preview, and transparent pricing." },
    ],
    links: [{ rel: "canonical", href: "https://skynestconstructions.in/services/modular-kitchen" }],
  }),
  component: Component,
});

function Component() {
  return (
    <SiteLayout>
      <SeoPageLayout
        title="Modular Kitchen in Tirunelveli"
        description="Sky Nest Constructions designs and installs modular kitchens in Tirunelveli and across India with premium finishes, efficient storage, and seamless execution."
        h1="Modular Kitchen in Tirunelveli"
        intro="From L-shape and U-shape layouts to island kitchens, we create practical, premium modular kitchens that suit your home, budget and lifestyle."
        bullets={[
          "Custom storage planning for cooking, cleaning and utility needs",
          "Premium shutters, hinges, carcasses and hardware",
          "3D design preview before fabrication begins",
          "On-time installation with a 1-year service warranty",
        ]}
        highlights={[
          { title: "Smart layouts", text: "Optimised for storage, ventilation and everyday usage." },
          { title: "Premium materials", text: "Durable finishes and modern hardware for long-term performance." },
          { title: "End-to-end delivery", text: "Design, fabrication and installation handled under one roof." },
        ]}
        faqs={[
          { question: "What is the price of a modular kitchen in Tirunelveli?", answer: "Prices vary by size, finish and accessories. A standard kitchen can start from around ₹1.5 lakhs, while premium layouts can go higher. We provide a transparent quote after consultation." },
          { question: "Do you provide 3D design before installation?", answer: "Yes. Every modular kitchen project includes a 3D design preview so you can approve the layout and finish before fabrication starts." },
          { question: "How long does modular kitchen installation take?", answer: "Most projects are fabricated and installed within 15 to 30 days after design approval, depending on size and material selection." },
        ]}
      >
        <p className="mt-6 text-base text-muted-foreground">
          Whether you want a compact kitchen for a city apartment or a luxurious full-height kitchen for a villa, our team balances elegance, durability and practical workflow. We specialise in modular kitchens for homes, villas and premium apartments across Tirunelveli and pan-India projects.
        </p>
      </SeoPageLayout>
    </SiteLayout>
  );
}
