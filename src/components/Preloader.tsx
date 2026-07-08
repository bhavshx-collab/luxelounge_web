"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoIcon } from "./ui/Logo";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling
    document.body.style.overflow = "hidden";

    // Simulating loading time (minimum 2.5s to let the draw animation finish elegantly)
    const timer = setTimeout(() => {
      setLoading(false);
      // Restore scrolling
      document.body.style.overflow = "";
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b0b0b] noise-overlay"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Animated Logo Icon */}
            <LogoIcon size={80} variant="gold" animate={true} />

            {/* Glowing Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="font-playfair text-[0.95rem] tracking-[0.25em] text-[#f8f5f0] uppercase font-bold">
                THE LUXE LOUNGE
              </h2>
              <p className="font-inter text-[0.55rem] tracking-[0.45em] text-[#d4af37] uppercase font-medium mt-2">
                Luxury Redefined
              </p>
            </motion.div>
          </div>

          {/* Luxury loading line */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-[rgba(212,175,55,0.15)] overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 bottom-0 w-16 bg-[#d4af37]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
