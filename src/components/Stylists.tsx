"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { stylists } from "@/data/stylists";

function InstagramIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function Stylists() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stylists" className="py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Meet The Artists"
          title="The hands behind"
          titleHighlight="your transformation."
          description="Our carefully selected team of certified hair artists combine technical mastery with creative vision."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stylists.map((stylist, i) => (
            <motion.div
              key={stylist.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden img-zoom-container mb-5">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent" />

                {/* Instagram Hover */}
                <div className="absolute inset-0 bg-[rgba(212,175,55,0.12)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  {stylist.instagram && (
                    <div className="flex flex-col items-center gap-2">
                      <InstagramIcon className="text-white" size={28} />
                      <span className="font-inter text-[0.72rem] tracking-[0.2em] text-white uppercase">
                        {stylist.instagram}
                      </span>
                    </div>
                  )}
                </div>

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-[rgba(0,0,0,0.7)] border border-[rgba(212,175,55,0.4)] px-3 py-1">
                  <span className="font-inter text-[0.62rem] tracking-[0.2em] uppercase text-[#d4af37]">
                    {stylist.experience}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="font-playfair text-[1.25rem] font-bold text-[#f8f5f0] mb-1">
                  {stylist.name}
                </h3>
                <p className="font-inter text-[0.7rem] tracking-[0.2em] uppercase text-[#d4af37] mb-2">
                  {stylist.role}
                </p>
                <div className="gold-line-left mb-3" style={{ width: "3rem" }} />
                <p className="font-inter text-[0.8rem] text-[rgba(248,245,240,0.5)] leading-relaxed mb-3">
                  {stylist.bio}
                </p>
                <p className="font-inter text-[0.72rem] italic text-[rgba(212,175,55,0.6)]">
                  ✦ {stylist.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
