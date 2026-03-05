"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  BookOpen,
  Mic,
  MapPin,
  ArrowRight,
  MessageCircle,
  Shield,
  Target,
  ClipboardCheck,
  CheckCircle2,
  XCircle,
  Loader2,
  Send,
  ChevronDown,
  PenTool,
  Headphones,
  Users,
  BarChart3,
  RefreshCw,
  FileText,
  CalendarDays,
} from "lucide-react";
import { sendContactEmail } from "@/actions/mailSending";
import TrustBarSection from "@/components/homev2/TrustBarSection";
import toast from "react-hot-toast";
import { COMPANY_INFO } from "@/constants/data";

/* ── Data ── */

const WHAT_YOU_GET = [
  {
    icon: <BarChart3 size={24} />,
    title: "Diagnostic review",
    description: "Current level, weaknesses, and priorities.",
  },
  {
    icon: <CalendarDays size={24} />,
    title: "Personalised 2-4 week plan",
    description: "Weekly structure and targets.",
  },
  {
    icon: <PenTool size={24} />,
    title: "IELTS practice",
    description: "Mock or section practice  - timed tasks + feedback.",
  },
  {
    icon: <Mic size={24} />,
    title: "Interview preparation",
    description:
      "Question bank + structured answers + delivery coaching.",
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Feedback loop",
    description:
      "What to change next and how to practise efficiently.",
  },
];

const IELTS_POINTS = [
  {
    icon: <PenTool size={20} />,
    title: "Writing",
    description:
      "Structure, coherence, task response, grammar range and accuracy.",
  },
  {
    icon: <Mic size={20} />,
    title: "Speaking",
    description: "Fluency, coherence, pronunciation, vocabulary range.",
  },
  {
    icon: <Headphones size={20} />,
    title: "Reading / Listening",
    description: "Technique, timing, accuracy (where included).",
  },
  {
    icon: <CalendarDays size={20} />,
    title: "Weekly structure",
    description:
      "What to practise, how long, and how to improve faster.",
  },
];

const INTERVIEW_POINTS = [
  {
    icon: <Shield size={20} />,
    title: "Credibility & consistency",
    description: "Course choice, progression, and future plan.",
  },
  {
    icon: <FileText size={20} />,
    title: "Financial clarity",
    description: "Explain funding truthfully and consistently.",
  },
  {
    icon: <Mic size={20} />,
    title: "Delivery coaching",
    description: "Calm tone, structured answers, and timing.",
  },
  {
    icon: <Users size={20} />,
    title: "Mock interview practice",
    description: "Feedback + recording optional.",
  },
];

const BEST_FIT = [
  "You have an intake/interview date and need a clear plan",
  "You want feedback, not generic tips",
  "You struggle with speaking confidence or writing structure",
  "You want interview readiness that feels professional",
];

const NOT_FOR = [
  "People looking for 'guaranteed band scores'",
  "Anyone unwilling to practise consistently",
  "Last-minute preparation with no time to improve",
];

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: <Target size={22} />,
    title: "Share your target",
    description: "Band/interview + date + current level.",
  },
  {
    step: "02",
    icon: <BarChart3 size={22} />,
    title: "Quick diagnostic",
    description: "We run a quick diagnostic (call or sample tasks).",
  },
  {
    step: "03",
    icon: <ClipboardCheck size={22} />,
    title: "Prep plan + schedule",
    description: "You receive a prep plan + mock/practice schedule.",
  },
  {
    step: "04",
    icon: <RefreshCw size={22} />,
    title: "Practice + feedback",
    description: "Practice + feedback + next-cycle adjustments.",
  },
];

const WILL_DO = [
  "Provide a structured plan, realistic practice and targeted feedback",
  "Train clear, truthful, consistent answers",
  "Track improvement week-by-week",
  "Build confidence under time pressure",
];

const WONT_DO = [
  "Promise guaranteed scores or outcomes",
  "Script dishonest answers or encourage misrepresentation",
  "Give generic advice with no feedback loop",
  "Rush last-minute without time to improve",
];

const DISCLOSURE =
  "This service provides preparation and coaching only. We do not guarantee IELTS band scores, interview outcomes, or visa decisions. Results depend on your preparation, performance, and the assessing body\u2019s criteria.";

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

const SERVICE_OPTIONS: DropdownOption[] = [
  {
    value: "IELTS",
    label: "IELTS Preparation",
    icon: <PenTool size={16} />,
    description: "Writing, speaking, reading, listening",
  },
  {
    value: "Interview",
    label: "Interview Preparation",
    icon: <Mic size={16} />,
    description: "Mock interviews + delivery coaching",
  },
  {
    value: "Both",
    label: "Both (IELTS + Interview)",
    icon: <BookOpen size={16} />,
    description: "Full preparation package",
  },
];

/* ── Page Component ── */

const IeltsInterviewPrepPageV2 = () => {
  const [form, setForm] = useState({
    destination: "",
    date: "",
    whatsapp: "",
    service: "",
    targetBand: "",
    currentLevel: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.destination || !form.whatsapp || !form.service) {
      toast.error(
        "Please fill in destination, WhatsApp number, and select a service."
      );
      return;
    }
    setLoading(true);
    try {
      const message = [
        `Service: ${form.service}`,
        `Destination: ${form.destination}`,
        `Test/Interview date: ${form.date || "Not specified"}`,
        `Target band: ${form.targetBand || "Not specified"}`,
        `Current level/last score: ${form.currentLevel || "Not specified"}`,
        `Biggest challenge: ${form.notes || "Not specified"}`,
      ].join("\n");

      const formData = new FormData();
      formData.append("name", "Prep Plan Request");
      formData.append("email", "prep-plan@uniguru.co");
      formData.append("mobile", form.whatsapp);
      formData.append(
        "subject",
        `Prep Plan Request  - ${form.service}  - ${form.destination}`
      );
      formData.append("message", message);

      await sendContactEmail(formData);
      toast.success(
        "Request sent! We will get back to you within 24 to 48 hours."
      );
      setForm({
        destination: "",
        date: "",
        whatsapp: "",
        service: "",
        targetBand: "",
        currentLevel: "",
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
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=90"
            alt="Students preparing for exams in a modern study space"
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

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/40" />
                <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase">
                  IELTS &amp; Interview Preparation
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  Prepare with structure.
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#f5d76e] bg-clip-text text-transparent">
                  Perform with confidence.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-3 max-w-2xl">
                IELTS preparation and interview coaching built on diagnostics,
                feedback, and repetition.
              </p>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-2xl">
                We assess your starting point, build a targeted plan, and run
                realistic practice with feedback  - so you improve faster and
                perform under pressure.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
                {[
                  "Diagnostic + plan in 24-48h (working days)",
                  "Mock practice + feedback",
                  "Structured improvement loop",
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

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#prep-plan"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#c9a432] hover:from-[#e5c04a] hover:to-[#D4AF37] text-[#0d1b3e] font-semibold rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 text-sm sm:text-base"
                >
                  Get My Prep Plan
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href={COMPANY_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-semibold rounded-xl transition-all duration-300 text-sm sm:text-base"
                >
                  <MessageCircle size={18} className="text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>

              <p className="text-xs sm:text-sm text-white/40 max-w-lg">
                No guarantees  - just a disciplined preparation system that
                raises performance.
              </p>
            </div>
          </div>

          {/* Decorative icon */}
          <div className="absolute bottom-10 right-10 opacity-10 hidden xl:block">
            <BookOpen size={120} className="text-white" />
          </div>
        </section>

        {/* 2) Trust Bar */}
        <TrustBarSection />
      </div>

      {/* ═══════════════ 3) WHAT YOU GET ═══════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-4">
              <BookOpen size={14} />
              Prep Pack
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              What you get
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {WHAT_YOU_GET.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
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

      {/* ═══════════════ 4A) IELTS PREPARATION ═══════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a3b85]/10 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-4">
              <PenTool size={14} />
              Section A
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight mb-3">
              IELTS preparation that improves results
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-2xl">
              We focus on the parts that move scores  - clarity, structure,
              accuracy, timing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {IELTS_POINTS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1a3b85] text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1a3b85] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#prep-plan"
                className="group inline-flex items-center gap-2 text-[#1a3b85] font-semibold text-sm hover:text-[#D4AF37] transition-colors"
              >
                Want a plan for your target band? Get My Prep Plan
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 4B) INTERVIEW PREPARATION ═══════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a3b85]/10 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-4">
              <Mic size={14} />
              Section B
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight mb-3">
              Interview preparation that sounds credible and calm
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-2xl">
              We train clear, truthful answers and confidence under pressure  -
              aligned to your route and background.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {INTERVIEW_POINTS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-gray-50 rounded-xl border border-gray-200 p-5 shadow-sm"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1a3b85] text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1a3b85] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#prep-plan"
                className="group inline-flex items-center gap-2 text-[#1a3b85] font-semibold text-sm hover:text-[#D4AF37] transition-colors"
              >
                Want to feel ready for questions? Get My Prep Plan
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
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-4">
              <Users size={14} />
              Best Fit
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              Who this is for
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="bg-[#1a3b85] px-6 py-4 flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#D4AF37]" />
                <h3 className="text-white font-semibold text-base sm:text-lg">
                  Best fit
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {BEST_FIT.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
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
              <div className="bg-gray-100 px-6 py-4 flex items-center gap-3">
                <XCircle size={20} className="text-gray-400" />
                <h3 className="text-gray-800 font-semibold text-base sm:text-lg">
                  Not for
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {NOT_FOR.map((item, i) => (
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

      {/* ═══════════════ 6) HOW IT WORKS ═══════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0f2554] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#D4AF37] blur-3xl" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 block">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              How it works
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {HOW_IT_WORKS.map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px+2rem)] h-px bg-gradient-to-r from-[#D4AF37]/60 to-[#D4AF37]/20" />
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

          <div className="mt-14 sm:mt-16 text-center">
            <div className="inline-block px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
                Diagnose →{" "}
                <span className="text-[#D4AF37] font-medium">train</span> →{" "}
                <span className="text-[#D4AF37] font-medium">test</span> →{" "}
                <span className="text-[#D4AF37] font-medium">refine</span>.
                That&apos;s the system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 7) BOUNDARIES ═══════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-4">
              <Shield size={14} />
              Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              What we will and will not do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="bg-[#1a3b85] px-6 py-4 flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#D4AF37]" />
                <h3 className="text-white font-semibold text-base sm:text-lg">
                  What we will do
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {WILL_DO.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
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
              <div className="bg-gray-100 px-6 py-4 flex items-center gap-3">
                <XCircle size={20} className="text-gray-400" />
                <h3 className="text-gray-800 font-semibold text-base sm:text-lg">
                  What we will not do
                </h3>
              </div>
              <div className="p-6 space-y-4">
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

      {/* ═══════════════ 8+9) FORM SECTION ═══════════════ */}
      <section
        id="prep-plan"
        className="scroll-mt-20 py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2554]/95 via-[#1a3b85]/92 to-[#0f2554]/95" />
        </div>

        <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 block drop-shadow-sm">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 drop-shadow-md">
              Ready to prepare properly?
            </h2>
            <p className="text-white text-base sm:text-lg max-w-xl mx-auto font-medium drop-shadow-sm">
              Get a diagnostic and prep plan tailored to your target and
              timeline.
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
                    Prep Plan Request
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Takes about 2 minutes. Plan &amp; next steps typically within
                    24-48 hours (working days).
                  </p>
                </div>

                {/* Row 1  - Destination + Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Destination{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. UK, Canada, Australia"
                      value={form.destination}
                      onChange={(e) =>
                        setForm({ ...form, destination: e.target.value })
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      IELTS test date / Interview date
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 15 April 2026"
                      value={form.date}
                      onChange={(e) =>
                        setForm({ ...form, date: e.target.value })
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2  - WhatsApp + Service */}
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
                      Select service{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <CustomDropdown
                      options={SERVICE_OPTIONS}
                      value={form.service}
                      onChange={(v) => setForm({ ...form, service: v })}
                      placeholder="IELTS / Interview / Both"
                    />
                  </div>
                </div>

                {/* Row 3  - Target band + Current level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Target band score (optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Overall 7.0"
                      value={form.targetBand}
                      onChange={(e) =>
                        setForm({ ...form, targetBand: e.target.value })
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Current level / last score (optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 6.0 overall, 5.5 writing"
                      value={form.currentLevel}
                      onChange={(e) =>
                        setForm({ ...form, currentLevel: e.target.value })
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Row 4  - Notes */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                    Biggest challenge (optional)
                  </label>
                  <textarea
                    placeholder="e.g. Speaking confidence, writing Task 2 structure..."
                    value={form.notes}
                    onChange={(e) =>
                      setForm({ ...form, notes: e.target.value })
                    }
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors resize-none"
                  />
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
                      Get My Prep Plan
                    </>
                  )}
                </button>

                <p className="text-[10px] sm:text-xs text-gray-400 text-center pt-0.5">
                  Plan &amp; next steps typically within 24&ndash;48 hours
                  (working days).
                </p>
              </form>
            </div>

            {/* Sidebar (2/5) */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15">
                  <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-0.5">
                    24&ndash;48h
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">
                    Response time
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15">
                  <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-0.5">
                    5
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
                    IAA Regulated &middot; {COMPANY_INFO.iaaReg}
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
                  {COMPANY_INFO.phone} &middot; {COMPANY_INFO.email}
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

export default IeltsInterviewPrepPageV2;
