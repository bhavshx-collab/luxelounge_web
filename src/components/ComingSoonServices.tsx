"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const comingSoonServices = [
  { icon: "✂", name: "Hair Cut", desc: "Precision cuts tailored to your face shape and lifestyle." },
  { icon: "🌿", name: "Hair Spa", desc: "Deep nourishing rituals using premium spa-grade serums." },
  { icon: "🎨", name: "Hair Coloring", desc: "Balayage, ombré, global color — by certified color artists." },
  { icon: "💇", name: "Hair Styling", desc: "Blow-outs to editorial up-dos, crafted to turn heads." },
  { icon: "💎", name: "Keratin Treatment", desc: "Restore strength, shine, and glass-smooth manageability." },
  { icon: "⚗", name: "Hair Botox", desc: "The ultimate anti-aging treatment for damaged hair." },
  { icon: "👰", name: "Bridal Styling", desc: "Full-day bespoke bridal experience, utterly unforgettable." },
  { icon: "💅", name: "Women's Grooming", desc: "Comprehensive packages for a polished, effortless look." },
  { icon: "🧔", name: "Men's Grooming", desc: "Precision cuts, beard design, and scalp care for the modern man." },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any } },
};

export default function ComingSoonServices() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="coming-soon" className="py-28 bg-[#0d0d0d] overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(212,175,55,0.5) 0px, rgba(212,175,55,0.5) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, rgba(212,175,55,0.5) 0px, rgba(212,175,55,0.5) 1px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label justify-center mb-5"
          >
            Grand Opening Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-[clamp(2.2rem,5vw,3.8rem)] font-bold text-[#f8f5f0] leading-tight"
          >
            Everything you need,{" "}
            <span className="italic text-gold-gradient">all under one roof.</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-px bg-gradient-to-r from-[#d4af37] to-transparent mx-auto mt-5 mb-5"
            style={{ transformOrigin: "center" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-inter text-[0.95rem] text-[rgba(248,245,240,0.5)] max-w-lg mx-auto"
          >
            Our full menu of luxury services — available from the day we open our doors.
          </motion.p>
        </div>

        {/* Service cards */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {comingSoonServices.map((service) => (
            <motion.div
              key={service.name}
              variants={item}
              className="group relative border border-[rgba(212,175,55,0.12)] bg-[rgba(255,255,255,0.02)] overflow-hidden transition-all duration-500 hover:border-[rgba(212,175,55,0.45)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              {/* Gold top line that grows on hover */}
              <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#d4af37] to-[#c8a96a] transition-all duration-600" />

              <div className="p-7">
                {/* Icon */}
                <div className="text-3xl mb-5 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {service.icon}
                </div>

                {/* Name */}
                <h3 className="font-playfair text-[1.1rem] font-bold text-[#f8f5f0] mb-2">
                  {service.name}
                </h3>

                {/* Gold line */}
                <div className="w-6 h-px bg-[rgba(212,175,55,0.35)] mb-3 group-hover:w-12 group-hover:bg-[#d4af37] transition-all duration-500" />

                {/* Description */}
                <p className="font-inter text-[0.82rem] text-[rgba(248,245,240,0.5)] leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 border border-[rgba(212,175,55,0.3)] px-3 py-1.5 group-hover:border-[rgba(212,175,55,0.6)] transition-colors duration-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                  <span className="font-inter text-[0.6rem] tracking-[0.2em] uppercase text-[#d4af37]">
                    Available at Grand Opening
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[rgba(212,175,55,0.08)] group-hover:border-[rgba(212,175,55,0.25)] transition-colors duration-400" />
            </motion.div>
          ))}
        </motion.div>

        {/* Book early CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-14"
        >
          <p className="font-inter text-[0.82rem] text-[rgba(248,245,240,0.4)] mb-4">
            Be among the first to book when we open
          </p>
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-gold inline-flex"
          >
            <span>Register Your Interest</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
