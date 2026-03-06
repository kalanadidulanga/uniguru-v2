"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ACCOMMODATION_DESTINATIONS, COMPANY_INFO } from "@/constants/data";
import AccommodationList from "@/components/pages/services/accommodation/AccommodationList";
import AccommodationForm from "@/components/pages/services/accommodation/AccommodationForm";
import { MapPin, Home, ArrowRight, Star, Building, CheckCircle, Send, Phone, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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
            <div className="min-h-screen flex items-center justify-center bg-[#0f2554]">
                <div className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#1a3b85] flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <h1 className="text-3xl font-semibold text-white">Destination Not Found</h1>
                    <p className="text-white/60 mt-2">We couldn&apos;t find the accommodation page you&apos;re looking for.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen font-sans text-slate-800">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden">
                {/* Background Image */}
                <Image
                    src={dataSet?.images[0].src || ""}
                    alt={`${dataSet.name} Accommodation`}
                    fill
                    className="object-cover"
                    unoptimized
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 mb-6">
                            <Home size={16} className="text-[#D4AF37]" />
                            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                                Premium Student Living
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6">
                            Live Your Best Life in{" "}
                            <span className="text-[#D4AF37]">{dataSet.name}</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                            Discover safe, affordable, and student-friendly accommodation near top universities. We verify every listing so you don&apos;t have to.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <Link
                                href="/book"
                                className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-[#D4AF37] hover:bg-[#c9a432] text-[#0d1b3e] font-bold rounded-lg transition-all duration-200 text-sm shadow-md"
                            >
                                Get Started
                                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <a
                                href={COMPANY_INFO.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-7 sm:px-9 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-lg transition-all duration-200 text-sm border border-white/30"
                            >
                                <FaWhatsapp className="text-green-400" size={18} />
                                WhatsApp Us
                            </a>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex flex-wrap items-center gap-6 mt-10">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-[#D4AF37]" />
                                <span className="text-sm font-medium text-white/90">Verified Listings</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-[#D4AF37]" />
                                <span className="text-sm font-medium text-white/90">No Booking Fees</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-[#D4AF37]" />
                                <span className="text-sm font-medium text-white/90">24/7 Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- LISTINGS & SIDEBAR SECTION --- */}
            <section className="py-16 sm:py-20 bg-white relative">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Main Listings Column */}
                        <div className="lg:w-2/3">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <Building size={14} className="text-[#D4AF37]" />
                                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                                    Available Properties
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f2554] mb-8">
                                Popular Properties
                            </h2>

                            <AccommodationList country={country} />
                        </div>

                        {/* Sticky Sidebar */}
                        <div className="lg:w-1/3 relative">
                            <div className="sticky top-32 space-y-8">
                                {/* Form Card */}
                                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0f2554] to-[#D4AF37]"></div>
                                    <div className="mb-6">
                                        <div className="inline-flex items-center gap-2 mb-4">
                                            <Send size={14} className="text-[#D4AF37]" />
                                            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                                                Get In Touch
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-[#0f2554] mb-2">Free Consultation</h3>
                                        <p className="text-slate-500 text-sm">Not sure where to stay? Our experts can help you match your budget and needs.</p>
                                    </div>
                                    <AccommodationForm country={dataSet.name} />
                                </div>

                                {/* Contact Card */}
                                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#1a3b85] flex items-center justify-center">
                                            <Phone size={18} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-[#0f2554]">Need Help Now?</p>
                                            <p className="text-xs text-slate-500">Our team is ready to assist</p>
                                        </div>
                                    </div>
                                    <a
                                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                                        className="text-sm font-semibold text-[#D4AF37] hover:underline"
                                    >
                                        {COMPANY_INFO.phone}
                                    </a>
                                </div>

                                {/* Stats Card */}
                                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                                        <span className="font-semibold text-[#0f2554]">4.9/5 Rating</span>
                                    </div>
                                    <p className="text-xs text-slate-500">Based on student reviews | 100+ properties in {dataSet.name}</p>
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
