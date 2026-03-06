import EligibilityShortlistPageV2 from "@/components/pages/services/eligibility-shortlist/EligibilityShortlistPageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Eligibility & Shortlist | Uniguru (London-led)",
  description:
    "Eligibility-led shortlisting based on academic fit, budget fit, and credibility fit. Shortlist in 24-48 hours.",
};

const Page = () => {
  return <EligibilityShortlistPageV2 />;
};

export default Page;
