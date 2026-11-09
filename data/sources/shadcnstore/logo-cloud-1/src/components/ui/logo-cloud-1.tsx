import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

import { supportedPlatforms } from "@/components/ui/logo-cloud-1-utils/logo-cloud-1-data";
import { LogoCloud1LogoIcon } from "@/components/ui/logo-cloud-1-utils/logo-cloud-1-logo-icon";

export function LogoCloud1({ className }: { className?: string }) {
  return (
    <section className={cn("relative w-full py-12 md:py-16", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="text-primary size-5" aria-hidden="true" />
              <span className="text-primary text-sm font-medium">
                ShadcnStore Integrations
              </span>
            </div>
            <p className="text-muted-foreground">
              Works perfectly with ShadcnStore components and your favorite
              tools
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {supportedPlatforms.map((platform) => (
                <div
                  key={platform.id}
                  className="flex items-center gap-2 opacity-85"
                >
                  <LogoCloud1LogoIcon iconSlug={platform.id} size={22} />
                  <span className="text-md font-medium">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              More integrations available through ShadcnStore's extensive
              component library
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoCloud1;
