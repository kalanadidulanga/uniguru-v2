"use client";

import Image from "next/image";
import {
  ClipboardCheck,
  FileText,
  Mic,
  Scale,
  Home,
  Briefcase,
  MessageCircle,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Eligibility & Shortlist",
    description:
      "We confirm what's realistic for your profile and budget, then build your shortlist and plan.",
    icon: ClipboardCheck,
    imageUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Consultation and eligibility assessment",
  },
  {
    id: 2,
    title: "Admissions Support",
    description:
      "Structured applications, clean documentation, and timeline control so your submission is consistent.",
    icon: FileText,
    imageUrl:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
    imageAlt: "University admissions and documentation",
  },
  {
    id: 3,
    title: "IELTS & Interview Preparation",
    description:
      "Diagnostics, planning, mock sessions, and feedback designed to improve performance, not just confidence.",
    icon: Mic,
    imageUrl:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Interview and test preparation",
  },
  {
    id: 4,
    title: "Immigration Support",
    subtitle: "(IAA Regulated)",
    description:
      "Regulated guidance where required. Fixed fee discipline. Clear scope with no pressure tactics.",
    icon: Scale,
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Immigration and visa documents",
  },
  {
    id: 5,
    title: "Accommodation Shortlist",
    description:
      "Practical options aligned to city, budget, and contract terms with third party options guided.",
    icon: Home,
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Student accommodation options",
  },
  {
    id: 6,
    title: "Arrival & Work Readiness",
    description:
      "Travel planning, first week checklist, and part time work readiness system (no guarantees).",
    icon: Briefcase,
    imageUrl:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Travel and work preparation",
  },
];

const HowWeHelp = () => {
  return (
    <section
      className="relative bg-[#0f2554] py-20 sm:py-24 lg:py-28 font-sans overflow-hidden"
      aria-labelledby="how-we-help-heading"
    >
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-5 lg:px-6 xl:px-8 2xl:px-10">
        {/* Section header */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-3 sm:mb-4">
            Our Process
          </p>
          <h2
            id="how-we-help-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight leading-tight"
          >
            End to End Support{" "}
            <span className="text-[#D4AF37]">(London led)</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-3xl leading-relaxed mx-auto">
            One team, one process from shortlist to settlement, with regulated
            guidance where required.
          </p>
        </header>

        {/* Steps – 6 cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 lg:gap-4">
          {steps.map((step) => (
            <article
              key={step.id}
              className="relative flex flex-col bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white/15 group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a3b85]/30">
                <Image
                  src={step.imageUrl}
                  alt={step.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 16vw"
                />
              </div>

              {/* Icon badge */}
              <div className="absolute top-3 right-3 z-10">
                <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm border border-white/50 shadow-sm flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-[#0f2554]" aria-hidden />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1 leading-tight">
                  {step.title}
                </h3>
                {step.subtitle && (
                  <p className="text-xs text-[#D4AF37] font-medium mb-2">
                    {step.subtitle}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 sm:mt-16">
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0f2554] font-semibold rounded-full transition-colors text-sm sm:text-base shadow-lg shadow-[#D4AF37]/20">
            Get My Shortlist
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-colors text-sm sm:text-base border border-white/20">
            Book Free 15 Minute Triage
          </button>
          <a
            href={`https://api.whatsapp.com/send?phone=94770578521&text=${encodeURIComponent("Hi Uniguru! 👋 I want my UK shortlist for [intake] 🎓")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp to request your UK shortlist"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-full transition-colors text-sm sm:text-base"
          >
            <MessageCircle className="w-4 h-4" />
            Get my UK shortlist on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
