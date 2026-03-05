"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  FileText,
  MapPin,
  ArrowRight,
  MessageCircle,
  Shield,
  ClipboardCheck,
  CheckCircle2,
  XCircle,
  Loader2,
  Send,
  ChevronDown,
  Search,
  AlertTriangle,
  FolderOpen,
  ListChecks,
  Eye,
  CalendarDays,
  Users,
} from "lucide-react";
import { sendContactEmail } from "@/actions/mailSending";
import TrustBarSection from "@/components/homev2/TrustBarSection";
import toast from "react-hot-toast";

const WHATSAPP_LINK =
  "https://wa.me/447747525946?text=Hi%2C%20I%20need%20help%20with%20document%20readiness";

/* ── Data ── */

const WHAT_YOU_GET = [
  {
    icon: <Search size={24} />,
    title: "Evidence map",
    description:
      "What to include, what to exclude, and what needs strengthening.",
  },
  {
    icon: <ListChecks size={24} />,
    title: "Document checklist",
    description:
      "Tailored to your route: admissions, visa, or settlement stage.",
  },
  {
    icon: <Eye size={24} />,
    title: "Consistency audit",
    description:
      "Names, dates, addresses, timelines, and funding narrative checked.",
  },
  {
    icon: <FolderOpen size={24} />,
    title: "Submission-ready structure",
    description:
      "Folder structure + file naming convention: clean and professional.",
  },
  {
    icon: <AlertTriangle size={24} />,
    title: "Risk flags",
    description:
      "Missing items, weak areas, and how to fix them before submission.",
  },
  {
    icon: <CalendarDays size={24} />,
    title: "Next-step plan",
    description:
      "What to do this week to be submission-ready.",
  },
];

const WHAT_WE_CHECK = [
  "Identity and personal details consistency across documents",
  "Timeline logic: study history / work history / address history alignment",
  "Financial narrative clarity: source and flow of funds (where relevant)",
  "Translation / certification needs (where relevant)",
  "Duplicate / contradictory evidence removal (clean bundles win)",
];

const BEST_FIT = [
  "You have documents but feel unsure how to structure them",
  "You need a clear checklist and timeline plan",
  "You want to reduce risk from inconsistencies and missing items",
];

const NOT_FOR = [
  "Anyone looking for shortcuts or false documents",
  "Anyone expecting guarantees",
];

const HOW_IT_WORKS = [
  {
    step: "1",
    icon: <Send size={18} />,
    title: "Submit your details",
    description:
      "Your route, intake / deadline, and existing documents list.",
  },
  {
    step: "2",
    icon: <Eye size={18} />,
    title: "Readiness audit",
    description:
      "We run a readiness audit and identify gaps, inconsistencies, and risk flags.",
  },
  {
    step: "3",
    icon: <FolderOpen size={18} />,
    title: "Receive your Document Readiness Pack",
    description:
      "Checklist + folder structure + fixes delivered within 24-48 hours (working days).",
  },
  {
    step: "4",
    icon: <CheckCircle2 size={18} />,
    title: "Optional follow-up",
    description:
      "Follow-up check after you update documents to confirm everything is clean.",
  },
];

/* ── CustomDropdown ── */

interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
}

const CustomDropdown = ({
  options,
  value,
  onChange,
  placeholder,
}: {
  options: DropdownOption[];
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
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

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`w-full h-12 border rounded-lg pl-4 pr-10 text-left text-sm transition-all cursor-pointer flex items-center gap-2 ${
          open
            ? "border-[#1a3b85] ring-2 ring-[#1a3b85]/20 bg-white"
            : "border-gray-300 bg-white hover:border-[#1a3b85]/50 hover:shadow-sm"
        }`}
      >
        {selected ? (
          <>
            {selected.icon && (
              <span className="text-[#1a3b85] flex-shrink-0">
                {selected.icon}
              </span>
            )}
            <span className="text-gray-900 truncate">{selected.label}</span>
          </>
        ) : (
          <span className="text-gray-400">{placeholder}</span>
        )}
        <ChevronDown
          size={16}
          className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-transform duration-200 ${
            open ? "rotate-180 text-[#1a3b85]" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-1.5 w-full bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
          {value && (
            <button
              type="button"
              onClick={() => {
                onChange("");
                setOpen(false);
              }}
              className="w-full px-4 py-2.5 text-left text-xs text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors border-b border-gray-100"
            >
              Clear selection
            </button>
          )}
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full px-4 py-3 text-left transition-colors flex items-center gap-3 ${
                value === opt.value
                  ? "bg-[#1a3b85]/5 text-[#1a3b85]"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {opt.icon && (
                <span
                  className={`flex-shrink-0 ${
                    value === opt.value ? "text-[#1a3b85]" : "text-gray-400"
                  }`}
                >
                  {opt.icon}
                </span>
              )}
              <div className="min-w-0">
                <span className="text-sm font-medium block truncate">
                  {opt.label}
                </span>
                {opt.description && (
                  <span className="text-xs text-gray-400 block">
                    {opt.description}
                  </span>
                )}
              </div>
              {value === opt.value && (
                <CheckCircle2
                  size={16}
                  className="ml-auto text-[#1a3b85] flex-shrink-0"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const SERVICE_OPTIONS: DropdownOption[] = [
  {
    value: "Admissions",
    label: "Admissions",
    icon: <FileText size={16} />,
    description: "University / college application documents",
  },
  {
    value: "Visa",
    label: "Visa",
    icon: <Shield size={16} />,
    description: "Visa application evidence bundle",
  },
  {
    value: "Settlement",
    label: "Settlement",
    icon: <MapPin size={16} />,
    description: "Settlement or post-arrival documents",
  },
  {
    value: "Not sure",
    label: "Not sure",
    icon: <ClipboardCheck size={16} />,
    description: "We will help you figure it out",
  },
];

const STATUS_OPTIONS: DropdownOption[] = [
  {
    value: "Outside UK",
    label: "Outside UK",
    description: "Currently based outside the UK",
  },
  {
    value: "Inside UK",
    label: "Inside UK",
    description: "Currently based in the UK",
  },
];

/* ── Page Component ── */

const DocumentReadinessPageV2 = () => {
  const [form, setForm] = useState({
    serviceNeed: "",
    deadline: "",
    whatsapp: "",
    email: "",
    currentStatus: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.serviceNeed || !form.whatsapp) {
      toast.error("Please select your service need and enter your WhatsApp number.");
      return;
    }
    setLoading(true);
    try {
      const message = [
        `Service need: ${form.serviceNeed}`,
        `Deadline / intake month: ${form.deadline || "Not specified"}`,
        `Current status: ${form.currentStatus || "Not specified"}`,
        `Email: ${form.email || "Not provided"}`,
        `Struggling with: ${form.notes || "Not specified"}`,
      ].join("\n");

      const formData = new FormData();
      formData.append("name", "Document Pack Request");
      formData.append("email", form.email || "document-pack@uniguru.co");
      formData.append("mobile", form.whatsapp);
      formData.append(
        "subject",
        `Document Pack Request - ${form.serviceNeed}`
      );
      formData.append("message", message);

      await sendContactEmail(formData);
      toast.success(
        "Request sent! Pack & next steps typically within 24-48 hours (working days)."
      );
      setForm({
        serviceNeed: "",
        deadline: "",
        whatsapp: "",
        email: "",
        currentStatus: "",
        notes: "",
      });
    } catch {
      toast.error(
        "Something went wrong. Please try again or chat on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════════ 1) HERO ═══════════════ */}
      <div className="min-h-screen flex flex-col">
        <section className="relative flex-1 flex items-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=90"
            alt="Professional documents and folders on a desk"
            fill
            quality={90}
            className="object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-[#0a1628]/20" />

          {/* Floating decorative elements */}
          <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#D4AF37]/10 blur-2xl animate-pulse hidden lg:block" />
          <div className="absolute bottom-40 right-40 w-24 h-24 rounded-full bg-white/5 blur-xl hidden lg:block" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#D4AF37]/5 blur-lg hidden lg:block" />

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/40" />
                <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase">
                  Submission Readiness
                </p>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  Document readiness:
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#f5d76e] bg-clip-text text-transparent">
                  the difference between
                  <br className="hidden sm:block" />
                  {" "}&lsquo;submitted&rsquo; and &lsquo;credible&rsquo;
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-2 sm:mb-3 max-w-2xl">
                A disciplined checklist, clean structure, and consistency checks
                so your application reads professionally.
              </p>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-2xl">
                We turn requirements into a practical evidence map and a
                submission-ready folder structure, reducing avoidable mistakes
                and last-minute chaos.
              </p>

              {/* Trust chips */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-2 sm:gap-x-6 lg:gap-x-8 sm:gap-y-3 mb-6 sm:mb-8 lg:mb-10">
                {[
                  "Pack in 24-48 hours (working days)",
                  "Consistency checks (names, dates, addresses, finances)",
                  "Submission-ready folder structure",
                ].map((chip, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                    {chip}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a
                  href="#document-pack"
                  className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#D4AF37] to-[#c9a432] hover:from-[#e5c04a] hover:to-[#D4AF37] text-[#0d1b3e] font-semibold rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 text-sm sm:text-base"
                >
                  Get My Document Pack
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-semibold rounded-xl transition-all duration-300 text-sm sm:text-base"
                >
                  <MessageCircle size={18} className="text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>

              <p className="text-xs sm:text-sm text-white/40 max-w-lg">
                No pressure. No false guarantees. Just disciplined preparation.
              </p>
            </div>
          </div>

          {/* Decorative icon */}
          <div className="absolute bottom-10 right-10 opacity-10 hidden xl:block">
            <ClipboardCheck size={120} className="text-white" />
          </div>
        </section>

        {/* 2) Trust Bar */}
        <TrustBarSection />
      </div>

      {/* ═══════════════ 3) WHAT YOU GET ═══════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-3 sm:mb-4">
              <FolderOpen size={14} />
              Document Readiness Pack
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              What you get
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {WHAT_YOU_GET.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#1a3b85] text-white mb-4 sm:mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[#1a3b85] mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 4) WHAT WE CHECK ═══════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a3b85]/10 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-3 sm:mb-4">
              <Eye size={14} />
              Premium Detail
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a3b85] tracking-tight mb-2 sm:mb-3">
              What we check
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 max-w-2xl">
              Every document set goes through a structured audit to catch what
              most applicants miss.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {WHAT_WE_CHECK.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 sm:gap-4 bg-white rounded-xl border border-gray-200 p-4 sm:p-5 lg:p-6 shadow-sm"
                >
                  <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1a3b85]/10 text-[#1a3b85] flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8">
              <a
                href="#document-pack"
                className="group inline-flex items-center gap-2 text-[#1a3b85] font-semibold text-sm hover:text-[#D4AF37] transition-colors"
              >
                Want clean, credible documents? Get My Document Pack
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 5) WHO THIS IS FOR ═══════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-3 sm:mb-4">
              <Users size={14} />
              Best Fit
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              Who this is for
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="bg-[#1a3b85] px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3">
                <CheckCircle2 size={18} className="text-[#D4AF37] flex-shrink-0" />
                <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg">
                  Best fit
                </h3>
              </div>
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {BEST_FIT.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-green-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3">
                <XCircle size={18} className="text-gray-400 flex-shrink-0" />
                <h3 className="text-gray-800 font-semibold text-sm sm:text-base lg:text-lg">
                  Not for
                </h3>
              </div>
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {NOT_FOR.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <XCircle
                      size={16}
                      className="text-red-400 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 6) HOW IT WORKS ═══════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#0f2554] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-20 right-10 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#D4AF37] blur-3xl" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-3 sm:mb-4 block">
              Process
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
              How it works
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-4">
              {HOW_IT_WORKS.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30 flex-shrink-0">
                      <span className="text-base sm:text-lg font-bold text-[#0f2554]">
                        {item.step}
                      </span>
                    </div>
                    {i < HOW_IT_WORKS.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-[#D4AF37]/60 to-transparent mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37]">
                          {item.icon}
                        </div>
                        <h3 className="text-sm sm:text-base font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/30 to-transparent -translate-x-1/2" />

              <div className="space-y-0">
                {HOW_IT_WORKS.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-8 ${
                      i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-5/12 ${
                        i % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-7">
                        <div
                          className={`flex items-center gap-3 mb-3 ${
                            i % 2 === 0
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37]">
                            {item.icon}
                          </div>
                          <h3 className="text-base sm:text-lg font-semibold text-white">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex w-2/12 justify-center my-4">
                      <div className="w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
                        <span className="text-xl font-bold text-[#0f2554]">
                          {item.step}
                        </span>
                      </div>
                    </div>

                    <div className="w-5/12" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-14 lg:mt-16 text-center">
            <div className="inline-block px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/60 text-xs sm:text-sm lg:text-base max-w-xl mx-auto">
                Submit &rarr;{" "}
                <span className="text-[#D4AF37] font-medium">audit</span> &rarr;{" "}
                <span className="text-[#D4AF37] font-medium">pack</span> &rarr;{" "}
                <span className="text-[#D4AF37] font-medium">follow-up</span>.
                That&apos;s the system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 7) COMPLIANCE NOTE ═══════════════ */}
      <section className="py-8 sm:py-10 lg:py-12 bg-amber-50 border-y border-amber-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 text-amber-600 flex-shrink-0">
              <Shield size={18} className="sm:hidden" />
              <Shield size={20} className="hidden sm:block" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-amber-900 mb-1">
                Compliance note
              </h3>
              <p className="text-amber-800 text-xs sm:text-sm lg:text-base leading-relaxed">
                We provide immigration advice only within our IAA authorisation
                where required. For other cases, we provide submission-readiness
                support and document structuring guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 8) FORM SECTION ═══════════════ */}
      <section
        id="document-pack"
        className="scroll-mt-20 py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2554]/95 via-[#1a3b85]/92 to-[#0f2554]/95" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-8 xl:gap-12">
            {/* Form Column */}
            <div className="lg:col-span-3 mb-8 lg:mb-0">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-3 sm:mb-4 block">
                2-Minute Form
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight mb-2">
                Document Pack Request
              </h2>
              <p className="text-white/50 text-xs sm:text-sm mb-6 sm:mb-8">
                Pack & next steps typically within 24-48 hours (working days).
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Service need */}
                  <div>
                    <label className="block text-white/80 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Service need <span className="text-[#D4AF37]">*</span>
                    </label>
                    <CustomDropdown
                      options={SERVICE_OPTIONS}
                      value={form.serviceNeed}
                      onChange={(v) =>
                        setForm((p) => ({ ...p, serviceNeed: v }))
                      }
                      placeholder="Select your need"
                    />
                  </div>

                  {/* Deadline */}
                  <div>
                    <label className="block text-white/80 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Deadline / intake month
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. September 2026"
                      value={form.deadline}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, deadline: e.target.value }))
                      }
                      className="w-full h-12 border border-gray-300 rounded-lg px-4 text-sm bg-white hover:border-[#1a3b85]/50 hover:shadow-sm focus:border-[#1a3b85] focus:ring-2 focus:ring-[#1a3b85]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* WhatsApp */}
                  <div>
                    <label className="block text-white/80 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      WhatsApp number <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 7XXX XXXXXX"
                      value={form.whatsapp}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, whatsapp: e.target.value }))
                      }
                      className="w-full h-12 border border-gray-300 rounded-lg px-4 text-sm bg-white hover:border-[#1a3b85]/50 hover:shadow-sm focus:border-[#1a3b85] focus:ring-2 focus:ring-[#1a3b85]/20 outline-none transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white/80 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className="w-full h-12 border border-gray-300 rounded-lg px-4 text-sm bg-white hover:border-[#1a3b85]/50 hover:shadow-sm focus:border-[#1a3b85] focus:ring-2 focus:ring-[#1a3b85]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Current status */}
                <div>
                  <label className="block text-white/80 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Current status
                  </label>
                  <CustomDropdown
                    options={STATUS_OPTIONS}
                    value={form.currentStatus}
                    onChange={(v) =>
                      setForm((p) => ({ ...p, currentStatus: v }))
                    }
                    placeholder="Inside or outside UK"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-white/80 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Notes (optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="What are you struggling with most?"
                    value={form.notes}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, notes: e.target.value }))
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white hover:border-[#1a3b85]/50 hover:shadow-sm focus:border-[#1a3b85] focus:ring-2 focus:ring-[#1a3b85]/20 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#D4AF37] to-[#c9a432] hover:from-[#e5c04a] hover:to-[#D4AF37] text-[#0d1b3e] font-semibold rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get My Document Pack
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>

                <p className="text-white/30 text-xs text-center">
                  Pack & next steps typically within 24-48 hours (working days).
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-5">
              {/* Quick contact */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/15 p-4 sm:p-6">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">
                  Prefer to chat?
                </h3>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-lg transition-colors text-sm w-full justify-center"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
                <p className="text-white/40 text-xs mt-3 text-center">
                  +44 7747 525946
                </p>
              </div>

              {/* What happens next */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/15 p-4 sm:p-6">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">
                  What happens next?
                </h3>
                <div className="space-y-2.5 sm:space-y-3">
                  {[
                    "We review your submission",
                    "Run a readiness audit within 24-48h",
                    "You receive your Document Readiness Pack",
                    "Optional: follow-up after updates",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-2.5 sm:gap-3">
                      <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex-shrink-0 mt-0.5">
                        <span className="text-[10px] sm:text-xs font-bold">{i + 1}</span>
                      </div>
                      <span className="text-white/70 text-xs sm:text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/15 p-4 sm:p-6">
                <div className="space-y-2.5 sm:space-y-3">
                  {[
                    {
                      icon: <Shield size={14} className="sm:hidden" />,
                      iconLg: <Shield size={16} className="hidden sm:block" />,
                      text: "IAA Regulated F202537807",
                    },
                    {
                      icon: <CheckCircle2 size={14} className="sm:hidden" />,
                      iconLg: <CheckCircle2 size={16} className="hidden sm:block" />,
                      text: "100+ Google Reviews",
                    },
                    {
                      icon: <MapPin size={14} className="sm:hidden" />,
                      iconLg: <MapPin size={16} className="hidden sm:block" />,
                      text: "128 City Road, London EC1V 2NX",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 sm:gap-3 text-white/50 text-xs sm:text-sm"
                    >
                      <span className="text-[#D4AF37]">
                        {item.icon}
                        {item.iconLg}
                      </span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 9) FOOTER DISCLAIMER ═══════════════ */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#0a1628]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/50 text-xs sm:text-sm mb-3 sm:mb-4 max-w-2xl mx-auto">
            This is preparation and document-readiness support. We do not
            guarantee outcomes.
          </p>
          <p className="text-white/40 text-xs mb-3 sm:mb-4">
            WhatsApp +44 7747 525946 | info@uniguru.co.uk
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-5 gap-y-2">
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
                className="inline-flex items-center gap-1.5 text-white/30 text-[10px] sm:text-xs"
              >
                <span className="text-[#D4AF37]/50">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentReadinessPageV2;
