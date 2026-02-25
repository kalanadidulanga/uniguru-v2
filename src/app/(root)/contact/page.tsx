import React from "react";
import { Metadata } from "next";
import ContactPageV2 from "@/components/pages/contact/ContactPageV2";

export const metadata: Metadata = {
  title: "Contact Us | Uniguru",
  description: "Get in touch with Uniguru. We'd love to hear from you.",
};

const Page = () => {
  return <ContactPageV2 />;
};

export default Page;
