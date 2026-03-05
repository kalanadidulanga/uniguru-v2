import PoliciesPageV2 from "@/components/pages/policies/PoliciesPageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Policies | Uniguru",
  description:
    "Privacy policy, terms of service, cookie policy, and complaints procedure. Clear standards and transparent processes.",
};

const Page = () => {
  return <PoliciesPageV2 />;
};

export default Page;
