"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/myComponents/button";
import {
    Plane,
    Ticket,
    Map,
    Wallet,
    ArrowRight,
    CheckCircle2,
    Globe
} from "lucide-react";

const AirTicketingPageV2 = () => {
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
                    className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-[#2B59C3] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"
                    style={{ animationDelay: "2s" }}
                ></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-blue-100 text-[#2B59C3] font-semibold text-sm shadow-sm backdrop-blur-sm mx-auto lg:mx-0">
                                <Plane className="w-4 h-4 rotate-45" />
                                Student Air Ticketing Services
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1a3b85] leading-[1.1] tracking-tight">
                                Fly High for Less with <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B59C3] to-[#F28B82]">
                                    Uniguru
                                </span>
                            </h1>

                            <p className="text-slate-600 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Find the lowest airfares for your study abroad journey. We specialize in providing affordable flight options to help students save money and travel with ease.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                                <Link href="https://www.skyscanner.net/" target="_blank" rel="noopener noreferrer">
                                    <Button className="bg-[#F28B82] hover:bg-[#E07A71] text-white font-bold py-6 px-8 rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#F28B82]/30 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                                        Check Rates <ArrowRight className="w-5 h-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative order-1 lg:order-2 flex justify-center">
                            <div className="relative w-full max-w-[500px] aspect-square">
                                {/* Main Image with floating effect */}
                                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-700 z-10">
                                    <Image
                                        src="/images/services/air/01.png"
                                        alt="Uniguru Air Ticketing"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-8 -left-4 bg-white p-4 rounded-xl shadow-lg z-20 animate-float border border-slate-100 hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded-full text-green-600">
                                            <Wallet size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Benefits</p>
                                            <p className="text-sm font-bold text-slate-800">Best Prices Guaranteed</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#F2C94C] rounded-full opacity-50 blur-xl animate-pulse"></div>
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#2B59C3] rounded-full opacity-30 blur-xl animate-pulse delay-700"></div>
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

            {/* --- FEATURES / BENEFITS SECTION --- */}
            <section className="bg-white py-20 lg:py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a3b85] mb-4">How Uniguru Can Assist</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            We take the stress out of travel planning so you can focus on your studies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center">
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100 shadow-sm text-[#F28B82]">
                                <Ticket className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#2B59C3] transition-colors">Exclusive Discounts</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Through our partnerships with trusted agencies, we offer special discounted rates on international flights.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center">
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100 shadow-sm text-[#2B59C3]">
                                <Map className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#2B59C3] transition-colors">Personalized Options</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Whether you need a one-way ticket or flexible return options, we find the best flights to suit your schedule.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center">
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100 shadow-sm text-[#F2C94C]">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#2B59C3] transition-colors">Hassle-Free Booking</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We provide end-to-end assistance, from selecting routes to ensuring you get the best deal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- INFO / SPLIT SECTION --- */}
            <section className="bg-slate-50 py-20 lg:py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-all duration-500">
                                <Image
                                    src="/images/services/air/03.png"
                                    alt="Travel Planning"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Decor */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2B59C3] rounded-full opacity-10 blur-2xl"></div>
                        </div>

                        <div className="lg:w-1/2 space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2B59C3] text-sm font-semibold mb-4">
                                    <Globe className="w-4 h-4" />
                                    Global Reach
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#1a3b85] mb-6">
                                    Affordable Air Tickets for Your Study Abroad Journey
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    At Uniguru, we understand that booking flights can be a significant expense.
                                    That&apos;s why we&apos;ve partnered with leading air ticketing agencies to provide students
                                    with exclusive access to discounted rates.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Save significantly on international flights",
                                    "Flexible dates and routes offered",
                                    "Expert travel advice for students",
                                    "24/7 support for booking issues"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <div className="w-2 h-2 rounded-full bg-[#F28B82]"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/book" className="inline-block pt-4">
                                <Button className="bg-[#1a3b85] hover:bg-[#2B59C3] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:-translate-y-1">
                                    Contact for Details
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA SECTION --- */}
            <section className="bg-white py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
                    <div className="bg-[#1a3b85] rounded-[2.5rem] p-12 lg:p-16 relative overflow-hidden shadow-2xl">
                        {/* Background Effects */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <div className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] bg-[#2B59C3] rounded-full mix-blend-screen filter blur-[80px] opacity-40"></div>
                            <div className="absolute bottom-[-50%] right-[-20%] w-[500px] h-[500px] bg-[#F28B82] rounded-full mix-blend-screen filter blur-[80px] opacity-40"></div>
                        </div>

                        <div className="relative z-10 space-y-8">
                            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">Ready to Take Off?</h2>
                            <p className="text-blue-100 text-xl max-w-2xl mx-auto">
                                By choosing Uniguru, you can focus on your studies while we take care of the logistics!
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                                <Link href="https://www.skyscanner.net/" target="_blank" rel="noopener noreferrer">
                                    <Button className="bg-[#F28B82] hover:bg-[#E07A71] text-white font-bold py-6 px-10 rounded-full shadow-lg hover:shadow-2xl transition-all w-full sm:w-auto text-lg flex items-center justify-center gap-2">
                                        Check Rates Now <Plane className="w-5 h-5 rotate-45" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AirTicketingPageV2;
