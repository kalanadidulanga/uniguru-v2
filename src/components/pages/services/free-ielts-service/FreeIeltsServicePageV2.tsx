"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Video, FileText, GraduationCap, ArrowRight, Mic, PenTool, CheckCircle } from "lucide-react";

const FreeIeltsServicePageV2 = () => {
    return (
        <div className="min-h-screen font-sans text-slate-800 selection:bg-[#F28B82] selection:text-white">

            {/* --- HERO SECTION --- */}
            <section className="relative bg-[#FFF5F0] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                {/* Grid Background */}
                <div
                    className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#F28B82 1px, transparent 1px), linear-gradient(90deg, #F28B82 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                ></div>

                {/* Animated Decorations */}
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#F28B82] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[#2B59C3] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob" style={{ animationDelay: "2s" }}></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-blue-100 text-[#2B59C3] font-semibold text-sm shadow-sm backdrop-blur-sm mb-6">
                        <GraduationCap className="w-4 h-4" />
                        Free Education Resources
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-[#1a3b85] mb-6 leading-tight">
                        Master IELTS with <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B59C3] to-[#F28B82]">Uniguru&apos;s Free Resources</span>
                    </h1>
                    <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                        Unlock your potential with our comprehensive, cost-free IELTS preparation materials.
                        From practice tests to expert video lessons, we have everything you need to achieve your target score.
                    </p>
                    <div className="flex justify-center flex-wrap gap-4">
                        <Link href="#modules">
                            <button className="bg-[#2B59C3] text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-[#1a3b85] transition-all transform hover:scale-105">
                                Start Learning
                            </button>
                        </Link>
                        <Link href="https://drive.google.com/drive/folders/1oiNxjDb-BUZG-1COPZKXj7vYvVhxHxc5?usp=sharing" target="_blank">
                            <button className="bg-white text-[#2B59C3] border-2 border-[#2B59C3] font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all transform hover:scale-105">
                                Access Free Materials
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[60px] lg:h-[100px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
                    </svg>
                </div>
            </section>

            {/* --- INFO SECTION --- */}
            <section className="py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#1a3b85]">
                                Why Choose Our <span className="text-[#F28B82]">Free IELTS Course?</span>
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                We believe that quality education should be accessible to everyone. That&apos;s why we&apos;ve partnered with top IELTS trainers to bring you a premium learning experience at absolutely no cost.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-blue-50 rounded-lg text-[#2B59C3] mt-1">
                                        <Video className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#1a3b85]">Video Lessons</h4>
                                        <p className="text-sm text-slate-500">Comprehensive video tutorials covering all 4 modules.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-orange-50 rounded-lg text-[#F28B82] mt-1">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#1a3b85]">Practice Materials</h4>
                                        <p className="text-sm text-slate-500">Downloadable worksheets and mock tests.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-green-50 rounded-lg text-green-600 mt-1">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#1a3b85]">Expert Tips</h4>
                                        <p className="text-sm text-slate-500">Strategies to boost your band score quickly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[400px] w-full hidden lg:block">
                            <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 z-10 border-4 border-white">
                                <Image
                                    src="/images/services/free-ielts-service/02.png"
                                    alt="IELTS Studying"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500 z-0 border-4 border-white">
                                <Image
                                    src="/images/services/free-ielts-service/01.png"
                                    alt="IELTS Materials"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        {/* Mobile Image */}
                        <div className="lg:hidden w-full h-64 relative rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/services/free-ielts-service/01.png"
                                alt="IELTS Materials"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MODULES SECTION --- */}
            <section id="modules" className="py-20 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#F28B82] font-bold tracking-wider uppercase text-sm">Study Material</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a3b85] mt-2 mb-4">Course Modules</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Focused preparation for every part of the IELTS exam.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Reading */}
                        <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col items-center gap-4 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2B59C3] to-[#F28B82] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="w-full h-48 relative rounded-xl overflow-hidden mb-4 bg-blue-100">
                                <Image
                                    src="/images/services/free-ielts-service/Reading.png"
                                    alt="Reading Module"
                                    fill
                                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-[#1a3b85]">Reading</h3>
                            <p className="text-center text-slate-500 text-sm">
                                Practice with academic and general reading passages. Improve your skimming and scanning techniques.
                            </p>
                        </div>

                        {/* Writing */}
                        <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col items-center gap-4 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2B59C3] to-[#F28B82] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="w-full h-48 relative rounded-xl overflow-hidden mb-4 bg-orange-100">
                                <Image
                                    src="/images/services/free-ielts-service/Writing.png"
                                    alt="Writing Module"
                                    fill
                                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-[#1a3b85]">Writing</h3>
                            <p className="text-center text-slate-500 text-sm">
                                Master Task 1 and Task 2. Learn how to structure your essays for high bandwidth scores.
                            </p>
                        </div>

                        {/* Speaking */}
                        <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col items-center gap-4 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2B59C3] to-[#F28B82] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="w-full h-48 relative rounded-xl overflow-hidden mb-4 bg-purple-100">
                                <Image
                                    src="/images/services/free-ielts-service/Speaking.png"
                                    alt="Speaking Module"
                                    fill
                                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-[#1a3b85]">Speaking</h3>
                            <p className="text-center text-slate-500 text-sm">
                                Gain confidence in speaking. Review common topics and practice your fluency and pronunciation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-[#1a3b85] rounded-[2rem] p-10 lg:p-16 text-center relative overflow-hidden">
                        {/* Background Blobs */}
                        <div className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] bg-[#2B59C3] rounded-full mix-blend-screen blur-[80px] opacity-30"></div>
                        <div className="absolute bottom-[-50%] right-[-20%] w-[500px] h-[500px] bg-[#F28B82] rounded-full mix-blend-screen blur-[80px] opacity-30"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Ace Your IELTS?</h2>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                Join thousands of students who have achieved their dream scores with Uniguru.
                                Sign up for free access today!
                            </p>
                            <Link href="https://drive.google.com/drive/folders/1oiNxjDb-BUZG-1COPZKXj7vYvVhxHxc5?usp=sharing" target="_blank">
                                <button className="bg-white text-[#1a3b85] font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all transform hover:scale-105">
                                    Access Free Materials
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FreeIeltsServicePageV2;
