"use client";

import Image from "next/image";
import { Briefcase, GraduationCap } from "lucide-react";
import type { StudyDestinationDataSet } from "./types";

interface DestinationCareersProps {
  dataSet: StudyDestinationDataSet;
}

const DestinationCareers = ({ dataSet }: DestinationCareersProps) => {
  const careers = dataSet.careers_insights_section;
  const courses = dataSet.popular_courses_section;
  const careerImage1 = careers.images?.[0];
  const careerImage2 = careers.images?.[1];

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-white"
      aria-labelledby="careers-heading"
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="rounded-2xl overflow-hidden bg-slate-50/80 border border-slate-100 p-8 lg:p-12 xl:p-16 shadow-[0_4px_24px_rgba(26,59,133,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 text-[#1a3b85] font-semibold text-xs uppercase tracking-wider mb-6">
                <Briefcase size={14} aria-hidden />
                Future Prospects
              </span>
              <h2 id="careers-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a3b85] mb-6">
                {careers.title}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                {careers.content}
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-[#1a3b85] flex items-center gap-2">
                  <GraduationCap size={18} className="text-[#D4AF37]" aria-hidden />
                  {courses.title}
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {courses.courses.map((course, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-xl bg-white text-slate-700 font-medium text-sm border border-slate-200 hover:border-[#D4AF37]/40 hover:text-[#1a3b85] hover:bg-[#D4AF37]/5 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative h-[360px] sm:h-[400px] lg:h-[480px] w-full mt-8 lg:mt-0">
              {careerImage1 && (
                <div className="absolute top-0 right-0 w-[65%] h-[65%] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(26,59,133,0.15)] z-10 group">
                  <Image
                    src={careerImage1.src}
                    alt={careerImage1.alt || "Careers and industry"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 65vw, 40vw"
                  />
                </div>
              )}
              {careerImage2 && (
                <div className="absolute bottom-0 left-0 w-[65%] h-[65%] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(26,59,133,0.15)] z-20 -translate-y-8 group">
                  <Image
                    src={careerImage2.src}
                    alt={careerImage2.alt || "Careers and industry"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 65vw, 40vw"
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

export default DestinationCareers;
