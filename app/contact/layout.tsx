import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us | Revital Moves - Property Management Company",
  description:
    "Contact Revital Moves for professional property management services. Speak with our team about property management, tenant support, and rental solutions today.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
