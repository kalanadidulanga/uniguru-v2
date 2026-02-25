import { SOCIAL_LINKS } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import MailsCollect from "./MailsCollect";

const Footer = () => {
  return (
    <div className=" bg-my-black">
      <div className=" my-container pt-24 pb-20 flex flex-col lg:flex-row gap-14 lg:justify-between">
        <div className=" w-full lg:w-1/2 flex flex-col gap-6">
          <h3 className=" text-4xl font-bold text-white">Uniguru</h3>
          <p className=" text-slate-300 text-lg">
            Uniguru, headquartered in London, is a Sri Lankan, UK, Canada, and
            Australia-based Education Visa Consultancy.
          </p>
          <div className=" flex gap-4 mt-5">
            {SOCIAL_LINKS.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 flex items-center justify-center"
              >
                <Image
                  src={item.src}
                  alt={item.src}
                  width={24}
                  height={24}
                  className=""
                />
              </Link>
            ))}
          </div>
        </div>
        <div className=" w-full lg:w-1/2 flex flex-col lg:items-end gap-6">
          <h3 className=" text-4xl font-bold text-white">Get in touch!</h3>
          <div className=" flex flex-col gap-2">
            <p className=" text-slate-300 text-lg lg:text-end">
              Don’t miss our future updates! Get Subscribed Today!
            </p>
            <MailsCollect />
          </div>
        </div>
      </div>

      <div className=" my-container pb-5">
        <div className=" border border-white"></div>
      </div>
      <div className=" my-container flex items-center text-center justify-center text-white w-full pb-5">
        <p>
          © 2024 Uniguru | All Rights Reserved & Developed by
          <Link
            href="https://www.linkedin.com/in/kalana-didulanga/"
            target="_blank"
            rel="noopener noreferrer"
            className=" font-bold ms-1"
          >
            Kalana Didulanga
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
