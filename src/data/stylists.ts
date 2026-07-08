export interface Stylist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  instagram?: string;
}

export const stylists: Stylist[] = [
  {
    id: "aria",
    name: "Aria Sharma",
    role: "Creative Director & Senior Stylist",
    specialty: "Balayage, Bridal Styling, Color Artistry",
    experience: "12+ Years",
    bio: "Trained in Mumbai and internationally certified, Aria brings a cinematic eye for color and an obsession with precision. Her work has been featured in regional fashion shoots.",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80",
    instagram: "@aria.styles",
  },
  {
    id: "zara",
    name: "Zara Khan",
    role: "Hair Treatment Specialist",
    specialty: "Keratin, Hair Botox, Scalp Therapy",
    experience: "8+ Years",
    bio: "Zara's gentle touch and deep knowledge of hair science make her the go-to specialist for restorative treatments. Clients call her 'the hair whisperer'.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    instagram: "@zara.trichology",
  },
  {
    id: "dev",
    name: "Dev Rathore",
    role: "Men's Grooming Expert",
    specialty: "Precision Cuts, Beard Design, Scalp Care",
    experience: "6+ Years",
    bio: "Dev has mastered the art of modern masculine grooming — from classic cuts to contemporary fades. His attention to detail is unmatched.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    instagram: "@dev.grooms",
  },
];
