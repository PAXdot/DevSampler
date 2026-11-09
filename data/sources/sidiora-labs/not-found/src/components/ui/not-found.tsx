"use client";

import { NotFoundGlitch } from "@/components/ui/not-found-utils/not-found-glitch";
import { NotFoundMagnetic } from "@/components/ui/not-found-utils/not-found-magnetic";
import { NotFoundSpotlight } from "@/components/ui/not-found-utils/not-found-spotlight";
import { NotFoundStacked } from "@/components/ui/not-found-utils/not-found-stacked";
import { NotFoundTerminal } from "@/components/ui/not-found-utils/not-found-terminal";
import {
  NOT_FOUND_DEFAULTS,
  NotFoundActions,
  NotFoundStage,
  type NotFoundProps,
} from "@/components/ui/not-found-utils/not-found-shared";

export type NotFoundVariant =
  "glitch" | "magnetic" | "spotlight" | "stacked" | "terminal";

export interface NotFoundComponentProps extends NotFoundProps {
  /** Which animated 404 treatment to render. Defaults to "glitch". */
  variant?: NotFoundVariant;
}

/**
 * Five animated 404 pages in one component — glitch, magnetic, spotlight,
 * stacked and terminal. Pick a treatment with `variant`; every other prop
 * (code, title, description, home/browse links) is shared across all five
 * and comes verbatim from DesignX UI's not-found registry item.
 */
export default function NotFound({
  variant = "glitch",
  ...props
}: NotFoundComponentProps) {
  switch (variant) {
    case "magnetic":
      return <NotFoundMagnetic {...props} />;
    case "spotlight":
      return <NotFoundSpotlight {...props} />;
    case "stacked":
      return <NotFoundStacked {...props} />;
    case "terminal":
      return <NotFoundTerminal {...props} />;
    case "glitch":
    default:
      return <NotFoundGlitch {...props} />;
  }
}

export {
  NotFoundGlitch,
  NotFoundMagnetic,
  NotFoundSpotlight,
  NotFoundStacked,
  NotFoundTerminal,
  NotFoundActions,
  NotFoundStage,
  NOT_FOUND_DEFAULTS,
};
export type { NotFoundProps };
