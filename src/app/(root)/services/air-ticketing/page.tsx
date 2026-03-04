import { Metadata } from "next";
import React from "react";
import AirTicketingPageV2 from "@/components/pages/services/air-ticketing/AirTicketingPageV2";

export const metadata: Metadata = {
  title: "Travel Planning Support | Uniguru (London)",
  description:
    "We help you shortlist sensible flight routes through third-party travel partners and guide you on booking timing, baggage rules, and arrival planning.",
};

const Page = () => {
  return (
    <AirTicketingPageV2 />
  );
};

export default Page;
