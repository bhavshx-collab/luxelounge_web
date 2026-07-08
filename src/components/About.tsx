"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const values = [
    { title: "Excellence", desc: "We accept nothing less than extraordinary in every service we deliver." },
    { title: "Authenticity", desc: "Real expertise, real results — no shortcuts, no compromises." },
    { title: "Warmth", desc: "Every client is welcomed like family. Respect and care are our foundation." },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-28 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <SectionHeader
              label="Our Story"
              title="Born from a"
              titleHighlight="passion for excellence."
              align="left"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 mb-10"
            >
              <p className="font-cormorant text-[1.25rem] md:text-[1.4rem] italic text-[rgba(248,245,240,0.8)] leading-relaxed">
                Barmer has always deserved more. More sophistication, more craft,
                more luxury — and The Luxe Lounge is here to deliver it.
              </p>
              <p className="font-inter text-[0.875rem] md:text-[0.9rem] text-[rgba(248,245,240,0.55)] leading-relaxed">
                We founded The Luxe Lounge with a singular vision: to create a
                destination salon experience that rivals the finest studios in
                Mumbai, Delhi, and beyond. Not just a place to get your hair
                done — but a ritual. An escape. A transformation.
              </p>
              <p className="font-inter text-[0.875rem] md:text-[0.9rem] text-[rgba(248,245,240,0.55)] leading-relaxed">
                Located in the heart of Barmer, every element of our studio has
                been intentionally designed — from the lighting to the products
                to the music — to create an environment where you feel
                extraordinary from the moment you walk in.
              </p>
            </motion.div>

            {/* Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            >
              <div className="border border-[rgba(212,175,55,0.15)] p-5 group hover:border-[rgba(212,175,55,0.4)] transition-colors duration-400">
                <p className="font-inter text-[0.62rem] tracking-[0.25em] uppercase text-[#d4af37] mb-2">Mission</p>
                <p className="font-inter text-[0.82rem] text-[rgba(248,245,240,0.6)] leading-relaxed">
                  To make world-class hair care accessible to every client in Barmer and beyond.
                </p>
              </div>
              <div className="border border-[rgba(212,175,55,0.15)] p-5 group hover:border-[rgba(212,175,55,0.4)] transition-colors duration-400">
                <p className="font-inter text-[0.62rem] tracking-[0.25em] uppercase text-[#d4af37] mb-2">Vision</p>
                <p className="font-inter text-[0.82rem] text-[rgba(248,245,240,0.6)] leading-relaxed">
                  To be Rajasthan's most iconic luxury hair studio — a landmark of craft and culture.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="space-y-4"
            >
              {values.map((v, i) => (
                <div key={v.title} className="flex items-start gap-4">
                  <div className="mt-1 w-4 h-px bg-[#d4af37] flex-shrink-0 mt-2" />
                  <div>
                    <span className="font-playfair text-[0.95rem] md:text-[1rem] text-[#f8f5f0] font-semibold">{v.title} — </span>
                    <span className="font-inter text-[0.8rem] md:text-[0.85rem] text-[rgba(248,245,240,0.55)]">{v.desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-none overflow-hidden img-zoom-container">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=85"
                alt="The Luxe Lounge ambience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,17,17,0.6)] via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-4 left-4 md:-bottom-6 md:-left-6 glass p-4 md:p-6 bg-[rgba(17,17,17,0.9)]"
            >
              <div className="font-playfair text-3xl md:text-4xl font-bold text-[#d4af37]">4.9</div>
              <div className="stars text-xs md:text-sm mt-1">★★★★★</div>
              <div className="font-inter text-[0.65rem] md:text-[0.7rem] tracking-[0.2em] uppercase text-[rgba(248,245,240,0.5)] mt-2">
                Client Rating
              </div>
            </motion.div>

            {/* Gold border accent */}
            <div className="absolute top-0 right-0 sm:-top-3 sm:-right-3 w-16 h-16 sm:w-24 sm:h-24 border-t border-r border-[rgba(212,175,55,0.4)]" />
            <div className="absolute bottom-0 left-0 sm:-bottom-3 sm:-left-3 w-16 h-16 sm:w-24 sm:h-24 border-b border-l border-[rgba(212,175,55,0.4)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
