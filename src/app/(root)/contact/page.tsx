import React from "react";
import { Metadata } from "next";
import ContactPageV2 from "@/components/pages/contact/ContactPageV2";

export const metadata: Metadata = {
  title: "Contact | Uniguru",
  description:
    "Tell us what you need — we'll direct you to the right service. WhatsApp, email, or send us a message.",
};

const Page = () => {
  return <ContactPageV2 />;
};

export default Page;
