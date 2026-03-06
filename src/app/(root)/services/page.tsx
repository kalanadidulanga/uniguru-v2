import ServicesPageV2 from "@/components/pages/services/landing/ServicesPageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Services | Uniguru (London-led support)",
  description:
    "End-to-end support from shortlist to settlement. Eligibility, admissions, immigration, IELTS, accommodation, air ticketing, financial help, and part-time work support.",
};

const Page = () => {
  return <ServicesPageV2 />;
};

export default Page;
