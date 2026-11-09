"use client";

import type { ReactNode } from "react";
import {
  useThemeContext,
  usePal,
  useModalFocus,
  labelText,
  tokens,
  motion,
  Button,
} from "./halaska-dialog-utils/kit-core";

type Theme = "light" | "dark";

interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children?: ReactNode;
  theme?: Theme;
}

function Dialog({ open, onClose, title, children, theme: tp }: DialogProps) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const panelRef = useModalFocus(open, onClose);
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10000,
        animation: `halaska-fade-in ${motion.fast} ${motion.easeOut} both`,
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={labelText(title)}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        style={{
          background:
            theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: tokens.radius.lg,
          padding: 24,
          minWidth: 320,
          maxWidth: 480,
          border: `1px solid ${pal.borderSubtle}`,
          boxShadow: `0 16px 48px ${pal.shadowLg}`,
          animation: `halaska-scale-in ${motion.normal} ${motion.emphasized} both`,
        }}
      >
        {title && (
          <div
            style={{
              ...tokens.type.lg,
              fontWeight: tokens.weight.semibold,
              color: pal.text,
              marginBottom: 12,
              fontFamily: tokens.font.sans,
            }}
          >
            {title}
          </div>
        )}
        <div
          style={{
            ...tokens.type.base,
            color: pal.textSecondary,
            lineHeight: 1.6,
            fontFamily: tokens.font.sans,
          }}
        >
          {children}
        </div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
          }}
        >
          <Button theme={theme} variant="ghost" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button theme={theme} variant="primary" size="sm" onClick={onClose}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}

interface FormDialogProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  description?: string;
  children?: ReactNode;
  submitLabel?: string;
  onSubmit?: () => void;
  theme?: Theme;
}

export function FormDialog({
  open,
  onClose,
  title,
  description,
  children,
  submitLabel = "Save",
  onSubmit,
  theme: tp,
}: FormDialogProps) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const panelRef = useModalFocus(open, onClose);
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10000,
        animation: `halaska-fade-in ${motion.fast} ${motion.easeOut} both`,
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={labelText(title)}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        style={{
          background:
            theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: tokens.radius.lg,
          padding: 24,
          minWidth: 360,
          maxWidth: 480,
          border: `1px solid ${pal.borderSubtle}`,
          boxShadow: `0 16px 48px ${pal.shadowLg}`,
          animation: `halaska-scale-in ${motion.normal} ${motion.emphasized} both`,
          fontFamily: tokens.font.sans,
        }}
      >
        {title && (
          <div
            style={{
              ...tokens.type.lg,
              fontWeight: tokens.weight.semibold,
              color: pal.text,
              marginBottom: description ? 4 : 16,
            }}
          >
            {title}
          </div>
        )}
        {description && (
          <div
            style={{
              ...tokens.type.sm,
              color: pal.textSecondary,
              marginBottom: 16,
              lineHeight: 1.6,
            }}
          >
            {description}
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit?.();
            onClose?.();
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {children}
          </div>
          <div
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "flex-end",
              gap: 8,
            }}
          >
            <Button
              theme={theme}
              variant="ghost"
              size="sm"
              type="button"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button theme={theme} variant="primary" size="sm" type="submit">
              {submitLabel}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

interface CardDialogProps {
  open: boolean;
  onClose?: () => void;
  cover?: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
  actions?: ReactNode;
  theme?: Theme;
}

export function CardDialog({
  open,
  onClose,
  cover,
  title,
  description,
  children,
  actions,
  theme: tp,
}: CardDialogProps) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const panelRef = useModalFocus(open, onClose);
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10000,
        animation: `halaska-fade-in ${motion.fast} ${motion.easeOut} both`,
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={labelText(title)}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        style={{
          background:
            theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: tokens.radius.lg,
          overflow: "hidden",
          minWidth: 360,
          maxWidth: 480,
          border: `1px solid ${pal.borderSubtle}`,
          boxShadow: `0 16px 48px ${pal.shadowLg}`,
          animation: `halaska-scale-in ${motion.normal} ${motion.emphasized} both`,
          fontFamily: tokens.font.sans,
        }}
      >
        {cover && (
          <div
            style={{
              height: 140,
              background: `linear-gradient(135deg, ${pal.accent}, ${pal.accentHover})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 32,
              transition: `background ${motion.smooth} ${motion.easeInOut}`,
            }}
          >
            {cover}
          </div>
        )}
        <div style={{ padding: 24 }}>
          {title && (
            <div
              style={{
                ...tokens.type.lg,
                fontWeight: tokens.weight.semibold,
                color: pal.text,
                marginBottom: 4,
              }}
            >
              {title}
            </div>
          )}
          {description && (
            <div
              style={{
                ...tokens.type.sm,
                color: pal.textSecondary,
                marginBottom: 16,
                lineHeight: 1.6,
              }}
            >
              {description}
            </div>
          )}
          {children && <div style={{ marginBottom: 16 }}>{children}</div>}
          {actions && (
            <div
              style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}
            >
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dialog;
