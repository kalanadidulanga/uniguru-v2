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
  CalendarDays,
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
        link: "/services/document-readiness",
        ctaLabel: "View service",
        ctaSecondary: { label: "Get my pack", link: "/services/document-readiness#document-pack" },
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
      {
        title: "Arrival & Settlement",
        description: "First 14 days plan  - practical steps, right order.",
        icon: <CalendarDays size={20} />,
        image:
          "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
        link: "/services/arrival-settlement",
        ctaLabel: "View service",
        ctaSecondary: {
          label: "Get my plan",
          link: "/services/arrival-settlement#arrival-plan",
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
        <section className="relative flex items-center overflow-hidden flex-1 min-h-[70vh]">
          <Image
            src="/1.jpg"
            alt="Big Ben and Houses of Parliament London at golden hour"
            fill
            quality={90}
            className="object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/85 to-[#0a1628]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
          
          {/* Decorative floating elements */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse hidden lg:block" />
          <div className="absolute bottom-32 right-40 w-40 h-40 bg-[#1a3b85]/20 rounded-full blur-2xl hidden lg:block" />

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#e6c456] rounded-full" />
                <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
                  Our Services
                </p>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                End-to-End Support
                <br />
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#e6c456] to-[#D4AF37] bg-clip-text text-transparent">
                  London Led
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed mb-2 font-medium">
                One team. One process. Complete clarity.
              </p>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8 max-w-xl">
                From your first shortlist to settling into your new city  - we guide you through every stage. Structured support, regulated where required, and always transparent about what we can deliver.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-6 sm:gap-8 mb-8">
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">4</span>
                  <span className="text-xs sm:text-sm text-white/60">Journey Stages</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold text-white">10+</span>
                  <span className="text-xs sm:text-sm text-white/60">Specialist Services</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold text-white">UK</span>
                  <span className="text-xs sm:text-sm text-white/60">Based Team</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#stages"
                  className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-gradient-to-r from-[#D4AF37] to-[#e6c456] hover:from-[#c9a432] hover:to-[#D4AF37] text-[#0d1b3e] font-bold rounded-xl transition-all duration-300 text-sm sm:text-base shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/30 hover:scale-[1.02]"
                >
                  Explore All Services
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 text-sm sm:text-base border border-white/20 hover:border-white/30 backdrop-blur-sm"
                >
                  <MessageCircle size={16} className="text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar Section */}
        <TrustBarSection />

        {/* Your Journey - Stage Navigation */}
        <section className="py-4 sm:py-5 lg:py-6 bg-gradient-to-b from-white to-gray-50/80 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-40">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Desktop & Tablet Layout */}
            <div className="hidden sm:flex items-center justify-between gap-6 lg:gap-8">
              {/* Left label with decorative element */}
              <div className="hidden lg:flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-[#D4AF37] to-[#0f2554] rounded-full" />
                <div>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Navigate</p>
                  <p className="text-sm font-semibold text-gray-700">Your Journey</p>
                </div>
              </div>

              {/* Stage Navigation Pills */}
              <div className="flex-1 flex items-center justify-center">
                <div className="inline-flex items-center bg-gradient-to-r from-[#0f2554] to-[#1a3b85] rounded-2xl p-2 gap-2 border border-[#1a3b85]/30">
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
                          className={`group relative flex items-center justify-center gap-2 lg:gap-3 px-4 lg:px-5 py-2.5 lg:py-3 rounded-xl text-xs lg:text-sm font-semibold transition-all duration-300 ease-out ${
                            isActive
                              ? "bg-gradient-to-r from-[#D4AF37] to-[#e6c456] text-[#0f2554] scale-[1.02]"
                              : isShowingAll
                              ? "bg-white/15 text-white shadow-inner hover:bg-white/25 hover:scale-[1.01]"
                              : "text-white/50 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          <span
                            className={`flex items-center justify-center w-6 h-6 lg:w-7 lg:h-7 rounded-lg text-[10px] lg:text-xs font-bold transition-all ${
                              isActive
                                ? "bg-[#0f2554]/15 text-[#0f2554]"
                                : isShowingAll
                                ? "bg-white/20 text-white"
                                : "bg-white/10 text-white/50 group-hover:bg-white/15 group-hover:text-white"
                            }`}
                          >
                            {stage.number}
                          </span>
                          <span className="whitespace-nowrap">{stage.title}</span>
                          
                          {/* Active glow effect */}
                          {isActive && (
                            <span className="absolute inset-0 rounded-xl bg-[#D4AF37]/20 blur-md -z-10" />
                          )}
                        </button>
                        
                        {/* Connector dots between stages */}
                        {index < STAGES.length - 1 && (
                          <div className="hidden lg:flex items-center gap-1 px-1">
                            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              isShowingAll || (activeStage && activeStage > stage.number)
                                ? "bg-[#D4AF37]"
                                : "bg-white/20"
                            }`} />
                            <div className={`w-1 h-1 rounded-full transition-all duration-300 ${
                              isShowingAll || (activeStage && activeStage > stage.number)
                                ? "bg-[#D4AF37]/60"
                                : "bg-white/10"
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
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs lg:text-sm font-semibold transition-all duration-300 ${
                  activeStage === null
                    ? "bg-gradient-to-r from-[#0f2554] to-[#1a3b85] text-white border border-[#D4AF37]/30"
                    : "bg-gray-100 text-gray-600 hover:bg-[#0f2554] hover:text-white border border-gray-200 hover:border-transparent"
                }`}
              >
                {activeStage === null ? (
                  <>
                    <CheckCircle2 size={14} className="text-[#D4AF37]" />
                    <span>All Stages</span>
                  </>
                ) : (
                  <>
                    <span>View All</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </div>

            {/* Mobile Layout - Compact & Clean */}
            <div className="sm:hidden space-y-3">
              {/* Stage Pills - Scrollable */}
              <div className="flex items-center justify-center">
                <div className="inline-flex items-center bg-gradient-to-r from-[#0f2554] to-[#1a3b85] rounded-2xl p-1.5 gap-1 border border-[#1a3b85]/30">
                  {STAGES.map((stage) => {
                    const isActive = activeStage === stage.number;
                    const isShowingAll = activeStage === null;
                    return (
                      <button
                        key={stage.number}
                        onClick={() =>
                          setActiveStage(
                            activeStage === stage.number ? null : stage.number
                          )
                        }
                        className={`relative flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-[#D4AF37] to-[#e6c456] text-[#0f2554]"
                            : isShowingAll
                            ? "bg-white/15 text-white"
                            : "text-white/50"
                        }`}
                      >
                        <span
                          className={`flex items-center justify-center w-5 h-5 rounded-md text-[9px] font-bold ${
                            isActive
                              ? "bg-[#0f2554]/15 text-[#0f2554]"
                              : isShowingAll
                              ? "bg-white/20 text-white"
                              : "bg-white/10 text-white/50"
                          }`}
                        >
                          {stage.number}
                        </span>
                        <span>{stage.title.slice(0, 3)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Show All - Pill Style */}
              <div className="flex justify-center">
                <button
                  onClick={() => setActiveStage(null)}
                  className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-semibold transition-all duration-300 ${
                    activeStage === null
                      ? "bg-[#0f2554] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-[#0f2554] hover:text-white"
                  }`}
                >
                  {activeStage === null ? (
                    <>
                      <CheckCircle2 size={12} className="text-[#D4AF37]" />
                      <span>Viewing All Stages</span>
                    </>
                  ) : (
                    <>
                      <span>View All Stages</span>
                      <ArrowRight size={12} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ═══════════════ STAGES CONTENT ═══════════════ */}
      <section id="stages" className="scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/*
            Stage grid layout (desktop):
            Row 1: Stage 1 (1 card = 1/3) + Stage 2 (2 cards = 2/3)
            Row 2: Stage 3 (3 cards = full width)
            Row 3: Stage 4 (4 cards = full width)
          */}
          {(() => {
            const filtered = STAGES.filter(
              (s) => activeStage === null || activeStage === s.number
            );

            /* ── Render a single stage group ── */
            const renderStageGroup = (stage: Stage) => (
              <div key={stage.number}>
                {/* Stage Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0f2554] text-white text-xs font-bold flex-shrink-0">
                    {stage.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">
                      {stage.title}
                    </h2>
                    <p className="text-gray-500 text-xs truncate">
                      {stage.subtitle}
                    </p>
                  </div>
                </div>

                {/* Service Cards */}
                <div className={`grid gap-3 ${
                  stage.services.length >= 4
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    : stage.services.length === 3
                    ? "grid-cols-1 sm:grid-cols-3"
                    : stage.services.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1"
                }`}>
                  {stage.services.map((service, i) => (
                    <div
                      key={i}
                      className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
                    >
                      {/* Image */}
                      <div className="relative h-32 sm:h-36 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        {service.badge && (
                          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#D4AF37] text-[#0d1b3e] text-[10px] font-bold uppercase tracking-wide flex items-center gap-1">
                            <Shield size={10} />
                            {service.badge}
                          </div>
                        )}

                        <div className="absolute bottom-2.5 left-2.5">
                          <div className="w-8 h-8 rounded-lg bg-white/90 flex items-center justify-center text-[#1a3b85]">
                            {service.icon}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-3.5 flex flex-col flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed mb-3 flex-1">
                          {service.description}
                        </p>

                        <div className="space-y-1.5">
                          <Link
                            href={service.link}
                            className="flex items-center justify-center gap-2 w-full px-3 py-2 bg-[#1a3b85] hover:bg-[#152d6b] text-white text-xs font-semibold rounded-lg transition-colors"
                          >
                            {service.ctaLabel}
                            <ArrowRight size={11} />
                          </Link>

                          {service.ctaSecondary && (
                            <Link
                              href={service.ctaSecondary.link}
                              className="flex items-center justify-center gap-2 w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg transition-colors"
                            >
                              {service.ctaSecondary.label}
                              <ArrowRight size={11} />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );

            /* ── When a single stage is filtered, show it full-width ── */
            if (filtered.length === 1) {
              const stage = filtered[0];
              return (
                <div className={`grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 ${
                  stage.services.length >= 4 ? "lg:grid-cols-4" : stage.services.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
                }`}>
                  {stage.services.map((service, i) => (
                    <div
                      key={i}
                      className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
                    >
                      <div className="relative h-36 sm:h-40 overflow-hidden">
                        <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        {service.badge && (
                          <div className="absolute top-3 right-3 px-2 py-1 rounded bg-[#D4AF37] text-[#0d1b3e] text-[10px] font-bold uppercase tracking-wide flex items-center gap-1">
                            <Shield size={10} />
                            {service.badge}
                          </div>
                        )}
                        <div className="absolute bottom-3 left-3">
                          <div className="w-9 h-9 rounded-lg bg-white/90 flex items-center justify-center text-[#1a3b85]">{service.icon}</div>
                        </div>
                      </div>
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-snug">{service.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{service.description}</p>
                        <div className="space-y-2">
                          <Link href={service.link} className="flex items-center justify-center gap-2 w-full px-3 py-2.5 bg-[#1a3b85] hover:bg-[#152d6b] text-white text-xs font-semibold rounded-lg transition-colors">
                            {service.ctaLabel} <ArrowRight size={12} />
                          </Link>
                          {service.ctaSecondary && (
                            <Link href={service.ctaSecondary.link} className="flex items-center justify-center gap-2 w-full px-3 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg transition-colors">
                              {service.ctaSecondary.label} <ArrowRight size={12} />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }

            /* ── All stages: grid layout ── */
            // Group stages into rows based on service count
            // Row 1: Stage 1 (1 card) + Stage 2 (2 cards) = 3 units
            // Row 2: Stage 3 (3 cards) = 3 units
            // Row 3: Stage 4 (4 cards) = 4 units
            const stage1 = filtered.find((s) => s.number === 1);
            const stage2 = filtered.find((s) => s.number === 2);
            const stage3 = filtered.find((s) => s.number === 3);
            const stage4 = filtered.find((s) => s.number === 4);

            return (
              <div className="space-y-6">
                {/* Row 1: Stage 1 + Stage 2 side by side */}
                {(stage1 || stage2) && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {stage1 && (
                      <div className="lg:col-span-1">
                        {renderStageGroup(stage1)}
                      </div>
                    )}
                    {stage2 && (
                      <div className={stage1 ? "lg:col-span-2" : "lg:col-span-3"}>
                        {renderStageGroup(stage2)}
                      </div>
                    )}
                  </div>
                )}

                {/* Row 2: Stage 3  - full width, 3 cards */}
                {stage3 && (
                  <div>
                    {renderStageGroup(stage3)}
                  </div>
                )}

                {/* Row 3: Stage 4  - full width, 4 cards */}
                {stage4 && (
                  <div>
                    {renderStageGroup(stage4)}
                  </div>
                )}
              </div>
            );
          })()}
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
