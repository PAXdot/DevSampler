"use client";

import { useEffect, useId, useRef, useState } from "react";
import { glide } from "./glide";

interface SegmentedOption {
  value: string;
  label: string;
}

interface SegmentedProps {
  /** What the choice is about. Visible by default; hideLabel keeps it for screen readers only. */
  label: string;
  hideLabel?: boolean;
  options: SegmentedOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  /** Form field name. Defaults to a unique id so separate controls never merge. */
  name?: string;
  disabled?: boolean;
  className?: string;
}

export default function Segmented({
  label,
  hideLabel = false,
  options,
  value,
  onValueChange,
  name,
  disabled = false,
  className,
}: SegmentedProps) {
  const uid = useId();
  const fieldName = name ?? uid;
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLSpanElement>(null);
  const [ready, setReady] = useState(false);
  // Clicks glide the thumb; arrow keys snap it (as the tabs do).
  const viaPointerRef = useRef(false);

  const place = (animate: boolean) => {
    if (!trackRef.current || !thumbRef.current) return;
    glide(
      thumbRef.current,
      trackRef.current.querySelector<HTMLElement>("input:checked")?.closest("label"),
      animate,
      240
    );
  };

  useEffect(() => {
    place(viaPointerRef.current);
    setReady(true);
  }, [value]);

  // Re-place on resize: stretching, wrapping, or first layout inside a dialog that opened after mount.
  useEffect(() => {
    if (!trackRef.current) return;
    const ro = new ResizeObserver(() => place(false));
    ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <fieldset className={["segmented", className].filter(Boolean).join(" ")} disabled={disabled}>
      <legend className={hideLabel ? "sr-only" : undefined}>{label}</legend>
      <div
        ref={trackRef}
        className="track"
        data-ready={ready ? "" : undefined}
        onPointerDown={() => (viaPointerRef.current = true)}
        onKeyDown={() => (viaPointerRef.current = false)}
      >
        <span className="thumb" aria-hidden="true" ref={thumbRef}></span>
        {options.map((o) => (
          <label className="segment" key={o.value}>
            <input
              type="radio"
              name={fieldName}
              value={o.value}
              checked={value === o.value}
              onChange={() => onValueChange?.(o.value)}
            />
            <span>{o.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
