import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/header/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { blogPosts } from "@/lib/blog";
import { createPageMetadata, pageKeywords } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Property Management Insights | Revital Moves Blog",
  description:
    "Read practical property management insights from Revital Moves about leasing, tenant support, rental maintenance, and protecting Massachusetts properties.",
  path: "/blog",
  keywords: pageKeywords.blog,
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F8F6F2] text-[#00003C]">
        <section className="bg-[#00003C] px-6 pb-20 pt-40 text-white md:px-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-sm uppercase tracking-[3px] text-[#DABE9B]">
              Revital Moves Blog
            </p>
            <h1 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
              Practical guidance for confident property ownership.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Clear, useful perspectives on leasing, property care, tenant
              support, and the systems behind dependable rental management.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 md:px-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-2xl border border-[#DABE9B80] bg-white p-7 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[2px] text-[#A69177]">
                  {post.category}
                </p>
                <h2 className="mt-4 font-serif text-2xl leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition hover:text-[#A69177]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 grow leading-7 text-[#616161]">
                  {post.excerpt}
                </p>
                <div className="mt-7 flex items-center justify-between border-t border-[#DABE9B80] pt-5 text-sm text-[#616161]">
                  <time dateTime={post.publishedAt}>
                    {dateFormatter.format(new Date(`${post.publishedAt}T00:00:00Z`))}
                  </time>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex w-fit border-b border-[#A69177] pb-1 font-medium text-[#A69177]"
                >
                  Read article <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
