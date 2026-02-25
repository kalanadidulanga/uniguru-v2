import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Briefcase,
    Clock,
    DollarSign,
    Globe,
    HeartHandshake,
    Laptop,
    TrendingUp,
    Users,
    CheckCircle,
    ArrowRight,
    Star
} from "lucide-react";

const BecomeAPartnerPageV2 = () => {
    return (
        <div className="min-h-screen font-sans text-slate-800 selection:bg-[#F28B82] selection:text-white bg-white">

            {/* --- HERO SECTION --- */}
            <section className="relative bg-[#FFF5F0] pt-32 pb-32 lg:pt-48 lg:pb-48 overflow-hidden">
                {/* Grid Background */}
                <div
                    className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#F28B82 1px, transparent 1px), linear-gradient(90deg, #F28B82 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                ></div>

                {/* Animated Decorations */}
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#F28B82] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[#2B59C3] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob" style={{ animationDelay: "2s" }}></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Text Content */}
                        <div className="lg:w-1/2 text-center lg:text-left z-20 space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-blue-100 text-[#2B59C3] font-semibold text-sm shadow-sm backdrop-blur-sm animate-in fade-in slide-in-from-bottom-6 duration-700">
                                <Users className="w-4 h-4" />
                                Join the Uniguru Network
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1a3b85] mb-6 leading-[1.1] tracking-tight">
                                Turn Your Network Into <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B59C3] to-[#F28B82]">Global Opportunities</span>
                            </h1>

                            <p className="text-slate-600 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                                Empower students to follow their dreams of studying abroad while you earn competitive commissions. Work on your terms, from anywhere.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link
                                    href="/contact"
                                    className="group relative px-8 py-4 bg-[#2B59C3] text-white font-semibold rounded-full overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <span className="relative flex items-center gap-2">
                                        Become a Partner
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                                <div className="flex items-center gap-2 px-6 py-4">
                                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    <span className="font-bold text-[#1a3b85]">Trusted by 500+ Partners</span>
                                </div>
                            </div>
                        </div>

                        {/* Visual Content - Grid Layout */}
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-12">
                                    <div className="relative h-64 rounded-[2rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border-4 border-white">
                                        <Image
                                            src="/images/become-a-partner/2.png"
                                            alt="Partner Success"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-blue-50 hover:shadow-2xl transition-shadow duration-300">
                                        <div className="flex items-center gap-3 mb-2">
                                            <DollarSign className="w-6 h-6 text-green-600 bg-green-100 p-1 rounded-full" />
                                            <span className="font-bold text-[#1a3b85]">High Earnings</span>
                                        </div>
                                        <p className="text-sm text-slate-500">Competitive commission rates</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-[#1a3b85] p-6 rounded-[2rem] shadow-xl text-white hover:bg-[#15306e] transition-colors duration-300">
                                        <div className="text-3xl font-bold mb-1">100%</div>
                                        <p className="text-blue-200 text-sm">Support Provided</p>
                                    </div>
                                    <div className="relative h-80 rounded-[2rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border-4 border-white">
                                        <Image
                                            src="/images/become-a-partner/1.png"
                                            alt="Students"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative blurred shapes behind images */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-200 to-orange-200 opacity-20 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[80px] lg:h-[150px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
                    </svg>
                </div>
            </section>

            {/* --- WHY JOIN SECTION --- */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 space-y-16">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1a3b85]">
                            Why Join the Program?
                        </h2>
                        <p className="text-slate-600 text-lg">
                            We make it simple for you to succeed. Connect students, and we handle the rest.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<DollarSign className="w-8 h-8 text-[#2B59C3]" />}
                            title="High Commissions"
                            description="Earn generous commissions for every successful student referral. A great way to earn without a heavy workload."
                            border="border-l-4 border-green-400"
                        />
                        <FeatureCard
                            icon={<Laptop className="w-8 h-8 text-[#2B59C3]" />}
                            title="Work Remotely"
                            description="Work from anywhere—home, vacation, or a café. All you need is an internet connection and your network."
                            border="border-l-4 border-blue-400"
                        />
                        <FeatureCard
                            icon={<Clock className="w-8 h-8 text-[#2B59C3]" />}
                            title="Flexible Hours"
                            description="No fixed hours. Work at your own pace alongside your job or studies. Total flexibility for your lifestyle."
                            border="border-l-4 border-orange-400"
                        />
                    </div>
                </div>
            </section>

            {/* --- BENEFITS SECTION --- */}
            <section className="py-24 bg-[#FFF5F0] relative overflow-hidden">
                {/* Wave Divider Top */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[60px] lg:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">

                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-500">
                                <Image
                                    src="/images/become-a-partner/4.png"
                                    alt="Benefits"
                                    width={600}
                                    height={800}
                                    className="w-full h-auto object-cover"
                                />

                                {/* Floating Card on Image */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/50">
                                    <p className="text-[#1a3b85] font-semibold text-lg italic">
                                        &quot;The support from Uniguru has been incredible. I just focus on networking, and they handle everything else.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 space-y-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1a3b85] text-left">
                                More Benefits for You
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <BenefitItem
                                    icon={<Globe className="w-6 h-6 text-[#2B59C3]" />}
                                    title="Remote Opportunity"
                                    text="No commute, nos office hours."
                                />
                                <BenefitItem
                                    icon={<TrendingUp className="w-6 h-6 text-[#2B59C3]" />}
                                    title="Unlimited Potential"
                                    text="No caps on your earnings."
                                />
                                <BenefitItem
                                    icon={<Briefcase className="w-6 h-6 text-[#2B59C3]" />}
                                    title="Minimal Involvement"
                                    text="We handle the hard work."
                                />
                                <BenefitItem
                                    icon={<HeartHandshake className="w-6 h-6 text-[#2B59C3]" />}
                                    title="Dedicated Support"
                                    text="Tools & resources provided."
                                />
                            </div>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 bg-[#F28B82] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-[#e0756c] transition-all duration-300 hover:-translate-y-1 mt-4"
                            >
                                Start Earning Today
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-32 bg-[#1a3b85] relative overflow-hidden">
                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2B59C3] rounded-full mix-blend-screen opacity-10 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F28B82] rounded-full mix-blend-screen opacity-10 blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                {/* Wave Divider Top of CTA */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[50px] lg:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFF5F0"></path>
                    </svg>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 pt-12">
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Join the Uniguru Partner Program today. Help students achieve their academic dreams while building a sustainable income stream for yourself.
                    </p>

                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-10 py-5 bg-white text-[#1a3b85] font-bold text-xl rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
                        >
                            Get Started Now
                        </Link>
                        <Link
                            href="/about-us"
                            className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/20 text-white font-semibold text-xl rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

// --- Sub-components ---

const FeatureCard = ({ icon, title, description, border }: { icon: React.ReactNode, title: string, description: string, border?: string }) => (
    <div
        className={`bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start gap-5 h-full ${border || ''}`}
    >
        <div className="bg-[#FFF5F0] p-4 rounded-2xl shadow-sm">
            {icon}
        </div>
        <div>
            <h3 className="text-2xl font-bold text-[#1a3b85] mb-3">
                {title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-base">
                {description}
            </p>
        </div>
    </div>
);

const BenefitItem = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
    <div className="flex gap-5 items-start bg-white p-4 rounded-3xl shadow-sm border border-slate-50 hover:shadow-md transition-shadow cursor-default">
        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#FFF5F0] flex items-center justify-center text-[#F28B82]">
            {icon}
        </div>
        <div className="space-y-1">
            <h4 className="text-lg font-bold text-[#1a3b85]">{title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
        </div>
    </div>
);

export default BecomeAPartnerPageV2;
