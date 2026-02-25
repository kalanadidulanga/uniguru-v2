"use client";

import { TrendingUp } from "lucide-react";
import type { WhyChooseSectionData } from "./types";

interface DestinationWhyChooseProps {
  data: WhyChooseSectionData;
}

const DestinationWhyChoose = ({ data }: DestinationWhyChooseProps) => {
  return (
    <div className="lg:col-span-2 rounded-2xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(26,59,133,0.08)] hover:shadow-[0_12px_40px_rgba(26,59,133,0.12)] transition-shadow duration-300 p-8 lg:p-10">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] shrink-0" aria-hidden>
          <TrendingUp size={24} />
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1a3b85]">{data.title}</h2>
      </div>
      <p className="text-slate-600 text-base sm:text-lg leading-relaxed">{data.content}</p>
    </div>
  );
};

export default DestinationWhyChoose;
