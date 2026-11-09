"use client";

import { UpstashCounter } from "@/components/ui/upstash-counter";
import { useState } from "react";

export default function UpstashCounterDemo() {
  const [views, setViews] = useState(1234);

  return (
    <div className="flex min-h-[280px] w-full flex-col items-center justify-center gap-8 bg-background p-8">
      <UpstashCounter
        value={views}
        label="Page Views"
        size="lg"
        showControls
        onIncrement={() => setViews((c) => c + 1)}
        onDecrement={() => setViews((c) => Math.max(0, c - 1))}
      />

      <div className="flex items-center gap-12">
        <UpstashCounter value={15800} label="Users" format="compact" size="sm" />
        <UpstashCounter value={2500000} label="Requests" format="compact" size="sm" />
      </div>
    </div>
  );
}
