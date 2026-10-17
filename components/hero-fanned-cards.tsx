"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

export interface HeroCardItem {
  src: string;
  alt: string;
  rotate: number;
  z: number;
}

const DEFAULT_CARDS: HeroCardItem[] = [
  {
    src: "/hero-cards/card-1.png",
    alt: "Professional Cover Letter",
    rotate: -22,
    z: 10,
  },
  {
    src: "/hero-cards/card-2.png",
    alt: "Education & Certifications",
    rotate: -11,
    z: 20,
  },
  {
    src: "/hero-cards/card-3.png",
    alt: "Mohammed Bilal Ruknuddin Professional Resume",
    rotate: 0,
    z: 30,
  },
  {
    src: "/hero-cards/card-4.png",
    alt: "Teacher Resume",
    rotate: 11,
    z: 20,
  },
  {
    src: "/hero-cards/card-5.png",
    alt: "Core Competencies",
    rotate: 22,
    z: 10,
  },
];

interface HeroFannedCardsProps {
  cards?: HeroCardItem[];
}

export default function HeroFannedCards({
  cards = DEFAULT_CARDS,
}: HeroFannedCardsProps) {
  return (
    <div
      className="relative mt-6 sm:mt-8 md:mt-12 flex items-end justify-center w-full overflow-visible h-[260px] xs:h-[310px] sm:h-[380px]"
    >
      {/* Soft ambient depth aura surrounding and framing the card deck */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="absolute -top-8 left-1/2 -translate-x-1/2 w-[115%] max-w-5xl h-[450px] pointer-events-none -z-20"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 60%, rgba(15, 23, 42, 0.08) 0%, rgba(15, 23, 42, 0.03) 48%, transparent 75%)",
        }}
      />

      {/* Primary ground fade shadow anchored underneath the card deck */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] max-w-3xl h-24 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 50%, rgba(15, 23, 42, 0.14) 0%, rgba(15, 23, 42, 0.04) 48%, transparent 78%)",
        }}
      />

      {/* Tapered contact baseline fade shadow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[65%] max-w-xl h-10 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(15, 23, 42, 0.12) 0%, rgba(15, 23, 42, 0.03) 50%, transparent 80%)",
        }}
      />

      {/* Wide horizontal ambient floor spread shadow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.85, delay: 0.3, ease: "easeOut" }}
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-full max-w-4xl h-16 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 75% 35% at 50% 55%, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.03) 55%, transparent 80%)",
        }}
      />

      {cards.map((card, i) => (
        <motion.div
          key={card.src}
          initial={{ opacity: 0, y: 80, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: card.rotate }}
          whileHover={{
            scale: 1.05,
            y: -14,
            transition: { duration: 0.25, ease: "easeOut" },
          }}
          transition={{
            duration: 0.75,
            delay: 0.15 + Math.abs(i - 2) * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute bottom-0 cursor-pointer select-none"
          style={{
            transformOrigin: "bottom center",
            zIndex: card.z,
            x: `calc(${(i - 2)} * clamp(32px, 8.5vw, 120px))`,
          }}
        >
          <Card className="w-28 xs:w-36 sm:w-48 md:w-56 aspect-[1/1.414] p-1 sm:p-1.5 overflow-hidden shadow-[0_6px_22px_rgba(0,0,0,0.18),0_12px_30px_-4px_rgba(0,0,0,0.22)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.28),0_24px_48px_-4px_rgba(0,0,0,0.34)] transition-shadow duration-300 border-[1.5px] border-zinc-900 rounded-lg sm:rounded-2xl bg-white flex items-center justify-center">
            <CardContent className="p-0 w-full h-full flex items-center justify-center overflow-hidden rounded-[6px] sm:rounded-[12px]">
              <img
                src={card.src}
                alt={card.alt}
                className="w-full h-full object-cover object-top rounded-[4px] sm:rounded-[10px]"
              />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
