"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface WebGLErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface WebGLErrorBoundaryState {
  hasError: boolean;
}

export class WebGLErrorBoundary extends React.Component<
  WebGLErrorBoundaryProps,
  WebGLErrorBoundaryState
> {
  constructor(props: WebGLErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): WebGLErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export interface WebGLFallbackProps {
  className?: string;
}

export function WebGLFallback({ className }: WebGLFallbackProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "bg-[radial-gradient(circle_at_72%_34%,rgba(110,214,201,0.28),transparent_45%),radial-gradient(circle_at_20%_78%,rgba(244,223,184,0.22),transparent_50%),linear-gradient(160deg,#050507,#14151d)]",
        className,
      )}
    />
  );
}
