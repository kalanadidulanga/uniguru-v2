"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ClipboardCheck,
  FileText,
  Mic,
  Scale,
  Home,
  Briefcase,
  MessageCircle,
  ArrowRight,
  Layers,
} from "lucide-react";
import { COMPANY_INFO } from "@/constants/data";

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
      className="relative bg-[#0f2554] py-16 sm:py-20 overflow-hidden"
      aria-labelledby="how-we-help-heading"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <Layers size={14} className="text-[#D4AF37]" />
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
              Our Process
            </span>
          </div>
          <h2
            id="how-we-help-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight"
          >
            End to End Support{" "}
            <span className="text-[#D4AF37]">(London led)</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed mx-auto">
            One team, one process from shortlist to settlement, with regulated
            guidance where required.
          </p>
        </header>

        {/* Steps - 6 cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
          {steps.map((step) => (
            <article
              key={step.id}
              className="relative flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white/10 group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={step.imageUrl}
                  alt={step.imageAlt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>

              {/* Icon badge */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#1a3b85] shadow-sm flex items-center justify-center">
                  <step.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white" aria-hidden />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-semibold text-white mb-1 leading-tight">
                  {step.title}
                </h3>
                {step.subtitle && (
                  <p className="text-[10px] sm:text-xs text-[#D4AF37] font-medium mb-1.5">
                    {step.subtitle}
                  </p>
                )}
                <p className="text-[11px] sm:text-xs text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 sm:mt-14">
          <Link
            href="/book"
            className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-bold rounded-lg transition-all duration-200 text-sm shadow-md"
          >
            Get My Shortlist
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href={COMPANY_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-lg transition-all duration-200 text-sm border border-white/30"
          >
            <MessageCircle size={15} className="text-[#25D366]" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
