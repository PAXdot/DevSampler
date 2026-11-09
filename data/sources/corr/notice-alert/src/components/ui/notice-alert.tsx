import { AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

export type NoticeAlertTone =
  "primary" | "info" | "success" | "warning" | "destructive";

export function NoticeAlert({
  title,
  description,
  tone = "info",
  className,
}: {
  title: string;
  description?: string;
  tone?: NoticeAlertTone;
  className?: string;
}) {
  const Icon =
    tone === "success"
      ? CheckCircle2
      : tone === "warning"
        ? TriangleAlert
        : tone === "destructive"
          ? AlertCircle
          : Info;

  return (
    <Alert
      variant={tone === "destructive" ? "destructive" : "default"}
      className={cn(
        "items-start gap-3 rounded-md border bg-background py-2.5 pb-2 shadow-none",
        tone === "primary" &&
          "border-primary/25 bg-primary/10 text-primary dark:bg-primary/15",
        tone === "success" &&
          "border-emerald-500/25 bg-emerald-500/10 text-emerald-950 dark:border-emerald-400/30 dark:bg-emerald-500/15 dark:text-emerald-100",
        tone === "warning" &&
          "border-amber-500/25 bg-amber-500/10 text-amber-950 dark:border-amber-400/30 dark:bg-amber-500/15 dark:text-amber-100",
        tone === "info" &&
          "border-blue-500/25 bg-blue-500/10 text-blue-950 dark:border-blue-400/30 dark:bg-blue-500/15 dark:text-blue-100",
        tone === "destructive" &&
          "border-destructive/35 bg-destructive/10 text-destructive dark:bg-destructive/15",
        className,
      )}
    >
      <Icon className="size-4" />
      <div className="min-w-0">
        <AlertTitle>{title}</AlertTitle>
        {description ? (
          <AlertDescription>{description}</AlertDescription>
        ) : null}
      </div>
    </Alert>
  );
}

export default NoticeAlert;
