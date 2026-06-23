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
  image: string;
};

export const services: Service[] = [
  { slug: "modular-kitchen", title: "Modular Kitchen", icon: ChefHat, blurb: "Ergonomic, premium-finish kitchens engineered for daily life.", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=70" },
  { slug: "wardrobe-design", title: "Wardrobe Design", icon: Shirt, blurb: "Tailored wardrobes that maximise space with seamless joinery.", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=70" },
  { slug: "tv-unit", title: "TV Unit Design", icon: Tv, blurb: "Signature media walls — sculpted storage meets statement design.", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=70" },
  { slug: "false-ceiling", title: "False Ceiling", icon: Layers, blurb: "Architectural ceilings with integrated cove and accent lighting.", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=70" },
  { slug: "living-room", title: "Living Room Interiors", icon: Sofa, blurb: "Hospitable living spaces curated around how your family lives.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=70" },
  { slug: "bedroom", title: "Bedroom Interiors", icon: Bed, blurb: "Calming, hotel-grade bedrooms with bespoke storage.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=70" },
  { slug: "office", title: "Office Interiors", icon: Briefcase, blurb: "Productive, brand-forward workspaces delivered on schedule.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=70" },
  { slug: "commercial", title: "Commercial Interiors", icon: Building2, blurb: "Retail, hospitality and clinical interiors built to perform.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=70" },
  { slug: "pvc", title: "PVC Interiors", icon: Box, blurb: "Moisture-proof PVC paneling — fast, clean, and durable.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70" },
  { slug: "wood-works", title: "Wood Works", icon: Hammer, blurb: "Hand-finished carpentry with premium hardware and joinery.", image: "https://images.unsplash.com/photo-1601984077877-9b07e7cd5f3a?auto=format&fit=crop&w=1200&q=70" },
  { slug: "wallpaper", title: "Wallpaper Installation", icon: ImageIcon, blurb: "Imported wallpapers installed seam-perfect by trained crews.", image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=70" },
  { slug: "3d-design", title: "3D Design", icon: Boxes, blurb: "Photo-real 3D visuals so you approve before we build.", image: "https://images.unsplash.com/photo-1545972154-9bb223aac798?auto=format&fit=crop&w=1200&q=70" },
  { slug: "renovation", title: "Home Renovation", icon: Wrench, blurb: "End-to-end renovations — civil to finish — single accountability.", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=70" },
  { slug: "electrical", title: "Electrical Works", icon: Zap, blurb: "Certified electrical layouts engineered for safety and scale.", image: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=1200&q=70" },
  { slug: "plumbing", title: "Plumbing Works", icon: Droplets, blurb: "Concealed, leak-tested plumbing built for decades of use.", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1200&q=70" },
  { slug: "interior-design", title: "Interior Design", icon: Palette, blurb: "Full-service design — mood, material, and meticulous execution.", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=70" },
];

export const portfolio = [
  { title: "Sky Loft Residence", category: "Living Room", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=70" },
  { title: "Maple Modular Kitchen", category: "Modular Kitchen", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=70" },
  { title: "Cove-Lit Master Suite", category: "Bedroom", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=70" },
  { title: "Heritage Office Loft", category: "Office", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=70" },
  { title: "Velvet Lounge Lobby", category: "Commercial", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=70" },
  { title: "Sculpted Media Wall", category: "TV Unit", img: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1400&q=70" },
  { title: "Floating Wardrobe", category: "Wardrobe", img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1400&q=70" },
  { title: "Linear Cove Ceiling", category: "False Ceiling", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=70" },
  { title: "Walnut Dining Pavilion", category: "Living Room", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=70" },
];

export const testimonials = [
  { name: "Priya R.", role: "Homeowner, Tirunelveli", quote: "Sky Nest delivered our 3BHK in record time — finishes are flawless and the team was a pleasure to work with." },
  { name: "Karthik S.", role: "Clinic Owner", quote: "From 3D visualisation to handover, every milestone hit. Our clinic feels premium and patients notice." },
  { name: "Lakshmi N.", role: "Villa Project", quote: "Honest pricing, master craftsmanship and zero compromise on quality. Truly worthy of 'Build with Trust'." },
];