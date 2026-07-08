"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  titleHighlight,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div ref={ref} className={`flex flex-col ${alignClass} mb-16`}>
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, x: align === "center" ? 0 : -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="section-label mb-5"
      >
        {label}
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`font-playfair text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.05] tracking-tight ${
          light ? "text-[#111111]" : "text-[#f8f5f0]"
        }`}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="italic text-gold-gradient">{titleHighlight}</span>
        )}
      </motion.h2>

      {/* Gold Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`mt-5 h-px bg-gradient-to-r from-[#d4af37] to-transparent ${
          align === "center" ? "w-24 self-center" : "w-20"
        }`}
        style={{ transformOrigin: align === "center" ? "center" : "left" }}
      />

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className={`mt-6 font-inter text-[0.95rem] leading-relaxed max-w-xl ${
            align === "center" ? "text-center" : "text-left"
          } ${light ? "text-[#555]" : "text-[rgba(248,245,240,0.6)]"}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
