"use client";

import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Author {
  name: string;
  title?: string;
  avatar?: {
    src: string;
    alt: string;
  };
  href?: string;
}

interface Tag {
  label: string;
  href?: string;
}

interface BlogPost {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  summary: string;
  date?: string;
  readTime?: string;
  author?: Author;
  tags?: Tag[];
  href?: string;
}

interface Blog25Props {
  badge?: {
    label: string;
    variant?: "default" | "secondary" | "outline";
  };
  heading?: string;
  description?: string;
  featuredImage?: {
    src: string;
    alt: string;
  };
  posts?: BlogPost[];
  className?: string;
}

export const blog25Demo: Blog25Props = {
  badge: { label: "Featured", variant: "default" },
  heading: "Editor's Choice",
  description: "Handpicked articles by our editorial team.",
  featuredImage: {
    src: "https://cdn.21st.dev/assets/mirror/eb/eb72971ddb0be08e71403d3c9722f51ae373ab0601e4ef471aa9093e93a3d67a.jpg",
    alt: "Featured articles",
  },
  posts: [
    {
      image: {
        src: "https://cdn.21st.dev/assets/mirror/eb/eb72971ddb0be08e71403d3c9722f51ae373ab0601e4ef471aa9093e93a3d67a.jpg",
        alt: "Design systems",
      },
      title: "The Future of Design Systems",
      summary: "How design systems are evolving.",
      date: "January 15, 2026",
      readTime: "8 min",
      author: {
        name: "Lisa Park",
        title: "Senior Developer",
        avatar: {
          src: "https://cdn.21st.dev/assets/mirror/de/de4badb26643fd5e7bceecedd28ea8d63af081afacd584186c6794402f59e1ed.jpg",
          alt: "Lisa Park",
        },
      },
      tags: [{ label: "Design", href: "/block/post12" }],
      href: "/block/post12",
    },
    {
      image: {
        src: "https://cdn.21st.dev/assets/mirror/f3/f3ff3f857caa963e7ff7f4b020a3132e546e16d857b5ece5c5c696eea9ec03e3.jpg",
        alt: "API design",
      },
      title: "Building Scalable APIs",
      summary: "Best practices for API design.",
      date: "January 12, 2026",
      readTime: "12 min",
      author: {
        name: "David Chen",
        title: "Backend Engineer",
        avatar: {
          src: "https://cdn.21st.dev/assets/mirror/0d/0dc1fd9f35b29b9951db54cc13ab13cff705cf7a14e2acced5a9a46a42cccc59.jpg",
          alt: "David Chen",
        },
      },
      tags: [{ label: "Backend", href: "/block/post5" }],
      href: "/block/post5",
    },
    {
      image: {
        src: "https://cdn.21st.dev/assets/mirror/35/35de040272a07aaeb75730421ee4814c8fd62b965f1efe386ff3c1305439c314.jpg",
        alt: "React",
      },
      title: "React Performance Optimization",
      summary: "Strategies for faster apps.",
      date: "January 10, 2026",
      readTime: "10 min",
      author: {
        name: "Alex Turner",
        title: "Frontend Lead",
        avatar: {
          src: "https://cdn.21st.dev/assets/mirror/74/743bbc58298d16636c65be2d16d9a203c36815e325b861f0d3e2b52d146e83b1.jpg",
          alt: "Alex Turner",
        },
      },
      tags: [{ label: "React", href: "/block/post9" }],
      href: "/block/post9",
    },
    {
      image: {
        src: "https://cdn.21st.dev/assets/mirror/ec/ecb84c8eddc626abc12c4b77ce70dd31b6233ce4b205920b3fca88848d95d927.jpg",
        alt: "TypeScript",
      },
      title: "Advanced TypeScript Patterns",
      summary: "Make your codebase maintainable.",
      date: "January 8, 2026",
      readTime: "15 min",
      author: {
        name: "Maria Santos",
        title: "Tech Lead",
        avatar: {
          src: "https://cdn.21st.dev/assets/mirror/21/21b1763da3be34547eea3dcb44ddd9881c4a3fd8cd84fd2b8c7fd0617f22f607.jpg",
          alt: "Maria Santos",
        },
      },
      tags: [{ label: "TypeScript", href: "/block/post13" }],
      href: "/block/post13",
    },
  ],
};

export function Blog25({
  badge,
  heading,
  description,
  featuredImage,
  posts = [],
  className,
}: Blog25Props) {
  return (
    <section className={cn("py-16 md:py-24 w-full", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col">
            {(badge || heading || description) && (
              <div className="mb-8">
                {badge && (
                  <div className="mb-4">
                    <Badge variant={badge.variant ?? "default"}>
                      {badge.label}
                    </Badge>
                  </div>
                )}
                {heading && (
                  <h2 className="text-2xl font-semibold md:text-4xl">
                    {heading}
                  </h2>
                )}
                {description && (
                  <p className="mt-4 text-muted-foreground">{description}</p>
                )}
              </div>
            )}

            {featuredImage && (
              <div className="relative aspect-video overflow-hidden rounded-md lg:flex-1 lg:aspect-auto">
                <img
                  className="absolute inset-0 size-full object-cover"
                  src={featuredImage.src}
                  alt={featuredImage.alt}
                />
              </div>
            )}
          </div>

          <div className="space-y-0 divide-y">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group/blog25 py-4 first:pt-0 last:pb-0"
              >
                <Link
                  href={post.href ?? "#"}
                  className="flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    {post.tags?.[0] && (
                      <span className="mb-1 block text-xs font-medium text-primary">
                        {post.tags[0].label}
                      </span>
                    )}
                    <h3 className="mb-1 font-semibold transition-colors group-hover/blog25:text-primary">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {post.summary}
                    </p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      {post.date}
                      {post.readTime && ` · ${post.readTime}`}
                    </div>
                  </div>
                  <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover/blog25:translate-x-1 group-hover/blog25:text-primary" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog25;
