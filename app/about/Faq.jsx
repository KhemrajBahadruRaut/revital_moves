"use client"
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Lorem ipsum dolor sit amet, is this new add consectetur adipisicing elit, sed do eius mod tempor incid et dolore?",
      a: "Lorem ipsum answer content goes here."
    },
    {
      q: "Lorem ipsum dolor sit amet, is this new add consectetur adipisicing elit, sed do eius mod tempor incid et dolore?",
      a: "Lorem ipsum answer content goes here."
    },
    {
      q: "Lorem ipsum dolor sit amet, is this new add consectetur adipisicing elit, sed do eius mod tempor incid et dolore?",
      a: "Lorem ipsum answer content goes here."
    },
    {
      q: "Lorem ipsum dolor sit amet, is this new add consectetur adipisicing elit, sed do eius mod tempor incid et dolore?",
      a: "Lorem ipsum answer content goes here."
    }
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
