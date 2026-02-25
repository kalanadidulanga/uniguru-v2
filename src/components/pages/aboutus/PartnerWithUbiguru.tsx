import { Button } from "@/components/myComponents/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PartnerWithUbiguru = () => {
  return (
    <div className=" pb-24 my-container flex flex-col gap-8">
      <h2 className="text-4xl font-bold text-center text-my-blue">
        Become a Partner with Uniguru
      </h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        <div className=" w-full h-auto md:w-1/2">
          <Image
            src={"/images/about-bottom.png"}
            alt="about-bottom"
            width={500}
            height={400}
            className=" h-full w-full object-cover object-center"
          />
        </div>
        <div className=" w-full h-auto md:w-1/2 flex flex-col gap-8 items-start justify-center">
          <p className=" text-my-gray2">
            Join us as a Partner Executive and help students achieve their
            educational dreams! Simply provide us with the contact details of
            potential students, and the Uniguru team will handle the rest. From
            initial guidance through IELTS and university applications to
            securing scholarships, accommodations, and job opportunities, we
            support students throughout their entire education journey. Partner
            with us to make a difference in students’ lives today!
          </p>
          <Link href={"/become-a-partner"}>
            <Button variant={"blue"} size={"lg"}>
              Become a Partner
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUbiguru;
