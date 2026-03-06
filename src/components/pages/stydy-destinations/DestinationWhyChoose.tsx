"use client";

import { TrendingUp } from "lucide-react";
import type { WhyChooseSectionData } from "./types";

interface DestinationWhyChooseProps {
  data: WhyChooseSectionData;
}

const DestinationWhyChoose = ({ data }: DestinationWhyChooseProps) => {
  return (
    <div className="lg:col-span-2 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] shrink-0" aria-hidden>
          <TrendingUp size={24} />
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1a3b85]">{data.title}</h2>
      </div>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{data.content}</p>
      {data.bullets && data.bullets.length > 0 && (
        <ul className="mt-4 space-y-1 text-gray-600 text-base sm:text-lg leading-relaxed list-disc list-inside">
          {data.bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DestinationWhyChoose;
