"use client";

import React from "react";
import Image from "next/image";
import { Award, Users, Globe, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-blue-100 text-[#2B59C3] font-semibold text-sm shadow-sm backdrop-blur-sm mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              <span>About Uniguru</span>
            </div>

            <h1
              className="text-4xl lg:text-6xl font-extrabold text-[#1a3b85] leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 fill-mode-both"
            >
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B59C3] to-[#F28B82]">
                Uniguru
              </span>
            </h1>

            <p
              className="text-slate-600 text-lg leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both"
            >
              Uniguru, a leading UK-based education technology provider and a
              British Council Certified Centre, offers comprehensive guidance for
              Foundation, Bachelor, Master, and PhD programs. Our services
              include course selection, application assistance, and visa process
              support. Additionally, we provide specialized healthcare
              recruitment services to help institutions find qualified
              professionals in the medical field.
            </p>
          </div>

          {/* Image/Visual - 3D Style Layout */}
          <div
            className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[500px] animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-both"
          >
            {/* Main Character Image (Placeholder for 3D Image) */}
            <div className="relative z-10 w-[80%] lg:w-[100%] max-w-[600px] transition-transform duration-700 hover:scale-105">
              {/* 
                  TODO: Replace this image with your generated 3D character.
                  Recommended: A transparent PNG of a 3D character.
               */}
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/v2/uniguru/boy.png"
                  alt="Uniguru Guide"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Floating Card 1: British Council Certified */}
            <div
              className="absolute top-[15%] left-[-5%] lg:left-[-20px] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 animate-float border border-white/50 max-w-[220px]"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-[#2B59C3]">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-[#1a3b85] font-bold text-sm">
                    Certified Centre
                  </h3>
                  <p className="text-xs text-slate-500 leading-snug mt-1">
                    British Council Approved
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Global Students */}
            <div
              className="absolute bottom-[20%] right-[-5%] lg:right-[-20px] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 animate-float border border-white/50"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-full text-[#F28B82]">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="text-[#1a3b85] font-bold text-sm">
                    Student Success
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden"
                        >
                          {/* Placeholder avatars */}
                          <div className={`w-full h-full bg-gradient-to-br from-blue-100 to-blue-200`}></div>
                        </div>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-500">+10k</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-[20%] right-[10%] w-24 h-24 bg-[#F28B82] rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="absolute bottom-[20%] left-[10%] w-32 h-32 bg-[#2B59C3] rounded-full blur-2xl opacity-30 animate-pulse delay-700"></div>

            {/* 3D Floating Icons */}
            <div className="absolute top-[10%] right-[10%] text-[#F2C94C] animate-float delay-1000 opacity-80">
              <Globe size={48} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
