import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  /** Text in the middle of the line ("or"). */
  children?: ReactNode;
  className?: string;
}

export default function Separator({ orientation = "horizontal", children, className }: SeparatorProps) {
  if (children) {
    // With words it's just text between two lines; a separator's own content isn't read out.
    return <div className={cn("sp-labeled", className)}>{children}</div>;
  }
  if (orientation === "vertical") {
    return (
      <div className={cn("sp-line", "sp-vertical", className)} role="separator" aria-orientation="vertical" />
    );
  }
  return <hr className={cn("sp-line", className)} />;
}
