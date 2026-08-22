import { siteConfig } from "@/lib/site-config";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.name,
  url: "https://electricianautocluj.ro",
  image: "https://electricianautocluj.ro/logo.jpg",
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: "Cluj",
    addressCountry: "RO",
  },
  areaServed: siteConfig.city,
  founder: {
    "@type": "Person",
    name: siteConfig.owner,
  },
  sameAs: [siteConfig.facebookUrl, siteConfig.instagramUrl],
};
