import PartTimeWorkPageV2 from "@/components/pages/services/part-time-work/PartTimeWorkPageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Part\u2011Time Work Support | Uniguru (London)",
  description:
    "We help you prepare for part\u2011time work with a CV & profile pack, a daily job-search system, and practical interview readiness  - with partner direction where available.",
};

const Page = () => {
  return <PartTimeWorkPageV2 />;
};

export default Page;
