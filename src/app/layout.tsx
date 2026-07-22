import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AnalyticsScripts from "@/components/AnalyticsScripts";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import { BUSINESS, SITE_URL } from "@/lib/business-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CMF Masonry | Crafted in Stone. Grounded in Place.",
    template: "%s | CMF Masonry",
  },
  description:
    "CMF Masonry installs natural & manufactured stone veneer, tile, brick, and architectural precast for homeowners, designers, architects, and general contractors across Southern California.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "CMF Masonry | Crafted in Stone. Grounded in Place.",
    description: "Architectural masonry for Southern California homes and commercial spaces.",
    url: SITE_URL,
    siteName: "CMF Masonry",
    images: [{ url: "/og.png", width: 1733, height: 909, alt: "CMF Masonry — Crafted in stone. Grounded in place." }],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: BUSINESS.name,
  telephone: BUSINESS.phone,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: "US",
  },
  areaServed: "Southern California",
  openingHours: "Mo-Sa 09:00-17:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AnalyticsScripts />
        <AnalyticsEvents />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
