import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BCR | Bridge the Difference",
    template: "%s | BCR",
  },
  description:
    "BCR provides access to global CFD markets with competitive spreads, multi-platform trading, and market analysis.",
  // TODO: set this to your real domain once deployed.
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "BCR | Bridge the Difference",
    description:
      "Trade Forex, Crypto, Metals, Commodities, Indices and Shares with BCR.",
    type: "website",
  },
  icons: {
    icon: "/bcr-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
          strategy="beforeInteractive"
        />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
