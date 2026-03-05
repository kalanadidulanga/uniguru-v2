import DocumentReadinessPageV2 from "@/components/pages/services/document-readiness/DocumentReadinessPageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Document Readiness & Compliance Check | Uniguru (London)",
  description:
    "Structured document readiness pack  - evidence map, consistency audit, submission-ready folder structure, and risk flags. Pack within 24-48 hours.",
};

const Page = () => {
  return <DocumentReadinessPageV2 />;
};

export default Page;
