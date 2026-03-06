"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import TrustBarSection from "@/components/homev2/TrustBarSection";
import {
  Shield,
  Lock,
  FileText,
  Cookie,
  MessageSquareWarning,
  MapPin,
  BadgeCheck,
  Star,
  Mail,
  MessageCircle,
} from "lucide-react";
import { COMPANY_INFO } from "@/constants/data";

const ANCHOR_LINKS = [
  { label: "Privacy", anchor: "#privacy", icon: Lock },
  { label: "Terms", anchor: "#terms", icon: FileText },
  { label: "Cookies", anchor: "#cookies", icon: Cookie },
  { label: "Complaints", anchor: "#complaints", icon: MessageSquareWarning },
];


const PoliciesPageV2 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ── SECTION 1 - Hero ── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80" alt="Policies" fill className="object-cover" priority unoptimized />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
        <div className="flex-1 flex items-center justify-center">
          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <Shield size={14} className="text-[#D4AF37]" />
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                  Policies
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-tight mb-4 sm:mb-5">
                Policies &{" "}
                <span className="text-[#D4AF37]">client information</span>
              </h1>

              <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10">
                Clear standards, transparent processes, and firm-grade boundaries.
              </p>

              {/* Anchor links */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {ANCHOR_LINKS.map((item) => (
                  <a
                    key={item.anchor}
                    href={item.anchor}
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/8 hover:bg-white/15 backdrop-blur-sm text-white/80 hover:text-white text-xs sm:text-sm font-medium rounded-lg border border-white/10 hover:border-white/20 transition-all"
                  >
                    <item.icon size={14} className="text-[#D4AF37]" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <TrustBarSection />
      </section>

      {/* ── SECTION 2 - Privacy Policy ── */}
      <section id="privacy" className="py-14 sm:py-18 lg:py-20 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#1a3b85]/10 flex items-center justify-center">
                <Lock size={20} className="text-[#1a3b85]" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0f2554]">
                Privacy Policy
              </h2>
            </div>
            <ul className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                We collect only the information needed to provide our services
                (e.g., name, contact details, and relevant application context).
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                We use your information to deliver services, respond to
                requests, and improve client experience.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                We do not sell personal data.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                We store data securely and restrict access to authorised staff
                only.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                You can request access, correction, or deletion of your personal
                data by contacting us.
              </li>
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              Contact for privacy:{" "}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-[#1a3b85] font-medium hover:underline"
              >
                {COMPANY_INFO.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-100" />
      </div>

      {/* ── SECTION 3 - Terms of Service ── */}
      <section id="terms" className="py-14 sm:py-18 lg:py-20 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#1a3b85]/10 flex items-center justify-center">
                <FileText size={20} className="text-[#1a3b85]" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0f2554]">
                Terms of Service
              </h2>
            </div>
            <ul className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                We provide guidance and administrative support services; outcomes
                depend on third parties (universities, visa authorities, banks,
                employers).
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                We do not guarantee offers, visas, scholarships, job placement,
                or outcomes.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                Clients must provide genuine information and documents. We do not
                assist with false documents or misrepresentation.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                Fees (where applicable) and scope are confirmed before
                engagement.
              </li>
            </ul>
            <p className="mt-6 text-sm text-gray-500 leading-relaxed">
              If any conflict arises, we aim to resolve it fairly and promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-100" />
      </div>

      {/* ── SECTION 4 - Cookie Policy ── */}
      <section id="cookies" className="py-14 sm:py-18 lg:py-20 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#1a3b85]/10 flex items-center justify-center">
                <Cookie size={20} className="text-[#1a3b85]" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0f2554]">
                Cookie Policy
              </h2>
            </div>
            <ul className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                We use cookies to improve site performance, understand usage, and
                remember preferences.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                You can manage cookies through your browser settings.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                Disabling some cookies may affect site functionality.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-100" />
      </div>

      {/* ── SECTION 5 - Complaints Procedure ── */}
      <section
        id="complaints"
        className="py-14 sm:py-18 lg:py-20 scroll-mt-24"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#1a3b85]/10 flex items-center justify-center">
                <MessageSquareWarning size={20} className="text-[#1a3b85]" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0f2554]">
                Complaints Procedure
              </h2>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-[#D4AF37]">1</span>
                </div>
                <div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Email your complaint with your name, contact details, and a
                    clear summary of the issue.
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Send to:{" "}
                    <a
                      href={`mailto:${COMPANY_INFO.email}?subject=Complaint`}
                      className="text-[#1a3b85] font-medium hover:underline"
                    >
                      {COMPANY_INFO.email}
                    </a>{" "}
                    (Subject: Complaint)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-[#D4AF37]">2</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  We acknowledge receipt and review the matter promptly.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-[#D4AF37]">3</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  We aim to provide a written response with findings and next
                  steps.
                </p>
              </div>
            </div>
            <div className="mt-6 bg-gray-50 rounded-xl border border-gray-200 p-4 sm:p-5">
              <p className="text-gray-600 text-sm leading-relaxed">
                If your complaint relates to regulated immigration advice, we
                will explain the escalation route in line with regulatory
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 - Final contact strip ── */}
      <section className="bg-[#0f2554]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Contact */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
              >
                <MessageCircle size={16} className="text-[#D4AF37]" />
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2 text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
              >
                <Mail size={16} className="text-[#D4AF37]" />
                {COMPANY_INFO.email}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <Shield size={14} className="text-[#D4AF37]" />
                IAA Regulated
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck size={14} className="text-[#D4AF37]" />
                {COMPANY_INFO.iaaReg}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-[#D4AF37]" />
                {COMPANY_INFO.address}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star size={14} className="text-[#D4AF37]" />
                {COMPANY_INFO.googleReviews} Google Reviews
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliciesPageV2;
