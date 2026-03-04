"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { AccommodationCountryDataSet } from "./types";

interface Props {
  dataSet: AccommodationCountryDataSet;
}

const AccommodationCountryQuickFacts = ({ dataSet }: Props) => {
  const facts = dataSet.quick_facts_section;
  const heroImage = dataSet.hero_section.image;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50" aria-labelledby="quick-facts-heading">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image side */}
            <div className="relative h-[280px] lg:h-auto min-h-[400px]">
              {heroImage ? (
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 bg-[#1a3b85]" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2554]/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/20" />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 shadow-lg text-[#1a3b85] text-sm font-semibold">
                  <CheckCircle2 size={16} className="text-[#D4AF37]" />
                  {facts.facts.length} key facts for {dataSet.country_name}
                </div>
              </div>
            </div>

            {/* Facts side */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
                Essential Info
              </span>
              <h2 id="quick-facts-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a3b85] tracking-tight mb-8">
                {facts.title}
              </h2>

              <div className="space-y-4">
                {facts.facts.map((fact, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1a3b85] text-white text-sm font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed pt-0.5">{fact}</p>
                  </div>
                ))}
              </div>

              {facts.note && (
                <p className="text-sm text-gray-500 mt-8 italic border-l-2 border-[#D4AF37]/40 pl-4">
                  {facts.note}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationCountryQuickFacts;
