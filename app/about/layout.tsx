import type { Metadata } from "next";
import { createPageMetadata, pageKeywords } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us | Revital Moves - Property Management Company",
  description:
    "Learn about Revital Moves, a trusted property management company dedicated to reliable property management, tenant support, and exceptional property care.",
  path: "/about",
  keywords: pageKeywords.about,
});

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
