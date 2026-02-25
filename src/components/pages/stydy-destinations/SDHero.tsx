import Image from "next/image";
import React from "react";

interface SDHeroProps {
  dataSet: {
    title: string;
    description: string;
    images: {
      src: string;
      alt: string;
    }[];
  };
}

const SDHero = ({ dataSet }: SDHeroProps) => {
  return (
    <div className="w-full h-auto relative overflow-hidden">
      <div className="bg-liter-orange absolute z-0 w-full h-1/2 radius-hero overflow-hidden">
        {/* Add your content here */}
      </div>
      <div className="relative my-container flex flex-col my-24 gap-10 items-center">
        <h3 className="text-4xl font-medium text-my-blue text-center">
          {dataSet.title}
        </h3>
        <div className=" flex lg:hidden gap-6 items-center justify-between">
          {dataSet?.images.slice(0, 1).map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              width={300}
              height={300}
              className=" w-full h-auto object-cover object-center rounded-lg"
            />
          ))}
        </div>

        <div className="hidden lg:flex gap-6 items-center justify-between h-[300px]">
          {dataSet?.images.slice(0, 2).map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              width={300}
              height={300}
              className=" w-1/2 h-full object-cover object-center rounded-lg"
            />
          ))}
        </div>
        <p className=" text-my-gray text-sm md:text-base lg:text-lg text-center w-full max-w-2xl font-medium">
          {dataSet.description}
        </p>
      </div>
    </div>
  );
};

export default SDHero;
