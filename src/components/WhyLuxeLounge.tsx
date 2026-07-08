"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "✦",
    title: "Luxury Salon Experience",
    desc: "Step into an environment crafted for indulgence — every detail designed to make you feel exceptional from the moment you arrive.",
  },
  {
    icon: "◈",
    title: "Certified Premium Products",
    desc: "We use exclusively professional-grade international brands — L'Oréal Professionnel, Wella, Kerastase, and Olaplex. Never compromise.",
  },
  {
    icon: "◉",
    title: "Modern Interior & Ambience",
    desc: "A meticulously designed space with warm gold lighting, marble surfaces, and a mood that feels like a private retreat.",
  },
  {
    icon: "⊹",
    title: "Personalized Hair Consultation",
    desc: "Every client receives a one-on-one consultation before any service begins. No guesswork — only tailored precision.",
  },
  {
    icon: "⋆",
    title: "Professional Hair Styling",
    desc: "Nationally certified stylists who bring technical mastery and creative vision to every cut, color, and treatment.",
  },
  {
    icon: "◇",
    title: "Hygiene & Safety Standards",
    desc: "Hospital-grade sterilization, single-use tools where required, and immaculate premises. Your safety is non-negotiable.",
  },
  {
    icon: "✧",
    title: "Trend-Focused Styling",
    desc: "Our team constantly evolves with global hair trends — bringing the very latest techniques from Mumbai, Delhi, and beyond to Barmer.",
  },
  {
    icon: "◌",
    title: "Relaxing Environment",
    desc: "Curated music, premium hospitality, and a calming atmosphere that makes every visit feel like a well-deserved escape.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as any },
  },
};

export default function WhyLuxeLounge() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="relative py-28 overflow-hidden bg-[#0d0d0d]">
      {/* Ambient gold glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] pointer-events-none opacity-[0.06]"
        style={{
          background:
            "radial-gradient(ellipse at center, #d4af37 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label justify-center mb-5"
          >
            Why Choose The Luxe Lounge
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-[clamp(2.2rem,5vw,3.8rem)] font-bold text-[#f8f5f0] leading-tight mb-4"
          >
            Built for{" "}
            <span className="italic text-gold-gradient">excellence</span>,
            <br className="hidden md:block" /> from day one.
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-px bg-gradient-to-r from-[#d4af37] to-transparent mx-auto mt-5 mb-5"
            style={{ transformOrigin: "center" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-inter text-[0.95rem] text-[rgba(248,245,240,0.55)] max-w-xl mx-auto leading-relaxed"
          >
            Experience luxury, elegance, and exceptional care from day one.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group relative overflow-hidden"
            >
              {/* Glassmorphism card */}
              <div className="relative h-full border border-[rgba(212,175,55,0.12)] bg-[rgba(255,255,255,0.02)] backdrop-blur-sm p-7 transition-all duration-500 hover:border-[rgba(212,175,55,0.45)] hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(0,0,0,0.5),0_0_0_1px_rgba(212,175,55,0.08)]">
                {/* Gold glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 70%)" }}
                />

                {/* Icon */}
                <div className="text-[2rem] text-[#d4af37] mb-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-400">
                  {f.icon}
                </div>

                {/* Title */}
                <h3 className="font-playfair text-[1.05rem] font-semibold text-[#f8f5f0] mb-3 leading-snug">
                  {f.title}
                </h3>

                {/* Animated gold underline */}
                <div className="w-6 h-px bg-[rgba(212,175,55,0.4)] mb-4 group-hover:w-14 group-hover:bg-[#d4af37] transition-all duration-500" />

                {/* Description */}
                <p className="font-inter text-[0.82rem] text-[rgba(248,245,240,0.5)] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
