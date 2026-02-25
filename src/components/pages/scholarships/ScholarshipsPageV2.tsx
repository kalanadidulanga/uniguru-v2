"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/myComponents/button";
import { SCHOLARSHIPS } from "@/constants/data";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import ScholarshipsForm from "@/components/pages/scholarships/form";
import { GraduationCap, Globe, ArrowRight, Sparkles, BookOpen } from "lucide-react";

const ScholarshipsPageV2 = () => {
    return (
        <div className="min-h-screen font-sans text-slate-800 selection:bg-[#F28B82] selection:text-white">

            {/* --- HERO SECTION --- */}
            <section className="relative bg-[#FFF5F0] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Grid Background */}
                <div
                    className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#F28B82 1px, transparent 1px), linear-gradient(90deg, #F28B82 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                ></div>

                {/* Animated Background Blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#F28B82] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
                <div
                    className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-[#2B59C3] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-[#F2C94C] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob"
                    style={{ animationDelay: "4s" }}
                ></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-blue-100 text-[#2B59C3] font-semibold text-sm shadow-sm backdrop-blur-sm mx-auto lg:mx-0">
                                <span className="flex h-2 w-2 rounded-full bg-[#F28B82] animate-pulse"></span>
                                Funding Your Future
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-extrabold text-[#1a3b85] leading-[1.1] tracking-tight">
                                Unlock Global <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B59C3] to-[#F28B82]">
                                    Scholarship Opportunities
                                </span>
                            </h1>

                            <p className="text-slate-600 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Global universities offer a wealth of scholarships, grants, and bursaries for driven international students. We help you find the ones that best fit your profile and secure the funding you deserve.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                                <Button
                                    className="bg-[#2B59C3] hover:bg-[#1a3b85] text-white font-bold py-6 px-8 rounded-full shadow-xl hover:shadow-2xl hover:shadow-blue-900/20 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                                    onClick={() => document.getElementById('scholarships-list')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Explore Scholarships <ArrowRight className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>

                        <div className="relative order-1 lg:order-2 flex justify-center">
                            <div className="relative w-full max-w-[500px] aspect-square">
                                {/* Main Image Container */}
                                <div className="absolute inset-0 z-10 grid grid-cols-2 gap-4 transform rotate-3 hover:rotate-0 transition-all duration-700">
                                    <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white translate-y-8">
                                        <Image
                                            src="/images/scholarships/1.png"
                                            alt="Student Scholarship"
                                            fill
                                            className="object-cover hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white -translate-y-8">
                                        <Image
                                            src="/images/scholarships/2.png"
                                            alt="University Life"
                                            fill
                                            className="object-cover hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-10 -right-10 bg-white p-4 rounded-xl shadow-xl z-20 animate-float border border-slate-100 hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-yellow-100 p-2 rounded-full text-yellow-600">
                                            <Sparkles size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Grants Available</p>
                                            <p className="text-sm font-bold text-slate-800">Up to 100%</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-xl z-20 animate-float-delayed border border-slate-100 hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full text-[#2B59C3]">
                                            <GraduationCap size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Universities</p>
                                            <p className="text-sm font-bold text-slate-800">Top Global Ranked</p>
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

            {/* --- LIST SECTION --- */}
            <section id="scholarships-list" className="relative bg-white py-24 z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a3b85] mb-4">Available Scholarships</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Explore funding options from top destinations around the world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {SCHOLARSHIPS.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row items-center gap-6 md:gap-8"
                            >
                                <div className="shrink-0 relative">
                                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner group-hover:scale-105 transition-transform duration-300">
                                        <Image
                                            src={item.src}
                                            alt={item.name}
                                            width={100}
                                            height={100}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-blue-100 p-2 rounded-full text-[#2B59C3]">
                                        <Globe size={16} />
                                    </div>
                                </div>

                                <div className="flex-grow text-center md:text-left space-y-2">
                                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-[#2B59C3] transition-colors">{item.name}</h3>
                                    <p className="text-slate-600">
                                        Discover exclusive scholarship opportunities for {item.name}. Our experts can guide you through the application process.
                                    </p>
                                </div>

                                <div className="shrink-0">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button
                                                className="bg-[#F28B82] hover:bg-[#E07A71] text-white font-bold py-3 px-6 rounded-xl shadow-md transition-transform active:scale-95 flex items-center gap-2"
                                            >
                                                Enquire Now <BookOpen className="w-4 h-4" />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                                            <DialogHeader>
                                                <DialogTitle className="text-2xl font-bold text-[#1a3b85]">Enquire for {item.name}</DialogTitle>
                                            </DialogHeader>
                                            <ScholarshipsForm country={item.country} />
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer decoration */}
                    <div className="mt-24 bg-[#1a3b85] rounded-3xl p-12 text-center relative overflow-hidden text-white shadow-2xl">
                        {/* Background decoration */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                            <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] bg-[#2B59C3] rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
                            <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] bg-[#F28B82] rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-6">Need Personalized Guidance?</h2>
                            <p className="text-blue-100 text-lg mb-8">
                                Our counselors are ready to help you find the best financial aid options for your studies.
                            </p>
                            <Button
                                className="bg-white text-[#1a3b85] hover:bg-blue-50 font-bold py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
                                onClick={() => window.location.href = '/contact'}
                            >
                                Contact Us Today
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ScholarshipsPageV2;
