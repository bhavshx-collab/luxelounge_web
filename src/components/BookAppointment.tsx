"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/data/services";
import { CheckCircle, Loader2 } from "lucide-react";

export default function BookAppointment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
  };

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
    "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
  ];

  return (
    <section id="book" className="py-28 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.6) 0%, transparent 60%)`,
        }}
      />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        <SectionHeader
          label="Book Your Visit"
          title="Reserve your"
          titleHighlight="luxury experience."
          description="Our team will confirm your appointment within 2 hours. Looking forward to welcoming you."
        />

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center py-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-8"
            >
              <div className="w-20 h-20 rounded-full bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.4)] flex items-center justify-center">
                <CheckCircle className="text-[#d4af37]" size={40} />
              </div>
            </motion.div>
            <h3 className="font-playfair text-3xl font-bold text-[#f8f5f0] mb-4">
              Your appointment is confirmed!
            </h3>
            <p className="font-cormorant text-xl italic text-[rgba(248,245,240,0.65)] mb-8">
              We'll be in touch within 2 hours to confirm all details.
            </p>
            <p className="font-inter text-[0.8rem] tracking-[0.2em] uppercase text-[rgba(212,175,55,0.7)]">
              We look forward to welcoming you at The Luxe Lounge
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="border border-[rgba(212,175,55,0.12)] p-8 md:p-12 bg-[rgba(255,255,255,0.02)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block font-inter text-[0.68rem] tracking-[0.2em] uppercase text-[rgba(212,175,55,0.7)] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="luxury-input"
                />
              </div>
              <div>
                <label className="block font-inter text-[0.68rem] tracking-[0.2em] uppercase text-[rgba(212,175,55,0.7)] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="luxury-input"
                />
              </div>
              <div>
                <label className="block font-inter text-[0.68rem] tracking-[0.2em] uppercase text-[rgba(212,175,55,0.7)] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="luxury-input"
                />
              </div>
              <div>
                <label className="block font-inter text-[0.68rem] tracking-[0.2em] uppercase text-[rgba(212,175,55,0.7)] mb-2">
                  Service *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="luxury-input luxury-select"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-inter text-[0.68rem] tracking-[0.2em] uppercase text-[rgba(212,175,55,0.7)] mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="luxury-input"
                />
              </div>
              <div>
                <label className="block font-inter text-[0.68rem] tracking-[0.2em] uppercase text-[rgba(212,175,55,0.7)] mb-2">
                  Preferred Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="luxury-input luxury-select"
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block font-inter text-[0.68rem] tracking-[0.2em] uppercase text-[rgba(212,175,55,0.7)] mb-2">
                Special Requests or Notes
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Any specific requirements, allergies, or notes for our stylists..."
                value={formData.message}
                onChange={handleChange}
                className="luxury-input resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gold w-full md:w-auto flex items-center gap-3 justify-center disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Confirming Your Appointment...</span>
                </>
              ) : (
                <span>Confirm Appointment</span>
              )}
            </motion.button>

            <p className="font-inter text-[0.72rem] text-[rgba(248,245,240,0.35)] mt-5">
              By booking, you agree to receive a confirmation via WhatsApp or phone. 
              We respect your privacy and will never share your details.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}
