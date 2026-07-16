import type { Metadata } from "next";
import LegalDocument from "@/components/pages/LegalDocument";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service | Revital Moves",
  description:
    "Review the terms that govern use of the Revital Moves website, consultation requests, contact forms, and online career applications.",
  path: "/terms-of-service",
});

const sections = [
  {
    heading: "1. Acceptance of these terms",
    paragraphs: [
      "By accessing or using this website, you agree to these Terms of Service. If you do not agree, please do not use the website or submit information through its forms.",
      "These website terms do not replace a property management agreement, lease, employment agreement, or other written contract. If another signed agreement applies, that agreement controls the services described in it.",
    ],
  },
  {
    heading: "2. Website information and services",
    paragraphs: [
      "Revital Moves provides general information about property management, leasing support, maintenance coordination, careers, and related services. Website content is for general informational purposes and is not legal, tax, accounting, or investment advice.",
      "Submitting a contact, consultation, or employment form does not guarantee that we will enter into a business or employment relationship. Service scope, pricing, timing, and responsibilities are confirmed separately in writing.",
    ],
  },
  {
    heading: "3. Acceptable use",
    paragraphs: [
      "You agree to provide accurate information and use this website only for lawful purposes. You may not attempt to disrupt the website, gain unauthorized access, submit malicious code, impersonate another person, or use the forms to send unlawful or abusive material.",
    ],
  },
  {
    heading: "4. Intellectual property",
    paragraphs: [
      "The website design, branding, text, graphics, and other original content are owned by Revital Moves or used with permission. You may view and print reasonable portions for personal, noncommercial use, but you may not reproduce or distribute website content for commercial purposes without written permission.",
    ],
  },
  {
    heading: "5. Third-party services and links",
    paragraphs: [
      "The website may link to maps, social platforms, service providers, or other third-party websites. Those services operate under their own terms and privacy practices. Revital Moves is not responsible for third-party content, availability, or security.",
    ],
  },
  {
    heading: "6. Disclaimers and limitation of liability",
    paragraphs: [
      "We work to keep website information accurate and available, but the website is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, Revital Moves disclaims warranties relating to website operation and is not liable for indirect, incidental, or consequential losses arising solely from website use.",
      "Nothing in these terms limits liability where a limitation is prohibited by applicable law.",
    ],
  },
  {
    heading: "7. Governing law and changes",
    paragraphs: [
      "These terms are governed by the laws of the Commonwealth of Massachusetts, without regard to conflict-of-law principles. We may update these terms as the website or our practices change. The revised terms become effective when posted with a new last-updated date.",
    ],
  },
  {
    heading: "8. Contact us",
    paragraphs: [
      <>
        Questions about these terms may be sent to{" "}
        <a className="text-[#A69177] underline" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>{" "}
        or mailed to {siteConfig.address.streetAddress},{" "}
        {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}{" "}
        {siteConfig.address.postalCode}.
      </>,
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Terms of Service"
      introduction="These terms explain the rules that apply when you visit revitalmoves.com or submit information through the website."
      updatedAt="July 16, 2026"
      sections={sections}
    />
  );
}
