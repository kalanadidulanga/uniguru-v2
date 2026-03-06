"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, AlertTriangle, XCircle, CalendarDays, GraduationCap, Shield, Briefcase, PoundSterling, ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import DestinationHero from "./DestinationHero";
import DestinationWhyChoose from "./DestinationWhyChoose";
import DestinationQuickFacts from "./DestinationQuickFacts";
import DestinationCost from "./DestinationCost";
import DestinationCareers from "./DestinationCareers";
import DestinationResources from "./DestinationResources";
import type { StudyDestinationDataSet, WhoIsItForColumn } from "./types";

const VARIANT_STYLES: Record<WhoIsItForColumn["variant"], { bg: string; border: string; iconBg: string; icon: React.ReactNode; bullet: string }> = {
  best_fit: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100 text-emerald-600",
    icon: <CheckCircle2 size={22} />,
    bullet: "text-emerald-500",
  },
  profile_dependent: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100 text-amber-600",
    icon: <AlertTriangle size={22} />,
    bullet: "text-amber-500",
  },
  not_recommended: {
    bg: "bg-red-50",
    border: "border-red-200",
    iconBg: "bg-red-100 text-red-600",
    icon: <XCircle size={22} />,
    bullet: "text-red-500",
  },
};

interface StudyDestinationPageV2Props {
  dataSet: StudyDestinationDataSet;
}

const StudyDestinationPageV2 = ({ dataSet }: StudyDestinationPageV2Props) => {
  const bgImage1 =
    dataSet.hero_section.images?.[1]?.src || dataSet.hero_section.images?.[0]?.src || "/images/study_destinations/uk/2.jpg";

  return (
    <div
      className="min-h-screen text-gray-800 bg-slate-50 selection:bg-[#1a3b85] selection:text-white overflow-x-hidden"
      role="main"
    >
      <DestinationHero dataSet={dataSet} />

      {/* Bento: Why Choose + Quick Facts (+ Cost if no detailed costs section) */}
      <div id="details" className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DestinationWhyChoose data={dataSet.why_choose_section} />
          <DestinationQuickFacts data={dataSet.quick_facts_section} />
          {!dataSet.costs_planning_section && (
            <DestinationCost data={dataSet.cost_of_study_section} />
          )}
        </div>
      </div>

      {dataSet.who_is_it_for_section && (
        <section className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a3b85] tracking-tight mb-8 text-center">
            {dataSet.who_is_it_for_section.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataSet.who_is_it_for_section.columns.map((col) => {
              const style = VARIANT_STYLES[col.variant];
              return (
                <div
                  key={col.variant}
                  className={`rounded-2xl border ${style.border} ${style.bg} p-6 sm:p-8 transition-shadow duration-300 hover:shadow-lg`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl ${style.iconBg}`} aria-hidden>
                      {style.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{col.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {col.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm sm:text-base text-gray-700 leading-snug">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${style.bullet} bg-current shrink-0`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Intakes */}
      {dataSet.intakes_section && (
        <section className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-16 sm:py-20">
          <div className="relative rounded-2xl overflow-hidden p-8 sm:p-10 text-center">
            <div className="absolute inset-0">
              <Image src="/images/study_destinations/uk/library.jpg" alt="" fill unoptimized className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-[#0f1d3a]/65" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-5">
                <CalendarDays size={24} className="text-[#D4AF37]" />
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">Intakes we support</h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-5">
                {dataSet.intakes_section.intakes.map((intake, i) => (
                  <React.Fragment key={intake}>
                    <span className="text-lg sm:text-xl font-medium text-white">{intake}</span>
                    {i < dataSet.intakes_section!.intakes.length - 1 && (
                      <span className="text-[#D4AF37] text-xl">&#8226;</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-white/70 text-sm sm:text-base mb-6">{dataSet.intakes_section.description}</p>
              <Link
                href="/free-eligibility-check"
                className="inline-block px-6 py-3 rounded-xl bg-[#D4AF37] text-white font-semibold text-sm sm:text-base hover:bg-[#c9a432] transition-colors duration-200"
              >
                {dataSet.intakes_section.cta_label}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Partner Institutions */}
      {dataSet.partner_institutions_section && (
        <section className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a3b85] tracking-tight mb-8 text-center">
            {dataSet.partner_institutions_section.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {dataSet.partner_institutions_section.partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 min-h-[80px] shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {partner.logo ? (
                  <img src={partner.logo} alt={partner.name} className="h-10 object-contain" />
                ) : (
                  <div className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-[#1a3b85] shrink-0" />
                    <span className="text-sm font-medium text-gray-700 text-center leading-tight">{partner.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          {dataSet.partner_institutions_section.note && (
            <p className="text-center text-gray-400 text-xs sm:text-sm mt-5">
              {dataSet.partner_institutions_section.note}
            </p>
          )}
        </section>
      )}

      {/* The Uniguru Method */}
      {dataSet.uniguru_method_section && (
        <section className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-16 sm:py-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a3b85] tracking-tight mb-3">
              {dataSet.uniguru_method_section.title}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
              {dataSet.uniguru_method_section.intro}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataSet.uniguru_method_section.steps.map((step, i) => (
              <div
                key={i}
                className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
                  {step.step}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#1a3b85] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          {dataSet.uniguru_method_section.micro_line && (
            <p className="text-center text-gray-400 text-xs sm:text-sm mt-8 italic tracking-wide">
              {dataSet.uniguru_method_section.micro_line}
            </p>
          )}
        </section>
      )}

      {/* IAA Regulated Support */}
      {dataSet.iaa_section && (
        <section className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-16 sm:py-20">
          <div className="rounded-2xl bg-[#1a3b85] text-white p-8 sm:p-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-white/10 shrink-0" aria-hidden>
                <Shield size={24} className="text-[#D4AF37]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold">{dataSet.iaa_section.title}</h2>
                <p className="text-white/60 text-xs sm:text-sm mt-1">{dataSet.iaa_section.registration}</p>
              </div>
            </div>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
              {dataSet.iaa_section.description}
            </p>
            <h3 className="text-base font-semibold text-[#D4AF37] mb-3">{dataSet.iaa_section.benefits_title}</h3>
            <ul className="space-y-3 mb-6">
              {dataSet.iaa_section.benefits.map((benefit, i) => (
                <li key={i} className="flex gap-3 text-sm sm:text-base text-white/85 leading-snug">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-[#D4AF37] mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/50 text-xs sm:text-sm border-t border-white/10 pt-4">
              {dataSet.iaa_section.disclaimer}
            </p>
          </div>
        </section>
      )}

      {/* Graduate Route */}
      {dataSet.graduate_route_section && (
        <section className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-16 sm:py-20">
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-8 sm:p-10">
            <div className="flex items-start gap-4 mb-5">
              <div className="p-3 rounded-xl bg-[#D4AF37]/15 shrink-0" aria-hidden>
                <Briefcase size={24} className="text-[#D4AF37]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#1a3b85]">
                {dataSet.graduate_route_section.title}
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              {dataSet.graduate_route_section.content}
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {dataSet.graduate_route_section.eligibility_note}
            </p>
            {dataSet.graduate_route_section.micro_line && (
              <p className="text-gray-400 text-xs sm:text-sm mt-5 italic">
                {dataSet.graduate_route_section.micro_line}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Costs and Planning — half-bleed bg image */}
      {dataSet.costs_planning_section && (
        <section className="relative overflow-hidden py-16 sm:py-20">
          {/* Full-width background image */}
          <div className="absolute inset-0">
            <Image src={bgImage1} alt="" fill unoptimized className="object-cover object-center" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <PoundSterling size={24} className="text-[#D4AF37]" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a3b85] tracking-tight">
                  {dataSet.costs_planning_section.title}
                </h2>
              </div>
              <p className="text-gray-500 text-sm sm:text-base max-w-3xl mx-auto">
                {dataSet.costs_planning_section.description}
              </p>
            </div>

            {/* Cost Items */}
            <div className="mb-10">
              <h3 className="text-lg sm:text-xl font-semibold text-[#1a3b85] mb-6">
                {dataSet.costs_planning_section.costs_title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {dataSet.costs_planning_section.cost_items.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
                  >
                    <h4 className="text-sm font-semibold text-[#1a3b85] mb-3">{item.label}</h4>
                    <ul className="space-y-2">
                      {item.points.map((point, j) => (
                        <li key={j} className="flex gap-3 text-sm text-gray-700 leading-snug">
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-[#D4AF37] mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    {item.footnote && (
                      <p className="text-xs text-gray-400 mt-3 italic">{item.footnote}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* What we will do / won't do */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="px-6 sm:px-8 py-5 border-b border-slate-100">
                <h3 className="text-lg font-semibold text-gray-800">
                  {dataSet.costs_planning_section.will_wont.title}
                </h3>
              </div>
              <div className="hidden sm:grid grid-cols-2 px-6 sm:px-8 py-3 bg-slate-50 border-b border-slate-100 text-xs font-semibold uppercase tracking-widest text-gray-500">
                <span>{dataSet.costs_planning_section.will_wont.will_do_heading}</span>
                <span>{dataSet.costs_planning_section.will_wont.wont_do_heading}</span>
              </div>
              {dataSet.costs_planning_section.will_wont.rows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 sm:grid-cols-2 px-6 sm:px-8 py-4 ${i < dataSet.costs_planning_section!.will_wont.rows.length - 1 ? "border-b border-slate-100" : ""}`}
                >
                  <div className="flex gap-2 text-sm text-gray-700 mb-2 sm:mb-0">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500 mt-0.5" />
                    <span>{row.will_do}</span>
                  </div>
                  <div className="flex gap-2 text-sm text-gray-500">
                    <XCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
                    <span>{row.wont_do}</span>
                  </div>
                </div>
              ))}
            </div>

            {dataSet.costs_planning_section.disclaimer && (
              <p className="text-center text-gray-400 text-xs sm:text-sm mt-6 italic">
                {dataSet.costs_planning_section.disclaimer}
              </p>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      {dataSet.faq_section && (
        <section className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a3b85] tracking-tight mb-8 text-center">
            {dataSet.faq_section.title}
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {dataSet.faq_section.items.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none hover:bg-slate-50 transition-colors">
                  <span className="text-sm sm:text-base font-semibold text-gray-800">{item.question}</span>
                  <ChevronDown size={18} className="text-gray-400 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-6">
            <a
              href={dataSet.faq_section.whatsapp_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1a3b85] hover:text-[#D4AF37] transition-colors"
            >
              <MessageCircle size={16} />
              {dataSet.faq_section.whatsapp_label}
            </a>
          </div>
        </section>
      )}

      {/* Opportunities Hub */}
      {dataSet.opportunities_hub_section && (() => {
        const cardIcons = [
          <GraduationCap key="uni" size={22} className="text-[#1a3b85]" />,
          <Shield key="sch" size={22} className="text-[#1a3b85]" />,
          <Briefcase key="car" size={22} className="text-[#1a3b85]" />,
        ];

        return (
          <section className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-16 sm:py-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a3b85] tracking-tight mb-3">
                {dataSet.opportunities_hub_section.title}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                {dataSet.opportunities_hub_section.subline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dataSet.opportunities_hub_section.cards.map((card, i) => (
                <Link
                  key={card.heading}
                  href={card.cta_link}
                  className="group rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1a3b85]/5 border border-[#1a3b85]/10 flex items-center justify-center mb-4">
                    {cardIcons[i] || cardIcons[0]}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a3b85] mb-2">
                    {card.heading}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">{card.text}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#1a3b85] group-hover:text-[#D4AF37] transition-colors">
                    {card.cta_label}
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-500 text-sm sm:text-base mb-4">{dataSet.opportunities_hub_section.cta_text}</p>
              <Link
                href="/free-eligibility-check"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1a3b85] text-white font-medium text-sm sm:text-base hover:bg-[#15306b] transition-colors duration-200"
              >
                {dataSet.opportunities_hub_section.cta_button_label}
                <ArrowRight size={15} />
              </Link>
            </div>
          </section>
        );
      })()}

      {/* CTA - Start with clarity */}
      {dataSet.cta_section && (
        <section id="eligibility-form" className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-16 sm:py-20">
          <div className="rounded-2xl bg-[#1a3b85] text-white p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-2">{dataSet.cta_section.title}</h2>
            <p className="text-white/80 text-base sm:text-lg mb-5">{dataSet.cta_section.subtitle}</p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {dataSet.cta_section.fields.map((field, i) => (
                <React.Fragment key={field}>
                  <span className="text-sm sm:text-base text-white/70">{field}</span>
                  {i < dataSet.cta_section!.fields.length - 1 && (
                    <span className="text-[#D4AF37]">&#8226;</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <a
              href="#eligibility-form"
              className="inline-block px-8 py-3.5 rounded-xl bg-[#D4AF37] text-[#1a3b85] font-semibold text-sm sm:text-base hover:bg-[#c9a432] transition-colors duration-200 mb-5"
            >
              {dataSet.cta_section.button_label}
            </a>
            <p className="text-white/50 text-xs sm:text-sm mb-4">{dataSet.cta_section.micro_text}</p>
            <p className="text-white/40 text-[10px] sm:text-xs leading-relaxed max-w-2xl mx-auto mb-2">
              {dataSet.cta_section.trust_line}
            </p>
            <p className="text-white/35 text-[10px] sm:text-xs">{dataSet.cta_section.disclaimer}</p>
          </div>
        </section>
      )}

      {/* Legacy sections — only for destinations without Opportunities Hub */}
      {!dataSet.opportunities_hub_section && (
        <>
          <DestinationCareers dataSet={dataSet} />
          <DestinationResources dataSet={dataSet} />
        </>
      )}
    </div>
  );
};

export default StudyDestinationPageV2;
