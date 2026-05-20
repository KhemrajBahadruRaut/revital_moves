"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      q: "How do you find and screen tenants?",
      a: "We conduct thorough tenant screening that includes background checks, credit evaluations, rental history verification, and income confirmation. Our goal is to place reliable, qualified tenants who will respect your property and fulfill lease obligations responsibly.",
    },
    {
      q: "What are your management fees?",
      a: "Our management fee is a straightforward percentage of the monthly rent collected. We believe in complete transparency — no hidden charges, unnecessary add-on fees, or surprise costs. Detailed monthly financial reports are provided so you always know how your property is performing.",
    },
    {
      q: "Who handles maintenance and repairs?",
      a: "We coordinate all maintenance requests through a trusted network of licensed and insured vendors. From routine repairs to emergency situations, our team manages the entire process promptly and professionally, including 24/7 emergency response support when needed.",
    },
    {
      q: "How do you handle rent collection and late payments?",
      a: "We use secure and efficient rent collection systems designed to simplify payments for tenants and owners alike. If rent is delayed, we enforce lease terms professionally and follow all applicable legal procedures to help protect your investment and maintain consistent cash flow.",
    },
    {
      q: "What types of properties do you manage?",
      a: "We manage a variety of residential properties throughout Massachusetts, including single-family homes, condominiums, multi-family properties, and rental investments.",
    },
    {
      q: "How do you keep property owners informed?",
      a: "Communication and transparency are central to our approach. Owners receive regular updates, detailed financial reporting, maintenance notifications, and responsive support whenever questions or concerns arise.",
    },
    {
      q: "Why should I hire a professional property management company?",
      a: "Professional property management helps reduce stress, protect your investment, improve tenant retention, and streamline day-to-day operations. Our role is to handle the complexities of property ownership so you can enjoy the benefits without the constant demands on your time.",
    },
    {
      q: "What makes Revital Moves different?",
      a: "Revital Moves takes a boutique, relationship-driven approach to property management. We prioritize personalized service, proactive communication, and attentive care — treating every property with the same level of professionalism and responsibility we would expect for our own investments.",
    },
  ];

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 4);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-[35%_65%] gap-10 items-start">
        {/* LEFT */}
        <div>
          <p
            className="text-sm uppercase tracking-widest"
            style={{ color: "#DABE9B" }}
          >
            FAQs
          </p>

          <h2
            className="text-2xl md:text-5xl font-serif mt-3 leading-tight"
            style={{ color: "#00003C" }}
          >
            Frequently
            <br className="hidden sm:flex" />
            Asked
            <br />
            Questions
          </h2>

          <div
            className="mt-6 w-10 h-10 border flex items-center justify-center"
            style={{ borderColor: "#DABE9B" }}
          >
            <span style={{ color: "#00003C" }} className="rotate-45">
              ↗
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {displayedFaqs.map((item, i) => (
            <div
              key={i}
              className="border-b pb-4"
              style={{ borderColor: "#DABE9B" }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between gap-6 text-left"
              >
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: "#00003C" }}
                >
                  {item.q}
                </p>

                <span style={{ color: "#00003C" }}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              {openIndex === i && (
                <div
                  className="mt-4 text-sm md:text-base leading-7 opacity-80"
                  style={{ color: "#00003C" }}
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}

          {/* READ MORE / SHOW LESS BUTTON */}
          <div className="pt-4">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 border border-[#DABE9B] text-[#00003C] hover:bg-[#DABE9B] hover:text-white transition-all duration-300"
              >
                Read More
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowAll(false);
                  setOpenIndex(null);
                }}
                className="px-6 py-3 border border-[#DABE9B] text-[#00003C] hover:bg-[#DABE9B] hover:text-white transition-all duration-300"
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
