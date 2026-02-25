import React from "react";
import { Metadata } from "next";
import CareersPageV2 from "@/components/pages/careers/CareersPageV2";

export const metadata: Metadata = {
  title: "Careers | Uniguru",
  description: "Join the Uniguru team and help students achieve their dreams.",
};

const Careers = () => {
  return <CareersPageV2 />;
};

export default Careers;
