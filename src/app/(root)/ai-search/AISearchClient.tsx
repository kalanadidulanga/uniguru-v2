"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Loader2,
  Search,
  BookOpen,
  Clock,
  GraduationCap,
  BrainCircuit,
  Globe,
  BadgeCheck,
  PoundSterling,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { searchCourses } from "@/actions/gemini";

type SearchResult = {
  university: string;
  country: string;
  flag?: string;
  course: string;
  duration: string;
  fees: string;
  match: string;
  description: string;
  image: string;
  link?: string;
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
  const [results, setResults] = useState<SearchResult[] | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsSearching(true);
    setResults(null);

    try {
      const aiResults = await searchCourses(query);
      // @ts-ignore
      setResults(aiResults);

      if (aiResults && aiResults.length > 0) {
        setTimeout(() => {
          const el = document.getElementById("results-section");
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
        <section className="py-14 sm:py-18">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#1a3b85]/10 flex items-center justify-center mx-auto mb-5">
                <Loader2 size={24} className="text-[#1a3b85] animate-spin" />
              </div>
              <h3 className="text-lg font-bold text-[#0f2554] mb-2">
                Searching thousands of programmes...
              </h3>
              <p className="text-gray-500 text-sm">
                Matching your profile against universities worldwide.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl border border-gray-100 p-6 animate-pulse"
                  >
                    <div className="flex justify-between mb-4">
                      <div className="h-4 w-16 bg-gray-200 rounded" />
                      <div className="h-4 w-20 bg-gray-200 rounded-full" />
                    </div>
                    <div className="h-5 w-3/4 bg-gray-200 rounded mb-2" />
                    <div className="h-4 w-1/2 bg-gray-200 rounded mb-4" />
                    <div className="h-3 w-full bg-gray-100 rounded mb-2" />
                    <div className="h-3 w-5/6 bg-gray-100 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Results ── */}
      {results && results.length > 0 && (
        <section
          id="results-section"
          className="py-14 sm:py-18 lg:py-20 scroll-mt-24"
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div className="w-10 h-10 rounded-xl bg-[#1a3b85]/10 flex items-center justify-center">
                <Sparkles size={20} className="text-[#1a3b85]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0f2554]">
                  Top Recommendations
                </h2>
                <p className="text-gray-500 text-sm">
                  {results.length} programmes matched your profile
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {results.map((result, index) => {
                const accent = getCountryAccent(result.country);
                return (
                  <div
                    key={index}
                    className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#1a3b85]/30 hover:shadow-xl hover:shadow-[#1a3b85]/5 transition-all duration-300 flex flex-col"
                  >
                    <div className="h-1" style={{ backgroundColor: accent }} />

                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
                      {/* Country & Match */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold text-white uppercase"
                            style={{ backgroundColor: accent }}
                          >
                            {result.country.substring(0, 2)}
                          </div>
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            {result.country}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 bg-[#D4AF37]/10 text-[#9a7d1a] border border-[#D4AF37]/20 px-2.5 py-1 rounded-full text-xs font-bold">
                          <BadgeCheck size={12} />
                          {result.match}
                        </span>
                      </div>

                      {/* Course & University */}
                      <h3 className="text-lg font-bold text-[#0f2554] leading-snug group-hover:text-[#1a3b85] transition-colors mb-1.5">
                        {result.course}
                      </h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1.5 mb-4">
                        <BookOpen size={14} className="text-gray-400" />
                        {result.university}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100">
                          <Clock size={12} />
                          {result.duration}
                        </span>
                        {result.fees && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100">
                            <PoundSterling size={12} />
                            {result.fees}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-5">
                        {result.description}
                      </p>

                      {/* Action */}
                      <div className="pt-4 border-t border-gray-100 mt-auto">
                        <Link
                          href={
                            result.link ||
                            `https://www.google.com/search?q=${encodeURIComponent(
                              result.course +
                                " at " +
                                result.university +
                                " official course page"
                            )}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#0f2554] hover:bg-[#1a3b85] text-white text-sm font-semibold rounded-lg transition-all"
                        >
                          View Programme
                          <ExternalLink size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm">
                <p className="text-gray-600 text-sm">
                  Want expert guidance on your shortlisted programmes?
                </p>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0a1628] text-sm font-semibold rounded-lg transition-all"
                >
                  Free eligibility check
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── No results ── */}
      {results && results.length === 0 && (
        <section className="py-16 sm:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto text-center">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-5">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-[#0f2554] mb-2">
                No matches found
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Try different criteria or broader preferences.
              </p>
              <button
                onClick={() => {
                  setResults(null);
                  setQuery("");
                  window.scrollTo({ top: 0, behavior: "smooth" });
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
      {!results && !isSearching && <div className="py-16 sm:py-20" />}
    </div>
  );
}
