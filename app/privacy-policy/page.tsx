import type { Metadata } from "next";
import LegalDocument from "@/components/pages/LegalDocument";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy | Revital Moves",
  description:
    "Learn how Revital Moves collects, uses, protects, and retains information submitted through its contact, consultation, and career forms.",
  path: "/privacy-policy",
});

const sections = [
  {
    heading: "1. Information we collect",
    paragraphs: [
      "We collect information you choose to provide when you contact us, request a consultation, or apply for a job. Depending on the form, this may include your name, email address, phone number, company name, property or service interests, preferred meeting details, message, résumé, and cover letter.",
      "Our website and hosting providers may also process basic technical information such as IP address, browser type, device information, referring page, and server logs needed to deliver, secure, and troubleshoot the website.",
    ],
  },
  {
    heading: "2. How we use information",
    paragraphs: [
      "We use personal information to respond to inquiries, evaluate consultation requests, communicate about services, review employment applications, maintain business records, prevent misuse, improve website reliability, and comply with legal obligations.",
    ],
    points: [
      "Respond to contact and service requests",
      "Schedule and prepare for consultations",
      "Evaluate and manage job applications",
      "Protect our website, users, and business operations",
      "Meet recordkeeping and legal requirements",
    ],
  },
  {
    heading: "3. How we share information",
    paragraphs: [
      "We may share information with vendors that help us host the website, operate our systems, communicate with you, or support recruitment and business administration. These providers may use information only as needed to perform services for us.",
      "We may also disclose information when required by law, to respond to lawful requests, to protect rights or safety, or as part of a business transaction. We do not sell personal information submitted through this website.",
    ],
  },
  {
    heading: "4. Data retention and security",
    paragraphs: [
      "We retain information for as long as reasonably necessary for the purpose it was collected, our legitimate business needs, dispute resolution, and applicable legal obligations. Retention periods may differ for customer inquiries, consultation records, and employment applications.",
      "We use reasonable administrative and technical safeguards designed to protect personal information. No internet transmission or storage system can be guaranteed completely secure, so please avoid sending sensitive information that a form does not request.",
    ],
  },
  {
    heading: "5. Your choices",
    paragraphs: [
      "You may ask to access, correct, or delete information you submitted, subject to applicable law and records we must retain. You may also ask us to stop nonessential communications. We may need to verify your request before acting on it.",
    ],
  },
  {
    heading: "6. Third-party links and children's privacy",
    paragraphs: [
      "Links to maps, social networks, and other third-party services are governed by those providers' privacy practices. Our website is intended for a general adult audience and is not directed to children under 13. We do not knowingly collect personal information from children through the website.",
    ],
  },
  {
    heading: "7. Policy updates",
    paragraphs: [
      "We may update this policy when our website, services, or privacy practices change. The latest version will be posted on this page with the updated effective date.",
    ],
  },
  {
    heading: "8. Contact us",
    paragraphs: [
      <>
        For privacy questions or requests, email{" "}
        <a className="text-[#A69177] underline" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>{" "}
        or write to {siteConfig.name}, {siteConfig.address.streetAddress},{" "}
        {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}{" "}
        {siteConfig.address.postalCode}.
      </>,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      eyebrow="Privacy"
      title="Privacy Policy"
      introduction="This policy describes how Revital Moves handles information collected through revitalmoves.com."
      updatedAt="July 16, 2026"
      sections={sections}
    />
  );
}
