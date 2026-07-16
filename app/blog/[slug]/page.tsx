import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/header/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ReadyWhenYouAre from "@/components/hero/ReadyWhenYouAre";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { createPageMetadata, siteConfig } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return createPageMetadata({
    title: `${post.title} | Revital Moves`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/mainlogo/logo.png`,
      },
    },
  };

  return (
    <>
      <Navbar />
      <main className="bg-white text-[#00003C]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
          }}
        />
        <article>
          <header className="bg-[#F8F2EB] px-6 pb-16 pt-40 md:px-16">
            <div className="mx-auto max-w-4xl">
              <Link
                href="/blog"
                className="text-sm font-medium text-[#A69177] hover:underline"
              >
                <span aria-hidden="true">←</span> Back to all insights
              </Link>
              <p className="mt-10 text-sm uppercase tracking-[3px] text-[#A69177]">
                {post.category}
              </p>
              <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
                {post.title}
              </h1>
              <div className="mt-7 flex flex-wrap gap-4 text-sm text-[#616161]">
                <time dateTime={post.publishedAt}>
                  {dateFormatter.format(new Date(`${post.publishedAt}T00:00:00Z`))}
                </time>
                <span aria-hidden="true">•</span>
                <span>{post.readTime}</span>
                <span aria-hidden="true">•</span>
                <span>Revital Moves</span>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-6 py-16 md:px-0">
            <p className="font-serif text-2xl leading-10 text-[#46464F]">
              {post.excerpt}
            </p>

            {post.sections.map((section) => (
              <section key={section.heading} className="mt-12">
                <h2 className="font-serif text-3xl leading-tight">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5 text-lg leading-8 text-[#616161]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.points ? (
                  <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-[#616161] marker:text-[#A69177]">
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </article>
        <ReadyWhenYouAre />
      </main>
      <Footer />
    </>
  );
}
