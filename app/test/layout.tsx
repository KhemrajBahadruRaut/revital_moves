import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internal Test Page",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
};

export default function TestLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
