import { useState } from "react";
import {
  tokens,
  motion,
  useThemeContext,
  usePal,
} from "@/components/ui/hover-card-utils/theme";

export default function HoverCard({ trigger, children, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [show, setShow] = useState(false);
  return (
    <div
      style={{ position: "relative", display: "inline-flex" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setShow(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setShow(false);
      }}
    >
      {trigger}
      <div
        aria-hidden={!show}
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          marginTop: 8,
          zIndex: 100,
          background:
            theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: `1px solid ${pal.borderSubtle}`,
          borderRadius: tokens.radius.md,
          padding: 16,
          minWidth: 240,
          boxShadow: `0 8px 24px ${pal.shadowLg}`,
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(-4px)",
          pointerEvents: show ? "auto" : "none",
          visibility: show ? "visible" : "hidden",
          transition: `opacity ${motion.normal} ${motion.easeOut}, transform ${motion.normal} ${motion.emphasized}, visibility 0s linear ${show ? "0s" : motion.normal}`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
