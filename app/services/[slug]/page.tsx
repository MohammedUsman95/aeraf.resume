import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/services-data";
import KineticGrid from "@/components/ui/kinetic-grid";
import FooterSection from "@/components/footer-section";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | aeraf.resume`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const allServices = Object.values(servicesData);

  return (
    <KineticGrid className="bg-white text-zinc-900 font-sans min-h-screen">
      {/* Top Navigation Bar */}
      <header className="w-full px-6 py-5 md:px-12 flex items-center justify-between border-b border-zinc-200/50 bg-white/70 backdrop-blur-md sticky top-0 z-30">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zinc-200 bg-white flex-shrink-0 shadow-xs">
            <Image
              src="/aeraf.jpeg"
              alt="Mohammed Aeraf"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <div className="relative">
            <span className="font-bold text-xl tracking-tight text-zinc-900 group-hover:text-blue-600 transition-colors">
              aeraf.resume
            </span>
            <div className="h-[2px] w-full bg-red-500 rounded-full mt-0.5" />
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/#services"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-600 hover:text-zinc-900 px-3.5 py-2 rounded-xl hover:bg-zinc-100 transition-colors"
          >
            ← All Services
          </Link>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-semibold shadow-xs transition-colors"
          >
            <div className="w-5 h-5 rounded bg-white text-[#0A66C2] flex items-center justify-center font-bold text-xs">
              in
            </div>
            <span>DM on LinkedIn</span>
          </a>
        </div>
      </header>

      {/* Main Service Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-6">
          <Link href="/" className="hover:text-zinc-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#services" className="hover:text-zinc-900 transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-zinc-900 font-semibold">{service.title}</span>
        </div>

        {/* Hero Section of Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-16 md:pb-20 border-b border-zinc-200">
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              {service.badge}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 leading-[1.15]">
              {service.title}
            </h1>

            <p className="text-base sm:text-xl font-medium text-zinc-600 mt-4 leading-relaxed">
              {service.tagline}
            </p>

            <p className="text-sm sm:text-base text-zinc-500 mt-3 leading-relaxed">
              {service.overview}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-xl transition-all"
              >
                <span>Request This Service</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#templates"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-zinc-300 hover:border-zinc-400 bg-white hover:bg-zinc-50 text-zinc-800 font-semibold text-sm transition-colors shadow-2xs"
              >
                <span>View Templates</span>
                <span className="text-zinc-400">↓</span>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-5 text-xs text-zinc-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600">✓</span> 48–72h Turnaround
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600">✓</span> 1-on-1 Direct Consultation
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600">✓</span> Unlimited Revisions
              </span>
            </div>
          </div>

          {/* Right Image Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative aspect-[4/3] w-full max-w-md rounded-2xl overflow-hidden border border-zinc-200/90 shadow-2xl bg-zinc-50">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 450px"
                priority
              />
            </div>
          </div>
        </div>

        {/* Use Cases Section: When is this service apt to make? */}
        <section className="py-16 md:py-20 border-b border-zinc-200">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              Strategic Use Cases
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
              {service.whenAptToMake.title}
            </h2>
            <p className="text-zinc-600 mt-2 text-sm sm:text-base">
              {service.whenAptToMake.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.whenAptToMake.scenarios.map((sc, i) => (
              <div
                key={i}
                className="bg-zinc-50/70 border border-zinc-200/80 rounded-2xl p-6 sm:p-7 hover:bg-white hover:border-zinc-300 hover:shadow-md transition-all duration-300 flex flex-col justify-start"
              >
                <div className="text-3xl mb-3.5">{sc.icon}</div>
                <h3 className="text-lg font-bold text-zinc-900 tracking-tight mb-2">
                  {sc.heading}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {sc.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 border-b border-zinc-200">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Key Advantages
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
              Tangible Benefits & Results
            </h2>
            <p className="text-zinc-600 mt-2 text-sm sm:text-base">
              Every detail is engineered to deliver measurable advantages in your job search.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-blue-600 tracking-tight block mb-2">
                    {b.metric}
                  </span>
                  <h3 className="text-base font-bold text-zinc-900 mb-1.5">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Templates Showcase */}
        <section id="templates" className="py-16 md:py-20 border-b border-zinc-200">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">
              Format Architectures
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
              Templates & Structural Styles
            </h2>
            <p className="text-zinc-600 mt-2 text-sm sm:text-base">
              Choose the architectural layout that best matches your industry, seniority, and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {service.templates.map((tpl, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Template Preview Image */}
                <div className="relative aspect-[16/11] w-full bg-zinc-100 overflow-hidden border-b border-zinc-100">
                  <Image
                    src={tpl.imageSrc}
                    alt={tpl.name}
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-zinc-800 shadow-xs border border-zinc-200">
                    Template 0{i + 1}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {tpl.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed">
                      {tpl.description}
                    </p>
                    <div className="mt-3.5 inline-block text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                      Ideal for: {tpl.bestFor}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-zinc-100 space-y-1.5">
                    {tpl.features.map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 md:py-20 border-b border-zinc-200">
          <div className="bg-zinc-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-2 block">
                  Comprehensive Package
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Everything Included in This Service
                </h2>
                <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                  Every package includes direct 1-on-1 collaboration with Mohammed Aeraf until your resume exceeds industry benchmarks.
                </p>
                <div className="mt-6">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-bold text-sm shadow-md transition-all"
                  >
                    <div className="w-5 h-5 rounded bg-white text-[#0A66C2] flex items-center justify-center font-bold text-xs">
                      in
                    </div>
                    <span>DM on LinkedIn to Book</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.includedFeatures.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-zinc-800/60 border border-zinc-700/60 rounded-xl p-4 backdrop-blur-xs"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm text-zinc-200 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Services Switcher */}
        <section className="py-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                Explore Other Services
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                Discover more solutions crafted for your career progression.
              </p>
            </div>
            <Link
              href="/#services"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
            >
              <span>Back to all services</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {allServices
              .filter((s) => s.slug !== service.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="group bg-zinc-50 border border-zinc-200/90 rounded-2xl p-6 hover:bg-white hover:border-zinc-300 hover:shadow-md transition-all flex items-center justify-between gap-4"
                >
                  <div>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                      {other.badge}
                    </span>
                    <h3 className="text-base font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                      {other.title}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1 line-clamp-1">
                      {other.tagline}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all flex-shrink-0 shadow-2xs">
                    →
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterSection />
    </KineticGrid>
  );
}
