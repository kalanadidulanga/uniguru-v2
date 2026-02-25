import FinancialHelpPageV2 from "@/components/pages/services/financial-help/FinancialHelpPageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Financial Help | UNIGURU",
  description: "Get financial assistance for your studies abroad with UNIGURU.",
};

const Page = () => {
  return (
    <FinancialHelpPageV2 />
  );
};

export default Page;

