"use client";

import React from "react";
import DestinationHero from "./DestinationHero";
import DestinationWhyChoose from "./DestinationWhyChoose";
import DestinationQuickFacts from "./DestinationQuickFacts";
import DestinationCost from "./DestinationCost";
import DestinationCareers from "./DestinationCareers";
import DestinationResources from "./DestinationResources";
import type { StudyDestinationDataSet } from "./types";

interface StudyDestinationPageV2Props {
  dataSet: StudyDestinationDataSet;
}

const StudyDestinationPageV2 = ({ dataSet }: StudyDestinationPageV2Props) => {
  return (
    <div
      className="min-h-screen font-sans text-slate-800 bg-slate-50 selection:bg-[#1a3b85] selection:text-white overflow-x-hidden"
      role="main"
    >
      <DestinationHero dataSet={dataSet} />

      {/* Bento: Why Choose, Quick Facts, Cost */}
      <div id="details" className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DestinationWhyChoose data={dataSet.why_choose_section} />
          <DestinationQuickFacts data={dataSet.quick_facts_section} />
          <DestinationCost data={dataSet.cost_of_study_section} />
        </div>
      </div>

      <DestinationCareers dataSet={dataSet} />
      <DestinationResources dataSet={dataSet} />
    </div>
  );
};

export default StudyDestinationPageV2;
