"use client";

import React from "react";
import {
  MessageCircle,
  Shield,
  CheckCircle2,
  MapPin,
  Send,
} from "lucide-react";
import GetMyShortlistForm from "@/components/forms/GetMyShortlistForm";
import { COMPANY_INFO } from "@/constants/data";

const BookPageV2 = () => {
  return (
    <div className="min-h-screen bg-[#0f2554] flex flex-col">
      <section className="flex-1 flex items-center pt-20 sm:pt-24 pb-10 sm:pb-14">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <Send size={14} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                Get Started
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-2">
              Get My Shortlist
            </h1>
            <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Takes about 2 minutes. Shortlist and next steps within 24-48 hours.
            </p>
          </div>

          {/* Form + Sidebar */}
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
            {/* Form (3/5) */}
            <div className="lg:col-span-3">
              <GetMyShortlistForm variant="section" />
            </div>

            {/* Sidebar (2/5) */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15">
                  <div className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-0.5">
                    24-48h
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">
                    Response time
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15">
                  <div className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-0.5">
                    3-7
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">
                    Options shortlisted
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <Shield size={16} className="text-[#D4AF37]" />
                  </div>
                  <span className="text-white text-sm font-medium leading-snug">
                    IAA Regulated | {COMPANY_INFO.iaaReg}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={16} className="text-[#D4AF37]" />
                  </div>
                  <span className="text-white text-sm font-medium leading-snug">
                    {COMPANY_INFO.googleReviews} Google Reviews
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-[#D4AF37]" />
                  </div>
                  <span className="text-white text-sm font-medium leading-snug">
                    {COMPANY_INFO.address}
                  </span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15">
                <p className="text-white font-semibold text-sm mb-2.5">
                  Prefer to chat first?
                </p>
                <a
                  href={COMPANY_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
                <p className="text-white/60 text-xs mt-2 text-center">
                  {COMPANY_INFO.phone} | {COMPANY_INFO.email}
                </p>
              </div>

              {/* Disclaimer */}
              <p className="text-[11px] text-white/40 leading-relaxed">
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
