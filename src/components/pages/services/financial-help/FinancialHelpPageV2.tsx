"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Wallet,
  Calculator,
  MapPin,
  ArrowRight,
  MessageCircle,
  Shield,
  TrendingUp,
  FileText,
  ClipboardCheck,
  CheckCircle2,
  XCircle,
  Loader2,
  Send,
  ChevronDown,
  Banknote,
  AlertTriangle,
  Users,
  CalendarDays,
  Briefcase,
} from "lucide-react";
import { sendFinanceSupportEmail } from "@/actions/mailSending";
import TrustBarSection from "@/components/homev2/TrustBarSection";
import toast from "react-hot-toast";
import { COMPANY_INFO } from "@/constants/data";

const WHAT_YOU_GET = [
  {
    icon: <Calculator size={24} />,
    title: "Budget framework",
    description:
      "Tuition + living + one-off costs + monthly runway.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Affordability check",
    description:
      "What a realistic repayment could look like (based on typical terms you provide).",
  },
  {
    icon: <FileText size={24} />,
    title: "Funding pathway map",
    description:
      "Self / family / sponsor / loan \u2014 pros and risks for your profile.",
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: "Option shortlist",
    description:
      "Third-party provider categories to explore, with the questions you should ask before committing.",
  },
];

const WHEN_USEFUL = [
  "You have an intake date but your funding plan is unclear",
  "You need to reduce risk and avoid high-cost borrowing traps",
  "You want a realistic monthly plan (London vs outside London, if UK)",
  "You need help comparing personal vs education finance options responsibly",
];

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: <MapPin size={22} />,
    title: "Share your destination",
    description:
      "You share destination + intake + total budget range.",
  },
  {
    step: "02",
    icon: <Wallet size={22} />,
    title: "Share your funding method",
    description:
      "You share funding method (self / family / sponsor / loan) + timeline.",
  },
  {
    step: "03",
    icon: <AlertTriangle size={22} />,
    title: "We build your plan",
    description:
      "We build your finance plan and flag risk areas (affordability, gaps, unrealistic assumptions).",
  },
  {
    step: "04",
    icon: <CheckCircle2 size={22} />,
    title: "We guide next steps",
    description:
      "Where relevant, we guide you toward third-party finance pathways and the correct questions to ask.",
  },
];

const WILL_DO = [
  "Build a realistic budget and affordability-led plan",
  "Flag high-risk assumptions and hidden costs",
  "Explain what lenders typically look for (documents, stability, affordability)",
  "Guide you to third-party options where relevant and eligible",
];

const WONT_DO = [
  "Promise loan approval or specific rates",
  "Encourage irresponsible borrowing",
  "Misrepresent lender criteria or \u2018shortcuts\u2019",
  "Act as the lender or give regulated financial advice",
];

const DISCLOSURE =
  "Uniguru provides budgeting guidance and helps you compare potential third-party finance options. We are not a lender. Any loan/finance product is offered by third-party providers and subject to their eligibility checks, terms, and approvals. We do not provide regulated financial advice. Borrowing is a serious commitment \u2014 we encourage you to borrow responsibly and only if affordable.";

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
        <div className="absolute z-50 mt-1.5 w-full bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
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

const FUNDING_OPTIONS: DropdownOption[] = [
  { value: "Self", label: "Self-funded", icon: <Wallet size={16} /> },
  { value: "Family", label: "Family", icon: <Users size={16} /> },
  {
    value: "Sponsor",
    label: "Sponsor",
    icon: <Users size={16} />,
    description: "Employer or organisation",
  },
  {
    value: "Loan",
    label: "Loan",
    icon: <Banknote size={16} />,
    description: "Personal or education finance",
  },
  {
    value: "Mixed",
    label: "Mixed",
    icon: <TrendingUp size={16} />,
    description: "Combination of sources",
  },
];

const INCOME_OPTIONS: DropdownOption[] = [
  { value: "Employed", label: "Employed", icon: <Briefcase size={16} /> },
  {
    value: "Self-employed",
    label: "Self-employed",
    icon: <Briefcase size={16} />,
  },
  {
    value: "Student",
    label: "Student",
    icon: <CalendarDays size={16} />,
    description: "Currently studying",
  },
];

const FinancialHelpPageV2 = () => {
  const [form, setForm] = useState({
    destination: "",
    intake: "",
    whatsapp: "",
    funding: "",
    budget: "",
    income: "",
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
        `Intake month: ${form.intake || "Not specified"}`,
        `Funding method: ${form.funding || "Not specified"}`,
        `Budget range: ${form.budget || "Not specified"}`,
        `Income situation: ${form.income || "Not specified"}`,
        `Notes: ${form.notes || "None"}`,
      ].join("\n");

      await sendFinanceSupportEmail({
        destination: form.destination,
        name: "Finance Plan Request",
        mobile: form.whatsapp,
        email: "finance-plan@uniguru.co",
        message,
      });
      toast.success(
        "Request sent! We will get back to you within 24 to 48 hours."
      );
      setForm({
        destination: "",
        intake: "",
        whatsapp: "",
        funding: "",
        budget: "",
        income: "",
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
      {/* ═══════════════ 1) HERO + TRUST BAR ═══════════════ */}
      <div className="min-h-screen flex flex-col">
        <section className="relative flex-1 flex items-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=90"
            alt="Financial planning workspace"
            fill
            unoptimized
            quality={90}
            className="object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <Wallet size={16} className="text-[#D4AF37]" />
                <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                  Financial Planning Support
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6 sm:mb-8">
                Financial help
                <br />
                <span className="text-[#D4AF37]">
                  that stays credible
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-3 max-w-2xl">
                Because affordability matters - your plan should be
                realistic, not optimistic.
              </p>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-2xl">
                If you are short of funds, we help you build a clear budget
                framework and compare potential third-party finance pathways
                (personal loans, education finance, or banking options) where
                relevant - with responsible borrowing in mind.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
                {[
                  "Finance plan in 24-48h",
                  "Affordability first",
                  "Third-party guided",
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
                  href="#finance-plan"
                  className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-bold rounded-lg transition-all duration-200 text-sm shadow-md"
                >
                  Get My Finance Plan
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

              <p className="text-xs sm:text-sm text-white/40 max-w-lg">
                We prioritise affordability and clarity - no pressure, no
                unrealistic promises.
              </p>
            </div>
          </div>
        </section>

        {/* 2) Trust Bar */}
        <TrustBarSection />
      </div>

      {/* ═══════════════ 3) WHAT YOU GET ═══════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Wallet size={14} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                Finance Plan Pack
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              What you get
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
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

      {/* ═══════════════ 4) WHEN THIS IS USEFUL ═══════════════ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <CheckCircle2 size={14} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                Is This For You?
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              When this service is useful
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {WHEN_USEFUL.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2
                  size={20}
                  className="text-[#D4AF37] flex-shrink-0 mt-0.5"
                />
                <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 5) HOW IT WORKS ═══════════════ */}
      <section className="py-16 sm:py-20 bg-[#0f2554] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Briefcase size={14} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                Process
              </span>
            </div>
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

          {/* Bottom quote */}
          <div className="mt-14 sm:mt-16 text-center">
            <div className="inline-block px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
                Premium financial help is not &quot;more borrowing&quot;.
                It&apos;s
                <span className="text-[#D4AF37] font-medium">
                  {" "}
                  a cleaner plan
                </span>
                ,
                <span className="text-[#D4AF37] font-medium">
                  {" "}
                  lower risk
                </span>
                , and
                <span className="text-[#D4AF37] font-medium">
                  {" "}
                  better decisions
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 6) BOUNDARIES TABLE ═══════════════ */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Will do */}
            <div className="rounded-2xl border-2 border-emerald-200 bg-white shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-emerald-600" />
                </div>
                <h3 className="text-[#1a3b85] font-semibold text-base sm:text-lg">
                  What we will do
                </h3>
              </div>
              <div className="space-y-4">
                {WILL_DO.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-emerald-600 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Won't do */}
            <div className="rounded-2xl border-2 border-red-200 bg-white shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                  <XCircle size={20} className="text-red-500" />
                </div>
                <h3 className="text-[#1a3b85] font-semibold text-base sm:text-lg">
                  What we will not do
                </h3>
              </div>
              <div className="space-y-4">
                {WONT_DO.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <XCircle
                      size={18}
                      className="text-red-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Responsible borrowing */}
          <div className="mt-10 max-w-3xl mx-auto">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 flex items-start gap-3">
              <AlertTriangle
                size={20}
                className="text-amber-500 flex-shrink-0 mt-0.5"
              />
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Responsible borrowing:</strong> Borrowing is a serious
                commitment. We encourage you to borrow only what is affordable,
                understand the total cost of credit, and avoid commitments that
                could put you under financial pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 7) FORM SECTION ═══════════════ */}
      <section
        id="finance-plan"
        className="scroll-mt-20 py-16 sm:py-20 relative overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#0f2554]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Send size={14} className="text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                Get Started
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
              Want a finance plan that actually holds up?
            </h2>
            <p className="text-white text-base sm:text-lg max-w-xl mx-auto font-medium">
              Get a structured budget and funding pathway - tailored to
              your destination and intake.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start max-w-[1200px] mx-auto">
            {/* Form (3/5) */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-gray-100 shadow-2xl p-6 sm:p-8 lg:p-10 space-y-4"
              >
                <div className="mb-2">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Finance Plan Request
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Takes about 2 minutes. Plan and next steps typically within
                    24-48 hours (working days).
                  </p>
                </div>

                {/* Row 1  - Destination + Intake */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Destination (country / city){" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. UK, London"
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
                      Intake month
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

                {/* Row 2  - WhatsApp + Funding */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      WhatsApp number{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 7700 900 000"
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
                      Funding method
                    </label>
                    <CustomDropdown
                      options={FUNDING_OPTIONS}
                      value={form.funding}
                      onChange={(v) => setForm({ ...form, funding: v })}
                      placeholder="Select method"
                    />
                  </div>
                </div>

                {/* Row 3  - Budget + Income */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Total budget range (optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. £15,000 - £25,000"
                      value={form.budget}
                      onChange={(e) =>
                        setForm({ ...form, budget: e.target.value })
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Income situation (optional)
                    </label>
                    <CustomDropdown
                      options={INCOME_OPTIONS}
                      value={form.income}
                      onChange={(v) => setForm({ ...form, income: v })}
                      placeholder="Select"
                    />
                  </div>
                </div>

                {/* Row 4  - Notes */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                    Notes (optional)
                  </label>
                  <textarea
                    placeholder="Any deadlines or constraints..."
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
                      Get My Finance Plan
                    </>
                  )}
                </button>

                <p className="text-[10px] sm:text-xs text-gray-400 text-center pt-0.5">
                  Plan and next steps typically within 24-48 hours (working
                  days).
                </p>
              </form>
            </div>

            {/* Sidebar (2/5) */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Quick stats */}
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
                    4
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">
                    Deliverables
                  </div>
                </div>
              </div>

              {/* Trust features */}
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

              {/* WhatsApp card */}
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

              {/* Disclosure */}
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

export default FinancialHelpPageV2;
