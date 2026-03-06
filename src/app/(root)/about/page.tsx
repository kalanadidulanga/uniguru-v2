import AboutPageV2 from "@/components/pages/about/AboutPageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Uniguru | London-led support",
  description:
    "A disciplined, end-to-end process - from shortlist to settlement - with regulated guidance where required.",
};

const Page = () => {
  return <AboutPageV2 />;
};

export default Page;