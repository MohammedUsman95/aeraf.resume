"use client";

import React from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m } from "motion/react";

interface CardProps {
  number: string;
  title: string;
  description: string;
  imageSrc?: string;
  colorTheme?: "orange" | "blue" | "purple";
  className?: string;
  rotate?: string;
  index?: number;
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

const Pin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

const Card = ({
  number,
  title,
  description,
  imageSrc,
  colorTheme = "blue",
  className = "",
  rotate = "",
  index = 0,
  colors: customColors,
}: CardProps) => {
  const defaultBgColors = {
    orange: "bg-orange-50 dark:bg-orange-500/10",
    blue: "bg-blue-50 dark:bg-blue-500/10",
    purple: "bg-purple-50 dark:bg-purple-500/10",
  };
  const defaultTextColors = {
    orange: "text-orange-500 dark:text-orange-400",
    blue: "text-blue-600 dark:text-blue-400",
    purple: "text-purple-600 dark:text-purple-400",
  };
  const defaultBorderColors = {
    orange: "border-orange-100 dark:border-orange-500/20",
    blue: "border-blue-100 dark:border-blue-500/20",
    purple: "border-purple-100 dark:border-purple-500/20",
  };

  const bgColor = customColors?.bg || defaultBgColors[colorTheme];
  const textColor = customColors?.text || defaultTextColors[colorTheme];
  const borderColor = customColors?.border || defaultBorderColors[colorTheme];

  return (
    <m.div
      initial={{ opacity: 0, y: 55, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative w-full max-w-[310px] md:max-w-none md:w-[290px] mx-auto transition-transform duration-300 hover:z-30 hover:scale-105 ${rotate} ${className}`}
    >
      <div className="bg-white dark:bg-neutral-900 p-2 sm:p-2.5 rounded-[22px] sm:rounded-[26px] shadow-[0px_10px_25px_0px_#D3D3D3] dark:shadow-none border border-neutral-100 dark:border-neutral-800">
        <m.div
          initial={{ opacity: 0, scale: 0.6, y: -12 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.1 + (index % 2) * 0.1,
            ease: "easeOut",
          }}
        >
          <Pin className={`w-7 h-7 sm:w-8 sm:h-8 ${textColor} z-20 mb-2 sm:mb-3 mx-auto drop-shadow-xs`} />
        </m.div>
        <div
          className={`${bgColor} border ${borderColor} rounded-[16px] sm:rounded-[18px] p-3.5 sm:p-4 h-full flex flex-col relative overflow-hidden`}
        >
          {/* 3D Graphic Preview Card */}
          {imageSrc && (
            <m.div
              initial={{ opacity: 0, scale: 0.88, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15 + (index % 2) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full h-28 sm:h-36 rounded-xl overflow-hidden mb-3 bg-white/80 dark:bg-neutral-800/80 shadow-xs border border-white/60 dark:border-white/5 flex items-center justify-center p-2 group"
            >
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 280px, 260px"
              />
            </m.div>
          )}

          <span
            className={`${textColor} text-2xl sm:text-3xl font-handwriting mb-1`}
            style={{
              fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
            }}
          >
            {number}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-neutral-800 dark:text-neutral-100 leading-tight mb-1.5">
            {title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm/5 tracking-tight font-medium">
            {description}
          </p>
        </div>
      </div>
    </m.div>
  );
};

export interface Step {
  title: string;
  description: string;
  imageSrc?: string;
  colorTheme?: "orange" | "blue" | "purple";
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

export interface StepPosition {
  className?: string;
  rotate?: string;
}

export interface HowItWorksProps {
  features?: Step[];
  className?: string;
  stepPositions?: StepPosition[];
}

const DEFAULT_CARD_POSITIONS: StepPosition[] = [
  { className: "md:absolute md:top-0 md:left-[12%]", rotate: "rotate-0 md:rotate-6" },
  {
    className: "md:absolute md:top-[180px] md:right-[12%]",
    rotate: "rotate-0 md:-rotate-6",
  },
  { className: "md:absolute md:top-[500px] md:left-[12%]", rotate: "rotate-0 md:rotate-6" },
  {
    className: "md:absolute md:top-[700px] md:right-[12%]",
    rotate: "rotate-0 md:-rotate-6",
  },
  { className: "md:absolute md:top-[1020px] md:left-[12%]", rotate: "rotate-0 md:rotate-6" },
];

export default function HowItWorks({
  features,
  className = "",
  stepPositions,
}: HowItWorksProps) {
  const defaultFeatures: Step[] = [
    {
      title: "Choose Your Package",
      description: "Pick the resume package that suits your needs.",
      imageSrc: "/how-it-works-graphics/1.png",
      colorTheme: "purple",
    },
    {
      title: "Contact Us",
      description: "Get in touch with us to discuss your requirements.",
      imageSrc: "/how-it-works-graphics/2.png",
      colorTheme: "blue",
    },
    {
      title: "Share Your Details",
      description: "Send us your information and work experience.",
      imageSrc: "/how-it-works-graphics/3.png",
      colorTheme: "purple",
    },
    {
      title: "Review & Revisions",
      description: "Review your resume and request changes if needed.",
      imageSrc: "/how-it-works-graphics/4.png",
      colorTheme: "orange",
    },
    {
      title: "Get Your Resume",
      description: "Receive your finished resume, ready to use.",
      imageSrc: "/how-it-works-graphics/5.png",
      colorTheme: "blue",
    },
  ];

  const data = features && features.length > 0 ? features : defaultFeatures;
  const positions = stepPositions || DEFAULT_CARD_POSITIONS;

  const height = 1420;

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={`bg-transparent max-md:pt-6 max-md:pb-16 md:py-16 px-4 sm:px-8 relative ${className}`}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className="relative w-full max-w-[1000px] mx-auto flex flex-col space-y-10 md:space-y-0 md:block h-auto md:h-[var(--md-height)]"
            style={{ "--md-height": `${height}px` } as React.CSSProperties}
          >
            {data.length > 1 && (
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
                viewBox={`0 0 1000 ${height}`}
                preserveAspectRatio="none"
              >
                {(() => {
                  const pathD = data.reduce((acc, _, index) => {
                    if (index >= data.length - 1) return acc;
                    if (index === 0)
                      return "M 280 180 C 500 180, 520 360, 720 360"; // 1 -> 2
                    if (index === 1)
                      return acc + " C 880 360, 500 500, 280 680"; // 2 -> 3
                    if (index === 2)
                      return acc + " C 100 840, 520 880, 720 880"; // 3 -> 4
                    if (index === 3)
                      return acc + " C 880 880, 500 1040, 280 1200"; // 4 -> 5
                    return acc;
                  }, "");
                  return (
                    <m.path
                      d={pathD}
                      stroke="currentColor"
                      className="text-neutral-300 dark:text-neutral-700"
                      strokeWidth="2.5"
                      strokeDasharray="8 6"
                      fill="none"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{
                        strokeDashoffset: -140,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  );
                })()}
              </svg>
            )}

            {data.map((step, index) => {
              const position = positions[index % positions.length];

              return (
                <Card
                  key={step.title}
                  index={index}
                  number={`0${index + 1}`}
                  title={step.title}
                  description={step.description}
                  imageSrc={step.imageSrc}
                  colorTheme={step.colorTheme || "blue"}
                  colors={step.colors}
                  rotate={position.rotate}
                  className={position.className}
                />
              );
            })}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
