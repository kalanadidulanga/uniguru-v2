"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    getCountryList,
} from "@/actions/superAdmin/countryList";
import { getUniversityList } from "@/actions/superAdmin/univercitiesList";
import { Button } from "@/components/myComponents/button";
import AnimatedSVG from "@/components/myComponents/AnimatedSVG";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { COMPANY_INFO } from "@/constants/data";
import TrustBarSection from "@/components/homev2/TrustBarSection";
import {
    Search,
    MapPin,
    ExternalLink,
    GraduationCap,
    Globe,
    Filter,
    ArrowRight
} from "lucide-react";

const UniversitiesPageV2 = () => {
    const [countryList, setCountryList] = useState<any[]>([]);
    const [universityList, setUniversityList] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCountry, setSelectedCountry] = useState<{
        id: string;
        name: string;
    }>({
        id: "",
        name: "",
    });

    const loadUniversities = React.useCallback(async () => {
        setIsLoading(true);
        const selectedCountryId = parseInt(selectedCountry?.id);
        try {
            const res = await getUniversityList(
                selectedCountryId && selectedCountryId
            );
            if (res) {
                setUniversityList(res);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [selectedCountry]);

    useEffect(() => {
        loadUniversities();
    }, [loadUniversities]);

    useEffect(() => {
        const loadCountries = async () => {
            try {
                const res = await getCountryList();
                if (res) {
                    setCountryList(res);
                }
            } catch (error) {
                console.error(error);
            }
        };
        loadCountries();
    }, []);

    return (
        <div className="min-h-screen font-sans text-slate-800">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen flex flex-col overflow-hidden">
                <Image
                    src="/images/universities-hero.jpg"
                    alt="Universities"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

                <div className="flex-1 flex items-center justify-center">
                    <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 sm:py-36 lg:py-40">
                        <div className="max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-6">
                                <GraduationCap className="w-4 h-4" />
                                Explore Top Institutions
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6">
                                Find Your Dream <br className="hidden md:block" />
                                <span className="text-[#D4AF37]">University</span>
                            </h1>
                            <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed mb-12">
                                Discover world-class universities that align with your academic goals and career aspirations. Filter by country to find the perfect match.
                            </p>

                            {/* Filter Section */}
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15 max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4">
                                <div className="flex items-center gap-3 w-full sm:w-auto px-2">
                                    <div className="bg-[#1a3b85] p-2 rounded-lg text-white">
                                        <Filter className="w-5 h-5" />
                                    </div>
                                    <span className="font-bold text-white whitespace-nowrap">Filter By:</span>
                                </div>
                                <div className="w-full">
                                    <Select
                                        onValueChange={(value) => {
                                            const country = countryList.find((item) => item.id === value);
                                            if (country) {
                                                setSelectedCountry({ id: country.id, name: country.name });
                                            }
                                        }}
                                        value={selectedCountry.id}
                                    >
                                        <SelectTrigger className="w-full bg-white/10 border-white/20 text-white h-12 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-0">
                                            <SelectValue placeholder="Select a Country" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {countryList?.map((item: any) => (
                                                <SelectItem key={item.id} value={item.id} className="cursor-pointer">
                                                    {item.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <TrustBarSection />
            </section>

            {/* --- LIST SECTION --- */}
            <section className="bg-white py-16 sm:py-20 min-h-[500px]">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl font-bold text-[#0f2554]">
                            {selectedCountry.name ? `Universities in ${selectedCountry.name}` : "All Universities"}
                        </h2>
                        <span className="text-slate-500 text-sm font-medium bg-slate-100 px-3 py-1.5 rounded-lg">
                            {universityList?.length || 0} Results
                        </span>
                    </div>

                    {isLoading ? (
                        <div className="flex justify-center items-center py-20">
                            <AnimatedSVG className="w-24 h-24 text-[#2B59C3]" />
                        </div>
                    ) : universityList?.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {universityList.map((university, index) => (
                                <UniversityCard key={index} university={university} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                            <div className="bg-white p-4 rounded-xl inline-block mb-4 shadow-sm">
                                <Globe className="w-8 h-8 text-slate-300" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0f2554] mb-2">No Universities Found</h3>
                            <p className="text-slate-500">Try selecting a different country or check back later.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

const UniversityCard = ({ university }: { university: any }) => {
    return (
        <div className="group bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
            {/* Top Pattern Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]"></div>

            <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 overflow-hidden group-hover:scale-105 transition-transform relative">
                    {university?.imageUrl ? (
                        <Image
                            src={university.imageUrl}
                            alt={university.name}
                            fill
                            className="object-contain"
                            unoptimized
                        />
                    ) : (
                        <GraduationCap className="w-8 h-8 text-slate-300" />
                    )}
                </div>
                {university?.destination?.name && (
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                        <MapPin className="w-3 h-3" />
                        {university.destination.name}
                    </div>
                )}
            </div>

            <div className="flex-grow">
                <h3 className="text-xl font-bold text-[#0f2554] mb-2 line-clamp-2 leading-tight group-hover:text-[#1a3b85] transition-colors">
                    {university.name}
                </h3>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                    href={university?.websiteUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-[#1a3b85] text-sm font-medium flex items-center gap-2 transition-colors"
                >
                    Visit Website <ExternalLink className="w-3 h-3" />
                </Link>
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#1a3b85] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
};

export default UniversitiesPageV2;
