import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility Function (Same as shadcn/ui) ---
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- AuroraCard Component ---
const AuroraCard = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    /**
     * Handles the mouse move event to update CSS variables
     * for the aurora's position.
     * @param {React.MouseEvent<HTMLDivElement>} e - The mouse event.
     */
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn(
          "group relative w-full overflow-hidden rounded-xl p-[1px]",
          "bg-zinc-800", // Fallback background
          "transition-all duration-300 ease-in-out",
          // The background gradient that will act as the glowing border
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
          className,
        )}
        {...props}
      >
        {/* Inner div for the actual content, creating the "border" effect */}
        <div className="relative z-10 h-full w-full rounded-[11px] bg-zinc-900/90 p-6 backdrop-blur-sm">
          {/* The Aurora Effect */}
          <div
            className={cn(
              "absolute inset-0 z-0",
              "opacity-0 transition-opacity duration-500 group-hover:opacity-100",
              "pointer-events-none",
            )}
            style={{
              background:
                "radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(192, 132, 252, 0.2), transparent 80%)",
            }}
          />
          {children}
        </div>
      </div>
    );
  },
);
AuroraCard.displayName = "AuroraCard";

export default AuroraCard;
