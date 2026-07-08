"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Location() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const hours = [
    { day: "Monday – Friday", time: "9:00 AM – 9:00 PM" },
    { day: "Saturday", time: "8:00 AM – 9:00 PM" },
    { day: "Sunday", time: "10:00 AM – 8:00 PM" },
  ];

  return (
    <section id="location" className="py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="section-label mb-5">Find Us</div>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] border border-[rgba(212,175,55,0.2)] overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Panna+Batti+Circle,+Rai+Colony,+Barmer,+Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(40%) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Luxe Lounge Location"
              />
            </div>
            {/* Gold corners */}
            <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-[rgba(212,175,55,0.5)]" />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-[rgba(212,175,55,0.5)]" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-playfair text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-[#f8f5f0] mb-2">
                Visit The{" "}
                <span className="italic text-gold-gradient">Luxe Lounge</span>
              </h2>
              <div className="gold-line-left mb-6" style={{ width: "3rem" }} />
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-[rgba(212,175,55,0.3)] flex items-center justify-center flex-shrink-0">
                <MapPin className="text-[#d4af37]" size={18} />
              </div>
              <div>
                <p className="font-inter text-[0.65rem] tracking-[0.25em] uppercase text-[#d4af37] mb-1">
                  Address
                </p>
                <p className="font-inter text-[0.9rem] text-[rgba(248,245,240,0.75)] leading-relaxed">
                  Panna Batti Circle, Rai Colony<br />
                  Barmer, Rajasthan — 344001
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-[rgba(212,175,55,0.3)] flex items-center justify-center flex-shrink-0">
                <Clock className="text-[#d4af37]" size={18} />
              </div>
              <div className="flex-1">
                <p className="font-inter text-[0.65rem] tracking-[0.25em] uppercase text-[#d4af37] mb-2">
                  Business Hours
                </p>
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-2 border-b border-[rgba(212,175,55,0.08)]"
                  >
                    <span className="font-inter text-[0.82rem] text-[rgba(248,245,240,0.6)]">
                      {h.day}
                    </span>
                    <span className="font-inter text-[0.82rem] text-[#d4af37] font-medium">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-[rgba(212,175,55,0.3)] flex items-center justify-center flex-shrink-0">
                <Phone className="text-[#d4af37]" size={18} />
              </div>
              <div>
                <p className="font-inter text-[0.65rem] tracking-[0.25em] uppercase text-[#d4af37] mb-1">
                  Phone
                </p>
                <a
                  href="tel:+918949286276"
                  className="font-inter text-[0.9rem] text-[rgba(248,245,240,0.75)] hover:text-[#d4af37] transition-colors"
                >
                  +91 89492 86276
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-[rgba(212,175,55,0.3)] flex items-center justify-center flex-shrink-0">
                <Mail className="text-[#d4af37]" size={18} />
              </div>
              <div>
                <p className="font-inter text-[0.65rem] tracking-[0.25em] uppercase text-[#d4af37] mb-1">
                  Email
                </p>
                <a
                  href="mailto:hello@theluxelounge.in"
                  className="font-inter text-[0.9rem] text-[rgba(248,245,240,0.75)] hover:text-[#d4af37] transition-colors"
                >
                  hello@theluxelounge.in
                </a>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://maps.google.com/maps?q=Panna+Batti+Circle,+Rai+Colony,+Barmer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex"
            >
              <MapPin size={14} />
              <span>Get Directions</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
