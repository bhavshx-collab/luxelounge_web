"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=85",
    alt: "Premium hair styling",
    span: "row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=85",
    alt: "Luxury salon ambience",
    span: "",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=85",
    alt: "Hair treatment",
    span: "",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=85",
    alt: "Salon interior",
    span: "col-span-2",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=85",
    alt: "Hair coloring",
    span: "row-span-2",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=85",
    alt: "Men's grooming",
    span: "",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85",
    alt: "Hair spa",
    span: "",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85",
    alt: "Bridal styling",
    span: "",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1522337913753-5e49d30d7540?w=800&q=85",
    alt: "Hair treatment results",
    span: "",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 lg:py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeader
          label="Our Work"
          title="Where craft"
          titleHighlight="meets art."
          description="Every photo tells a story of transformation, skill, and the artistry that defines The Luxe Lounge."
        />

        {/* Masonry Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[160px] sm:auto-rows-[200px]"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className={`group relative overflow-hidden cursor-pointer img-zoom-container ${img.span}`}
              onClick={() => setLightboxImg(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                <div className="transform scale-75 group-hover:scale-100 transition-transform duration-400 flex flex-col items-center gap-2">
                  <ZoomIn className="text-white" size={28} />
                  <span className="font-inter text-[0.65rem] tracking-[0.2em] uppercase text-white">
                    View
                  </span>
                </div>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-[rgba(212,175,55,0)] group-hover:border-[rgba(212,175,55,0.5)] transition-all duration-400" />
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="font-inter text-[0.82rem] text-[rgba(248,245,240,0.5)] mb-4">
            See more transformations on our Instagram
          </p>
          <a
            href="https://www.instagram.com/theluxelounge_2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex"
          >
            <span>Follow @theluxelounge</span>
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-4xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg}
                alt="Gallery preview"
                className="w-full h-full object-contain max-h-[85vh]"
              />
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute top-3 right-3 bg-[rgba(0,0,0,0.8)] border border-[rgba(212,175,55,0.3)] p-2 text-[#d4af37] hover:bg-[rgba(212,175,55,0.1)] transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
