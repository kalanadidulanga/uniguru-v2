import { STUDY_DESTINATIONS } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StudyDestination = () => {
  return (
    <div className=" my-container flex flex-col py-24 items-center gap-10">
      <h3 className=" text-4xl font-bold text-my-blue text-center">
        Study <span className="text-my-orange">Destination</span>
      </h3>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {STUDY_DESTINATIONS.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className=" shadow-lg hover:shadow-2xl duration-200 flex flex-col items-center gap-4 p-8 rounded-lg"
          >
            <Image src={item.src} alt={item.name} width={150} height={150} />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudyDestination;
