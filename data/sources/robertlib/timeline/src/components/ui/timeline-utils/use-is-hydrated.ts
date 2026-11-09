import { useSyncExternalStore } from "react";

const subscribeToNothing = () => () => {};

export default function useIsHydrated() {
  return useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );
}
