import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexusAI — Next-Gen AI Data Automation Platform",
  description: "Automate your entire data pipeline with NexusAI. AI-powered extraction, transformation, and delivery at enterprise scale with 99.9% uptime.",
  keywords: "AI automation, data pipeline, machine learning, enterprise AI, data automation platform",
  authors: [{ name: "NexusAI" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://nexusai.vercel.app",
    title: "NexusAI — Next-Gen AI Data Automation Platform",
    description: "Automate your entire data pipeline with NexusAI. AI-powered extraction, transformation, and delivery at enterprise scale.",
    siteName: "NexusAI",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NexusAI Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusAI — Next-Gen AI Data Automation Platform",
    description: "Automate your entire data pipeline with NexusAI.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://nexusai.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
