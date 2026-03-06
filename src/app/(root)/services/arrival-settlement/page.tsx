import ArrivalSettlementPageV2 from "@/components/pages/services/arrival-settlement/ArrivalSettlementPageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Arrival & Settlement Support | Uniguru (London)",
  description:
    "London-led First 14 Days Plan  - day-by-day checklist, SIM, banking, GP registration, transport, accommodation checks, and scam-avoidance guidance.",
};

const Page = () => {
  return <ArrivalSettlementPageV2 />;
};

export default Page;
