import Image from "next/image";
import React from "react";

const OurVision = () => {
  return (
    <div className=" flex flex-col md:flex-row my-container py-24 md:py-0">
      <div className=" flex flex-col items-start w-full h-auto md:w-1/2 gap-8 md:py-24">
        <h3 className=" text-4xl font-bold text-my-blue">
          Our <span className="text-my-orange">Vision</span>
        </h3>
        <p className=" text-my-gray2 max-w-[570px] leading-8 md:pr-2">
          Our goal is to establish ourselves as an educational technology
          provider in Sri Lanka by developing a digital platform that will
          connect universities and students in a transparent manner from the
          course selection process to the visa application process with the help
          of Artificial intelligence and Data analytics.
        </p>
      </div>
      <div className=" w-full h-full md:w-1/2 flex justify-start md:justify-end items-center mt-6 md:mt-0 self-center">
        <Image
          src={"/images/about-vision.png"}
          alt="about-vision"
          width={400}
          height={300}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default OurVision;
