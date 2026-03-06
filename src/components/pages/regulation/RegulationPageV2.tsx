"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  FileCheck,
  Scale,
  AlertTriangle,
  ChevronRight,
  MapPin,
  BadgeCheck,
  Ban,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO } from "@/constants/data";

const BOOK_LINK = "https://uniguru-v2.vercel.app/book";

const STANDARDS = [
  "No false documents.",
  "No shortcuts.",
  "No outcome guarantees.",
  "We guarantee disciplined preparation and clear next steps - not results.",
];

const RegulationPageV2 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ── SECTION 1 - Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
            alt="London architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]/95" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <Shield size={14} className="text-[#D4AF37]" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">
                Regulation & Scope
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-tight mb-5 sm:mb-6">
              Regulated immigration support,{" "}
              <span className="text-[#D4AF37]">delivered with clear scope</span>
            </h1>

            <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-8 sm:mb-10">
              Immigration Advice Authority (IAA) regulated guidance where
              required - with fixed fees and disciplined preparation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
              <Link
                href={BOOK_LINK}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0a1628] font-semibold text-sm sm:text-base rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Book free 15-minute triage
                <ChevronRight size={16} />
              </Link>
              <button className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-medium text-sm sm:text-base rounded-lg border border-white/20 transition-all">
                <FileCheck size={16} />
                Request Fixed Fee Scale (PDF)
              </button>
            </div>

            <p className="text-white/40 text-xs sm:text-sm max-w-lg">
              Free triage. Paid services thereafter. Fixed fees confirmed in
              writing before engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 - Trust Bar ── */}
      <section className="bg-[#0f2554] border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 lg:gap-10 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-[#D4AF37] shrink-0" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">
                Immigration Advice Authority (IAA) Regulated
              </span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-white/20" />
            <div className="flex items-center gap-2">
              <BadgeCheck size={16} className="text-[#D4AF37] shrink-0" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">
                Organisation Registration: {COMPANY_INFO.iaaReg}
              </span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-white/20" />
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#D4AF37] shrink-0" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">
                {COMPANY_INFO.address}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 - What regulation means for you ── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#1a3b85]/5 rounded-full px-4 py-1.5 mb-6">
              <Scale size={14} className="text-[#1a3b85]" />
              <span className="text-[#1a3b85] text-xs sm:text-sm font-medium">
                What regulation means for you
              </span>
            </div>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              Regulation means clear standards, accountable advice, and proper
              boundaries. When immigration advice is required, we provide
              structured guidance you can rely on -{" "}
              <span className="font-semibold text-[#1a3b85]">
                not sales talk
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 - Scope confirmation ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 bg-[#1a3b85]/5 rounded-full px-4 py-1.5 mb-5">
                  <FileCheck size={14} className="text-[#1a3b85]" />
                  <span className="text-[#1a3b85] text-xs sm:text-sm font-medium">
                    Scope confirmation
                  </span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  We provide immigration advice only within our IAA
                  authorisation. If a matter requires a different level of
                  authorisation or becomes complex, we{" "}
                  <span className="font-semibold text-[#1a3b85]">
                    pause and explain the appropriate next step
                  </span>{" "}
                  before proceeding.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#1a3b85]/10 flex items-center justify-center mb-4">
                    <Shield size={24} className="text-[#1a3b85]" />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    IAA-regulated advisers are required to act within the scope
                    of their registration and must not provide advice beyond
                    their authorised level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 - Fees approach ── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f2554] tracking-tight mb-4">
                Fixed fees -{" "}
                <span className="text-[#D4AF37]">not ranges</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                We do not quote ranges. Where we take a matter on, the fee is
                fixed for the agreed scope of work and confirmed in writing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-8 mb-10 sm:mb-12">
              <div className="flex items-start gap-3">
                <AlertTriangle
                  size={20}
                  className="text-[#D4AF37] shrink-0 mt-0.5"
                />
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Home Office fees, IHS, translations, tests, and third-party
                  disbursements are separate.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#0f2554] hover:bg-[#1a3b85] text-white font-semibold text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all">
                <FileCheck size={16} />
                Request Fixed Fee Scale (PDF)
              </button>
              <Link
                href={BOOK_LINK}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0a1628] font-semibold text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Book free 15-minute triage
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 - Standards statement ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0f2554]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-10 sm:mb-12">
              Our standards
            </h2>
            <div className="space-y-4 sm:space-y-5">
              {STANDARDS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 sm:gap-4 text-left"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    {i < 3 ? (
                      <Ban size={16} className="text-red-400" />
                    ) : (
                      <CheckCircle2 size={16} className="text-[#D4AF37]" />
                    )}
                  </div>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 - Complaints and policies ── */}
      <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              For privacy, terms, cookies, and complaints procedure, visit:{" "}
              <Link
                href="/policies"
                className="text-[#1a3b85] font-semibold hover:underline"
              >
                Policies
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegulationPageV2;
