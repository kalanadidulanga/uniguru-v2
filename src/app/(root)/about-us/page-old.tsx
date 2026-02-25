import HeroSection from "@/components/pages/aboutus/HeroSection";
import MeetOurTeam from "@/components/pages/aboutus/MeetOurTeam";
import OurMission from "@/components/pages/aboutus/OurMission";
import OurVision from "@/components/pages/aboutus/OurVision";
import PartnerWithUbiguru from "@/components/pages/aboutus/PartnerWithUbiguru";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Us page of Uniguru",
};

const page = () => {
  return (
    <>
      <HeroSection />
      <OurVision />
      <OurMission />
      <MeetOurTeam />
      <PartnerWithUbiguru />
    </>
  );
};

export default page;
