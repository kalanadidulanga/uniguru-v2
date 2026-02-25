"use client";

import React, { useState, useRef } from "react";
import { sendConsultationEmail } from "@/actions/mailSending";
import { Button } from "@/components/myComponents/button";
import { DatePickerWithPresets } from "@/components/myComponents/DatePickerWithPresets";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { STUDY_DESTINATIONS } from "@/constants/data";
import Image from "next/image";
import toast from "react-hot-toast";
import { Calendar, Clock, Globe, User, Mail, Phone, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";

const BookPageV2 = () => {
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [selectedDate, setSelectedDate] = useState<Date | undefined | null>(null);
    const [timeSlot, setTimeSlot] = useState<string | null>(null);
    const [destination, setDestination] = useState<string | null>(null);

    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM",
        "12:00 PM", "01:00 PM", "02:00 PM",
        "03:00 PM", "04:00 PM", "05:00 PM",
    ];

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target as HTMLFormElement);
        const dataSet = {
            destination,
            timeSlot,
            selectedDate: selectedDate?.toLocaleDateString(),
            email: formData.get("email") as string,
            message: formData.get("message") as string,
            mobile: formData.get("mobile") as string,
            name: formData.get("name") as string,
        };

        if (!dataSet.destination || !dataSet.timeSlot || !dataSet.selectedDate ||
            !dataSet.email || !dataSet.message || !dataSet.mobile || !dataSet.name) {
            toast.error("Please fill all the required fields.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await sendConsultationEmail(dataSet);
            if (response.status) {
                toast.success(response.message);
                formRef.current?.reset();
                setSelectedDate(null);
                setTimeSlot(null);
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
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#F28B82 1px, transparent 1px), linear-gradient(90deg, #F28B82 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                ></div>

                {/* Animated Decorations */}
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#F28B82] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#2B59C3] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob" style={{ animationDelay: "2s" }}></div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-blue-100 text-[#2B59C3] font-semibold text-sm shadow-sm backdrop-blur-sm mb-6">
                        <Calendar className="w-4 h-4" />
                        Free Consultation
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-[#1a3b85] mb-6 leading-tight">
                        Start Your Journey with <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B59C3] to-[#F28B82]">Expert Guidance</span>
                    </h1>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Book a free session with our education consultants. We&apos;ll help you find the perfect university and guide you through the entire application process.
                    </p>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[60px] lg:h-[100px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
                    </svg>
                </div>
            </section>

            {/* --- FORM SECTION --- */}
            <section className="relative z-30 -mt-20 pb-24 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                    <div className="flex flex-col lg:flex-row">

                        {/* Left Side: Instructions / Visuals */}
                        <div className="bg-[#1a3b85] text-white p-10 lg:p-14 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
                            {/* Decorative Background */}
                            <div className="absolute top-0 left-0 w-full h-full">
                                <div className="absolute top-[-20%] left-[-20%] w-64 h-64 bg-[#2B59C3] rounded-full mix-blend-screen blur-3xl opacity-30"></div>
                                <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-[#F28B82] rounded-full mix-blend-screen blur-3xl opacity-30"></div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">How it works</h3>
                                <ul className="space-y-6">
                                    <li className="flex gap-4 items-start">
                                        <div className="bg-white/10 p-2 rounded-lg shrink-0">
                                            <Globe className="w-5 h-5 text-blue-200" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Choose Destination</h4>
                                            <p className="text-blue-100 text-sm leading-relaxed">Select where you dream of studying.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="bg-white/10 p-2 rounded-lg shrink-0">
                                            <Clock className="w-5 h-5 text-blue-200" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Pick a Time</h4>
                                            <p className="text-blue-100 text-sm leading-relaxed">Select a date and time that fits your schedule.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="bg-white/10 p-2 rounded-lg shrink-0">
                                            <MessageSquare className="w-5 h-5 text-blue-200" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Get Expert Advice</h4>
                                            <p className="text-blue-100 text-sm leading-relaxed">Connect with our counselors for free guidance.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="relative z-10 mt-12 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                                <p className="text-sm font-medium italic text-blue-100">&quot;Uniguru made my application process so smooth. Highly recommended!&quot;</p>
                                <div className="flex items-center gap-3 mt-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-200"></div>
                                    <div>
                                        <p className="text-xs font-bold">Sarah J.</p>
                                        <p className="text-[10px] text-blue-200 uppercase tracking-wider">Student, UK</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="p-8 lg:p-14 lg:w-3/5 bg-white">
                            <form ref={formRef} onSubmit={onSubmit} className="space-y-8">

                                {/* Step 1: Destination */}
                                <div className="space-y-4">
                                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                                        <Globe className="w-4 h-4 text-[#F28B82]" />
                                        1. Select Destination
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {STUDY_DESTINATIONS.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`group flex items-center gap-3 p-3 rounded-xl cursor-pointer border transition-all duration-200 ${destination === item.name
                                                    ? "bg-[#2B59C3] border-[#2B59C3] text-white shadow-md ring-2 ring-[#2B59C3]/20"
                                                    : "bg-slate-50 border-slate-100 text-slate-600 hover:border-[#2B59C3] hover:bg-white"
                                                    }`}
                                                onClick={() => setDestination(item.name)}
                                            >
                                                <div className={`p-1.5 rounded-full ${destination === item.name ? "bg-white/20" : "bg-white shadow-sm"}`}>
                                                    <Image src={item.src} alt={item.name} width={20} height={20} />
                                                </div>
                                                <span className="font-semibold text-sm">{item.name}</span>
                                                {destination === item.name && <CheckCircle2 className="w-4 h-4 ml-auto text-white" />}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Step 2: Date & Time */}
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-[#F28B82]" />
                                            2. Select Date
                                        </label>
                                        <DatePickerWithPresets onDateChange={setSelectedDate} />
                                        <input type="hidden" name="selectedDate" value={selectedDate ? selectedDate.toISOString() : ""} />
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-[#F28B82]" />
                                            3. Select Time
                                        </label>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[240px] overflow-y-auto pr-2 custom-scrollbar">
                                            {timeSlots.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className={`px-3 py-2 text-sm font-medium rounded-lg cursor-pointer text-center border transition-all ${timeSlot === item
                                                        ? "bg-[#F28B82] border-[#F28B82] text-white shadow-sm"
                                                        : "bg-slate-50 border-slate-100 text-slate-600 hover:border-[#F28B82] hover:text-[#F28B82]"
                                                        }`}
                                                    onClick={() => setTimeSlot(item)}
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3: Personal Details */}
                                <div className="space-y-4">
                                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                                        <User className="w-4 h-4 text-[#F28B82]" />
                                        4. Your Details
                                    </label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                            <Input placeholder="Full Name" name="name" required className="pl-10 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                        </div>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                            <Input placeholder="Phone Number" type="tel" name="mobile" required className="pl-10 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                                        <Input placeholder="Email Address" type="email" name="email" required className="pl-10 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                                    </div>
                                    <Textarea placeholder="Any specific questions or topics you&apos;d like to discuss?" rows={3} name="message" required className="bg-slate-50 border-slate-200 focus:bg-white transition-colors resize-none" />
                                </div>

                                <Button
                                    className="w-full bg-[#2B59C3] hover:bg-[#1a3b85] text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Booking..." : <>Confirm Booking <ArrowRight className="w-5 h-5" /></>}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookPageV2;
