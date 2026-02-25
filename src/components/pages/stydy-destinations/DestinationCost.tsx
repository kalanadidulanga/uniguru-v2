"use client";

import { Wallet } from "lucide-react";
import type { CostOfStudySectionData } from "./types";

interface DestinationCostProps {
  data: CostOfStudySectionData;
}

const DestinationCost = ({ data }: DestinationCostProps) => {
  return (
    <div className="lg:col-span-3 rounded-2xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(26,59,133,0.08)] hover:shadow-[0_12px_40px_rgba(26,59,133,0.12)] transition-shadow duration-300 p-8 lg:p-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-[#1a3b85]/10 text-[#1a3b85]" aria-hidden>
            <Wallet size={24} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1a3b85]">{data.title}</h2>
            <p className="text-slate-500 text-sm mt-0.5">Estimated expenses for international students</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.table.map((row, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-slate-50 hover:bg-[#1a3b85]/5 transition-colors border border-transparent hover:border-[#D4AF37]/20"
          >
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2 line-clamp-2 min-h-[2.5rem]">
              {row.education_level}
            </p>
            <p className="text-lg sm:text-xl font-semibold text-[#1a3b85]">{row.cost_range}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationCost;
