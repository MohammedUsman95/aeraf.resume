"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function FooterSection() {
  return (
    <footer className="w-full relative z-20 border-t border-zinc-200/80 bg-zinc-50/70 pt-16 pb-12 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Call To Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 text-white rounded-[28px] p-8 sm:p-12 mb-16 shadow-2xl overflow-hidden border border-zinc-800"
        >
          {/* Subtle decorative glow */}
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="inline-block text-xs uppercase tracking-widest text-blue-400 font-bold mb-3">
                Ready for the Next Level?
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Transform Your Resume. Land More Interviews.
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-2.5 leading-relaxed">
                Take the guesswork out of your job search. Work directly with a 20+ year corporate veteran to craft an irresistible CV.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-[#0A66C2] hover:bg-[#004182] text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#0A66C2] font-black text-sm group-hover:scale-105 transition-transform">
                  in
                </div>
                <span>DM on LinkedIn</span>
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
              </a>
            </div>
          </div>
        </motion.div>

        {/* Navigation & Branding Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-200">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zinc-200 bg-white flex-shrink-0 shadow-xs">
                <Image
                  src="/aeraf.jpeg"
                  alt="Mohammed Aeraf"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="relative">
                <span className="font-bold text-xl tracking-tight text-zinc-900">
                  aeraf.resume
                </span>
                <div className="h-[2px] w-full bg-red-500 rounded-full mt-0.5" />
              </div>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-sm mt-2">
              High-impact, ATS-optimized executive resumes crafted by 20+ years of corporate leadership and talent acquisition expertise.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-600 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="hover:text-blue-600 transition-colors">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-600 transition-colors">
                    About Me
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
                Services
              </h4>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="hover:text-zinc-900">Professional CV</li>
                <li className="hover:text-zinc-900">ATS Optimization</li>
                <li className="hover:text-zinc-900">Cover Letters</li>
                <li className="hover:text-zinc-900">LinkedIn Revamp</li>
              </ul>
            </div>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
              Direct Contact
            </h4>
            <p className="text-xs text-zinc-500 mb-4 leading-relaxed">
              Have questions about your resume or want a direct consultation? Reach out anytime via LinkedIn.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-blue-200 hover:border-blue-400 bg-white hover:bg-blue-50/50 shadow-xs transition-colors text-zinc-800 text-sm font-semibold w-fit"
            >
              <div className="w-6 h-6 rounded bg-[#0A66C2] flex items-center justify-center text-white font-bold text-xs">
                in
              </div>
              <span>DM on LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 aeraf.resume. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-medium">
            Designed for ambitious career achievers.
          </p>
        </div>
      </div>
    </footer>
  );
}
