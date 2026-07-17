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

export const pageKeywords = {
  home: [
    "Revital Moves",
    "property management company Massachusetts",
    "full-service property management Massachusetts",
    "rental property management",
    "property manager Westford MA",
    "tenant screening",
    "rent collection",
    "rental property maintenance",
  ],
  about: [
    "about Revital Moves",
    "Massachusetts property management team",
    "trusted property management company",
    "property stewardship Massachusetts",
    "property owner support",
    "tenant support services",
  ],
  contact: [
    "contact Revital Moves",
    "property management consultation Massachusetts",
    "Westford property manager",
    "rental management inquiry",
    "property management services contact",
    "landlord support Massachusetts",
  ],
  services: [
    "property management services Massachusetts",
    "lease management Massachusetts",
    "tenant screening services",
    "rent collection services",
    "rental property maintenance",
    "property marketing and leasing",
    "24/7 tenant support",
    "financial reporting for landlords",
  ],
  hoaServices: [
    "HOA Management Services",
    "Homeowners Association",
    "Condominium Association management services",
    "Townhouse Community",
    "Financial Management",
    "Vendor Management",
    "Board Support",
    "Massachusetts Communities",
  ],
  career: [
    "property management careers Massachusetts",
    "Revital Moves jobs",
    "property manager jobs Massachusetts",
    "leasing jobs Massachusetts",
    "real estate careers Westford MA",
    "property management employment",
  ],
  consultation: [
    "book property management consultation",
    "property management consultation Massachusetts",
    "rental property assessment",
    "landlord consultation Massachusetts",
    "leasing consultation",
    "tenant management guidance",
  ],
  blog: [
    "property management blog Massachusetts",
    "landlord tips Massachusetts",
    "rental property advice",
    "leasing insights",
    "tenant management tips",
    "rental maintenance tips",
  ],
  terms: [
    "Revital Moves terms of service",
    "Revital Moves website terms",
    "property management website terms",
  ],
  privacy: [
    "Revital Moves privacy policy",
    "Revital Moves data privacy",
    "contact form privacy",
    "website privacy policy",
  ],
};

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = pageKeywords.home,
  image = "/hero/ms1.jpg",
  imageAlt = "Massachusetts rental property managed by Revital Moves",
}: PageMetadata): Metadata {
  return {
    title,
    description,
    keywords,
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
          url: image,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
