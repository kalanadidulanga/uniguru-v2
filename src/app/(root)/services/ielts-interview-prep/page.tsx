import IeltsInterviewPrepPageV2 from "@/components/pages/services/ielts-interview-prep/IeltsInterviewPrepPageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "IELTS & Interview Preparation | Uniguru (London)",
  description:
    "IELTS preparation and interview coaching built on diagnostics, feedback, and repetition. Diagnostic + plan in 24–48 hours.",
};

const Page = () => {
  return <IeltsInterviewPrepPageV2 />;
};

export default Page;
