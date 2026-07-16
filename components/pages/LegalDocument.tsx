import Navbar from "@/components/header/navbar/Navbar";
import Footer from "@/components/footer/Footer";

type LegalSection = {
  heading: string;
  paragraphs: React.ReactNode[];
  points?: string[];
};

type LegalDocumentProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  updatedAt: string;
  sections: LegalSection[];
};

export default function LegalDocument({
  eyebrow,
  title,
  introduction,
  updatedAt,
  sections,
}: LegalDocumentProps) {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#00003C]">
        <header className="bg-[#F8F2EB] px-6 pb-14 pt-40 md:px-16">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm uppercase tracking-[3px] text-[#A69177]">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#616161]">
              {introduction}
            </p>
            <p className="mt-5 text-sm text-[#616161]">Last updated: {updatedAt}</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-6 py-16 md:px-0">
          {sections.map((section) => (
            <section key={section.heading} className="mb-12 scroll-mt-28">
              <h2 className="font-serif text-3xl">{section.heading}</h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-[#616161]">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.heading}-${index}`}>{paragraph}</p>
                ))}
              </div>
              {section.points ? (
                <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-[#616161] marker:text-[#A69177]">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
