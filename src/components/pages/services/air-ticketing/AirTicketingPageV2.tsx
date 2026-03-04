"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Plane,
  Luggage,
  MapPin,
  ArrowRight,
  MessageCircle,
  Shield,
  Route,
  Timer,
  ClipboardCheck,
  CheckCircle2,
  XCircle,
  Loader2,
  Send,
  ChevronDown,
  Wallet,
  Briefcase as BriefcaseIcon,
  Package,
} from "lucide-react";
import { sendAccommodationEnquiryEmail } from "@/actions/mailSending";
import TrustBarSection from "@/components/homev2/TrustBarSection";
import toast from "react-hot-toast";

const WHATSAPP_LINK =
  "https://wa.me/447747525946?text=Hi%2C%20I%20need%20help%20with%20travel%20planning";

const WHAT_YOU_GET = [
  {
    icon: <Route size={24} />,
    title: "Route shortlist",
    description:
      "2\u20134 sensible options (arrival city, connection time, baggage assumptions).",
  },
  {
    icon: <Timer size={24} />,
    title: "Timing guidance",
    description:
      "When to book, what to avoid (peak weeks, risky layovers).",
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: "Arrival readiness",
    description:
      "A short checklist for the first 7 days (documents + essentials).",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: <MapPin size={22} />,
    title: "Share your destination",
    description: "You share destination city + intended arrival week.",
  },
  {
    step: "02",
    icon: <Luggage size={22} />,
    title: "Share your preferences",
    description: "You share budget band + baggage needs.",
  },
  {
    step: "03",
    icon: <Plane size={22} />,
    title: "We prepare your shortlist",
    description:
      "We request options from third-party travel partners and prepare your shortlist.",
  },
  {
    step: "04",
    icon: <CheckCircle2 size={22} />,
    title: "You choose, we guide",
    description:
      "You choose; we guide booking steps and confirm key terms (baggage, cancellations, change rules).",
  },
];

const WILL_DO = [
  "Shortlist sensible routes aligned to your arrival city and intake dates",
  "Flag risky layovers, baggage limitations, and strict fare conditions",
  "Help you plan conservative timing and arrival logistics",
  "Keep supplier details private; you deal with Uniguru for guidance",
];

const WONT_DO = [
  "Promise the cheapest fare or guaranteed pricing",
  "Hide restrictions or change/cancel rules",
  "Pressure you to book immediately",
  "Publish third-party partner details or portals",
];

const DISCLOSURE =
  "Flights are provided via third-party travel partners. Pricing, availability, baggage rules, and fare conditions are set by the provider and can change rapidly. We provide planning guidance and booking support.";

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
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
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
              <span className="text-[#1a3b85] flex-shrink-0">{selected.icon}</span>
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
          {/* Clear option */}
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
                <span className="text-sm font-medium block truncate">{opt.label}</span>
                {opt.description && (
                  <span className="text-xs text-gray-400 block">{opt.description}</span>
                )}
              </div>
              {value === opt.value && (
                <CheckCircle2 size={16} className="ml-auto text-[#1a3b85] flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const BUDGET_OPTIONS: DropdownOption[] = [
  { value: "Economy", label: "Economy", icon: <Wallet size={16} />, description: "Standard cabin" },
  { value: "Premium Economy", label: "Premium Economy", icon: <Wallet size={16} />, description: "Extra legroom + comfort" },
  { value: "Business", label: "Business", icon: <BriefcaseIcon size={16} />, description: "Full-service cabin" },
];

const BAGGAGE_OPTIONS: DropdownOption[] = [
  { value: "Carry-on only", label: "Carry-on only", icon: <Package size={16} />, description: "Hand luggage" },
  { value: "1 checked bag (23kg)", label: "1 checked bag (23 kg)", icon: <Luggage size={16} /> },
  { value: "2 checked bags (23kg each)", label: "2 checked bags (23 kg each)", icon: <Luggage size={16} /> },
  { value: "Heavy baggage (30kg+)", label: "Heavy baggage (30 kg+)", icon: <Luggage size={16} />, description: "Extra-weight allowance" },
];

const AirTicketingPageV2 = () => {
  const [form, setForm] = useState({
    destination: "",
    arrivalWeek: "",
    whatsapp: "",
    email: "",
    departureAirport: "",
    budget: "",
    baggage: "",
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
        `Arrival week: ${form.arrivalWeek || "Not specified"}`,
        `Departure airport: ${form.departureAirport || "Not specified"}`,
        `Budget band: ${form.budget || "Not specified"}`,
        `Baggage needs: ${form.baggage || "Not specified"}`,
      ].join("\n");

      await sendAccommodationEnquiryEmail({
        destination: form.destination,
        name: "Travel Plan Request",
        mobile: form.whatsapp,
        email: form.email || "travel-plan@uniguru.co",
        message,
      });
      toast.success(
        "Request sent! We will get back to you within 24 to 48 hours."
      );
      setForm({
        destination: "",
        arrivalWeek: "",
        whatsapp: "",
        email: "",
        departureAirport: "",
        budget: "",
        baggage: "",
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
            src="https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=2000&q=90"
            alt="London Heathrow airport with airplane at sunset"
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
                  London to Anywhere
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  Your flight,
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#f5d76e] bg-clip-text text-transparent">
                  planned right
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-3 max-w-2xl">
                Timing, routes, baggage, arrival — everything aligned.
              </p>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-2xl">
                We shortlist smart flight options through trusted travel partners
                and guide you through booking timing, baggage rules, and arrival
                planning. No pressure, no sales tactics.
              </p>

              {/* Elegant feature highlights */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
                {[
                  "Route plan in 24–48h",
                  "Baggage aligned",
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
                  href="#travel-plan"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#c9a432] hover:from-[#e5c04a] hover:to-[#D4AF37] text-[#0d1b3e] font-semibold rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 text-sm sm:text-base"
                >
                  Get My Travel Plan
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-semibold rounded-xl transition-all duration-300 text-sm sm:text-base"
                >
                  <MessageCircle size={18} className="text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>

              <p className="text-xs sm:text-sm text-white/40 max-w-lg">
                Prices change quickly — we plan conservatively and confirm fare
                conditions before you book.
              </p>
            </div>
          </div>

          {/* Decorative airplane silhouette */}
          <div className="absolute bottom-10 right-10 opacity-10 hidden xl:block">
            <Plane size={120} className="text-white rotate-45" />
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
              <Plane size={14} />
              What You Get
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              Your travel plan includes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
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

      {/* ═══════════════ 4) HOW IT WORKS ═══════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0f2554] relative overflow-hidden">
        {/* Subtle background pattern */}
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

          {/* Timeline layout */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/30 to-transparent -translate-x-1/2" />

              <div className="space-y-8 lg:space-y-0">
                {HOW_IT_WORKS.map((item, i) => (
                  <div
                    key={i}
                    className={`lg:flex lg:items-center lg:gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  >
                    {/* Content card */}
                    <div className={`lg:w-5/12 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-7">
                        <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`}>
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

                    {/* Step number (center) */}
                    <div className="hidden lg:flex lg:w-2/12 justify-center my-4 lg:my-0">
                      <div className="w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
                        <span className="text-xl font-bold text-[#0f2554]">{item.step}</span>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block lg:w-5/12" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom quote */}
          <div className="mt-14 sm:mt-16 text-center">
            <div className="inline-block px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
                Premium travel planning is not &quot;cheap tickets&quot;. It&apos;s
                <span className="text-[#D4AF37] font-medium"> fewer mistakes</span>,
                <span className="text-[#D4AF37] font-medium"> fewer surprises</span>, and
                <span className="text-[#D4AF37] font-medium"> cleaner arrival execution</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 5) BOUNDARIES TABLE ═══════════════ */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Will do */}
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

            {/* Won't do */}
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

      {/* ═══════════════ 6+7) MID-PAGE CTA ═══════════════ */}
      <section
        id="travel-plan"
        className="scroll-mt-20 py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2554]/95 via-[#1a3b85]/92 to-[#0f2554]/95" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* CTA Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 block drop-shadow-sm">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 drop-shadow-md">
              Ready to plan your flight properly?
            </h2>
            <p className="text-white text-base sm:text-lg max-w-xl mx-auto font-medium drop-shadow-sm">
              Get a travel plan aligned to your destination, intake, and baggage
              without pressure.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start max-w-[1200px] mx-auto">
            {/* Left side — Form (3/5) */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-gray-100 shadow-2xl p-6 sm:p-8 lg:p-10 space-y-4"
              >
                <div className="mb-2">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Travel Plan Request
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Takes about 2 minutes. Plan and next steps typically within
                    24–48 hours (working days).
                  </p>
                </div>

                {/* Row 1 — Destination + Arrival */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Destination country + city{" "}
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
                      Arrival week or date range
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. First week of September 2026"
                      value={form.arrivalWeek}
                      onChange={(e) =>
                        setForm({ ...form, arrivalWeek: e.target.value })
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2 — WhatsApp + Email */}
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
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3 — Departure + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Departure airport (optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Colombo (CMB)"
                      value={form.departureAirport}
                      onChange={(e) =>
                        setForm({ ...form, departureAirport: e.target.value })
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Budget band (optional)
                    </label>
                    <CustomDropdown
                      options={BUDGET_OPTIONS}
                      value={form.budget}
                      onChange={(v) => setForm({ ...form, budget: v })}
                      placeholder="Select budget"
                    />
                  </div>
                </div>

                {/* Row 4 — Baggage */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                    Baggage needs (optional)
                  </label>
                  <CustomDropdown
                    options={BAGGAGE_OPTIONS}
                    value={form.baggage}
                    onChange={(v) => setForm({ ...form, baggage: v })}
                    placeholder="Select baggage"
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
                      Get My Travel Plan
                    </>
                  )}
                </button>

                <p className="text-[10px] sm:text-xs text-gray-400 text-center pt-0.5">
                  Plan and next steps typically within 24–48 hours (working days).
                </p>
              </form>
            </div>

            {/* Right side — Sidebar (2/5) */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15">
                  <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-0.5">
                    24–48h
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">
                    Response time
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15">
                  <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-0.5">
                    2–4
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">
                    Route options
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
                    IAA Regulated &middot; F202537807
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={18} className="text-[#D4AF37]" />
                  </div>
                  <span className="text-white text-sm font-medium leading-snug">
                    100+ Google Reviews
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#D4AF37]" />
                  </div>
                  <span className="text-white text-sm font-medium leading-snug">
                    128 City Road, London EC1V 2NX
                  </span>
                </div>
              </div>

              {/* WhatsApp card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15">
                <p className="text-white font-semibold text-sm mb-3">
                  Prefer to chat first?
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
                <p className="text-white/60 text-xs mt-2.5 text-center">
                  +44 7747 525946 &middot; Immigration@uniguru.co
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

export default AirTicketingPageV2;
