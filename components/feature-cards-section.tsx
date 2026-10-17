"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  slug: string;
  title: string;
  imageSrc: string;
  alt: string;
}

const services: ServiceItem[] = [
  {
    slug: "professional-resume",
    title: "Professional Resume",
    imageSrc: "/Services graphics/Professional resume Services Graphic 1.jpg",
    alt: "Professional Resume Crafting",
  },
  {
    slug: "ats-friendly-resume",
    title: "ATS Friendly Resume",
    imageSrc: "/Services graphics/ATS Friendly Resume Graphic Services Graphic 2.jpg",
    alt: "ATS Friendly Resume Optimization",
  },
  {
    slug: "cover-letter",
    title: "Cover Letter & Strategy",
    imageSrc: "/Services graphics/Cover Letter Graphic Services Graphic 3.jpg",
    alt: "Cover Letter and Strategic Positioning",
  },
];

export default function FeatureCardsSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Listen for tab selection from navbar or external links
  useEffect(() => {
    const handleTabEvent = (e: Event) => {
      const tabIndex = (e as CustomEvent).detail;
      if (typeof tabIndex === "number" && tabIndex >= 0 && tabIndex < services.length) {
        setActiveCard(tabIndex);
        setProgress(0);
      }
    };
    window.addEventListener("services-tab", handleTabEvent);
    return () => window.removeEventListener("services-tab", handleTabEvent);
  }, []);

  // 5-second auto cycle timer with smooth progress
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2; // 2% every 100ms = 5000ms total
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPaused, activeCard]);

  // When progress reaches 100%, advance forward 1 -> 2 -> 3 -> 1
  useEffect(() => {
    if (progress >= 100) {
      setActiveCard((prev) => (prev + 1) % services.length);
      setProgress(0);
    }
  }, [progress]);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
    setProgress(0);
  };

  return (
    <section
      id="services"
      className="relative z-10 py-16 sm:py-24 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex w-full flex-col items-center justify-start gap-3.5 overflow-hidden mb-8 sm:mb-12"
        >
          <h2
            className="flex w-full max-w-2xl justify-center text-center font-extrabold tracking-tight whitespace-nowrap text-zinc-900"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              lineHeight: 1.1,
            }}
          >
            Resume Services
          </h2>
        </motion.div>

        {/* Dynamic Floating Image Display with Entrance Animation & Continuous Levitation */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-5 my-4 sm:my-10 flex w-full flex-col items-center justify-center group/preview"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-full max-w-4xl lg:max-w-5xl aspect-[16/9] flex items-center justify-center">
            {/* Floating Image Wrapper with physical levitation motion */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full"
            >
              <Link
                href={`/services/${services[activeCard].slug}`}
                className="relative w-full h-full flex items-center justify-center transition-all duration-300 ease-out cursor-pointer hover:scale-[1.02] block group"
                title="Click to view full service details"
              >
                {/* Floating Image with rounded corners & signature soft float shadow */}
                <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0px_10px_25px_0px_#D3D3D3] hover:shadow-[0px_18px_35px_0px_#C4C4C4] bg-zinc-950 transition-all duration-300">
                  {services.map((item, idx) => (
                    <div
                      key={item.slug}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        activeCard === idx
                          ? "scale-100 opacity-100 z-10"
                          : "scale-105 opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={item.imageSrc}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 1200px"
                        priority={idx === 0}
                      />
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* 3 Standalone Service Buttons / Cards - Timer only pauses on big image hover */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          className="mt-6 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 w-full max-w-4xl lg:max-w-5xl mx-auto"
        >
          {services.map((card, idx) => (
            <FeatureCard
              key={card.slug}
              index={idx}
              title={card.title}
              slug={card.slug}
              isActive={activeCard === idx}
              progress={activeCard === idx ? progress : 0}
              onClick={() => handleCardClick(idx)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  index,
  title,
  slug,
  isActive,
  progress,
  onClick,
}: {
  index: number;
  title: string;
  slug: string;
  isActive: boolean;
  progress: number;
  onClick: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
      className={`group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl cursor-pointer select-none transition-all duration-300 text-left overflow-hidden bg-white ${
        isActive
          ? "border-2 border-zinc-900 shadow-[0_10px_30px_-6px_rgba(0,0,0,0.12)] -translate-y-1"
          : "border border-zinc-200/90 hover:border-zinc-300 hover:shadow-md hover:-translate-y-0.5 shadow-2xs"
      }`}
      onClick={onClick}
    >
      {/* Active progress bar indicator across the top of the card */}
      {isActive && (
        <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-zinc-100 overflow-hidden">
          <div
            className="h-full bg-zinc-900 transition-all duration-100 ease-linear rounded-r-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Card Header with Number and Title */}
      <div className="w-full flex flex-col gap-2.5">
        <div className="flex items-center justify-between w-full">
          <span
            className={`text-xs font-bold tracking-wider font-mono transition-colors ${
              isActive ? "text-zinc-900" : "text-zinc-400 group-hover:text-zinc-600"
            }`}
          >
            0{index + 1}
          </span>
        </div>

        <h3
          className={`text-base sm:text-lg font-bold tracking-tight leading-snug transition-colors duration-200 ${
            isActive ? "text-zinc-950" : "text-zinc-800 group-hover:text-blue-600"
          }`}
        >
          {title}
        </h3>
      </div>

      {/* Enhanced View Service Action Button */}
      <div className="w-full pt-2">
        <Link
          href={`/services/${slug}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`group/btn inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
            isActive
              ? "bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm"
              : "bg-zinc-50 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 border border-zinc-200/80 hover:border-zinc-300"
          }`}
        >
          <span>View Service</span>
          <span
            className={`w-6 h-6 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover/btn:translate-x-1 ${
              isActive
                ? "bg-zinc-800 text-zinc-200"
                : "bg-white text-zinc-600 border border-zinc-200/80 shadow-2xs"
            }`}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
