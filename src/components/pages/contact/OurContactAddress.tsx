import Image from "next/image";
import React from "react";
import Details from "./Details";
import { CONTACT_DETAILS } from "@/constants/data";

const OurContactAddress = () => {
  return (
    <div className="flex flex-col w-full py-24">
      <h3 className="text-4xl font-bold text-my-blue mb-14">
        Our Contact Address
      </h3>
      <div className=" flex flex-col w-full gap-16">
        {CONTACT_DETAILS.map((item, index) => (
          <Details key={index} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default OurContactAddress;
