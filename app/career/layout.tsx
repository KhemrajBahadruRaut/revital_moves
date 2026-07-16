import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Careers | Revital Moves",
  description:
    "Explore career opportunities at Revital Moves. Join our property management team and help deliver exceptional property management and customer service.",
  path: "/career",
});

export default function CareerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
