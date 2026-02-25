import { Metadata } from "next";
import React from "react";
import AirTicketingPageV2 from "@/components/pages/services/air-ticketing/AirTicketingPageV2";

export const metadata: Metadata = {
  title: "Air Ticketing",
  description: "Air Ticketing page of Uniguru",
};

const Page = () => {
  return (
    <AirTicketingPageV2 />
  );
};

export default Page;
