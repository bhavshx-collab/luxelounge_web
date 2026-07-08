"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { reviews } from "@/data/reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-base ${i < rating ? "text-[#d4af37]" : "text-[rgba(212,175,55,0.2)]"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const doubled = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-28 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        {/* Header with rating */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <SectionHeader
            label="Client Love"
            title="What our guests"
            titleHighlight="are saying."
            align="left"
          />

          <div className="flex-shrink-0 text-right">
            <div className="font-playfair text-7xl font-bold text-[#d4af37] leading-none">4.9</div>
            <div className="flex justify-end gap-0.5 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-xl text-[#d4af37]">★</span>
              ))}
            </div>
            <p className="font-inter text-[0.75rem] tracking-[0.2em] uppercase text-[rgba(248,245,240,0.4)] mt-2">
              Based on 100+ Reviews
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="relative">
        <div className="flex overflow-hidden gap-5 marquee-wrapper">
          <div className="marquee-track flex gap-5 min-w-max">
            {doubled.map((review, i) => (
              <div
                key={`${review.id}-${i}`}
                className="w-[340px] flex-shrink-0 bg-[rgba(255,255,255,0.02)] border border-[rgba(212,175,55,0.12)] p-7 hover:border-[rgba(212,175,55,0.35)] transition-colors duration-400"
              >
                <StarRating rating={review.rating} />

                <p className="font-cormorant text-[1.05rem] italic text-[rgba(248,245,240,0.8)] leading-relaxed mt-4 mb-5">
                  "{review.review}"
                </p>

                <div className="gold-line mb-5" />

                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-[rgba(212,175,55,0.3)]"
                  />
                  <div>
                    <p className="font-inter text-[0.85rem] font-semibold text-[#f8f5f0]">
                      {review.name}
                    </p>
                    <p className="font-inter text-[0.7rem] text-[rgba(248,245,240,0.4)]">
                      {review.date}
                      {review.service && ` · ${review.service}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0d0d0d] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d0d0d] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
