"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MapPin,
  ChevronDown,
  CheckCircle2,
  Loader2,
  Send,
  ArrowRight,
  MessageCircle,
  Shield,
} from "lucide-react";
import { sendContactEmail } from "@/actions/mailSending";
import toast from "react-hot-toast";
import { COMPANY_INFO } from "@/constants/data";

/* ── Types ── */

interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
}

interface GetMyShortlistFormProps {
  /** Pre-select a destination (e.g. on destination pages) */
  preSelectedDestination?: string;
  /** Variant controls visual context */
  variant?: "card" | "section";
}

/* ── Custom Dropdown ── */

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
        onClick={() => setOpen(!open)}
        className={`w-full h-10 sm:h-11 border rounded-lg px-3 sm:px-4 text-left text-sm flex items-center justify-between gap-2 transition-colors bg-white ${
          open
            ? "border-[#1a3b85] ring-2 ring-[#1a3b85]/20"
            : "border-gray-300 hover:border-gray-400"
        }`}
      >
        <span
          className={`flex items-center gap-2 truncate ${
            selected ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {selected?.icon}
          {selected?.label || placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform flex-shrink-0 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-xl py-1 max-h-60 overflow-y-auto">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full px-4 py-2.5 text-left flex items-center gap-2.5 transition-colors ${
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

/* ── Dropdown Data ── */

const DESTINATION_OPTIONS: DropdownOption[] = [
  { value: "UK", label: "United Kingdom", icon: <MapPin size={16} /> },
  { value: "Canada", label: "Canada", icon: <MapPin size={16} /> },
  { value: "Australia", label: "Australia", icon: <MapPin size={16} /> },
  { value: "Netherlands", label: "Netherlands", icon: <MapPin size={16} /> },
  { value: "Germany", label: "Germany", icon: <MapPin size={16} /> },
  { value: "Not sure", label: "Not sure", icon: <MapPin size={16} /> },
];

const INTAKE_OPTIONS: DropdownOption[] = [
  { value: "January", label: "January" },
  { value: "May", label: "May" },
  { value: "September", label: "September" },
  { value: "November", label: "November" },
  { value: "Not sure", label: "Not sure" },
];

const QUALIFICATION_OPTIONS: DropdownOption[] = [
  { value: "O/L", label: "O/L" },
  { value: "A/L", label: "A/L" },
  { value: "Diploma", label: "Diploma" },
  { value: "HND", label: "HND" },
  { value: "Bachelor's", label: "Bachelor's" },
  { value: "Master's", label: "Master's" },
  { value: "Other", label: "Other" },
];

const STUDY_LEVEL_OPTIONS: DropdownOption[] = [
  { value: "Foundation", label: "Foundation" },
  { value: "Undergraduate", label: "Undergraduate" },
  { value: "Master's", label: "Master's" },
  { value: "Not sure", label: "Not sure" },
];

const BUDGET_OPTIONS: DropdownOption[] = [
  { value: "Under £8k", label: "Under £8k" },
  { value: "£8–12k", label: "£8–12k" },
  { value: "£12–18k", label: "£12–18k" },
  { value: "£18k+", label: "£18k+" },
  { value: "Not sure", label: "Not sure" },
];

const IN_UK_OPTIONS: DropdownOption[] = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];


/* ── Form Component ── */

const GetMyShortlistForm = ({
  preSelectedDestination = "",
  variant = "card",
}: GetMyShortlistFormProps) => {
  const [form, setForm] = useState({
    destination: preSelectedDestination,
    intake: "",
    whatsapp: "",
    qualification: "",
    studyLevel: "",
    budget: "",
    inUK: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.whatsapp) {
      toast.error("Please enter your WhatsApp number.");
      return;
    }
    if (!form.destination) {
      toast.error("Please select a destination.");
      return;
    }

    setLoading(true);
    try {
      const message = [
        `Destination: ${form.destination}`,
        `Intake: ${form.intake || "Not specified"}`,
        `Highest qualification: ${form.qualification || "Not specified"}`,
        `Study level: ${form.studyLevel || "Not specified"}`,
        `Budget range: ${form.budget || "Not specified"}`,
        `Currently in UK: ${form.inUK || "Not specified"}`,
        `Notes: ${form.notes || "Not specified"}`,
      ].join("\n");

      const formData = new FormData();
      formData.append("name", "Shortlist Request");
      formData.append("email", "shortlist@uniguru.co");
      formData.append("mobile", form.whatsapp);
      formData.append(
        "subject",
        `Shortlist Request – ${form.destination}${form.intake ? ` – ${form.intake}` : ""}${form.studyLevel ? ` – ${form.studyLevel}` : ""}`
      );
      formData.append("message", message);

      await sendContactEmail(formData);

      // Build WhatsApp auto-message
      const waText = encodeURIComponent(
        `Hi Kaz, I've submitted the Shortlist Request on Uniguru.\n` +
          `Destination: ${form.destination}\n` +
          `Intake: ${form.intake || "Not specified"}\n` +
          `Level: ${form.studyLevel || "Not specified"}\n` +
          `Budget: ${form.budget || "Not specified"}\n` +
          `Notes: ${form.notes || "None"}`
      );
      window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${waText}`, "_blank");

      toast.success(
        "Received. We'll review your details and message you on WhatsApp with your shortlist and next steps."
      );

      setForm({
        destination: preSelectedDestination,
        intake: "",
        whatsapp: "",
        qualification: "",
        studyLevel: "",
        budget: "",
        inUK: "",
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

  const isSection = variant === "section";

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-2xl space-y-3 sm:space-y-4 ${
        isSection ? "p-4 sm:p-6 md:p-8 lg:p-10" : "p-4 sm:p-5 md:p-6"
      }`}
    >
      {/* Header */}
      <div className="mb-1 sm:mb-2">
        <h3
          className={`font-semibold text-gray-900 ${
            isSection ? "text-lg sm:text-xl md:text-2xl" : "text-base sm:text-lg md:text-xl"
          }`}
        >
          Get My Shortlist{" "}
          <span className="text-gray-400 font-normal text-xs sm:text-sm">(2 minutes)</span>
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm mt-1">
          Eligibility-led options based on academic fit + budget fit +
          credibility fit.
        </p>
      </div>

      {/* Row 1 – Destination + Intake */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
            Destination <span className="text-red-400">*</span>
          </label>
          <CustomDropdown
            options={DESTINATION_OPTIONS}
            value={form.destination}
            onChange={(v) => setForm({ ...form, destination: v })}
            placeholder="Select destination"
          />
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
            Intake
          </label>
          <CustomDropdown
            options={INTAKE_OPTIONS}
            value={form.intake}
            onChange={(v) => setForm({ ...form, intake: v })}
            placeholder="Select intake"
          />
        </div>
      </div>

      {/* Row 2 – WhatsApp + Qualification */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
            WhatsApp number <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            placeholder="+44 7XXX XXXXXX"
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            className="w-full h-10 sm:h-11 border border-gray-300 rounded-lg px-3 sm:px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
            required
          />
          <p className="text-xs text-gray-400 mt-1">
            We&apos;ll reply on WhatsApp.
          </p>
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
            Highest qualification
          </label>
          <CustomDropdown
            options={QUALIFICATION_OPTIONS}
            value={form.qualification}
            onChange={(v) => setForm({ ...form, qualification: v })}
            placeholder="Select qualification"
          />
        </div>
      </div>

      {/* Row 3 – Study level + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
            Study level
          </label>
          <CustomDropdown
            options={STUDY_LEVEL_OPTIONS}
            value={form.studyLevel}
            onChange={(v) => setForm({ ...form, studyLevel: v })}
            placeholder="Select level"
          />
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
            Budget range{" "}
            <span className="text-gray-400 font-normal">(recommended)</span>
          </label>
          <CustomDropdown
            options={BUDGET_OPTIONS}
            value={form.budget}
            onChange={(v) => setForm({ ...form, budget: v })}
            placeholder="Select budget"
          />
        </div>
      </div>

      {/* Row 4 – In UK + Notes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
            Are you currently in the UK?
          </label>
          <CustomDropdown
            options={IN_UK_OPTIONS}
            value={form.inUK}
            onChange={(v) => setForm({ ...form, inUK: v })}
            placeholder="Select"
          />
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
            Notes{" "}
            <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            placeholder="City preference, course area, deadlines"
            maxLength={200}
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            className="w-full h-10 sm:h-11 border border-gray-300 rounded-lg px-3 sm:px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full h-11 sm:h-12 bg-[#1a3b85] hover:bg-[#152d6b] text-white font-semibold text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mt-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send size={16} />
            Get My Shortlist
            <ArrowRight size={16} />
          </>
        )}
      </button>

      <p className="text-[10px] sm:text-xs text-gray-400 text-center pt-0.5">
        Shortlist &amp; next steps typically within 24&ndash;48 hours (working
        days).
      </p>

      {/* Disclaimer */}
      <p className="text-[10px] text-gray-400 text-center">
        We provide guidance and support. We do not guarantee offers, visas, or
        outcomes.
      </p>
    </form>
  );
};

/* ── Wrapper with sidebar for "section" placement ── */


export const GetMyShortlistSection = ({
  preSelectedDestination,
}: {
  preSelectedDestination?: string;
}) => (
  <section
    id="shortlist"
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
          Not sure what you need?
        </h2>
        <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Start with your shortlist - we&apos;ll guide you from there.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
        {/* Form (3/5) */}
        <div className="lg:col-span-3">
          <GetMyShortlistForm
            preSelectedDestination={preSelectedDestination}
            variant="section"
          />
        </div>

        {/* Sidebar (2/5) */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15">
              <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-0.5">
                24-48h
              </div>
              <div className="text-white/70 text-xs sm:text-sm">
                Response time
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15">
              <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-0.5">
                3-7
              </div>
              <div className="text-white/70 text-xs sm:text-sm">
                Options shortlisted
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
        </div>
      </div>
    </div>
  </section>
);

export default GetMyShortlistForm;
