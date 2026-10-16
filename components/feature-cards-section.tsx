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
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full flex-col items-center justify-start gap-3.5 overflow-hidden mb-12 sm:mb-16"
        >


          <h2
            className="flex w-full max-w-2xl justify-center text-center font-black tracking-tight uppercase whitespace-nowrap"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            Resume Services
          </h2>
        </motion.div>

        {/* Dynamic Image Display with Link to Detail Page */}
        <div
          className="relative z-5 my-2 sm:my-6 flex w-full flex-col items-center justify-center gap-2 group/preview"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Link
            href={`/services/${services[activeCard].slug}`}
            className="flex h-[320px] sm:h-[500px] w-full max-w-5xl flex-col items-center justify-center overflow-hidden transition-all duration-500 relative cursor-pointer"
            title="Click to view full service details"
          >
            <div className="flex flex-1 items-center justify-center self-stretch w-full">
              <div className="flex h-full w-full items-center justify-center">
                <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
                  {services.map((item, idx) => (
                    <div
                      key={item.slug}
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${activeCard === idx
                          ? "scale-100 opacity-100 z-10"
                          : "scale-105 opacity-0 z-0 pointer-events-none"
                        }`}
                    >
                      <Image
                        src={item.imageSrc}
                        alt={item.alt}
                        fill
                        className="object-contain rounded-2xl border shadow-2xl bg-zinc-950/5"
                        style={{ borderColor: "var(--border-medium)" }}
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        priority={idx === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover floating hint */}
            <div className="absolute bottom-4 right-4 bg-zinc-950/80 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-xl opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center gap-2 shadow-lg z-20">
              <span>View full service & templates</span>
              <span>→</span>
            </div>
          </Link>
        </div>

        {/* Cards Row with Diagonal Accents - Solid White Background */}
        <div
          className="mt-6 sm:mt-14 flex items-start justify-center self-stretch bg-white border border-zinc-200/90 rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12 bg-white">
            <div className="absolute -top-30 -left-4 flex w-40 flex-col items-start justify-start">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 origin-top-left -rotate-45 self-stretch outline-[0.5px] outline-offset-[-0.25px]"
                  style={{ outlineColor: "var(--border-medium)" }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-1 flex-col items-stretch justify-center gap-0 px-0 md:flex-row bg-white">
            {services.map((card, idx) => (
              <FeatureCard
                key={card.slug}
                title={card.title}
                slug={card.slug}
                isActive={activeCard === idx}
                progress={activeCard === idx ? progress : 0}
                onClick={() => handleCardClick(idx)}
              />
            ))}
          </div>

          <div className="relative w-4 self-stretch overflow-hidden sm:w-6 md:w-8 lg:w-12 bg-white">
            <div className="absolute -top-30 -left-4 flex w-40 flex-col items-start justify-start">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 origin-top-left -rotate-45 self-stretch outline-[0.5px] outline-offset-[-0.25px]"
                  style={{ outlineColor: "var(--border-medium)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  slug,
  isActive,
  progress,
  onClick,
}: {
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
      className={`group relative flex w-full cursor-pointer flex-col items-start justify-between gap-5 self-stretch overflow-hidden px-6 py-6 md:flex-1 select-none bg-white transition-all duration-300 ${isActive
          ? "border-b-2 md:border-b-0 md:border-r last:border-r-0 border-zinc-900 bg-white"
          : "border-b md:border-b-0 md:border-r last:border-r-0 border-zinc-200/80 bg-white hover:bg-zinc-50/90"
        }`}
      onClick={onClick}
    >
      {/* Active progress bar */}
      {isActive && (
        <div className="absolute top-0 left-0 h-[3px] w-full bg-zinc-100">
          <div
            className="h-full transition-all duration-100 ease-linear bg-zinc-900"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      )}

      {/* Title */}
      <div className="w-full flex items-start justify-start">
        <span
          className={`text-base sm:text-lg font-bold tracking-tight leading-snug transition-colors duration-200 ${isActive
              ? "text-zinc-950"
              : "text-zinc-800 group-hover:text-blue-600"
            }`}
        >
          {title}
        </span>
      </div>

      {/* View Service Button */}
      <div className="w-full pt-1 flex items-center justify-between">
        <Link
          href={`/services/${slug}`}
          onClick={(e) => {
            // Allow navigation to proceed without blocking
            e.stopPropagation();
          }}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shadow-2xs group/btn bg-white border ${isActive
              ? "border-zinc-300 hover:border-zinc-900 text-zinc-900 hover:bg-zinc-50 hover:shadow-xs"
              : "border-zinc-200 hover:border-zinc-400 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 hover:shadow-xs"
            }`}
        >
          <span>View Service</span>
          <svg
            className="w-3.5 h-3.5 text-zinc-600 group-hover/btn:text-zinc-900 group-hover/btn:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
