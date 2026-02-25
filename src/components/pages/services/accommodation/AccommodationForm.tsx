"use client";

import {
    sendAccommodationEnquiryEmail,
} from "@/actions/mailSending";
import { Button } from "@/components/myComponents/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { STUDY_DESTINATIONS } from "@/constants/data";
import Image from "next/image";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { CheckCircle2, Globe, Send } from "lucide-react";

const AccommodationForm = ({ country }: { country: string }) => {
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [destination, setDestination] = useState<string | null>(country);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target as HTMLFormElement);
        const dataSet = {
            destination,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
            mobile: formData.get("mobile") as string,
            name: formData.get("name") as string,
        };

        if (
            !dataSet.destination ||
            !dataSet.email ||
            !dataSet.message ||
            !dataSet.mobile ||
            !dataSet.name
        ) {
            toast.error("Please fill all the required fields.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await sendAccommodationEnquiryEmail(dataSet);
            if (response.status) {
                toast.success(response.message);
                formRef.current?.reset();
                setDestination(null);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error("Failed to send message. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full">
            <form
                ref={formRef}
                onSubmit={onSubmit}
                className="flex flex-col gap-6"
            >
                <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                        <Globe className="w-4 h-4 text-[#F28B82]" />
                        Select Interested Destination
                    </label>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                        {STUDY_DESTINATIONS.map((item, index) => (
                            <div
                                key={index}
                                className={`group flex items-center gap-2 p-2.5 rounded-xl cursor-pointer border transition-all duration-200 ${destination === item.name
                                        ? "bg-[#2B59C3] border-[#2B59C3] text-white shadow-md ring-2 ring-[#2B59C3]/20"
                                        : "bg-white border-slate-200 text-slate-600 hover:border-[#2B59C3] hover:bg-slate-50"
                                    }`}
                                onClick={() => setDestination(item.name)}
                            >
                                <div className={`shrink-0 rounded-full w-6 h-6 overflow-hidden border ${destination === item.name ? 'border-white/30' : 'border-slate-100'}`}>
                                    <Image src={item.src} alt="" width={24} height={24} className="w-full h-full object-cover" />
                                </div>
                                <span className="font-semibold text-xs sm:text-sm truncate">{item.name}</span>
                                {destination === item.name && <CheckCircle2 className="w-4 h-4 ml-auto text-white shrink-0" />}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        placeholder="Your Full Name"
                        type="text"
                        name="name"
                        required
                        className="bg-white border-slate-200 h-12 rounded-xl focus:ring-[#2B59C3]"
                    />
                    <Input
                        placeholder="Phone Number"
                        type="tel"
                        name="mobile"
                        required
                        className="bg-white border-slate-200 h-12 rounded-xl focus:ring-[#2B59C3]"
                    />
                </div>

                <Input
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    required
                    className="bg-white border-slate-200 h-12 rounded-xl focus:ring-[#2B59C3]"
                />

                <Textarea
                    placeholder="Tell us about your accommodation preferences (e.g. budget, room type, proximity to university)"
                    rows={4}
                    name="message"
                    required
                    className="bg-white border-slate-200 resize-none rounded-xl focus:ring-[#2B59C3] p-4"
                />

                <Button
                    className="w-full bg-[#2B59C3] hover:bg-[#1a3b85] text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg mt-2"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Sending..." : <>Get Free Advice <Send className="w-5 h-5" /></>}
                </Button>
            </form>
        </div>
    );
};

export default AccommodationForm;
