import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AnnouncementBar } from "@/components/announcement-bar";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { hasPublicFile } from "@/lib/public-assets.server";
import { localBusinessSchema } from "@/lib/structured-data";
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
  metadataBase: new URL("https://electricianautocluj.ro"),

  title: "Electrician Auto Cluj | Diagnoză și Reparații Auto",

  description:
    "Electrician auto în Cluj-Napoca. Diagnoză computerizată, reparații electrice auto, alternatoare, electromotoare, verificare cablaje și instalare accesorii.",

  keywords: [
    "electrician auto Cluj",
    "electrician auto Cluj-Napoca",
    "electrician auto",
    "diagnoză auto Cluj",
    "reparații electrice auto Cluj",
  ],

  alternates: {
    canonical: "https://electricianautocluj.ro",
  },

  openGraph: {
    title: "Electrician Auto Cluj | Diagnoză și Reparații Auto",
    description:
      "Diagnoză auto, reparații electrice, alternatoare, electromotoare și accesorii auto în Cluj-Napoca.",
    url: "https://electricianautocluj.ro",
    siteName: "Electrician Auto Cluj - Moldovan Dan",
    locale: "ro_RO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <AnnouncementBar />
        <SiteHeader hasLogoFile={hasLogoFile} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
