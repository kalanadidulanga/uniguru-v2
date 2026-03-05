import RegulationPageV2 from "@/components/pages/regulation/RegulationPageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Regulation & Scope | Uniguru",
  description:
    "IAA regulated immigration support with fixed fees and disciplined preparation. Organisation Registration: F202537807.",
};

const Page = () => {
  return <RegulationPageV2 />;
};

export default Page;
