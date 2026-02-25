"use client";

import { getAccommadationforClient } from "@/actions/superAdmin/accommodation";
import { MapPin, BedDouble, ArrowRight, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AccommodationList = ({ country }: any) => {
    const [dataSet, setDataSet] = useState<any>();

    useEffect(() => {
        const loadAccommodationData = async () => {
            const res = await getAccommadationforClient(country);
            if (res) {
                setDataSet(res);
            }
        };
        loadAccommodationData();
    }, [country]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {dataSet?.map((item: any, index: number) => (
                <div
                    key={index}
                    className="group flex flex-col w-full h-full bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                    <div className="relative w-full h-[250px] overflow-hidden">
                        <Image
                            src={item?.src}
                            alt={item?.name}
                            fill
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#F28B82] shadow-sm flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            {item.price}
                        </div>
                    </div>

                    <div className="flex flex-col p-6 flex-grow">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-[#1a3b85] line-clamp-1 group-hover:text-[#2B59C3] transition-colors">
                                {item?.name}
                            </h3>
                        </div>

                        <p className="text-slate-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                            {item?.desc}
                        </p>

                        <div className="mt-auto space-y-4">
                            <div className="flex items-center gap-2 text-slate-500 text-sm">
                                <MapPin className="w-4 h-4 text-[#2B59C3]" />
                                <span className="line-clamp-1">{item.location}</span>
                            </div>

                            <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                    {item?.destination?.name}
                                </span>
                                <button className="text-sm font-bold text-[#2B59C3] flex items-center gap-1 group/btn">
                                    View Details <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AccommodationList;
