import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <div className=" flex flex-col md:flex-row my-container pb-24 md:py-0">
      <div className=" w-full h-full md:w-1/2 flex justify-end md:justify-start items-center self-center">
        <Image
          src={"/images/about-mission.png"}
          alt="about-mission"
          width={400}
          height={300}
          className="object-cover"
        />
      </div>
      <div className=" flex flex-col items-end w-full h-auto md:w-1/2 gap-8  mt-6 md:mt-0 md:py-24">
        <h3 className=" text-4xl font-bold text-my-blue text-end">
          Our <span className="text-my-orange">Mission</span>
        </h3>
        <p className=" text-my-gray2 max-w-[570px] leading-8 md:pl-2 text-end">
        To enable Students to Achieve their dreams and reach their potential in whatever they aim to do and provide unparalleled academic exellence.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
