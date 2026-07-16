import type { Metadata } from "next";
import { createPageMetadata, pageKeywords } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Book Your Consultation | Revital Moves",
  description:
    "Book a consultation with Revital Moves to discuss your property management needs. Get expert guidance on property management, leasing, and tenant support.",
  path: "/consultation",
  keywords: pageKeywords.consultation,
});

export default function ConsultationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
