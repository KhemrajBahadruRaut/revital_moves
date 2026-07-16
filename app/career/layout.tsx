import type { Metadata } from "next";
import { createPageMetadata, pageKeywords } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Carrers | Revital Moves - Property Management Company",
  description:
    "Explore career opportunities at Revital Moves. Join our property management team and help deliver exceptional property management and customer service.",
  path: "/career",
  keywords: pageKeywords.career,
});

export default function CareerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
