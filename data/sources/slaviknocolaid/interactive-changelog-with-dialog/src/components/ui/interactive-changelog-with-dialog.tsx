"use client";

import { Copy, ExternalLink, GitPullRequest, Maximize2 } from "lucide-react";
import { MeshGradient, Dithering } from "@paper-design/shaders-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const releases = [
  {
    title: "v3.0.0: Major UI Refresh & New Integrations",
    date: "May 15, 2025",
    image: "https://cdn.21st.dev/assets/mirror/30/30bcfaba9176f56d995521125bb0cc7ed48375340615627d6f118504faeaa7db.png",
    excerpt:
      "This major release introduces a redesigned interface for a more intuitive experience, plus integrations with leading third-party platforms.",
    contributors: [
      "https://cdn.21st.dev/assets/mirror/0a/0a9b952b617280c373c98b69885f21070580f6f20acb4f10dcdbe9f7b8f7a9d4.svg",
      "https://cdn.21st.dev/assets/mirror/58/5803cb3056620d35aaa686ded11c53c385d035decb0b3c8aaf5633f90427d6e9.svg",
      "https://cdn.21st.dev/assets/mirror/cd/cdb91a7140b69f3e0830b6b1b86c19a6b60244ed9c2fffbfafe6862873e39894.svg",
      "https://cdn.21st.dev/assets/mirror/1e/1ebcf9a58379bed88b0bd5818784116999ed844fcb512a2120f68ae401f7b844.svg",
    ],
    content: (
      <div className="prose dark:prose-invert">
        <h3>Refreshed User Interface</h3>
        <p>
          A lighter, faster UI with improved accessibility and responsiveness.
        </p>
        <ul>
          <li>New typography and icon system</li>
          <li>Reorganized navigation and controls</li>
          <li>Configurable dashboard panels</li>
        </ul>
        <h4>Enhanced Integrations</h4>
        <p>
          Seamless connections for Slack, Drive, and Trello to boost workflow
          efficiency.
        </p>
      </div>
    ),
  },
  {
    title: "v2.9.5: Performance Boost & API Enhancements",
    date: "April 02, 2025",
    image: "https://cdn.21st.dev/assets/mirror/0d/0d7ab6e96249f6d408178fa3c8ab54959252b472eea3fd2792a9eeb7d16fbada.png",
    excerpt:
      "This release brings a performance overhaul and introduces new API endpoints for advanced analytics and automation.",
    contributors: [
      "https://cdn.21st.dev/assets/mirror/6e/6e919c3fd9d4b54db5ee630c56972942f6c62dcdf52b092421a46823e3badb41.svg",
      "https://cdn.21st.dev/assets/mirror/62/62ff48a1a0c07cde1a381ea5c8298a6d322fa37d8e8445a9c3f9ebc4fee95ee5.svg",
      "https://cdn.21st.dev/assets/mirror/86/86ba8fa05bed137e51e22c3560f42071b908214871ea1e3532cabeb2b9b98b29.svg",
      "https://cdn.21st.dev/assets/mirror/dd/ddf812c88171ee34938909bce3a640d878191e9c7856ced5273502aef3093ee1.svg",
      "https://cdn.21st.dev/assets/mirror/c3/c399a60ca0f4f3bc2d3a61f9999eabd6f24952b80e8e47ff0c53eb06447c6da1.svg",
    ],
    content: (
      <div className="prose dark:prose-invert">
        <h3>Performance Overhaul</h3>
        <ul>
          <li>Reduced load time by 35%</li>
          <li>Improved caching and query batching</li>
          <li>Faster image preloading</li>
        </ul>
        <h4>API Enhancements</h4>
        <ul>
          <li>New analytics endpoints</li>
          <li>Improved role-based permissions</li>
          <li>Expanded webhooks for automation</li>
        </ul>
      </div>
    ),
  },
];

export const Component = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* shader header full-width */}
      <div className="relative w-full overflow-hidden">
        <MeshGradient
          colors={["#5b00ff", "#00ffa3", "#ff9a00", "#ea00ff"]}
          swirl={0.55}
          distortion={0.85}
          speed={0.1}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />
        <Dithering
          colors={["#ffffff", "#f2f2f2", "#eaeaea"]}
          intensity={0.18}
          shape="simplex"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/30" />

        <div className="relative container mx-auto px-4 py-12 text-left">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-medium text-white/80">
              <GitPullRequest className="size-4" />
              <p>Changelog</p>
            </div>
            <h1 className="text-4xl font-semibold text-white leading-snug">
              Latest Enhancements
              <br /> & Platform News
            </h1>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="grid justify-center container mx-auto px-4  border-x border-border">
        {releases.map((item, idx) => (
          <Dialog key={idx}>
            <div className="relative flex flex-col lg:flex-row w-full py-16 gap-6 lg:gap-0">
              <div className="lg:sticky top-2 h-fit">
                <time className="text-muted-foreground w-36 text-sm font-medium lg:absolute">
                  {item.date}
                </time>
              </div>

              <div className="flex max-w-prose flex-col gap-4 lg:mx-auto">
                <h3 className="text-3xl font-medium lg:pt-10 lg:text-3xl">{item.title}</h3>
                <DialogTrigger asChild>
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="border-border max-h-96 w-full rounded-lg border object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-lg" />
                  </div>
                </DialogTrigger>
                <p className="text-muted-foreground text-sm font-medium">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center -space-x-2">
                      {item.contributors.slice(0, 3).map((src, id) => (
                        <img
                          key={id}
                          src={src}
                          alt="Contributor"
                          className="border-border size-6 rounded-full border"
                        />
                      ))}
                    </div>
                    {item.contributors.length > 3 && (
                      <span className="text-muted-foreground text-sm font-medium">
                        +{item.contributors.length - 3} contributors
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Maximize2 className="size-4" />
                            </Button>
                          </DialogTrigger>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Show full release</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Copy className="size-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Copy link</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <ExternalLink className="size-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Open in new tab</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>

              <div className="bg-border absolute bottom-0 left-0 right-0 h-px w-[200vw] -translate-x-1/2" />
            </div>

            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-prose">
              <DialogHeader>
                <DialogTitle className="text-left">{item.title}</DialogTitle>
                <DialogDescription className="text-left">
                  {item.excerpt}
                </DialogDescription>
              </DialogHeader>
              <img
                src={item.image}
                alt={item.title}
                className="border-border max-h-96 w-full rounded-lg border object-cover"
              />
              {item.content}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};
