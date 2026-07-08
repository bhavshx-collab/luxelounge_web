"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FoundersVision() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="vision" className="py-28 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 lg:order-1"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=85"
                alt="The Luxe Lounge — A vision for luxury"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,17,17,0.55)] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(17,17,17,0.2)] via-transparent to-transparent" />
            </div>

            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute bottom-6 right-6 glass bg-[rgba(17,17,17,0.9)] border border-[rgba(212,175,55,0.3)] px-5 py-4"
            >
              <p className="font-inter text-[0.6rem] tracking-[0.3em] uppercase text-[#d4af37] mb-1">
                Opening In
              </p>
              <p className="font-playfair text-xl font-bold text-[#f8f5f0]">
                Barmer, Rajasthan
              </p>
            </motion.div>

            {/* Gold frame accents */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[rgba(212,175,55,0.4)]" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[rgba(212,175,55,0.4)]" />
          </motion.div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label mb-6"
            >
              Founder's Vision
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-playfair text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold text-[#f8f5f0] leading-tight mb-6"
            >
              Our{" "}
              <span className="italic text-gold-gradient">Vision</span>
            </motion.h2>

            {/* Gold line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="w-16 h-px bg-gradient-to-r from-[#d4af37] to-transparent mb-8"
              style={{ transformOrigin: "left" }}
            />

            {/* Vision text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-5"
            >
              <p className="font-cormorant text-[1.4rem] italic text-[rgba(248,245,240,0.8)] leading-relaxed">
                At The Luxe Lounge, we believe every client deserves a
                luxurious and personalized salon experience.
              </p>
              <p className="font-inter text-[0.9rem] text-[rgba(248,245,240,0.55)] leading-relaxed">
                Our mission is to bring premium hair care, modern styling, and
                exceptional service to Barmer — a city that has always deserved
                more. We're building more than a salon; we're creating a
                destination where clients feel valued, cared for, and
                transformed.
              </p>
              <p className="font-inter text-[0.9rem] text-[rgba(248,245,240,0.55)] leading-relaxed">
                Every detail — from the products we've sourced to the
                environment we've designed — reflects our unwavering commitment
                to excellence. We look forward to welcoming you soon.
              </p>
            </motion.div>

            {/* Values row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-[rgba(212,175,55,0.1)]"
            >
              {[
                { value: "Premium", label: "Products" },
                { value: "Expert", label: "Techniques" },
                { value: "Luxury", label: "Experience" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="font-playfair text-[1.3rem] font-bold text-[#d4af37] mb-1">
                    {item.value}
                  </div>
                  <div className="font-inter text-[0.62rem] tracking-[0.2em] uppercase text-[rgba(248,245,240,0.4)]">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-10"
            >
              <a
                href="#grand-opening"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#grand-opening")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-gold inline-flex"
              >
                <span>Be Among The First</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
