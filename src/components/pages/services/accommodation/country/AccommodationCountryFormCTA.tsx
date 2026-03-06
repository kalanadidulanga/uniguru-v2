"use client";

import { useState } from "react";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ChevronDown, MessageCircle } from "lucide-react";
import { sendAccommodationEnquiryEmail } from "@/actions/mailSending";
import type { AccommodationCountryDataSet } from "./types";

const CODES = [
  { code: "+44", flag: "gb" }, { code: "+1",  flag: "us" },
  { code: "+61", flag: "au" }, { code: "+91", flag: "in" },
  { code: "+94", flag: "lk" }, { code: "+92", flag: "pk" },
  { code: "+880",flag: "bd" }, { code: "+234",flag: "ng" },
  { code: "+49", flag: "de" }, { code: "+31", flag: "nl" },
];

const WHATSAPP_LINK =
  "https://wa.me/447123456789?text=Hi%2C%20I%20need%20help%20with%20accommodation";

interface Props {
  dataSet: AccommodationCountryDataSet;
}

const AccommodationCountryFormCTA = ({ dataSet }: Props) => {
  const form = dataSet.form_section;

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
    <section id="accommodation-form" className="py-16 sm:py-20 lg:py-24 bg-[#1a3b85]" aria-labelledby="form-cta-heading">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 id="form-cta-heading" className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-3">
              {form.title}
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto">
              {form.subtitle}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl p-6 sm:p-8 lg:p-10">
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
                {/* Intake + Budget row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
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
                </div>

                {/* City */}
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

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="flex-1 h-11 sm:h-12 bg-[#1a3b85] hover:bg-[#152d6b] text-white font-medium text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-200 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {loading ? "Submitting..." : form.button_label}
                      {!loading && <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />}
                    </span>
                    <span className="absolute top-0 right-0 w-1 h-full bg-[#D4AF37]" />
                  </Button>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm sm:text-base rounded-lg transition-colors"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Us
                  </a>
                </div>

                <p className="text-[10px] sm:text-xs text-gray-500 text-center pt-1">
                  {form.micro_text}
                </p>
              </form>
            )}
          </div>

          {/* Disclosure */}
          <p className="text-xs text-white/60 text-center mt-6 max-w-2xl mx-auto leading-relaxed">
            {form.disclosure}
          </p>

          {/* Trust line */}
          <p className="text-xs text-white/40 text-center mt-4">
            {form.trust_line}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccommodationCountryFormCTA;
