"use client";

import * as React from "react";
import { Check, LoaderCircle } from "lucide-react";

type FormProps = React.ComponentProps<"form">;

export type LivePreviewField = {
  name: string;
  label: React.ReactNode;
  type?: "text" | "email" | "tel" | "url";
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
};

export type LivePreviewValues = { [name: string]: string };

export type LivePreviewFormProps = {
  fields: LivePreviewField[];
  values: LivePreviewValues;
  onChange: (name: string, value: string) => void;
  renderPreview: (values: LivePreviewValues) => React.ReactNode;
  onSubmit?: (values: LivePreviewValues) => unknown;
  layout?: "auto" | "side" | "stack";
  submitLabel?: React.ReactNode;
  submittingLabel?: React.ReactNode;
  submittedLabel?: React.ReactNode;
  previewLabel?: React.ReactNode;
  className?: string;
  ref?: FormProps["ref"];
};

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const PreviewContext = React.createContext({ values: {} as LivePreviewValues, reduced: true });

function useReducedMotion() {
  const [reduced, setReduced] = React.useState(true);
  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return reduced;
}

export function PreviewValue({ name, placeholder, className = "", transform }: { name: string; placeholder: React.ReactNode; className?: string; transform?: (value: string) => string }) {
  const { values, reduced } = React.useContext(PreviewContext);
  const raw = values[name] ?? "";
  const value = transform ? transform(raw) : raw;
  const ref = React.useRef(null as HTMLSpanElement | null);
  const previousLength = React.useRef(value.length);
  React.useLayoutEffect(() => {
    const node = ref.current;
    const from = previousLength.current;
    previousLength.current = value.length;
    if (!node || reduced || value.length <= from) return;
    const chars = [...node.querySelectorAll("[data-char]")].slice(from);
    chars.forEach((char, i) => { if (typeof char.animate === "function") char.animate([{ opacity: 0, transform: "translateY(4px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 260, delay: Math.min(i, 12) * 28, easing: EASE, fill: "backwards" }); });
  }, [value]);
  if (!value) return <span data-preview={name} data-empty="true" className={`inline-block min-w-16 border-b border-dashed border-muted-foreground/50 text-muted-foreground/60 ${className}`}>{placeholder}</span>;
  return (
    <span ref={ref} data-preview={name} data-empty="false" className={`inline ${className}`}>
      {[...value].map((char, i) => <span key={`${i}-${char}`} data-char className="inline-block whitespace-pre">{char}</span>)}
    </span>
  );
}

export function LivePreviewForm({
  fields,
  values,
  onChange,
  renderPreview,
  onSubmit,
  layout = "auto",
  submitLabel = "Create",
  submittingLabel = "Saving…",
  submittedLabel = "Saved",
  previewLabel = "Preview",
  className = "",
  ref,
}: LivePreviewFormProps) {
  const reduced = useReducedMotion();
  const baseId = React.useId();
  const [status, setStatus] = React.useState("idle" as "idle" | "submitting" | "done");
  const cardRef = React.useRef(null as HTMLDivElement | null);
  const required = fields.filter((field) => field.required !== false);
  const filled = required.filter((field) => (values[field.name] ?? "").trim().length > 0).length;
  const complete = required.length > 0 && filled === required.length;
  const wasComplete = React.useRef(complete);

  React.useLayoutEffect(() => {
    const card = cardRef.current;
    const became = complete && !wasComplete.current;
    wasComplete.current = complete;
    if (!card || !became || reduced || typeof card.animate !== "function") return;
    card.animate([
      { transform: "translateY(0) scale(1)", boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
      { transform: "translateY(-6px) scale(1.015)", boxShadow: "0 24px 40px -16px rgb(0 0 0 / 0.25)", offset: 0.55 },
      { transform: "translateY(-3px) scale(1.01)", boxShadow: "0 16px 32px -16px rgb(0 0 0 / 0.2)" },
    ], { duration: 640, easing: EASE, fill: "forwards" });
  }, [complete]);

  React.useEffect(() => { if (!complete && status === "done") setStatus("idle"); }, [complete, status]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!complete || status === "submitting") return;
    setStatus("submitting");
    try { await onSubmit?.(values); setStatus("done"); } catch { setStatus("idle"); }
  };

  const grid = layout === "stack" ? "grid-cols-1" : layout === "side" ? "grid-cols-[minmax(0,1fr)_minmax(0,240px)]" : "grid-cols-1 @lg:grid-cols-[minmax(0,1fr)_minmax(0,240px)]";

  return (
    <PreviewContext.Provider value={{ values, reduced }}>
      <form ref={ref} data-slot="live-preview-form" data-complete={complete ? "true" : "false"} data-filled={filled} data-status={status} onSubmit={submit} noValidate className={`@container w-full ${className}`}>
        <div className={`grid items-start gap-5 ${grid}`}>
          <div className="space-y-3.5">
            {fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={`${baseId}-${field.name}`} className="mb-1.5 block text-xs font-medium">{field.label}</label>
                <input
                  id={`${baseId}-${field.name}`}
                  name={field.name}
                  type={field.type ?? "text"}
                  value={values[field.name] ?? ""}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  required={field.required !== false}
                  data-field={field.name}
                  onChange={(event) => onChange(field.name, event.target.value)}
                  className="h-10 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition-colors motion-reduce:transition-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            ))}
            <button type="submit" data-submit disabled={!complete || status !== "idle"} className={`inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl text-sm font-medium outline-none transition-[opacity,background-color,color] duration-300 motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card disabled:cursor-default ${status === "done" ? "bg-chart-2/15 text-foreground" : "bg-primary text-primary-foreground disabled:opacity-40"}`}>
              {status === "submitting" && <LoaderCircle className="size-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />}
              {status === "done" && <Check className="size-4 text-chart-2" aria-hidden="true" />}
              {status === "submitting" ? submittingLabel : status === "done" ? submittedLabel : submitLabel}
            </button>
            <p className="sr-only" aria-live="polite">{complete ? "Preview complete" : `${filled} of ${required.length} fields filled`}</p>
          </div>
          <div>
            {previewLabel && <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">{previewLabel}</p>}
            <div ref={cardRef} data-preview-card aria-hidden="true" className="rounded-2xl border border-border bg-card p-4 shadow-sm will-change-transform">
              {renderPreview(values)}
            </div>
          </div>
        </div>
      </form>
    </PreviewContext.Provider>
  );
}

export default LivePreviewForm;
