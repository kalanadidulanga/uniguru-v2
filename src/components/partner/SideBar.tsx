"use client";

import { PARTNER_NAVBAR } from "@/constants/partnerData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-[175px] h-full overflow-y-auto gap-3 py-5 text-sm">
      {PARTNER_NAVBAR.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={`
            border-my-orange text-my-black border-2 py-2 text-center rounded-md mx-3 font-medium hover:bg-liter-orange hover:text-my-black duration-200
            ${pathname === item.link ? "bg-my-orange text-white" : ""}
            `}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
