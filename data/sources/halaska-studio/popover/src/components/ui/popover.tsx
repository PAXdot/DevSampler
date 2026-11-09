"use client";

import { useState, useRef } from "react";
import {
  tokens,
  motion,
  usePal,
  useThemeContext,
  withPopupState,
} from "@/components/ui/popover-utils/foundations";

export default function Popover({ trigger, children, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  return (
    <div
      ref={rootRef}
      style={{ position: "relative", display: "inline-flex" }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          e.stopPropagation();
          setOpen(false);
          rootRef.current
            ?.querySelector(
              "[data-popover-trigger] button, [data-popover-trigger] [tabindex]",
            )
            ?.focus();
        }
      }}
    >
      <div data-popover-trigger onClick={() => setOpen(!open)}>
        {withPopupState(trigger, open, "dialog")}
      </div>
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 9999 }}
        />
      )}
      <div
        role="dialog"
        aria-hidden={!open}
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          marginTop: 8,
          zIndex: 10000,
          background:
            theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: `1px solid ${pal.borderSubtle}`,
          borderRadius: tokens.radius.md,
          padding: 16,
          minWidth: 200,
          boxShadow: `0 8px 24px ${pal.shadowLg}`,
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-4px)",
          pointerEvents: open ? "auto" : "none",
          visibility: open ? "visible" : "hidden",
          transition: `opacity ${motion.fast} ${motion.easeOut}, transform ${motion.normal} ${motion.emphasized}, visibility 0s linear ${open ? "0s" : motion.normal}`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
