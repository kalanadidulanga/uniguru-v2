"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO } from "@/constants/data";
import {
    Rocket,
    Users,
    TrendingUp,
    Heart,
    ArrowRight,
    Briefcase,
    Globe,
    MessageCircle
} from "lucide-react";
import TrustBarSection from "@/components/homev2/TrustBarSection";

const CareersPageV2 = () => {
    const benefits = [
        {
            icon: <Users className="w-6 h-6 text-white" />,
            title: "Collaborative Culture",
            description: "Work alongside like-minded individuals who value teamwork and innovation to deliver the best results."
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-white" />,
            title: "Growth Opportunities",
            description: "Uniguru offers plenty of opportunities for career growth and professional development in the education industry."
        },
        {
            icon: <Heart className="w-6 h-6 text-white" />,
            title: "Make a Difference",
            description: "Help students navigate the study abroad process, from university selection to visa applications."
        },
        {
            icon: <Rocket className="w-6 h-6 text-white" />,
            title: "Dynamic Environment",
            description: "Join a team of passionate professionals committed to providing exceptional service and support."
        }
    ];

    return (
        <div className="min-h-screen font-sans text-slate-800">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen flex flex-col overflow-hidden">
                {/* Background Image */}
                <Image
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
                    alt="Uniguru Team"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

                <div className="flex-1 flex items-center justify-center">
                    <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 text-center">
                        <div className="max-w-4xl mx-auto space-y-6">
                            <div className="inline-flex items-center gap-2 justify-center">
                                <Briefcase className="w-4 h-4 text-[#D4AF37]" />
                                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                                    We are hiring
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight">
                                Join the Uniguru Team &{" "}
                                <span className="text-[#D4AF37]">
                                    Shape the Future
                                </span>
                            </h1>

                            <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
                                At Uniguru, we are passionate about guiding students on their journey to study abroad. We are always looking for talented individuals to join our mission.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <button
                                    className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-bold rounded-lg transition-all duration-200 text-sm shadow-md"
                                    onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    View Open Positions <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                </button>
                                <Link
                                    href={COMPANY_INFO.whatsapp}
                                    target="_blank"
                                    className="inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-lg transition-all duration-200 text-sm border border-white/30"
                                >
                                    <MessageCircle className="w-4 h-4 text-green-400" />
                                    Chat with Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <TrustBarSection />
            </section>

            {/* --- BENEFITS SECTION --- */}
            <section className="bg-white py-16 sm:py-20">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <Heart className="w-4 h-4 text-[#D4AF37]" />
                            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                                Our Culture
                            </span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#0f2554] mb-4">Why Work with Uniguru?</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            We believe in fostering a supportive and innovative environment where every team member can thrive.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#1a3b85] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#1a3b85] transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA & GALLERY SECTION --- */}
            <section className="bg-slate-50 py-16 sm:py-20">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Open Positions / CTA Card */}
                    <div id="positions" className="relative rounded-2xl overflow-hidden bg-[#0f2554] text-white p-10 lg:p-20 text-center shadow-2xl mb-24">
                        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                            <div className="inline-flex items-center gap-2 mb-2">
                                <Briefcase className="w-4 h-4 text-[#D4AF37]" />
                                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                                    Open Positions
                                </span>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">Ready to Start Your Journey?</h2>
                            <p className="text-blue-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                                We are always open to receiving CVs from enthusiastic and dedicated individuals.
                                If you&apos;re excited about helping students succeed, we&apos;d love to hear from you!
                            </p>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 lg:p-10 border border-white/15 inline-block w-full max-w-3xl">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="text-left">
                                        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                            <Globe className="w-6 h-6 text-[#D4AF37]" />
                                            General Application
                                        </h3>
                                        <p className="text-blue-200">
                                            Send us your CV and we&apos;ll get in touch for potential opportunities.
                                        </p>
                                    </div>
                                    <Link
                                        href="mailto:careers@uniguru.co"
                                        className="group shrink-0 inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-bold rounded-lg transition-all duration-200 text-sm shadow-md"
                                    >
                                        Email Your CV <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                    </Link>
                                </div>
                                <div className="mt-6 pt-6 border-t border-white/10 text-left">
                                    <p className="text-sm text-blue-300">
                                        Direct Contact: careers@uniguru.co
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Section */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <Users className="w-4 h-4 text-[#D4AF37]" />
                            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                                Our Team
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold text-[#0f2554]">Life at Uniguru</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                            <Image
                                src="/images/careers/post1.png"
                                alt="Team Moment 1"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2554]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <div>
                                    <p className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Team Collaboration</p>
                                    <p className="text-blue-100 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Building the future together</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                            <Image
                                src="/images/careers/post2.png"
                                alt="Team Moment 2"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2554]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <div>
                                    <p className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Office Life</p>
                                    <p className="text-blue-100 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Celebrating our success</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default CareersPageV2;
