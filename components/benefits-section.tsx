"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface BenefitBox {
  id: string;
  title: string;
  imageSrc?: string; // For custom symbol images uploaded later
  svgIcon?: React.ReactNode;
}

const benefitBoxes: BenefitBox[] = [
  {
    id: "experience",
    title: "20+ Years Experience",
    svgIcon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    id: "fast-delivery",
    title: "Fast Delivery",
    svgIcon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: "revisions",
    title: "2 Revisions",
    svgIcon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    id: "customizable",
    title: "Customizable",
    svgIcon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="w-full max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
          Why Choose{" "}
          <span className="relative inline-block">
            aeraf.resume
            <span className="absolute bottom-1.5 left-0 w-full h-[3px] bg-red-500 rounded-full" />
          </span>
        </h2>
      </motion.div>

      {/* 4 Feature Boxes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefitBoxes.map((box, index) => (
          <motion.div
            key={box.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="group relative bg-white rounded-3xl p-8 sm:p-9 border border-zinc-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center gap-5 min-h-[190px]"
          >
            {/* Top Icon Badge */}
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-blue-50/90 border border-blue-100 shadow-xs flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-100/70 transition-all duration-300 flex-shrink-0">
              {box.imageSrc ? (
                <div className="relative w-9 h-9 sm:w-10 sm:h-10">
                  <Image
                    src={box.imageSrc}
                    alt={box.title}
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
              ) : (
                box.svgIcon
              )}
            </div>

            {/* Box Title */}
            <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug tracking-tight max-w-[180px] group-hover:text-blue-600 transition-colors">
              {box.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
