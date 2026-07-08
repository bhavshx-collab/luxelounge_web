export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Do I need to book an appointment in advance?",
    answer:
      "While we welcome walk-ins, we strongly recommend booking an appointment to ensure your preferred stylist and time slot are available, especially for treatments and bridal services. You can book via our website, WhatsApp, or by calling us directly.",
  },
  {
    id: "2",
    question: "What hair care brands do you use?",
    answer:
      "We exclusively use internationally certified, salon-grade brands for all treatments — including L'Oréal Professionnel, Wella, Kerastase, Schwarzkopf, and Olaplex. We never compromise on product quality.",
  },
  {
    id: "3",
    question: "How long does a keratin treatment last?",
    answer:
      "Our keratin treatments typically last 3–6 months depending on your hair type and how you maintain it. We provide a complete aftercare guide and recommend sulphate-free shampoos to maximize longevity.",
  },
  {
    id: "4",
    question: "Do you offer bridal packages?",
    answer:
      "Absolutely! We offer comprehensive bridal packages that include pre-bridal consultations, hair trials, wedding day styling, and full bridal party services. Contact us to schedule your bridal consultation.",
  },
  {
    id: "5",
    question: "What are your hygiene protocols?",
    answer:
      "Hygiene is non-negotiable at The Luxe Lounge. All tools are sterilized between clients, capes and towels are freshly laundered, and our premises are deep-cleaned daily. You can relax knowing you're in a completely safe environment.",
  },
  {
    id: "6",
    question: "Can I consult before committing to a color treatment?",
    answer:
      "Yes! We offer a complimentary 30-minute consultation with our color specialists before any color service. We'll assess your hair health, discuss your desired look, and create a customized treatment plan.",
  },
  {
    id: "7",
    question: "What is your cancellation policy?",
    answer:
      "We understand plans change. Please notify us at least 4 hours before your appointment if you need to cancel or reschedule. For bridal bookings, we require 48 hours notice.",
  },
  {
    id: "8",
    question: "Do you offer home services?",
    answer:
      "Currently we focus on delivering the full in-salon luxury experience. However, for special occasions and bridal services, we may arrange on-location styling. Contact us to discuss your requirements.",
  },
];
