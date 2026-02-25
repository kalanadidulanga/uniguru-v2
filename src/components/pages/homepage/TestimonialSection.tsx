"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../../myComponents/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { REVIEWS } from "@/constants/reviews";
import Link from "next/link";

const TestimonialSection = () => {
  return (
    <div className="my-8 my-container flex flex-col items-center gap-5 px-4 sm:px-6 lg:px-8">
      <h5 className="text-my-color01 uppercase text-lg tracking-widest">
        TESTIMONIAL
      </h5>
      <h3 className="text-4xl md:text-5xl tracking-wide font-bold text-my-blue text-center">
        What They Say?
      </h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
        {REVIEWS.map((item, index) => (
          <div
            key={index}
            className="w-full min-h-[200px] border bg-white rounded-xl flex flex-row shadow-lg overflow-hidden"
          >
            <div className="border-4 border-my-color02 w-2 h-auto"></div>
            <div className="w-full h-full p-4 md:p-8 flex flex-col justify-between">
              <div className="flex items-center mb-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-full w-16 h-16 object-cover object-center"
                />
                <div className="ml-4">
                  <p className="text-my-gray text-sm md:text-base font-semibold">
                    {item.name}
                  </p>
                  <p className="text-my-gray2 text-xs md:text-sm">
                    {item.university}
                  </p>
                </div>
              </div>
              <p className="text-my-gray2 text-sm md:text-base mb-4 overflow-hidden">
                &quot;{item.review}&quot;
              </p>
              <div className="flex justify-end">
                {[...Array(item.stars)].map((_, starIndex) => (
                  <span key={starIndex} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        href={"https://www.facebook.com/uniguruedu/reviews"}
        target="_blank"
      >
        <Button variant="blue" className="mt-8">
          See All Reviews
        </Button>
      </Link>
    </div>
  );
};

export default TestimonialSection;
