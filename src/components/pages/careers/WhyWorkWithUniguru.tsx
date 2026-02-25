import { Button } from "@/components/myComponents/button";
import Image from "next/image";
import React from "react";

const WhyWorkWithUniguru = () => {
  return (
    <div className=" my-24 my-container flex flex-col gap-8">
      <h2 className="text-4xl font-bold text-center text-my-blue">
        Why Work with Uniguru?
      </h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        <div className=" w-full h-auto md:w-1/2">
          <Image
            src={"/images/careers/1.png"}
            alt=""
            width={300}
            height={300}
            className=" w-full max-w-md object-cover object-center"
          />
        </div>
        <div className=" w-full h-auto md:w-1/2 flex flex-col gap-8 items-start justify-center">
          <p className=" text-my-gray2">
            <span className=" font-semibold text-my-black">
              Make a Difference:
            </span>{" "}
            Help students navigate the study abroad process, from university
            selection to visa applications.
          </p>

          <p className=" text-my-gray2">
            <span className=" font-semibold text-my-black">
              Dynamic Work Environment:
            </span>{" "}
            Join a team of passionate professionals who are committed to
            providing exceptional service and support to students.
          </p>

          <p className=" text-my-gray2">
            <span className=" font-semibold text-my-black">
              Growth Opportunities:
            </span>{" "}
            Uniguru offers plenty of opportunities for career growth and
            professional development in the international education industry.
          </p>

          <p className=" text-my-gray2">
            <span className=" font-semibold text-my-black">
              Collaborative Culture:
            </span>{" "}
            Work alongside like-minded individuals who value teamwork and
            innovation to deliver the best results for our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUniguru;
