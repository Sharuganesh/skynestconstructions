import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LoadingSplash } from "../components/LoadingSplash";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0F172A" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "google-site-verification", content: "bfp_i_XnnSUNQDznxQlxKdps23qiy6Ulbuxszvqujcw" },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Palayamkottai, Tirunelveli, Tamil Nadu" },
      { name: "geo.position", content: "8.7139;77.7567" },
      { name: "ICBM", content: "8.7139, 77.7567" },
      { property: "og:site_name", content: "Sky Nest Constructions" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@skynestconstructions" },
      { name: "author", content: "Arunraj Krishnan, Sky Nest Constructions" },
      { name: "revisit-after", content: "7 days" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap" },
      { rel: "alternate", hreflang: "en-IN", href: "https://skynestconstructions.in/" },
    ],
    scripts: [
      // ── Schema 1: LocalBusiness + GeneralContractor (merged)
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["GeneralContractor", "HomeAndConstructionBusiness", "LocalBusiness"],
              "@id": "https://skynestconstructions.in/#business",
              name: "Sky Nest Constructions",
              alternateName: "Sky Nest",
              description: "Sky Nest Constructions is a premium interior design and construction company based in Palayamkottai, Tirunelveli, Tamil Nadu. Founded by Arunraj Krishnan in 2021, we offer modular kitchens, wardrobe design, false ceilings, 3D interior design, home renovation, office interiors, PVC panels, wood works, electrical, plumbing and more across Tamil Nadu.",
              image: "https://skynestconstructions.in/skynest-logo.png",
              logo: "https://skynestconstructions.in/skynest-logo.png",
              url: "https://skynestconstructions.in",
              telephone: "+91-8778758472",
              email: "skynestconstructions@gmail.com",
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress: "No.184-A, Ganapathiyapuram Street, Seevalaperi Main Road",
                addressLocality: "Palayamkottai",
                addressRegion: "Tamil Nadu",
                postalCode: "627011",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "8.7139",
                longitude: "77.7567",
              },
              hasMap: "https://maps.app.goo.gl/RpqxK5x585aUFD3CA",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
              areaServed: [
                { "@type": "City", name: "Tirunelveli" },
                { "@type": "City", name: "Palayamkottai" },
                { "@type": "City", name: "Nagercoil" },
                { "@type": "City", name: "Tenkasi" },
                { "@type": "City", name: "Thoothukudi" },
                { "@type": "City", name: "Madurai" },
                { "@type": "City", name: "Coimbatore" },
                { "@type": "City", name: "Chennai" },
                { "@type": "AdministrativeArea", name: "Tamil Nadu" },
              ],
              serviceArea: {
                "@type": "AdministrativeArea",
                name: "Tamil Nadu",
              },
              foundingDate: "2021",
              numberOfEmployees: { "@type": "QuantitativeValue", value: "10" },
              founder: {
                "@type": "Person",
                name: "Arunraj Krishnan",
                jobTitle: "Founder & Principal",
              },
              knowsAbout: [
                "Modular Kitchen Design",
                "Wardrobe Design",
                "False Ceiling",
                "TV Unit Design",
                "Living Room Interior Design",
                "Bedroom Interior Design",
                "Office Interior Design",
                "Commercial Interior Design",
                "PVC Interiors",
                "Wood Works",
                "Wallpaper Installation",
                "3D Interior Design",
                "Home Renovation",
                "Electrical Works",
                "Plumbing Works",
                "Interior Design",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Interior Design & Construction Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Modular Kitchen Design", areaServed: "Tamil Nadu" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wardrobe Design", areaServed: "Tamil Nadu" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "False Ceiling", areaServed: "Tamil Nadu" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D Interior Design", areaServed: "Tamil Nadu" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Renovation", areaServed: "Tamil Nadu" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Interior Design", areaServed: "Tamil Nadu" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Interior Design", areaServed: "Tamil Nadu" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "PVC Interiors", areaServed: "Tamil Nadu" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wood Works", areaServed: "Tamil Nadu" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Works", areaServed: "Tamil Nadu" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plumbing Works", areaServed: "Tamil Nadu" } },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "47",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Priya R." },
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                  reviewBody: "Sky Nest delivered our 3BHK in record time — finishes are flawless and the team was a pleasure to work with.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Karthik S." },
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                  reviewBody: "From 3D visualisation to handover, every milestone hit. Our clinic feels premium and patients notice.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Lakshmi N." },
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                  reviewBody: "Honest pricing, master craftsmanship and zero compromise on quality. Truly worthy of 'Build with Trust'.",
                },
              ],
              sameAs: [
                "https://www.google.com/maps?q=Sky+Nest+Constructions+Palayamkottai",
                "https://wa.me/918778758472",
              ],
            },
            {
              "@type": "Organization",
              "@id": "https://skynestconstructions.in/#organization",
              name: "Sky Nest Constructions",
              url: "https://skynestconstructions.in",
              logo: "https://skynestconstructions.in/skynest-logo.png",
              sameAs: [
                "https://www.google.com/maps?q=Sky+Nest+Constructions+Palayamkottai",
                "https://wa.me/918778758472",
              ],
            },
            // ── Schema 2: WebSite
            {
              "@type": "WebSite",
              "@id": "https://skynestconstructions.in/#website",
              url: "https://skynestconstructions.in",
              name: "Sky Nest Constructions",
              description: "Premium interior design and construction services across Tamil Nadu — modular kitchens, wardrobes, false ceilings, 3D design, renovation and more.",
              publisher: { "@id": "https://skynestconstructions.in/#business" },
              inLanguage: "en-IN",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://skynestconstructions.in/services",
                },
                "query-input": "required name=search_term_string",
              },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <LoadingSplash />
      <Outlet />
    </QueryClientProvider>
  );
}
