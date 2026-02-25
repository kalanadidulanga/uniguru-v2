import { Button } from "@/components/myComponents/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CareerHero = () => {
  return (
    <div className=" bg-liter-orange relative h-auto radius-hero overflow-hidden">
      <div className="my-container flex flex-col items-center">
        <div className=" w-full flex flex-col max-w-4xl items-center pt-10 lg:pt-16 pb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-medium text-my-blue">
            Join the Uniguru Team and Help Students <br />
            <span className="font-semibold text-my-orange">
              Achieve Their Dreams!
            </span>
          </h2>

          <p className=" text-sm md:text-base lg:text-lg mt-6 md:mt-10 text-my-gray text-center">
            At Uniguru, we are passionate about guiding students on their
            journey to study abroad and make their academic dreams a reality. As
            a leading study abroad education consultancy, we are always on the
            lookout for talented and motivated individuals to join our dynamic
            team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
