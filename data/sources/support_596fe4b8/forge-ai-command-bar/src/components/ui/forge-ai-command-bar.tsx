"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function AiCommandBar() {
  const [value, setValue] = useState("");
  return (
    <motion.div
      layout
      className="rounded-3xl border border-border bg-card p-4 shadow-sm backdrop-blur-xl"
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        placeholder="Describe the UI you need…"
      />
    </motion.div>
  );
}

export default AiCommandBar;
