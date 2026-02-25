"use client";

import Image from "next/image";
import Link from "next/link";
import { STUDY_DESTINATIONS } from "@/constants/data";
import { ArrowRight } from "lucide-react";

interface DestinationCardProps {
  country: (typeof STUDY_DESTINATIONS)[0];
  index: number;
  size?: "default" | "compact";
}

const DestinationCard = ({
  country,
  index,
  size = "default",
}: DestinationCardProps) => (
  <Link
    href={country.href}
    key={`${country.name}-${index}`}
    className={`group flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3b85] focus-visible:ring-offset-2 rounded-lg ${
      size === "compact" ? "w-[180px] sm:w-[200px]" : "w-[200px] sm:w-[240px] lg:w-[260px]"
    }`}
    aria-label={`Study in ${country.name}`}
  >
    <div className="h-full bg-white border border-gray-100 rounded-lg p-5 sm:p-6 lg:p-6 transition-all duration-200 group-hover:border-[#1a3b85]/20 group-hover:shadow-md">
      <div
        className={`relative flex-shrink-0 mb-3 ${
          size === "compact" ? "w-12 h-12 sm:w-14 sm:h-14" : "w-14 h-14 sm:w-16 sm:h-16 lg:w-[4.5rem] lg:h-[4.5rem]"
        }`}
      >
        <Image
          src={country.src}
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 640px) 56px, (max-width: 1024px) 64px, 72px"
        />
      </div>
      <p
        className={`font-semibold text-[#1a3b85] mb-1 ${
          size === "compact" ? "text-base sm:text-lg" : "text-lg sm:text-xl lg:text-2xl"
        }`}
      >
        {country.name}
      </p>
      <span className="inline-flex items-center gap-1 text-sm sm:text-base text-gray-600 group-hover:text-[#1a3b85] transition-colors">
        Explore
        <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
      </span>
    </div>
  </Link>
);

const LONDON_BG_URL =
  "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=2071&q=80";

const StudyDestinations = () => {
  const row1 = [
    ...STUDY_DESTINATIONS,
    ...STUDY_DESTINATIONS,
    ...STUDY_DESTINATIONS,
  ];
  const row2 = [
    ...STUDY_DESTINATIONS,
    ...STUDY_DESTINATIONS,
    ...STUDY_DESTINATIONS,
  ];

  return (
    <section
      className="relative py-20 sm:py-24 lg:py-28 font-sans overflow-hidden"
      aria-labelledby="study-destinations-heading"
    >
      {/* London theme: image background – Big Ben / London skyline */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${LONDON_BG_URL})` }}
        aria-hidden
      />
      {/* Overlay — strong at top for text, fades to let image show below */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/65 to-white/20"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-5 lg:px-6 xl:px-8 2xl:px-10">
        {/* Section header – clean style */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2
            id="study-destinations-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#1a3b85] tracking-tight leading-tight"
          >
            Top Study Destinations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-4xl leading-relaxed mx-auto font-semibold">
            UK, Canada, Australia, Netherlands and Germany. We help you apply
            from London.
          </p>
        </header>

        {/* Row 1: scroll left */}
        <div
          className="destinations-scroll-mask overflow-hidden"
          aria-label="Study destinations row one"
        >
          <div className="flex gap-4 sm:gap-6 w-max animate-scroll-3 will-change-transform hover:[animation-play-state:paused] py-2">
            {row1.map((country, index) => (
              <DestinationCard
                key={`r1-${country.name}-${index}`}
                country={country}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Row 2: scroll right – offset for visual interest */}
        <div
          className="destinations-scroll-mask overflow-hidden mt-3 sm:mt-4 lg:pl-[10%]"
          aria-label="Study destinations row two"
        >
          <div className="flex gap-4 sm:gap-6 w-max animate-scroll-reverse-3 will-change-transform hover:[animation-play-state:paused] py-2">
            {row2.map((country, index) => (
              <DestinationCard
                key={`r2-${country.name}-${index}`}
                country={country}
                index={index}
                size="compact"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyDestinations;
