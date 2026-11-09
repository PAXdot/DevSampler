import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import { BarChart3, Bug, Globe, Database, type LucideIcon } from "lucide-react";

interface FeatureToggle {
  id: string;
  title: string;
  description: string;
  checked: boolean;
  icon: LucideIcon;
}

const features: FeatureToggle[] = [
  {
    id: "feat-analytics",
    title: "Analytics",
    description: "Track page views and user interactions",
    checked: true,
    icon: BarChart3,
  },
  {
    id: "feat-logging",
    title: "Error Logging",
    description: "Capture and report runtime errors",
    checked: true,
    icon: Bug,
  },
  {
    id: "feat-cdn",
    title: "CDN Caching",
    description: "Serve static assets from edge network",
    checked: false,
    icon: Globe,
  },
  {
    id: "feat-backup",
    title: "Auto Backup",
    description: "Daily snapshots of your database",
    checked: false,
    icon: Database,
  },
];

export default function SwitchFeatureGrid() {
  return (
    <FieldGroup className="grid w-full max-w-md grid-cols-2 gap-4">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <FieldLabel key={feature.id} htmlFor={feature.id} className="p-0!">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle className="flex items-start gap-2">
                  <div className="bg-background border-border flex shrink-0 items-center justify-center rounded-md border p-1.5 shadow-xs shadow-black/5">
                    <Icon aria-hidden="true" className="size-4" />
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-sm font-semibold">
                      {feature.title}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {feature.description}
                    </span>
                  </div>
                </FieldTitle>
              </FieldContent>
              <Switch
                id={feature.id}
                defaultChecked={feature.checked}
                size="sm"
              />
            </Field>
          </FieldLabel>
        );
      })}
    </FieldGroup>
  );
}
