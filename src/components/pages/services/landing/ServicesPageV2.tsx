"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Search,
  FileText,
  Shield,
  CheckCircle2,
  MapPin,
  BookOpen,
  Plane,
  Wallet,
  Briefcase,
  Home,
  GraduationCap,
  ClipboardCheck,
  Mic,
} from "lucide-react";
import TrustBarSection from "@/components/homev2/TrustBarSection";

const WHATSAPP_LINK =
  "https://wa.me/447747525946?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20services";

/* ── Stage & Service Data ── */

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link: string;
  ctaLabel: string;
  ctaSecondary?: { label: string; link: string };
  badge?: string;
}

interface Stage {
  number: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  services: ServiceCard[];
}

const STAGES: Stage[] = [
  {
    number: 1,
    title: "Decide",
    subtitle: "Clarify your options and eligibility",
    icon: <Search size={18} />,
    services: [
      {
        title: "Eligibility & Shortlist",
        description: "Field, course, and budget fit clarified.",
        icon: <Search size={20} />,
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        link: "/book",
        ctaLabel: "View service",
        ctaSecondary: { label: "Get my shortlist", link: "/book" },
      },
    ],
  },
  {
    number: 2,
    title: "Prepare",
    subtitle: "Applications, documents, and readiness",
    icon: <FileText size={18} />,
    services: [
      {
        title: "Admissions Support",
        description: "Application, documents, timeline managed.",
        icon: <GraduationCap size={20} />,
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
        link: "/book",
        ctaLabel: "View service",
        ctaSecondary: { label: "Get my shortlist", link: "/book" },
      },
      {
        title: "Immigration Support",
        description: "Regulated. Disciplined. Clear scope.",
        icon: <Shield size={20} />,
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
        link: "/book",
        ctaLabel: "View service",
        badge: "IAA Regulated",
      },
    ],
  },
  {
    number: 3,
    title: "Secure",
    subtitle: "Test prep, documents, and compliance",
    icon: <CheckCircle2 size={18} />,
    services: [
      {
        title: "IELTS & Interview Preparation",
        description: "Plan, mocks, and feedback.",
        icon: <Mic size={20} />,
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
        link: "/services/ielts-interview-prep",
        ctaLabel: "View service",
        ctaSecondary: {
          label: "Get my plan",
          link: "/services/ielts-interview-prep#prep-plan",
        },
      },
      {
        title: "Free IELTS Resources",
        description: "Video lessons and practice materials, free.",
        icon: <BookOpen size={20} />,
        image:
          "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
        link: "/services/free-ielts-service",
        ctaLabel: "Access free materials",
      },
      {
        title: "Document Readiness & Compliance Check",
        description: "Submission-ready pack for admissions and visa.",
        icon: <ClipboardCheck size={20} />,
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
        link: "/book",
        ctaLabel: "View service",
        ctaSecondary: { label: "Get my plan", link: "/book" },
      },
    ],
  },
  {
    number: 4,
    title: "Settle",
    subtitle: "Arrive, set up, and start working",
    icon: <Home size={18} />,
    services: [
      {
        title: "Accommodation",
        description: "Shortlisted options by city and budget.",
        icon: <Home size={20} />,
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        link: "/services/accommodation",
        ctaLabel: "View service",
        ctaSecondary: {
          label: "Get my plan",
          link: "/services/accommodation",
        },
      },
      {
        title: "Air Ticketing",
        description: "Route plan, baggage, and arrival logistics.",
        icon: <Plane size={20} />,
        image:
          "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=800&q=80",
        link: "/services/air-ticketing",
        ctaLabel: "View service",
        ctaSecondary: {
          label: "Get my plan",
          link: "/services/air-ticketing#travel-plan",
        },
      },
      {
        title: "Financial Help",
        description: "Budget framework and funding pathways.",
        icon: <Wallet size={20} />,
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
        link: "/services/financial-help",
        ctaLabel: "View service",
        ctaSecondary: {
          label: "Get my plan",
          link: "/services/financial-help#finance-plan",
        },
      },
      {
        title: "Part-time Work Support",
        description: "City-centred roles, no guarantees.",
        icon: <Briefcase size={20} />,
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
        link: "/services/part-time-work",
        ctaLabel: "View service",
        ctaSecondary: {
          label: "Get my plan",
          link: "/services/part-time-work#work-plan",
        },
      },
    ],
  },
];

const DISCLAIMERS = [
  {
    label: "Immigration:",
    text: "IAA regulated (Org Reg. F202537807)",
  },
  {
    label: "Finance:",
    text: "Not a lender. Third party approvals",
  },
  {
    label: "Work:",
    text: "No job guarantees",
  },
];

/* ── Component ── */

const ServicesPageV2 = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════════ HERO + TRUST BAR + YOUR JOURNEY (all in one screen) ═══════════════ */}
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative flex items-center overflow-hidden flex-1">
          <Image
            src="/1.jpg"
            alt="Big Ben and Houses of Parliament London at golden hour"
            fill
            quality={90}
            className="object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-transparent" />

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#D4AF37]" />
                <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase">
                  Our Services
                </p>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight mb-4">
                End-to-End Support
                <br />
                <span className="text-[#D4AF37]">London Led</span>
              </h1>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-1">
                One team. One process.
              </p>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6 max-w-xl">
                The support you need from shortlist to settlement, structured,
                regulated where required, and always honest about what we can
                and cannot do.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <a
                  href="#stages"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-semibold rounded-lg transition-colors text-sm"
                >
                  Get My Shortlist
                  <ArrowRight size={14} />
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  <MessageCircle size={14} className="text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar Section */}
        <TrustBarSection />

        {/* Your Journey - Stage Navigation */}
        <section className="py-3 sm:py-4 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              {/* Left label - hidden on mobile */}
              <p className="hidden lg:block text-sm font-medium text-gray-500">
                Your Journey
              </p>

              {/* Stage Navigation */}
              <div className="flex-1 flex items-center justify-center">
                <div className="inline-flex items-center bg-[#0f2554] rounded-xl p-1 sm:p-1.5 gap-1 sm:gap-2 border border-[#1a3b85]/50 shadow-lg">
                  {STAGES.map((stage, index) => {
                    const isActive = activeStage === stage.number;
                    const isShowingAll = activeStage === null;
                    return (
                      <React.Fragment key={stage.number}>
                        <button
                          onClick={() =>
                            setActiveStage(
                              activeStage === stage.number ? null : stage.number
                            )
                          }
                          className={`group relative flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                            isActive
                              ? "bg-[#D4AF37] text-[#0f2554] shadow-lg shadow-[#D4AF37]/30"
                              : isShowingAll
                              ? "bg-[#1a3b85] text-white shadow-sm hover:bg-[#234a9a]"
                              : "text-white/60 hover:text-white hover:bg-[#1a3b85]/50"
                          }`}
                        >
                          <span
                            className={`flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full text-[10px] sm:text-xs font-bold transition-all ${
                              isActive
                                ? "bg-[#0f2554]/20 text-[#0f2554]"
                                : isShowingAll
                                ? "bg-white/20 text-white"
                                : "bg-white/10 text-white/60 group-hover:bg-white/20 group-hover:text-white"
                            }`}
                          >
                            {stage.number}
                          </span>
                          <span className="hidden sm:block">{stage.title}</span>
                          <span className="sm:hidden text-[10px]">{stage.title.slice(0, 3)}</span>
                          
                          {/* Active indicator dot */}
                          {isActive && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full" />
                          )}
                        </button>
                        
                        {/* Connector line between stages */}
                        {index < STAGES.length - 1 && (
                          <div className="hidden md:flex items-center px-0.5">
                            <div className={`w-4 h-0.5 rounded-full transition-colors ${
                              isShowingAll || (activeStage && activeStage > stage.number)
                                ? "bg-[#D4AF37]/40"
                                : "bg-white/20"
                            }`} />
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Show All button */}
              <button
                onClick={() => setActiveStage(null)}
                className={`hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeStage === null
                    ? "bg-[#1a3b85] text-white border border-[#D4AF37]/30"
                    : "text-gray-500 hover:text-white hover:bg-[#1a3b85]"
                }`}
              >
                {activeStage === null ? (
                  <>
                    <CheckCircle2 size={12} />
                    All Stages
                  </>
                ) : (
                  "Show All"
                )}
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* ═══════════════ STAGES CONTENT (min-h-screen) ═══════════════ */}
      <section id="stages" className="scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-gray-50 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            {STAGES.filter(
              (s) => activeStage === null || activeStage === s.number
            ).map((stage) => (
              <div key={stage.number}>
                {/* Stage Header */}
                <div className="flex items-start gap-4 mb-6 sm:mb-8">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#1a3b85] text-white flex-shrink-0">
                    {stage.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wide mb-1">
                      Stage {stage.number}
                    </p>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                      {stage.title}
                    </h2>
                    <p className="text-gray-500 text-sm mt-0.5">
                      {stage.subtitle}
                    </p>
                  </div>
                </div>

                {/* Service Cards Grid */}
                <div
                  className={`grid gap-4 sm:gap-5 ${
                    stage.services.length === 1
                      ? "grid-cols-1 max-w-md"
                      : stage.services.length === 2
                      ? "grid-cols-1 sm:grid-cols-2 max-w-3xl"
                      : stage.services.length === 4
                      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {stage.services.map((service, i) => (
                    <div
                      key={i}
                      className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
                    >
                      {/* Image Section */}
                      <div className="relative h-36 sm:h-40 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        {service.badge && (
                          <div className="absolute top-3 right-3 px-2 py-1 rounded bg-[#D4AF37] text-[#0d1b3e] text-[10px] font-bold uppercase tracking-wide flex items-center gap-1">
                            <Shield size={10} />
                            {service.badge}
                          </div>
                        )}

                        <div className="absolute bottom-3 left-3">
                          <div className="w-9 h-9 rounded-lg bg-white/90 flex items-center justify-center text-[#1a3b85]">
                            {service.icon}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">
                          {service.description}
                        </p>

                        <div className="space-y-2">
                          <Link
                            href={service.link}
                            className="flex items-center justify-center gap-2 w-full px-3 py-2.5 bg-[#1a3b85] hover:bg-[#152d6b] text-white text-xs font-semibold rounded-lg transition-colors"
                          >
                            {service.ctaLabel}
                            <ArrowRight size={12} />
                          </Link>

                          {service.ctaSecondary && (
                            <Link
                              href={service.ctaSecondary.link}
                              className="flex items-center justify-center gap-2 w-full px-3 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg transition-colors"
                            >
                              {service.ctaSecondary.label}
                              <ArrowRight size={12} />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ DISCLAIMERS BAR ═══════════════ */}
      <section className="py-4 sm:py-5 bg-white border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            {DISCLAIMERS.map((item, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm text-gray-500"
              >
                <span className="font-semibold text-[#1a3b85]">
                  {item.label}
                </span>{" "}
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BOTTOM CTA ═══════════════ */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#0f2554]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
              Not sure what you need?
            </h2>
            <p className="text-white/60 text-sm sm:text-base mb-8">
              Get a shortlist of the right services in 2 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-semibold rounded-lg transition-colors text-sm sm:text-base"
              >
                Get My Shortlist
                <ArrowRight size={16} />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-4">
              {[
                {
                  icon: <Shield size={12} />,
                  text: "IAA Regulated F202537807",
                },
                {
                  icon: <CheckCircle2 size={12} />,
                  text: "100+ Google Reviews",
                },
                {
                  icon: <MapPin size={12} />,
                  text: "128 City Road, London EC1V 2NX",
                },
              ].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-white/50 text-xs"
                >
                  <span className="text-[#D4AF37]/70">{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>
            <p className="text-white/40 text-xs">
              WhatsApp +44 7747 525946 · info@uniguru.co.uk
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPageV2;
