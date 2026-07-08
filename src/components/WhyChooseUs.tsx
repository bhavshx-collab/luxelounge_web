"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const pillars = [
  {
    icon: "◈",
    title: "Luxury Experience",
    desc: "Every visit is curated to feel like a private, five-star escape — not just a salon appointment.",
  },
  {
    icon: "⊹",
    title: "Certified Professionals",
    desc: "Our stylists hold national and international certifications and train continuously to stay ahead.",
  },
  {
    icon: "✦",
    title: "Premium Products Only",
    desc: "We use exclusively professional-grade international brands — L'Oréal, Wella, Kerastase, Olaplex.",
  },
  {
    icon: "◉",
    title: "Personal Consultation",
    desc: "Every client receives a personalized assessment before any treatment begins. No guessing, ever.",
  },
  {
    icon: "◇",
    title: "Absolute Hygiene",
    desc: "Hospital-grade sterilization, fresh linens per client, and immaculate premises — non-negotiable.",
  },
  {
    icon: "✧",
    title: "Relaxing Ambience",
    desc: "Designed to soothe the senses — from curated music to aromatherapy and premium hospitality.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 overflow-hidden bg-[#0d0d0d]">
      {/* Background gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, #d4af37 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Why The Luxe Lounge"
          title="Not just a salon."
          titleHighlight="An experience."
          description="We've redefined what a salon visit means in Barmer. Here's why our clients never go anywhere else."
        />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={item}
              className="luxury-card bg-[rgba(255,255,255,0.02)] p-8 group cursor-default"
            >
              <div className="text-3xl text-[#d4af37] mb-5 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="font-playfair text-[1.15rem] font-semibold text-[#f8f5f0] mb-3 tracking-tight">
                {pillar.title}
              </h3>
              <div className="w-8 h-px bg-[rgba(212,175,55,0.4)] mb-4 group-hover:w-16 transition-all duration-500" />
              <p className="font-inter text-[0.85rem] text-[rgba(248,245,240,0.55)] leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <blockquote className="font-cormorant text-[1.8rem] md:text-[2.2rem] italic text-[rgba(248,245,240,0.75)] leading-snug max-w-3xl mx-auto">
            "We believe beauty is not a luxury —{" "}
            <span className="text-[#d4af37] not-italic font-semibold">
              it's your right.
            </span>
            "
          </blockquote>
          <p className="font-inter text-[0.7rem] tracking-[0.3em] uppercase text-[rgba(212,175,55,0.6)] mt-4">
            — The Luxe Lounge
          </p>
        </motion.div>
      </div>
    </section>
  );
}
