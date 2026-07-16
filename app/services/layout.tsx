import type { Metadata } from "next";
import { createPageMetadata, pageKeywords } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Services | Revital Moves - Property Management Services",
  description:
    "Explore Revital Moves' professional property management services designed to simplify property ownership with expert tenant management, maintenance, and leasing support.",
  path: "/services",
  keywords: pageKeywords.services,
});

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
