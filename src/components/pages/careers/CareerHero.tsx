import Image from "next/image";
import React from "react";
import { GraduationCap } from "lucide-react";

const CareerHero = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/careers/post1.png"
        alt="Uniguru Careers"
        fill
        className="object-cover"
        priority
        unoptimized
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
              Careers
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight">
            Join the Uniguru Team and Help Students{" "}
            <span className="text-[#D4AF37]">
              Achieve Their Dreams!
            </span>
          </h2>

          <p className="text-white/80 text-lg max-w-lg leading-relaxed">
            At Uniguru, we are passionate about guiding students on their
            journey to study abroad and make their academic dreams a reality. As
            a leading study abroad education consultancy, we are always on the
            lookout for talented and motivated individuals to join our dynamic
            team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
