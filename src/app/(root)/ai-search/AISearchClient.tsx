"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Loader2,
  Search,
  GraduationCap,
  BrainCircuit,
  Globe,
  ExternalLink,
  MapPin,
  Clock,
  Banknote,
  BadgeCheck,
  CheckCircle2,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { searchCourses } from "@/actions/gemini";

type Recommendation = {
  university: string;
  country: string;
  course: string;
  duration: string;
  fees: string;
  match: string;
  why: string;
  link: string;
};

type SearchResponse = {
  introduction: string;
  journeyOverview: string;
  recommendationsIntro: string;
  recommendations: Recommendation[];
  nextSteps: string;
  uniguruSupport: string;
};

const SUGGESTIONS = [
  {
    text: "I want to study Data Science in Canada with a budget of 20k CAD",
    icon: BrainCircuit,
  },
  {
    text: "Looking for MBA programs in UK without IELTS requirement",
    icon: GraduationCap,
  },
  {
    text: "Best universities for Robotics in Germany with English taught courses",
    icon: Globe,
  },
];

const COUNTRY_COLORS: Record<string, string> = {
  uk: "#1a3b85",
  "united kingdom": "#1a3b85",
  canada: "#c41e3a",
  australia: "#002868",
  usa: "#3c3b6e",
  "united states": "#3c3b6e",
  germany: "#dd0000",
  france: "#002395",
  ireland: "#169b62",
  "new zealand": "#00247d",
  netherlands: "#ae1c28",
};

function getCountryAccent(country: string): string {
  const key = country.toLowerCase();
  return COUNTRY_COLORS[key] || "#1a3b85";
}

export default function AISearchClient() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [response, setResponse] = useState<SearchResponse | null>(null);
  const [submittedQuery, setSubmittedQuery] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsSearching(true);
    setResponse(null);
    setSubmittedQuery(query);

    try {
      const aiResponse = await searchCourses(query);
      // @ts-ignore
      setResponse(aiResponse);

      if (aiResponse) {
        setTimeout(() => {
          const el = document.getElementById("response-section");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } catch (error) {
      console.error("Search failed", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero + Search ── */}
      <section className="bg-[#0f2554] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_60%)]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-28 sm:pb-32 lg:pb-36">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <Sparkles size={14} className="text-[#D4AF37]" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">
                AI-Powered Course Finder
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 sm:mb-5">
              Describe your dream{" "}
              <span className="text-[#D4AF37]">study path</span>
            </h1>

            <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              Tell us your background, budget, and goals - our AI finds the
              best university programmes for you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Search Card (overlapping hero) ── */}
      <div className="relative z-20 max-w-[800px] mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20">
        <div
          className={cn(
            "bg-white rounded-2xl shadow-xl border transition-all duration-300",
            isSearching
              ? "border-[#D4AF37] ring-4 ring-[#D4AF37]/10"
              : "border-gray-200"
          )}
        >
          <textarea
            placeholder="Example: I have a BSc in Mathematics and want to pursue a Master's in AI in Canada or UK. My budget is around $25,000 per year..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 text-sm sm:text-base min-h-[130px] resize-none focus:outline-none p-5 sm:p-6 rounded-t-2xl"
          />

          <div className="flex justify-between items-center px-5 sm:px-6 pb-4">
            <div className="hidden sm:flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-400 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md">
                <BrainCircuit size={12} className="text-[#D4AF37]" />
                Gemini AI
              </span>
              <span className="text-[11px] text-gray-400">
                Press Enter to search
              </span>
            </div>
            <button
              onClick={handleSearch}
              disabled={isSearching || !query.trim()}
              className={cn(
                "inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300",
                !query.trim()
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-[#D4AF37] hover:bg-[#c9a432] text-[#0a1628] shadow-md hover:shadow-lg"
              )}
            >
              {isSearching ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Analysing...
                </>
              ) : (
                <>
                  Find Matches
                  <Search size={16} />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Suggestions */}
        <div className="mt-4 flex flex-col sm:flex-row flex-wrap justify-center gap-2">
          {SUGGESTIONS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setQuery(item.text)}
              className="inline-flex items-center gap-2 text-xs text-gray-500 bg-white border border-gray-200 px-3.5 py-2 rounded-full hover:bg-[#0f2554] hover:text-white hover:border-[#0f2554] transition-all text-left shadow-sm"
            >
              <item.icon size={12} className="text-[#D4AF37] shrink-0" />
              <span className="truncate">{item.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Loading State ── */}
      {isSearching && (
        <section className="py-14 sm:py-20">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0f2554] flex items-center justify-center shrink-0">
                  <Sparkles size={18} className="text-[#D4AF37] animate-pulse" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-semibold text-[#0f2554]">Uniguru AI</span>
                    <span className="text-xs text-gray-400">is thinking...</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-100 rounded-full animate-pulse w-full" />
                    <div className="h-4 bg-gray-100 rounded-full animate-pulse w-5/6" />
                    <div className="h-4 bg-gray-100 rounded-full animate-pulse w-4/6" />
                    <div className="h-4 bg-gray-100 rounded-full animate-pulse w-full mt-6" />
                    <div className="h-4 bg-gray-100 rounded-full animate-pulse w-3/4" />
                    <div className="h-4 bg-gray-100 rounded-full animate-pulse w-5/6" />
                  </div>
                  <div className="mt-6 flex items-center gap-2">
                    <Loader2 size={14} className="text-[#D4AF37] animate-spin" />
                    <span className="text-xs text-gray-400">Matching your profile against universities worldwide...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── AI Response ── */}
      {response && (
        <section
          id="response-section"
          className="py-14 sm:py-20 scroll-mt-24"
        >
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">

            {/* User query bubble */}
            <div className="flex justify-end mb-6">
              <div className="max-w-[85%] bg-[#0f2554] text-white text-sm rounded-2xl rounded-tr-sm px-5 py-3.5 shadow-sm">
                <p className="leading-relaxed">{submittedQuery}</p>
              </div>
            </div>

            {/* AI response container */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 px-6 sm:px-8 py-4 border-b border-gray-100 bg-gray-50/50">
                <div className="w-9 h-9 rounded-xl bg-[#0f2554] flex items-center justify-center shrink-0">
                  <Sparkles size={16} className="text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-[#0f2554]">Uniguru AI</span>
                  <span className="ml-2 text-[11px] text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded-full">Education Advisor</span>
                </div>
              </div>

              {/* Response body */}
              <div className="px-6 sm:px-8 py-7 space-y-7">

                {/* Introduction */}
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  {response.introduction}
                </p>

                {/* Journey Overview */}
                <div>
                  <p className="text-gray-700 leading-relaxed text-[15px]">
                    {response.journeyOverview}
                  </p>
                </div>

                {/* Recommendations */}
                <div>
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
                    {response.recommendationsIntro}
                  </p>

                  <div className="space-y-4">
                    {response.recommendations?.map((rec, idx) => {
                      const accent = getCountryAccent(rec.country);
                      return (
                        <div
                          key={idx}
                          className="rounded-xl border border-gray-100 bg-gray-50/60 overflow-hidden"
                        >
                          {/* Coloured top bar */}
                          <div className="h-1" style={{ backgroundColor: accent }} />

                          <div className="p-5">
                            {/* Course + university name row */}
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <div>
                                <h3 className="font-bold text-[#0f2554] text-base leading-snug">
                                  {rec.course}
                                </h3>
                                <p className="text-sm text-gray-500 mt-0.5 flex items-center gap-1.5">
                                  <GraduationCap size={13} className="text-gray-400" />
                                  {rec.university}
                                </p>
                              </div>
                              <span
                                className="inline-flex items-center gap-1 shrink-0 px-2.5 py-1 rounded-full text-xs font-bold border"
                                style={{
                                  backgroundColor: `${accent}15`,
                                  color: accent,
                                  borderColor: `${accent}30`,
                                }}
                              >
                                <BadgeCheck size={11} />
                                {rec.match}
                              </span>
                            </div>

                            {/* Meta row */}
                            <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <MapPin size={11} className="text-gray-400" />
                                {rec.country}
                              </span>
                              <span className="text-gray-300">|</span>
                              <span className="flex items-center gap-1">
                                <Clock size={11} className="text-gray-400" />
                                {rec.duration}
                              </span>
                              <span className="text-gray-300">|</span>
                              <span className="flex items-center gap-1">
                                <Banknote size={11} className="text-gray-400" />
                                {rec.fees}
                              </span>
                            </div>

                            {/* Why this fits */}
                            <p className="text-sm text-gray-600 leading-relaxed mb-3">
                              {rec.why}
                            </p>

                            {/* Link */}
                            <a
                              href={rec.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1a3b85] hover:text-[#D4AF37] transition-colors"
                            >
                              Visit university website
                              <ExternalLink size={11} />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100" />

                {/* Next Steps */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0f2554] mb-1.5">Your Next Steps</h4>
                    <p className="text-[15px] text-gray-700 leading-relaxed">
                      {response.nextSteps}
                    </p>
                  </div>
                </div>

                {/* Uniguru Support */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Users size={16} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0f2554] mb-1.5">How Uniguru Can Help</h4>
                    <p className="text-[15px] text-gray-700 leading-relaxed">
                      {response.uniguruSupport}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-[#0f2554] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-white font-semibold text-sm">Ready to take the next step?</p>
                    <p className="text-white/60 text-xs mt-0.5">Get a free eligibility assessment from our expert advisors.</p>
                  </div>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0a1628] text-sm font-bold rounded-lg transition-all shrink-0 shadow-md"
                  >
                    Free Eligibility Check
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* New search prompt */}
            <div className="mt-5 text-center">
              <button
                onClick={() => {
                  setResponse(null);
                  setQuery("");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-sm text-gray-500 hover:text-[#0f2554] transition-colors underline underline-offset-4"
              >
                Start a new search
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── No results ── */}
      {response === null && !isSearching && submittedQuery && (
        <section className="py-16 sm:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto text-center">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-5">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-[#0f2554] mb-2">
                Something went wrong
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Try rephrasing your query or try again shortly.
              </p>
              <button
                onClick={() => {
                  setSubmittedQuery("");
                  setQuery("");
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0f2554] hover:bg-[#1a3b85] text-white text-sm font-semibold rounded-lg transition-all"
              >
                Try again
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── Spacer when no results yet ── */}
      {!response && !isSearching && !submittedQuery && <div className="py-16 sm:py-20" />}
    </div>
  );
}
