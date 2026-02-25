"use client";

import {
  GraduationCap,
  FileCheck,
  Headphones,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Expert counselling",
    description:
      "Personalised guidance from certified counsellors who understand your goals and match you with the right university.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "98% visa success",
    description:
      "Our visa experts ensure your documentation is thorough, maximising your chances of approval.",
    icon: FileCheck,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Global network",
    description:
      "Direct partnerships with 500+ top-ranked universities across the UK, Canada, Australia and more.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "End-to-end support",
    description:
      "From first consultation to post-arrival support, we're with you at every step.",
    icon: Headphones,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
];

const WhyUniguru = () => {
  return (
    <section
      className="bg-[#0f2554] py-16 sm:py-20 lg:py-24 font-sans"
      aria-labelledby="why-uniguru-heading"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="text-center mb-12 sm:mb-14 lg:mb-16">
          <p className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
            Why Uniguru
          </p>
          <h2
            id="why-uniguru-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight leading-tight"
          >
            Your Dream, Our Mission
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed mx-auto">
            We don&apos;t just process applications; we build careers.
            Student-first, guided from London.
          </p>
        </header>

        {/* Feature Cards with Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 sm:mb-12">
          {features.map((feature, index) => (
            <article
              key={index}
              className="group bg-[#132d5e] border border-white/10 rounded-lg overflow-hidden hover:bg-[#163573] transition-all"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-md bg-[#D4AF37] flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-white" aria-hidden />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Row — Trust + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            Trusted by 10,000+ students worldwide · 128 City Road, London EC1V 2NX
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c5a030] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors flex-shrink-0"
          >
            Get started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhyUniguru;
