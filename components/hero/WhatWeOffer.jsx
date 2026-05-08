"use client";

import {
  Search,
  ShieldCheck,
  Wrench,
  DollarSign,
  BadgeDollarSign,
  Headphones,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: <Search size={28} />,
    title: "Tenant Screening & Placement",
    desc: "Thorough background, credit, and rental history checks ensure only reliable, long-term tenants occupy your property.",
  },
  {
    number: "02",
    icon: <ShieldCheck size={28} />,
    title: "Lease Management & Legal Compliance",
    desc: "We draft, renew, and enforce leases in full compliance with local landlord-tenant laws protecting you at every stage.",
  },
  {
    number: "03",
    icon: <Wrench size={28} />,
    title: "Maintenance & Repairs",
    desc: "A vetted network of contractors handles all maintenance requests promptly keeping your property in top condition year-round.",
  },
  {
    number: "04",
    icon: <DollarSign size={28} />,
    title: "Rent Collection & Financial Reporting",
    desc: "Automated rent collection, direct deposits to your account, and detailed monthly statements full transparency, always.",
  },
  {
    number: "05",
    icon: <BadgeDollarSign size={28} />,
    title: "Property Marketing & Listing",
    desc: "Professional photography, listing syndication across top rental platforms, and strategic pricing to minimize vacancy periods.",
  },
  {
    number: "06",
    icon: <Headphones size={28} />,
    title: "24/7 Tenant Support",
    desc: "Round-the-clock communication with tenants for emergencies and queries so you never get a late-night call.",
  },
];

export default function RentalManagementSection() {
  return (
    <section
      className="w-full py-20 px-5 md:px-10 lg:px-16  "
      style={{
        background:
          "linear-gradient(90deg, #00003C 0%, #00003CB2 50%, #00003C 100%)",
      }}
    >
      {/* TOP SECTION */}
      <div className="max-w-7xl m-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14">
          <div>
            <p className="uppercase tracking-[3px] text-sm text-[#DABE9B] mb-4">
              What We Offer
            </p>

            <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-serif leading-tight max-w-4xl">
              Full-service rental management,
              <br />
              designed around your family.
            </h2>
          </div>

          <button className="group flex items-center gap-2 text-[#DABE9B] text-lg border-b border-[#DABE9B] w-fit pb-1">
            Learn more
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 duration-300"
            />
          </button>
        </div>

        {/* SERVICES BOX */}
        <div
          className="rounded-xl overflow-hidden border"
          style={{
            borderColor: "#DABE9B30",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="relative p-5 sm:p-10 min-h-85">
                {/* RIGHT BORDER */}
                {index !== 2 && index !== 5 && (
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-[70%]"
                    style={{
                      backgroundColor: "#DABE9B66",
                    }}
                  />
                )}

                {/* BOTTOM BORDER */}
                {index < 3 && (
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-full"
                    style={{
                      backgroundColor: "#DABE9B66",
                    }}
                  />
                )}
                {/* NUMBER */}
                <span className="text-[#DABE9B] text-lg sm:text-2xl md:text-4xl font-serif block  mb-3 sm:mb-10">
                  {service.number}
                </span>

                {/* ICON BOX */}
                <div
                  className="w-8 h-8 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-[#DABE9B] mb-8"
                  style={{
                    border: "1px solid #DABE9B80",
                    boxShadow: "0 0 20px #DABE9B40",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                  }}
                >
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-white text-lg sm:text-3xl leading-snug font-serif mb-6">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="text-[#d6d6e7] text-base leading-8 max-w-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
