"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ACCOMMODATION_DESTINATIONS } from "@/constants/data";
import { Home, MapPin, ShieldCheck, Heart, ArrowRight } from "lucide-react";

const AccommodationPageV2 = () => {
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
                        <Home className="w-4 h-4" />
                        Student Housing Services
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-[#1a3b85] mb-6 leading-tight">
                        Find Your Home <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B59C3] to-[#F28B82]">Away From Home</span>
                    </h1>
                    <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                        Find affordable, comfortable, and safe accommodations for your study abroad journey.
                        Whether you need a dormitory, apartment, or homestay, Uniguru makes it easy to settle in.
                    </p>
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
                                Comfortable Living for <span className="text-[#F28B82]">Global Students</span>
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                We specialize in helping students secure budget-friendly housing options, ensuring a comfortable and safe living environment.
                                Whether you’re looking for dormitories, apartments, or homestays, Uniguru makes finding the perfect place to stay easy and hassle-free, so you can focus on your studies and enjoy your international experience.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
                                    <ShieldCheck className="w-8 h-8 text-[#2B59C3]" />
                                    <div>
                                        <h4 className="font-bold text-[#1a3b85]">Safe & Secure</h4>
                                        <p className="text-xs text-slate-500">Verified listings only</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-orange-50 border border-orange-100">
                                    <Heart className="w-8 h-8 text-[#F28B82]" />
                                    <div>
                                        <h4 className="font-bold text-[#1a3b85]">Budget Friendly</h4>
                                        <p className="text-xs text-slate-500">Prices that fit you</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[400px] w-full hidden lg:block">
                            <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 z-10 border-4 border-white">
                                <Image
                                    src="/images/services/accommodation/02.png"
                                    alt="Student Accommodation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500 z-0 border-4 border-white">
                                <Image
                                    src="/images/services/accommodation/01.png"
                                    alt="Student Room"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        {/* Mobile Image */}
                        <div className="lg:hidden w-full h-64 relative rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/services/accommodation/01.png"
                                alt="Student Room"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DESTINATIONS SECTION --- */}
            <section className="py-20 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#F28B82] font-bold tracking-wider uppercase text-sm">Where do you want to go?</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a3b85] mt-2 mb-4">Popular Destinations</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Explore our most popular student accommodation locations across the globe.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                        {ACCOMMODATION_DESTINATIONS.map((item, index) => (
                            <Link key={index} href={item.href} className="group">
                                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col items-center gap-4 h-full relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2B59C3] to-[#F28B82] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="w-20 h-20 relative drop-shadow-md rounded-full overflow-hidden bg-slate-50 group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src={item.src}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-bold text-[#1a3b85] group-hover:text-[#2B59C3] transition-colors">{item.name}</h3>
                                        <span className="text-xs text-slate-400 mt-1 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                            View Options <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
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
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Need Help Finding Accommodation?</h2>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                Our experts can help you shortlist the best places to stay near your university.
                                Book a free consultation today!
                            </p>
                            <Link href="/book">
                                <button className="bg-white text-[#1a3b85] font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all transform hover:scale-105">
                                    Book Free Consultation
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AccommodationPageV2;
