import ScholarshipsPageV2 from "@/components/pages/scholarships/ScholarshipsPageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Scholarships",
  description: "Scholarships page of Uniguru",
};

const page = () => {
  return <ScholarshipsPageV2 />;
};

export default page;
