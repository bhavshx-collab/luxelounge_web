"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <img
          src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1920&q=85"
          alt="The Luxe Lounge luxury salon interior"
          className="w-full h-[120%] object-cover object-center"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.55)] via-[rgba(0,0,0,0.4)] to-[rgba(11,11,11,0.98)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.4)] via-transparent to-[rgba(0,0,0,0.3)]" />
        {/* Gold dust particles effect */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(212,175,55,0.1) 0%, transparent 50%)`,
          }}
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ y: textY, opacity }}
      >
        {/* Opening Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="opening-badge inline-flex items-center gap-2 border border-[rgba(212,175,55,0.6)] px-5 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="font-inter text-[0.65rem] tracking-[0.35em] uppercase text-[#d4af37] font-medium">
              Coming Soon — Grand Opening
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="font-cormorant text-[1rem] tracking-[0.5em] text-[#d4af37] uppercase mb-3 font-light italic">
            The Luxe Lounge
          </p>
          <h1 className="font-playfair text-[clamp(2.4rem,8vw,7.5rem)] font-bold text-[#f8f5f0] leading-[0.95] tracking-[-0.02em] mb-4">
            Luxury
            <br />
            <span className="italic text-gold-gradient">Redefined.</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-inter text-[0.95rem] md:text-[1rem] text-[rgba(248,245,240,0.65)] leading-relaxed max-w-xl mx-auto mt-4 md:mt-6 mb-8 md:mb-10 tracking-wide"
        >
          Premium Hair Studio bringing world-class luxury hair care and
          transformative styling to Barmer, Rajasthan.
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="font-inter text-[0.65rem] md:text-[0.7rem] tracking-[0.3em] uppercase text-[rgba(212,175,55,0.7)] mb-8 md:mb-10"
        >
          Panna Batti Circle · Rai Colony · Barmer
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-sm sm:max-w-none mx-auto w-full px-4 sm:px-0"
        >
          <motion.a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold rounded-none w-full sm:w-auto text-center"
          >
            <span>Book Appointment</span>
          </motion.a>

          <motion.a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-outline-gold w-full sm:w-auto text-center"
          >
            <span>Explore Services</span>
          </motion.a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="grid grid-cols-3 md:flex items-center justify-center gap-4 md:gap-12 mt-12 md:mt-16 pt-8 border-t border-[rgba(212,175,55,0.1)] max-w-lg mx-auto"
        >
          {[
            { num: "12+", label: "Years Expertise" },
            { num: "100+", label: "Happy Clients" },
            { num: "4.9★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-playfair text-xl md:text-2xl text-[#d4af37] font-bold">
                {stat.num}
              </div>
              <div className="font-inter text-[0.58rem] md:text-[0.62rem] tracking-[0.15em] md:tracking-[0.2em] uppercase text-[rgba(248,245,240,0.45)] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-[rgba(212,175,55,0.6)]" size={20} />
        </motion.div>
        <span className="font-inter text-[0.58rem] tracking-[0.35em] uppercase text-[rgba(212,175,55,0.5)]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
