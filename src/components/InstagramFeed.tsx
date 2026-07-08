"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function InstaIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}


const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=85",
    likes: 234,
    caption: "Every cut tells a story. ✂️ #LuxeLounge",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=85",
    likes: 189,
    caption: "Luxury is in the details. ✨",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=85",
    likes: 302,
    caption: "Your hair is your crown 👑",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=85",
    likes: 156,
    caption: "The ambience you deserve 🖤",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=85",
    likes: 421,
    caption: "Color that speaks for itself 🎨",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=85",
    likes: 567,
    caption: "Bridal dreams made real 👰",
  },
];

export default function InstagramFeed() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="section-label justify-center mb-4">Instagram</div>
          <h2 className="font-playfair text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-[#f8f5f0] mb-3">
            Follow our{" "}
            <span className="italic text-gold-gradient">journey.</span>
          </h2>
          <a
            href="https://www.instagram.com/theluxelounge_2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-[0.8rem] tracking-[0.2em] uppercase text-[rgba(212,175,55,0.7)] hover:text-[#d4af37] transition-colors"
          >
            @theluxelounge
          </a>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/theluxelounge_2026/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-square overflow-hidden img-zoom-container block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center gap-3 p-4">
                <InstaIcon className="text-[#d4af37]" size={24} />
                <p className="font-inter text-[0.72rem] text-white text-center leading-snug">
                  {post.caption}
                </p>
                <span className="font-inter text-[0.65rem] text-[rgba(212,175,55,0.8)]">
                  ❤ {post.likes}
                </span>
              </div>
              {/* Gold border */}
              <div className="absolute inset-0 border border-[rgba(212,175,55,0)] group-hover:border-[rgba(212,175,55,0.4)] transition-all duration-400" />
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10 px-4 sm:px-0"
        >
          <a
            href="https://www.instagram.com/theluxelounge_2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full sm:w-auto inline-flex items-center gap-2 justify-center text-center"
          >
            <InstaIcon size={16} />
            <span>Follow on Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
