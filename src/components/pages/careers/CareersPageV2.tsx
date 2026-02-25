"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/myComponents/button";
import {
    Rocket,
    Users,
    TrendingUp,
    Heart,
    ArrowRight,
    Briefcase,
    Globe
} from "lucide-react";

const CareersPageV2 = () => {
    const benefits = [
        {
            icon: <Users className="w-6 h-6 text-[#2B59C3]" />,
            title: "Collaborative Culture",
            description: "Work alongside like-minded individuals who value teamwork and innovation to deliver the best results."
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-[#F28B82]" />,
            title: "Growth Opportunities",
            description: "Uniguru offers plenty of opportunities for career growth and professional development in the education industry."
        },
        {
            icon: <Heart className="w-6 h-6 text-red-500" />,
            title: "Make a Difference",
            description: "Help students navigate the study abroad process, from university selection to visa applications."
        },
        {
            icon: <Rocket className="w-6 h-6 text-orange-500" />,
            title: "Dynamic Environment",
            description: "Join a team of passionate professionals committed to providing exceptional service and support."
        }
    ];

    return (
        <div className="min-h-screen font-sans text-slate-800 selection:bg-[#F28B82] selection:text-white">

            {/* --- HERO SECTION --- */}
            <section className="relative bg-[#FFF5F0] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Grid Background (Hero Only) */}
                <div
                    className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#F28B82 1px, transparent 1px), linear-gradient(90deg, #F28B82 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                ></div>

                {/* Animated Background Blobs (Hero Only) */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#F28B82] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
                <div
                    className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-[#2B59C3] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className="absolute top-[20%] right-[40%] w-[300px] h-[300px] bg-[#F2C94C] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob"
                    style={{ animationDelay: "4s" }}
                ></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-blue-100 text-[#2B59C3] font-semibold text-sm shadow-sm backdrop-blur-sm mx-auto lg:mx-0">
                                <span className="flex h-2 w-2 rounded-full bg-[#F28B82] animate-pulse"></span>
                                We are hiring!
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1a3b85] leading-[1.1] tracking-tight">
                                Join the Uniguru Team & <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B59C3] to-[#F28B82]">
                                    Shape the Future
                                </span>
                            </h1>

                            <p className="text-slate-600 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                At Uniguru, we are passionate about guiding students on their journey to study abroad. We are always looking for talented individuals to join our mission.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                                <Button
                                    className="bg-[#F28B82] hover:bg-[#E07A71] text-white font-bold py-6 px-8 rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#F28B82]/30 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                                    onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    View Open Positions <ArrowRight className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>

                        <div className="relative order-1 lg:order-2 flex justify-center">
                            <div className="relative w-full max-w-[500px] aspect-square">
                                {/* Main Image with floating effect */}
                                <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500 z-10">
                                    <Image
                                        src="/images/careers/post1.png"
                                        alt="Uniguru Team"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#F2C94C] rounded-full opacity-50 blur-xl animate-pulse"></div>
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#2B59C3] rounded-full opacity-30 blur-xl animate-pulse delay-700"></div>

                                {/* Floating Badge */}
                                <div className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-lg z-20 animate-float border border-slate-100 hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full text-[#2B59C3]">
                                            <Briefcase size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Openings</p>
                                            <p className="text-sm font-bold text-slate-800">Global Roles</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[60px] lg:h-[100px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
                    </svg>
                </div>
            </section>

            {/* --- BENEFITS SECTION (White Background) --- */}
            <section className="bg-white py-20 lg:py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a3b85] mb-4">Why Work with Uniguru?</h2>
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
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100 shadow-sm">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#2B59C3] transition-colors">
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

            {/* --- CTA & GALLERY SECTION (Light Slate Background) --- */}
            <section className="bg-slate-50 py-20 lg:py-24 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    {/* Open Positions / CTA Card */}
                    <div id="positions" className="relative rounded-[2.5rem] overflow-hidden bg-[#1a3b85] text-white p-10 lg:p-20 text-center shadow-2xl mb-24">
                        {/* Background decoration */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                            <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] bg-[#2B59C3] rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
                            <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] bg-[#F28B82] rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
                        </div>

                        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                            <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">Ready to Start Your Journey?</h2>
                            <p className="text-blue-100 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                                We are always open to receiving CVs from enthusiastic and dedicated individuals.
                                If you&apos;re excited about helping students succeed, we&apos;d love to hear from you!
                            </p>

                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/20 inline-block w-full max-w-3xl hover:bg-white/15 transition-colors">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="text-left">
                                        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                            <Globe className="w-6 h-6 text-[#F28B82]" />
                                            General Application
                                        </h3>
                                        <p className="text-blue-200">
                                            Send us your CV and we&apos;ll get in touch for potential opportunities.
                                        </p>
                                    </div>
                                    <Link
                                        href="mailto:careers@uniguru.co"
                                        className="shrink-0 bg-white text-[#1a3b85] hover:bg-blue-50 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                                    >
                                        Email Your CV <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                                <div className="mt-6 pt-6 border-t border-white/10 text-left">
                                    <p className="text-sm text-blue-300 font-mono">
                                        Direct Contact: careers@uniguru.co
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800">Life at Uniguru</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
                            <Image
                                src="/images/careers/post1.png"
                                alt="Team Moment 1"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3b85]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <div>
                                    <p className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Team Collaboration</p>
                                    <p className="text-blue-100 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Building the future together</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
                            <Image
                                src="/images/careers/post2.png"
                                alt="Team Moment 2"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3b85]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
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
