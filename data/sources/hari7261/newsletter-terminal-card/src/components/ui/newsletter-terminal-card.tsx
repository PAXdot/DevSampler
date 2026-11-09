// src/components/ui/component.tsx
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { useState } from "react";

export const Component = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("Subscribed successfully!");
    }, 1000);
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#1a1a1a] p-4 font-sans">
      {/* Background Gradient & Texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5d0d0] via-[#d69fb1] to-[#4a2c4f] opacity-90" />
      
      {/* Dot Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle at center, #000 1px, transparent 1px)`,
          backgroundSize: '8px 8px'
        }}
      />

      {/* The "Sun" Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#ffcdb2] to-[#e5989b] blur-2xl opacity-60"
      />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-xl bg-[#0f0f0f] shadow-2xl ring-1 ring-white/10"
      >
        {/* Window Bar */}
        <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-blue-400">
            <span className="opacity-50">//</span>
            <span>10</span>
            <span className="text-gray-400">Newsletter</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-10">
          {/* Command Line */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 flex items-center gap-2 font-mono text-xs text-gray-500"
          >
            <span className="text-pink-500">&gt;</span>
            <span>subscribe --weekly</span>
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block h-3 w-1.5 bg-gray-500"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4 text-4xl font-normal leading-tight text-white md:text-5xl"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}
          >
            One useful <br />
            email a week.
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8 max-w-sm font-mono text-xs leading-relaxed text-gray-400"
          >
            Workflows, prompts and tools we actually use. No spam, unsubscribe any time.
          </motion.p>

          {/* Form */}
          <motion.form 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            onSubmit={handleSubmit} 
            className="flex flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-gray-200 placeholder:text-gray-600 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "group flex items-center justify-center gap-2 rounded-md bg-[#ff4f18] px-6 py-3 font-mono text-sm font-semibold text-white transition-all hover:bg-[#ff6a3d] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
                "shadow-[0_0_20px_rgba(255,79,24,0.3)] hover:shadow-[0_0_25px_rgba(255,79,24,0.5)]"
              )}
            >
              {isSubmitting ? (
                <span className="animate-pulse">Subscribing...</span>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </motion.form>
        </div>

        {/* Subtle bottom gradient to match the image depth */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>
    </div>
  );
};