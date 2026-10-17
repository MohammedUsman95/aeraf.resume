"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import KineticGrid from "@/components/ui/kinetic-grid";
import LimelightNav from "@/components/ui/limelight-nav";
import HeroFannedCards from "@/components/hero-fanned-cards";
import FeatureCardsSection from "@/components/feature-cards-section";
import WrittenTestimonials from "@/components/written-testimonials";
import HowItWorks from "@/components/ui/how-it-works";
import BenefitsSection from "@/components/benefits-section";
import AboutSection from "@/components/about-section";
import FooterSection from "@/components/footer-section";

export default function Home() {
  useEffect(() => {
    // Force browser to reset scroll position to the top upon page refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <KineticGrid className="bg-white text-zinc-900 font-sans">
      {/* Top Fixed Navigation Bar - Sticks permanently on top */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-8 md:px-12 py-2.5 sm:py-3.5 flex items-center justify-between border-b border-zinc-200/70 bg-white/90 backdrop-blur-md shadow-2xs"
      >
        {/* Top Left: Small rounded image + aeraf.resume */}
        <a href="#home" className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-zinc-200 bg-white flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
            <Image
              src="/aeraf.jpeg"
              alt="Mohammed Aeraf"
              fill
              className="object-cover"
              sizes="44px"
              priority
            />
          </div>
          <div className="relative">
            <span className="font-bold text-lg sm:text-xl md:text-2xl tracking-tight text-zinc-900">
              aeraf.resume
            </span>
            {/* Red accent line as shown in wireframe */}
            <div className="h-[2px] w-full bg-red-500 rounded-full mt-0.5" />
          </div>
        </a>

        {/* Center: Limelight Spotlight Navigation Bar connecting all sections (Desktop & Tablet) */}
        <div className="hidden md:flex items-center justify-center">
          <LimelightNav />
        </div>

        {/* Top Right: LinkedIn Logo + DM on Linkedin */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl border border-blue-200 hover:border-blue-400 bg-white hover:bg-blue-50/50 shadow-xs transition-colors group text-zinc-800"
        >
          {/* LinkedIn Icon */}
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-[#0A66C2] flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
            in
          </div>
          <span className="text-xs sm:text-sm md:text-base font-semibold text-zinc-800 group-hover:text-blue-600 transition-colors whitespace-nowrap">
            <span className="hidden sm:inline">DM on </span>LinkedIn
          </span>
        </a>
      </motion.header>

      {/* Mobile Floating Bottom Navigation Bar (Smart mobile app style) */}
      <div className="fixed bottom-3.5 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center justify-center pointer-events-auto">
        <LimelightNav className="shadow-xl border-zinc-300/80 scale-90 sm:scale-100" />
      </div>

      {/* Hero Section with top padding for fixed navbar */}
      <main id="home" className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-20 sm:pt-28 md:pt-32 pb-16 md:pb-24 flex flex-col items-center justify-between">
        {/* Center Tagline & Social Proof */}
        <div className="flex flex-col items-center text-center w-full max-w-6xl mx-auto space-y-2">
          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[62px] font-extrabold tracking-[-0.035em] leading-tight text-center w-full whitespace-normal sm:whitespace-nowrap mx-auto px-2"
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
              Trusted by 200+ Job Applicants
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
      <section id="journey" className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-12 md:pt-20 pb-16 sm:pb-28 md:pb-36 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">
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

