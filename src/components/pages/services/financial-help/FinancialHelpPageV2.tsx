"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
    Banknote,
    FileText,
    HandCoins,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Landmark,
    University,
    Globe
} from "lucide-react";
import toast from "react-hot-toast";
import { sendFinanceSupportEmail } from "@/actions/mailSending";
import { STUDY_DESTINATIONS } from "@/constants/data";

const FinancialHelpPageV2 = () => {
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [destination, setDestination] = useState<string | null>(null);

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target as HTMLFormElement);
        const dataSet = {
            destination,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
            mobile: formData.get("mobile") as string,
            name: formData.get("name") as string,
        };
        if (
            !dataSet.destination ||
            !dataSet.email ||
            !dataSet.message ||
            !dataSet.mobile ||
            !dataSet.name
        ) {
            toast.error("Please fill all the required fields.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await sendFinanceSupportEmail(dataSet);
            if (response.status) {
                toast.success(response.message);
                formRef.current?.reset();
                setDestination(null);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error("Failed to send message. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

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
                        <Banknote className="w-4 h-4" />
                        Student Financial Support
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-[#1a3b85] mb-6 leading-tight">
                        Funding Your <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B59C3] to-[#F28B82]">Global Ambitions</span>
                    </h1>
                    <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                        Don&apos;t let finances hold you back. We specialize in helping students secure the necessary funding
                        for their education abroad, guiding you through loan applications and banking procedures.
                    </p>

                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-[#2B59C3] text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-[#1a3b85] transition-all transform hover:scale-105"
                        >
                            Get Financial Help
                        </button>
                    </div>

                    {/* Hero Images */}
                    <div className="mt-16 relative mx-auto max-w-4xl h-[300px] md:h-[400px] hidden md:block">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                            <div className="absolute top-0 left-0 w-[45%] h-[90%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-6 z-10 hover:z-20 hover:scale-105 transition-all duration-500">
                                <Image
                                    src="/images/services/financial-help/01.png"
                                    alt="Financial Planning"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 w-[45%] h-[90%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-6 z-10 hover:z-20 hover:scale-105 transition-all duration-500">
                                <Image
                                    src="/images/services/financial-help/02.png"
                                    alt="Student Success"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative Middle Element */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl z-30 animate-bounce">
                                <TrendingUp className="w-8 h-8 text-[#F28B82]" />
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

            {/* --- INFO SECTION --- */}
            <section className="py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#1a3b85]">
                                Investing in Your <span className="text-[#F28B82]">Future</span>
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Studying abroad is an exciting journey, but it can also be financially challenging. With tuition fees, accommodation, and living costs, expenses can add up quickly.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                At Uniguru, we understand the importance of managing these expenses. We are here to help you secure financial support in the form of student loans, making your dream of studying abroad a reality.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100 transform hover:-translate-y-1 transition-transform">
                                    <Landmark className="w-8 h-8 text-[#2B59C3]" />
                                    <div>
                                        <h4 className="font-bold text-[#1a3b85]">Trusted Banks</h4>
                                        <p className="text-xs text-slate-500">Partnered with top institutions</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-orange-50 border border-orange-100 transform hover:-translate-y-1 transition-transform">
                                    <HandCoins className="w-8 h-8 text-[#F28B82]" />
                                    <div>
                                        <h4 className="font-bold text-[#1a3b85]">Low Interest</h4>
                                        <p className="text-xs text-slate-500">Student-friendly rates</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                            <Image
                                src="/images/services/financial-help/03.png"
                                alt="Financial Assistance"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#1a3b85]/80 to-transparent p-6 text-white">
                                <p className="font-semibold">Comprehensive Support</p>
                                <p className="text-sm opacity-90">From application to approval</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SERVICES GRID SECTION --- */}
            <section className="py-20 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#F28B82] font-bold tracking-wider uppercase text-sm">Our Services</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a3b85] mt-2 mb-4">How Uniguru Assists You</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">We provide end-to-end support to ensure your financial process is smooth and hassle-free.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Globe className="w-8 h-8 text-white" />,
                                title: "Loan Options Guidance",
                                desc: "Advice on various student loan options to find the best fit for your needs.",
                                color: "bg-[#2B59C3]"
                            },
                            {
                                icon: <FileText className="w-8 h-8 text-white" />,
                                title: "Documentation Help",
                                desc: "Assistance with complex paperwork to ensure all documents are correctly prepared.",
                                color: "bg-[#F28B82]"
                            },
                            {
                                icon: <University className="w-8 h-8 text-white" />,
                                title: "Application Support",
                                desc: "We work closely with you and banks to smooth out the application process.",
                                color: "bg-[#1a3b85]"
                            },
                            {
                                icon: <TrendingUp className="w-8 h-8 text-white" />,
                                title: "Maximizing Amount",
                                desc: "Strategies to optimize your loan amount to cover all expenses abroad.",
                                color: "bg-emerald-500"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col gap-4 group">
                                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-lg text-[#1a3b85]">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FORM SECTION --- */}
            <section id="consultation-form" className="py-20 bg-white relative">
                {/* Decorative Blobs */}
                <div className="absolute right-0 top-1/4 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -z-0"></div>
                <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-[#FFF5F0] rounded-full blur-3xl opacity-50 -z-0"></div>

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
                        <div className="bg-[#1a3b85] p-8 text-center text-white">
                            <h2 className="text-3xl font-bold mb-2">Get Financial Help</h2>
                            <p className="text-blue-100">Fill out the form below and our experts will guide you.</p>
                        </div>

                        <div className="p-8 lg:p-12">
                            <form ref={formRef} onSubmit={submitForm} className="space-y-6">

                                {/* Destination Selection */}
                                <div className="space-y-3">
                                    <label className="block text-sm font-bold text-slate-700">Select Your Dream Study Destination</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {STUDY_DESTINATIONS.map((item, index) => (
                                            <div
                                                key={index}
                                                onClick={() => setDestination(item.name)}
                                                className={`
                                                    flex items-center gap-3 p-3 rounded-xl cursor-pointer border transition-all duration-200
                                                    ${destination === item.name
                                                        ? "bg-blue-50 border-[#2B59C3] ring-1 ring-[#2B59C3]"
                                                        : "bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                                                    }
                                                `}
                                            >
                                                <div className="relative w-6 h-6 rounded-full overflow-hidden shadow-sm">
                                                    <Image src={item.src} alt={item.name} fill className="object-cover" />
                                                </div>
                                                <span className={`text-sm font-semibold ${destination === item.name ? "text-[#2B59C3]" : "text-slate-600"}`}>
                                                    {item.name}
                                                </span>
                                                {destination === item.name && (
                                                    <CheckCircle className="w-4 h-4 text-[#2B59C3] ml-auto" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Mobile Number</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        required
                                        placeholder="+94 77 123 4567"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Your Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Tell us about your requirements..."
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#2B59C3] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-[#2B59C3] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-[#1a3b85] transition-all transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <>Sending Request...</>
                                    ) : (
                                        <>Submit Request <ArrowRight className="w-5 h-5" /></>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FinancialHelpPageV2;
