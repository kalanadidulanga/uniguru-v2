"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { REVIEWS } from "@/constants/reviews";
import { Star, MapPin, GraduationCap, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const TRANSITION_MS = 400;

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [activeIndex]);

  const goToIndex = useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex || isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(nextIndex);
        setTimeout(() => setIsTransitioning(false), 50);
      }, TRANSITION_MS / 2);
    },
    [activeIndex, isTransitioning]
  );

  const goNext = useCallback(() => {
    goToIndex((activeIndex + 1) % REVIEWS.length);
  }, [activeIndex, goToIndex]);

  const goPrev = useCallback(() => {
    goToIndex((activeIndex - 1 + REVIEWS.length) % REVIEWS.length);
  }, [activeIndex, goToIndex]);

  // Auto carousel: cycle every 7 seconds
  useEffect(() => {
    const interval = setInterval(goNext, 7000);
    return () => clearInterval(interval);
  }, [goNext]);

  const featured = REVIEWS[activeIndex];

  return (
    <section
      className="relative py-20 sm:py-24 lg:py-32 font-sans overflow-hidden bg-[#f8f9fc]"
      aria-labelledby="testimonials-heading"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-3 sm:mb-4">
            Student success
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#1a3b85] tracking-tight leading-tight"
          >
            More successful stories.
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed mx-auto">
            Hear from students who started their global education journey with
            Uniguru.
          </p>
        </header>

        {/* Main testimonial card */}
        <div className="relative max-w-5xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-8 left-8 sm:left-12 lg:left-16 z-20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#D4AF37] flex items-center justify-center shadow-xl shadow-[#D4AF37]/20">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>

          <article
            className={cn(
              "relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 transition-all ease-out",
              isTransitioning ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
            )}
            style={{ transitionDuration: `${TRANSITION_MS}ms` }}
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] sm:min-h-[450px]">
              {/* Image side */}
              <div className="relative h-[300px] sm:h-[350px] lg:h-auto overflow-hidden">
                <Image
                  src={featured.img}
                  alt={featured.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={activeIndex === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1a3b85]/80 via-[#1a3b85]/30 to-transparent" />
                
                {/* University badge - floating on image */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:right-auto">
                  <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-gray-100 shadow-lg">
                    <div className="w-10 h-10 rounded-lg bg-[#1a3b85] flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wide">
                        Admitted to
                      </p>
                      <p className="text-sm font-bold text-[#1a3b85] truncate">
                        {featured.university}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
                {/* Stars */}
                <div className="flex gap-1 mb-4 sm:mb-6" aria-hidden>
                  {[...Array(featured.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6 fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light mb-4 sm:mb-6">
                  &quot;{expanded ? featured.review : (featured.summary || featured.review)}&quot;
                </blockquote>

                {featured.review && featured.summary && (
                  <button
                    type="button"
                    onClick={() => setExpanded(!expanded)}
                    className="text-sm font-medium text-[#1a3b85] hover:text-[#2a4b95] transition-colors mb-6 w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3b85] focus-visible:ring-offset-2 rounded"
                    aria-expanded={expanded}
                  >
                    {expanded ? "Show less" : "Read full review"}
                  </button>
                )}

                {/* Author info */}
                <div className="pt-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1a3b85] mb-1">
                    {featured.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm sm:text-base text-gray-500">
                    <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{featured.university}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Navigation arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 lg:-left-16 z-30">
            <button
              type="button"
              onClick={goPrev}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-gray-50 border border-gray-200 shadow-lg flex items-center justify-center text-[#1a3b85] transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3b85]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 lg:-right-16 z-30">
            <button
              type="button"
              onClick={goNext}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-gray-50 border border-gray-200 shadow-lg flex items-center justify-center text-[#1a3b85] transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3b85]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Thumbnail navigation */}
        <div className="mt-10 sm:mt-12 lg:mt-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            {REVIEWS.map((review, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToIndex(index)}
                className={cn(
                  "relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3b85] focus-visible:ring-offset-2",
                  activeIndex === index
                    ? "ring-3 ring-[#D4AF37] scale-110 shadow-lg shadow-[#D4AF37]/20"
                    : "ring-2 ring-gray-200 hover:ring-[#1a3b85]/40 opacity-70 hover:opacity-100"
                )}
                aria-label={`Show review by ${review.name}`}
                aria-current={activeIndex === index ? "true" : undefined}
              >
                <Image
                  src={review.img}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
                {activeIndex === index && (
                  <div className="absolute inset-0 bg-[#D4AF37]/10" />
                )}
              </button>
            ))}
          </div>

          {/* Progress dots for mobile */}
          <div className="flex items-center justify-center gap-2 mt-6 sm:hidden">
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeIndex === index
                    ? "bg-[#D4AF37] w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;