"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { REVIEWS } from "@/constants/reviews";
import { Star, MapPin, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const TRANSITION_MS = 350;

const Testimonials = () => {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [featuredIndex]);

  const goToIndex = useCallback(
    (nextIndex: number) => {
      if (nextIndex === featuredIndex) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setFeaturedIndex(nextIndex);
        setTimeout(() => setIsTransitioning(false), 50);
      }, TRANSITION_MS);
    },
    [featuredIndex]
  );

  // Auto carousel: cycle featured testimonial every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToIndex((featuredIndex + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [featuredIndex, goToIndex]);

  const featured = REVIEWS[featuredIndex];
  const others = REVIEWS.filter((_, i) => i !== featuredIndex);

  const oneLiner = (text: string, max = 80) =>
    text.length <= max ? text : `${text.slice(0, max).trim()}…`;

  return (
    <section
      className="relative py-20 sm:py-24 lg:py-28 font-sans overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f4ff]"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#1a3b85]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-5 lg:px-6 xl:px-8 2xl:px-10">
        <header className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
            Success Stories
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#1a3b85] tracking-tight leading-tight"
          >
            Voices of Triumph
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed mx-auto">
            Hear from students who started their global education journey with
            Uniguru.
          </p>
        </header>

        {/* Bento: featured card + voice tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 items-stretch">
          {/* Featured – large card with gold accent */}
          <article
            className="lg:col-span-7 flex flex-col rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg border-l-4 border-l-[#D4AF37]"
            aria-live="polite"
            aria-atomic="true"
          >
            <div
              className={cn(
                "flex flex-col sm:flex-row flex-1 min-h-0 transition-all duration-300 ease-out",
                isTransitioning
                  ? "opacity-0 translate-y-2 sm:translate-y-0 sm:translate-x-2"
                  : "opacity-100 translate-y-0 sm:translate-x-0"
              )}
              style={{ transitionDuration: `${TRANSITION_MS}ms` }}
            >
              <div className="relative w-full sm:w-2/5 min-h-[200px] sm:min-h-[280px] flex-shrink-0">
                <Image
                  src={featured.img}
                  alt={featured.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 40vw"
                  priority={featuredIndex === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#1a3b85]/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 flex items-center gap-3 p-3 rounded-lg bg-white/95 backdrop-blur-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#1a3b85]/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-[#1a3b85]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wide">
                      Admitted to
                    </p>
                    <p className="text-sm font-semibold text-[#1a3b85] truncate">
                      {featured.university}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 sm:p-6 lg:p-7">
                <div className="flex gap-0.5 mb-3" aria-hidden>
                  {[...Array(featured.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-medium mb-3 flex-1">
                  &quot;{expanded ? featured.review : (featured.summary || featured.review)}&quot;
                </blockquote>
                {featured.review && featured.summary && (
                  <button
                    type="button"
                    onClick={() => setExpanded(!expanded)}
                    className="text-sm font-medium text-[#1a3b85] hover:underline mb-4 w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3b85] focus-visible:ring-offset-2 rounded"
                    aria-expanded={expanded}
                  >
                    {expanded ? "Show less" : "Read full review"}
                  </button>
                )}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-base sm:text-lg font-semibold text-[#1a3b85]">
                    {featured.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#1a3b85] shrink-0" />
                    <span>{featured.university}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Voice tiles – click to feature; horizontal scroll on mobile, column on lg */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4 overflow-hidden">
            <div className="flex lg:flex-col gap-3 sm:gap-4 overflow-x-auto pb-2 lg:pb-0 snap-x snap-mandatory lg:snap-none lg:overflow-visible">
              {others.map((review) => {
                const originalIndex = REVIEWS.indexOf(review);
                return (
                  <button
                    key={originalIndex}
                    type="button"
                    onClick={() => goToIndex(originalIndex)}
                    className={cn(
                      "flex items-center gap-4 p-4 sm:p-5 rounded-xl border text-left transition-all duration-200 shrink-0 w-[85vw] sm:w-auto sm:min-w-0 snap-center",
                      "bg-white border-gray-100 hover:border-[#1a3b85]/30 hover:shadow-md",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3b85] focus-visible:ring-offset-2"
                    )}
                    aria-label={`Show review by ${review.name}`}
                  >
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-gray-100 shrink-0 ring-2 ring-white shadow">
                      <Image
                        src={review.img}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm sm:text-base font-semibold text-[#1a3b85] truncate">
                        {review.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 truncate">
                        {review.university}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
                        {oneLiner(review.summary || review.review, 70)}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
          {[
            { label: "Visa success", value: "98%" },
            { label: "Happy students", value: "5000+" },
            { label: "Partner universities", value: "500+" },
            { label: "Years experience", value: "12+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-4 sm:py-5 rounded-xl bg-white border border-gray-100 shadow-sm"
            >
              <span className="text-2xl sm:text-3xl font-semibold text-[#1a3b85]">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wide mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
