"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Building2, ArrowRight } from "lucide-react";
import type { StudyDestinationDataSet } from "./types";

interface DestinationResourcesProps {
  dataSet: StudyDestinationDataSet;
}

const DestinationResources = ({ dataSet }: DestinationResourcesProps) => {
  const destinationLabel = dataSet.destination.charAt(0).toUpperCase() + dataSet.destination.slice(1);
  const universities = dataSet.popular_universities_section;

  return (
    <section
      className="relative bg-[#1a3b85] py-20 sm:py-24 lg:py-28 text-white overflow-hidden"
      aria-labelledby="resources-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" aria-hidden />
      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* YouTube playlist */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm" aria-hidden>
                <Play size={20} className="fill-white" />
              </div>
              <h2 id="resources-heading" className="text-2xl sm:text-3xl font-semibold">
                Student Success Stories
              </h2>
            </div>
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/30">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/videoseries?list=${dataSet.playlistId}`}
                title="Student Success Stories"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Universities & CTA */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold flex items-center gap-3 mb-4">
                <Building2 size={24} className="text-[#D4AF37]" aria-hidden />
                {universities.title}
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Explore our partner universities and scholarship opportunities available in {destinationLabel}.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {universities.universities.map((item, index) => (
                <Link key={index} href={item.link} className="group block">
                  <div className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 hover:border-[#D4AF37]/30 p-6 rounded-2xl transition-all duration-300 flex items-center justify-between h-full">
                    <span className="font-semibold text-lg">{item.name}</span>
                    <div className="p-2 rounded-xl bg-white/10 group-hover:bg-[#D4AF37] group-hover:text-[#1a3b85] text-white transition-colors shrink-0">
                      <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" aria-hidden />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="rounded-2xl bg-[#D4AF37] p-8 text-center shadow-[0_8px_30px_rgba(212,175,55,0.25)]">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1a3b85] mb-3">
                Start Your Journey Today
              </h3>
              <p className="text-[#1a3b85]/90 text-base mb-6 max-w-md mx-auto">
                Get personalized guidance for your study abroad dreams.
              </p>
              <Link href="/book" className="inline-flex">
                <Button
                  className="bg-[#1a3b85] hover:bg-[#152d6b] text-white font-semibold py-5 px-8 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-[#1a3b85] focus-visible:ring-offset-2 focus-visible:ring-offset-[#D4AF37]"
                  aria-label="Book free consultation"
                >
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationResources;
