"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Bell } from "lucide-react";

function InstaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function GrandOpening() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [notified, setNotified] = useState(false);
  const [email, setEmail] = useState("");

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setNotified(true);
    }
  };

  return (
    <section
      id="grand-opening"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Layered gold radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.09) 0%, transparent 55%), radial-gradient(ellipse at 50% 100%, rgba(200,169,106,0.05) 0%, transparent 50%)",
        }}
      />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(212,175,55,1) 0px, rgba(212,175,55,1) 1px, transparent 1px, transparent 100px), repeating-linear-gradient(90deg, rgba(212,175,55,1) 0px, rgba(212,175,55,1) 1px, transparent 1px, transparent 100px)",
        }}
      />

      <div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center"
      >
        {/* Crown icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center mb-8"
        >
          <div className="w-20 h-20 border border-[rgba(212,175,55,0.4)] flex items-center justify-center relative">
            <span className="text-4xl">✨</span>
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-[#d4af37]" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-[#d4af37]" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-[#d4af37]" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-[#d4af37]" />
          </div>
        </motion.div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="section-label justify-center mb-6"
        >
          Opening Soon
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-playfair text-[clamp(2.8rem,7vw,6rem)] font-bold text-[#f8f5f0] leading-[0.95] tracking-tight mb-6"
        >
          Grand Opening{" "}
          <span className="italic text-gold-gradient">Soon.</span>
        </motion.h2>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8"
          style={{ transformOrigin: "center" }}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="font-cormorant text-[1.4rem] italic text-[rgba(248,245,240,0.7)] leading-relaxed mb-4 max-w-2xl mx-auto"
        >
          The Luxe Lounge is preparing to bring a premium luxury salon
          experience to Barmer.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="font-inter text-[0.9rem] text-[rgba(248,245,240,0.5)] leading-relaxed mb-12 max-w-xl mx-auto"
        >
          Be among the first to experience elegant styling, world-class
          products, and exceptional service — all in the heart of Barmer.
        </motion.p>

        {/* Notify form */}
        {!notified ? (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.65 }}
            onSubmit={handleNotify}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8"
          >
            <input
              type="email"
              required
              placeholder="Enter your email to be notified"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="luxury-input flex-1 text-[0.88rem]"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="btn-gold whitespace-nowrap flex-shrink-0 flex items-center gap-2"
            >
              <Bell size={14} />
              <span>Notify Me</span>
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-col items-center gap-3"
          >
            <div className="w-14 h-14 border border-[rgba(212,175,55,0.4)] flex items-center justify-center mx-auto">
              <span className="text-2xl text-[#d4af37]">✓</span>
            </div>
            <p className="font-cormorant text-[1.3rem] italic text-[rgba(212,175,55,0.85)]">
              You're on the list! We'll notify you first.
            </p>
          </motion.div>
        )}

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://instagram.com/theluxelounge"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2"
          >
            <InstaIcon size={16} />
            <span>Follow on Instagram</span>
          </a>
          <a
            href="https://wa.me/918875XXXXXX?text=Hi%2C%20I%27d%20like%20to%20know%20when%20The%20Luxe%20Lounge%20opens."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2"
          >
            <span>💬</span>
            <span>WhatsApp Us</span>
          </a>
        </motion.div>

        {/* Location hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="font-inter text-[0.68rem] tracking-[0.25em] uppercase text-[rgba(212,175,55,0.45)] mt-12"
        >
          Panna Batti Circle · Rai Colony · Barmer, Rajasthan
        </motion.p>
      </div>
    </section>
  );
}
