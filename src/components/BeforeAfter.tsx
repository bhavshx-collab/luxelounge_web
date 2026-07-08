"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const transformations = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=85",
    after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=85",
    label: "Hair Spa Transformation",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=85",
    after: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85",
    label: "Men's Grooming",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=85",
    after: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=85",
    label: "Color Transformation",
  },
];

function BeforeAfterSlider({ before, after, label }: { before: string; after: string; label: string }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative aspect-square overflow-hidden cursor-ew-resize select-none border border-[rgba(212,175,55,0.15)] touch-none"
        onMouseDown={() => (isDragging.current = true)}
        onMouseUp={() => (isDragging.current = false)}
        onMouseLeave={() => (isDragging.current = false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After image (full) */}
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />

        {/* Before image (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000 / sliderPos}%` }} />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[#d4af37] z-10"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#d4af37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.6)]">
            <span className="text-[#111] text-xs font-bold select-none">⟺</span>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-[rgba(0,0,0,0.7)] px-2 py-1">
          <span className="font-inter text-[0.58rem] tracking-[0.2em] uppercase text-[rgba(248,245,240,0.7)]">Before</span>
        </div>
        <div className="absolute top-3 right-3 bg-[rgba(0,0,0,0.7)] px-2 py-1">
          <span className="font-inter text-[0.58rem] tracking-[0.2em] uppercase text-[rgba(212,175,55,0.9)]">After</span>
        </div>
      </div>
      <p className="font-inter text-[0.75rem] tracking-[0.2em] uppercase text-[rgba(248,245,240,0.4)] text-center">
        {label}
      </p>
    </div>
  );
}

export default function BeforeAfter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeader
          label="Transformations"
          title="See the"
          titleHighlight="difference."
          description="Drag the slider to reveal the stunning transformations our clients experience. Every result is real."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <BeforeAfterSlider before={t.before} after={t.after} label={t.label} />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center font-inter text-[0.75rem] text-[rgba(248,245,240,0.3)] mt-8"
        >
          ← Drag the golden handle to compare →
        </motion.p>
      </div>
    </section>
  );
}
