import FreeIeltsServicePageV2 from "@/components/pages/services/free-ielts-service/FreeIeltsServicePageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Free IELTS Resources | Uniguru (London)",
  description:
    "Comprehensive, cost-free IELTS preparation materials  - video lessons, practice tests, and expert strategies for all 4 modules.",
};

const Page = () => {
  return (
    <FreeIeltsServicePageV2 />
  );
};

export default Page;
