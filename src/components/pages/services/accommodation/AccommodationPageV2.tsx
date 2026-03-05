"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ACCOMMODATION_DESTINATIONS, COMPANY_INFO } from "@/constants/data";
import {
  Home,
  ArrowRight,
  MessageCircle,
  Shield,
  DollarSign,
  FileText,
  Clock,
  Loader2,
  Send,
  CheckCircle2,
  Train,
  ClipboardList,
} from "lucide-react";
import { sendAccommodationEnquiryEmail } from "@/actions/mailSending";
import toast from "react-hot-toast";


const COUNTRY_IMAGES: Record<string, string> = {
  canada: "/images/study_destinations/canada/1.png",
  uk: "/images/study_destinations/uk/1.jpg",
  australia: "/images/study_destinations/australia/1.jpg",
  netherlands: "/images/study_destinations/netherlands/1.jpg",
  germany: "/images/study_destinations/germany/1.jpg",
};

const AccommodationPageV2 = () => {
  const [form, setForm] = useState({
    destination: "",
    intake: "",
    whatsapp: "",
    budget: "",
    city: "",
    commute: "",
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
        `Intake / Move-in: ${form.intake || "Not specified"}`,
        `Budget band: ${form.budget || "Not specified"}`,
        `Preferred city/area: ${form.city || "Not specified"}`,
        `Max commute time: ${form.commute || "Not specified"}`,
      ].join("\n");

      await sendAccommodationEnquiryEmail({
        destination: form.destination,
        name: "Accommodation Shortlist Request",
        mobile: form.whatsapp,
        email: "shortlist-request@uniguru.co",
        message,
      });
      toast.success(
        "Request sent! We'll get back to you within 24 to 48 hours."
      );
      setForm({
        destination: "",
        intake: "",
        whatsapp: "",
        budget: "",
        city: "",
        commute: "",
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
      {/* ═══════════════ HERO + TRUST BAR = 100vh ═══════════════ */}
      <div className="min-h-screen flex flex-col">
      {/* 1) HERO */}
      <section className="relative flex-1 flex items-center overflow-hidden">
        {/* Dark nighttime image  - text reads naturally */}
        <Image
          src="https://images.unsplash.com/photo-1519922639192-e73293ca430e?auto=format&fit=crop&w=2070&q=80"
          alt="London skyline at night"
          fill
          quality={100}
          unoptimized
          className="object-cover object-center"
          priority
        />
        {/* Left-heavy overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-[#0a1628]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/35 via-transparent to-[#0a1628]/50" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left  - copy (3 cols) */}
            <div className="lg:col-span-3 text-center lg:text-left">
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-4 sm:mb-5">
                Student Housing Support
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.15] tracking-tight mb-6 sm:mb-8">
                Accommodation,
                <br />
                made simple
              </h1>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-3 max-w-xl mx-auto lg:mx-0 font-normal">
                Because settling well affects everything. Budget, safety,
                commute, and confidence.
              </p>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
                London-led guidance and a practical shortlist of suitable
                options through trusted third party housing partners.
              </p>

              {/* Trust points */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-white/70 mb-8 sm:mb-10">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  Shortlist in 24 to 48 hrs
                </span>
                <span className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#D4AF37]" />
                  Budget + commute aligned
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#D4AF37]" />
                  Third party options (guided)
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4">
                <a
                  href="#accommodation-shortlist"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0d1b3e] font-semibold py-3.5 px-8 rounded-lg hover:bg-[#c9a432] transition-colors text-sm sm:text-base"
                >
                  Get My Accommodation Shortlist
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-medium py-3.5 px-6 rounded-lg hover:bg-[#20bd5a] transition-colors text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
              <p className="text-xs text-white/40 mt-3 text-center lg:text-left">
                Shortlist and next steps within 24 to 48 hours (working
                days).
              </p>
            </div>

            {/* Right  - stacked images (2 cols) */}
            <div className="lg:col-span-2 relative hidden lg:block">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/accommodation/02.png"
                  alt="Student accommodation"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-8 w-[60%] aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-4 border-white/90">
                <Image
                  src="/images/services/accommodation/01.png"
                  alt="Student room"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2) BRAND TRUST BAR
         ═══════════════════════════════════════════════════ */}
      <section className="bg-[#1a3b85] py-3.5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <Shield className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <p className="text-white/90 text-xs sm:text-sm tracking-wide text-center">
            Immigration Advice Authority (IAA) Regulated &bull; {COMPANY_INFO.iaaReg} &bull;
            {COMPANY_INFO.address} &bull; {COMPANY_INFO.googleReviews} Google Reviews
          </p>
        </div>
      </section>
      </div>

      {/* ═══════════════════════════════════════════════════
          3) WHAT WE HELP WITH  - 3 clean cards
         ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
              Our Support
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1a3b85] tracking-tight leading-tight">
              What we help with
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <DollarSign className="w-5 h-5" />,
                title: "Budget clarity",
                desc: "Realistic monthly range + total move in costs so there are no surprises.",
              },
              {
                icon: <Train className="w-5 h-5" />,
                title: "Location & commute",
                desc: "Areas/zones + transport assumptions aligned to your university and lifestyle.",
              },
              {
                icon: <FileText className="w-5 h-5" />,
                title: "Contract clarity",
                desc: "Deposits, durations, cancellations, hidden fees. All explained before you sign.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1a3b85] text-white flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1a3b85] mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4) HOW IT WORKS  - dark section (same as WhyUniguru)
         ═══════════════════════════════════════════════════ */}
      <section className="bg-[#0f2554] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
              Simple Process
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              How it works
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/60 max-w-xl leading-relaxed">
              A simple, structured process from request to move-in.
            </p>
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {[
              {
                step: "01",
                title: "Tell us your details",
                desc: "Destination + intake + budget (2 minutes).",
                icon: <ClipboardList className="w-5 h-5" />,
              },
              {
                step: "02",
                title: "We request options",
                desc: "Suitable options from our housing partners.",
                icon: <Home className="w-5 h-5" />,
              },
              {
                step: "03",
                title: "Receive your shortlist",
                desc: "Price band, commute, contract points, with notes.",
                icon: <CheckCircle2 className="w-5 h-5" />,
              },
              {
                step: "04",
                title: "Choose & book",
                desc: "You choose; we guide booking steps and timelines.",
                icon: <ArrowRight className="w-5 h-5" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#132d5e] border border-white/10 rounded-lg p-6 sm:p-7 hover:bg-[#163573] transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl sm:text-3xl font-semibold text-[#D4AF37]/50">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#D4AF37] flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-white/40 mt-10">
            No pressure. No upsell. Just clear options and clean
            decision-making.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5) CHOOSE YOUR DESTINATION  - country tiles
         ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
              Destinations
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1a3b85] tracking-tight leading-tight">
              Choose your destination
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
              Select a destination to see typical accommodation options and
              planning notes.
            </p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
            {ACCOMMODATION_DESTINATIONS.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="relative rounded-lg overflow-hidden aspect-[3/4]">
                  <Image
                    src={COUNTRY_IMAGES[item.country] || item.src}
                    alt={item.name}
                    fill
                    quality={100}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <div className="w-8 h-5 sm:w-10 sm:h-7 relative rounded-sm overflow-hidden mb-2 border border-white/30">
                      <Image
                        src={item.src}
                        alt=""
                        fill
                        quality={100}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-white font-semibold text-base sm:text-lg">
                      {item.name}
                    </h3>
                    <span className="text-xs text-white/50 group-hover:text-[#D4AF37] transition-colors flex items-center gap-1 mt-1">
                      View options <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-8">
            Accommodation options are provided via third party housing
            partners.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6) WHAT YOU RECEIVE  - image + list
         ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/services/accommodation/01.png"
                alt="Student accommodation"
                fill
                quality={100}
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
                Deliverables
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1a3b85] tracking-tight leading-tight mb-8">
                What you receive
              </h2>
              <div className="space-y-4 sm:space-y-5">
                {[
                  {
                    icon: <ClipboardList className="w-5 h-5" />,
                    title: "A practical shortlist (not a directory)",
                    desc: "Curated options that match your budget, commute, and timeline.",
                  },
                  {
                    icon: <FileText className="w-5 h-5" />,
                    title:
                      "Notes on commute, contract length, deposits, and timing",
                    desc: "Key details explained so you understand what you're signing up for.",
                  },
                  {
                    icon: <CheckCircle2 className="w-5 h-5" />,
                    title:
                      "A clear next step plan for booking and move in",
                    desc: "Timeline, steps, and what to prepare. Nothing left to chance.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#1a3b85] text-white flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a3b85] text-sm sm:text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7) MID-PAGE CTA  - dark section
         ═══════════════════════════════════════════════════ */}
      <section className="bg-[#0f2554] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-5">
            Need help choosing accommodation?
          </h2>
          <p className="text-base sm:text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a shortlist aligned to your destination, intake, and budget
            without pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#accommodation-shortlist"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0d1b3e] font-semibold py-3.5 px-8 rounded-lg hover:bg-[#c9a432] transition-colors"
            >
              Get My Accommodation Shortlist
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-medium py-3.5 px-6 rounded-lg hover:bg-[#20bd5a] transition-colors text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8) SHORTLIST FORM
         ═══════════════════════════════════════════════════ */}
      <section
        id="accommodation-shortlist"
        className="py-16 sm:py-20 lg:py-24 bg-slate-50 scroll-mt-20"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-8 sm:mb-10">
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight leading-tight">
              Accommodation Shortlist Request
            </h2>
            <p className="text-sm text-gray-500 mt-2">Takes about 2 minutes</p>
          </header>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-gray-100 shadow-2xl p-6 sm:p-8 lg:p-10 space-y-3.5 sm:space-y-4"
          >
            {/* Destination + Intake row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                  Destination <span className="text-red-400">*</span>
                </label>
                <select
                  value={form.destination}
                  onChange={(e) =>
                    setForm({ ...form, destination: e.target.value })
                  }
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] bg-white transition-colors"
                  required
                >
                  <option value="">Select a destination</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                  Intake / move in month
                </label>
                <input
                  type="text"
                  placeholder="e.g. September 2026"
                  value={form.intake}
                  onChange={(e) =>
                    setForm({ ...form, intake: e.target.value })
                  }
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] transition-colors"
                />
              </div>
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                WhatsApp number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                placeholder="+94 7X XXX XXXX"
                value={form.whatsapp}
                onChange={(e) =>
                  setForm({ ...form, whatsapp: e.target.value })
                }
                className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] transition-colors"
                required
              />
            </div>

            {/* Optional fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                  Budget band{" "}
                  <span className="text-xs text-gray-400 font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="600 to 900/mo"
                  value={form.budget}
                  onChange={(e) =>
                    setForm({ ...form, budget: e.target.value })
                  }
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                  City / area{" "}
                  <span className="text-xs text-gray-400 font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Manchester"
                  value={form.city}
                  onChange={(e) =>
                    setForm({ ...form, city: e.target.value })
                  }
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                  Max commute{" "}
                  <span className="text-xs text-gray-400 font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 30 mins"
                  value={form.commute}
                  onChange={(e) =>
                    setForm({ ...form, commute: e.target.value })
                  }
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#1a3b85]/20 focus:border-[#1a3b85] transition-colors"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="relative w-full h-11 sm:h-12 bg-[#1a3b85] text-white font-medium text-sm sm:text-base rounded-lg hover:bg-[#152d6b] shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Get My Accommodation Shortlist
                  </>
                )}
              </button>
              <p className="text-[10px] sm:text-xs text-gray-500 text-center pt-3">
                Shortlist typically within 24 to 48 hours (working days).
              </p>
            </div>
          </form>

          {/* Disclosure */}
          <div className="mt-8 text-center space-y-2.5">
            <p className="text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Accommodation options are provided via third party housing
              partners. We guide you in selecting suitable options and
              understanding key terms; availability, pricing, and contract terms
              are set by the provider.
            </p>
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
              <p className="text-xs text-gray-400">
                IAA Regulated &bull; {COMPANY_INFO.iaaReg} &bull; {COMPANY_INFO.address} &bull; {COMPANY_INFO.googleReviews} Google Reviews
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccommodationPageV2;
