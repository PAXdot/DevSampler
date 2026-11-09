import { cn } from "@/lib/utils";
import { ArrowRight, Check, Copy } from "lucide-react";
import { useState } from "react";

export const Component = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="w-full bg-black py-24 font-sans selection:bg-white selection:text-black sm:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        
        {/* Main CTA Card */}
        <div className="relative flex flex-col items-center overflow-hidden rounded-xl border border-white/[0.12] bg-[#050505] px-6 py-20 text-center sm:px-16 sm:py-24">
          
          {/* Subtle architectural structural line at the top */}
          <div className="absolute left-0 top-0 h-[1px] w-full bg-white/[0.15]" />

          <h2 className="max-w-2xl text-balance text-4xl font-medium tracking-tighter text-white sm:text-5xl md:text-6xl">
            Start building today.
          </h2>
          
          <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-neutral-400 sm:text-lg">
            Deploy your infrastructure in seconds. No complex configuration, no credit card required. Just raw performance out of the box.
          </p>

          <div className="mt-10 flex w-full max-w-md flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-medium text-black transition-all hover:bg-neutral-200 active:scale-[0.98] sm:w-auto">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
            
            <button className="flex h-11 w-full items-center justify-center rounded-md border border-white/[0.12] bg-transparent px-6 text-sm font-medium text-white transition-all hover:bg-white/[0.05] active:scale-[0.98] sm:w-auto">
              Read Documentation
            </button>
          </div>

          {/* Quick Install Snippet - Adds to the developer/real-world aesthetic */}
          <div className="mt-12 flex items-center justify-between rounded-md border border-white/[0.08] bg-black p-1.5 pl-4 transition-colors hover:border-white/[0.15]">
            <code className="mr-6 font-mono text-[13px] text-white">
              <span className="text-neutral-500">$</span> npm create leadmeta@latest
            </code>
            <button
              onClick={handleCopy}
              className="flex h-8 w-8 items-center justify-center rounded bg-white/[0.04] text-neutral-400 transition-colors hover:bg-white/[0.1] hover:text-white"
              aria-label="Copy install command"
            >
              {hasCopied ? (
                <Check className="h-3.5 w-3.5 text-white" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};