import type { Metadata } from "next";
import { Poppins, Signika_Negative } from "next/font/google"; // Import Poppins font
import toast, { Toaster } from "react-hot-toast";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Apply the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const signika = Signika_Negative({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UNIGURU",
    template: `%s | UNIGURU`,
  },
  description: "",
  keywords: [
    "UNIGURU",
    "uniguru",
    // "Full Stack Software Engineer",
    // "MERN Stack Developer",
    // "Frontend Engineer",
  ],
  authors: [
    {
      name: "Kalana Didulanga",
      url: "https://kalanadidulanga.com/",
    },
  ],
  // manifest: `${siteConfig.url}/site.webmanifest`,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
