"use client";

import React from "react";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/constants/data";
import { Users } from "lucide-react";

const Team = () => {
  return (
    <section className="relative py-20 bg-white/40 backdrop-blur-sm">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-blue-100 text-[#2B59C3] font-semibold text-xs uppercase tracking-wider shadow-sm backdrop-blur-sm mb-4">
            <Users size={14} />
            <span>Our People</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#1a3b85] mb-4">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B59C3] to-[#F28B82]">Team</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The dedicated professionals behind Uniguru who make your global education dreams a reality.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="group relative animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center h-full">
                {/* Image Container */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#2B59C3] to-[#F28B82] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md group-hover:border-blue-50 transition-colors duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#1a3b85] mb-1 group-hover:text-[#2B59C3] transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-500 font-medium">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
