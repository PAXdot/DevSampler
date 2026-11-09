import { Zap, Shield, BarChart3, Globe } from "lucide-react";

const tiles = [
  {
    icon: Zap,
    label: "Deploy in seconds",
    body: "Push once. Your stack is live before the next standup starts.",
    accent: "text-amber-500",
  },
  {
    icon: Shield,
    label: "Zero-trust security",
    body: "Every request validated at the edge — no exceptions.",
    accent: "text-emerald-500",
  },
  {
    icon: BarChart3,
    label: "Live metrics",
    body: "Latency, error rates, and throughput visible in real time.",
    accent: "text-sky-500",
  },
  {
    icon: Globe,
    label: "Global CDN",
    body: "Assets cached across 300+ PoPs with automatic invalidation.",
    accent: "text-violet-500",
  },
];

export default function Bento01() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="mb-12 max-w-lg">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Platform
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Four pillars. One deployment.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {tiles.map(({ icon: Icon, label, body, accent }) => (
            <div
              key={label}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div
                className={`grid size-10 place-items-center rounded-xl border border-border bg-muted ${accent}`}
              >
                <Icon className="size-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {label}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground text-pretty leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
