"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function AboutSection() {
  const highlights = [
    {
      title: "25+ Years Corporate & IT Background",
      desc: "Deep familiarity with modern job roles, required technical competencies, and career progression paths across industries.",
      iconBg: "bg-blue-50 text-blue-600 border-blue-200/80",
      svg: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Direct Hiring Experience",
      desc: "Having reviewed resumes and interviewed candidates firsthand, I know exactly what hiring managers look for in the first 10 seconds.",
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
      svg: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Tailored to Your Target Roles",
      desc: "No copy-pasted templates or automated generic text. Every section is written around your specific career achievements.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-200/80",
      svg: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: "1-on-1 Dedicated Guidance",
      desc: "You collaborate directly with me through drafts and revisions until you feel 100% confident in the final document.",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
      svg: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-28 relative z-10">
      <div className="bg-gradient-to-br from-white via-blue-50/20 to-white border border-blue-100/80 rounded-2xl sm:rounded-[32px] p-5 sm:p-10 md:p-16 shadow-[0_12px_45px_-10px_rgba(37,99,235,0.07)] relative overflow-hidden">
        {/* Soft atmospheric background glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center relative z-10">
          {/* Left Column: Image & Experience Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-sm">
              {/* Main Photo Frame */}
              <div className="relative aspect-[4/5] w-full rounded-2xl sm:rounded-[28px] overflow-hidden border-2 border-white shadow-xl ring-1 ring-blue-100/80 bg-zinc-100">
                <Image
                  src="/aeraf-portrait.png"
                  alt="Mohammed Aeraf - 25+ Years IT Professional & Career Consultant"
                  fill
                  className="object-cover object-top hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white">
                  <p className="font-bold text-base sm:text-lg leading-tight">Mohammed Aeraf</p>
                  <p className="text-blue-200 text-[11px] sm:text-xs font-medium mt-1">
                    25+ Years IT Veteran & Resume Consultant
                  </p>
                </div>
              </div>

              {/* Floating Badge: 25+ Years IT Exp */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                className="absolute -top-3 right-0 sm:-top-4 sm:-right-4 bg-white/95 backdrop-blur-md border border-blue-100 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2.5 sm:gap-3 scale-90 sm:scale-100 origin-top-right"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xs sm:text-sm shadow-md shadow-blue-500/25 flex-shrink-0">
                  25+
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] text-zinc-500 font-semibold uppercase tracking-wider">
                    Experience
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-none mt-0.5">
                    Years in IT
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
            {/* Heading with vibrant gradient accent */}
            <h2 className="text-2xl sm:text-4xl md:text-[38px] font-extrabold tracking-tight text-zinc-900 leading-tight">
              25+ Years in Corporate IT,{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block sm:inline">
                Positioning You for the Right Roles.
              </span>
            </h2>

            {/* Intro paragraph */}
            <p className="text-zinc-600 text-sm sm:text-lg leading-relaxed mt-3 sm:mt-4">
              Most resumes get overlooked because they read like duty lists instead of achievements. I help you translate your work history into clear, measurable impact.
            </p>

            {/* Colorful & Crisp Highlight Points */}
            <div className="mt-6 sm:mt-8 space-y-3.5 sm:space-y-5">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-3.5 group">
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl ${item.iconBg} border flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-2xs group-hover:scale-108 transition-transform duration-200`}
                  >
                    {item.svg}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA action row */}
            <div className="mt-7 sm:mt-8 pt-5 sm:pt-6 border-t border-zinc-200/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-sm sm:text-base shadow-md shadow-blue-600/15 hover:shadow-lg hover:shadow-blue-600/25 transition-all group/btn"
              >
                <div className="w-5 h-5 rounded bg-white text-[#0A66C2] flex items-center justify-center font-bold text-xs">
                  in
                </div>
                Connect With Me on LinkedIn
              </a>
              <span className="text-xs sm:text-sm text-zinc-600 font-medium flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Direct 1-on-1 collaboration
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
