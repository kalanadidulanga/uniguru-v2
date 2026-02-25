"use client";

import Image from "next/image";
import {
  UserSearch,
  School,
  FileEdit,
  PlaneTakeoff,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Profile evaluation",
    description:
      "We analyse your academic background and career goals to find your best match.",
    icon: UserSearch,
    imageUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Consultation and profile discussion",
  },
  {
    id: 2,
    title: "University shortlisting",
    description:
      "A curated list of universities that align with your aspirations and budget.",
    icon: School,
    imageUrl:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
    imageAlt: "University campus and buildings",
  },
  {
    id: 3,
    title: "Application support",
    description:
      "From SOPs to application forms, our experts help your application stand out.",
    icon: FileEdit,
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Documents and application preparation",
  },
  {
    id: 4,
    title: "Visa & departure",
    description:
      "Complete visa guidance and pre-departure briefings for a smooth journey.",
    icon: PlaneTakeoff,
    imageUrl:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Travel and departure",
  },
];

const HowWeHelp = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f4ff] py-20 sm:py-24 lg:py-28 font-sans overflow-hidden"
      aria-labelledby="how-we-help-heading"
    >
      {/* Soft background accents */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#1a3b85]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-5 lg:px-6 xl:px-8 2xl:px-10">
        {/* Section header – clean style */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
            Our Process
          </p>
          <h2
            id="how-we-help-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#1a3b85] tracking-tight leading-tight"
          >
            How We Help You Succeed
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed mx-auto">
            Your journey to a top global university is complex; we make it
            simple. From first contact to admission.
          </p>
        </header>

        {/* Steps – each card with unique image */}
        <div className="relative">
          {/* Desktop: horizontal connector line behind step numbers */}
          <div
            className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-[#1a3b85]/10"
            aria-hidden
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <article
                key={step.id}
                className="relative flex flex-col items-center lg:items-start text-center lg:text-left group"
              >
                {/* Step number + icon row */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mb-4 lg:mb-5">
                  <div
                    className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#D4AF37] bg-white text-[#1a3b85] font-semibold text-lg tabular-nums shrink-0 shadow-sm"
                    aria-hidden
                  >
                    {String(step.id).padStart(2, "0")}
                  </div>
                  <div
                    className="w-12 h-12 rounded-lg bg-[#1a3b85]/5 flex items-center justify-center shrink-0 group-hover:bg-[#1a3b85]/10 transition-colors"
                    aria-hidden
                  >
                    <step.icon
                      className="w-6 h-6 text-[#1a3b85]"
                      aria-hidden
                    />
                  </div>
                </div>

                {/* Card with image */}
                <div className="w-full bg-white border border-gray-100 rounded-xl overflow-hidden transition-all duration-200 hover:border-[#1a3b85]/20 hover:shadow-lg">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={step.imageUrl}
                      alt={step.imageAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3b85]/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#1a3b85] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mobile: arrow between steps */}
                {index < steps.length - 1 && (
                  <div
                    className="lg:hidden flex justify-center mt-6 text-gray-300"
                    aria-hidden
                  >
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
