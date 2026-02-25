"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import type { StudyDestinationDataSet } from "./types";

interface DestinationHeroProps {
  dataSet: StudyDestinationDataSet;
}

const DestinationHero = ({ dataSet }: DestinationHeroProps) => {
  const hero = dataSet.hero_section;
  const heroImage1 = hero.images?.[0];
  const heroImage2 = hero.images?.[1];
  const destinationLabel = dataSet.destination.charAt(0).toUpperCase() + dataSet.destination.slice(1);

  return (
    <section
      className="relative bg-[#f8fafc] pt-28 sm:pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden"
      aria-labelledby="destination-hero-heading"
    >
      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1a3b85]/10 text-[#1a3b85] font-semibold text-xs uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" aria-hidden />
              Study in {destinationLabel}
            </span>
            <h1
              id="destination-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#1a3b85] leading-[1.1] tracking-tight"
            >
              {hero.title}
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
              <Link href="/book" className="inline-flex">
                <Button
                  className="bg-[#D4AF37] hover:bg-[#c4a030] text-[#1a3b85] font-semibold py-6 px-8 rounded-xl shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_28px_rgba(212,175,55,0.4)] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
                  aria-label="Book free consultation"
                >
                  Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden />
                </Button>
              </Link>
              <Link href="#details" className="inline-flex">
                <Button
                  variant="outline"
                  className="border-[#1a3b85]/30 text-[#1a3b85] hover:bg-[#1a3b85]/10 font-semibold py-6 px-8 rounded-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#1a3b85] focus-visible:ring-offset-2"
                  aria-label="Explore more about this destination"
                >
                  Explore More
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] aspect-[4/5] lg:aspect-square">
              {heroImage1 && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(26,59,133,0.15)] group">
                  <Image
                    src={heroImage1.src}
                    alt={heroImage1.alt || `Study in ${destinationLabel}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3b85]/30 to-transparent pointer-events-none" aria-hidden />
                </div>
              )}
              {heroImage2 && (
                <div className="absolute -bottom-6 -left-6 w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10 hidden sm:block">
                  <Image
                    src={heroImage2.src}
                    alt={heroImage2.alt || ""}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationHero;
