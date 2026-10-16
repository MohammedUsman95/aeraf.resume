"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  category: "tech" | "product" | "executive";
  rating: number;
  highlightMetric: string;
  beforeAfter: {
    before: string;
    after: string;
  };
  quote: string;
  verifiedBadge: string;
}

const testimonials: Testimonial[] = [
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Senior Product Manager",
    company: "Tier-1 Tech",
    avatar: "/Clients/face-1.jpg",
    category: "product",
    rating: 5,
    highlightMetric: "3 Enterprise Offers in 21 Days",
    beforeAfter: {
      before: "4 months of applications with zero callbacks",
      after: "Interviews at 3 top tech companies in 3 weeks",
    },
    quote:
      "I was stuck applying into the void for four months. Aeraf completely restructured my story using quantified metrics and Google's XYZ formula. Recruiters immediately saw my commercial impact. I accepted an offer with a 28% salary hike!",
    verifiedBadge: "Verified Offer",
  },
  {
    id: "david-chen",
    name: "David Chen",
    role: "Engineering Director",
    company: "Fintech Leader",
    avatar: "/Clients/face-2.jpg",
    category: "tech",
    rating: 5,
    highlightMetric: "+35% Comp Increase ($55k+)",
    beforeAfter: {
      before: "Technical CV read like a dry job description",
      after: "Executive portfolio highlighting $18M scale",
    },
    quote:
      "Working with Mohammed was an absolute game-changer. His 20+ years of corporate background was immediately evident. He knew the exact signals executive search committees look for and positioned my technical leadership with incredible authority.",
    verifiedBadge: "Verified Placement",
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Head of Growth & Strategy",
    company: "Global Brands",
    avatar: "/Clients/face-3.jpg",
    category: "product",
    rating: 5,
    highlightMetric: "5+ InMails / Week on LinkedIn",
    beforeAfter: {
      before: "Failing automated ATS screening software",
      after: "Top 2% candidate score across Workday & Taleo",
    },
    quote:
      "The ATS optimization made an instant impact. My previous resume wasn't getting past automated screeners. Aeraf rebuilt both my CV and executive cover letter—within 72 hours, recruiters from global brands started reaching out to me directly.",
    verifiedBadge: "Verified Offer",
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "Principal Cloud Architect",
    company: "Cloud & Infrastructure",
    avatar: "/Clients/face-4.jpg",
    category: "tech",
    rating: 5,
    highlightMetric: "Landed Dream FAANG Role",
    beforeAfter: {
      before: "Cluttered 4-page document with legacy skills",
      after: "Razor-sharp 2-page modern cloud architecture focus",
    },
    quote:
      "Most resume services write fluff that engineers laugh at. Aeraf spoke my language. He highlighted my distributed systems architecture and system resilience metrics in a way that resonated directly with VP and CTO hiring panels.",
    verifiedBadge: "Verified Placement",
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "VP of Operations",
    company: "Series C Scaleup",
    avatar: "/Clients/client-4.webp",
    category: "executive",
    rating: 5,
    highlightMetric: "Shortlisted in 14 Days",
    beforeAfter: {
      before: "Struggling to translate startup pivot into enterprise",
      after: "Positioned as high-growth scaling authority",
    },
    quote:
      "Mohammed’s 1-on-1 strategy sessions were worth 10x the price alone. He challenged me on every bullet point until each sentence proved bottom-line ROI. I went into interviews confident and closed my ideal VP role effortlessly.",
    verifiedBadge: "Executive Hire",
  },
  {
    id: "tariq-al-mansoor",
    name: "Tariq Al-Mansoor",
    role: "Lead AI / ML Engineer",
    company: "HealthTech AI",
    avatar: "/Clients/client-1.jpg",
    category: "tech",
    rating: 5,
    highlightMetric: "2 Competing Offers Signed",
    beforeAfter: {
      before: "Heavy academic jargon with no business KPIs",
      after: "Clear ROI on proprietary LLM & predictive models",
    },
    quote:
      "I had brilliant research papers but couldn't convey real-world business value to corporate hiring managers. Aeraf bridged that gap seamlessly. Within a month, I was weighing two competing offers in health tech.",
    verifiedBadge: "Verified Offer",
  },
];

const categories = [
  { id: "all", label: "All Candidates" },
  { id: "tech", label: "Tech & Engineering" },
  { id: "product", label: "Product & Growth" },
  { id: "executive", label: "Executive Leadership" },
] as const;

export default function WrittenTestimonials() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredTestimonials = testimonials.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="testimonials" className="w-full max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          Real Success Stories
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-[1.15]">
          Hear It From Our <span className="text-blue-600">Candidates</span>
        </h2>
        <p className="text-zinc-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          From overlooked applications to multiple enterprise offers. Read how our ATS-optimized, metric-driven resumes transformed their job search.
        </p>

        {/* Credibility Stats Bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-zinc-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col items-center justify-center p-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-zinc-900">4.98<span className="text-amber-500 text-xl">★</span></span>
            <span className="text-xs text-zinc-500 font-medium mt-0.5">200+ Candidates Placed</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 border-l border-zinc-200/60">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600">94%</span>
            <span className="text-xs text-zinc-500 font-medium mt-0.5">Interview Callback Rate</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 border-l border-zinc-200/60">
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-600">+35%</span>
            <span className="text-xs text-zinc-500 font-medium mt-0.5">Avg Compensation Bump</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 border-l border-zinc-200/60">
            <span className="text-2xl sm:text-3xl font-extrabold text-purple-600">&lt; 3 Wks</span>
            <span className="text-xs text-zinc-500 font-medium mt-0.5">Average Time to Offer</span>
          </div>
        </div>
      </motion.div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-zinc-900 text-white shadow-md shadow-zinc-900/10"
                  : "bg-white/80 hover:bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200/80 shadow-xs"
              }`}
            >
              {cat.label}
              {cat.id === "all" && (
                <span className={`ml-1.5 text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive ? "bg-zinc-800 text-zinc-300" : "bg-zinc-100 text-zinc-600"
                }`}>
                  {testimonials.length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Testimonials Grid with Layout Animation */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredTestimonials.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="group relative bg-white rounded-3xl p-7 border border-zinc-200/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.12)] hover:border-blue-200 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Decorative Large Background Quote Mark Watermark */}
              <div className="absolute right-4 top-3 text-zinc-100 group-hover:text-blue-50/70 transition-colors pointer-events-none -z-0 select-none">
                <svg
                  className="w-20 h-20 fill-current opacity-60"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="relative z-10">
                {/* Header: Star Rating & Verified Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current drop-shadow-xs"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item.verifiedBadge}
                  </span>
                </div>

                {/* Tangible Highlight Metric Badge */}
                <div className="mb-4 inline-block">
                  <span className="text-xs font-bold text-blue-900 bg-blue-50/90 border border-blue-200/70 px-3 py-1 rounded-xl">
                    🚀 {item.highlightMetric}
                  </span>
                </div>

                {/* Quote Body */}
                <p className="text-zinc-700 text-sm leading-relaxed mb-5 font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Before vs After Context Pill */}
                <div className="mb-6 p-3 rounded-2xl bg-zinc-50 border border-zinc-200/60 text-xs space-y-1.5">
                  <div className="flex items-start gap-1.5 text-zinc-500">
                    <span className="font-semibold text-rose-500 shrink-0">Before:</span>
                    <span className="leading-tight">{item.beforeAfter.before}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-zinc-800">
                    <span className="font-semibold text-emerald-600 shrink-0">After:</span>
                    <span className="leading-tight font-medium text-zinc-900">{item.beforeAfter.after}</span>
                  </div>
                </div>
              </div>

              {/* Author Profile Footer */}
              <div className="pt-4 border-t border-zinc-100 flex items-center gap-3 relative z-10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md bg-zinc-100 flex-shrink-0 ring-1 ring-zinc-200">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-zinc-900 group-hover:text-blue-600 transition-colors truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-zinc-500 font-medium truncate">
                    {item.role}
                  </p>
                  <span className="inline-block text-[10px] text-zinc-400 font-medium">
                    {item.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom CTA / Assurance Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
      >
        {/* Subtle accent glow */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
            Want results like these on your next application?
          </h3>
          <p className="text-zinc-400 text-sm mt-1 max-w-xl">
            100% human-crafted by a 20+ year corporate executive. Every resume is engineered to pass ATS scanners and impress hiring directors.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href="https://www.linkedin.com/in/mohammed-aeraf-b7201b17/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 text-center shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 hover:-translate-y-0.5"
          >
            DM Mohammed on LinkedIn
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-sm transition-all duration-200 text-center"
          >
            Explore Services
          </a>
        </div>
      </motion.div>
    </section>
  );
}
