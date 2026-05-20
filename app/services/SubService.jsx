"use client";

import {
  ClipboardCheck,
  FileText,
  Wrench,
  Landmark,
  Megaphone,
  Headphones,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Megaphone size={28} />,
    title: "Property Marketing & Leasing",
    desc: "We market your property with professional photography, strategic pricing, and multi-platform listings to attract qualified tenants quickly and reduce vacancy periods.",
  },
  {
    number: "02",
    icon: <ClipboardCheck size={28} />,
    title: "Tenant Screening & Placement",
    desc: "We conduct thorough background checks, credit evaluation, rental history verification, and income validation to ensure reliable, long-term tenants.",
  },
  {
    number: "03",
    icon: <FileText size={28} />,
    title: "Lease Management & Legal Compliance",
    desc: "We prepare, manage, and enforce lease agreements in full compliance with Massachusetts landlord-tenant laws, protecting your property at every stage.",
  },
  {
    number: "04",
    icon: <Landmark size={28} />,
    title: "Rent Collection & Financial Management",
    desc: "We handle automated rent collection, direct deposits, and provide clear monthly financial statements for full transparency and accountability.",
  },
  {
    number: "05",
    icon: <Wrench size={28} />,
    title: "Maintenance & Property Care",
    desc: "We coordinate all maintenance and repairs through a trusted network of licensed and insured contractors, ensuring fast and reliable service.",
  },
  {
    number: "06",
    icon: <Headphones size={28} />,
    title: "24/7 Tenant & Emergency Support",
    desc: "We manage all tenant communication and emergency requests so you never have to deal with late-night issues or operational stress.",
  },
];

export default function SubService() {
  return (
    <section className="w-full bg-[#F8F6F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-10 sm:pt-24 pb-10 sm:pb-28">
        {/* TOP TITLE */}
        <div className="text-center mb-12 sm:mb-24">
          <p className="uppercase tracking-[3px] text-sm text-[#A69177] mb-5">
            Services
          </p>

          <h2 className="text-[#00003C] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight max-w-5xl mx-auto">
            Comprehensive property management services designed for modern
            property owners.
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* TOP LINE */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-[#D9D9D9]" />

          {/* BOTTOM LINE */}
          <div className="hidden lg:block absolute top-125 left-0 w-full h-px bg-[#D9D9D9]" />

          {/* ITEMS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-10 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center"
              >
                {/* ICON */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#D9D9D9] bg-white flex items-center justify-center text-[#00003C] mb-8">
                  {step.icon}
                </div>

                {/* NUMBER */}
                <span className="text-[#DABE9B] text-3xl font-serif mb-4">
                  {step.number}
                </span>

                {/* TITLE */}
                <h3 className="text-[#00003C] text-xl lg:text-2xl font-serif mb-5 leading-snug">
                  {step.title}
                </h3>

                {/* DESC */}
                <p className="text-[#616161] text-sm lg:text-base leading-7 max-w-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}