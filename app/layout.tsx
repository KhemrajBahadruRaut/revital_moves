import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import {
  createPageMetadata,
  pageKeywords,
  siteConfig,
} from "@/lib/seo";

const homeDescription =
  "Property management company in Massachusetts offering leasing, tenant screening, rent collection, and maintenance. Contact us today!";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Property Management",
  ...createPageMetadata({
    title: "Revital Moves | Property Management Company, Massachusetts",
    description: homeDescription,
    path: "/",
    keywords: pageKeywords.home,
  }),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/mainlogo/logo.png`,
  image: `${siteConfig.url}/hero/ms1.jpg`,
  description: homeDescription,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    ...siteConfig.address,
  },
  areaServed: {
    "@type": "State",
    name: "Massachusetts",
  },
  sameAs: Object.values(siteConfig.socials),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased"
     data-coolstyles-extension="installed"
     data-coolstyles-extension-version="1.9.0">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
