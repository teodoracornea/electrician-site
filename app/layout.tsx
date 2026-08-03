import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { hasPublicFile } from "@/lib/public-assets.server";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Electrician Auto Cluj | Electrician auto Cluj-Napoca",
  description:
    "Reparații și instalații electrice auto în Cluj-Napoca. Diagnoză, cablaje, accesorii și sisteme audio, cu deplasare la fața locului.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hasLogoFile = hasPublicFile("logo.jpg");

  return (
    <html
      lang="ro"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader hasLogoFile={hasLogoFile} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
