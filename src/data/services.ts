export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  category: "hair" | "grooming" | "treatment" | "styling";
  icon: string;
  featured?: boolean;
  image?: string;
}

export const services: Service[] = [
  {
    id: "haircut",
    name: "Precision Hair Cut",
    description:
      "Expert cuts tailored to your bone structure and lifestyle. Every snip is intentional, every line is perfect.",
    duration: "45–60 min",
    category: "hair",
    icon: "✂️",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  },
  {
    id: "hair-styling",
    name: "Luxury Hair Styling",
    description:
      "From blow-outs to editorial up-dos, we craft looks that turn heads and build confidence.",
    duration: "60–90 min",
    category: "styling",
    icon: "💇",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
  },
  {
    id: "hair-spa",
    name: "Signature Hair Spa",
    description:
      "Deep nourishing spa treatments using premium serums and oils. Your hair's weekend retreat.",
    duration: "90 min",
    category: "treatment",
    icon: "🌿",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
  },
  {
    id: "hair-color",
    name: "Artisan Hair Color",
    description:
      "Balayage, ombre, global color — applied with precision using premium international color brands.",
    duration: "2–4 hrs",
    category: "hair",
    icon: "🎨",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
  },
  {
    id: "smoothening",
    name: "Hair Smoothening",
    description:
      "Achieve glass-smooth, frizz-free hair with our advanced smoothening treatment protocols.",
    duration: "3–4 hrs",
    category: "treatment",
    icon: "✨",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
  },
  {
    id: "keratin",
    name: "Keratin Treatment",
    description:
      "Restore strength, shine, and manageability with professional-grade keratin therapy.",
    duration: "3–5 hrs",
    category: "treatment",
    icon: "💎",
    image:
      "https://images.unsplash.com/photo-1620733723572-11c53fc809a9?w=800&q=80",
  },
  {
    id: "hair-botox",
    name: "Hair Botox",
    description:
      "The ultimate anti-aging hair treatment. Revive lifeless, damaged hair back to its prime.",
    duration: "2–3 hrs",
    category: "treatment",
    icon: "⚗️",
    image:
      "https://images.unsplash.com/photo-1522337913753-5e49d30d7540?w=800&q=80",
  },
  {
    id: "bridal",
    name: "Bridal Styling",
    description:
      "Your most important look deserves the most meticulous attention. A truly unforgettable bridal experience.",
    duration: "Full Day",
    category: "styling",
    icon: "👰",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    id: "mens-grooming",
    name: "Men's Grooming",
    description:
      "Cuts, beard styling, scalp treatments — premium grooming for the modern man.",
    duration: "45–60 min",
    category: "grooming",
    icon: "🧔",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
  },
  {
    id: "womens-grooming",
    name: "Women's Grooming",
    description:
      "Comprehensive grooming packages designed to make you feel effortlessly polished every day.",
    duration: "60–90 min",
    category: "grooming",
    icon: "💅",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
  },
  {
    id: "scalp-treatment",
    name: "Scalp Therapy",
    description:
      "Advanced scalp analysis and targeted treatments for healthy hair from the root.",
    duration: "60 min",
    category: "treatment",
    icon: "🔬",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
  },
  {
    id: "consultation",
    name: "Expert Consultation",
    description:
      "One-on-one session with our senior stylist to map your perfect hair journey.",
    duration: "30 min",
    category: "hair",
    icon: "🗣️",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
  },
];
