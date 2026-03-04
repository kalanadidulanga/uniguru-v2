"use client";

import { Coins, TrendingUp } from "lucide-react";
import type { AccommodationCountryDataSet } from "./types";

interface Props {
  dataSet: AccommodationCountryDataSet;
}

const BAND_CONFIG = [
  {
    icon: "01",
    bg: "bg-white",
    border: "border-gray-200",
    accent: "bg-emerald-500",
    accentText: "text-emerald-700",
    accentBg: "bg-emerald-50",
    label: "Most affordable",
  },
  {
    icon: "02",
    bg: "bg-white",
    border: "border-gray-200",
    accent: "bg-[#D4AF37]",
    accentText: "text-[#1a3b85]",
    accentBg: "bg-[#D4AF37]/10",
    label: "Most popular",
  },
  {
    icon: "03",
    bg: "bg-white",
    border: "border-gray-200",
    accent: "bg-[#1a3b85]",
    accentText: "text-[#1a3b85]",
    accentBg: "bg-[#1a3b85]/5",
    label: "Best amenities",
  },
];

const AccommodationCountryCosts = ({ dataSet }: Props) => {
  const costs = dataSet.costs_planning_section;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white" aria-labelledby="costs-heading">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-4">
            <Coins size={14} aria-hidden />
            Budget Guide
          </span>
          <h2 id="costs-heading" className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight mb-3">
            {costs.title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            {costs.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {costs.cost_bands.map((band, i) => {
            const config = BAND_CONFIG[i] || BAND_CONFIG[0];
            return (
              <div
                key={i}
                className={`relative rounded-2xl border ${config.border} ${config.bg} overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                {/* Colored top accent bar */}
                <div className={`h-1.5 ${config.accent}`} />

                <div className="p-6 sm:p-8">
                  {/* Tier badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.accentBg} ${config.accentText}`}>
                      <TrendingUp size={12} />
                      {config.label}
                    </span>
                  </div>

                  {/* Band label */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{band.label}</h3>

                  {/* Price range */}
                  <p className="text-2xl sm:text-3xl font-semibold text-[#1a3b85] mb-4">{band.range}</p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{band.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto italic">
          {costs.disclaimer}
        </p>
      </div>
    </section>
  );
};

export default AccommodationCountryCosts;
