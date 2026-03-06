import AdmissionsSupportPageV2 from "@/components/pages/services/admissions-support/AdmissionsSupportPageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admissions Support | Uniguru (London-led)",
  description:
    "Clean submissions, controlled timelines, and consistent documentation. Admissions plan in 24-48 hours.",
};

const Page = () => {
  return <AdmissionsSupportPageV2 />;
};

export default Page;
