import { useLayoutEffect, useRef } from 'react';

type UseThemeElementRefOptions = {
    enable?: boolean;
};

// Extracted from src/theming/hooks.ts (useThemableElementRef only) - sets a
// `data-theme-override` attribute on the element so scoped theme tokens can
// target it. Logic is unchanged from the original.
export const useThemableElementRef = <T extends HTMLElement>(options?: UseThemeElementRefOptions) => {
    const ref = useRef<T | null>(null);
    const enable = options?.enable !== false;

    useLayoutEffect(() => {
        if (ref.current) {
            if (enable) {
                ref.current.setAttribute('data-theme-override', 'true');
            } else {
                ref.current.removeAttribute('data-theme-override');
            }
        }
    }, [enable]);

    return ref;
};
