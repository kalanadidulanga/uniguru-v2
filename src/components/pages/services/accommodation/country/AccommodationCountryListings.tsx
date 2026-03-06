"use client";

import Image from "next/image";
import { Home, DoorOpen, Users, MapPin, Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import type { AccommodationCountryDataSet, AccommodationProperty } from "./types";

interface Props {
  dataSet: AccommodationCountryDataSet;
  activeCity: string;
  onCityChange: (city: string) => void;
}

const ROOM_TYPE_CONFIG: Record<string, {
  gradient: string;
  icon: React.ReactNode;
  border: string;
}> = {
  Studio: {
    gradient: "from-[#D4AF37]/80 via-[#D4AF37]/50 to-[#D4AF37]/30",
    icon: <Home size={22} />,
    border: "hover:border-[#D4AF37]/40",
  },
  "En-suite": {
    gradient: "from-[#1a3b85]/80 via-[#1a3b85]/50 to-[#1a3b85]/30",
    icon: <DoorOpen size={22} />,
    border: "hover:border-[#1a3b85]/40",
  },
  Shared: {
    gradient: "from-emerald-600/80 via-emerald-600/50 to-emerald-600/30",
    icon: <Users size={22} />,
    border: "hover:border-emerald-400/40",
  },
};

const getConfig = (roomType: string) =>
  ROOM_TYPE_CONFIG[roomType] || ROOM_TYPE_CONFIG["En-suite"];

const PropertyCard = ({ property, countryImage }: { property: AccommodationProperty; countryImage?: string }) => {
  const config = getConfig(property.room_type);

  return (
    <div className={`group flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg ${config.border} transition-all duration-300 overflow-hidden h-full`}>
      {/* Image header with room type tint */}
      <div className="relative h-36 overflow-hidden flex-shrink-0">
        {countryImage ? (
          <Image
            src={countryImage}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200" />
        )}
        <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient}`} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="p-2.5 rounded-xl bg-white/20 mb-1.5">{config.icon}</div>
          <span className="text-xs font-semibold tracking-wider uppercase">{property.room_type}</span>
        </div>
        {/* City badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 text-gray-800 text-xs font-medium shadow-sm">
          <MapPin size={11} />
          {property.city}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-semibold text-[#1a3b85] leading-snug min-h-[2.5rem] mb-2">
          {property.uniguru_label}
        </h3>

        {/* Price */}
        <p className="text-lg sm:text-xl font-semibold text-[#1a3b85] mb-3">{property.price_range}</p>

        {/* Details */}
        <div className="space-y-1.5 mb-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar size={13} className="text-[#D4AF37] flex-shrink-0" aria-hidden />
            <span>{property.contract}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={13} className="text-[#D4AF37] flex-shrink-0" aria-hidden />
            <span>{property.commute}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag size={13} className="text-[#D4AF37] flex-shrink-0" aria-hidden />
            <span>From {property.available_from}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {property.features.map((feature, j) => (
            <span
              key={j}
              className="px-2 py-0.5 rounded-md bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Enquire CTA  - pushed to bottom */}
        <a
          href="#accommodation-form"
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[#1a3b85] hover:text-[#D4AF37] transition-colors"
        >
          Enquire about this
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
};

const AccommodationCountryListings = ({ dataSet, activeCity, onCityChange }: Props) => {
  const section = dataSet.top_10_section;
  const cities = dataSet.choose_city_section;
  const secondaryImage = dataSet.secondary_image;

  const filtered =
    activeCity === "All"
      ? section.properties
      : section.properties.filter((p) => p.city === activeCity);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50" aria-labelledby="listings-heading">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Banner with image + integrated city filter */}
        <div className="relative rounded-2xl overflow-hidden mb-8 sm:mb-10">
          {/* Image background */}
          <div className="absolute inset-0">
            {secondaryImage ? (
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            ) : (
              <div className="absolute inset-0 bg-[#1a3b85]" />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f2554]/85 via-[#1a3b85]/70 to-[#0f2554]/90" />
          </div>

          {/* Content */}
          <div className="relative z-10 pt-12 sm:pt-16 pb-6 sm:pb-8 px-6">
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-3 block">
                Accommodation
              </span>
              <h2 id="listings-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-2">
                {section.title}
              </h2>
              <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto">
                {section.subtitle}
              </p>
            </div>

            {/* City filter chips */}
            <div className="-mx-6 px-6">
              <div className="overflow-x-auto pb-1 flex justify-center" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <div className="inline-flex gap-2 bg-white rounded-xl p-1.5 sm:p-2 min-w-min shadow-lg border border-white/80">
                  <button
                    onClick={() => onCityChange("All")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                      activeCity === "All"
                        ? "bg-[#D4AF37] text-white shadow-sm"
                        : "text-gray-600 hover:bg-[#D4AF37]/10 hover:text-[#1a3b85]"
                    }`}
                  >
                    All Cities
                  </button>
                  {cities.cities.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => onCityChange(c.name)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                        activeCity === c.name
                          ? "bg-[#D4AF37] text-white shadow-sm"
                          : "text-gray-600 hover:bg-[#D4AF37]/10 hover:text-[#1a3b85]"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Property grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 text-base py-12">
            No properties found for this city. Try a different selection.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property, i) => (
              <PropertyCard
                key={i}
                property={property}
                countryImage={secondaryImage?.src}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AccommodationCountryListings;
