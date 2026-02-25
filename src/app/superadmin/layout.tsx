import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Poppins } from "next/font/google"; // Import Poppins font
import SideBar from "@/components/superadmin/SideBar";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";
import LogoutBtn from "@/components/myComponents/LogoutBtn";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession();
  // console.log(session);
  if (!session || session?.user?.role !== "superadmin") {
    redirect("/login");
  }
  return (
    <div
      className={`${poppins.className} flex flex-col flex-1 h-screen overflow-hidden`}
    >
      <div className=" px-3 flex items-center justify-between h-[10%]">
        <Link href={"/superadmin"} className="">
          <Image src={"/logo2.png"} alt="UNIGURU" width={150} height={100} />
        </Link>
        <div className=" flex items-center gap-2">
          <LogoutBtn className=" hidden md:flex" />

          <div className=" flex flex-col">
            <p className=" text-my-gray font-medium">{session?.user.name}</p>
            <p className=" text-my-gray2 text-sm">{session?.user.email}</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-1 h-[90%]">
        <SideBar />
        <div className=" border flex-1 bg-[#FAFAFB] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
