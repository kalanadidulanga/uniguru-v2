"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { sendAccommodationEnquiryEmail } from "@/actions/mailSending";
import TrustBarSection from "@/components/homev2/TrustBarSection";
import type { AccommodationCountryDataSet } from "./types";

const CODES = [
  { code: "+44", flag: "gb" }, { code: "+1",  flag: "us" },
  { code: "+61", flag: "au" }, { code: "+91", flag: "in" },
  { code: "+94", flag: "lk" }, { code: "+92", flag: "pk" },
  { code: "+880",flag: "bd" }, { code: "+234",flag: "ng" },
  { code: "+49", flag: "de" }, { code: "+31", flag: "nl" },
];

interface Props {
  dataSet: AccommodationCountryDataSet;
}

const AccommodationCountryHero = ({ dataSet }: Props) => {
  const hero = dataSet.hero_section;
  const heroImage = hero.image;

  const [intake, setIntake] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [countryCode, setCountryCode] = useState("+44");
  const [budget, setBudget] = useState("");
  const [city, setCity] = useState("");
  const [flagOpen, setFlagOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!whatsapp) {
      setError("Please enter your WhatsApp number.");
      return;
    }
    setLoading(true);
    const message = [
      `Country: ${dataSet.country_name}`,
      `Intake / Move-in: ${intake || "Not specified"}`,
      `Budget band: ${budget || "Not specified"}`,
      `Preferred city: ${city || "Not specified"}`,
    ].join("\n");

    const result = await sendAccommodationEnquiryEmail({
      destination: dataSet.country_name,
      name: "Accommodation Shortlist Request",
      mobile: `${countryCode}${whatsapp}`,
      email: "shortlist-request@uniguru.co",
      message,
    });
    setLoading(false);
    if (result.status) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {heroImage ? (
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-[#1a3b85]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col w-full max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-6 xl:px-8 2xl:px-10 pt-16 sm:pt-20 lg:pt-24">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-12 sm:gap-16 lg:gap-20 xl:gap-24 items-end lg:items-center pb-8 lg:pb-0">
          {/* Left: Text */}
          <div className="flex flex-col justify-start space-y-5 sm:space-y-6 lg:space-y-7 text-center lg:text-left pb-8 lg:pb-0 lg:col-span-3 w-full min-w-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.2] tracking-tight">
              {hero.title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              {hero.subline}
            </p>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.support_line}
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start">
              {hero.chips.map((chip, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium"
                >
                  {chip.label}
                </span>
              ))}
            </div>

            {/* Brand */}
            <div className="flex items-center gap-3 pt-2 sm:pt-3 justify-center lg:justify-start">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0">
                <Image src="/logo-1.png" alt="Uniguru Logo" fill className="object-contain" />
              </div>
              <span className="text-base sm:text-lg lg:text-xl text-white/80 font-medium">Uniguru</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full max-w-lg mx-auto lg:max-w-none lg:col-span-2 lg:self-end">
            <div className="bg-white rounded-t-2xl shadow-2xl p-5 sm:p-6 lg:p-7 border border-gray-100">
              <div className="mb-5 sm:mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1a3b85] mb-1.5">
                  Get Your Shortlist
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Accommodation options matched to your needs
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#1a3b85]">Request Received!</p>
                    <p className="text-sm text-gray-500 mt-1">We will get back to you within 24 to 48 hours.</p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setIntake(""); setWhatsapp(""); setBudget(""); setCity(""); }}
                    className="text-xs text-[#1a3b85] underline underline-offset-2"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  {/* Intake */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Intake / Move-in
                    </label>
                    <Select value={intake} onValueChange={setIntake}>
                      <SelectTrigger className="w-full h-11 text-sm sm:text-base border-gray-300 focus:border-[#1a3b85] focus:ring-[#1a3b85]">
                        <SelectValue placeholder="Select intake" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="September 2026">September 2026</SelectItem>
                        <SelectItem value="January 2027">January 2027</SelectItem>
                        <SelectItem value="September 2027">September 2027</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Budget + City row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                        Budget Band
                      </label>
                      <Select value={budget} onValueChange={setBudget}>
                        <SelectTrigger className="w-full h-11 text-sm sm:text-base border-gray-300 focus:border-[#1a3b85] focus:ring-[#1a3b85]">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Budget">Budget</SelectItem>
                          <SelectItem value="Mid-range">Mid-range</SelectItem>
                          <SelectItem value="Premium">Premium</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                        Preferred City
                      </label>
                      <Select value={city} onValueChange={setCity}>
                        <SelectTrigger className="w-full h-11 text-sm sm:text-base border-gray-300 focus:border-[#1a3b85] focus:ring-[#1a3b85]">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          {dataSet.choose_city_section.cities.map((c, i) => (
                            <SelectItem key={i} value={c.name}>{c.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      WhatsApp Number <span className="text-red-400">*</span>
                    </label>
                    <div className="flex gap-2">
                      <Popover open={flagOpen} onOpenChange={setFlagOpen}>
                        <PopoverTrigger asChild>
                          <button
                            type="button"
                            className="flex items-center gap-1.5 h-11 px-2.5 border border-gray-300 rounded-lg bg-white hover:border-[#1a3b85] transition-colors text-sm font-medium text-gray-700 flex-shrink-0 min-w-[80px]"
                          >
                            <Image
                              src={`https://flagcdn.com/w20/${CODES.find(c => c.code === countryCode)?.flag}.png`}
                              width={20} height={15} alt="" className="rounded-sm"
                            />
                            <span>{countryCode}</span>
                            <ChevronDown className="w-3 h-3 text-gray-400" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent side="top" align="start" className="w-36 p-0 max-h-56 overflow-y-auto">
                          {CODES.map(c => (
                            <button
                              key={c.code}
                              type="button"
                              onClick={() => { setCountryCode(c.code); setFlagOpen(false); }}
                              className={`flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${countryCode === c.code ? "bg-[#1a3b85]/5 text-[#1a3b85] font-medium" : "text-gray-700"}`}
                            >
                              <Image src={`https://flagcdn.com/w20/${c.flag}.png`} width={20} height={15} alt="" className="rounded-sm" />
                              <span>{c.code}</span>
                            </button>
                          ))}
                        </PopoverContent>
                      </Popover>
                      <Input
                        type="tel"
                        placeholder="7700 900 000"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="flex-1 h-11 text-sm sm:text-base border-gray-300 focus:border-[#1a3b85] focus:ring-[#1a3b85]"
                      />
                    </div>
                  </div>

                  {error && <p className="text-xs text-red-500">{error}</p>}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 sm:h-12 bg-[#1a3b85] hover:bg-[#152d6b] text-white font-medium text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mt-1 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {loading ? "Submitting..." : "Get My Shortlist"}
                      {!loading && <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />}
                    </span>
                    <span className="absolute top-0 right-0 w-1 h-full bg-[#D4AF37]" />
                  </Button>

                  <p className="text-[10px] sm:text-xs text-gray-500 text-center pt-1">
                    By submitting, you agree to our privacy policy
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <TrustBarSection />
    </section>
  );
};

export default AccommodationCountryHero;
