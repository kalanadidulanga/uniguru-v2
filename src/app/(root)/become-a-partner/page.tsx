import { Metadata } from "next";
import React from "react";
import BecomeAPartnerPageV2 from "@/components/pages/partner/BecomeAPartnerPageV2";

export const metadata: Metadata = {
  title: "Become a Partner",
  description: "Become a Partner page of Uniguru",
};

const page = () => {
  return <BecomeAPartnerPageV2 />;
};

export default page;
