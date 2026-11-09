import * as React from "react";

import { useIsomorphicLayoutEffect } from "@/components/ui/compare-slider-utils/use-isomorphic-layout-effect";

function useAsRef<T>(props: T) {
  const ref = React.useRef<T>(props);

  useIsomorphicLayoutEffect(() => {
    ref.current = props;
  });

  return ref;
}

export { useAsRef };
