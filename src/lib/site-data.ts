import {
  ChefHat,
  Shirt,
  Tv,
  Layers,
  Sofa,
  Bed,
  Briefcase,
  Building2,
  Box,
  Hammer,
  Image as ImageIcon,
  Boxes,
  Wrench,
  Zap,
  Droplets,
  Palette,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  blurb: string;
  description?: string;
  image: string;
};

export const services: Service[] = [
  { slug: "modular-kitchen", title: "Modular Kitchen", icon: ChefHat, blurb: "Tailored modular kitchens with premium storage, clean detailing and durable finishes for modern homes.", image: "/works/modular-kitchen.jpg" },
  { slug: "wardrobe-design", title: "Wardrobe Design", icon: Shirt, blurb: "Bespoke wardrobes that maximise space, reduce clutter and bring a luxury hotel feel to daily living.", image: "/works/wardrobe-design.jpg" },
  { slug: "tv-unit", title: "TV Unit Design", icon: Tv, blurb: "Statement media walls and feature units that blend utility, acoustics and visual impact seamlessly.", image: "/works/interior-4.jpg" },
  { slug: "false-ceiling", title: "False Ceiling", icon: Layers, blurb: "Architectural ceilings with cove lighting and subtle texture to elevate the look of any room.", image: "/works/interior-5.jpg" },
  { slug: "living-room", title: "Living Room Interiors", icon: Sofa, blurb: "Comfort-led living spaces designed around family routines, entertaining and long-term daily use.", image: "/works/living-room.jpg" },
  { slug: "bedroom", title: "Bedroom Interiors", icon: Bed, blurb: "Calm, premium bedrooms with layered lighting, concealed storage and refined material palettes.", image: "/works/complete-home-4.jpg" },
  { slug: "office", title: "Office Interiors", icon: Briefcase, blurb: "Professional office interiors that balance productivity, brand identity and durable craftsmanship.", image: "/works/aj-disti-main.jpg" },
  { slug: "commercial", title: "Commercial Interiors", icon: Building2, blurb: "Retail, hospitality and business spaces finished to impress customers and support daily operations.", image: "/works/aj-disti-2.jpg" },
  { slug: "pvc", title: "PVC Interiors", icon: Box, blurb: "Moisture-resistant PVC wall and ceiling solutions for clean, long-lasting interiors with low maintenance.", image: "/works/interior-secondary.jpg" },
  { slug: "wood-works", title: "Wood Works", icon: Hammer, blurb: "Precision carpentry, joinery and custom millwork with careful detailing and premium finishing.", image: "/works/well-renovation-main.jpg" },
  { slug: "wallpaper", title: "Wallpaper Installation", icon: ImageIcon, blurb: "Expert wallpaper application for feature walls and complete spaces with a smooth, flawless finish.", image: "/works/well-renovation-2.jpg" },
  { slug: "3d-design", title: "3D Design", icon: Boxes, blurb: "Photo-realistic 3D visualisation so you can review the design, materials and layout before execution.", image: "/works/3d-buddha-wall-mural.jpeg" },
  { slug: "renovation", title: "Home Renovation", icon: Wrench, blurb: "End-to-end renovation support from civil work to final finish, managed with one accountable team.", image: "/works/well-renovation-4.jpg" },
  { slug: "electrical", title: "Electrical Works", icon: Zap, blurb: "Safe, efficient electrical planning and installation for homes and commercial interiors.", image: "/works/complete-home-3.jpg" },
  { slug: "plumbing", title: "Plumbing Works", icon: Droplets, blurb: "Reliable concealed plumbing solutions designed for longevity, hygiene and leak-free performance.", image: "/works/complete-home-secondary.jpg" },
  { slug: "interior-design", title: "Interior Design", icon: Palette, blurb: "Full-service interior design that blends function, materials and atmosphere into a complete lifestyle experience.", image: "/works/interior-design.jpg" },
];

export const portfolio = [
  { title: "Premium Balcony Design", category: "Balcony Design", location: "Tirunelveli", img: "/works/premium-balcony-design.jpg" },
  { title: "Modern Duplex Residence", category: "Duplex Residence", location: "Tirunelveli", img: "/works/modern-duplex-residence.png" },
  { title: "Muthoot Fincorp Renovation", category: "Commercial Interior", location: "Tirunelveli", img: "/works/muthoot-fincorp.jpeg" },
  { title: "Complete Home Transformation", category: "Complete Home", location: "Tirunelveli", img: "/works/complete-home-main.jpg" },
  { title: "Premium Interior Styling", category: "Interior Design", location: "Palayamkottai", img: "/works/interior-main.jpg" },
  { title: "Corporate Office Fit-Out", category: "Office Interiors", location: "Tirunelveli", img: "/works/aj-disti-main.jpg" },
  { title: "Well Renovation Project", category: "Home Renovation", location: "Tirunelveli", img: "/works/well-renovation-main.jpg" },
  { title: "Luxury Living Room Finish", category: "Living Room Interiors", location: "Palayamkottai", img: "/works/living-room.jpg" },
  { title: "Bespoke Wardrobe Installation", category: "Wardrobe Design", location: "Nagercoil", img: "/works/wardrobe-design.jpg" },
  { title: "Statement Ceiling Design", category: "False Ceiling", location: "Tirunelveli", img: "/works/interior-5.jpg" },
  { title: "Decorative Stone Finish", category: "Special Finish", location: "Tenkasi", img: "/works/3d-buddha-wall-mural.jpeg" },
];

export const testimonials = [
  { name: "Priya R.", role: "Homeowner, Tirunelveli", quote: "Sky Nest delivered our 3BHK in record time — finishes are flawless and the team was a pleasure to work with." },
  { name: "Karthik S.", role: "Clinic Owner, Palayamkottai", quote: "From 3D visualisation to handover, every milestone hit. Our clinic feels premium and patients notice." },
  { name: "Lakshmi N.", role: "Villa Project, Nagercoil", quote: "Honest pricing, master craftsmanship and zero compromise on quality. Truly worthy of 'Build with Trust'." },
];