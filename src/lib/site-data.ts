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
  { slug: "modular-kitchen", title: "Modular Kitchen", icon: ChefHat, blurb: "Premium modular kitchens designed and installed in Tirunelveli & Tamil Nadu — ergonomic, durable finishes engineered for daily life.", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=70" },
  { slug: "wardrobe-design", title: "Wardrobe Design", icon: Shirt, blurb: "Tailored wardrobes in Tirunelveli that maximise space with seamless joinery and premium finishes.", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=70" },
  { slug: "tv-unit", title: "TV Unit Design", icon: Tv, blurb: "Signature media walls in Tirunelveli — sculpted storage meets statement design for modern homes.", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=70" },
  { slug: "false-ceiling", title: "False Ceiling", icon: Layers, blurb: "False ceiling design & installation in Tirunelveli with integrated cove lighting — architectural elegance for every budget.", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=70" },
  { slug: "living-room", title: "Living Room Interiors", icon: Sofa, blurb: "Hospitable living spaces in Tirunelveli & Tamil Nadu curated around how your family lives.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=70" },
  { slug: "bedroom", title: "Bedroom Interiors", icon: Bed, blurb: "Calming, hotel-grade bedrooms in Tirunelveli with bespoke storage and premium finishes.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=70" },
  { slug: "office", title: "Office Interiors", icon: Briefcase, blurb: "Productive, brand-forward office interiors in Tirunelveli & Tamil Nadu delivered on schedule.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=70" },
  { slug: "commercial", title: "Commercial Interiors", icon: Building2, blurb: "Retail, hospitality and clinical interiors in Tamil Nadu built to perform and impress.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=70" },
  { slug: "pvc", title: "PVC Interiors", icon: Box, blurb: "Moisture-proof PVC paneling in Tirunelveli — fast, clean, and built to last decades.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70" },
  { slug: "wood-works", title: "Wood Works", icon: Hammer, blurb: "Hand-finished carpentry pan-India with premium hardware and precision joinery.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=70" },
  { slug: "wallpaper", title: "Wallpaper Installation", icon: ImageIcon, blurb: "Imported wallpapers installed seam-perfect in Tirunelveli by trained, certified crews.", image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=70" },
  { slug: "3d-design", title: "3D Design", icon: Boxes, blurb: "Photo-realistic 3D interior visualisation in Tirunelveli — approve your space before we build.", image: "https://images.unsplash.com/photo-1545972154-9bb223aac798?auto=format&fit=crop&w=1200&q=70" },
  { slug: "renovation", title: "Home Renovation", icon: Wrench, blurb: "End-to-end home renovation in Tirunelveli — civil to finish — single accountability, on-time delivery.", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=70" },
  { slug: "electrical", title: "Electrical Works", icon: Zap, blurb: "Certified electrical layouts in Tirunelveli engineered for safety, compliance and durability.", image: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=1200&q=70" },
  { slug: "plumbing", title: "Plumbing Works", icon: Droplets, blurb: "Concealed, leak-tested plumbing in Tirunelveli built for decades of reliable service.", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1200&q=70" },
  { slug: "interior-design", title: "Interior Design", icon: Palette, blurb: "Full-service interior design in Tirunelveli & Tamil Nadu — mood, material, and meticulous execution.", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=70" },
];

export const portfolio = [
  { title: "Sky Loft Residence", category: "Living Room", location: "Tirunelveli", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=70" },
  { title: "Maple Modular Kitchen", category: "Modular Kitchen", location: "Palayamkottai", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=70" },
  { title: "Cove-Lit Master Suite", category: "Bedroom", location: "Tirunelveli", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=70" },
  { title: "Heritage Office Loft", category: "Office", location: "Tirunelveli", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=70" },
  { title: "Velvet Lounge Lobby", category: "Commercial", location: "Nagercoil", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=70" },
  { title: "Sculpted Media Wall", category: "TV Unit", location: "Tirunelveli", img: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1400&q=70" },
  { title: "Floating Wardrobe", category: "Wardrobe", location: "Palayamkottai", img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1400&q=70" },
  { title: "Linear Cove Ceiling", category: "False Ceiling", location: "Tirunelveli", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=70" },
  { title: "Walnut Dining Pavilion", category: "Living Room", location: "Tenkasi", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=70" },
];

export const testimonials = [
  { name: "Priya R.", role: "Homeowner, Tirunelveli", quote: "Sky Nest delivered our 3BHK in record time — finishes are flawless and the team was a pleasure to work with." },
  { name: "Karthik S.", role: "Clinic Owner, Palayamkottai", quote: "From 3D visualisation to handover, every milestone hit. Our clinic feels premium and patients notice." },
  { name: "Lakshmi N.", role: "Villa Project, Nagercoil", quote: "Honest pricing, master craftsmanship and zero compromise on quality. Truly worthy of 'Build with Trust'." },
];