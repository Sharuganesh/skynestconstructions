import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/SeoPageLayout";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/services/wardrobe-design")({
  head: () => ({
    meta: [
      { title: "Wardrobe Design in India | Sky Nest Constructions" },
      { name: "description", content: "Custom wardrobe design across India with sliding, hinged and walk-in options. Free consultation and 3D design included." },
    ],
    links: [{ rel: "canonical", href: "https://skynestconstructions.in/services/wardrobe-design" }],
  }),
  component: Component,
});

function Component() {
  return (
    <SiteLayout>
      <SeoPageLayout
        title="Wardrobe Design in India"
        description="Sky Nest Constructions creates custom wardrobes that maximise storage, improve flow and elevate the look of every bedroom and dressing area."
        h1="Wardrobe Design in India"
        intro="We design sliding wardrobes, hinged wardrobes, walk-in wardrobes and dressing units for modern homes and luxury residences across India."
        bullets={[
          "Space-saving design with tailored storage compartments",
          "Premium wood, laminate, PVC and mirror finish options",
          "Integrated lighting, accessories and soft-close hardware",
          "Custom design consultation and site measurement",
        ]}
        highlights={[
          { title: "Tailored storage", text: "Shelves, drawers, hanging space and utility compartments designed around your routine." },
          { title: "Premium finishes", text: "Modern textures and durable materials that complement your interior style." },
          { title: "Built to last", text: "Precision joinery and dependable hardware for daily durability." },
        ]}
        faqs={[
          { question: "Do you design wardrobe interiors for small bedrooms?", answer: "Yes. We specialise in compact wardrobe solutions that improve storage without making the room feel crowded." },
          { question: "What wardrobe styles do you offer?", answer: "We offer sliding wardrobes, hinged wardrobes, walk-in wardrobes, dressing units and storage combinations in wood, PVC and laminate finishes." },
          { question: "Do you offer 3D visuals for wardrobes?", answer: "Yes. We provide visual layouts and design previews before production so you can finalise the configuration confidently." },
        ]}
      >
        <p className="mt-6 text-base text-muted-foreground">
          A wardrobe should feel effortless to use and beautiful to look at. Our wardrobes are planned around your daily routine and the way your home works, giving you storage that feels premium rather than bulky.
        </p>
      </SeoPageLayout>
    </SiteLayout>
  );
}
