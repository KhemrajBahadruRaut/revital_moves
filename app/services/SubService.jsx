"use client";

import {
  Phone,
  Home,
  User,
  ReceiptText,
  Star,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Phone size={28} />,
    title: "Consultation",
    desc: "We meet at the home, listen to your goals, and assess income potential.",
  },
  {
    number: "02",
    icon: <Home size={28} />,
    title: "Prepare the Home",
    desc: "Light staging, professional photos, and a market-ready price strategy.",
  },
  {
    number: "03",
    icon: <User size={28} />,
    title: "Place Tenants",
    desc: "Vetted applicants, signed lease, deposit collected and held in trust.",
  },
  {
    number: "04",
    icon: <ReceiptText size={28} />,
    title: "Manage & Report",
    desc: "Rent, repairs, inspections, and clear monthly reports handled for you.",
  },
];

export default function SubService() {
  return (
    <section className="w-full bg-[#F8F6F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-10 sm:pt-24 pb-10 sm:pb-28">
        {/* TOP TITLE */}
        <div className="text-center mb-8 sm:mb-24">
          <p className="uppercase tracking-[3px] text-sm text-[#A69177] mb-5">
            How It Works
          </p>

          <h2 className="text-[#00003C] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
            A simple, four-step path to passive income.
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* LINE */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-[#D9D9D9]" />

          {/* ITEMS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-10 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                {/* ICON */}
                <div className="w-10 h-10 sm:w-15 sm:h-15 md:w-20 md:h-20 rounded-full border border-[#D9D9D9] bg-white flex items-center justify-center text-[#00003C] mb-8">
                  {step.icon}
                </div>

                {/* NUMBER */}
                <span className="text-[#DABE9B] text-3xl font-serif mb-4">
                  {step.number}
                </span>

                {/* TITLE */}
                <h3 className="text-[#00003C] text-2xl font-serif mb-5">
                  {step.title}
                </h3>

                {/* DESC */}
                <p className="text-[#616161] text-base leading-8 max-w-xs">
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