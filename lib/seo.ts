import type { Metadata } from "next";

export const siteConfig = {
  name: "Revital Moves",
  url: "https://revitalmoves.com",
  email: "management@revitalmoves.com",
  phone: "+17742876819",
  address: {
    streetAddress: "270 Littleton Rd",
    addressLocality: "Westford",
    addressRegion: "MA",
    postalCode: "01852",
    addressCountry: "US",
  },
  socials: {
    facebook: "https://www.facebook.com/revitalmoves",
    instagram: "https://www.instagram.com/revital_moves/",
  },
} as const;

export const seoKeywords = [
  "Revital Moves",
  "property management company",
  "Massachusetts property management",
  "lease management",
  "tenant screening",
  "rent collection",
  "property marketing",
  "property management services",
];

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  return {
    title,
    description,
    keywords: seoKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/hero/ms1.jpg",
          alt: "Massachusetts rental property managed by Revital Moves",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero/ms1.jpg"],
    },
  };
}
