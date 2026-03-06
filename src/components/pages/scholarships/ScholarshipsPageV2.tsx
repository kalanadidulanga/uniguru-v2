"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SCHOLARSHIPS, COMPANY_INFO } from "@/constants/data";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import ScholarshipsForm from "@/components/pages/scholarships/form";
import { GraduationCap, Globe, ArrowRight, BookOpen, MessageCircle } from "lucide-react";
import TrustBarSection from "@/components/homev2/TrustBarSection";

const ScholarshipsPageV2 = () => {
    return (
        <div className="min-h-screen font-sans text-slate-800">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen flex flex-col overflow-hidden">
                <Image
                    src="/images/scholarships/1.png"
                    alt="Scholarships"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

                <div className="flex-1 flex items-center justify-center">
                    <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                        <div className="max-w-4xl mx-auto space-y-6">
                            <div className="inline-flex items-center gap-2">
                                <GraduationCap size={16} className="text-[#D4AF37]" />
                                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                                    Funding Your Future
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight">
                                Unlock Global{" "}
                                <span className="text-[#D4AF37]">
                                    Scholarship Opportunities
                                </span>
                            </h1>

                            <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
                                Global universities offer a wealth of scholarships, grants, and bursaries for driven international students. We help you find the ones that best fit your profile and secure the funding you deserve.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <button
                                    className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-bold rounded-lg transition-all duration-200 text-sm shadow-md"
                                    onClick={() => document.getElementById('scholarships-list')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Explore Scholarships <ArrowRight className="w-5 h-5" />
                                </button>
                                <Link
                                    href={COMPANY_INFO.whatsapp}
                                    target="_blank"
                                    className="inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-lg transition-all duration-200 text-sm border border-white/30"
                                >
                                    <MessageCircle className="w-4 h-4 text-green-400" />
                                    WhatsApp Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <TrustBarSection />
            </section>

            {/* --- LIST SECTION --- */}
            <section id="scholarships-list" className="relative bg-white py-16 sm:py-20 z-10">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <Globe size={16} className="text-[#D4AF37]" />
                            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                                Explore Options
                            </span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#0f2554] mb-4">Available Scholarships</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Explore funding options from top destinations around the world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {SCHOLARSHIPS.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row items-center gap-6 md:gap-8"
                            >
                                <div className="shrink-0 relative">
                                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner group-hover:scale-105 transition-transform duration-300">
                                        <Image
                                            src={item.src}
                                            alt={item.name}
                                            width={100}
                                            height={100}
                                            className="w-full h-full object-cover"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-[#1a3b85] p-2 rounded-full text-white">
                                        <Globe size={16} />
                                    </div>
                                </div>

                                <div className="flex-grow text-center md:text-left space-y-2">
                                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-[#0f2554] transition-colors">{item.name}</h3>
                                    <p className="text-slate-600">
                                        Discover exclusive scholarship opportunities for {item.name}. Our experts can guide you through the application process.
                                    </p>
                                </div>

                                <div className="shrink-0">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <button
                                                className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-bold rounded-lg transition-all duration-200 text-sm shadow-md"
                                            >
                                                Enquire Now <BookOpen className="w-4 h-4" />
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                                            <DialogHeader>
                                                <DialogTitle className="text-2xl font-bold text-[#0f2554]">Enquire for {item.name}</DialogTitle>
                                            </DialogHeader>
                                            <ScholarshipsForm country={item.country} />
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-24 bg-[#0f2554] rounded-3xl p-12 text-center relative overflow-hidden text-white shadow-2xl">
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <BookOpen size={16} className="text-[#D4AF37]" />
                                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                                    Get Help
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold mb-6">Need Personalized Guidance?</h2>
                            <p className="text-white/70 text-lg mb-8">
                                Our counselors are ready to help you find the best financial aid options for your studies.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-bold rounded-lg transition-all duration-200 text-sm shadow-md"
                                >
                                    Contact Us Today
                                </Link>
                                <Link
                                    href={COMPANY_INFO.whatsapp}
                                    target="_blank"
                                    className="inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-lg transition-all duration-200 text-sm border border-white/30"
                                >
                                    <MessageCircle className="w-4 h-4 text-green-400" />
                                    WhatsApp Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ScholarshipsPageV2;
