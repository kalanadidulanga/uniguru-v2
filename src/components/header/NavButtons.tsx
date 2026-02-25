import React from "react";
import { Button } from "../myComponents/button";
import Link from "next/link";

const NavButtons = ({ className }: { className?: string }) => {
  return (
    <div className={`gap-3 lg:gap-3 xl:gap-5 items-center ${className}`}>
      <Link href={"/login"}>
        <Button variant={"secondary"}>Login</Button>
      </Link>
      <Link href={"/book"} className=" lg:hidden xl:inline">
        <Button>Book a Consultation</Button>
      </Link>
    </div>
  );
};

export default NavButtons;
