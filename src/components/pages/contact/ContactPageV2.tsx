"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageCircle,
  Clock,
  Shield,
  BadgeCheck,
  Star,
  ChevronRight,
  ChevronDown,
  Loader2,
  X,
} from "lucide-react";
import { sendContactEmail } from "@/actions/mailSending";
import toast from "react-hot-toast";
import { COMPANY_INFO } from "@/constants/data";

const REASON_OPTIONS = [
  "Shortlist",
  "Admissions",
  "Immigration",
  "IELTS & Interview",
  "Finance",
  "Accommodation",
  "Travel",
  "Work",
  "Other",
];

/* ── Reason Dropdown ── */
const ReasonDropdown = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full h-10 sm:h-11 border rounded-lg px-3 sm:px-4 text-left text-sm flex items-center justify-between gap-2 transition-colors bg-white ${
          open
            ? "border-[#1a3b85] ring-2 ring-[#1a3b85]/20"
            : "border-gray-300 hover:border-gray-400"
        }`}
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || "Select reason"}
        </span>
        <div className="flex items-center gap-1">
          {value && (
            <span
              onClick={(e) => {
                e.stopPropagation();
                onChange("");
                setOpen(false);
              }}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X size={14} />
            </span>
          )}
          <ChevronDown
            size={16}
            className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl py-1 max-h-60 overflow-y-auto">
          {REASON_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                value === option
                  ? "bg-[#1a3b85]/10 text-[#1a3b85] font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* ── Component ── */
const ContactPageV2 = () => {
  const [loading, setLoading] = useState(false);
  const [reason, setReason] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.set("subject", reason || "General Enquiry");

    try {
      const response = await sendContactEmail(formData);
      if (response.status) {
        toast.success(response.message);
        (e.target as HTMLFormElement).reset();
        setReason("");
      } else {
        toast.error(response.message);
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── SECTION 1 - Hero ── */}
      <section className="bg-[#0f2554] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_60%)]" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-14 sm:pb-16 lg:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Contact
            </h1>
            <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Tell us what you need - we&apos;ll direct you to the right
              service.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm rounded-lg transition-colors"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0a1628] font-semibold text-sm rounded-lg transition-colors"
              >
                Get My Shortlist
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTIONS 2 & 3 - Contact details + Form ── */}
      <section className="py-14 sm:py-18 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left - Contact details */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f2554]">
                Get in touch
              </h2>

              <div className="space-y-4">
                <a
                  href={COMPANY_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#25D366]/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <MessageCircle size={18} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">
                      WhatsApp
                    </p>
                    <p className="text-sm text-gray-600">{COMPANY_INFO.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#1a3b85]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1a3b85]/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#1a3b85]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">
                      Email
                    </p>
                    <p className="text-sm text-gray-600">{COMPANY_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">
                      Address
                    </p>
                    <p className="text-sm text-gray-600">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-gray-200/60 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">
                      Office hours
                    </p>
                    <p className="text-sm text-gray-600">
                      {COMPANY_INFO.officeHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-2xl p-5 sm:p-6 md:p-8 lg:p-10 space-y-4"
              >
                <div className="mb-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                    Send us a message
                  </h3>
                </div>

                {/* Full name + WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Full name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      required
                      className="w-full h-10 sm:h-11 border border-gray-300 rounded-lg px-3 sm:px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      WhatsApp number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="+44 7XXX XXXXXX"
                      required
                      className="w-full h-10 sm:h-11 border border-gray-300 rounded-lg px-3 sm:px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Email + Reason */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="w-full h-10 sm:h-11 border border-gray-300 rounded-lg px-3 sm:px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Reason
                    </label>
                    <ReasonDropdown value={reason} onChange={setReason} />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us how we can help..."
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 sm:h-12 bg-[#1a3b85] hover:bg-[#152d6b] text-white font-semibold text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send message
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We respond during working hours.
                </p>
              </form>

              {/* ── SECTION 4 - Important note ── */}
              <div className="mt-4 bg-gray-50 rounded-xl border border-gray-100 px-4 sm:px-5 py-3 sm:py-4">
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  <span className="font-medium text-gray-600">Note:</span>{" "}
                  Please avoid sharing unnecessary sensitive information in the
                  contact form. We&apos;ll tell you what is required once your
                  service is confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 - Footer strip ── */}
      <section className="bg-[#0f2554]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
              >
                <Phone size={14} className="text-[#D4AF37]" />
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2 text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
              >
                <Mail size={14} className="text-[#D4AF37]" />
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPageV2;
