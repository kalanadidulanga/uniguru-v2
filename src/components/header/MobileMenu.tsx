"use client";

import { NAVBAR_DATA } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import NavButtons from "./NavButtons";
import { ChevronsUpDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface NavItem {
  name: string;
  link: string;
  subOptions?: Array<{ name: string; link: string }>;
}

const MobileMenu: React.FC = () => {
  const pathname = usePathname();
  const active = "text-my-orange";

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openCollapsible, setOpenCollapsible] = useState<number | null>(null);

  const handleToggleCollapsible = (index: number) => {
    setOpenCollapsible((prev) => (prev === index ? null : index));
  };

  return (
    <div className=" lg:hidden">
      <div
        className=" flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <div
          className={` w-6 h-1 bg-my-blue rounded-sm ${
            isMenuOpen ? " rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={` w-6 h-1 bg-my-blue rounded-sm ${
            isMenuOpen ? " opacity-0" : ""
          } ease-in-out duration-500`}
        />
        <div
          className={` w-6 h-1 bg-my-blue rounded-sm ${
            isMenuOpen ? " -rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>

      {isMenuOpen && (
        <>
          <div className=" bg-liter-orange absolute left-0 top-24 w-full py-5 overflow-x-hidden flex flex-col items-center gap-5 font-medium z-10 shadow-lg rounded-b-lg">
            <div className="flex flex-col justify-center w-[80%] gap-5 font-medium">
              {NAVBAR_DATA.map((item: NavItem, index: number) =>
                item.subOptions ? (
                  <Collapsible
                    key={index}
                    open={openCollapsible === index}
                    onOpenChange={() => handleToggleCollapsible(index)}
                  >
                    <CollapsibleTrigger asChild>
                      <div
                        className={`${
                          pathname === item.link ? active : ""
                        } flex items-center justify-between`}
                      >
                        {item.name} <ChevronsUpDown className="h-4 w-4" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className=" bg-liter-orange flex flex-col text-sm mt-1 text-my-gray2 gap-1">
                      {item.subOptions.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.link}
                          className={pathname === subItem.link ? active : ""}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link
                    key={index}
                    href={item.link}
                    className={pathname === item.link ? active : ""}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
            <NavButtons className="flex flex-col sm:flex-row" />
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
