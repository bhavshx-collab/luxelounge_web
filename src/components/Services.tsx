"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Hair", "Treatment", "Styling", "Grooming"];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = services.filter(
    (s) =>
      activeCategory === "All" ||
      s.category === activeCategory.toLowerCase()
  );

  return (
    <section id="services" className="py-16 md:py-24 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeader
          label="Our Services"
          title="Crafted for"
          titleHighlight="every transformation."
          description="Each service is a bespoke experience, tailored to your hair's unique needs and your personal style vision."
        />

        {/* Category Filter */}
        <div className="flex overflow-x-auto md:flex-wrap justify-start md:justify-center gap-2 mb-10 md:mb-14 pb-3 md:pb-0 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2 text-[0.7rem] tracking-[0.2em] uppercase font-inter font-medium transition-all duration-300 border flex-shrink-0 ${
                activeCategory === cat
                  ? "bg-[#d4af37] text-[#111] border-[#d4af37]"
                  : "bg-transparent text-[rgba(248,245,240,0.5)] border-[rgba(212,175,55,0.2)] hover:border-[rgba(212,175,55,0.5)] hover:text-[#d4af37]"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filtered.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group luxury-card bg-[rgba(255,255,255,0.02)] overflow-hidden cursor-pointer"
            >
              {/* Image */}
              {service.image && (
                <div className="relative aspect-[4/3] overflow-hidden img-zoom-container">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-transparent to-transparent" />

                  {/* Gold overlay on hover */}
                  <div className="absolute inset-0 bg-[rgba(212,175,55,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Duration badge */}
                  <div className="absolute top-3 right-3 bg-[rgba(0,0,0,0.7)] border border-[rgba(212,175,55,0.3)] px-3 py-1">
                    <span className="font-inter text-[0.58rem] tracking-[0.2em] uppercase text-[#d4af37]">
                      {service.duration}
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <div className="text-xl mb-3">{service.icon}</div>
                <h3 className="font-playfair text-[1.05rem] font-semibold text-[#f8f5f0] mb-2 leading-snug">
                  {service.name}
                </h3>
                <div className="w-6 h-px bg-[rgba(212,175,55,0.4)] mb-3 group-hover:w-12 transition-all duration-400" />
                <p className="font-inter text-[0.8rem] text-[rgba(248,245,240,0.5)] leading-relaxed mb-4">
                  {service.description}
                </p>
                <button
                  onClick={() =>
                    document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-2 font-inter text-[0.7rem] tracking-[0.15em] uppercase text-[#d4af37] hover:gap-3 transition-all duration-300"
                >
                  Book Now <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
