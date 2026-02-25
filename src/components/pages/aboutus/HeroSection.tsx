import { Button } from "@/components/myComponents/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className=" bg-liter-orange relative h-auto radius-hero overflow-hidden">
      <div className="my-container flex flex-col lg:flex-row">
        <div className=" w-full lg:w-1/2 items-center pt-10 lg:pt-16 lg:pb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-my-blue lg:whitespace-nowrap">
            Welcome to{" "}
            <span className="font-semibold text-my-orange">Uniguru!</span>
          </h2>

          <p className=" text-sm md:text-base lg:text-lg mt-6 md:mt-10 text-my-gray">
            Uniguru, a leading UK-based education technology provider and a
            British Council Certified Centre, offers comprehensive guidance for
            Foundation, Bachelor, Master, and PhD programs. Our services include
            course selection, application assistance, and visa process support.
            Additionally, we provide specialized healthcare recruitment services
            to help institutions find qualified professionals in the medical
            field.
          </p>
        </div>
        <div className=" w-full lg:w-1/2 flex justify-center items-end pt-10">
          <Image
            src={"/images/about-hero.png"}
            alt="header-pic"
            width={350}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
