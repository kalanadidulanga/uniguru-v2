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
        <div className="min-h-screen font-sans text-slate-800 selection:bg-[#F28B82] selection:text-white">

            {/* --- HERO SECTION --- */}
            <section className="relative bg-[#FFF5F0] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                {/* Grid Background */}
                <div
                    className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#F28B82 1px, transparent 1px), linear-gradient(90deg, #F28B82 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                ></div>

                {/* Animated Decorations */}
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#F28B82] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[#2B59C3] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob" style={{ animationDelay: "2s" }}></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-blue-100 text-[#2B59C3] font-semibold text-sm shadow-sm backdrop-blur-sm mb-6">
                        <GraduationCap className="w-4 h-4" />
                        Explore Top Institutions
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-[#1a3b85] mb-6 leading-tight">
                        Find Your Dream <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B59C3] to-[#F28B82]">University</span>
                    </h1>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
                        Discover world-class universities that align with your academic goals and career aspirations. Filter by country to find the perfect match.
                    </p>

                    {/* Filter Section */}
                    <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex items-center gap-3 w-full sm:w-auto px-2">
                            <div className="bg-blue-50 p-2 rounded-lg text-[#2B59C3]">
                                <Filter className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-slate-700 whitespace-nowrap">Filter By:</span>
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
                                <SelectTrigger className="w-full bg-slate-50 border-slate-200 h-12 rounded-xl focus:ring-2 focus:ring-[#2B59C3] focus:ring-offset-0">
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

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[60px] lg:h-[100px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
                    </svg>
                </div>
            </section>

            {/* --- LIST SECTION --- */}
            <section className="bg-white py-20 lg:py-24 min-h-[500px]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl font-bold text-[#1a3b85]">
                            {selectedCountry.name ? `Universities in ${selectedCountry.name}` : "All Universities"}
                        </h2>
                        <span className="text-slate-500 text-sm font-medium bg-slate-100 px-3 py-1 rounded-full">
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
                        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                            <div className="bg-white p-4 rounded-full inline-block mb-4 shadow-sm">
                                <Globe className="w-8 h-8 text-slate-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-700 mb-2">No Universities Found</h3>
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
        <div className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
            {/* Top Pattern Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2B59C3] to-[#F28B82]"></div>

            <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 overflow-hidden group-hover:scale-105 transition-transform relative">
                    {university?.imageUrl ? (
                        <Image
                            src={university.imageUrl}
                            alt={university.name}
                            fill
                            className="object-contain"
                        />
                    ) : (
                        <GraduationCap className="w-8 h-8 text-slate-300" />
                    )}
                </div>
                {university?.destination?.name && (
                    <div className="flex items-center gap-1.5 bg-blue-50 text-[#2B59C3] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        <MapPin className="w-3 h-3" />
                        {university.destination.name}
                    </div>
                )}
            </div>

            <div className="flex-grow">
                <h3 className="text-xl font-bold text-[#1a3b85] mb-2 line-clamp-2 leading-tight group-hover:text-[#2B59C3] transition-colors">
                    {university.name}
                </h3>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                <Link
                    href={university?.websiteUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-[#2B59C3] text-sm font-medium flex items-center gap-2 transition-colors"
                >
                    Visit Website <ExternalLink className="w-3 h-3" />
                </Link>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#2B59C3] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
};

export default UniversitiesPageV2;
