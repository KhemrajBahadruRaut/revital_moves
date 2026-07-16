import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/seo";

const publicRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
  { path: "/consultation", changeFrequency: "monthly", priority: 0.9 },
  { path: "/career", changeFrequency: "weekly", priority: 0.6 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = publicRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date("2026-07-16"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...posts];
}
