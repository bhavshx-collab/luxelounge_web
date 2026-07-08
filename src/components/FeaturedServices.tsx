"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const featured = [
  {
    title: "Bridal Styling",
    subtitle: "Your most important look",
    description:
      "A full-day bespoke bridal experience — from consultation to trial runs to your wedding day. We collaborate with you to craft a look that is uniquely and memorably you.",
    tag: "Signature Service",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85",
  },
  {
    title: "Signature Hair Spa",
    subtitle: "Deep restoration ritual",
    description:
      "A multi-step luxurious hair restoration ritual using premium Kerastase and Olaplex therapies. Your hair's version of a 5-star holiday.",
    tag: "Most Loved",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85",
  },
  {
    title: "Color Artistry",
    subtitle: "Bold. Refined. Breathtaking.",
    description:
      "From subtle balayage to vibrant global color — our certified color artists use precision techniques and premium European brands to deliver breathtaking results every time.",
    tag: "Editor's Pick",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&q=85",
  },
];

export default function FeaturedServices() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-[#0d0d0d]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 md:mb-14 flex-wrap gap-4">
          <div>
            <div className="section-label mb-4">Featured Experiences</div>
            <h2 className="font-playfair text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-[#f8f5f0] leading-tight">
              Our <span className="italic text-gold-gradient">signature</span> services.
            </h2>
          </div>
          <motion.a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="btn-outline-gold hidden md:flex"
          >
            <span>Book a Session</span>
          </motion.a>
        </div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="relative aspect-[3/4] img-zoom-container overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.92)] via-[rgba(0,0,0,0.3)] to-transparent" />

                {/* Tag */}
                <div className="absolute top-5 left-5 border border-[rgba(212,175,55,0.5)] px-3 py-1">
                  <span className="font-inter text-[0.6rem] tracking-[0.25em] uppercase text-[#d4af37]">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                  <p className="font-inter text-[0.65rem] tracking-[0.25em] uppercase text-[rgba(212,175,55,0.7)] mb-2">
                    {item.subtitle}
                  </p>
                  <h3 className="font-playfair text-[1.5rem] md:text-[1.7rem] font-bold text-white mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <div className="h-px bg-[rgba(212,175,55,0.3)] mb-4 group-hover:bg-[rgba(212,175,55,0.7)] transition-colors duration-400" />
                  <p className="font-inter text-[0.8rem] md:text-[0.82rem] text-[rgba(255,255,255,0.6)] leading-relaxed mb-5 md:transform md:translate-y-2 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                    {item.description}
                  </p>
                  <button
                    onClick={() =>
                      document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="inline-flex items-center gap-2 font-inter text-[0.7rem] tracking-[0.2em] uppercase text-[#d4af37] group/btn"
                  >
                    Book This Service{" "}
                    <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 flex justify-center md:hidden">
          <motion.a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="btn-outline-gold w-full text-center"
          >
            <span>Book a Session</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
