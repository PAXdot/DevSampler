import {
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type ReactElement,
  type ReactNode,
  type Ref,
} from "react";
import { cx } from "@/components/ui/tooltip-utils/cx";
import { composeRefs } from "@/components/ui/tooltip-utils/refs";
import type { Align, Placement } from "@/components/ui/tooltip-utils/types";
import { useDismiss } from "@/components/ui/tooltip-utils/useDismiss";
import { Anchor } from "@/components/ui/tooltip-utils/Anchor";
import { useFloatingSurface } from "@/components/ui/tooltip-utils/useFloatingSurface";
import { Portal } from "@/components/ui/tooltip-utils/Portal";

interface TooltipTriggerProps {
  ref?: Ref<HTMLElement>;
  onPointerEnter?: (event: React.PointerEvent<HTMLElement>) => void;
  onPointerLeave?: (event: React.PointerEvent<HTMLElement>) => void;
  onFocus?: (event: FocusEvent<HTMLElement>) => void;
  onBlur?: (event: FocusEvent<HTMLElement>) => void;
  "aria-describedby"?: string;
}

export interface TooltipProps {
  content: ReactNode;
  children: ReactElement;
  placement?: Placement;
  align?: Align;
  offset?: number;
  delay?: number;
  className?: string;
}

export default function Tooltip({
  content,
  children,
  placement = "top",
  align = "center",
  offset = 8,
  delay = 200,
  className,
}: TooltipProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [open, setOpen] = useState(false);
  const {
    anchorRef,
    triggerRef,
    panelRef,
    panelId,
    mounted,
    state,
    position,
    refs,
  } = useFloatingSurface({
    open,
    placement,
    align,
    offset,
    duration: 150,
    idSuffix: "tooltip",
  });

  const show = useCallback(
    (immediate = false) => {
      clearTimeout(timerRef.current);
      if (immediate || delay === 0) setOpen(true);
      else timerRef.current = setTimeout(() => setOpen(true), delay);
    },
    [delay],
  );

  const hide = useCallback(() => {
    clearTimeout(timerRef.current);
    setOpen(false);
  }, []);

  useEffect(() => () => clearTimeout(timerRef.current), []);
  useDismiss({
    enabled: open,
    onDismiss: hide,
    refs,
    closeOnOutsidePointer: false,
  });

  const child = children as ReactElement<TooltipTriggerProps>;
  const trigger = isValidElement(children)
    ? cloneElement(child, {
        ref: composeRefs(triggerRef, child.props.ref),
        "aria-describedby": mounted ? panelId : undefined,
        onPointerEnter: (event: React.PointerEvent<HTMLElement>) => {
          child.props.onPointerEnter?.(event);
          if (event.pointerType !== "touch") show();
        },
        onPointerLeave: (event: React.PointerEvent<HTMLElement>) => {
          child.props.onPointerLeave?.(event);
          hide();
        },
        onFocus: (event: FocusEvent<HTMLElement>) => {
          child.props.onFocus?.(event);
          show(true);
        },
        onBlur: (event: FocusEvent<HTMLElement>) => {
          child.props.onBlur?.(event);
          hide();
        },
      })
    : children;

  return (
    <>
      <Anchor ref={anchorRef}>{trigger}</Anchor>
      {mounted && (
        <Portal>
          <div
            ref={panelRef}
            id={panelId}
            role="tooltip"
            className={cx("mors-tooltip", className)}
            style={position.style}
            data-state={state}
            data-placement={position.placement}
          >
            {content}
          </div>
        </Portal>
      )}
    </>
  );
}
