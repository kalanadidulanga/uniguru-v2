"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  GraduationCap,
  MapPin,
  ArrowRight,
  MessageCircle,
  Shield,
  CheckCircle2,
  XCircle,
  Loader2,
  Send,
  ChevronDown,
  ClipboardCheck,
  FileText,
  CalendarDays,
  FolderCheck,
  ListChecks,
  Clock,
  PenTool,
  Target,
} from "lucide-react";
import { sendContactEmail } from "@/actions/mailSending";
import TrustBarSection from "@/components/homev2/TrustBarSection";
import toast from "react-hot-toast";
import { COMPANY_INFO } from "@/constants/data";

/* ── Data ── */

const WHAT_YOU_GET = [
  {
    icon: <CalendarDays size={24} />,
    title: "Admissions plan",
    description: "Steps, dates, and dependencies mapped out.",
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: "Document checklist",
    description: "Tailored to your institution and route.",
  },
  {
    icon: <FileText size={24} />,
    title: "Application form guidance",
    description: "Error prevention checks included.",
  },
  {
    icon: <PenTool size={24} />,
    title: "Statement support",
    description: "SOP / personal statement structure guidance (where included).",
  },
  {
    icon: <ListChecks size={24} />,
    title: "Offer / CAS readiness",
    description: "Checklist for next steps (where applicable).",
  },
  {
    icon: <FolderCheck size={24} />,
    title: "Submission-ready folder",
    description: "Structure and naming convention for all documents.",
  },
  {
    icon: <Clock size={24} />,
    title: "Status updates",
    description: "Next-step messaging throughout the process.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: <Target size={22} />,
    title: "Confirm shortlist + intake",
    description: "Confirm your shortlist option(s) and intake.",
  },
  {
    step: "02",
    icon: <ClipboardCheck size={22} />,
    title: "Document checklist + plan",
    description: "We issue a document checklist + deadline plan.",
  },
  {
    step: "03",
    icon: <FileText size={22} />,
    title: "Upload + review",
    description: "You upload documents; we review and flag fixes.",
  },
  {
    step: "04",
    icon: <Send size={22} />,
    title: "Submission guidance",
    description: "Application submission guidance and final checks.",
  },
  {
    step: "05",
    icon: <CheckCircle2 size={22} />,
    title: "Offer handling",
    description: "Offer handling + next steps (deposit/CAS readiness).",
  },
];

const WILL_DO = [
  "Keep documents consistent and submissions clean",
  "Control timelines and reduce avoidable delays",
  "Explain requirements and next steps clearly",
];

const WONT_DO = [
  "Guarantee offers or outcomes",
  "Submit false documents or shortcuts",
  "Rush submissions without readiness",
];

const DISCLOSURE =
  "We provide guidance and administrative support. We do not guarantee offers, scholarships, or outcomes.";

/* ── Custom Dropdown ── */
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
        className={`w-full h-11 border rounded-lg pl-4 pr-10 text-left text-sm sm:text-base transition-all cursor-pointer flex items-center gap-2 ${
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

const DESTINATION_OPTIONS: DropdownOption[] = [
  { value: "UK", label: "United Kingdom", icon: <MapPin size={16} /> },
  { value: "Canada", label: "Canada", icon: <MapPin size={16} /> },
  { value: "Australia", label: "Australia", icon: <MapPin size={16} /> },
  { value: "Netherlands", label: "Netherlands", icon: <MapPin size={16} /> },
  { value: "Germany", label: "Germany", icon: <MapPin size={16} /> },
];

/* ── Page Component ── */

const AdmissionsSupportPageV2 = () => {
  const [form, setForm] = useState({
    destination: "",
    intake: "",
    whatsapp: "",
    shortlistOption: "",
    deadline: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.destination || !form.whatsapp) {
      toast.error("Please fill in destination and WhatsApp number.");
      return;
    }
    setLoading(true);
    try {
      const message = [
        `Destination: ${form.destination}`,
        `Intake: ${form.intake || "Not specified"}`,
        `Shortlist option / course area: ${form.shortlistOption || "Not specified"}`,
        `Deadline: ${form.deadline || "Not specified"}`,
        `Notes: ${form.notes || "Not specified"}`,
      ].join("\n");

      const formData = new FormData();
      formData.append("name", "Admissions Plan Request");
      formData.append("email", "admissions@uniguru.co");
      formData.append("mobile", form.whatsapp);
      formData.append(
        "subject",
        `Admissions Plan Request - ${form.destination}${form.intake ? ` - ${form.intake}` : ""}`
      );
      formData.append("message", message);

      await sendContactEmail(formData);
      toast.success(
        "Request sent! We will get back to you within 24 to 48 hours."
      );
      setForm({
        destination: "",
        intake: "",
        whatsapp: "",
        shortlistOption: "",
        deadline: "",
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
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=2000&q=90"
            alt="Student working on university admissions application"
            fill
            unoptimized
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <GraduationCap size={16} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                Admissions Support
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight">
              Admissions support with{" "}
              <span className="text-[#D4AF37]">structure and speed.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl">
              Clean submissions, controlled timelines, and consistent documentation. We guide your application from shortlist to submission.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                "Admissions plan in 24-48h",
                "Document checklist + structure",
                "Timeline control + clear next steps",
              ].map((chip, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 text-white/70 text-sm"
                >
                  <CheckCircle2 size={14} className="text-[#D4AF37]" />
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#admissions"
                className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-bold rounded-lg transition-all duration-200 text-sm shadow-md"
              >
                Get My Admissions Plan
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
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
        </div>

        <TrustBarSection />
      </section>

      {/* ═══════════════ 2) WHAT YOU GET ═══════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <FileText size={14} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                Admissions Pack
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              What you get
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {WHAT_YOU_GET.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center ${
                  i === WHAT_YOU_GET.length - 1 && WHAT_YOU_GET.length % 3 === 1
                    ? "sm:col-span-2 lg:col-span-1 lg:col-start-2"
                    : ""
                }`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1a3b85] text-white mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1a3b85] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 3) HOW IT WORKS ═══════════════ */}
      <section className="py-16 sm:py-20 bg-[#0f2554]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Clock size={14} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                Process
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              How it works
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
              {HOW_IT_WORKS.map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px+1.25rem)] h-px bg-gradient-to-r from-[#D4AF37]/60 to-[#D4AF37]/20" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30 mb-4 relative z-10">
                    <span className="text-lg font-bold text-[#0f2554]">{item.step}</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-5 w-full flex-1">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37]">
                        {item.icon}
                      </div>
                    </div>
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

      {/* ═══════════════ 4) BOUNDARIES ═══════════════ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Shield size={14} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                Transparency
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              What we will and will not do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="rounded-2xl border-2 border-emerald-200 bg-white shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  What we will do
                </h3>
              </div>
              <div className="space-y-4">
                {WILL_DO.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-emerald-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border-2 border-red-200 bg-white shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                  <XCircle size={20} className="text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  What we will not do
                </h3>
              </div>
              <div className="space-y-4">
                {WONT_DO.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <XCircle
                      size={18}
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

      {/* ═══════════════ 5) FORM SECTION ═══════════════ */}
      <section
        id="admissions"
        className="scroll-mt-20 py-16 sm:py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#0f2554]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Send size={14} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                Get Started
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
              Ready to start your application?
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Submit your details and receive an admissions plan tailored to your
              route and timeline.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            {/* Form (3/5) */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-gray-100 shadow-2xl p-6 sm:p-8 lg:p-10 space-y-4"
              >
                <div className="mb-2">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Admissions Plan Request
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Takes about 2 minutes. Plan &amp; next steps typically within
                    24-48 hours (working days).
                  </p>
                </div>

                {/* Row 1 - Destination + Intake */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Destination{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <CustomDropdown
                      options={DESTINATION_OPTIONS}
                      value={form.destination}
                      onChange={(v) =>
                        setForm({ ...form, destination: v })
                      }
                      placeholder="Select destination"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Preferred intake
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. September 2026"
                      value={form.intake}
                      onChange={(e) =>
                        setForm({ ...form, intake: e.target.value })
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2 - WhatsApp + Shortlist option */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      WhatsApp number{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 7XXX XXXXXX"
                      value={form.whatsapp}
                      onChange={(e) =>
                        setForm({ ...form, whatsapp: e.target.value })
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Shortlist option / course area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. MSc Data Science, UCL"
                      value={form.shortlistOption}
                      onChange={(e) =>
                        setForm({ ...form, shortlistOption: e.target.value })
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3 - Deadline + Notes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Deadline (if any)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 30 June 2026"
                      value={form.deadline}
                      onChange={(e) =>
                        setForm({ ...form, deadline: e.target.value })
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Notes (optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Any specific concerns or questions"
                      value={form.notes}
                      onChange={(e) =>
                        setForm({ ...form, notes: e.target.value })
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#1a3b85] hover:bg-[#152d6b] text-white font-semibold text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mt-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Get My Admissions Plan
                    </>
                  )}
                </button>

                <p className="text-[10px] sm:text-xs text-gray-400 text-center pt-0.5">
                  Plan &amp; next steps typically within 24-48 hours
                  (working days).
                </p>
              </form>
            </div>

            {/* Sidebar (2/5) */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15">
                  <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-0.5">
                    24-48h
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">
                    Response time
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15">
                  <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-0.5">
                    7
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">
                    Deliverables
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <Shield size={18} className="text-[#D4AF37]" />
                  </div>
                  <span className="text-white text-sm font-medium leading-snug">
                    IAA Regulated | {COMPANY_INFO.iaaReg}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={18} className="text-[#D4AF37]" />
                  </div>
                  <span className="text-white text-sm font-medium leading-snug">
                    {COMPANY_INFO.googleReviews} Google Reviews
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#D4AF37]" />
                  </div>
                  <span className="text-white text-sm font-medium leading-snug">
                    {COMPANY_INFO.address}
                  </span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15">
                <p className="text-white font-semibold text-sm mb-3">
                  Prefer to chat first?
                </p>
                <a
                  href={COMPANY_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
                <p className="text-white/60 text-xs mt-2.5 text-center">
                  {COMPANY_INFO.phone} | {COMPANY_INFO.email}
                </p>
              </div>

              <p className="text-[11px] text-white/50 leading-relaxed">
                {DISCLOSURE}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsSupportPageV2;
