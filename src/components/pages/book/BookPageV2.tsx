"use client";

import React from "react";
import Image from "next/image";
import {
  MessageCircle,
  Shield,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import GetMyShortlistForm from "@/components/forms/GetMyShortlistForm";
import { COMPANY_INFO } from "@/constants/data";

const BookPageV2 = () => {
  return (
    <div className="relative min-h-screen">
      {/* London backdrop — absolute on mobile, fixed on desktop */}
      <div className="absolute lg:fixed inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2000&q=90"
          alt="London skyline"
          fill
          quality={90}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1225]/85 via-[#0a1225]/70 to-[#0a1225]/95" />
      </div>

      {/* Form section */}
      <section className="relative z-10 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-10 sm:pb-16 lg:pb-24 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Title */}
          <div className="text-center mb-6 sm:mb-10 lg:mb-14">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-10 sm:w-12 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2 sm:mb-4">
              Get My Shortlist
            </h1>
            <p className="text-white/50 text-xs sm:text-sm md:text-base max-w-md mx-auto">
              Takes about 2 minutes. Shortlist &amp; next steps within
              24–48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-12 items-start max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3 order-1">
              <GetMyShortlistForm variant="section" />
            </div>

            {/* Sidebar — on mobile: compact horizontal strip, on desktop: vertical */}
            <div className="lg:col-span-2 order-2 flex flex-col gap-3 sm:gap-4 lg:gap-5">
              {/* Stats row */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="bg-white/[0.06] backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-white/10">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#D4AF37] mb-0.5">
                    24&ndash;48h
                  </div>
                  <div className="text-white/60 text-[10px] sm:text-xs lg:text-sm">
                    Response time
                  </div>
                </div>
                <div className="bg-white/[0.06] backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-white/10">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#D4AF37] mb-0.5">
                    3&ndash;7
                  </div>
                  <div className="text-white/60 text-[10px] sm:text-xs lg:text-sm">
                    Options shortlisted
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="bg-white/[0.06] backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-white/10 space-y-2.5 sm:space-y-3 lg:space-y-4">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-md sm:rounded-lg bg-[#D4AF37]/15 flex items-center justify-center flex-shrink-0">
                    <Shield size={14} className="text-[#D4AF37] sm:hidden" />
                    <Shield size={18} className="text-[#D4AF37] hidden sm:block" />
                  </div>
                  <span className="text-white/90 text-xs sm:text-sm font-medium leading-snug">
                    IAA Regulated &middot; {COMPANY_INFO.iaaReg}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-md sm:rounded-lg bg-[#D4AF37]/15 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-[#D4AF37] sm:hidden" />
                    <CheckCircle2 size={18} className="text-[#D4AF37] hidden sm:block" />
                  </div>
                  <span className="text-white/90 text-xs sm:text-sm font-medium leading-snug">
                    {COMPANY_INFO.googleReviews} Google Reviews
                  </span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-md sm:rounded-lg bg-[#D4AF37]/15 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-[#D4AF37] sm:hidden" />
                    <MapPin size={18} className="text-[#D4AF37] hidden sm:block" />
                  </div>
                  <span className="text-white/90 text-xs sm:text-sm font-medium leading-snug">
                    {COMPANY_INFO.address}
                  </span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white/[0.06] backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-white/10">
                <p className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-3">
                  Prefer to chat first?
                </p>
                <a
                  href={COMPANY_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm"
                >
                  <MessageCircle size={16} className="sm:hidden" />
                  <MessageCircle size={18} className="hidden sm:block" />
                  Chat on WhatsApp
                </a>
                <p className="text-white/40 text-[10px] sm:text-xs mt-2 sm:mt-2.5 text-center">
                  {COMPANY_INFO.phone} &middot; {COMPANY_INFO.email}
                </p>
              </div>

              {/* Disclaimer */}
              <p className="text-[10px] sm:text-[11px] text-white/30 leading-relaxed">
                We provide guidance and support. We do not guarantee offers,
                visas, or outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookPageV2;
