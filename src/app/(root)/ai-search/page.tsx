import AISearchClient from "./AISearchClient";
import { Metadata } from "next";

export const maxDuration = 60;

export const metadata: Metadata = {
  title: "AI Course Finder | Uniguru",
  description:
    "Describe your dream study path and let our AI find the best university programmes worldwide. Powered by Gemini AI.",
};

export default function AISearchPage() {
  return <AISearchClient />;
}
