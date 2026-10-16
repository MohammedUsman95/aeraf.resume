"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function AboutSection() {
  const highlights = [
    {
      title: "20+ Years of Corporate Leadership",
      desc: "Extensive experience managing business divisions, evaluating talent, and leading hiring processes.",
    },
    {
      title: "Insider Hiring Board Perspective",
      desc: "Having recruited and evaluated candidates firsthand, I know what employers look for in a strong resume.",
    },
    {
      title: "Bespoke & Uniquely Handcrafted",
      desc: "Every resume is tailored to highlight your career journey, achievements, and professional strengths.",
    },
    {
      title: "Direct 1-on-1 Strategic Collaboration",
      desc: "Work directly with me to refine your resume and accurately showcase your experience and value.",
    },
  ];

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <div className="bg-gradient-to-b from-zinc-50/80 to-white border border-zinc-200/90 rounded-[32px] p-8 sm:p-12 md:p-16 shadow-[0_10px_35px_-8px_rgba(0,0,0,0.06)] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          {/* Left Column: Image & Experience Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Main Photo Frame */}
              <div className="relative aspect-[4/5] w-full rounded-[28px] overflow-hidden border-2 border-white shadow-2xl bg-zinc-100 ring-1 ring-zinc-200/70">
                <Image
                  src="/aeraf-portrait.png"
                  alt="Mohammed Aeraf - Resume Strategist & Corporate Veteran"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-bold text-lg leading-tight">Mohammed Aeraf</p>
                  <p className="text-zinc-300 text-xs font-medium mt-0.5">
                    Senior Corporate Veteran & Executive Resume Strategist
                  </p>
                </div>
              </div>

              {/* Floating Pill Badge: 20+ Years Corporate Exp */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md border border-zinc-200/80 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-sm flex-shrink-0">
                  20+
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                    Experience
                  </p>
                  <p className="text-sm font-bold text-zinc-900 leading-none mt-0.5">
                    Years Corporate
                  </p>
                </div>
              </motion.div>


            </div>
          </motion.div>

          {/* Right Column: Bio & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 text-white text-xs sm:text-sm font-medium w-fit mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              About Me
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              20+ Years in Corporate Leadership,{" "}
              <span className="text-blue-600">Now Powering Your Career Growth</span>
            </h2>

            {/* Intro paragraph */}
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mt-4">
              A great resume doesn&apos;t just list experience—it communicates your value and gets you noticed.
            </p>

            {/* Points from wireframe */}
            <div className="mt-7 space-y-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-zinc-900">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA action row */}
            <div className="mt-8 pt-6 border-t border-zinc-200/80 flex flex-wrap items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-5 h-5 rounded bg-white text-[#0A66C2] flex items-center justify-center font-bold text-xs">
                  in
                </div>
                Connect With Me on LinkedIn
              </a>
              <span className="text-xs sm:text-sm text-zinc-500 font-medium">
                ⚡ Direct 1-on-1 consultations
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
