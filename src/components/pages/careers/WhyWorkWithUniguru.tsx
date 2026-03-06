import Image from "next/image";
import React from "react";
import { Heart } from "lucide-react";

const WhyWorkWithUniguru = () => {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
              Our Culture
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f2554]">
            Why Work with Uniguru?
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          <div className="w-full h-auto md:w-1/2">
            <Image
              src={"/images/careers/1.png"}
              alt="Why work with Uniguru"
              width={300}
              height={300}
              className="w-full max-w-md object-cover object-center rounded-2xl"
              unoptimized
            />
          </div>
          <div className="w-full h-auto md:w-1/2 flex flex-col gap-8 items-start justify-center">
            <p className="text-slate-600">
              <span className="font-semibold text-[#0f2554]">
                Make a Difference:
              </span>{" "}
              Help students navigate the study abroad process, from university
              selection to visa applications.
            </p>

            <p className="text-slate-600">
              <span className="font-semibold text-[#0f2554]">
                Dynamic Work Environment:
              </span>{" "}
              Join a team of passionate professionals who are committed to
              providing exceptional service and support to students.
            </p>

            <p className="text-slate-600">
              <span className="font-semibold text-[#0f2554]">
                Growth Opportunities:
              </span>{" "}
              Uniguru offers plenty of opportunities for career growth and
              professional development in the international education industry.
            </p>

            <p className="text-slate-600">
              <span className="font-semibold text-[#0f2554]">
                Collaborative Culture:
              </span>{" "}
              Work alongside like-minded individuals who value teamwork and
              innovation to deliver the best results for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUniguru;
