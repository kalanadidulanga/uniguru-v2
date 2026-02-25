import AccommodationPageV2 from "@/components/pages/services/accommodation/AccommodationPageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Accommodation",
  description: "Accommodation page of Uniguru",
};

const page = () => {
  return <AccommodationPageV2 />;
};

export default page;
