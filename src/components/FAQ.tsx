"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { faqs } from "@/data/faqs";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence } from "framer-motion";

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <section id="faq" className="py-28 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Questions"
          title="Everything you need"
          titleHighlight="to know."
          description="Have a question? We have answers. And if you don't find it here, just call or WhatsApp us."
        />

        <div ref={ref} className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`border transition-all duration-400 ${
                openId === faq.id
                  ? "border-[rgba(212,175,55,0.4)] bg-[rgba(212,175,55,0.03)]"
                  : "border-[rgba(212,175,55,0.1)] bg-transparent hover:border-[rgba(212,175,55,0.25)]"
              }`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className={`font-playfair text-[1rem] font-semibold leading-snug transition-colors duration-300 ${
                    openId === faq.id ? "text-[#d4af37]" : "text-[#f8f5f0]"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 ml-4 transition-colors duration-300 ${
                    openId === faq.id ? "text-[#d4af37]" : "text-[rgba(248,245,240,0.3)]"
                  }`}
                >
                  {openId === faq.id ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="gold-line-left mb-4" style={{ width: "2rem" }} />
                      <p className="font-inter text-[0.87rem] text-[rgba(248,245,240,0.6)] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="font-inter text-[0.85rem] text-[rgba(248,245,240,0.4)] mb-4">
            Still have questions? We're happy to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/918949286276"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <span>WhatsApp Us</span>
            </a>
            <a href="tel:+918949286276" className="btn-outline-gold">
              <span>Call Now</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
