"use client";

import React from "react";
import { Target, Lightbulb } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="relative py-20">
      {/* Decorative background subtle grid + gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(#2B59C3 1px, transparent 1px), linear-gradient(90deg, #2B59C3 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        ></div>
        <div className="absolute -top-20 -left-20 w-[420px] h-[420px] bg-[#F28B82] rounded-full mix-blend-multiply filter blur-[120px] opacity-12 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] bg-[#2B59C3] rounded-full mix-blend-multiply filter blur-[120px] opacity-12 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-blue-100 text-[#2B59C3] font-semibold text-xs uppercase tracking-wider shadow-sm backdrop-blur-sm mb-4">
            <Lightbulb size={14} />
            <span>Vision & Mission</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a3b85] mb-3">
            Our Purpose — What Guides Us
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We combine expert advising with human-first support to help students
            find the right university, secure admissions, and confidently move
            abroad. Hover the cards to explore details.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision */}
          <div className="group relative">
            <div className="transform transition-all duration-400 will-change-transform hover:-translate-y-2 hover:rotate-0">
              <div className="relative bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-12 border border-white/80 shadow-[0_20px_40px_rgba(17,24,39,0.06)] hover:shadow-[0_30px_60px_rgba(17,24,39,0.12)] overflow-hidden">
                <div className="absolute -top-6 -right-10 w-40 h-40 bg-gradient-to-br from-blue-50/40 to-transparent rounded-full opacity-60 transform rotate-12"></div>

                <div className="relative z-10 flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2B59C3] to-[#62b0ff] flex items-center justify-center text-white shadow-md">
                    <Lightbulb size={22} />
                  </div>

                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1a3b85] mb-2">
                      Our Vision
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      To build a transparent, AI-enhanced education platform that
                      connects students and universities — making global study
                      opportunities accessible, personalized, and data-driven.
                    </p>
                    <p className="mt-4 text-sm text-slate-500 font-medium">
                      <span className="inline-block mr-2">•</span>Long-term strategy
                      <span className="mx-3">•</span>
                      <span>AI + Human guidance</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="group relative">
            <div className="transform transition-all duration-400 will-change-transform hover:-translate-y-2 hover:rotate-0">
              <div className="relative bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-12 border border-white/80 shadow-[0_20px_40px_rgba(17,24,39,0.06)] hover:shadow-[0_30px_60px_rgba(17,24,39,0.12)] overflow-hidden">
                <div className="absolute -top-6 -left-10 w-40 h-40 bg-gradient-to-br from-orange-50/40 to-transparent rounded-full opacity-60 transform -rotate-12"></div>

                <div className="relative z-10 flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F28B82] to-[#F2C94C] flex items-center justify-center text-white shadow-md">
                    <Target size={22} />
                  </div>

                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1a3b85] mb-2">
                      Our Mission
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      To enable students to achieve their academic goals by
                      delivering expert counseling, end-to-end application
                      assistance, and post-arrival support — with empathy and
                      measurable outcomes.
                    </p>

                    <p className="mt-4 text-sm text-slate-500 font-medium">
                      <span className="inline-block mr-2">•</span>Student-first
                      support <span className="mx-3">•</span>
                      <span>Measure outcomes</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
