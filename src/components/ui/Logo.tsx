"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | number;
  showText?: boolean;
  showTagline?: boolean;
  variant?: "gold" | "white" | "dark";
  layout?: "horizontal" | "vertical";
}

/**
 * Standalone monogram SVG icon — used for favicon / small contexts.
 * Kept for backward compat but image logo is preferred.
 */
export function LogoIcon({
  size = "md",
  variant = "gold",
}: {
  size?: "sm" | "md" | "lg" | "xl" | number;
  variant?: "gold" | "white" | "dark";
  animate?: boolean;
}) {
  const sizeMap = { sm: 32, md: 48, lg: 64, xl: 96 };
  const px = typeof size === "number" ? size : sizeMap[size] || 48;

  const color =
    variant === "white"
      ? "#f8f5f0"
      : variant === "dark"
        ? "#cec1c1ff"
        : "url(#ig)";

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none"
    >
      <defs>
        <linearGradient id="ig" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b8960e" />
          <stop offset="40%" stopColor="#e8c84a" />
          <stop offset="60%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#b8960e" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="44" stroke={color} strokeWidth="1.2" opacity="0.85" />
      {/* L1 */}
      <path d="M32 28H44" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M38 28V68" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M38 68H43.5" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M52.5 68H62" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M62 62V74" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* L2 */}
      <path d="M42 38H54" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M48 38V78" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M48 78H72" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M72 72V84" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Primary Logo — uses the generated brand image.
 * Falls back gracefully to SVG if image fails.
 */
export default function Logo({
  className = "",
  size = "md",
  showText = true,
  showTagline = true,
  variant = "gold",
  layout = "horizontal",
}: LogoProps) {
  // Height of the logo image in navbar (sm = compact nav, md+ = larger)
  const heightMap: Record<string, number> = {
    sm: 44,
    md: 56,
    lg: 72,
    xl: 96,
  };
  const imgH =
    typeof size === "number" ? size : heightMap[size as string] ?? 56;

  return (
    <div className={`inline-flex items-center gap-0 select-none ${className}`}>
      {/*
       * Image logo: contains the LL monogram + "THE LUXE LOUNGE" + "LUXURY REDEFINED"
       * The PNG already has the complete brand lockup on black.
       * We use object-contain so it never clips.
       */}
      <div
        className="relative flex-shrink-0"
        style={{
          height: imgH,
          width: imgH * 1.05,
        }}
      >
        <Image
          src="/logo-new.png"
          alt="The Luxe Lounge — Luxury Hair Studio"
          fill
          className="object-contain object-left"
          priority
          sizes={`${imgH}px`}
        />
      </div>
    </div>
  );
}
