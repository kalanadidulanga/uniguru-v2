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
import { STUDY_DESTINATIONS_v2 } from "@/constants/data";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { sendEligibilityAssessmentEmail } from "@/actions/mailSending";

const CODES = [
  { code: "+44", flag: "gb" }, { code: "+1",  flag: "us" },
  { code: "+61", flag: "au" }, { code: "+91", flag: "in" },
  { code: "+94", flag: "lk" }, { code: "+92", flag: "pk" },
  { code: "+880",flag: "bd" }, { code: "+234",flag: "ng" },
  { code: "+49", flag: "de" }, { code: "+31", flag: "nl" },
];

const HeroSection = () => {
  const [destination, setDestination] = useState<string>("");
  const [intake, setIntake] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("+44");
  const [flagOpen, setFlagOpen] = useState(false);
  const [wantsConsultation, setWantsConsultation] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!destination || !intake || !whatsapp) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    const result = await sendEligibilityAssessmentEmail({
      destination,
      intake,
      whatsapp,
      countryCode,
      wantsConsultation,
    });
    setLoading(false);
    if (result.status) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden font-sans">
      {/* Background Image - London/Big Ben */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
        }}
      >
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70"></div>
      </div>

      {/* Main Content Container - reduced x-padding so left section uses full 3 cols */}
      <div className="relative z-10 flex-1 flex flex-col w-full max-w-[1800px] mx-auto px-4 sm:px-5 lg:px-6 xl:px-8 2xl:px-10 pt-16 sm:pt-20 lg:pt-24">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-12 sm:gap-16 lg:gap-20 xl:gap-24 items-end lg:items-center pb-8 lg:pb-0">
          {/* Left Side - Text Content (full width of 3 columns, no extra padding) */}
          <div className="flex flex-col justify-start space-y-5 sm:space-y-6 lg:space-y-7 text-center lg:text-left pb-8 lg:pb-0 lg:col-span-3 w-full min-w-0">
            {/* Main Heading - uses full 3-column width */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[1.2] tracking-tight w-full mx-auto lg:mx-0">
              Study abroad,
              <br />
              guided from London
            </h1>

            {/* Supporting Text - uses full 3-column width */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed w-full mx-auto lg:mx-0 font-normal">
              Free eligibility check, personalised shortlist in 4-6 hours,
              consultation within 6 hours.
            </p>

            {/* Logo/Brand Element */}
            <div className="flex items-center gap-3 pt-2 sm:pt-3 justify-center lg:justify-start">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0">
                <Image
                  src="/logo-1.png"
                  alt="Uniguru Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-base sm:text-lg lg:text-xl text-white/80 font-medium">
                Uniguru
              </span>
            </div>
          </div>

          {/* Right Side - Eligibility Form Card - Aligned to Bottom */}
          <div className="w-full max-w-lg mx-auto lg:max-w-none lg:col-span-2 lg:self-end">
            <div className="bg-white rounded-t-2xl shadow-2xl p-5 sm:p-6 lg:p-7 border border-gray-100">
              {/* Form Header */}
              <div className="mb-5 sm:mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1a3b85] mb-1.5">
                  Check Your UK Eligibility
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Get your personalised shortlist in minutes
                </p>
              </div>

              {submitted ? (
                /* Success State */
                <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#1a3b85]">Request Received!</p>
                    <p className="text-sm text-gray-500 mt-1">Our team will reach out on your WhatsApp within 6 hours.</p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setDestination(""); setIntake(""); setWhatsapp(""); setCountryCode("+44"); setWantsConsultation(false); }}
                    className="text-xs text-[#1a3b85] underline underline-offset-2"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  {/* Destination Field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Preferred Destination
                    </label>
                    <Select value={destination} onValueChange={setDestination}>
                      <SelectTrigger className="w-full h-11 text-sm sm:text-base border-gray-300 focus:border-[#1a3b85] focus:ring-[#1a3b85]">
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {STUDY_DESTINATIONS_v2.map((dest, index) => (
                          <SelectItem key={index} value={dest.name}>
                            {dest.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Intake Field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      Preferred Intake
                    </label>
                    <Select value={intake} onValueChange={setIntake}>
                      <SelectTrigger className="w-full h-11 text-sm sm:text-base border-gray-300 focus:border-[#1a3b85] focus:ring-[#1a3b85]">
                        <SelectValue placeholder="Select intake period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="January 2026">January 2026</SelectItem>
                        <SelectItem value="September 2026">September 2026</SelectItem>
                        <SelectItem value="January 2027">January 2027</SelectItem>
                        <SelectItem value="September 2027">September 2027</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* WhatsApp Field */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                      WhatsApp Number
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

                  {/* Checkbox Option */}
                  <div className="flex items-start gap-2.5 pt-0.5">
                    <input
                      type="checkbox"
                      id="consultation"
                      checked={wantsConsultation}
                      onChange={(e) => setWantsConsultation(e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-[#1a3b85] border-gray-300 rounded focus:ring-[#1a3b85] cursor-pointer"
                    />
                    <label
                      htmlFor="consultation"
                      className="text-xs sm:text-sm text-gray-600 cursor-pointer leading-relaxed"
                    >
                      Book a free consultation within 1 hour
                    </label>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <p className="text-xs text-red-500">{error}</p>
                  )}

                  {/* Primary CTA Button */}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 sm:h-12 bg-[#1a3b85] hover:bg-[#152d6b] text-white font-medium text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mt-1 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {loading ? "Submitting..." : "Free Eligibility Assessment"}
                      {!loading && <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />}
                    </span>
                    <span className="absolute top-0 right-0 w-1 h-full bg-[#D4AF37]"></span>
                  </Button>

                  {/* Additional Info */}
                  <p className="text-[10px] sm:text-xs text-gray-500 text-center pt-1">
                    By submitting, you agree to our privacy policy
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar - Bottom of Hero Section */}
      <div className="relative z-10 w-full border-t border-white/20 bg-white/95 backdrop-blur-sm mt-auto">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-5 lg:px-6 xl:px-8 2xl:px-10 py-4 sm:py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
            {/* British Council */}
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <Image src="/british-council-logo.png" alt="British Council" fill className="object-contain" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-gray-900">British Council</p>
                <p className="text-[10px] sm:text-xs text-gray-500">Certified Centre</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 sm:h-10 bg-gray-200"></div>

            {/* UCAS */}
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <Image src="/ucas-logo.png" alt="UCAS" fill className="object-contain" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-gray-900">UCAS</p>
                <p className="text-[10px] sm:text-xs text-gray-500">Registered Centre</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 sm:h-10 bg-gray-200"></div>

            {/* ICEF */}
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <Image src="/icef-logo.png" alt="ICEF" fill className="object-contain" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-gray-900">ICEF</p>
                <p className="text-[10px] sm:text-xs text-gray-500">Certified Agent</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 sm:h-10 bg-gray-200"></div>

            {/* IAA Regulated */}
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <Image src="/iaa-logo.png" alt="IAA Regulated" fill className="object-contain" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-gray-900">IAA</p>
                <p className="text-[10px] sm:text-xs text-gray-500">Regulated Adviser</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
