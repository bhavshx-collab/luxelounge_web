"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [showLabels, setShowLabels] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[998] flex flex-col items-end gap-2 md:gap-3">
      {/* Back to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-9 h-9 md:w-11 md:h-11 bg-[rgba(17,17,17,0.9)] border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-[#d4af37] hover:border-[rgba(212,175,55,0.7)] transition-colors backdrop-blur-sm"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 md:w-[16px] md:h-[16px]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call Button */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="flex items-center gap-3"
        onMouseEnter={() => setShowLabels(true)}
        onMouseLeave={() => setShowLabels(false)}
      >
        <AnimatePresence>
          {showLabels && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="hidden md:inline-block glass-dark px-3 py-1.5 font-inter text-[0.7rem] tracking-[0.1em] text-[#f8f5f0] whitespace-nowrap"
            >
              Call Now
            </motion.span>
          )}
        </AnimatePresence>

        <motion.a
          href="tel:+918949286276"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-11 h-11 md:w-[52px] md:h-[52px] rounded-full bg-[#d4af37] flex items-center justify-center shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_32px_rgba(212,175,55,0.6)] transition-shadow"
          aria-label="Call us"
        >
          <Phone className="text-[#111] w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
        </motion.a>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
        className="flex items-center gap-3"
        onMouseEnter={() => setShowLabels(true)}
        onMouseLeave={() => setShowLabels(false)}
      >
        <AnimatePresence>
          {showLabels && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="hidden md:inline-block glass-dark px-3 py-1.5 font-inter text-[0.7rem] tracking-[0.1em] text-[#f8f5f0] whitespace-nowrap"
            >
              Chat on WhatsApp
            </motion.span>
          )}
        </AnimatePresence>

        <motion.a
          href="https://wa.me/918949286276?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20The%20Luxe%20Lounge."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-11 h-11 md:w-[52px] md:h-[52px] rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)] transition-shadow"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="text-white w-[18px] h-[18px] md:w-[22px] md:h-[22px]" fill="white" />
        </motion.a>
      </motion.div>
    </div>
  );
}
