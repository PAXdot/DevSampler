"use client";
import {
  ProgressBar as AriaProgressBar,
  type ProgressBarProps as AriaProgressBarProps,
} from "react-aria-components/ProgressBar";
import { Label } from "@/components/ui/css-progressbar-utils/Label";

export interface ProgressBarProps extends AriaProgressBarProps {
  label?: string;
}

export default function ProgressBar({ label, ...props }: ProgressBarProps) {
  return (
    <AriaProgressBar {...props}>
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          <Label>{label}</Label>
          <span className="value">{valueText}</span>
          <div className="track inset">
            <div
              className="fill"
              style={
                {
                  "--percent": (isIndeterminate ? 100 : percentage) + "%",
                } as any
              }
            />
          </div>
        </>
      )}
    </AriaProgressBar>
  );
}
