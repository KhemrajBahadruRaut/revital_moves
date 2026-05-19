"use client"
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
       {
      q: "How do you find and screen tenants?",
      a: "We conduct thorough background, credit, and rental history checks on every applicant. We also verify income and employment to ensure only reliable, long-term tenants occupy your property. You get peace of mind – we do the vetting."
    },
    {
      q: "What are your fees and how do you get paid?",
      a: "Our management fee is a simple percentage of the monthly rent collected. We only get paid when you get paid. There are no hidden fees, and we provide detailed monthly statements for complete transparency."
    },
    {
      q: "Who handles maintenance and repairs?",
      a: "We have a vetted network of licensed, insured contractors who respond promptly to all maintenance requests. For emergencies, we are available 24/7. You never receive late-night calls – we handle everything."
    },
     {
      q: "How do you handle rent collection and late payments?",
      a: "We use automated rent collection systems that deposit rent directly into your account. If a tenant pays late, we enforce lease terms including late fees and follow legal procedures to protect your income."
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-[35%_65%] gap-10 items-start">
        {/* LEFT */}
        <div>
          <p className="text-sm uppercase tracking-widest" style={{ color: "#DABE9B" }}>
            FAQs
          </p>

          <h2 className="text-2xl md:text-5xl font-serif mt-3 leading-tight" style={{ color: "#00003C" }}>
            Frequently <nbsp/>
            <br  className="hidden sm:flex"/>
            Asked
            <br />
            Questions
          </h2>

          <div className="mt-6 w-10 h-10 border flex items-center justify-center" style={{ borderColor: "#DABE9B" }}>
            <span style={{ color: "#00003C" }} className="rotate-45">
              ↗
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div key={i} className="border-b pb-4" style={{ borderColor: "#DABE9B" }}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between gap-6 text-left"
              >
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#00003C" }}>
                  {item.q}
                </p>
                <span style={{ color: "#00003C" }}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              {openIndex === i && (
                <div className="mt-3 text-sm opacity-80" style={{ color: "#00003C" }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
