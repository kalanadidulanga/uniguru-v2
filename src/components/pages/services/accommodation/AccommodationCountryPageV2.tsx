"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ACCOMMODATION_DESTINATIONS } from "@/constants/data";
import AccommodationList from "@/components/pages/services/accommodation/AccommodationList";
import AccommodationForm from "@/components/pages/services/accommodation/AccommodationForm";
import { MapPin, Home, ArrowRight, Star, Building, CheckCircle } from "lucide-react";

interface PageProps {
    params: {
        country: string;
    };
}

const AccommodationCountryPageV2 = ({ params }: PageProps) => {
    const { country } = params;

    const dataSet = ACCOMMODATION_DESTINATIONS.find(
        (item) => item.country === country
    );

    if (!dataSet) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FFF5F0]">
                <div className="text-center">
                    <div className="bg-white p-6 rounded-full inline-block mb-4 shadow-sm animate-bounce">
                        <MapPin className="w-12 h-12 text-[#F28B82]" />
                    </div>
                    <h1 className="text-3xl font-bold text-[#1a3b85]">Destination Not Found</h1>
                    <p className="text-slate-500 mt-2">We couldn&apos;t find the accommodation page you&apos;re looking for.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen font-sans text-slate-800 selection:bg-[#F28B82] selection:text-white">

            {/* --- HERO SECTION --- */}
            <section className="relative bg-[#FFF5F0] pt-36 pb-32 lg:pt-48 lg:pb-40 overflow-hidden">
                {/* Grid Background */}
                <div
                    className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#F28B82 1px, transparent 1px), linear-gradient(90deg, #F28B82 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                ></div>

                {/* Animated Decorations */}
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#F28B82] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[#2B59C3] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob" style={{ animationDelay: "2s" }}></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Text Content */}
                        <div className="lg:w-1/2 text-center lg:text-left z-20">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-blue-100 text-[#2B59C3] font-semibold text-sm shadow-sm backdrop-blur-sm mb-8 animate-fade-in-up">
                                <Home className="w-4 h-4" />
                                Premium Student Living
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1a3b85] mb-6 leading-[1.1] tracking-tight">
                                Live Your Best Life in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B59C3] to-[#F28B82]">{dataSet.name}</span>
                            </h1>

                            <p className="text-slate-600 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                                Discover safe, affordable, and student-friendly accommodation near top universities. We verify every listing so you don&apos;t have to.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="bg-green-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-green-600" /></div>
                                    <span className="text-sm font-semibold text-slate-700">Verified Listings</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="bg-blue-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-[#2B59C3]" /></div>
                                    <span className="text-sm font-semibold text-slate-700">No Booking Fees</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="bg-orange-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-[#F28B82]" /></div>
                                    <span className="text-sm font-semibold text-slate-700">24/7 Support</span>
                                </div>
                            </div>
                        </div>

                        {/* Visual Content */}
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-12">
                                    <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                        <Image
                                            src={dataSet?.images[0].src || ""}
                                            alt={`${dataSet.name} Accommodation`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-blue-50">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                            <span className="font-bold text-[#1a3b85]">4.9/5 Rating</span>
                                        </div>
                                        <p className="text-xs text-slate-500">Based on student reviews</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-[#1a3b85] p-6 rounded-3xl shadow-xl text-white">
                                        <div className="text-3xl font-bold mb-1">100+</div>
                                        <p className="text-blue-200 text-sm">Properties in {dataSet.name}</p>
                                    </div>
                                    <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                        <Image
                                            src={dataSet?.images[1].src || ""}
                                            alt={`${dataSet.name} Accommodation`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative blurred shapes behind images */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-200 to-orange-200 opacity-20 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[80px] lg:h-[150px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
                    </svg>
                </div>
            </section>

            {/* --- LISTINGS & SIDEBAR SECTION --- */}
            <section className="py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Main Listings Column */}
                        <div className="lg:w-2/3">
                            <div className="flex items-center gap-3 mb-8">
                                <Building className="w-6 h-6 text-[#F28B82]" />
                                <h2 className="text-3xl font-bold text-[#1a3b85]">Popular Properties</h2>
                            </div>

                            <AccommodationList country={country} />
                        </div>

                        {/* Sticky Sidebar */}
                        <div className="lg:w-1/3 relative">
                            <div className="sticky top-32 space-y-8">
                                {/* Form Card */}
                                <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#2B59C3] to-[#F28B82]"></div>
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-[#1a3b85] mb-2">Free Consultation</h3>
                                        <p className="text-slate-500 text-sm">Not sure where to stay? Our experts can help you match your budget and needs.</p>
                                    </div>
                                    <AccommodationForm country={dataSet.name} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AccommodationCountryPageV2;
