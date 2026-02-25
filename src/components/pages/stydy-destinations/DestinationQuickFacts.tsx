"use client";

import { CheckCircle2, BookOpen } from "lucide-react";
import type { QuickFactsSectionData } from "./types";

interface DestinationQuickFactsProps {
  data: QuickFactsSectionData;
}

const DestinationQuickFacts = ({ data }: DestinationQuickFactsProps) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#1a3b85] text-white p-8 shadow-[0_8px_30px_rgba(26,59,133,0.2)]">
      <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <BookOpen size={20} className="text-[#D4AF37]" aria-hidden />
        {data.title}
      </h3>
      <ul className="space-y-4 max-h-[320px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent" role="list">
        {data.facts.map((fact, index) => (
          <li key={index} className="flex gap-3 text-sm sm:text-base text-white/90 leading-snug">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-[#D4AF37] mt-0.5" aria-hidden />
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationQuickFacts;
