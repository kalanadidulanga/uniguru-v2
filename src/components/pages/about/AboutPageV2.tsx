"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  Shield,
  CheckCircle2,
  MapPin,
  ListChecks,
  FileText,
  ClipboardCheck,
  Mic,
  Plane,
  Home,
  Briefcase,
  Target,
  Users,
  Handshake,
} from "lucide-react";
import TrustBarSection from "@/components/homev2/TrustBarSection";
import { COMPANY_INFO } from "@/constants/data";

/* ── Data ── */

const SERVICES = [
  {
    icon: <ListChecks size={20} />,
    title: "Eligibility & Shortlist",
    description: "Academic fit + budget fit + credibility fit.",
  },
  {
    icon: <ClipboardCheck size={20} />,
    title: "Admissions Support",
    description: "Applications, timelines, submission readiness.",
  },
  {
    icon: <Mic size={20} />,
    title: "IELTS & Interview Preparation",
    description: "Diagnostics, mock practice, feedback loops.",
  },
  {
    icon: <Shield size={20} />,
    title: "Immigration Support (IAA Regulated)",
    description:
      "Where required; clear scope and standards-led guidance.",
  },
  {
    icon: <Home size={20} />,
    title: "Accommodation Shortlist",
    description: "Third-party options guided with contract clarity.",
  },
  {
    icon: <Briefcase size={20} />,
    title: "Arrival & Work Readiness",
    description: "First 14 days plan + job-search readiness system.",
  },
];

const PRINCIPLES = [
  {
    icon: <Target size={18} />,
    title: "Eligibility first",
    description: "Decisions based on what applies to your profile.",
  },
  {
    icon: <FileText size={18} />,
    title: "Clear deliverables",
    description: "You know what happens next.",
  },
  {
    icon: <ClipboardCheck size={18} />,
    title: "Documentation discipline",
    description: "Consistency and credibility.",
  },
  {
    icon: <Shield size={18} />,
    title: "No guarantees",
    description: "We guarantee preparation and clarity, not outcomes.",
  },
];

const LEADERSHIP = [
  {
    name: "Gamini Liyanage",
    role: "Director (Sri Lanka)",
    description: "Leads Sri Lanka operations and partner execution.",
    image: "/images/team/2.jpg",
  },
  {
    name: "Kasun Liyanage",
    role: "Head of Compliance (London)",
    description:
      "Sets standards-led delivery and compliance discipline across services.",
    image: "/images/team/3.jpg",
  },
  {
    name: "Claire Marie",
    role: "Operations Director (EU)",
    description: "Oversees execution, client experience, and process quality.",
    image: "/images/team/1.jpg",
  },
  {
    name: "Onrate.com",
    role: "Technology & Growth",
    description: "Builds systems, automation, and platform-led growth.",
    image: "/images/team/4.jpg",
  },
  {
    name: "Pasan Piyumantha",
    role: "Head of Operations",
    description:
      "Runs day-to-day delivery and conversion pipelines end-to-end.",
    image: "/images/team/6.jpg",
  },
];

/* ── Component ── */

const AboutPageV2 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════════ 1) HERO ═══════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2000&q=90"
          alt="London cityscape - Uniguru headquarters"
          fill
          unoptimized
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

        <div className="flex-1 flex items-center">
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <Users size={14} className="text-[#D4AF37]" />
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                  About Uniguru
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6">
                London-led support
                <br />
                <span className="text-[#D4AF37]">
                  for global study journeys.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-3 max-w-3xl">
                A disciplined, end-to-end process - from shortlist to settlement
                - with regulated guidance where required.
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
                {[
                  "Clear scope",
                  "Fixed deliverables",
                  "No pressure tactics",
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

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="/book"
                  className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-bold rounded-lg transition-all duration-200 text-sm shadow-md"
                >
                  Get My Shortlist
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
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
            </div>
          </div>
        </div>

        {/* 2) Trust Bar */}
        <TrustBarSection />
      </section>

      {/* ═══════════════ 3) WHO WE ARE ═══════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <Users size={14} className="text-[#D4AF37]" />
                  <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                    Who we are
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a3b85] tracking-tight mb-6">
                  Clarity, credibility,
                  <br />
                  and delivery.
                </h2>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Uniguru supports students and families through the decisions
                  and logistics of moving abroad - with a London-led standard for
                  clarity, credibility, and delivery. We prioritise
                  eligibility-led planning, disciplined documentation, and calm
                  execution.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
                  alt="Uniguru team working in London office"
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2554]/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 4) WHAT WE DO ═══════════════ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <FileText size={14} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                Services
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              End-to-End Support
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {SERVICES.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#1a3b85] text-white mb-4 sm:mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[#1a3b85] mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 5) HOW WE WORK ═══════════════ */}
      <section className="py-16 sm:py-20 bg-[#0f2554] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#D4AF37] blur-3xl" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 block">
              Our Approach
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
              How we work
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
              {PRINCIPLES.map((item, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-center text-center"
                >
                  {i < PRINCIPLES.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px+2rem)] h-px bg-gradient-to-r from-[#D4AF37]/60 to-[#D4AF37]/20" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30 mb-4 relative z-10">
                    <span className="text-[#0f2554]">{item.icon}</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-5 w-full flex-1">
                    <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 6) EXECUTIVE LEADERSHIP ═══════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <Users size={14} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                Team
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              Executive Leadership
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Top row: 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-5 sm:mb-6 lg:mb-8">
              {LEADERSHIP.slice(0, 3).map((person, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                >
                  {person.image ? (
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto mb-4 sm:mb-5 ring-2 ring-[#D4AF37]/20">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#1a3b85] to-[#0f2554] flex items-center justify-center mx-auto mb-4 sm:mb-5 ring-2 ring-[#D4AF37]/20">
                      <span className="text-xl sm:text-2xl font-bold text-[#D4AF37]">
                        {person.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                  )}
                  <h3 className="text-base sm:text-lg font-semibold text-[#1a3b85] mb-1">
                    {person.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D4AF37] font-medium mb-3">
                    {person.role}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {person.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom row: 2 cards centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-2xl lg:max-w-3xl mx-auto">
              {LEADERSHIP.slice(3).map((person, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                >
                  {person.image ? (
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto mb-4 sm:mb-5 ring-2 ring-[#D4AF37]/20">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#1a3b85] to-[#0f2554] flex items-center justify-center mx-auto mb-4 sm:mb-5 ring-2 ring-[#D4AF37]/20">
                      <span className="text-xl sm:text-2xl font-bold text-[#D4AF37]">
                        {person.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                  )}
                  <h3 className="text-base sm:text-lg font-semibold text-[#1a3b85] mb-1">
                    {person.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D4AF37] font-medium mb-3">
                    {person.role}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {person.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 7) PARTNER WITH UNIGURU ═══════════════ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Handshake size={14} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                Partners
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a3b85] tracking-tight mb-4 sm:mb-6">
              Partner with Uniguru
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10">
              We work with partners who value integrity, disciplined delivery,
              and clear client outcomes.
            </p>
            <a
              href={COMPANY_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#1a3b85] hover:bg-[#152d6b] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              Become a Partner
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ 9) FINAL CTA ═══════════════ */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#0f2554]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
              Start with clarity
            </h2>
            <p className="text-white/60 text-sm sm:text-base mb-8">
              Get a shortlist and next steps within 24–48 hours (working days).
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <a
                href="/book"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-semibold rounded-lg transition-colors text-sm sm:text-base"
              >
                Get My Shortlist
                <ArrowRight size={16} />
              </a>
              <a
                href={COMPANY_INFO.whatsapp}
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
                  text: `IAA Regulated · ${COMPANY_INFO.iaaReg}`,
                },
                {
                  icon: <CheckCircle2 size={12} />,
                  text: `${COMPANY_INFO.googleReviews} Google Reviews`,
                },
                {
                  icon: <MapPin size={12} />,
                  text: COMPANY_INFO.address,
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
              WhatsApp {COMPANY_INFO.phone} | {COMPANY_INFO.email}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPageV2;
