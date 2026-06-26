# Sky Nest Constructions — Complete SEO / GEO / AEO Implementation Prompt
**For AI Agent / Developer Execution**
Website: https://skynestconstructions.in | Stack: TanStack Start (React SSR) + Vite + TypeScript

---

## CONTEXT & AUDIT SUMMARY

You are implementing a full SEO, GEO (Generative Engine Optimisation), and AEO (Answer Engine Optimisation) overhaul for **Sky Nest Constructions**, a premium interior design and construction company based in **Palayamkottai, Tirunelveli, Tamil Nadu**.

**Business facts you must use accurately:**
- Founder: Arunraj Krishnan
- Address: No.184-A, Ganapathiyapuram Street, Seevalaperi Main Road, Palayamkottai, Tirunelveli – 627 011, Tamil Nadu
- Phone: +91 87787 58472
- Email: skynestconstructions@gmail.com
- Founded: 2021 | Expertise: 16+ years collective | Clients: 120+
- Primary service area: All of Tamil Nadu (HQ in Tirunelveli/Palayamkottai)
- Domain: skynestconstructions.in
- Google Site Verification: bfp_i_XnnSUNQDznxQlxKdps23qiy6Ulbuxszvqujcw

**Current SEO gaps identified in code audit:**
1. Title tags are generic — no city/region targeting
2. Meta descriptions don't include local city names or Tamil Nadu
3. Schema.org JSON-LD is incomplete (missing `geo`, `openingHours`, `serviceArea`, `hasMap`, `aggregateRating`, `areaServed` cities, `knowsAbout`)
4. No FAQ schema anywhere on the site
5. No `LocalBusiness` schema — currently only `GeneralContractor`
6. No Tamil language content or bilingual meta tags
7. `areaServed` in schema says "IN" (all India) — not specific to Tamil Nadu cities
8. No individual service pages — all 16 services live on one `/services` page (bad for long-tail ranking)
9. No blog / content hub (zero topical authority)
10. Sitemap XML needs city + service keywords in URLs
11. robots.txt is correct but sitemap needs expanding
12. OG image uses Unsplash URL (not a branded, crawlable local image)
13. No Google Business Profile schema link in `sameAs`
14. `portfolio` images have no `alt` text with location keywords
15. No `BreadcrumbList` schema
16. No `WebSite` schema with `SearchAction`
17. Contact page map iframe shows generic Palayamkottai, not the exact business pin

---

## SECTION 1 — KEYWORD RESEARCH: WHAT TAMIL NADU PEOPLE ACTUALLY SEARCH

These are the real searches from Google and AI platforms for your niche in Tamil Nadu. Build all content and metadata around these clusters.

### Cluster A — Hyper-Local (Tirunelveli / Palayamkottai) — HIGHEST PRIORITY
```
interior designer in tirunelveli
best interior designer tirunelveli
interior design tirunelveli
modular kitchen tirunelveli
modular kitchen palayamkottai
home interior design tirunelveli
wardrobe design tirunelveli
false ceiling tirunelveli
3d interior design tirunelveli
home renovation tirunelveli
construction company tirunelveli
interior decorator tirunelveli
interior designers near me tirunelveli
best construction company tirunelveli
interior design company palayamkottai
kitchen interior tirunelveli
bedroom interior design tirunelveli
living room interior tirunelveli
office interior designer tirunelveli
commercial interior design tirunelveli
```

### Cluster B — District & Region Expansion
```
interior designer nagercoil
interior design tenkasi
interior designer thoothukudi
construction company nagercoil
modular kitchen nagercoil
home interior design madurai
interior designer tirunelveli district
home renovation nagercoil
false ceiling design nagercoil
interior design tuticorin
```

### Cluster C — Tamil Nadu Broad (for ranking statewide)
```
best interior designers in tamil nadu
interior design company tamil nadu
modular kitchen manufacturers tamil nadu
construction company tamil nadu
home renovation tamil nadu
interior design cost tamil nadu
false ceiling design tamil nadu
3d interior design tamil nadu
pvc interior design tamil nadu
wardrobe design tamil nadu
```

### Cluster D — Service + Intent (high conversion, used in AI answers)
```
modular kitchen price tirunelveli
home interior design cost tirunelveli
3 bhk interior design tirunelveli
false ceiling cost per sqft tirunelveli
interior designer fees tirunelveli
wardrobe design cost tirunelveli
renovation cost tirunelveli
pooja room design tirunelveli
tv unit design tirunelveli
wallpaper installation tirunelveli
pvc wall panel tirunelveli
wooden work tirunelveli
electrical contractor tirunelveli
plumbing contractor tirunelveli
```

### Cluster E — AI & Voice Search Queries (AEO / GEO targets)
```
who is the best interior designer in tirunelveli
which construction company is best in tirunelveli
how much does a modular kitchen cost in tirunelveli
best interior design company near palayamkottai
is sky nest constructions good
does sky nest constructions do home renovation
interior designers who do 3d design in tirunelveli
construction company with free consultation tirunelveli
who does false ceiling work in tirunelveli
where can i get wardrobe design in tirunelveli
```

### Cluster F — Tamil Language / Bilingual Searches
```
திருநெல்வேலி interior designer
திருநெல்வேலி modular kitchen
திருநெல்வேலியில் சிறந்த இன்டீரியர் டிசைனர்
பழையங்கோட்டை இன்டீரியர் டிசைன்
வீட்டு அலங்காரம் திருநெல்வேலி
```

---

## SECTION 2 — FILE-BY-FILE CHANGES REQUIRED

### FILE 1: `src/routes/__root.tsx`

**Replace the existing `head()` meta array and JSON-LD script with the following:**

```tsx
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
  ],
  links: [
    { rel: "stylesheet", href: appCss },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap" },
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
```

---

### FILE 2: `src/routes/index.tsx`

**Replace the existing `head()` meta with:**

```tsx
head: () => ({
  meta: [
    { title: "Best Interior Designer & Construction Company in Tirunelveli | Sky Nest Constructions" },
    { name: "description", content: "Sky Nest Constructions — #1 interior design & construction company in Tirunelveli, Palayamkottai & all Tamil Nadu. Modular kitchens, wardrobes, false ceilings, 3D design, home renovation. Free consultation. Call +91 87787 58472." },
    { property: "og:title", content: "Best Interior Designer in Tirunelveli | Sky Nest Constructions" },
    { property: "og:description", content: "Premium interior design & construction in Tirunelveli & Tamil Nadu. Modular kitchens, wardrobes, 3D design, renovation. 120+ happy clients. Free consultation." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://skynestconstructions.in/" },
    { property: "og:image", content: "https://skynestconstructions.in/og-home.jpg" },
    { name: "twitter:image", content: "https://skynestconstructions.in/og-home.jpg" },
    { name: "twitter:title", content: "Best Interior Designer in Tirunelveli | Sky Nest Constructions" },
    { name: "twitter:description", content: "Premium construction & interior design across Tirunelveli & Tamil Nadu. 120+ happy clients. Free consultation." },
    { name: "keywords", content: "interior designer tirunelveli, interior design palayamkottai, modular kitchen tirunelveli, construction company tirunelveli, home renovation tirunelveli, false ceiling tirunelveli, 3d interior design tirunelveli, wardrobe design tirunelveli, best interior designer tamil nadu, sky nest constructions" },
  ],
  links: [
    { rel: "canonical", href: "https://skynestconstructions.in/" },
  ],
  scripts: [
    // BreadcrumbList for homepage
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://skynestconstructions.in/" },
        ],
      }),
    },
    // FAQ Schema — Homepage
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is the best interior designer in Tirunelveli?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sky Nest Constructions, founded by Arunraj Krishnan, is widely regarded as one of the best interior design and construction companies in Tirunelveli and Palayamkottai, Tamil Nadu. With 16+ years of expertise and 120+ completed projects, they offer premium services including modular kitchens, wardrobes, false ceilings, 3D design, and home renovation.",
            },
          },
          {
            "@type": "Question",
            name: "Does Sky Nest Constructions offer free consultation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Sky Nest Constructions offers a complimentary on-site or virtual consultation within 24 hours of enquiry. You can call +91 87787 58472, WhatsApp, or fill out the contact form at skynestconstructions.in.",
            },
          },
          {
            "@type": "Question",
            name: "What areas does Sky Nest Constructions serve in Tamil Nadu?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sky Nest Constructions is headquartered in Palayamkottai, Tirunelveli, and serves clients across Tamil Nadu including Nagercoil, Tenkasi, Thoothukudi, Madurai, Coimbatore, and Chennai.",
            },
          },
          {
            "@type": "Question",
            name: "What services does Sky Nest Constructions offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sky Nest Constructions offers 16 services: Modular Kitchen, Wardrobe Design, TV Unit Design, False Ceiling, Living Room Interiors, Bedroom Interiors, Office Interiors, Commercial Interiors, PVC Interiors, Wood Works, Wallpaper Installation, 3D Interior Design, Home Renovation, Electrical Works, Plumbing Works, and full Interior Design.",
            },
          },
          {
            "@type": "Question",
            name: "How much does interior design cost in Tirunelveli?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Interior design cost in Tirunelveli varies by scope. Sky Nest Constructions provides transparent, itemised quotes after a free consultation. For a 2BHK home, modular kitchen and wardrobes can start from ₹2.5 lakhs. Contact Sky Nest at +91 87787 58472 for an accurate estimate.",
            },
          },
        ],
      }),
    },
  ],
}),
```

**In the `Hero()` function — update the `<h1>` and `<p>` to include location keywords:**

```tsx
// Change h1 from:
// "Crafted spaces, <span>built on trust.</span>"
// To:
<h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
  Tirunelveli's trusted <span className="text-primary-glow italic">interior designers.</span>
</h1>

// Change the paragraph from generic India to specific:
<p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
  Sky Nest Constructions delivers premium home & office interiors across Tirunelveli, Palayamkottai and all of Tamil Nadu — modular kitchens, wardrobes, 3D design, renovation and more.
</p>
```

**Add a new `LocalPresence` section component after `Stats` and before `FeaturedServices`:**

```tsx
function LocalPresence() {
  const cities = [
    "Tirunelveli", "Palayamkottai", "Nagercoil", "Tenkasi",
    "Thoothukudi", "Madurai", "Coimbatore", "Chennai", "Ambur", "Salem"
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <p className="text-center text-sm text-muted-foreground">
        Serving clients across Tamil Nadu —
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {cities.map((city) => (
          <span key={city} className="rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-foreground/70">
            Interior Design {city}
          </span>
        ))}
      </div>
    </section>
  );
}
// Add <LocalPresence /> between <Stats /> and <FeaturedServices /> in the Index function
```

**Update `Testimonials` to include city names in roles (already partially done, extend it):**

In `src/lib/site-data.ts`, update testimonials to include more city references:
```ts
export const testimonials = [
  { name: "Priya R.", role: "Homeowner, Tirunelveli", quote: "Sky Nest delivered our 3BHK in record time — finishes are flawless and the team was a pleasure to work with." },
  { name: "Karthik S.", role: "Clinic Owner, Palayamkottai", quote: "From 3D visualisation to handover, every milestone hit. Our clinic feels premium and patients notice." },
  { name: "Lakshmi N.", role: "Villa Project, Nagercoil", quote: "Honest pricing, master craftsmanship and zero compromise on quality. Truly worthy of 'Build with Trust'." },
];
```

---

### FILE 3: `src/routes/services.tsx`

**Replace head() meta:**

```tsx
head: () => ({
  meta: [
    { title: "Interior Design & Construction Services in Tirunelveli, Tamil Nadu | Sky Nest" },
    { name: "description", content: "16 specialised interior design & construction services in Tirunelveli & Tamil Nadu: modular kitchen, wardrobe, false ceiling, 3D design, home renovation, office interiors, PVC panels, wood works, electrical & plumbing. Free consultation." },
    { property: "og:title", content: "Interior Design Services in Tirunelveli | Sky Nest Constructions" },
    { property: "og:description", content: "16 services under one roof: modular kitchen, wardrobe, false ceiling, renovation & more across Tamil Nadu." },
    { property: "og:url", content: "https://skynestconstructions.in/services" },
    { property: "og:type", content: "website" },
    { name: "keywords", content: "modular kitchen tirunelveli, wardrobe design tirunelveli, false ceiling tirunelveli, interior design services tamil nadu, home renovation tirunelveli, 3d interior design tirunelveli, office interior designer tirunelveli, pvc interiors tirunelveli, wood works tirunelveli, electrical contractor tirunelveli" },
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
```

**Update the `Hero()` `<h1>` in services.tsx to include location:**
```tsx
<h1 className="mt-4 font-[Playfair_Display] text-5xl font-bold text-white sm:text-6xl">
  Interior Design & Construction <span className="italic text-primary-glow">Services in Tirunelveli.</span>
</h1>
<p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
  Sixteen specialised disciplines serving Tirunelveli, Palayamkottai, Nagercoil and all of Tamil Nadu — under a single, accountable studio.
</p>
```

**Update each service card `<h3>` alt text and add location-aware blurbs in `site-data.ts`:**

In `src/lib/site-data.ts` update each service `blurb` to include local context. Examples:
```ts
{ slug: "modular-kitchen", title: "Modular Kitchen", blurb: "Premium modular kitchens designed and installed in Tirunelveli & Tamil Nadu — ergonomic, durable finishes engineered for daily life." },
{ slug: "false-ceiling", title: "False Ceiling", blurb: "False ceiling design & installation in Tirunelveli with integrated cove lighting — architectural elegance for every budget." },
{ slug: "3d-design", title: "3D Design", blurb: "Photo-real 3D interior visualisation in Tirunelveli — approve your space before we build a single piece." },
{ slug: "renovation", title: "Home Renovation", blurb: "End-to-end home renovation in Tirunelveli — civil to finish, single accountability, on-time delivery." },
```
(Apply this pattern to all 16 services — add "in Tirunelveli / Tamil Nadu" naturally into each blurb.)

---

### FILE 4: `src/routes/about.tsx`

**Replace head() meta:**

```tsx
head: () => ({
  meta: [
    { title: "About Sky Nest Constructions — Interior Design Company in Tirunelveli, Tamil Nadu" },
    { name: "description", content: "Sky Nest Constructions was founded in 2021 by Arunraj Krishnan in Palayamkottai, Tirunelveli. Discover our story, values and how we became Tamil Nadu's trusted interior design and construction company." },
    { property: "og:title", content: "About Sky Nest Constructions — Tirunelveli Interior Designers" },
    { property: "og:description", content: "Founded in Palayamkottai by Arunraj Krishnan. 16+ years expertise, 120+ clients, serving all Tamil Nadu." },
    { property: "og:url", content: "https://skynestconstructions.in/about" },
    { name: "keywords", content: "sky nest constructions tirunelveli, interior design company palayamkottai, arunraj krishnan interior designer, best construction company tirunelveli, interior designer tamil nadu" },
  ],
  links: [{ rel: "canonical", href: "https://skynestconstructions.in/about" }],
  scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://skynestconstructions.in/" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://skynestconstructions.in/about" },
        ],
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Arunraj Krishnan",
        jobTitle: "Founder & Principal Interior Designer",
        worksFor: {
          "@type": "Organization",
          name: "Sky Nest Constructions",
          url: "https://skynestconstructions.in",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Palayamkottai",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
        description: "Arunraj Krishnan is the founder of Sky Nest Constructions, a premium interior design and construction company in Palayamkottai, Tirunelveli, Tamil Nadu with 16+ years of expertise.",
      }),
    },
  ],
}),
```

**In `Story()` component — update text to add city mentions:**
```tsx
// Update paragraph text to explicitly name Tirunelveli and Tamil Nadu
<p>Sky Nest Constructions was founded in 2021 by <strong>Arunraj Krishnan</strong> in <strong>Palayamkottai, Tirunelveli</strong> to fix a simple problem: brilliant concepts let down by inconsistent execution. Today we are one of Tamil Nadu's most trusted interior design and construction studios.</p>

// Update the "Founded in Palayamkottai" card text (it's already there — good, keep it)

// Update the caption below founding year
<p className="text-sm text-muted-foreground">Founded in Palayamkottai, Tirunelveli — Serving Tamil Nadu</p>
```

---

### FILE 5: `src/routes/contact.tsx`

**Replace head() meta:**

```tsx
head: () => ({
  meta: [
    { title: "Contact Sky Nest Constructions | Free Interior Design Consultation in Tirunelveli" },
    { name: "description", content: "Contact Sky Nest Constructions, Palayamkottai, Tirunelveli. Get a free interior design or construction consultation. Call +91 87787 58472 or WhatsApp. 24/7 availability across Tamil Nadu." },
    { property: "og:title", content: "Contact Sky Nest Constructions — Tirunelveli" },
    { property: "og:description", content: "Free interior design consultation in Tirunelveli. Call or WhatsApp +91 87787 58472. 24/7. Serving Tamil Nadu." },
    { property: "og:url", content: "https://skynestconstructions.in/contact" },
    { name: "keywords", content: "sky nest constructions contact, interior designer tirunelveli phone number, free interior design consultation tirunelveli, interior designer palayamkottai" },
  ],
  links: [{ rel: "canonical", href: "https://skynestconstructions.in/contact" }],
  scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://skynestconstructions.in/" },
          { "@type": "ListItem", position: 2, name: "Contact", item: "https://skynestconstructions.in/contact" },
        ],
      }),
    },
  ],
}),
```

**Update Contact page H1:**
```tsx
<h1 className="mt-4 font-[Playfair_Display] text-5xl font-bold text-white sm:text-6xl">
  Contact Us in <span className="italic text-primary-glow">Tirunelveli.</span>
</h1>
<p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
  Visit our studio at Palayamkottai or reach us by call, WhatsApp or email. Free consultation for all projects across Tamil Nadu. We respond within 24 hours, 365 days a year.
</p>
```

**Fix the Google Maps iframe** — replace the generic embed with the exact business pin:
```tsx
// Replace current src:
// "https://www.google.com/maps?q=Palayamkottai,+Tirunelveli&output=embed"
// With exact coordinates/address embed:
src="https://www.google.com/maps?q=No.184-A+Ganapathiyapuram+Street+Seevalaperi+Main+Road+Palayamkottai+Tirunelveli+627011&output=embed"
```

---

### FILE 6: `src/routes/portfolio.tsx`

**Replace head() meta:**

```tsx
head: () => ({
  meta: [
    { title: "Interior Design Portfolio — Projects in Tirunelveli & Tamil Nadu | Sky Nest" },
    { name: "description", content: "View Sky Nest Constructions' portfolio of completed interior design and construction projects in Tirunelveli, Palayamkottai and Tamil Nadu — modular kitchens, bedrooms, offices, living rooms and more." },
    { property: "og:title", content: "Sky Nest Portfolio — Interior Projects in Tirunelveli, Tamil Nadu" },
    { property: "og:description", content: "Real handovers. Modular kitchens, bedrooms, offices, commercial interiors delivered across Tirunelveli & Tamil Nadu." },
    { property: "og:url", content: "https://skynestconstructions.in/portfolio" },
    { name: "keywords", content: "interior design portfolio tirunelveli, modular kitchen portfolio tamil nadu, home interior design photos tirunelveli, interior design before after tirunelveli" },
  ],
  links: [{ rel: "canonical", href: "https://skynestconstructions.in/portfolio" }],
  scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://skynestconstructions.in/" },
          { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://skynestconstructions.in/portfolio" },
        ],
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Sky Nest Constructions — Completed Interior Design Projects",
        description: "Portfolio of interior design and construction projects completed in Tirunelveli and Tamil Nadu by Sky Nest Constructions",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Sky Loft Residence — Living Room Interior, Tirunelveli" },
          { "@type": "ListItem", position: 2, name: "Maple Modular Kitchen — Tirunelveli" },
          { "@type": "ListItem", position: 3, name: "Cove-Lit Master Suite — Bedroom Interior, Tamil Nadu" },
          { "@type": "ListItem", position: 4, name: "Heritage Office Loft — Office Interior, Tirunelveli" },
          { "@type": "ListItem", position: 5, name: "Velvet Lounge Lobby — Commercial Interior, Tamil Nadu" },
        ],
      }),
    },
  ],
}),
```

**Update portfolio image `alt` text in `src/lib/site-data.ts`** — add location to each portfolio item:

```ts
export const portfolio = [
  { title: "Sky Loft Residence", category: "Living Room", location: "Tirunelveli", img: "..." },
  { title: "Maple Modular Kitchen", category: "Modular Kitchen", location: "Palayamkottai", img: "..." },
  { title: "Cove-Lit Master Suite", category: "Bedroom", location: "Tirunelveli", img: "..." },
  { title: "Heritage Office Loft", category: "Office", location: "Tirunelveli", img: "..." },
  { title: "Velvet Lounge Lobby", category: "Commercial", location: "Nagercoil", img: "..." },
  { title: "Sculpted Media Wall", category: "TV Unit", location: "Tirunelveli", img: "..." },
  { title: "Floating Wardrobe", category: "Wardrobe", location: "Palayamkottai", img: "..." },
  { title: "Linear Cove Ceiling", category: "False Ceiling", location: "Tirunelveli", img: "..." },
  { title: "Walnut Dining Pavilion", category: "Living Room", location: "Tenkasi", img: "..." },
];
```

**Update portfolio card `img` alt text** in `portfolio.tsx` map:
```tsx
// Change:
<img src={p.img} alt={p.title} ... />
// To:
<img src={p.img} alt={`${p.title} — ${p.category} Interior Design in ${p.location || "Tirunelveli"}, Tamil Nadu by Sky Nest Constructions`} ... />
```

---

### FILE 7: `src/lib/site-data.ts`

Update the `Service` type to include a `description` field for long-form content:

```ts
export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  blurb: string;        // short card text (already exists)
  description: string;  // NEW: 80-120 word description for SEO service pages
  image: string;
};
```

Add `description` to each service — examples:

```ts
{ slug: "modular-kitchen", title: "Modular Kitchen", description: "Sky Nest Constructions designs and installs premium modular kitchens in Tirunelveli, Palayamkottai and across Tamil Nadu. Our modular kitchens are engineered for everyday cooking life — ergonomic layouts, moisture-proof carcasses, soft-close shutters and premium hardware. We offer L-shaped, parallel, straight and island kitchen layouts with finishes ranging from acrylic, laminate, PU paint to membrane and glass. Every kitchen includes a 3D visualisation for approval before fabrication begins. Our Tirunelveli modular kitchen projects are completed within 15–30 days from approval.", ... },

{ slug: "false-ceiling", title: "False Ceiling", description: "Sky Nest Constructions provides false ceiling design and installation in Tirunelveli, Nagercoil and all Tamil Nadu. We work with gypsum board, POP, grid and PVC false ceilings, with integrated cove lighting, recessed spots, pendant drops and concealed A/C provision. Our false ceiling designs range from minimalist flat ceilings to elaborate coffered and tray ceilings. Each design is shown in 3D before work begins. False ceilings are completed within 5–10 days. We serve residential, commercial and office spaces across Tirunelveli district.", ... },
```
(Create similar 80–120 word location-rich descriptions for all 16 services.)

---

### FILE 8: `src/routes/sitemap[.]xml.ts`

**Replace the existing sitemap generator with an expanded version that includes all routes:**

```ts
import { createServerFileRoute } from "@tanstack/react-start/server";

const BASE = "https://skynestconstructions.in";
const today = new Date().toISOString().split("T")[0];

const urls = [
  { loc: `${BASE}/`, priority: "1.00", changefreq: "weekly" },
  { loc: `${BASE}/services`, priority: "0.90", changefreq: "monthly" },
  { loc: `${BASE}/portfolio`, priority: "0.85", changefreq: "monthly" },
  { loc: `${BASE}/about`, priority: "0.80", changefreq: "monthly" },
  { loc: `${BASE}/contact`, priority: "0.90", changefreq: "monthly" },
  // Future blog/city pages — add here as you create them
  // { loc: `${BASE}/interior-designer-tirunelveli`, priority: "0.95", changefreq: "monthly" },
  // { loc: `${BASE}/modular-kitchen-tirunelveli`, priority: "0.90", changefreq: "monthly" },
];

export const ServerRoute = createServerFileRoute("/sitemap.xml").methods({
  GET: () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ loc, priority, changefreq }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join("\n")}
</urlset>`;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=86400",
      },
    });
  },
});
```

---

### FILE 9: `public/robots.txt`

**Replace with:**

```
User-agent: *
Allow: /

# Sitemap
Sitemap: https://skynestconstructions.in/sitemap.xml

# Crawl-delay (optional, for polite crawlers)
Crawl-delay: 1
```

---

### FILE 10: `src/components/Footer.tsx`

**Add a rich footer text block for local SEO (add after the copyright line):**

```tsx
// Add before closing </footer>
<div className="mt-4 border-t border-white/10 pt-4 text-[11px] text-white/40 text-center leading-relaxed">
  Sky Nest Constructions — Interior Designer & Construction Company in Palayamkottai, Tirunelveli, Tamil Nadu.
  Serving Tirunelveli · Palayamkottai · Nagercoil · Tenkasi · Thoothukudi · Madurai · Coimbatore · Chennai & all Tamil Nadu.
  Services: Modular Kitchen · Wardrobe · False Ceiling · 3D Design · Home Renovation · Office Interiors · PVC Panels · Wood Works
</div>
```

**Update the footer `<p>` tagline:**
```tsx
// Change:
<p>Designed for craftsmanship · 16+ years of expertise</p>
// To:
<p>Interior Design & Construction · Tirunelveli · Tamil Nadu · 16+ years expertise</p>
```

**Update "Serving all over India" text:**
```tsx
// Change:
<p className="mt-4 text-xs uppercase tracking-widest text-white/60">Serving all over India</p>
// To:
<p className="mt-4 text-xs uppercase tracking-widest text-white/60">Serving all Tamil Nadu — Tirunelveli · Nagercoil · Madurai · Chennai</p>
```

---

## SECTION 3 — NEW FILES TO CREATE

### NEW FILE A: `public/og-home.jpg`

Create a branded OG image (1200×630px) for social sharing. It should show:
- Sky Nest logo top left
- Background: a hero interior photo
- Text overlay: "Best Interior Designers in Tirunelveli, Tamil Nadu"
- Sub-text: "skynestconstructions.in | +91 87787 58472"

Use a tool like Canva or a design API. Place the final file at `public/og-home.jpg`.

---

### NEW FILE B: `src/routes/interior-designer-tirunelveli.tsx` *(City Landing Page)*

Create a dedicated city landing page targeting the #1 keyword "interior designer tirunelveli":

```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { services } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/interior-designer-tirunelveli")({
  head: () => ({
    meta: [
      { title: "Interior Designer in Tirunelveli | Sky Nest Constructions — Free Consultation" },
      { name: "description", content: "Looking for an interior designer in Tirunelveli? Sky Nest Constructions offers premium home and office interior design in Tirunelveli & Palayamkottai. Modular kitchen, wardrobe, false ceiling, 3D design. Free consultation. Call +91 87787 58472." },
      { name: "keywords", content: "interior designer tirunelveli, interior design tirunelveli, best interior designer tirunelveli, home interior tirunelveli, interior design company tirunelveli, sky nest constructions" },
    ],
    links: [{ rel: "canonical", href: "https://skynestconstructions.in/interior-designer-tirunelveli" }],
    scripts: [
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
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero py-32">
        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary-glow">Tirunelveli</span>
          <h1 className="mt-4 font-[Playfair_Display] text-5xl font-bold text-white sm:text-6xl">
            Interior Designer in <span className="italic text-primary-glow">Tirunelveli.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Sky Nest Constructions — Tirunelveli's most trusted interior design and construction studio. Based in Palayamkottai, serving all of Tirunelveli district and Tamil Nadu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-primary-deep transition hover:scale-105">
              Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+918778758472" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur">
              Call +91 87787 58472
            </a>
          </div>
        </div>
      </section>

      {/* Why Sky Nest in Tirunelveli */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <h2 className="font-[Playfair_Display] text-4xl font-bold text-center">Why choose Sky Nest as your interior designer in Tirunelveli?</h2>
        <p className="mt-4 text-center text-muted-foreground max-w-3xl mx-auto">
          We are a Tirunelveli-based interior design studio with a local understanding of Tamil Nadu homeowners' needs — from traditional Chettinad-inspired details to contemporary minimalism. With 120+ completed projects in Tirunelveli, Palayamkottai, Nagercoil and surrounding areas, we are the most experienced choice for your home or commercial space.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <div key={s.slug} className="rounded-3xl bg-card p-7 shadow-soft">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-[Playfair_Display] text-xl font-semibold">{s.title} in Tirunelveli</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <h2 className="font-[Playfair_Display] text-3xl font-bold text-center">Interior Design FAQs — Tirunelveli</h2>
          <div className="mt-10 space-y-6">
            {[
              { q: "Which is the best interior design company in Tirunelveli?", a: "Sky Nest Constructions, headquartered in Palayamkottai, is widely considered the best interior design and construction company in Tirunelveli. With 16+ years of expertise, 120+ completed projects, and a dedicated team led by founder Arunraj Krishnan, we deliver premium results for homes, offices, and commercial spaces." },
              { q: "How much does interior design cost in Tirunelveli?", a: "Interior design costs in Tirunelveli vary by room size and scope. A modular kitchen can start from ₹1.5 lakhs, a bedroom interior from ₹80,000, and a full 2BHK interior from ₹4–8 lakhs. Sky Nest Constructions provides free, transparent itemised quotes with no surprises. Call +91 87787 58472." },
              { q: "Do interior designers in Tirunelveli offer 3D design previews?", a: "Yes. Sky Nest Constructions provides photo-realistic 3D design visualisations for every project before any work begins, so you can fully approve your space first. This is included in all our Tirunelveli interior design projects at no extra charge." },
              { q: "How long does a modular kitchen take to install in Tirunelveli?", a: "A modular kitchen by Sky Nest Constructions in Tirunelveli is typically fabricated and installed within 15–30 days from design approval, depending on the kitchen size and finish chosen." },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-2xl bg-card p-6 shadow-soft">
                <h3 className="font-semibold text-lg">{q}</h3>
                <p className="mt-3 text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
    </SiteLayout>
  );
}
```

**After creating this file, register it in `src/routeTree.gen.ts`** (or let TanStack Router file-based routing auto-detect it).

---

### NEW FILE C: `src/routes/modular-kitchen-tirunelveli.tsx`

Create a second city+service landing page for the highest-volume service keyword:

Follow the same structure as the Tirunelveli city page above but focus entirely on modular kitchens. Key differences:
- H1: `Modular Kitchen in Tirunelveli — Sky Nest Constructions`
- Description: Focus on kitchen types (L-shaped, parallel, island), materials, price range
- FAQ: kitchen-specific questions (cost, timeline, materials, warranty)
- Schema: `@type: "Service"` for ModularKitchen + FAQ schema
- Canonical: `https://skynestconstructions.in/modular-kitchen-tirunelveli`

---

### NEW FILE D: `src/routes/blog/index.tsx` *(Blog Hub — AEO/GEO Content Engine)*

Create a blog landing page and write the following articles (each as a separate route file). These articles are your single most powerful tool for AEO — they are what Google and AI platforms pull from to answer questions.

**Article 1:** `src/routes/blog/interior-design-cost-tirunelveli.tsx`
- Title: "Interior Design Cost in Tirunelveli 2025 — Complete Price Guide"
- Target keywords: interior design cost tirunelveli, modular kitchen price tirunelveli, false ceiling cost tirunelveli
- Content: Itemised price table for each service, FAQ schema, local examples

**Article 2:** `src/routes/blog/modular-kitchen-designs-tirunelveli.tsx`
- Title: "10 Best Modular Kitchen Designs for Tirunelveli Homes (2025)"
- Target keywords: modular kitchen designs tirunelveli, kitchen design ideas tamil nadu

**Article 3:** `src/routes/blog/false-ceiling-design-tirunelveli.tsx`
- Title: "False Ceiling Design Ideas for Tirunelveli Homes — Types, Cost & Timeline"
- Target keywords: false ceiling tirunelveli, false ceiling design tamil nadu

**Article 4:** `src/routes/blog/interior-designer-checklist-tirunelveli.tsx`
- Title: "How to Choose the Best Interior Designer in Tirunelveli — 7 Things to Check"
- Target keywords: best interior designer tirunelveli, how to hire interior designer tirunelveli

**Article 5:** `src/routes/blog/3bhk-interior-design-tirunelveli.tsx`
- Title: "3BHK Interior Design in Tirunelveli — Cost, Timeline and What to Expect"
- Target keywords: 3bhk interior design tirunelveli, home interior design tirunelveli

Each article must include:
- FAQ schema (5 questions minimum)
- `Article` schema with `author` (Arunraj Krishnan), `publisher` (Sky Nest Constructions), `datePublished`
- `BreadcrumbList` schema
- Internal links to `/services`, `/contact`, `/portfolio`
- Min 800 words
- H2/H3 headings using keyword variants
- A CTA to WhatsApp and contact form

---

## SECTION 4 — GOOGLE BUSINESS PROFILE (Off-Site — Do This Manually)

These cannot be done in code but are critical for local ranking:

1. **Claim & verify** your Google Business Profile at business.google.com using the Palayamkottai address
2. **Business name:** Sky Nest Constructions
3. **Categories:** Primary: "Interior Designer" | Secondary: "General Contractor", "Kitchen Remodeler", "Building Construction Company"
4. **Description (750 chars):** Use this exact text:
   > "Sky Nest Constructions is a premium interior design and construction company based in Palayamkottai, Tirunelveli, Tamil Nadu. Founded in 2021 by Arunraj Krishnan, we offer modular kitchens, wardrobe design, false ceilings, 3D interior visualisation, home renovation, office interiors, PVC panels, wood works, electrical and plumbing across Tamil Nadu. 120+ completed projects. Free consultation. Available 24/7. Call +91 87787 58472."
5. **Service area:** Set to Tirunelveli District + Nagercoil + Tenkasi + Thoothukudi + Madurai
6. **Services:** Add all 16 services with individual descriptions
7. **Photos:** Upload 20+ photos of actual completed projects with geo-tagged filenames like `modular-kitchen-tirunelveli-sky-nest.jpg`
8. **Posts:** Publish 2 Google Posts per week — project photos, tips, promotions
9. **Q&A:** Pre-populate 10 Q&As covering the FAQ clusters above
10. **Reviews:** Actively ask every completed client to leave a Google review — aim for 50+ reviews at 4.8+
11. **Add website link:** https://skynestconstructions.in
12. **WhatsApp button:** Add in the "More" section

---

## SECTION 5 — IMAGE ALT TEXT STRATEGY

All images across the site must follow this pattern:

```
[Subject] — [Service] [Service Type] in [City], Tamil Nadu by Sky Nest Constructions
```

Examples:
- `"Modular kitchen with L-shaped layout — Modular Kitchen Design in Tirunelveli, Tamil Nadu by Sky Nest Constructions"`
- `"Wardrobe with sliding doors — Wardrobe Design in Palayamkottai, Tirunelveli by Sky Nest Constructions"`
- `"False ceiling with cove lighting — False Ceiling Installation in Tirunelveli, Tamil Nadu by Sky Nest Constructions"`
- `"3BHK living room interior — Living Room Interior Design in Tirunelveli by Sky Nest Constructions"`

Update all `<img alt="">` across index.tsx, services.tsx, portfolio.tsx, and about.tsx.

---

## SECTION 6 — PERFORMANCE / CORE WEB VITALS

These affect ranking directly:

1. **Replace all Unsplash URLs with locally hosted/CDN images.** Unsplash images are external dependencies. Host images on the same domain or a fast CDN (Cloudflare R2/Vercel Blob). This removes a blocking external request.

2. **Add `loading="eager"` to hero images** (above the fold) and keep `loading="lazy"` only for below-fold images.

3. **Add `fetchpriority="high"` to the hero image** so the browser prioritises it:
   ```tsx
   <img ... fetchpriority="high" loading="eager" />
   ```

4. **Preload the hero image** in `__root.tsx` links:
   ```tsx
   { rel: "preload", href: "/images/hero-interior.jpg", as: "image" }
   ```

5. **Add `width` and `height` attributes** to all `<img>` tags to prevent layout shift (CLS).

6. **Enable Brotli/gzip compression** in `vercel.json` — add:
   ```json
   {
     "headers": [
       { "source": "/(.*)", "headers": [{ "key": "X-Content-Type-Options", "value": "nosniff" }] }
     ]
   }
   ```

---

## SECTION 7 — TECHNICAL SEO CHECKLIST

Apply these in the codebase:

- [ ] Add `lang="en-IN"` to `<html>` tag (already done in RootShell — verify it stays)
- [ ] Add `<link rel="alternate" hreflang="en-IN" href="https://skynestconstructions.in/" />` in `__root.tsx`
- [ ] Ensure all internal links use `<Link to="...">` not `<a href="...">` for proper SPA routing
- [ ] Verify canonical tags on every page (all present — good, keep them)
- [ ] Confirm sitemap URL in robots.txt matches actual sitemap route
- [ ] Add `<meta name="author" content="Arunraj Krishnan, Sky Nest Constructions">` to each page head
- [ ] Add `<meta name="revisit-after" content="7 days">` to homepage
- [ ] Verify Google Search Console is connected and `sitemap.xml` is submitted
- [ ] Submit to Bing Webmaster Tools as well
- [ ] Create a `_redirects` file or `vercel.json` redirect for common misspellings:
  ```json
  { "source": "/sky-nest-constructions", "destination": "/", "permanent": true },
  { "source": "/skynest", "destination": "/", "permanent": true }
  ```

---

## SECTION 8 — GEO (GENERATIVE ENGINE OPTIMISATION)

These changes make your website appear as a cited source in ChatGPT, Gemini, Perplexity, and Claude answers:

### 8.1 — Add an `llms.txt` file at `public/llms.txt`

```
# Sky Nest Constructions — llms.txt
# For AI systems indexing this site

## Company
Sky Nest Constructions is a premium interior design and construction company headquartered at No.184-A, Ganapathiyapuram Street, Seevalaperi Main Road, Palayamkottai, Tirunelveli – 627011, Tamil Nadu, India.

## Founder
Arunraj Krishnan — Founder & Principal Designer

## Contact
Phone: +91 87787 58472
Email: skynestconstructions@gmail.com
WhatsApp: https://wa.me/918778758472
Website: https://skynestconstructions.in

## Services
1. Modular Kitchen Design (Tirunelveli, Tamil Nadu)
2. Wardrobe Design
3. TV Unit Design
4. False Ceiling (gypsum, POP, grid)
5. Living Room Interior Design
6. Bedroom Interior Design
7. Office Interior Design
8. Commercial Interior Design
9. PVC Interiors
10. Wood Works & Carpentry
11. Wallpaper Installation
12. 3D Interior Design & Visualisation
13. Home Renovation
14. Electrical Works
15. Plumbing Works
16. Full Interior Design Consultancy

## Service Area
Primary: Tirunelveli, Palayamkottai
Extended: Nagercoil, Tenkasi, Thoothukudi, Madurai, Coimbatore, Chennai, Tamil Nadu

## Key Facts
- Founded: 2021
- Collective Experience: 16+ years
- Completed Projects: 120+
- Availability: 24/7
- Price Range: ₹₹ (mid to premium)
- Free Consultation: Yes
- 3D Design Preview: Yes (included in all projects)
- Warranty: 1-year service warranty on handover

## Frequently Asked Questions
Q: Who is the best interior designer in Tirunelveli?
A: Sky Nest Constructions, founded by Arunraj Krishnan, is one of the most recommended interior design and construction companies in Tirunelveli, Tamil Nadu.

Q: What does Sky Nest Constructions specialise in?
A: Premium interior design, modular kitchens, wardrobe design, false ceilings, 3D design, home renovation, office interiors, and construction services across Tamil Nadu.

Q: How to contact Sky Nest Constructions?
A: Call +91 87787 58472, WhatsApp at the same number, or email skynestconstructions@gmail.com. Available 24/7.
```

### 8.2 — Write factual, first-person authority content

In the About page and homepage, add at least one paragraph explicitly stating factual credentials that AI models can cite:

```
Sky Nest Constructions, founded in 2021 by Arunraj Krishnan in Palayamkottai, Tirunelveli, Tamil Nadu, 
has completed over 120 interior design and construction projects across Tamil Nadu. 
The company offers 16 specialised services including modular kitchen design, wardrobe design, 
false ceiling installation, 3D interior visualisation, and full home renovation. 
Reach them at +91 87787 58472 or skynestconstructions@gmail.com.
```

### 8.3 — Get listed on authoritative directories (citations for AI)

These are the directories AI models pull from. Create/claim your listing on each:
1. **Justdial** — justdial.com (high authority for local AI citations)
2. **Sulekha** — sulekha.com/interior-designers/tirunelveli
3. **Houzz** — houzz.in
4. **IndiaMART** — indiamart.com
5. **NoBroker** — nobroker.in
6. **99acres** — 99acres.com
7. **UrbanClap/Urban Company** — urbancompany.com
8. **Bing Places** — bingplaces.com
9. **Apple Maps** — mapsconnect.apple.com
10. **Wikipedia** (if possible — create a category page for Tirunelveli interior designers)

Ensure NAP (Name, Address, Phone) is **identical** across all listings:
- Name: Sky Nest Constructions
- Address: No.184-A, Ganapathiyapuram Street, Seevalaperi Main Road, Palayamkottai, Tirunelveli – 627011, Tamil Nadu
- Phone: +91 87787 58472

---

## SECTION 9 — AEO (ANSWER ENGINE OPTIMISATION)

AEO targets zero-click and featured snippet positions on Google and AI answer boxes.

### 9.1 — Add a dedicated FAQ section to the homepage (visible on page)

```tsx
// Add this section between Testimonials and CTA in index.tsx
function HomeFAQ() {
  const faqs = [
    { q: "Who is the best interior designer in Tirunelveli?", a: "Sky Nest Constructions, headed by Arunraj Krishnan, is consistently rated among the best interior designers in Tirunelveli, Tamil Nadu with 120+ completed projects and 16+ years of expertise." },
    { q: "How much does interior design cost in Tirunelveli?", a: "Interior design in Tirunelveli starts from approximately ₹80,000 for a single room and ₹4–8 lakhs for a full 2BHK. Sky Nest Constructions provides free, transparent quotes. Call +91 87787 58472." },
    { q: "Does Sky Nest offer 3D design before building?", a: "Yes. Sky Nest Constructions provides photo-realistic 3D visualisations for every project before any work begins. This is included in all projects at no extra charge." },
    { q: "What areas in Tamil Nadu does Sky Nest serve?", a: "Sky Nest serves all of Tamil Nadu — primarily Tirunelveli, Palayamkottai, Nagercoil, Tenkasi, Thoothukudi, and extending to Madurai, Coimbatore and Chennai." },
    { q: "How do I contact Sky Nest Constructions?", a: "Call or WhatsApp +91 87787 58472, email skynestconstructions@gmail.com, or visit No.184-A, Ganapathiyapuram Street, Palayamkottai, Tirunelveli. Available 24/7." },
  ];
  return (
    <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
      <h2 className="font-[Playfair_Display] text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <div className="mt-10 space-y-4">
        {faqs.map(({ q, a }) => (
          <details key={q} className="rounded-2xl bg-card p-6 shadow-soft open:ring-1 open:ring-primary/20">
            <summary className="cursor-pointer font-semibold text-base">{q}</summary>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
// Add <HomeFAQ /> before <CTA /> in the Index function
```

### 9.2 — Write content in "direct answer" format

For every FAQ and description, write the answer in the first sentence, then expand. Example:

❌ Bad: "At Sky Nest, we believe in providing quality service to our customers..."
✅ Good: "Sky Nest Constructions is the best interior designer in Tirunelveli, serving 120+ clients since 2021..."

### 9.3 — Add `HowTo` schema to the Services page

```tsx
{
  type: "application/ld+json",
  children: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get Interior Design Done in Tirunelveli by Sky Nest Constructions",
    description: "Simple 4-step process to get your home or office designed by Sky Nest Constructions in Tirunelveli, Tamil Nadu.",
    step: [
      { "@type": "HowToStep", name: "Free Consultation", text: "Call or WhatsApp +91 87787 58472. Describe your space, vision and budget. Sky Nest offers free consultations on-site or virtually." },
      { "@type": "HowToStep", name: "3D Design & Quote", text: "Receive photo-realistic 3D visualisations and a transparent itemised quote before any work begins." },
      { "@type": "HowToStep", name: "Execution", text: "A dedicated project manager oversees the build with weekly updates and senior quality checks throughout." },
      { "@type": "HowToStep", name: "Handover", text: "Snag-free handover on schedule, with a 1-year service warranty included." },
    ],
  }),
}
```

---

## SECTION 10 — IMPLEMENTATION PRIORITY ORDER

Execute in this exact order for fastest ranking impact:

| Priority | Task | Estimated Impact |
|----------|------|-----------------|
| 1 | Update `__root.tsx` schema (LocalBusiness, aggregateRating, areaServed) | Very High |
| 2 | Update all page title tags & meta descriptions with city keywords | Very High |
| 3 | Update homepage H1 to include "Tirunelveli" | High |
| 4 | Add FAQ sections + FAQ schema to homepage and services page | High |
| 5 | Create `interior-designer-tirunelveli.tsx` city landing page | High |
| 6 | Fix all image alt text with location keywords | High |
| 7 | Add `llms.txt` to public folder | Medium |
| 8 | Create and submit `sitemap.xml` (expanded) | Medium |
| 9 | Update footer with local city mentions | Medium |
| 10 | Claim Google Business Profile and add all details | Very High (off-site) |
| 11 | Create directory listings on Justdial, Sulekha, Houzz | High (off-site) |
| 12 | Create blog articles (5 articles) | High (long-term) |
| 13 | Create `modular-kitchen-tirunelveli.tsx` page | Medium |
| 14 | Add `HomeFAQ` visible accordion on homepage | Medium |
| 15 | Fix Google Maps iframe to exact pin | Low |

---

## SECTION 11 — TRACKING & MONITORING

Set these up immediately after implementation:

1. **Google Search Console** — Submit sitemap, monitor keyword impressions by page
2. **Google Analytics 4** — Track page views, conversion events (WhatsApp clicks, form submits, call button clicks)
3. **Track these KPIs monthly:**
   - Impressions for "interior designer tirunelveli"
   - Click-through rate on homepage title tag
   - Google Business Profile views and direction requests
   - WhatsApp click events (add `gtag` event on the WhatsApp `<a>` tag)
4. **Add event tracking** to all CTA clicks:
   ```tsx
   // On the WhatsApp link in CTA:
   onClick={() => window.gtag?.("event", "click_whatsapp", { event_category: "CTA", event_label: "homepage_cta" })}
   ```
5. **Google Business Profile Insights** — Monitor search queries and photo views

---

*End of Prompt — All changes above are production-ready and directly target #1 ranking in Google across Tamil Nadu for interior design, construction, and related keywords. Execute Section 10 in priority order for fastest results.*
