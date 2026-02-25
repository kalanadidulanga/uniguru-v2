"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Handshake } from "lucide-react";

const PartnerCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative bg-[#1a3b85] rounded-[2.5rem] overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2B59C3] rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F28B82] rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
            <div 
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            ></div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] transform lg:-rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/about-bottom.png"
                  alt="Partner with Uniguru"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-100 font-medium text-xs uppercase tracking-wider shadow-sm backdrop-blur-sm mx-auto lg:mx-0">
                <Handshake size={14} className="text-[#F28B82]" />
                <span>Join Our Network</span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight">
                Become a Partner with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F28B82] to-[#F2C94C]">
                  Uniguru
                </span>
              </h2>

              <p className="text-blue-100/80 text-lg leading-relaxed">
                Join us as a Partner Executive and help students achieve their
                educational dreams! Simply provide us with the contact details of
                potential students, and the Uniguru team will handle the rest.
                From initial guidance to securing scholarships, we support
                students throughout their entire journey.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link href="/become-a-partner">
                  <button className="group relative px-8 py-4 bg-white text-[#1a3b85] font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 flex items-center gap-2">
                    Become a Partner
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
