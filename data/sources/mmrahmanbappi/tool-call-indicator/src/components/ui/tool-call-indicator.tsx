"use client";
import * as React from "react";

export interface ToolCallIndicatorSource {
  name: string;
  color: string;
}

export interface ToolCallIndicatorProps {
  /** Sources that pop in one by one while the assistant is "searching" */
  sources?: ToolCallIndicatorSource[];
  /** Label shown in the pill while the search is in progress */
  loadingLabel?: string;
  /** Label shown in the pill once the search is done, receives the source count */
  doneLabel?: (count: number) => string;
  /** Final summary text shown under the sources */
  summary?: string;
  /** Run automatically on mount */
  autoPlay?: boolean;
  /** Show the "Run again" replay button */
  showReplay?: boolean;
  className?: string;
}

const DEFAULT_SOURCES: ToolCallIndicatorSource[] = [
  { name: "Weather Service", color: "#2563eb" },
  { name: "City Guide", color: "#0f766e" },
  { name: "Travel Forum", color: "#b45309" },
  { name: "News Daily", color: "#be123c" },
  { name: "Trip Blog", color: "#7c3aed" },
];

const DEFAULT_SUMMARY =
  "Expect light rain on Saturday morning, then clear skies. Pack a thin jacket.";

export default function ToolCallIndicator({
  sources = DEFAULT_SOURCES,
  loadingLabel = "Searching the web",
  doneLabel = (count) => `Searched ${count} sources`,
  summary = DEFAULT_SUMMARY,
  autoPlay = true,
  showReplay = true,
  className,
}: ToolCallIndicatorProps) {
  const [visibleCount, setVisibleCount] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [answer, setAnswer] = React.useState("");
  const [runId, setRunId] = React.useState(0);

  React.useEffect(() => {
    if (runId === 0 && !autoPlay) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    setVisibleCount(0);
    setDone(false);
    setAnswer("");

    sources.forEach((_, i) => {
      timers.push(
        setTimeout(
          () => {
            setVisibleCount((c) => c + 1);
          },
          600 * (i + 1),
        ),
      );
    });

    timers.push(
      setTimeout(
        () => {
          setDone(true);
          setAnswer(summary);
        },
        600 * (sources.length + 1),
      ),
    );

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runId]);

  function run() {
    setRunId((id) => id + 1);
  }

  return (
    <div className={["wrap", className].filter(Boolean).join(" ")}>
      <div className="ai">
        <div className="av" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width={16}
            height={16}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
          </svg>
        </div>
        <div className="bubble">
          <div className="tool">
            <span
              className={`pill${done ? " ok" : ""}`}
              role="status"
              aria-live="polite"
            >
              <span className="sp" aria-hidden="true" />
              <span>{done ? doneLabel(sources.length) : loadingLabel}</span>
            </span>
            <div className="srcs" aria-label="Sources">
              {sources.slice(0, visibleCount).map((s, i) => (
                <span className="src" key={s.name + i}>
                  <b style={{ background: s.color }}>{s.name[0]}</b>
                  <span>{s.name}</span>
                </span>
              ))}
            </div>
            <div>{answer}</div>
          </div>
        </div>
      </div>
      {showReplay && (
        <button className="replay" type="button" onClick={run}>
          Run again
        </button>
      )}
    </div>
  );
}
