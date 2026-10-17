"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function FooterSection() {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="w-full relative z-20 border-t border-zinc-200/80 bg-zinc-50/70 pt-12 sm:pt-16 pb-24 md:pb-12 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Call To Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 text-white rounded-2xl sm:rounded-[28px] p-6 sm:p-12 mb-12 sm:mb-16 shadow-2xl overflow-hidden border border-zinc-800"
        >
          {/* Subtle decorative glow */}
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-xl">
              <span className="inline-block text-xs uppercase tracking-widest text-blue-400 font-bold mb-2 sm:mb-3">
                Ready for the Next Level?
              </span>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Transform Your Resume. Land More Interviews.
              </h3>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full md:w-auto gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#0A66C2] hover:bg-[#004182] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white flex items-center justify-center text-[#0A66C2] font-black text-xs sm:text-sm group-hover:scale-105 transition-transform">
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
              High-impact, ATS-optimized executive resumes crafted with 25+ years of corporate leadership and talent acquisition expertise.
            </p>
            <div className="flex items-center gap-2 mt-1 text-xs text-zinc-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Available for 1-on-1 Consultations</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600">
              <li>
                <a
                  href="#top"
                  onClick={(e) => scrollToSection(e, "top")}
                  className="hover:text-blue-600 transition-colors inline-block cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="hover:text-blue-600 transition-colors inline-block cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#journey"
                  onClick={(e) => scrollToSection(e, "journey")}
                  className="hover:text-blue-600 transition-colors inline-block cursor-pointer"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  onClick={(e) => scrollToSection(e, "benefits")}
                  className="hover:text-blue-600 transition-colors inline-block cursor-pointer"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="hover:text-blue-600 transition-colors inline-block cursor-pointer"
                >
                  About Mohammed
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600">
              <li>
                <Link
                  href="/services/professional-resume"
                  className="hover:text-blue-600 transition-colors inline-block"
                >
                  Professional Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ats-friendly-resume"
                  className="hover:text-blue-600 transition-colors inline-block"
                >
                  ATS Friendly Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cover-letter"
                  className="hover:text-blue-600 transition-colors inline-block"
                >
                  Cover Letter & Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Action / Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
                Quick Actions
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                Personalized resume crafting for applicants across the UAE, Middle East, and globally.
              </p>
            </div>

            <button
              onClick={(e) => scrollToSection(e, "top")}
              className="inline-flex items-center justify-between w-full sm:w-fit px-4 py-2.5 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 text-zinc-700 hover:text-zinc-900 text-xs sm:text-sm font-semibold transition-all shadow-2xs group cursor-pointer"
            >
              <span>Back to Top</span>
              <svg
                className="w-4 h-4 ml-2 text-zinc-400 group-hover:text-zinc-900 group-hover:-translate-y-0.5 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
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
