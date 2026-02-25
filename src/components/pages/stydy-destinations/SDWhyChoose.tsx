import Image from "next/image";
import React from "react";

interface SDWhyChooseProps {
  dataSet: {
    title: string;
    content: string;
  };
}

const SDWhyChoose = ({ dataSet }: SDWhyChooseProps) => {
  return (
    <div className=" flex flex-col gap-5 items-center">
      <h3 className="text-3xl font-bold text-my-blue text-center lg:text-start">
        {dataSet?.title}
      </h3>
      <p className=" text-my-gray text-sm md:text-base w-full max-w-xl">
        {dataSet?.content}
      </p>
      <Image
        src="/images/study_destinations/image1.png"
        alt="whychoose"
        width={300}
        height={300}
        className=" w-full max-w-xl h-auto object-cover object-center"
      />
    </div>
  );
};

export default SDWhyChoose;
