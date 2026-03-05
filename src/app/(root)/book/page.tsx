import BookPageV2 from "@/components/pages/book/BookPageV2";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Get My Shortlist | Uniguru (London-led)",
  description:
    "Tell us your situation. We'll match you with options that fit your profile, budget, and timeline. Shortlist in 24–48 hours.",
};

const Page = () => {
  return <BookPageV2 />;
};

export default Page;
