"use client";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const HoverCardTooltipDemo = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant="outline">Hover Blog Tooltip</Button>
      </HoverCardTrigger>
      <HoverCardContent className="p-0 overflow-hidden">
        <div>
          <img
            src="https://cdn.21st.dev/assets/mirror/2b/2b2f6310df78aaf81f1c72b886a532f7539e128a5340ce4c3ad161b97b8cf005.jpg"
            alt="Tooltip image"
            className="w-full"
          />
          <div className="p-3 flex flex-col gap-2">
            <p className="text-sm font-medium">About Blog</p>
            <p className="text-muted-foreground text-xs">
              This blog is a space where ideas, insights, and practical
              knowledge come together.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardTooltipDemo;
