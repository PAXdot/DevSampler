import { useMemo, useSyncExternalStore } from "react";

export type LinkComponentProps = Omit<
  React.ComponentPropsWithRef<"a">,
  "href"
> & {
  href: string;
};

export type LinkComponent = React.ComponentType<LinkComponentProps>;

export interface NavigateOptions {
  replace?: boolean;
}

export interface RouterAdapter {
  back: () => void;
  Link: LinkComponent;
  navigate: (href: string, options?: NavigateOptions) => void;
  pathname: string;
  search: string;
}

const listeners = new Set<() => void>();

const getNavigation = () => (window as { navigation?: EventTarget }).navigation;

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  window.addEventListener("popstate", listener);
  getNavigation()?.addEventListener("currententrychange", listener);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("popstate", listener);
    getNavigation()?.removeEventListener("currententrychange", listener);
  };
};

const getSnapshot = () => window.location.pathname + window.location.search;

const getServerSnapshot = () => "";

const subscribeToNothing = () => () => {};

export function useBrowserLocation(follow = true) {
  const location = useSyncExternalStore(
    follow ? subscribe : subscribeToNothing,
    follow ? getSnapshot : getServerSnapshot,
    getServerSnapshot,
  );

  return useMemo(() => {
    const index = location.indexOf("?");
    return index === -1
      ? { pathname: location, search: "" }
      : { pathname: location.slice(0, index), search: location.slice(index) };
  }, [location]);
}

export function notifyLocationChange() {
  listeners.forEach((listener) => listener());
}

export function browserNavigate(href: string, options?: NavigateOptions) {
  if (options?.replace) {
    window.history.replaceState(window.history.state, "", href);
  } else {
    window.history.pushState(null, "", href);
  }

  notifyLocationChange();
}

export const browserBack = () => window.history.back();
