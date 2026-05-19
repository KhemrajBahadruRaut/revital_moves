"use client";

import {
  Heart,
  ShieldCheck,
  Handshake,
} from "lucide-react";

export default function WhyChooseUs() {
  const data = [
    {
      id: "01",
      title: "Devotion over transactions",
      description:
        " Your property is a legacy, not just an investment.",
      icon: <Heart className="w-8 h-8 text-[#D2B48C]" strokeWidth={1.5} />,
    },
    {
      id: "02",
      title: "White-glove service",
      description:
        "Every detail managed with sophistication and care.",
      icon: (
        <ShieldCheck
          className="w-8 h-8 text-[#D2B48C]"
          strokeWidth={1.5}
        />
      ),
    },
    {
      id: "03",
      title: "Complete peace of mind",
      description:
        "MNo late-night calls, no unexpected surprises, no hidden fees.",
      icon: <Handshake className="w-8 h-8 text-[#D2B48C]" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="w-full bg-[#F8F2EB] py-5 sm:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* TOP CONTENT */}
        <div className="text-center mb-8">
          <p className="uppercase tracking-[4px] text-[10px] sm:text-sm text-[#A69177] mb-4">
            Why Choose Us
          </p>

          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-[#00003C] leading-tight">
            Our Promise to You
          </h2>
        </div>

        {/* ROWS */}
        <div className="flex flex-col">
          {data.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-10 items-center gap-3 py-10 ${
                index !== data.length - 1
                  ? "border-b border-[#D8C8B6]"
                  : ""
              }`}
            >
              {/* NUMBER */}
              <div className="md:col-span-1">
                <span className="text-3xl font-medium text-[#A69177]">
                  {item.id}
                </span>
              </div>

              {/* ICON */}
              <div className="md:col-span-2">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#E6D7C8] shadow-sm flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              {/* TITLE */}
              <div className="md:col-span-3">
                <h3 className="text-xl md:text-2xl font-medium text-[#00003C] leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <div className="md:col-span-4">
                <p className="text-lg leading-9 text-[#46464F] max-w-3xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}