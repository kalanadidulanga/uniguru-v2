"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Video,
  FileText,
  ArrowRight,
  MessageCircle,
  Shield,
  CheckCircle2,
  MapPin,
  PenTool,
  Mic,
  Headphones,
  Download,
  ExternalLink,
  GraduationCap,
  Target,
} from "lucide-react";
import TrustBarSection from "@/components/homev2/TrustBarSection";
import { COMPANY_INFO } from "@/constants/data";

const GOOGLE_DRIVE_LINK =
  "https://drive.google.com/drive/folders/1oiNxjDb-BUZG-1COPZKXj7vYvVhxHxc5?usp=sharing";

const WHAT_YOU_GET = [
  {
    icon: <Video size={24} />,
    title: "Video lessons",
    description:
      "Comprehensive tutorials covering all 4 IELTS modules by expert trainers.",
  },
  {
    icon: <FileText size={24} />,
    title: "Practice materials",
    description:
      "Downloadable worksheets, mock tests, and sample answers.",
  },
  {
    icon: <Target size={24} />,
    title: "Expert strategies",
    description:
      "Proven techniques to improve band scores across each module.",
  },
  {
    icon: <Download size={24} />,
    title: "Free access forever",
    description:
      "All materials available at no cost  - download and study at your pace.",
  },
];

const MODULES = [
  {
    icon: <BookOpen size={22} />,
    title: "Reading",
    description:
      "Academic and general reading passages. Improve skimming, scanning, and comprehension techniques.",
    image: "/images/services/free-ielts-service/Reading.png",
    bg: "bg-[#1a3b85]/5",
  },
  {
    icon: <PenTool size={22} />,
    title: "Writing",
    description:
      "Master Task 1 and Task 2. Learn essay structure, coherence, and grammar range for higher scores.",
    image: "/images/services/free-ielts-service/Writing.png",
    bg: "bg-[#D4AF37]/5",
  },
  {
    icon: <Mic size={22} />,
    title: "Speaking",
    description:
      "Build confidence in speaking. Common topics, fluency practice, and pronunciation coaching.",
    image: "/images/services/free-ielts-service/Speaking.png",
    bg: "bg-[#1a3b85]/5",
  },
  {
    icon: <Headphones size={22} />,
    title: "Listening",
    description:
      "Sharpen your listening accuracy with timed practice, note-taking, and answer-matching drills.",
    image: null,
    bg: "bg-[#D4AF37]/5",
  },
];

const WHY_FREE = [
  "Quality IELTS preparation should be accessible to everyone",
  "Materials created by experienced IELTS trainers",
  "No hidden charges, no sign-up walls",
  "Study at your own pace, on your own schedule",
];

const FreeIeltsServicePageV2 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════════ 1) HERO ═══════════════ */}
      <div className="min-h-screen flex flex-col">
        <section className="relative flex-1 flex items-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=2000&q=90"
            alt="Student studying with books and notes for IELTS preparation"
            fill
            unoptimized
            quality={90}
            className="object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <BookOpen size={16} className="text-[#D4AF37]" />
                <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                  Free IELTS Resources
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6 sm:mb-8">
                Master IELTS with
                <br />
                <span className="text-[#D4AF37]">
                  free resources
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-3 max-w-2xl">
                Comprehensive, cost-free IELTS preparation materials  - from
                practice tests to expert video lessons.
              </p>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-2xl">
                We believe quality education should be accessible to everyone.
                Download worksheets, watch tutorials, and practise at your own
                pace  - completely free.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
                {[
                  "4 modules covered",
                  "Video lessons + worksheets",
                  "100% free  - no sign-up",
                ].map((chip, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2.5 text-white/90 text-sm font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    {chip}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#modules"
                  className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-bold rounded-lg transition-all duration-200 text-sm shadow-md"
                >
                  Start Learning
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <Link
                  href={GOOGLE_DRIVE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-lg transition-all duration-200 text-sm border border-white/30"
                >
                  <Download size={18} className="text-[#D4AF37]" />
                  Access Free Materials
                </Link>
              </div>

              <p className="text-xs sm:text-sm text-white/40 max-w-lg">
                All materials are free. For personalised coaching, see our{" "}
                <Link
                  href="/services/ielts-interview-prep"
                  className="text-[#D4AF37]/70 hover:text-[#D4AF37] underline underline-offset-2"
                >
                  IELTS &amp; Interview Prep
                </Link>{" "}
                service.
              </p>
            </div>
          </div>
        </section>

        {/* 2) Trust Bar */}
        <TrustBarSection />
      </div>

      {/* ═══════════════ 3) WHAT YOU GET ═══════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 mb-4">
              <BookOpen size={14} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                Free Resources
              </span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              What you get
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {WHAT_YOU_GET.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1a3b85] text-white mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1a3b85] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 4) WHY FREE ═══════════════ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="inline-flex items-center gap-2 mb-4">
                <Shield size={14} className="text-[#D4AF37]" />
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                  Why Free
                </span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight mb-6">
                Why we offer this for free
              </h2>
              <div className="space-y-4">
                {WHY_FREE.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-green-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href={GOOGLE_DRIVE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[#1a3b85] font-semibold text-sm hover:text-[#D4AF37] transition-colors"
                >
                  Access Free Materials
                  <ExternalLink
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            {/* Images */}
            <div className="relative h-[400px] w-full hidden lg:block">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 z-10 border-4 border-white">
                <Image
                  src="/images/services/free-ielts-service/02.png"
                  alt="IELTS studying"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500 z-0 border-4 border-white">
                <Image
                  src="/images/services/free-ielts-service/01.png"
                  alt="IELTS materials"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:hidden w-full h-64 relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/services/free-ielts-service/01.png"
                alt="IELTS materials"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 5) COURSE MODULES ═══════════════ */}
      <section id="modules" className="scroll-mt-20 py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 mb-4">
              <GraduationCap size={14} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                Study Material
              </span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              Course modules
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3 max-w-lg mx-auto">
              Focused preparation for every part of the IELTS exam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {MODULES.map((mod, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
              >
                {/* Module image or icon */}
                {mod.image ? (
                  <div
                    className={`relative h-44 ${mod.bg} flex items-center justify-center overflow-hidden`}
                  >
                    <Image
                      src={mod.image}
                      alt={`${mod.title} module`}
                      fill
                      unoptimized
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div
                    className={`h-44 ${mod.bg} flex items-center justify-center`}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#1a3b85] text-white flex items-center justify-center">
                      {mod.icon}
                    </div>
                  </div>
                )}

                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-[#1a3b85] mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href={GOOGLE_DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-bold rounded-lg transition-all duration-200 text-sm shadow-md"
            >
              <Download size={18} />
              Access All Free Materials
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ 6) UPGRADE CTA ═══════════════ */}
      <section className="py-16 sm:py-20 bg-[#0f2554] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 mb-4 justify-center">
              <Target size={14} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                Need More?
              </span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
              Want personalised coaching?
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              These free resources are a great starting point. If you need a
              diagnostic, personalised plan, mock practice with feedback, and
              interview coaching  - our IELTS &amp; Interview Prep service is
              built for that.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link
                href="/services/ielts-interview-prep"
                className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-bold rounded-lg transition-all duration-200 text-sm shadow-md"
              >
                Get My Prep Plan
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-lg transition-all duration-200 text-sm border border-white/30"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust line */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10">
              {[
                { icon: <Shield size={14} />, text: `IAA Regulated | ${COMPANY_INFO.iaaReg}` },
                { icon: <CheckCircle2 size={14} />, text: `${COMPANY_INFO.googleReviews} Google Reviews` },
                { icon: <MapPin size={14} />, text: COMPANY_INFO.address },
              ].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 text-white/50 text-xs sm:text-sm"
                >
                  <span className="text-[#D4AF37]/60">{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>

            <p className="text-white/40 text-xs mt-4">
              WhatsApp {COMPANY_INFO.phone} | {COMPANY_INFO.email}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeIeltsServicePageV2;
