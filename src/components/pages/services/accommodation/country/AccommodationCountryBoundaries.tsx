"use client";

import { ShieldCheck, CheckCircle2, XCircle } from "lucide-react";
import type { AccommodationCountryDataSet } from "./types";

interface Props {
  dataSet: AccommodationCountryDataSet;
}

const AccommodationCountryBoundaries = ({ dataSet }: Props) => {
  const section = dataSet.boundaries_section;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50" aria-labelledby="boundaries-heading">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 text-[#1a3b85] font-semibold text-xs uppercase tracking-widest mb-4">
            <ShieldCheck size={14} aria-hidden />
            Transparency
          </span>
          <h2 id="boundaries-heading" className="text-3xl sm:text-4xl font-semibold text-[#1a3b85] tracking-tight">
            {section.title}
          </h2>
        </div>

        {/* Two-column card layout (stacks on mobile for better UX) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* What we will do */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="bg-[#1a3b85] px-6 py-4 flex items-center gap-3">
              <CheckCircle2 size={20} className="text-[#D4AF37]" />
              <h3 className="text-white font-semibold text-base sm:text-lg">{section.will_do_heading}</h3>
            </div>
            <div className="p-6 space-y-4">
              {section.rows.map((row, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{row.will_do}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What we will not do */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="bg-gray-100 px-6 py-4 flex items-center gap-3">
              <XCircle size={20} className="text-gray-400" />
              <h3 className="text-gray-800 font-semibold text-base sm:text-lg">{section.wont_do_heading}</h3>
            </div>
            <div className="p-6 space-y-4">
              {section.rows.map((row, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{row.wont_do}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationCountryBoundaries;
