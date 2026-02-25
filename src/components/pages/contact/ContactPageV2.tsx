"use client";

import React, { useState } from "react";
import { CONTACT_DETAILS } from "@/constants/data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/myComponents/button";
import { MapPin, Phone, Mail, Send, Globe } from "lucide-react";
import { sendContactEmail } from "@/actions/mailSending";
import toast from "react-hot-toast";

const ContactPageV2 = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);

        try {
            const response = await sendContactEmail(formData);
            if (response.status) {
                toast.success(response.message);
                (e.target as HTMLFormElement).reset();
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
        <div className="min-h-screen bg-[#FFF5F0] relative overflow-hidden font-sans text-slate-800">
            {/* Static Grid Background */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#F28B82 1px, transparent 1px), linear-gradient(90deg, #F28B82 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                }}
            ></div>

            {/* Static Decorative Elements (No Animation) */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#F28B82] rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2B59C3] rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 lg:py-20 mt-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-[#1a3b85] mb-4">
                        Contact Us
                    </h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We are here to help you with your study abroad journey. Reach out to us through any of our global offices or send us a message directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Contact Info & Locations */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm">
                            <h2 className="text-xl font-bold text-[#2B59C3] mb-6 flex items-center gap-2">
                                <Globe className="w-5 h-5" /> Global Offices
                            </h2>

                            {/* Location Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {CONTACT_DETAILS.map((detail, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === index
                                            ? "bg-[#2B59C3] text-white shadow-md"
                                            : "bg-white text-slate-600 hover:bg-blue-50 border border-slate-100"
                                            }`}
                                    >
                                        {detail.name}
                                    </button>
                                ))}
                            </div>

                            {/* Active Location Details */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                    <div className="bg-blue-50 p-2.5 rounded-full text-[#2B59C3] shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 mb-1">Address</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {CONTACT_DETAILS[activeTab].address}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                    <div className="bg-orange-50 p-2.5 rounded-full text-[#F28B82] shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 mb-1">Phone</h3>
                                        <a href={`tel:${CONTACT_DETAILS[activeTab].phone}`} className="text-sm text-slate-600 hover:text-[#2B59C3]">
                                            {CONTACT_DETAILS[activeTab].phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                    <div className="bg-green-50 p-2.5 rounded-full text-green-600 shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 mb-1">Email</h3>
                                        <a href={`mailto:${CONTACT_DETAILS[activeTab].email}`} className="text-sm text-slate-600 hover:text-[#2B59C3]">
                                            {CONTACT_DETAILS[activeTab].email}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map Embed (Compact) */}
                            <div className="mt-6 rounded-xl overflow-hidden border border-slate-200 h-48 bg-slate-100">
                                <iframe
                                    src={CONTACT_DETAILS[activeTab].src}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                            <h2 className="text-2xl font-bold text-[#1a3b85] mb-2">Send us a Message</h2>
                            <p className="text-slate-500 mb-8 text-sm">Fill out the form below and we&apos;ll get back to you shortly.</p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            required
                                            className="bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="mobile" className="text-sm font-semibold text-slate-700">Phone Number</label>
                                        <Input
                                            id="mobile"
                                            name="mobile"
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            required
                                            className="bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        required
                                        className="bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject</label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        placeholder="How can we help?"
                                        required
                                        className="bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us more about your inquiry..."
                                        rows={5}
                                        required
                                        className="bg-slate-50 border-slate-200 focus:bg-white transition-colors resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-[#F28B82] hover:bg-[#E07A71] text-white font-bold py-6 rounded-xl shadow-md transition-all mt-4"
                                >
                                    {isLoading ? "Sending..." : <span className="flex items-center gap-2">Send Message <Send className="w-4 h-4" /></span>}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPageV2;
