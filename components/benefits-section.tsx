"use client";

import React from "react";
import { motion } from "motion/react";

interface BenefitItem {
  number: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  icon: React.ReactNode;
}

const benefitsData: BenefitItem[] = [
  {
    number: "01",
    badge: "ATS Optimization",
    title: "99% ATS Pass Rate & Keyword Engineering",
    tagline: "Never get filtered out by automated bots again",
    description:
      "Over 75% of resumes are rejected by Applicant Tracking Systems before a human ever sees them. We format, structure, and keyword-align your CV so it parses seamlessly and ranks at the top of candidate shortlists.",
    points: [
      "Custom keyword mapping for your target role",
      "Single & dual-column clean ATS parseable formats",
      "Compatible with Workday, Greenhouse, Lever & Taleo",
    ],
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    badge: "Executive Storytelling",
    title: "Recruiter-First Impact & The XYZ Formula",
    tagline: "Hook hiring managers in the first 6 seconds",
    description:
      "Recruiters spend only seconds scanning each application. We transform boring task lists into high-impact accomplishment statements using Google's XYZ formula: 'Accomplished [X] as measured by [Y], by doing [Z]'.",
    points: [
      "Quantified metrics showing ROI and bottom-line impact",
      "Promotions, leadership, and ownership spotlighted",
      "Clear, scannable visual hierarchy designed for busy eyes",
    ],
    icon: (
      <svg
        className="w-6 h-6 text-amber-500"
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
    number: "03",
    badge: "Corporate Leadership",
    title: "Crafted With 20+ Years Corporate Experience",
    tagline: "Insights directly from hiring decision-makers",
    description:
      "No generic AI prompts or unqualified freelancers. You work with a seasoned 20+ year corporate professional who knows what boardrooms, HR directors, and executives actually look for when extending job offers.",
    points: [
      "Insider perspective from someone who has hired hundreds",
      "Tailored strategies for entry-level up to C-suite roles",
      "Fast 48-72h turnaround with direct personalized collaboration",
    ],
    icon: (
      <svg
        className="w-6 h-6 text-emerald-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
        className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          The Competitive Advantage
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
          Why Job Seekers Choose{" "}
          <span className="relative inline-block">
            aeraf.resume
            <span className="absolute bottom-1.5 left-0 w-full h-[3px] bg-red-500 rounded-full" />
          </span>
        </h2>
      </motion.div>

      {/* Benefits List / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={benefit.number}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.55,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-zinc-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.12)] hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top row: Number Badge & Icon */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-10 h-10 rounded-2xl bg-zinc-900 text-white font-extrabold text-base flex items-center justify-center shadow-xs">
                    {benefit.number}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200/60">
                    {benefit.badge}
                  </span>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-zinc-50 border border-zinc-200/70 flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-xs">
                  {benefit.icon}
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm font-medium text-zinc-500 mt-1.5 mb-4">
                {benefit.tagline}
              </p>

              {/* Description */}
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                {benefit.description}
              </p>
            </div>

            {/* Key Feature Bullets */}
            <div className="pt-5 border-t border-zinc-100 space-y-2.5">
              {benefit.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 font-medium">
                  <svg
                    className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
