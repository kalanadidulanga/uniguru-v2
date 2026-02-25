"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Sparkles,
    ArrowRight,
    Loader2,
    Search,
    BookOpen,
    Clock,
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
    "I want to study Data Science in Canada with a budget of 20k CAD...",
    "Looking for MBA programs in UK without IELTS requirement...",
    "Best universities for Robotics in Germany with English taught courses..."
];

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
                    const resultsSection = document.getElementById('results-section');
                    if (resultsSection) {
                        resultsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        } catch (error) {
            console.error("Search failed", error);
        } finally {
            setIsSearching(false);
        }
    };

    return (
        <div className="bg-slate-50 pb-12 relative overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2B59C3] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#F28B82] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob animation-delay-2000" />
                <div className="absolute top-[20%] right-[30%] w-[300px] h-[300px] bg-[#F2C94C] rounded-full mix-blend-multiply filter blur-[80px] opacity-10 animate-blob animation-delay-4000" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.4]"
                    style={{
                        backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            {/* Hero Section */}
            <div className="relative z-10 pt-24 px-6 lg:px-12 max-w-5xl mx-auto flex flex-col items-center text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Sparkles className="w-3.5 h-3.5 text-[#F28B82]" />
                    <span className="text-xs font-bold text-slate-600">AI Powered Course Finder</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 max-w-4xl mb-4 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                    Describe your dream <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B59C3] via-[#5A80E0] to-[#F28B82] animate-gradient">
                        Study Path.
                    </span>
                </h1>

                <p className="text-base text-slate-600 max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    Tell us about your academic background, preferred countries, budget, and career goals. Our AI will scan thousands of university websites to find your perfect match.
                </p>

                {/* Input Card */}
                <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
                    <div className={cn(
                        "relative bg-white border rounded-2xl p-2 transition-all duration-300 shadow-lg",
                        isSearching ? "border-[#2B59C3] ring-4 ring-[#2B59C3]/10" : "border-slate-200 hover:border-[#2B59C3]/50"
                    )}>
                        <Textarea
                            placeholder="Example: I have a BSc in Mathematics and want to pursue a Master's in Artificial Intelligence in Canada or UK. My budget is around $25,000 per year..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="bg-transparent border-none text-slate-900 placeholder:text-slate-400 text-base min-h-[120px] resize-none focus-visible:ring-0 p-4"
                        />

                        <div className="flex justify-between items-center px-4 pb-2">
                            <div className="hidden sm:flex gap-2">
                                <span className="text-[10px] text-slate-500 flex items-center gap-1 font-medium bg-slate-100 px-2 py-1 rounded-md">
                                    <Sparkles className="w-3 h-3 text-[#2B59C3]" /> AI Model 2.0
                                </span>
                            </div>
                            <Button
                                onClick={handleSearch}
                                disabled={isSearching || !query.trim()}
                                size="sm"
                                className={cn(
                                    "rounded-full px-6 h-10 font-bold text-sm transition-all duration-300",
                                    !query.trim() ? "bg-slate-100 text-slate-400" : "bg-[#2B59C3] hover:bg-[#234bfa] text-white shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5"
                                )}
                            >
                                {isSearching ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Analyzing...
                                    </>
                                ) : (
                                    <>
                                        Find Matches <Search className="w-4 h-4 ml-2" />
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Suggestions */}
                <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-2xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                    {SUGGESTIONS.map((suggestion, idx) => (
                        <button
                            key={idx}
                            onClick={() => setQuery(suggestion)}
                            className="text-xs text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-full hover:bg-slate-50 hover:text-[#2B59C3] hover:border-[#2B59C3]/30 transition-all text-left shadow-sm"
                        >
                            "{suggestion}"
                        </button>
                    ))}
                </div>

            </div>

            {/* Results Section */}
            {results && (
                <div id="results-section" className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 mt-20 animate-in fade-in slide-in-from-bottom-20 duration-1000">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-blue-50 rounded-xl border border-blue-100">
                            <Sparkles className="w-5 h-5 text-[#2B59C3]" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">Top Recommendations</h2>
                            <p className="text-sm text-slate-500">Based on your preferences, these are the best matches.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {results.map((result, index) => (
                            <div
                                key={index}
                                className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#2B59C3]/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col h-full"
                            >
                                {/* Header: Country & Match */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-700 border border-slate-200">
                                            {result.country.substring(0, 2).toUpperCase()}
                                        </div>
                                        <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">{result.country}</span>
                                    </div>
                                    <div className="bg-blue-50 border border-blue-100 text-[#2B59C3] px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                        <Sparkles className="w-3 h-3" /> {result.match} Match
                                    </div>
                                </div>

                                {/* Title & Uni */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#2B59C3] transition-colors mb-1">
                                        {result.course}
                                    </h3>
                                    <p className="text-sm font-medium text-slate-500 flex items-center gap-1.5">
                                        <BookOpen className="w-4 h-4 text-slate-400" /> {result.university}
                                    </p>
                                </div>

                                {/* Duration Tag */}
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-semibold border border-slate-200">
                                        <Clock className="w-3.5 h-3.5" /> {result.duration}
                                    </span>
                                </div>

                                {/* Description (Expanded) */}
                                <div className="mb-6 flex-grow">
                                    <p className="text-sm text-slate-600 leading-relaxed border-l-2 border-[#2B59C3]/20 pl-3">
                                        {result.description}
                                    </p>
                                </div>

                                {/* Action Button */}
                                <div className="mt-auto pt-4 border-t border-slate-100">
                                    <Link
                                        href={`https://www.google.com/search?q=${encodeURIComponent(result.course + " at " + result.university + " official course page")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full"
                                    >
                                        <Button className="w-full bg-[#2B59C3] hover:bg-[#234bfa] text-white rounded-xl transition-all font-bold shadow-md hover:shadow-blue-500/25">
                                            View Program Details <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
