import Image from "next/image";
import React from "react";

const WhyUniguruSection = () => {
  return (
    <div className=" flex flex-col md:flex-row my-container">
      <div className=" flex flex-col w-full h-auto md:w-1/2 gap-8 md:py-24">
        <h3 className=" text-4xl font-bold text-my-blue">
          Why <span className="text-my-orange">Uniguru?</span>
        </h3>
        <p className=" text-my-gray2 max-w-[570px] leading-8">
          Uniguru is a leading, globally recognized education solution provider
          for individuals seeking higher studies. We offer expert guidance on
          Foundation, Bachelor, Masters, and PhD programs, assisting with course
          selection, application processes, and visa assistance to ensure your
          academic success.
        </p>
      </div>
      <div className=" w-full h-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0 self-center">
        <Image src={"/home/whyuniguru.png"} alt="whyuniguru" width={400} height={300} className="object-cover" />
      </div>
    </div>
  );
};

export default WhyUniguruSection;
