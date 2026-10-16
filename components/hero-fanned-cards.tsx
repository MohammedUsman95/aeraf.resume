"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

export interface HeroCardItem {
  src: string;
  alt: string;
  rotate: number;
  delay: number;
  z: number;
}

const DEFAULT_CARDS: HeroCardItem[] = [
  {
    src: "/hero-cards/card-1.png",
    alt: "Professional Cover Letter",
    rotate: -22,
    delay: 0.9,
    z: 10,
  },
  {
    src: "/hero-cards/card-2.png",
    alt: "Education & Certifications",
    rotate: -11,
    delay: 0.75,
    z: 20,
  },
  {
    src: "/hero-cards/card-3.png",
    alt: "Mohammed Bilal Ruknuddin Professional Resume",
    rotate: 0,
    delay: 0.6,
    z: 30,
  },
  {
    src: "/hero-cards/card-4.png",
    alt: "Teacher Resume",
    rotate: 11,
    delay: 0.75,
    z: 20,
  },
  {
    src: "/hero-cards/card-5.png",
    alt: "Core Competencies",
    rotate: 22,
    delay: 0.9,
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
      className="relative mt-8 md:mt-12 flex items-end justify-center w-full overflow-visible"
      style={{ height: 380, width: "100%" }}
    >
      {/* Soft ambient depth aura surrounding and framing the card deck */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
        className="absolute -top-8 left-1/2 -translate-x-1/2 w-[115%] max-w-5xl h-[450px] pointer-events-none -z-20"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 60%, rgba(15, 23, 42, 0.08) 0%, rgba(15, 23, 42, 0.03) 48%, transparent 75%)",
        }}
      />

      {/* Primary ground fade shadow anchored underneath the card deck */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.55, ease: "easeOut" }}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] max-w-3xl h-24 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 50%, rgba(15, 23, 42, 0.12) 0%, rgba(15, 23, 42, 0.04) 48%, transparent 78%)",
        }}
      />

      {/* Tapered contact baseline fade shadow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.6, ease: "easeOut" }}
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[65%] max-w-xl h-10 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(15, 23, 42, 0.10) 0%, rgba(15, 23, 42, 0.02) 50%, transparent 80%)",
        }}
      />

      {/* Wide horizontal ambient floor spread shadow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.65, ease: "easeOut" }}
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-full max-w-4xl h-16 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 75% 35% at 50% 55%, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.02) 55%, transparent 80%)",
        }}
      />

      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            delay: card.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute bottom-0 origin-bottom hover:scale-105 hover:-translate-y-3 hover:z-40 transition-transform duration-300 cursor-pointer select-none"
          style={{
            rotate: card.rotate,
            zIndex: card.z,
            translateX: `calc(${(i - 2)} * clamp(58px, 11vw, 120px))`,
          }}
        >
          <Card className="w-40 sm:w-48 md:w-56 aspect-[1/1.414] p-1 sm:p-1.5 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.08),0_0_45px_rgba(0,0,0,0.05),0_12px_28px_-4px_rgba(0,0,0,0.12),0_24px_48px_-10px_rgba(0,0,0,0.10)] hover:shadow-[0_0_30px_rgba(0,0,0,0.12),0_0_60px_rgba(0,0,0,0.08),0_20px_38px_-4px_rgba(0,0,0,0.16),0_36px_65px_-10px_rgba(0,0,0,0.14)] transition-all duration-300 border-2 border-zinc-200/90 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center">
            <CardContent className="p-0 w-full h-full flex items-center justify-center overflow-hidden rounded-[8px] sm:rounded-[12px]">
              <img
                src={card.src}
                alt={card.alt}
                className="w-full h-full object-cover object-top rounded-[6px] sm:rounded-[10px]"
              />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
