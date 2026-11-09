import { useRef } from "react";
import {
  useThemeContext,
  usePal,
  tokens,
  motion,
  interactiveBase,
} from "@/components/ui/input-otp-utils/theme";

export default function InputOTP({
  length = 6,
  value = "",
  onChange,
  theme: tp,
}) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const refs = useRef([]);
  const digits = value.split("").concat(Array(length - value.length).fill(""));
  const allFilled = value.length === length;
  const handleChange = (i, v) => {
    if (v.length > 1) v = v[v.length - 1];
    const arr = [...digits];
    arr[i] = v;
    const next = arr.join("").slice(0, length);
    onChange?.(next);
    if (v && i < length - 1) refs.current[i + 1]?.focus();
  };
  const handlePaste = (e) => {
    const text = (e.clipboardData?.getData("text") || "")
      .replace(/\s/g, "")
      .slice(0, length);
    if (!text) return;
    e.preventDefault();
    onChange?.(text);
    refs.current[Math.min(text.length, length - 1)]?.focus();
  };
  const handleKey = (i, e) => {
    if (e.key === "Backspace" && !digits[i] && i > 0)
      refs.current[i - 1]?.focus();
  };
  return (
    <div style={{ display: "flex", gap: 8 }}>
      {digits.map((d, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          value={d}
          inputMode="numeric"
          autoComplete="one-time-code"
          aria-label={`Digit ${i + 1} of ${length}`}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKey(i, e)}
          onPaste={handlePaste}
          maxLength={2}
          style={{
            ...interactiveBase,
            width: 40,
            height: 48,
            textAlign: "center",
            ...tokens.type.lg,
            fontWeight: tokens.weight.semibold,
            fontFamily: tokens.font.mono,
            color: pal.text,
            background: pal.bgInput,
            borderRadius: tokens.radius.md,
            border: `1.5px solid ${allFilled ? pal.borderFocus : d ? pal.border : "transparent"}`,
            outline: "none",
            transition: `border-color ${motion.normal} ${motion.easeInOut}`,
          }}
        />
      ))}
    </div>
  );
}
