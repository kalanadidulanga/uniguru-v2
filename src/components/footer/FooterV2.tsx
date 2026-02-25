"use client";

import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/constants/data";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

const QUICK_LINKS = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
] as const;

const SERVICES = [
    { name: "Universities", href: "/universities" },
    { name: "Scholarships", href: "/scholarships" },
    { name: "Become a Partner", href: "/become-a-partner" },
] as const;

const RESOURCES = [
    { name: "AI App", href: "/ai-search" },
    { name: "Guides", href: "/scholarships" },
    { name: "Book Now", href: "/book" },
] as const;

const FooterV2 = () => {
    return (
        <footer
            className="relative bg-[#0f172a] text-white overflow-hidden"
            role="contentinfo"
            aria-label="Site footer"
        >
            {/* Top Content */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                
                {/* Links grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10">
                    
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 border-b-2 border-[#D4AF37] pb-2 inline-block">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5 mt-4" role="list">
                            {QUICK_LINKS.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 text-sm hover:text-[#D4AF37] transition-colors flex items-center gap-2 group"
                                    >
                                        <ChevronRight size={14} className="text-[#D4AF37] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 border-b-2 border-[#D4AF37] pb-2 inline-block">
                            Services
                        </h4>
                        <ul className="space-y-2.5 mt-4" role="list">
                            {SERVICES.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 text-sm hover:text-[#D4AF37] transition-colors flex items-center gap-2 group"
                                    >
                                        <ChevronRight size={14} className="text-[#D4AF37] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 border-b-2 border-[#D4AF37] pb-2 inline-block">
                            Resources
                        </h4>
                        <ul className="space-y-2.5 mt-4" role="list">
                            {RESOURCES.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 text-sm hover:text-[#D4AF37] transition-colors flex items-center gap-2 group"
                                    >
                                        <ChevronRight size={14} className="text-[#D4AF37] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 border-b-2 border-[#D4AF37] pb-2 inline-block">
                            Contact Us
                        </h4>
                        <ul className="space-y-3 mt-4 text-gray-400 text-sm" role="list">
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-0.5" aria-hidden />
                                <span>128 City Road, London EC1V 2NX</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-[#D4AF37] shrink-0" aria-hidden />
                                <span>+44 20 1234 5678</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-[#D4AF37] shrink-0" aria-hidden />
                                <span>info@uniguru.co.uk</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Bottom section with London background */}
            <div className="relative h-72 sm:h-80">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/1.jpg"
                        alt="London skyline"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Social icons and copyright */}
                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
                    
                    {/* Social Icons */}
                    <div className="flex gap-3 mb-6">
                        {SOCIAL_LINKS.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                                aria-label={`${item.name || "Social link"}`}
                            >
                                <Image
                                    src={item.src}
                                    alt=""
                                    width={18}
                                    height={18}
                                    className="brightness-0"
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-xs sm:text-sm text-white space-y-1">
                        <p>© {new Date().getFullYear()} Uniguru • All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterV2;
