import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SandpackCSS } from "./blog/[slug]/sandpack";

export const metadata: Metadata = {
  metadataBase: new URL("https://studycraft.dev"),
  title: {
    default: "Study craft",
    template: "%s | Study craft",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Study craft",
    description: "Developer, writer, and creator.",
    url: "https://studycraft.dev",
    siteName: "Study craft",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Study craft",
    card: "summary_large_image",
  },
  verification: {
    google: "TODO",
    yandex: "TODO",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "bg-white text-black dark:bg-[#111010] dark:text-white",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <head>
        <SandpackCSS />
      </head>
      <body className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto">
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
