import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SeoPageLayout } from "@/components/SeoPageLayout";

export const Route = createFileRoute("/interior-designer-palayamkottai")({
  head: () => ({
    meta: [
      { title: "Interior Designer in Palayamkottai | Sky Nest Constructions" },
      { name: "description", content: "Find a trusted interior designer in Palayamkottai, Tirunelveli for modular kitchens, wardrobes, false ceilings, renovation and more. Free consultation." },
    ],
    links: [{ rel: "canonical", href: "https://skynestconstructions.in/interior-designer-palayamkottai" }],
  }),
  component: Component,
});

function Component() {
  return (
    <SiteLayout>
      <SeoPageLayout
        title="Interior Designer in Palayamkottai"
        description="Sky Nest Constructions is a trusted interior design partner in Palayamkottai, serving homes, villas, offices and premium residences with complete design and execution support."
        h1="Interior Designer in Palayamkottai"
        intro="From homes to offices and villas, we provide end-to-end interiors in Palayamkottai with design planning, material selection, execution and aftercare."
        bullets={[
          "Local site support in Palayamkottai and nearby areas",
          "Premium interior design and construction under one roof",
          "Free consultation and transparent quotes",
          "3D design, execution and handover support",
        ]}
        highlights={[
          { title: "Local understanding", text: "We tailor designs to the climate, layout and lifestyle of Palayamkottai homes." },
          { title: "Trusted execution", text: "Every project is handled with clear milestones and dedicated site coordination." },
          { title: "Pan-India delivery", text: "Our base in Tirunelveli allows us to serve clients beyond Tamil Nadu as well." },
        ]}
        faqs={[
          { question: "Do you serve Palayamkottai homes and villas?", answer: "Yes. We work with homes, villas, offices and commercial spaces in Palayamkottai and surrounding regions." },
          { question: "Can I get a free consultation in Palayamkottai?", answer: "Yes. We offer free consultations to understand your goals, space and budget before proposing a design plan." },
          { question: "Do you provide full-site execution?", answer: "Yes. From design to finishing, our team handles the project end to end with site oversight and quality checks." },
        ]}
      >
        <p className="mt-6 text-base text-muted-foreground">
          We are proud to support homeowners and businesses in Palayamkottai with thoughtful, durable and premium interiors that combine local relevance with modern styling.
        </p>
      </SeoPageLayout>
    </SiteLayout>
  );
}
