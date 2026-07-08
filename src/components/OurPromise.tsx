"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const promises = [
  {
    icon: "✔",
    title: "Personalized Service",
    desc: "Every client is unique. Every service is tailored to your specific hair type, lifestyle, and personal vision — no two visits are the same.",
    gradient: "from-[rgba(212,175,55,0.08)] to-transparent",
  },
  {
    icon: "◈",
    title: "Premium Quality",
    desc: "From the products we use to the techniques we apply, every choice is made with excellence in mind. Only the finest, always.",
    gradient: "from-[rgba(200,169,106,0.08)] to-transparent",
  },
  {
    icon: "⊹",
    title: "Attention to Detail",
    desc: "We believe perfection lives in the details — the precise cut, the exact tone, the finishing touch. We never rush, we never compromise.",
    gradient: "from-[rgba(212,175,55,0.08)] to-transparent",
  },
  {
    icon: "✦",
    title: "Luxury Experience",
    desc: "A salon visit at The Luxe Lounge is not just an appointment — it is a curated ritual. An escape. A moment entirely your own.",
    gradient: "from-[rgba(200,169,106,0.08)] to-transparent",
  },
];

export default function OurPromise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="our-promise" className="py-28 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label justify-center mb-5"
          >
            Our Promise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-[clamp(2.2rem,5vw,3.8rem)] font-bold text-[#f8f5f0] leading-tight"
          >
            What we{" "}
            <span className="italic text-gold-gradient">commit to you.</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-px bg-gradient-to-r from-[#d4af37] to-transparent mx-auto mt-5"
            style={{ transformOrigin: "center" }}
          />
        </div>

        {/* Promise cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promises.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative border border-[rgba(212,175,55,0.12)] bg-[rgba(255,255,255,0.015)] overflow-hidden transition-all duration-500 hover:border-[rgba(212,175,55,0.4)] hover:-translate-y-1"
            >
              {/* Top gradient strip */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${p.gradient}`} />

              <div className="p-8 flex gap-6 items-start">
                {/* Icon circle */}
                <div className="flex-shrink-0 w-14 h-14 border border-[rgba(212,175,55,0.3)] flex items-center justify-center group-hover:border-[#d4af37] group-hover:bg-[rgba(212,175,55,0.06)] transition-all duration-400">
                  <span className="text-[1.5rem] text-[#d4af37]">{p.icon}</span>
                </div>

                <div className="flex-1">
                  <h3 className="font-playfair text-[1.25rem] font-bold text-[#f8f5f0] mb-2">
                    {p.title}
                  </h3>
                  <div className="w-8 h-px bg-[rgba(212,175,55,0.35)] mb-3 group-hover:w-16 group-hover:bg-[#d4af37] transition-all duration-500" />
                  <p className="font-inter text-[0.85rem] text-[rgba(248,245,240,0.55)] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 10% 50%, rgba(212,175,55,0.04) 0%, transparent 60%)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="gold-line mb-8 max-w-xs mx-auto" />
          <blockquote className="font-cormorant text-[1.7rem] md:text-[2.1rem] italic text-[rgba(248,245,240,0.7)] leading-snug max-w-2xl mx-auto">
            "From the very first visit,{" "}
            <span className="text-[#d4af37] not-italic font-semibold">
              you will know the difference.
            </span>
            "
          </blockquote>
          <p className="font-inter text-[0.68rem] tracking-[0.3em] uppercase text-[rgba(212,175,55,0.5)] mt-5">
            — The Luxe Lounge
          </p>
        </motion.div>
      </div>
    </section>
  );
}
