"use client"
import {
  FiHeart,
  FiLink,
  FiImage,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";
import Navbar from "../../components/header/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ReadyWhenYouAre from "../../components/hero/ReadyWhenYouAre";

export default function CareersSection() {
  const benefits = [
    {
      icon: <FiHeart />,
      title: "Purposeful Work",
      desc: "Help families through one of life's most meaningful transition",
    },
    {
      icon: <FiLink />,
      title: "Close-Knit Team",
      desc: "A small, experienced group that genuinely supports one another.",
    },
    {
      icon: <FiImage />,
      title: "Real Growth",
      desc: "Clear advancement paths and ongoing professional development.",
    },
    {
      icon: <FiShield />,
      title: "Full Benefits",
      desc: "Health, dental, retirement matching, and generous paid time off.",
    },
  ];

  const jobs = [1, 2, 3];

  return (
    <>
      <Navbar />
      {/* HERO */}
      <section className="relative h-screen sm:h-[70vh] flex items-center border pt-30">
        <img
          src="/services/s2.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#00003C]/20"></div>

        <div className="relative z-10 px-6 md:px-16 text-white max-w-2xl">
          <p className="text-sm tracking-widest text-[#DABE9B] uppercase mb-3">
            CAREER
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Build a career that genuinely helps people.{" "}
          </h1>
          <div className="w-40 border-b-2 border-[#DABE9B] z-10"></div>

          <p className="text-gray-300 mb-6 pt-5">
            We're growing thoughtfully, and we hire for character first. If you
            care about doing right by families, we'd love to hear from you.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#F8F2EB] py-14 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* TOP TITLE */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[3px] text-[#A69177] text-xs font-semibold mb-4">
              WHY WORK HERE
            </p>

            <h2 className="2xl sm:text-3xl md:text-4xl leading-tight text-[#00003C] font-semibold max-w-3xl mx-auto">
              A workplace built on the same values as our service.
            </h2>
          </div>

          {/* BENEFITS */}
          <div className="grid md:grid-cols-4 gap-6 mb-28">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl p-7"
                style={{
                  backgroundColor: "#DABE9B80",
                  border: "1px solid #DABE9B",
                }}
              >
                {/* ICON */}
                <div className="w-16 h-16 rounded-2xl border border-[#DABE9B] flex items-center justify-center text-[#DABE9B] text-2xl bg-[#F8F2EB] mb-8">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl text-[#00003C] font-semibold mb-4">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-[#46464F] leading-7 text-[15px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* OPEN ROLES */}
          <div className="text-center mb-14">
            <p className="uppercase tracking-[3px] text-[#A69177] text-xs font-semibold mb-4">
              OPEN ROLES
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#00003C] font-semibold">
              Currently Hiring
            </h2>
          </div>

          {/* JOB LIST */}
          <div className="space-y-7  max-w-5xl m-auto">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="border-b border-[#DABE9B] pb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
              >
                {/* LEFT */}
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-semibold text-[#00003C] mb-3">
                    Project Manager
                  </h3>

                  <p className="uppercase text-[#A69177] text-xs tracking-[2px] font-semibold mb-5">
                    FULL TIME | ON-SITE
                  </p>

                  <p className="text-[#46464F] leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua, quis nostrud exercitation ullamco laboris.
                  </p>
                </div>

                {/* BUTTON */}
                <button className="bg-[#A69177] text-white px-8 py-4 rounded-lg flex items-center gap-3 hover:opacity-90 transition w-fit">
                  LEARN MORE
                  <FiArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ReadyWhenYouAre/>
      <Footer />
    </>
  );
}
