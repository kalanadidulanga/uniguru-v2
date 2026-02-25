import FreeIeltsServicePageV2 from "@/components/pages/services/free-ielts-service/FreeIeltsServicePageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Free IELTS Service",
  description: "Free IELTS Service page of Uniguru",
};

const Page = () => {
  return (
    <FreeIeltsServicePageV2 />
  );
};

export default Page;
