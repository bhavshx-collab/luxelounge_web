"use client";

import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import Logo from "./ui/Logo";

function InstaIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}


const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Grand Opening", href: "#grand-opening" },
  { label: "FAQ", href: "#faq" },
  { label: "Location", href: "#location" },
];

const services = [
  "Hair Cut",
  "Hair Styling",
  "Hair Spa",
  "Hair Color",
  "Keratin Treatment",
  "Bridal Styling",
  "Men's Grooming",
  "Hair Botox",
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-[rgba(212,175,55,0.08)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo layout="horizontal" size="md" />
            </div>

            <div className="gold-line-left mb-5" style={{ width: "2rem" }} />

            <p className="font-inter text-[0.82rem] text-[rgba(248,245,240,0.45)] leading-relaxed mb-6">
              Barmer's most premium luxury hair studio. Where every visit is an experience and every client leaves transformed.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: InstaIcon, href: "https://instagram.com/theluxelounge", label: "Instagram" },
                { icon: MessageCircle, href: "https://wa.me/918875XXXXXX", label: "WhatsApp" },
                { icon: Phone, href: "tel:+918875XXXXXX", label: "Call" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-[rgba(248,245,240,0.4)] hover:text-[#d4af37] hover:border-[rgba(212,175,55,0.5)] transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-inter text-[0.65rem] tracking-[0.3em] uppercase text-[#d4af37] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-inter text-[0.82rem] text-[rgba(248,245,240,0.45)] hover:text-[#d4af37] transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-inter text-[0.65rem] tracking-[0.3em] uppercase text-[#d4af37] mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="font-inter text-[0.82rem] text-[rgba(248,245,240,0.45)] hover:text-[#d4af37] transition-colors duration-300 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="font-inter text-[0.65rem] tracking-[0.3em] uppercase text-[#d4af37] mb-5">
              Stay Connected
            </h3>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-[#d4af37] mt-0.5 flex-shrink-0" />
                <span className="font-inter text-[0.78rem] text-[rgba(248,245,240,0.45)] leading-relaxed">
                  punch Batti Circle, Rai Colony, Barmer, Rajasthan
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-[#d4af37] flex-shrink-0" />
                <a href="tel:+918875XXXXXX" className="font-inter text-[0.78rem] text-[rgba(248,245,240,0.45)] hover:text-[#d4af37] transition-colors">
                  +91 8875XXXXXX
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#d4af37] flex-shrink-0" />
                <a href="mailto:hello@theluxelounge.in" className="font-inter text-[0.78rem] text-[rgba(248,245,240,0.45)] hover:text-[#d4af37] transition-colors">
                  hello@theluxelounge.in
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="font-inter text-[0.65rem] tracking-[0.3em] uppercase text-[#d4af37] mb-3">
                Newsletter
              </p>
              {subscribed ? (
                <p className="font-cormorant text-[1rem] italic text-[rgba(212,175,55,0.7)]">
                  Thank you for subscribing! ✦
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="luxury-input flex-1 text-[0.78rem] py-2.5"
                    style={{ borderRadius: 0 }}
                  />
                  <button
                    type="submit"
                    className="px-4 bg-[#d4af37] text-[#111] flex-shrink-0 hover:bg-[#e8c84a] transition-colors"
                    aria-label="Subscribe"
                  >
                    →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[rgba(212,175,55,0.06)] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[0.72rem] text-[rgba(248,245,240,0.25)]">
            © {new Date().getFullYear()} The Luxe Lounge. All rights reserved. Barmer, Rajasthan.
          </p>
          <div className="flex items-center gap-6">
            <button className="font-inter text-[0.72rem] text-[rgba(248,245,240,0.25)] hover:text-[rgba(212,175,55,0.6)] transition-colors">
              Privacy Policy
            </button>
            <button className="font-inter text-[0.72rem] text-[rgba(248,245,240,0.25)] hover:text-[rgba(212,175,55,0.6)] transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
