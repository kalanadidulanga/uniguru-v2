"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight, Shield, Clock, Users, CheckCircle2 } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-[#fafbfc] py-16 sm:py-20 lg:py-24 font-sans">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats Strip */}
        <div className="relative mb-10 sm:mb-12 lg:mb-14 rounded-2xl overflow-hidden shadow-2xl">
          {/* Dark gradient base */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f4e] via-[#0f2554] to-[#0a1f4e]" />
          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)", backgroundSize: "22px 22px" }}
          />
          {/* Top gold border */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4">
            {[
              { value: "100%", label: "Compliant", icon: CheckCircle2 },
              { value: "IAA", label: "Regulated", icon: Shield },
              { value: "5000+", label: "Students", icon: Users },
              { value: "6 hrs", label: "Response time", icon: Clock },
            ].map((stat, i) => (
              <div
                key={i}
                className={`group relative flex flex-col items-center justify-center py-8 sm:py-10 px-4 text-center
                  ${i < 3 ? "border-r border-white/8" : ""}
                  ${i < 2 ? "border-b lg:border-b-0 border-white/8" : ""}
                `}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/5 transition-all duration-300" />
                {/* Faded watermark icon */}
                <stat.icon className="absolute bottom-3 right-3 w-10 h-10 text-white/5" />

                {/* Icon badge */}
                <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-3">
                  <stat.icon className="w-4 h-4 text-[#D4AF37]" />
                </div>

                {/* Value */}
                {stat.value === "IAA" ? (
                  <div className="relative w-24 h-10 sm:w-28 sm:h-12">
                    <Image src="/iaa-logo.png" alt="IAA Regulated" fill className="object-contain" />
                  </div>
                ) : (
                  <p className="text-4xl sm:text-5xl font-black text-white leading-none tracking-tight">{stat.value}</p>
                )}

                {/* Gold divider line */}
                <span className="w-6 h-[2px] bg-[#D4AF37] rounded-full my-2.5" />

                {/* Label */}
                <p className="text-[10px] sm:text-xs text-white/50 uppercase tracking-[0.15em] font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Video */}
          <div>
            <div
              className="relative aspect-video rounded-lg overflow-hidden bg-[#0f2554] cursor-pointer group"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {/* University campus thumbnail */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=1200&q=80)",
                }}
              />
              <div className="absolute inset-0 bg-[#0f2554]/45" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-1" fill="white" />
                </div>
              </div>

              {/* Bottom bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0f2554]/80 to-transparent px-4 pb-3 pt-8">
                <div className="flex items-center justify-between">
                  <p className="text-white text-sm font-medium">Our London Office — Your Journey Starts Here</p>
                  <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded">2:45</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
              Why Uniguru
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a3b85] leading-snug mb-4">
              Why regulated immigration support matters
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              Choosing an IAA regulated immigration adviser ensures you receive
              professional, compliant, and ethical guidance throughout your
              study abroad journey.
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-8">
              {[
                { icon: Shield, text: "Expert guidance from IAA regulated immigration advisers" },
                { icon: CheckCircle2, text: "Compliance with UK immigration laws and regulations" },
                { icon: Clock, text: "Protection of your rights throughout the visa process" },
                { icon: Users, text: "Transparent and ethical service delivery" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-9 h-9 rounded-md bg-[#1a3b85]/5 flex items-center justify-center">
                    <item.icon className="w-[18px] h-[18px] text-[#1a3b85]" />
                  </span>
                  <span className="text-sm sm:text-base text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA — Matching header button style */}
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-[#1a3b85] hover:bg-[#152d6b] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Eligibility Assessment
                <ArrowRight className="w-4 h-4" />
              </span>
              <span className="absolute top-0 right-0 w-1 h-full bg-[#D4AF37]"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
