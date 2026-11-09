import { createContext, use, useMemo } from "react";
import DefaultLink from "./default-link";
import { en } from "@/components/ui/spinner-utils/ui-en";
import type { Locale, Messages } from "@/components/ui/spinner-utils/types";
import {
  browserBack,
  browserNavigate,
  useBrowserLocation,
  type RouterAdapter,
} from "./router";

export type PortalContainer =
  HTMLElement | null | (() => HTMLElement | null | undefined);

export interface UIContextValue {
  locale: Locale;
  router?: Partial<Pick<RouterAdapter, "back" | "Link" | "navigate">>;
  routerScope?: object;
}

export const UIContext = /* @__PURE__ */ createContext<UIContextValue | null>(
  null,
);

export const PortalContainerContext = /* @__PURE__ */ createContext<
  PortalContainer | undefined
>(undefined);

export const RouterActionsContext = /* @__PURE__ */ createContext<Pick<
  RouterAdapter,
  "back" | "Link" | "navigate"
> | null>(null);

export const RouterLocationContext = /* @__PURE__ */ createContext<Partial<
  Pick<RouterAdapter, "pathname" | "search">
> | null>(null);

const browserRouterScope = {};

export function useRouterScope(): object {
  return use(UIContext)?.routerScope ?? browserRouterScope;
}

export function useLocale(): Locale {
  return use(UIContext)?.locale ?? en;
}

export function usePortalContainer(): () => HTMLElement {
  const container = use(PortalContainerContext);

  return () =>
    (typeof container === "function" ? container() : container) ??
    document.body;
}

/** Application texts at the root; library texts are in `useMessages().ui`. */
export function useMessages(): Messages {
  return useLocale().messages;
}

const browserActions: Pick<RouterAdapter, "back" | "Link" | "navigate"> = {
  back: browserBack,
  Link: DefaultLink,
  navigate: browserNavigate,
};

export function useRouterActions(): Pick<
  RouterAdapter,
  "back" | "Link" | "navigate"
> {
  return use(RouterActionsContext) ?? browserActions;
}

export function useNavigate(): RouterAdapter["navigate"] {
  return useRouterActions().navigate;
}

export function useRouter(): RouterAdapter {
  const location = use(RouterLocationContext);
  const browserLocation = useBrowserLocation(
    location?.pathname === undefined || location.search === undefined,
  );
  const { back, Link, navigate } = useRouterActions();

  const pathname = location?.pathname ?? browserLocation.pathname;
  const search = location?.search ?? browserLocation.search;

  return useMemo(
    () => ({ back, Link, navigate, pathname, search }),
    [back, Link, navigate, pathname, search],
  );
}
