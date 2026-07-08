import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Luxe Lounge | Luxury Hair Studio — Barmer, Rajasthan",
  description:
    "Barmer's most premium luxury hair studio. Expert styling, advanced hair treatments, and a bespoke salon experience like no other. Located at Punch Batti Circle, Rai Colony, Barmer.",
  keywords: [
    "luxury salon Barmer",
    "hair studio Barmer",
    "best salon Barmer",
    "hair treatment Rajasthan",
    "bridal styling Barmer",
    "The Luxe Lounge",
    "premium salon",
  ],
  openGraph: {
    title: "The Luxe Lounge | Luxury Hair Studio",
    description:
      "Premium Hair Studio bringing luxury hair care and styling to Barmer, Rajasthan.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} ${cormorant.variable} antialiased bg-[#111111] text-[#F8F5F0]`}
      >
        {children}
      </body>
    </html>
  );
}
