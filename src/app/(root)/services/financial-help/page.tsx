import FinancialHelpPageV2 from "@/components/pages/services/financial-help/FinancialHelpPageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Financial Help | Uniguru (London)",
  description:
    "We help you build a clear budget framework and compare potential third-party finance pathways  - with responsible borrowing in mind.",
};

const Page = () => {
  return <FinancialHelpPageV2 />;
};

export default Page;
