"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { IconPlaceholder } from "@/components/ui/blog-3-utils/icon-placeholder";

const featured = {
  category: "Engineering",
  title: "How we cut API latency by 60% with edge caching",
  image:
    "https://cdn.21st.dev/assets/mirror/c8/c894c2bd61484440e20ce59d690902dc978262c43400a5eb72789e08bb5007aa.jpg",
  excerpt:
    "Our monolith was fast enough, until it wasn't. We traced the bottleneck to cold database reads on every request and rearchitected the caching layer in three weeks.",
  author: { name: "Lena Park", initials: "LP", img: 47 },
  date: "Jun 9, 2026",
  readTime: "7 Min Read",
};

const categories = [
  "All",
  "Engineering",
  "Design",
  "Product",
  "Company",
] as const;

const posts = [
  {
    category: "Design",
    title: "Building a token system that survives a rebrand",
    image:
      "https://cdn.21st.dev/assets/mirror/30/306f48b6359097357c62172e23becab108ddbf852bb944b9b1783219250768bd.jpg",
    excerpt:
      "Semantic tokens feel abstract until your brand color changes overnight.",
    author: { name: "Marcus Webb", initials: "MW", img: 12 },
    date: "May 28, 2026",
    readTime: "5 Min Read",
  },
  {
    category: "Product",
    title: "What 1,200 user interviews taught us about onboarding",
    image:
      "https://cdn.21st.dev/assets/mirror/8a/8a54ed424f08d3d8c9a634c111fb92bc7066b5dbb1bc701ecc8ee1a978eb5236.jpg",
    excerpt:
      "Drop-off at step two had nothing to do with the UI, it was a mental model gap.",
    author: { name: "Sofia Andrade", initials: "SA", img: 45 },
    date: "May 14, 2026",
    readTime: "9 Min Read",
  },
  {
    category: "Engineering",
    title: "Shipping a type-safe API layer without a build step",
    image:
      "https://cdn.21st.dev/assets/mirror/4e/4e235eed387a7868a218e4fbbc51af80d37cb8a06030273c2c5d41e3ce091e99.jpg",
    excerpt:
      "We replaced our codegen pipeline with inferred types and never looked back.",
    author: { name: "Devon Ross", initials: "DR", img: 13 },
    date: "May 2, 2026",
    readTime: "6 Min Read",
  },
  {
    category: "Company",
    title: "Why Acme is going remote-first in 2026",
    image:
      "https://cdn.21st.dev/assets/mirror/18/18b91c11d5e76aef735bb1ed896ac562c4058dfaaf6a110219cea15088942569.jpg",
    excerpt:
      "Three years of hybrid taught us where collaboration actually happens.",
    author: { name: "Priya Nair", initials: "PN", img: 44 },
    date: "Apr 19, 2026",
    readTime: "4 Min Read",
  },
  {
    category: "Design",
    title: "A practical guide to accessible color contrast",
    image:
      "https://cdn.21st.dev/assets/mirror/83/83e1fbccf7593d23be12525530591103414b7fe0d54dd78c536d298230b8531e.jpg",
    excerpt:
      "Pass WCAG without sacrificing the palette your brand team fought for.",
    author: { name: "Theo Lambert", initials: "TL", img: 15 },
    date: "Apr 5, 2026",
    readTime: "8 Min Read",
  },
  {
    category: "Product",
    title: "Pricing experiments that doubled our trial conversion",
    image:
      "https://cdn.21st.dev/assets/mirror/c6/c6c51783628e317008b03004640a273251c41c6373a6fc63738dc2d56df83965.jpg",
    excerpt:
      "Small framing changes on the pricing page moved the needle more than discounts.",
    author: { name: "Hana Kim", initials: "HK", img: 41 },
    date: "Mar 22, 2026",
    readTime: "5 Min Read",
  },
];

export default function BlogBlock() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const visible =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <section className="flex min-h-svh w-full justify-center bg-background px-6 py-16 text-foreground">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex flex-col gap-3">
          <Badge variant="secondary" className="w-fit">
            <IconPlaceholder
              lucide="Bookmark"
              tabler="IconBookmark"
              hugeicons="BookmarkIcon"
              phosphor="Bookmark"
              remixicon="RiBookmarkLine"
              data-icon="inline-start"
            />
            The Acme Blog
          </Badge>
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Stories from the team building Acme
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Engineering deep dives, design notes, and the product decisions
            behind the work we ship.
          </p>
        </div>

        <Card className="group mb-12 overflow-hidden p-0 md:grid md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden bg-muted md:aspect-auto md:h-full">
            <img
              src={featured.image}
              alt={featured.title}
              className="size-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
            />
            <span className="absolute top-4 right-4 flex items-center gap-1 rounded-4xl bg-background/85 px-2 py-0.5 text-xs font-medium text-foreground backdrop-blur-sm">
              <IconPlaceholder
                lucide="Clock"
                tabler="IconClock"
                hugeicons="TimeIcon"
                phosphor="Clock"
                remixicon="RiTimeLine"
                className="size-3"
              />
              {featured.readTime}
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <Badge className="w-fit">{featured.category}</Badge>
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {featured.title}
            </h2>
            <p className="text-muted-foreground">{featured.excerpt}</p>
            <div className="flex items-center gap-3">
              <Avatar className="size-9 border border-border">
                <AvatarImage
                  src={`https://i.pravatar.cc/150?img=${featured.author.img}`}
                  alt={featured.author.name}
                  className="grayscale"
                />
                <AvatarFallback>{featured.author.initials}</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">{featured.author.name}</p>
                <p className="text-muted-foreground">{featured.date}</p>
              </div>
            </div>
            <div>
              <Button render={<a href="#" />} nativeButton={false}>
                Read Article
                <IconPlaceholder
                  lucide="ArrowRight"
                  tabler="IconArrowRight"
                  hugeicons="ArrowRightIcon"
                  phosphor="ArrowRight"
                  remixicon="RiArrowRightLine"
                  data-icon="inline-end"
                />
              </Button>
            </div>
          </div>
        </Card>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = active === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-md border px-4 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {visible.map((post) => (
            <Card
              key={post.title}
              className="group flex h-full flex-col overflow-hidden p-0 transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="size-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
                <span className="absolute top-3 right-3 flex items-center gap-1 rounded-4xl bg-background/85 px-2 py-0.5 text-[11px] font-medium text-foreground backdrop-blur-sm">
                  <IconPlaceholder
                    lucide="Clock"
                    tabler="IconClock"
                    hugeicons="TimeIcon"
                    phosphor="Clock"
                    remixicon="RiTimeLine"
                    className="size-3"
                  />
                  {post.readTime}
                </span>
              </div>
              <CardHeader className="gap-2 px-5 pt-5">
                <Badge variant="secondary" className="w-fit">
                  {post.category}
                </Badge>
                <CardTitle className="text-lg leading-snug">
                  <a
                    href="#"
                    className="transition-colors group-hover:text-primary"
                  >
                    {post.title}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 px-5">
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="items-center gap-3 px-5 pb-5">
                <Avatar className="size-8 border border-border">
                  <AvatarImage
                    src={`https://i.pravatar.cc/150?img=${post.author.img}`}
                    alt={post.author.name}
                    className="grayscale"
                  />
                  <AvatarFallback className="text-xs">
                    {post.author.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 text-xs">
                  <p className="truncate font-medium text-foreground">
                    {post.author.name}
                  </p>
                  <p className="text-muted-foreground">{post.date}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
