import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn("animate-spin text-muted-foreground", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export function Pattern() {
  return (
    <div className="w-full max-w-xs space-y-2">
      <label htmlFor="search-loading" className="text-sm font-medium">
        Searching
      </label>
      <div className="relative">
        <Input
          id="search-loading"
          placeholder="Search records…"
          className="pr-9"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <Spinner className="size-4" />
        </span>
      </div>
    </div>
  );
}
export default Pattern;
