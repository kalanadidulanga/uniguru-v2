"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { COMPANY_INFO } from "@/constants/data";

const SOCIAL_ICONS = [
  { icon: FaFacebookF, link: "https://facebook.com/uniguruedu/", color: "#1877F2", label: "Facebook" },
  { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/uniguru-solutions/", color: "#0A66C2", label: "LinkedIn" },
  { icon: FaInstagram, link: "https://www.instagram.com/uniguruedu/", color: "#E4405F", label: "Instagram" },
  { icon: FaYoutube, link: "https://www.youtube.com/@Uniguru_", color: "#FF0000", label: "YouTube" },
  { icon: FaTiktok, link: "https://www.tiktok.com/@uniguru_", color: "#000000", label: "TikTok" },
  { icon: FaWhatsapp, link: COMPANY_INFO.whatsapp, color: "#25D366", label: "WhatsApp" },
];

const FOOTER_LINKS = {
    navigate: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about-us" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ],
    legal: [
        { name: "Careers", href: "/careers" },
        { name: "Partner", href: "/become-a-partner" },
        { name: "Regulation", href: "/regulation" },
        { name: "Policies", href: "/policies" },
    ],
    services: [
        { name: "Eligibility & Shortlist", href: "/services/eligibility-shortlist" },
        { name: "Admissions Support", href: "/services/admissions-support" },
        { name: "IELTS & Interview Prep", href: "/services/ielts-interview-prep" },
        { name: "Financial Help", href: "/services/financial-help" },
        { name: "Accommodation", href: "/services/accommodation" },
        { name: "Air Ticketing", href: "/services/air-ticketing" },
    ],
    destinations: [
        { name: "UK", href: "/study-destinations/uk" },
        { name: "Canada", href: "/study-destinations/canada" },
        { name: "Australia", href: "/study-destinations/australia" },
        { name: "USA", href: "/study-destinations/usa" },
    ],
} as const;

const FooterV2 = () => {
    return (
        <footer
            className="relative bg-[#0f1a2e] text-white overflow-hidden"
            role="contentinfo"
            aria-label="Site footer"
        >
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                
                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-10 pb-10 border-b border-white/10">
                    
                    {/* Brand + Contact */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-flex items-center gap-3">
                            <Image
                                src="/logo-1.png"
                                alt="Uniguru Logo"
                                width={40}
                                height={40}
                                className="h-10 w-auto"
                            />
                            <span className="text-3xl font-bold tracking-tight">
                                Uniguru
                            </span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            London-led guidance for international students. Clear scope, fixed deliverables.
                        </p>
                        
                        {/* Contact - Compact */}
                        <div className="space-y-2 text-sm text-white/60">
                            <div className="flex items-center gap-2">
                                <MapPin size={14} className="text-[#D4AF37] shrink-0" />
                                <span>{COMPANY_INFO.addressShort}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={14} className="text-[#D4AF37] shrink-0" />
                                <span>{COMPANY_INFO.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={14} className="text-[#D4AF37] shrink-0" />
                                <span>{COMPANY_INFO.email}</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-2 pt-2">
                            <Link
                                href="/book"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-[#0f1a2e] text-xs font-semibold rounded-full hover:bg-[#e6c456] transition-colors"
                            >
                                Get My Shortlist
                                <Send size={12} />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-4 py-2 bg-white/5 text-white text-xs font-medium rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
                            
                            {/* Navigate */}
                            <div>
                                <h4 className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-3">
                                    Navigate
                                </h4>
                                <ul className="space-y-1.5">
                                    {FOOTER_LINKS.navigate.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-white/60 text-sm hover:text-[#D4AF37] transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* More */}
                            <div>
                                <h4 className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-3">
                                    More
                                </h4>
                                <ul className="space-y-1.5">
                                    {FOOTER_LINKS.legal.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-white/60 text-sm hover:text-[#D4AF37] transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Services */}
                            <div>
                                <h4 className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-3">
                                    Services
                                </h4>
                                <ul className="space-y-1.5">
                                    {FOOTER_LINKS.services.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-white/60 text-sm hover:text-[#D4AF37] transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Destinations */}
                            <div>
                                <h4 className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-3">
                                    Destinations
                                </h4>
                                <ul className="space-y-1.5">
                                    {FOOTER_LINKS.destinations.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-white/60 text-sm hover:text-[#D4AF37] transition-colors"
                                            >
                                                Study in {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
                    {/* Copyright */}
                    <p>© {new Date().getFullYear()} Uniguru. All rights reserved.</p>
                    
                    {/* Social Icons - Center */}
                    <div className="flex items-center gap-2 order-first sm:order-none">
                        {SOCIAL_ICONS.map((item) => (
                            <Link
                                key={item.label}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white border border-white/10 flex items-center justify-center hover:scale-110 transition-all"
                                aria-label={item.label}
                            >
                                <item.icon className="w-5 h-5 transition-colors" style={{ color: item.color }} />
                            </Link>
                        ))}
                    </div>
                    
                    {/* Legal Links */}
                    <div className="flex items-center gap-4">
                        <Link href="/policies" className="hover:text-white/60 transition-colors">Privacy</Link>
                        <Link href="/policies" className="hover:text-white/60 transition-colors">Terms</Link>
                        <span className="hidden sm:inline">IAA Reg: {COMPANY_INFO.iaaReg}</span>
                        <span className="sm:hidden">IAA Regulated</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterV2;
