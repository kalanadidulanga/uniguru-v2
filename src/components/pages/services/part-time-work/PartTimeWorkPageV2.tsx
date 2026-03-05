"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Briefcase,
  FileText,
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
  Mail,
  Search,
  TrendingUp,
  Users,
  Coffee,
  ShoppingBag,
  Package,
  Monitor,
  HeartPulse,
  Building2,
  Clock,
  Zap,
  BarChart3,
  Navigation,
  Globe,
  AlertTriangle,
} from "lucide-react";
import { sendContactEmail } from "@/actions/mailSending";
import TrustBarSection from "@/components/homev2/TrustBarSection";
import toast from "react-hot-toast";

const WHATSAPP_LINK =
  "https://wa.me/447747525946?text=Hi%2C%20I%20need%20help%20with%20part-time%20work%20support";

/* ── Data ── */

const WHAT_YOU_GET = [
  {
    icon: <FileText size={24} />,
    title: "CV & profile pack",
    description: "CV structure + role-specific versions (where needed).",
  },
  {
    icon: <Mail size={24} />,
    title: "Application templates",
    description: "Short cover messages and follow-up scripts.",
  },
  {
    icon: <Search size={24} />,
    title: "Job-search system",
    description: "Where to apply + daily routine + tracking sheet logic.",
  },
  {
    icon: <Users size={24} />,
    title: "Interview readiness",
    description: "Common questions + structured answer frameworks.",
  },
  {
    icon: <Zap size={24} />,
    title: "Execution plan",
    description: "A 7-day sprint plan (tasks + targets) to build momentum.",
  },
];

const ROLES = [
  {
    icon: <Coffee size={20} />,
    title: "Hospitality & restaurants",
    examples:
      "Waiter, barista, kitchen porter, cashier, takeaway assistant",
  },
  {
    icon: <ShoppingBag size={20} />,
    title: "Retail",
    examples: "Sales assistant, stock assistant, store associate",
  },
  {
    icon: <Package size={20} />,
    title: "Logistics (where eligible)",
    examples: "Warehouse operative, picker/packer",
  },
  {
    icon: <Building2 size={20} />,
    title: "Office / admin",
    examples: "Receptionist, data entry, basic admin assistant",
  },
  {
    icon: <HeartPulse size={20} />,
    title: "Care / support roles",
    examples: "Only where eligible and suitably qualified",
  },
  {
    icon: <Monitor size={20} />,
    title: "IT / tech (entry-level)",
    examples:
      "IT support assistant, helpdesk trainee, junior support roles (where available)",
  },
];

const LOCATION_POINTS = [
  {
    icon: <Navigation size={20} />,
    title: "Postcode radius",
    description: "Your city/postcode radius and realistic commute time.",
  },
  {
    icon: <Clock size={20} />,
    title: "Shift availability",
    description:
      "Weekends/evenings and hiring velocity sectors in your area.",
  },
  {
    icon: <Target size={20} />,
    title: "High-yield target list",
    description:
      "Local employers, agencies (where appropriate), and \u2018walk-in\u2019 opportunities.",
  },
];

const JOB_SOURCES = [
  {
    icon: <Search size={20} />,
    title: "Job boards",
    description: "Filtered by radius + shift patterns (and saved searches).",
  },
  {
    icon: <Mail size={20} />,
    title: "Employer direct outreach",
    description: "Message templates + follow-up schedule.",
  },
  {
    icon: <MapPin size={20} />,
    title: "Google Maps target list",
    description:
      "Local restaurants, retailers, warehouses \u2014 with outreach scripts.",
  },
  {
    icon: <Users size={20} />,
    title: "Partner direction",
    description: "Where available, plus referral approach.",
  },
];

const SPRINT_DAYS = [
  { day: "Day 1", tasks: "CV final + profile setup + shortlist target roles" },
  { day: "Day 2", tasks: "Apply to 15\u201325 roles + follow-up template" },
  {
    day: "Day 3",
    tasks: "Apply to 15\u201325 roles + improve based on responses",
  },
  {
    day: "Day 4",
    tasks: "Interview prep + mock questions + apply 10\u201315 roles",
  },
  { day: "Day 5", tasks: "Apply 15\u201325 roles + referrals/outreach" },
  {
    day: "Day 6",
    tasks: "Shift focus to best-performing channels + reapply smartly",
  },
  {
    day: "Day 7",
    tasks: "Review results, iterate CV/messages, set Week 2 targets",
  },
];

const BEST_FIT = [
  "You can commit to daily applications and follow-ups",
  "You want a structured system, not random job boards",
  "You\u2019re willing to start with realistic roles and build momentum",
];

const NOT_FOR = [
  "Anyone seeking guaranteed placement",
  "Anyone unwilling to follow visa conditions",
  "Anyone expecting high pay without experience or availability",
];

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: <MapPin size={22} />,
    title: "Share your details",
    description: "City, availability, and role preferences.",
  },
  {
    step: "02",
    icon: <FileText size={22} />,
    title: "CV + templates",
    description: "We optimise your CV and prepare templates.",
  },
  {
    step: "03",
    icon: <ClipboardCheck size={22} />,
    title: "System + sprint plan",
    description:
      "You receive your job-search system + 7-day sprint plan.",
  },
  {
    step: "04",
    icon: <Users size={22} />,
    title: "Interview + partner direction",
    description:
      "Optional: interview practice and partner direction (where available).",
  },
];

const WILL_DO = [
  "Provide a structured work plan, CV, templates, and search system",
  "Advise role choices aligned to your availability and location",
  "Improve applications through feedback and iteration",
  "Share partner directions where available",
];

const WONT_DO = [
  "Guarantee job placement or earnings",
  "Encourage breach of visa conditions",
  "Use spam tactics that harm your profile",
  "Sell fake \u2018job offers\u2019 or shortcuts",
];

const DISCLAIMER =
  "We provide job-search readiness support and guidance only. We do not guarantee job placement, interview outcomes, or earnings. Employment depends on your eligibility, local demand, and employer decisions. Always comply with your visa conditions.";

/* ── City Selector Data ── */

interface CityData {
  sectors: string[];
  sources: string[];
  roles: string[];
}

const CITY_DATA: Record<string, CityData> = {
  London: {
    sectors: [
      "Hospitality & restaurants",
      "Retail & fashion",
      "Office/admin support",
    ],
    sources: [
      "Indeed London",
      "Reed.co.uk",
      "Employer walk-ins (Central/Zone 2)",
    ],
    roles: [
      "Barista, waiter, sales assistant",
      "Kitchen porter, stock assistant",
      "Receptionist, data entry clerk",
    ],
  },
  Manchester: {
    sectors: ["Hospitality", "Warehouse & logistics", "Retail"],
    sources: ["Indeed Manchester", "Totaljobs", "Local agency sign-ups"],
    roles: [
      "Barista, kitchen porter, cashier",
      "Warehouse operative, picker/packer",
      "Sales assistant, store associate",
    ],
  },
  Birmingham: {
    sectors: ["Retail & food service", "Logistics", "Care/support"],
    sources: ["Indeed Birmingham", "CV-Library", "Google Maps outreach"],
    roles: [
      "Takeaway assistant, waiter",
      "Warehouse operative",
      "Admin assistant, helpdesk trainee",
    ],
  },
  Leeds: {
    sectors: ["Hospitality", "Retail", "Office/admin"],
    sources: ["Indeed Leeds", "Reed.co.uk", "Local employer outreach"],
    roles: [
      "Barista, kitchen porter",
      "Stock assistant, cashier",
      "Receptionist, data entry",
    ],
  },
  Glasgow: {
    sectors: ["Hospitality & tourism", "Retail", "Logistics"],
    sources: ["Indeed Glasgow", "S1jobs", "Google Maps target list"],
    roles: [
      "Waiter, barista, hotel staff",
      "Sales assistant, store associate",
      "Warehouse operative",
    ],
  },
};

const CITIES = Object.keys(CITY_DATA);

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

/* ── Multi-select Dropdown for Roles ── */
const MultiSelectDropdown = ({
  options,
  values,
  onChange,
  placeholder,
  max = 3,
}: {
  options: DropdownOption[];
  values: string[];
  onChange: (v: string[]) => void;
  placeholder: string;
  max?: number;
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

  const toggle = (val: string) => {
    if (values.includes(val)) {
      onChange(values.filter((v) => v !== val));
    } else if (values.length < max) {
      onChange([...values, val]);
    }
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`w-full min-h-[44px] border rounded-lg pl-4 pr-10 text-left text-sm sm:text-base transition-all cursor-pointer flex items-center gap-2 flex-wrap py-2 ${
          open
            ? "border-[#1a3b85] ring-2 ring-[#1a3b85]/20 bg-white"
            : "border-gray-300 bg-white hover:border-[#1a3b85]/50 hover:shadow-sm"
        }`}
      >
        {values.length > 0 ? (
          values.map((v) => {
            const opt = options.find((o) => o.value === v);
            return (
              <span
                key={v}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#1a3b85]/10 text-[#1a3b85] text-xs font-medium"
              >
                {opt?.label || v}
              </span>
            );
          })
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
          {values.length > 0 && (
            <button
              type="button"
              onClick={() => {
                onChange([]);
                setOpen(false);
              }}
              className="w-full px-4 py-2.5 text-left text-xs text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors border-b border-gray-100"
            >
              Clear all
            </button>
          )}
          {options.map((opt) => {
            const isSelected = values.includes(opt.value);
            const isDisabled = !isSelected && values.length >= max;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => !isDisabled && toggle(opt.value)}
                className={`w-full px-4 py-3 text-left transition-colors flex items-center gap-3 ${
                  isSelected
                    ? "bg-[#1a3b85]/5 text-[#1a3b85]"
                    : isDisabled
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {opt.icon && (
                  <span
                    className={`flex-shrink-0 ${
                      isSelected
                        ? "text-[#1a3b85]"
                        : isDisabled
                        ? "text-gray-300"
                        : "text-gray-400"
                    }`}
                  >
                    {opt.icon}
                  </span>
                )}
                <div className="min-w-0">
                  <span className="text-sm font-medium block truncate">
                    {opt.label}
                  </span>
                </div>
                {isSelected && (
                  <CheckCircle2
                    size={16}
                    className="ml-auto text-[#1a3b85] flex-shrink-0"
                  />
                )}
              </button>
            );
          })}
          <div className="px-4 py-2 text-[10px] text-gray-400 border-t border-gray-100">
            Select up to {max} roles
          </div>
        </div>
      )}
    </div>
  );
};

const EXPERIENCE_OPTIONS: DropdownOption[] = [
  {
    value: "None",
    label: "No experience",
    icon: <Briefcase size={16} />,
    description: "First time looking for work",
  },
  {
    value: "Some",
    label: "Some experience",
    icon: <Briefcase size={16} />,
    description: "Worked part-time before",
  },
  {
    value: "Experienced",
    label: "Experienced",
    icon: <Briefcase size={16} />,
    description: "Comfortable in part-time roles",
  },
];

const ROLE_OPTIONS: DropdownOption[] = [
  { value: "Hospitality", label: "Hospitality & restaurants", icon: <Coffee size={16} /> },
  { value: "Retail", label: "Retail", icon: <ShoppingBag size={16} /> },
  { value: "Logistics", label: "Logistics / warehouse", icon: <Package size={16} /> },
  { value: "Office/Admin", label: "Office / admin", icon: <Building2 size={16} /> },
  { value: "Care/Support", label: "Care / support", icon: <HeartPulse size={16} /> },
  { value: "IT/Tech", label: "IT / tech (entry-level)", icon: <Monitor size={16} /> },
];

/* ── Page Component ── */

const PartTimeWorkPageV2 = () => {
  const [activeCity, setActiveCity] = useState("London");
  const [form, setForm] = useState({
    city: "",
    startDate: "",
    availability: "",
    whatsapp: "",
    experience: "",
    roles: [] as string[],
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.city || !form.whatsapp) {
      toast.error("Please fill in city/location and WhatsApp number.");
      return;
    }
    setLoading(true);
    try {
      const message = [
        `City/Location: ${form.city}`,
        `Start date: ${form.startDate || "Not specified"}`,
        `Availability: ${form.availability || "Not specified"}`,
        `Experience level: ${form.experience || "Not specified"}`,
        `Preferred roles: ${form.roles.length > 0 ? form.roles.join(", ") : "Not specified"}`,
        `Notes: ${form.notes || "Not specified"}`,
      ].join("\n");

      const formData = new FormData();
      formData.append("name", "Work Plan Request");
      formData.append("email", "work-plan@uniguru.co");
      formData.append("mobile", form.whatsapp);
      formData.append(
        "subject",
        `Work Plan Request \u2014 ${form.city}${form.roles.length > 0 ? ` \u2014 ${form.roles.join(", ")}` : ""}`
      );
      formData.append("message", message);

      await sendContactEmail(formData);
      toast.success(
        "Request sent! We will get back to you within 24 to 48 hours."
      );
      setForm({
        city: "",
        startDate: "",
        availability: "",
        whatsapp: "",
        experience: "",
        roles: [],
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

  const cityData = CITY_DATA[activeCity];

  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════════ 1) HERO ═══════════════ */}
      <div className="min-h-screen flex flex-col">
        <section className="relative flex-1 flex items-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=90"
            alt="Young professionals in a modern workplace"
            fill
            quality={90}
            className="object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-[#0a1628]/20" />

          <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#D4AF37]/10 blur-2xl animate-pulse hidden lg:block" />
          <div className="absolute bottom-40 right-40 w-24 h-24 rounded-full bg-white/5 blur-xl hidden lg:block" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#D4AF37]/5 blur-lg hidden lg:block" />

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/40" />
                <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase">
                  Work Readiness Support
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  Part&#8209;time work support
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#f5d76e] bg-clip-text text-transparent">
                   - done responsibly
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-3 max-w-2xl">
                Because the goal isn&apos;t a promise  - it&apos;s readiness,
                access, and fast execution.
              </p>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-2xl">
                We help you prepare for part&#8209;time work with a CV &amp;
                profile pack, a daily job-search system, and practical interview
                readiness  - with partner direction where available.
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
                {[
                  "Work plan in 24\u201348h (working days)",
                  "CV + application templates",
                  "Job-search system + tracking",
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

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#work-plan"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#c9a432] hover:from-[#e5c04a] hover:to-[#D4AF37] text-[#0d1b3e] font-semibold rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 text-sm sm:text-base"
                >
                  Get My Work Plan
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
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
                No guarantees. We build a system that increases your odds and
                keeps you compliant.
              </p>
            </div>
          </div>

          <div className="absolute bottom-10 right-10 opacity-10 hidden xl:block">
            <Briefcase size={120} className="text-white" />
          </div>
        </section>

        <TrustBarSection />
      </div>

      {/* ═══════════════ 3) WHAT YOU GET ═══════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-4">
              <Briefcase size={14} />
              Work Plan Pack
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

      {/* ═══════════════ 4) ROLES WE SUPPORT ═══════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a3b85]/10 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-4">
              <Briefcase size={14} />
              Roles
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              Roles we can support
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {ROLES.map((role, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1a3b85] text-white flex-shrink-0">
                  {role.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1a3b85] mb-1">
                    {role.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {role.examples}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8 max-w-lg mx-auto">
            Role suitability depends on your location, availability, experience,
            and eligibility.
          </p>
        </div>
      </section>

      {/* ═══════════════ CITY SELECTOR ═══════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-4">
              <Globe size={14} />
              By City
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              Choose your city
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CITIES.map((city) => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCity === city
                    ? "bg-[#D4AF37] text-[#0d1b3e] shadow-md shadow-[#D4AF37]/20"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {cityData && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="bg-[#1a3b85] px-5 py-3.5 flex items-center gap-2.5">
                  <TrendingUp size={18} className="text-[#D4AF37]" />
                  <h3 className="text-white font-semibold text-sm">
                    High-hiring sectors
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  {cityData.sectors.map((s, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="text-green-500 flex-shrink-0"
                      />
                      <span className="text-gray-700 text-sm">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="bg-[#1a3b85] px-5 py-3.5 flex items-center gap-2.5">
                  <Search size={18} className="text-[#D4AF37]" />
                  <h3 className="text-white font-semibold text-sm">
                    Best job sources
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  {cityData.sources.map((s, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="text-green-500 flex-shrink-0"
                      />
                      <span className="text-gray-700 text-sm">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="bg-[#1a3b85] px-5 py-3.5 flex items-center gap-2.5">
                  <Briefcase size={18} className="text-[#D4AF37]" />
                  <h3 className="text-white font-semibold text-sm">
                    Example roles
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  {cityData.roles.map((s, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="text-green-500 flex-shrink-0"
                      />
                      <span className="text-gray-700 text-sm">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="text-center mt-8">
            <a
              href="#work-plan"
              className="group inline-flex items-center gap-2 text-[#1a3b85] font-semibold text-sm hover:text-[#D4AF37] transition-colors"
            >
              Get My Work Plan
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ LOCATION-FIRST STRATEGY ═══════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a3b85]/10 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-4">
              <Navigation size={14} />
              Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight mb-3">
              Location-first strategy
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-2xl">
              Accommodation, commute and shift patterns decide success. We
              structure your search around:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {LOCATION_POINTS.map((item, i) => (
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
                href="#work-plan"
                className="group inline-flex items-center gap-2 text-[#1a3b85] font-semibold text-sm hover:text-[#D4AF37] transition-colors"
              >
                Get My Work Plan
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ JOB SOURCES ═══════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1a3b85]/10 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-4">
              <Search size={14} />
              Sources
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight mb-3">
              Job sources we structure for you
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
              {JOB_SOURCES.map((item, i) => (
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
                href="#work-plan"
                className="group inline-flex items-center gap-2 text-[#1a3b85] font-semibold text-sm hover:text-[#D4AF37] transition-colors"
              >
                Get My Work Plan
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

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/30 to-transparent -translate-x-1/2" />

              <div className="space-y-8 lg:space-y-0">
                {HOW_IT_WORKS.map((item, i) => (
                  <div
                    key={i}
                    className={`lg:flex lg:items-center lg:gap-8 ${
                      i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`lg:w-5/12 ${
                        i % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-7">
                        <div
                          className={`flex items-center gap-3 mb-3 ${
                            i % 2 === 0
                              ? "lg:justify-end"
                              : "lg:justify-start"
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

                    <div className="hidden lg:flex lg:w-2/12 justify-center my-4 lg:my-0">
                      <div className="w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
                        <span className="text-xl font-bold text-[#0f2554]">
                          {item.step}
                        </span>
                      </div>
                    </div>

                    <div className="hidden lg:block lg:w-5/12" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 sm:mt-16 text-center">
            <div className="inline-block px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
                Premium support ={" "}
                <span className="text-[#D4AF37] font-medium">
                  fewer mistakes
                </span>{" "}
                +{" "}
                <span className="text-[#D4AF37] font-medium">
                  faster iterations
                </span>{" "}
                +{" "}
                <span className="text-[#D4AF37] font-medium">
                  consistent execution
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 7) 7-DAY SPRINT ═══════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-4">
              <Zap size={14} />
              Sprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight">
              The 7&#8209;Day Execution Sprint
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {SPRINT_DAYS.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-50 rounded-xl border border-gray-200 p-5 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1a3b85] text-white flex-shrink-0">
                  <span className="text-sm font-bold">
                    {item.day.replace("Day ", "")}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1a3b85] mb-0.5">
                    {item.day}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.tasks}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              This sprint is a system. The output is momentum and improved
              conversion from application \u2192 interview.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ 8) BOUNDARIES ═══════════════ */}
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

          {/* 9) Visa compliance note */}
          <div className="max-w-5xl mx-auto mt-8">
            <div className="flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <AlertTriangle
                size={22}
                className="text-amber-600 flex-shrink-0 mt-0.5"
              />
              <div>
                <h4 className="text-amber-800 font-semibold text-sm mb-1">
                  Visa compliance
                </h4>
                <p className="text-amber-700 text-sm leading-relaxed">
                  We will always advise you to follow your visa conditions. Work
                  permissions vary by route and provider. If you&apos;re unsure,
                  we&apos;ll help you check what applies to your situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 10) FORM SECTION ═══════════════ */}
      <section
        id="work-plan"
        className="scroll-mt-20 py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
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
              Ready to start your job search properly?
            </h2>
            <p className="text-white text-base sm:text-lg max-w-xl mx-auto font-medium drop-shadow-sm">
              Get a structured work plan, CV pack, and 7-day sprint  - tailored
              to your city and availability.
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
                    Work Plan Request
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Takes about 2 minutes. Plan &amp; next steps typically within
                    24\u201348 hours (working days).
                  </p>
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      City / location (UK){" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. London, Manchester"
                      value={form.city}
                      onChange={(e) =>
                        setForm({ ...form, city: e.target.value })
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Start date
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Immediately, April 2026"
                      value={form.startDate}
                      onChange={(e) =>
                        setForm({ ...form, startDate: e.target.value })
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Availability (days/times)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Weekends + evenings"
                      value={form.availability}
                      onChange={(e) =>
                        setForm({ ...form, availability: e.target.value })
                      }
                      className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                    />
                  </div>
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
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Experience level
                    </label>
                    <CustomDropdown
                      options={EXPERIENCE_OPTIONS}
                      value={form.experience}
                      onChange={(v) => setForm({ ...form, experience: v })}
                      placeholder="Select"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Preferred roles (up to 3)
                    </label>
                    <MultiSelectDropdown
                      options={ROLE_OPTIONS}
                      values={form.roles}
                      onChange={(v) => setForm({ ...form, roles: v })}
                      placeholder="Select roles"
                      max={3}
                    />
                  </div>
                </div>

                {/* Row 4 */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                    Notes (optional)
                  </label>
                  <textarea
                    placeholder="Anything else we should know..."
                    value={form.notes}
                    onChange={(e) =>
                      setForm({ ...form, notes: e.target.value })
                    }
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors resize-none"
                  />
                </div>

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
                      Get My Work Plan
                    </>
                  )}
                </button>

                <p className="text-[10px] sm:text-xs text-gray-400 text-center pt-0.5">
                  Plan &amp; next steps typically within 24\u201348 hours
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
                  +44 7747 525946 &middot; info@uniguru.co.uk
                </p>
              </div>

              <p className="text-[11px] text-white/50 leading-relaxed">
                {DISCLAIMER}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartTimeWorkPageV2;
