"use client";

import Image from "next/image";
import { motion } from "motion/react";
import KineticGrid from "@/components/ui/kinetic-grid";
import HeroFannedCards from "@/components/hero-fanned-cards";
import FeatureCardsSection from "@/components/feature-cards-section";
import WrittenTestimonials from "@/components/written-testimonials";
import HowItWorks from "@/components/ui/how-it-works";
import BenefitsSection from "@/components/benefits-section";
import AboutSection from "@/components/about-section";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <KineticGrid className="bg-white text-zinc-900 font-sans">
      {/* Top Navigation Bar */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full px-6 py-5 md:px-12 flex items-center justify-between border-b border-zinc-200/50 bg-transparent relative z-20"
      >
        {/* Top Left: Small rounded image + aeraf.resume */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-zinc-200 bg-white flex-shrink-0 shadow-xs">
            <Image
              src="/aeraf.jpeg"
              alt="Mohammed Aeraf"
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </div>
          <div className="relative">
            <span className="font-bold text-2xl tracking-tight text-zinc-900">
              aeraf.resume
            </span>
            {/* Red accent line as shown in wireframe */}
            <div className="h-[2px] w-full bg-red-500 rounded-full mt-0.5" />
          </div>
        </div>

        {/* Top Right: LinkedIn Logo + DM on Linkedin */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-blue-200 hover:border-blue-400 bg-white hover:bg-blue-50/50 shadow-xs transition-colors group text-zinc-800"
        >
          {/* LinkedIn Icon */}
          <div className="w-8 h-8 rounded bg-[#0A66C2] flex items-center justify-center text-white font-bold text-sm">
            in
          </div>
          <span className="text-base font-semibold text-zinc-800 group-hover:text-blue-600 transition-colors">
            DM on Linkedin
          </span>
        </a>
      </motion.header>

      {/* Hero Section */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-16 md:py-24 flex flex-col items-center justify-between">
        {/* Center Tagline & Social Proof */}
        <div className="flex flex-col items-center text-center w-full max-w-6xl mx-auto space-y-2">
          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[62px] font-extrabold tracking-[-0.035em] leading-tight text-center w-full whitespace-nowrap mx-auto"
          >
            <span className="text-zinc-900">Your Experience </span>
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #3245e8 0%, #5d46e2 22%, #8e3ad5 44%, #d63384 66%, #ee4b36 85%, #f98426 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Deserves a Better Resume
            </span>
          </motion.h1>

          {/* Social Proof */}
          <div className="flex flex-col items-center gap-3.5 pt-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38, ease: "easeOut" }}
              className="text-lg sm:text-xl md:text-2xl lg:text-[26px] text-zinc-800 font-bold tracking-tight"
            >
              Trusted by 30+ Job Applicants
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="flex items-center -space-x-2.5"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm bg-zinc-100 ring-1 ring-zinc-200/50">
                <Image
                  src="/Clients/face-1.jpg"
                  alt="Client"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm bg-zinc-100 ring-1 ring-zinc-200/50">
                <Image
                  src="/Clients/face-2.jpg"
                  alt="Client"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm bg-zinc-100 ring-1 ring-zinc-200/50">
                <Image
                  src="/Clients/face-3.jpg"
                  alt="Client"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm bg-zinc-100 ring-1 ring-zinc-200/50">
                <Image
                  src="/Clients/face-4.jpg"
                  alt="Client"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Motion Fanned Cards */}
        <HeroFannedCards />
      </main>
      {/* Services Section */}
      <FeatureCardsSection />

      {/* Written Testimonials Section */}
      <WrittenTestimonials />

      {/* How It Works / Journey Section */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-12 md:pt-20 pb-28 md:pb-36 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">
            Your Journey to a Better Resume
          </h2>
        </motion.div>
        <HowItWorks />
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* About Me Section */}
      <AboutSection />

      {/* Footer Section */}
      <FooterSection />
    </KineticGrid>
  );
}

