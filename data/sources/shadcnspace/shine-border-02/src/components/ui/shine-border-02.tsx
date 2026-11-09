import React, { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShieldCheck, Fingerprint, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

/* ============================= */
/* ShineBorder (Laser Scanner)   */
/* ============================= */

type ShineBorderProps = {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  gradient?: string;
};

const ShineBorder = ({
  children,
  className,
  borderWidth = 2,
  duration = 3,
  gradient = "from-blue-500 via-red-500 to-teal-400",
}: ShineBorderProps) => {
  return (
    <>
      <style>{`
        @keyframes shine-scan {
          0% { mask-position: 0% -100%; -webkit-mask-position: 0% -100%; }
          100% { mask-position: 0% 200%; -webkit-mask-position: 0% 200%; }
        }
        .animate-shine-scan {
          mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 25%, transparent 40%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 25%, transparent 40%);
          mask-size: 100% 300%;
          -webkit-mask-size: 100% 300%;
          animation: shine-scan var(--duration, 3s) linear infinite;
        }
      `}</style>
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden border p-(--bw)",
          className,
        )}
        style={{ "--bw": `${borderWidth}px` } as React.CSSProperties}
      >
        {/* Animated Scanner Layer */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 rounded-2xl border border-secondary/20 pointer-events-none -z-10" />
          <div
            className={cn(
              "absolute inset-0 bg-linear-to-b animate-shine-scan opacity-90 blur-sm",
              gradient,
            )}
            style={{ "--duration": `${duration}s` } as React.CSSProperties}
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 rounded-2xl bg-card h-full">
          {children}
        </div>
      </div>
    </>
  );
};

/* ============================= */
/* Security / Scan Card          */
/* ============================= */

const SecurityCard = () => {
  return (
    <Card className="relative h-full rounded-2xl border-0 ring-0 bg-transparent overflow-hidden">
      <CardHeader className="p-6 pb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Fingerprint className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Identity Verified
              </p>
              <p className="text-xs text-muted-foreground">Biometric Scan</p>
            </div>
          </div>
          <Badge className="gap-1 bg-teal-400/10 text-teal-400 border-teal-400/20 hover:bg-teal-400/20">
            <span className="size-1.5 rounded-full bg-teal-400 animate-pulse" />
            Secure
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-6 flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <Avatar className="size-14 ring-2 ring-primary/20">
            <AvatarImage src="data:image/webp;base64,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" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-base font-semibold text-foreground">Albert</p>
            <p className="text-sm text-muted-foreground">Senior Engineer</p>
            <p className="text-xs text-muted-foreground">ID: #EMP‑00421</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Access Level", value: "Level 4" },
            { label: "Clearance", value: "Top Secret" },
            { label: "Last Scan", value: "Just now" },
            { label: "Location", value: "HQ — Floor 3" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg bg-muted/50 p-3">
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="text-sm font-medium text-foreground mt-0.5">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-teal-400/20 bg-teal-400/5 px-4 py-3">
          <ShieldCheck className="size-4 text-teal-400 shrink-0" />
          <p className="text-sm text-teal-400 font-medium">
            Scan complete — Access granted
          </p>
        </div>

        <Button variant="outline" className="w-full gap-2 h-10">
          <Lock className="size-4" />
          View Access Log
        </Button>
      </CardContent>
    </Card>
  );
};

/* ============================= */
/* Demo */
/* ============================= */

export default function ShineBorderDemo() {
  return (
    <ShineBorder
      borderWidth={2}
      duration={3}
      gradient="from-blue-500 via-red-500 to-teal-400"
      className="w-full max-w-sm"
    >
      <SecurityCard />
    </ShineBorder>
  );
}
