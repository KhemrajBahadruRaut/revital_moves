import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Handshake,
  HardHat,
  Home,
  Laptop,
  MapPin,
  MessageSquare,
  SearchCheck,
  Siren,
  Users,
  Wrench,
} from "lucide-react";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/navbar/Navbar";
import { createPageMetadata, pageKeywords, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "HOA & Condominium/Townhouse Association Management",
  description:
    "At Revital Moves LLC, we provide comprehensive Homeowners Association (HOA) and Condominium Association management services designed to protect your community, preserve property values, and simplify day-to-day operations.",
  path: "/services/hoa-condo-management",
  keywords: pageKeywords.hoaServices,
  image: "/services/s2.jpg",
  imageAlt: "Condominium Associations",
});

type ServiceSection = {
  label?: string;
  items: string[];
};

type ServiceGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  sections: ServiceSection[];
};

const advantages = [
  "Professional guidance",
  "Transparent financial reporting",
  "Fast response times",
  "Reliable vendor relationships",
  "Preventative maintenance planning",
  "Cost-saving strategies",
  "Excellent homeowner service",
  "Board support and education",
];

const serviceGroups: ServiceGroup[] = [
  {
    title: "Administrative Management",
    description:
      "We handle the daily administrative responsibilities that keep your association organized.",
    icon: ClipboardList,
    sections: [
      {
        label: "Services include:",
        items: [
          "Association record keeping",
          "Homeowner correspondence",
          "Welcome packets for new owners",
          "Board meeting scheduling",
          "Meeting notices",
          "Annual meeting coordination",
          "Election assistance",
          "Document preparation",
          "Rule and regulation distribution",
          "Governing document maintenance",
          "Architectural request tracking",
          "Violation tracking",
          "Insurance documentation management",
        ],
      },
    ],
  },
  {
    title: "Financial Management",
    description:
      "Financial stability is the foundation of every successful association.",
    icon: Calculator,
    sections: [
      {
        label: "Our services include:",
        items: [
          "Annual budget preparation",
          "Monthly financial statements",
          "Income and expense tracking",
          "Reserve fund planning",
          "Assessment billing",
          "Collection management",
          "Delinquency monitoring",
          "Vendor payment processing",
          "Bank account reconciliation",
          "Check processing",
          "Financial forecasting",
          "Capital improvement budgeting",
          "CPA coordination",
          "Audit assistance",
          "Tax document coordination",
        ],
      },
      {
        label: "Monthly financial reports may include:",
        items: [
          "Balance Sheet",
          "Income Statement",
          "Budget Comparison",
          "Delinquency Report",
          "General Ledger",
          "Bank Reconciliation Summary",
          "Reserve Fund Summary",
        ],
      },
    ],
  },
  {
    title: "Maintenance Management",
    description:
      "We coordinate routine maintenance and emergency repairs to ensure your community remains safe, attractive, and well-maintained.",
    icon: Wrench,
    sections: [
      {
        label: "Services include:",
        items: [
          "Preventative maintenance scheduling",
          "Routine property inspections",
          "Landscaping oversight",
          "Snow removal coordination",
          "Parking lot maintenance",
          "Sidewalk repairs",
          "Roofing inspections",
          "Gutter maintenance",
          "Building exterior inspections",
          "Lighting inspections",
          "Common area cleaning",
          "Hallway maintenance",
          "Elevator service coordination",
          "Fire safety system inspections",
          "Pest control",
          "Waste removal coordination",
          "We document issues, obtain contractor proposals, monitor work quality, and verify project completion.",
        ],
      },
    ],
  },
  {
    title: "Vendor Management",
    description: "Finding reliable vendors takes time.",
    icon: Handshake,
    sections: [
      {
        label: "We manage the process by:",
        items: [
          "Obtaining competitive bids",
          "Reviewing proposals",
          "Coordinating contracts",
          "Monitoring contractor performance",
          "Scheduling maintenance",
          "Confirming insurance certificates",
          "Managing renewals",
          "Negotiating pricing",
          "Monitoring service quality",
        ],
      },
      {
        label: "Typical vendors include:",
        items: [
          "Landscapers",
          "Snow removal contractors",
          "Electricians",
          "Plumbers",
          "HVAC companies",
          "Roofing contractors",
          "General contractors",
          "Cleaning companies",
          "Fire alarm companies",
          "Elevator contractors",
          "Pest control",
          "Waste management",
          "Security companies",
        ],
      },
    ],
  },
  {
    title: "Board Support",
    description:
      "We provide the support board members need to make informed decisions.",
    icon: Users,
    sections: [
      {
        label: "Our team assists with:",
        items: [
          "Agenda preparation",
          "Meeting packets",
          "Board reports",
          "Meeting attendance",
          "Minutes preparation",
          "Policy implementation",
          "Project planning",
          "Reserve planning",
          "Capital improvement recommendations",
          "Compliance guidance",
          "Vendor recommendations",
          "We help board members focus on governing—not daily operations.",
        ],
      },
    ],
  },
  {
    title: "Homeowner Services",
    description:
      "Exceptional communication creates stronger communities.",
    icon: MessageSquare,
    sections: [
      {
        label: "Residents receive assistance with:",
        items: [
          "Maintenance requests",
          "General questions",
          "Rule clarification",
          "Account inquiries",
          "Move-in/move-out coordination",
          "Architectural applications",
          "Amenity reservations",
          "Parking issues",
          "Complaint resolution",
        ],
      },
    ],
  },
  {
    title: "Property Inspections",
    description:
      "Regular inspections help identify issues before they become costly repairs.",
    icon: SearchCheck,
    sections: [
      {
        label: "Inspection services include:",
        items: [
          "Exterior inspections",
          "Roof observations",
          "Common hallway inspections",
          "Basement inspections",
          "Mechanical room observations",
          "Drainage concerns",
          "Safety hazards",
          "Landscape evaluations",
          "Parking areas",
          "Sidewalk conditions",
          "Lighting inspections",
          "Inspection reports include photos and recommendations.",
        ],
      },
    ],
  },
  {
    title: "Emergency Response Coordination",
    description:
      "Property emergencies don’t follow business hours.",
    icon: Siren,
    sections: [
      {
        label:
          "Our team coordinates emergency response for situations including:",
        items: [
          "Water leaks",
          "Flooding",
          "Fire damage",
          "Storm damage",
          "Power outages",
          "Plumbing emergencies",
          "Security concerns",
          "Hazardous conditions",
          "We coordinate vendors and keep the Board informed throughout the process.",
        ],
      },
    ],
  },
  {
    title: "Compliance & Regulatory Assistance",
    description:
      "We assist associations in maintaining compliance with applicable governing documents and operational requirements.",
    icon: Building2,
    sections: [
      {
        label: "Services include:",
        items: [
          "Rule enforcement support",
          "Governing document guidance",
          "Annual document organization",
          "Insurance coordination",
          "Contractor certificate tracking",
          "Building inspection coordination",
          "Fire inspection coordination",
          "Permit coordination",
          "Record retention",
        ],
      },
    ],
  },
];

const capitalProjects = [
  "Roof replacement",
  "Siding replacement",
  "Window replacement",
  "Deck replacement",
  "Parking lot resurfacing",
  "Paving",
  "Drainage improvements",
  "Exterior painting",
  "Landscaping improvements",
  "Lighting upgrades",
];

const projectSteps = [
  "Bid solicitation",
  "Contractor selection",
  "Project oversight",
  "Progress updates",
  "Payment review",
  "Final walkthrough",
];

const financialReports = [
  "Monthly financial reports",
  "Budget performance",
  "Reserve balances",
  "Vendor expenses",
  "Collection reports",
  "Capital project updates",
  "Annual budget planning",
];

const technologyFeatures = [
  "Online owner portal",
  "Maintenance request submission",
  "Electronic document storage",
  "Online payments",
  "Community announcements",
  "Digital financial reporting",
  "Vendor communication",
  "Work order tracking",
];

const communities = [
  "Condominium Associations",
  "Townhome Communities",
  "Homeowners Associations",
  "Mixed-use Communities",
  "Small Condominium Associations",
  "Mid-size Residential Communities",
  "Investor-Owned Associations",
];

const managementPlans = [
  {
    title: "Full-Service HOA Management",
    description:
      "Complete operational, financial, maintenance, and administrative management.",
  },
  {
    title: "Financial Management Only",
    description: "Ideal for self-managed communities needing accounting support.",
  },
  {
    title: "Administrative Management",
    description:
      "Board support, meetings, homeowner communication, and records management.",
  },
  {
    title: "Maintenance Coordination",
    description: "Vendor management and maintenance oversight.",
  },
  {
    title: "Consulting Services",
    description: "Perfect for associations transitioning from self-management.",
  },
];

const faqs = [
  {
    question: "How often do you inspect properties?",
    answer:
      "Routine inspections are scheduled regularly, with additional visits for projects, emergencies, or board requests.",
  },
  {
    question: "Do you attend board meetings?",
    answer:
      "Yes. We attend scheduled board meetings and annual meetings as part of our management services.",
  },
  {
    question: "Can you help communities transition from self-management?",
    answer:
      "Absolutely. We assist with a smooth transition by organizing records, reviewing vendor contracts, transferring financial information, and establishing management procedures.",
  },
  {
    question: "Do you coordinate emergency repairs?",
    answer:
      "Yes. We work with qualified vendors to coordinate emergency response and communicate updates to the Board.",
  },
  {
    question: "Can you manage reserve projects?",
    answer:
      "Yes. We coordinate capital improvement projects from bidding through completion.",
  },
  {
    question: "Do homeowners communicate directly with Revital Moves?",
    answer:
      "Yes. Homeowners can contact our management team regarding maintenance requests, questions, and community concerns.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "HOA & Condominium/Townhouse Association Management",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: {
    "@type": "State",
    name: "Massachusetts",
  },
  serviceType: [
    "Homeowners Associations",
    "Condominium Associations",
    "Townhome Communities",
  ],
  url: `${siteConfig.url}/services/hoa-condo-management`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HoaCondoManagementPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#46464F]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />

        <section className="relative flex min-h-190 items-end overflow-hidden px-6 pb-20 pt-36 text-white md:min-h-[78vh] md:px-16 md:pb-24">
          <Image
            src="/services/s2.jpg"
            alt="Condominium Associations"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,60,0.96)_0%,rgba(0,0,60,0.78)_48%,rgba(0,0,60,0.2)_100%)]" />
          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[#DABE9B] sm:text-sm">
                Professional HOA Management Services Throughout Massachusetts
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
                HOA &amp; Condominium/Townhouse Association Management
              </h1>
              <div className="my-7 h-0.5 w-28 bg-[#DABE9B]" />
              <p className="max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
                At Revital Moves LLC, we provide comprehensive Homeowners
                Association (HOA) and Condominium Association management
                services designed to protect your community, preserve property
                values, and simplify day-to-day operations.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#DABE9B] px-6 py-3.5 font-semibold text-[#00003C] transition hover:bg-white"
                >
                  Contact us today
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#management-services"
                  className="inline-flex items-center justify-center rounded-lg border border-white/50 px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-[#00003C]"
                >
                  Our HOA Management Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8F6F2] px-6 py-20 md:px-16 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#A69177]">
                Our goal is simple:
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#00003C] sm:text-4xl lg:text-5xl">
                To keep your community running efficiently while allowing
                board members to focus on leadership—not daily management.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#616161]">
                Whether your association is a small self-managed condominium,
                a townhouse community, or a large residential development, our
                experienced management team serves as your trusted partner,
                handling everything from financial management and vendor
                coordination to maintenance oversight and homeowner
                communication.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#616161]">
                We become an extension of your Board of Trustees, helping your
                community operate efficiently while protecting long-term
                property values.
              </p>
            </div>

            <div className="rounded-3xl border border-[#DABE9B80] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,60,0.08)] sm:p-8">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00003C] text-[#DABE9B]">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#A69177]">
                    Why Choose Revital Moves LLC?
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-[#00003C]">
                    Our management approach provides:
                  </h3>
                </div>
              </div>
              <p className="mb-6 leading-7 text-[#616161]">
                Managing a homeowners association requires expertise in
                budgeting, maintenance planning, legal compliance, vendor
                management, and homeowner relations.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {advantages.map((advantage) => (
                  <li
                    key={advantage}
                    className="flex items-start gap-3 rounded-xl bg-[#F8F6F2] px-4 py-3 text-sm leading-6 text-[#46464F]"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#A69177]" />
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="management-services"
          className="scroll-mt-24 px-6 py-20 md:px-16 md:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#A69177]">
                Professional HOA Management Services Throughout Massachusetts
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[#00003C] sm:text-4xl lg:text-5xl">
                Our HOA Management Services
              </h2>
            </div>

            <div className="grid items-start gap-5 lg:grid-cols-2">
              {serviceGroups.map((service) => {
                const ServiceIcon = service.icon;

                return (
                  <details
                    key={service.title}
                    className="group rounded-2xl border border-[#DABE9B66] bg-white p-6 shadow-[0_14px_40px_rgba(0,0,60,0.05)] open:border-[#A69177] sm:p-7"
                  >
                    <summary className="flex cursor-pointer list-none items-start gap-4 [&::-webkit-details-marker]:hidden">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F8F2EB] text-[#A69177]">
                        <ServiceIcon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-semibold text-[#00003C] sm:text-2xl">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[#616161] sm:text-base">
                          {service.description}
                        </p>
                      </div>
                      <ChevronDown className="mt-2 h-5 w-5 shrink-0 text-[#A69177] transition-transform group-open:rotate-180" />
                    </summary>

                    <div className="mt-6 border-t border-[#DABE9B66] pt-5">
                      {service.sections.map((section, index) => (
                        <div
                          key={section.label ?? index}
                          className={index > 0 ? "mt-6" : undefined}
                        >
                          {section.label ? (
                            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#00003C]">
                              {section.label}
                            </h4>
                          ) : null}
                          <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                            {section.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 text-sm leading-6 text-[#616161]"
                              >
                                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#A69177]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#00003C] px-6 py-20 text-white md:px-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/15 bg-white/6 p-7 sm:p-9">
              <BarChart3 className="h-8 w-8 text-[#DABE9B]" />
              <h2 className="mt-6 text-3xl font-semibold">
                Financial Transparency
              </h2>
              <p className="mt-4 leading-7 text-gray-300">
                We believe every board should understand exactly where
                association funds are being spent.
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#DABE9B]">
                Our reporting includes:
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {financialReports.map((report) => (
                  <li
                    key={report}
                    className="flex items-start gap-2 text-sm leading-6 text-gray-300"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#DABE9B]" />
                    {report}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/6 p-7 sm:p-9">
              <Laptop className="h-8 w-8 text-[#DABE9B]" />
              <h2 className="mt-6 text-3xl font-semibold">
                Technology &amp; Communication
              </h2>
              <p className="mt-4 leading-7 text-gray-300">
                We utilize modern property management tools that improve
                communication between the Board, homeowners, vendors, and
                management.
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#DABE9B]">
                Features may include:
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {technologyFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm leading-6 text-gray-300"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#DABE9B]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#F8F6F2] px-6 py-20 md:px-16 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DABE9B80] bg-white text-[#A69177]">
                <HardHat className="h-7 w-7" />
              </div>
              <p className="mb-4 mt-7 text-sm uppercase tracking-[0.2em] text-[#A69177]">
                Capital Improvement Project Management
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[#00003C] sm:text-4xl">
                Large projects require careful planning.
              </h2>
              <p className="mt-5 leading-8 text-[#616161]">
                Services include:
              </p>
              <ol className="mt-8 grid gap-3 sm:grid-cols-2">
                {projectSteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#00003C]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00003C] text-xs text-[#DABE9B]">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="mb-5 leading-8 text-[#616161]">We assist with:</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {capitalProjects.map((project) => (
                  <div
                    key={project}
                    className="flex min-h-28 items-center justify-center rounded-2xl border border-[#DABE9B66] bg-white p-4 text-center text-sm font-semibold leading-6 text-[#00003C] shadow-[0_10px_30px_rgba(0,0,60,0.04)]"
                  >
                    {project}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-16 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#A69177]">
                Communities We Serve
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[#00003C] sm:text-4xl">
                We proudly manage:
              </h2>
              <p className="mt-5 leading-8 text-[#616161]">
                Whether your association has 6 units or 200+ units, we deliver
                professional management tailored to your community’s needs.
              </p>
              <ul className="mt-7 space-y-3">
                {communities.map((community) => (
                  <li key={community} className="flex items-center gap-3">
                    <Home className="h-4 w-4 text-[#A69177]" />
                    {community}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-[#F8F6F2] p-4 text-sm text-[#00003C]">
                <MapPin className="h-5 w-5 shrink-0 text-[#A69177]" />
                <div>
                  <p className="font-semibold">Serving Massachusetts Communities</p>
                  <p className="mt-1">
                    Revital Moves LLC proudly provides HOA and condominium
                    association management services throughout Massachusetts.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#A69177]">
                Customized Management Plans
              </p>
              <div className="space-y-3">
                {managementPlans.map((plan, index) => (
                  <div
                    key={plan.title}
                    className="grid gap-3 rounded-2xl border border-[#DABE9B66] p-5 sm:grid-cols-[48px_1fr] sm:items-start sm:p-6"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00003C] text-sm text-[#DABE9B]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-[#00003C]">
                        {plan.title}
                      </h3>
                      <p className="mt-2 leading-7 text-[#616161]">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8F6F2] px-6 py-20 md:px-16 md:py-28">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold text-[#00003C] sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-[#DABE9B66] bg-white px-5 py-4 sm:px-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-[#00003C] [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 shrink-0 text-[#A69177] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="max-w-3xl pt-4 leading-7 text-[#616161]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:px-16 md:py-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#00003C] px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
            <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border border-[#DABE9B40]" />
            <div className="absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#DABE9B80]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#DABE9B]">
                  Ready for Professional HOA Management?
                </p>
                <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  Whether your community is looking for full-service management,
                  financial support, or assistance transitioning from
                  self-management, Revital Moves LLC is here to help.
                </h2>
                <p className="mt-5 max-w-2xl leading-7 text-gray-300">
                  Contact us today to schedule a free consultation and learn how
                  we can simplify community management while protecting your
                  association’s long-term success.
                </p>
              </div>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#DABE9B] px-7 py-4 font-semibold text-[#00003C] transition hover:bg-white"
              >
                Contact us today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
