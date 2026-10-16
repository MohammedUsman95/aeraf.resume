"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Senior Product Manager",
    company: "Tier-1 Tech",
    avatar: "/Clients/face-1.jpg",
    rating: 5,
    quote:
      "I had been applying for 4 months with zero responses. Aeraf restructured my entire career story using quantified metrics. Within 3 weeks of uploading my new CV, I had interviews lined up with 3 major enterprise companies and accepted a Senior PM role!",
  },
  {
    name: "David Chen",
    role: "Engineering Director",
    company: "Fintech Leader",
    avatar: "/Clients/face-2.jpg",
    rating: 5,
    quote:
      "Working with Mohammed was an absolute game changer. His 20+ years of corporate background was immediately evident. He knew exactly what executive search committees look for and positioned my technical leadership flawlessly.",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Strategist",
    company: "Global Brands",
    avatar: "/Clients/face-3.jpg",
    rating: 5,
    quote:
      "The ATS optimization made an immediate difference. My previous resume wasn't getting past the automated screeners. Aeraf revamped both my CV and cover letter, and recruiters started reaching out to me directly on LinkedIn within days.",
  },
];

export default function WrittenTestimonials() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24 relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
          Client Feedback
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
          Hear It From Our Candidates
        </h2>
      </motion.div>

      {/* Clean & Simple Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            className="bg-white rounded-3xl p-7 border border-zinc-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_-4px_rgba(0,0,0,0.08)] hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-zinc-700 text-sm leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Author Profile */}
            <div className="pt-4 border-t border-zinc-100 flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-zinc-200 bg-zinc-100 flex-shrink-0">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </p>
                <p className="text-xs text-zinc-500 font-medium">
                  {item.role} • {item.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
