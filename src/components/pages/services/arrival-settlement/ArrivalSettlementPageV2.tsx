"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  MapPin,
  ArrowRight,
  MessageCircle,
  Shield,
  CheckCircle2,
  XCircle,
  Loader2,
  Send,
  ChevronDown,
  Smartphone,
  Landmark,
  HeartPulse,
  Train,
  Home,
  ShieldAlert,
  CalendarDays,
  Users,
  ListChecks,
  ClipboardCheck,
} from "lucide-react";
import { sendContactEmail } from "@/actions/mailSending";
import TrustBarSection from "@/components/homev2/TrustBarSection";
import toast from "react-hot-toast";
import { COMPANY_INFO } from "@/constants/data";

/* ── Data ── */

const WHAT_YOU_GET = [
  {
    icon: <CalendarDays size={24} />,
    title: "Day-by-day checklist (Days 1-14)",
    description: "Priorities in the right order  - no guessing, no panic.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "SIM + data setup guidance",
    description: "What to choose, what to avoid, and where to get it.",
  },
  {
    icon: <Landmark size={24} />,
    title: "Banking setup steps",
    description:
      "What you typically need and how to prepare  - before you walk in.",
  },
  {
    icon: <HeartPulse size={24} />,
    title: "GP registration + health setup",
    description:
      "Registration guidance and health setup basics (UK context where applicable).",
  },
  {
    icon: <Train size={24} />,
    title: "Transport + commute setup",
    description: "Routes, costs, travel cards, and weekly budgeting.",
  },
  {
    icon: <Home size={24} />,
    title: "Accommodation move-in checks",
    description:
      "Inventory, deposits, contracts, and safety basics  - before you sign.",
  },
  {
    icon: <ShieldAlert size={24} />,
    title: "Safety + scam-avoidance checklist",
    description: "High-impact, practical tips to protect yourself from day one.",
  },
];

const FIRST_WEEK = [
  {
    days: "Day 1-2",
    title: "Essentials",
    items: [
      "SIM card + data plan",
      "Address confirmation",
      "Travel card setup",
      "Essential supplies",
    ],
  },
  {
    days: "Day 3-5",
    title: "Banking + documents",
    items: [
      "Banking steps + document prep",
      "Tenancy document checks",
      "Account setup preparation",
    ],
  },
  {
    days: "Day 6-7",
    title: "Health + routine",
    items: [
      "GP registration steps",
      "Budget rhythm setup",
      "Commute routine planning",
    ],
  },
];

const BEST_FIT = [
  "You're arriving to the UK (or a new city) and want a plan",
  "You want to avoid scams, bad contracts and rushed decisions",
  "You want a calm, ordered first-week execution checklist",
];

const NOT_FOR = [
  "Anyone expecting providers to approve everything instantly",
  "Anyone unwilling to follow local rules / visa conditions",
];

const HOW_IT_WORKS = [
  {
    step: "1",
    icon: <Send size={18} />,
    title: "Share your details",
    description:
      "Destination city, arrival date, and accommodation status.",
  },
  {
    step: "2",
    icon: <ListChecks size={18} />,
    title: "We build your plan",
    description:
      "First 14 Days Plan tailored to your timeline and priorities.",
  },
  {
    step: "3",
    icon: <ClipboardCheck size={18} />,
    title: "Receive your checklist",
    description:
      "Checklist + timeline + key links/scripts  - within 24-48 hours (working days).",
  },
  {
    step: "4",
    icon: <CheckCircle2 size={18} />,
    title: "Optional check-in",
    description:
      "10-minute check-in after Day 3 to adjust your plan if needed.",
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

const ACCOMMODATION_OPTIONS: DropdownOption[] = [
  {
    value: "Booked",
    label: "Booked",
    icon: <Home size={16} />,
    description: "Accommodation already confirmed",
  },
  {
    value: "Searching",
    label: "Searching",
    icon: <MapPin size={16} />,
    description: "Still looking for a place",
  },
  {
    value: "Not sure",
    label: "Not sure",
    icon: <ClipboardCheck size={16} />,
    description: "Need guidance on options",
  },
];

const PRIORITY_OPTIONS: DropdownOption[] = [
  {
    value: "Bank",
    label: "Bank account",
    icon: <Landmark size={16} />,
  },
  {
    value: "SIM",
    label: "SIM / data setup",
    icon: <Smartphone size={16} />,
  },
  {
    value: "GP",
    label: "GP registration",
    icon: <HeartPulse size={16} />,
  },
  {
    value: "Work",
    label: "Part-time work setup",
    icon: <Users size={16} />,
  },
];

/* ── Page Component ── */

const ArrivalSettlementPageV2 = () => {
  const [form, setForm] = useState({
    destination: "",
    arrivalDate: "",
    whatsapp: "",
    accommodation: "",
    priority: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.destination || !form.whatsapp) {
      toast.error(
        "Please enter your destination city and WhatsApp number."
      );
      return;
    }
    setLoading(true);
    try {
      const message = [
        `Destination: ${form.destination}`,
        `Arrival date: ${form.arrivalDate || "Not specified"}`,
        `Accommodation status: ${form.accommodation || "Not specified"}`,
        `Priority: ${form.priority || "Not specified"}`,
        `Notes: ${form.notes || "Not specified"}`,
      ].join("\n");

      const formData = new FormData();
      formData.append("name", "Arrival Plan Request");
      formData.append("email", "arrival-plan@uniguru.co");
      formData.append("mobile", form.whatsapp);
      formData.append(
        "subject",
        `Arrival Plan Request  - ${form.destination}`
      );
      formData.append("message", message);

      await sendContactEmail(formData);
      toast.success(
        "Request sent! Plan & next steps typically within 24-48 hours (working days)."
      );
      setForm({
        destination: "",
        arrivalDate: "",
        whatsapp: "",
        accommodation: "",
        priority: "",
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
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2000&q=90"
            alt="London cityscape at golden hour with Tower Bridge"
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
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/40" />
                <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase">
                  Settlement Support
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  Arrive calm.
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#f5d76e] bg-clip-text text-transparent">
                  Settle fast.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-3 max-w-2xl">
                A London-led first 14 days plan  - practical steps, in the right
                order.
              </p>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-2xl">
                We help you organise your first two weeks with a checklist,
                timeline, and practical setup guidance  - so you avoid common
                mistakes and settle confidently.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
                {[
                  "Plan in 24-48 hours (working days)",
                  "First 14 days checklist + timeline",
                  "Practical setup guidance (no fluff)",
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
                  href="#arrival-plan"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#c9a432] hover:from-[#e5c04a] hover:to-[#D4AF37] text-[#0d1b3e] font-semibold rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 text-sm sm:text-base"
                >
                  Get My Arrival Plan
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
                Calm structure beats panic decisions. We keep it practical and
                clear.
              </p>
            </div>
          </div>

          {/* Decorative icon */}
          <div className="absolute bottom-10 right-10 opacity-10 hidden xl:block">
            <MapPin size={120} className="text-white" />
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
              <CalendarDays size={14} />
              First 14 Days Plan
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              What you get
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
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

      {/* ═══════════════ 4) THE FIRST WEEK ═══════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a3b85]/10 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-4">
              <ListChecks size={14} />
              Week One
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight mb-3">
              The first week  - what matters most
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-2xl">
              Get these right and the rest of the month falls into place.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {FIRST_WEEK.map((block, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  <div className="bg-[#1a3b85] px-5 py-4">
                    <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-wide mb-0.5">
                      {block.days}
                    </p>
                    <h3 className="text-white font-semibold text-base">
                      {block.title}
                    </h3>
                  </div>
                  <div className="p-5 space-y-3">
                    {block.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="text-green-500 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#arrival-plan"
                className="group inline-flex items-center gap-2 text-[#1a3b85] font-semibold text-sm hover:text-[#D4AF37] transition-colors"
              >
                Want your personalised first-week plan? Get My Arrival Plan
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
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
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
                Share →{" "}
                <span className="text-[#D4AF37] font-medium">plan</span> →{" "}
                <span className="text-[#D4AF37] font-medium">checklist</span>{" "}
                →{" "}
                <span className="text-[#D4AF37] font-medium">check-in</span>.
                That&apos;s the system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 7) BOUNDARIES ═══════════════ */}
      <section className="py-10 sm:py-12 bg-amber-50 border-y border-amber-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex-shrink-0">
              <Shield size={20} />
            </div>
            <div>
              <h3 className="text-base font-semibold text-amber-900 mb-1">
                Boundaries
              </h3>
              <p className="text-amber-800 text-sm sm:text-base leading-relaxed">
                We provide practical settlement guidance. Approvals and terms
                are controlled by third parties (banks, landlords, providers).
                We do not guarantee outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 8) FORM SECTION ═══════════════ */}
      <section
        id="arrival-plan"
        className="scroll-mt-20 py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2554]/95 via-[#1a3b85]/92 to-[#0f2554]/95" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-10 xl:gap-14">
            {/* Form Column */}
            <div className="lg:col-span-3 mb-10 lg:mb-0">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 block">
                2-Minute Form
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-2">
                Arrival Plan Request
              </h2>
              <p className="text-white/50 text-sm mb-8">
                Plan &amp; next steps typically within 24-48 hours (working
                days).
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Destination */}
                  <div>
                    <label className="block text-white/80 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Destination country / city{" "}
                      <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. London, UK"
                      value={form.destination}
                      onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          destination: e.target.value,
                        }))
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base bg-white hover:border-[#1a3b85]/50 hover:shadow-sm focus:border-[#1a3b85] focus:ring-2 focus:ring-[#1a3b85]/20 outline-none transition-all"
                    />
                  </div>

                  {/* Arrival date */}
                  <div>
                    <label className="block text-white/80 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Arrival date (or week)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 15 September 2026"
                      value={form.arrivalDate}
                      onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          arrivalDate: e.target.value,
                        }))
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base bg-white hover:border-[#1a3b85]/50 hover:shadow-sm focus:border-[#1a3b85] focus:ring-2 focus:ring-[#1a3b85]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* WhatsApp */}
                  <div>
                    <label className="block text-white/80 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      WhatsApp number{" "}
                      <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 7XXX XXXXXX"
                      value={form.whatsapp}
                      onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          whatsapp: e.target.value,
                        }))
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base bg-white hover:border-[#1a3b85]/50 hover:shadow-sm focus:border-[#1a3b85] focus:ring-2 focus:ring-[#1a3b85]/20 outline-none transition-all"
                    />
                  </div>

                  {/* Accommodation status */}
                  <div>
                    <label className="block text-white/80 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Accommodation status
                    </label>
                    <CustomDropdown
                      options={ACCOMMODATION_OPTIONS}
                      value={form.accommodation}
                      onChange={(v) =>
                        setForm((p) => ({ ...p, accommodation: v }))
                      }
                      placeholder="Select status"
                    />
                  </div>
                </div>

                {/* Priority */}
                <div>
                  <label className="block text-white/80 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Top priority
                  </label>
                  <CustomDropdown
                    options={PRIORITY_OPTIONS}
                    value={form.priority}
                    onChange={(v) =>
                      setForm((p) => ({ ...p, priority: v }))
                    }
                    placeholder="What matters most right now?"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-white/80 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Notes (optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Anything else we should know?"
                    value={form.notes}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, notes: e.target.value }))
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base bg-white hover:border-[#1a3b85]/50 hover:shadow-sm focus:border-[#1a3b85] focus:ring-2 focus:ring-[#1a3b85]/20 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#c9a432] hover:from-[#e5c04a] hover:to-[#D4AF37] text-[#0d1b3e] font-semibold rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get My Arrival Plan
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>

                <p className="text-white/30 text-xs text-center">
                  Plan &amp; next steps typically within 24-48 hours (working
                  days).
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {/* Quick contact */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/15 p-6">
                <h3 className="text-white font-semibold text-base mb-4">
                  Prefer to chat?
                </h3>
                <a
                  href={COMPANY_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-lg transition-colors text-sm w-full justify-center"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
                <p className="text-white/40 text-xs mt-3 text-center">
                  {COMPANY_INFO.phone}
                </p>
              </div>

              {/* What happens next */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/15 p-6">
                <h3 className="text-white font-semibold text-base mb-4">
                  What happens next?
                </h3>
                <div className="space-y-3">
                  {[
                    "We review your details and timeline",
                    "Build your First 14 Days Plan",
                    "You receive checklist + timeline + links",
                    "Optional: Day 3 check-in to adjust",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold">{i + 1}</span>
                      </div>
                      <span className="text-white/70 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/15 p-6">
                <div className="space-y-3">
                  {[
                    {
                      icon: <Shield size={16} />,
                      text: `IAA Regulated ${COMPANY_INFO.iaaReg}`,
                    },
                    {
                      icon: <CheckCircle2 size={16} />,
                      text: `${COMPANY_INFO.googleReviews} Google Reviews`,
                    },
                    {
                      icon: <MapPin size={16} />,
                      text: COMPANY_INFO.address,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-white/50 text-sm"
                    >
                      <span className="text-[#D4AF37]">{item.icon}</span>
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
      <section className="py-10 sm:py-12 bg-[#0a1628]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/50 text-sm mb-4">
            Settlement guidance only. We do not guarantee approvals by banks /
            landlords / providers.
          </p>
          <p className="text-white/40 text-xs mb-4">
            WhatsApp {COMPANY_INFO.phone} · {COMPANY_INFO.email}
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {[
              {
                icon: <Shield size={12} />,
                text: `IAA Regulated ${COMPANY_INFO.iaaReg}`,
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
                className="inline-flex items-center gap-1.5 text-white/30 text-xs"
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

export default ArrivalSettlementPageV2;
