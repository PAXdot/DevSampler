/**
 * doodle-ui PromptInput
 * Ported/adapted from packages/doodle-ui/src/components/PromptInput.tsx
 *
 * MIT License
 * Copyright (c) 2026 KanchanaSW (doodle-ui)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Hand-drawn borders rendered with rough.js (https://roughjs.com), MIT License.
 */
"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type CSSProperties,
  type FocusEvent,
  type FormEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RoughSvg } from "@/components/ui/prompt-input-utils/rough-svg";
import { useSketchTheme } from "@/components/ui/prompt-input-utils/sketch-theme";

export type PromptInputSize = "sm" | "md" | "lg";

export interface PromptInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "color" | "onSubmit"
> {
  /** Control size preset. @default "md" */
  size?: PromptInputSize;
  /** Fired when the user submits (Enter or clicking Send). */
  onSubmit?: (value: string) => void;
  /** Fired when the voice/waveform icon button is clicked. */
  onVoiceClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Custom voice waveform icon. */
  voiceIcon?: ReactNode;
  /** Custom send button icon. */
  sendIcon?: ReactNode;
  /** Show a loading spinner inside the send button. @default false */
  loading?: boolean;
  /** Keep the send button visible even after the input loses focus. @default false */
  keepOpenOnBlur?: boolean;
  /** Manually control send button visibility. */
  showSendButton?: boolean;
  /** Additional class name on the root container. */
  containerClassName?: string;
  /** Additional inline styles on the root container. */
  containerStyle?: CSSProperties;
  /** rough.js sketchiness intensity. @default 1.5 */
  roughness?: number;
  /** Locks the hand-drawn wobble for this instance. */
  seed?: number;
  /** Stroke color override. Falls back to theme ink. */
  sketchColor?: string;
  /** How much straight lines bow/curve in rough.js. @default 1 */
  bowing?: number;
}

const SIZE_CONFIG: Record<
  PromptInputSize,
  {
    height: number;
    fontSize: number;
    paddingX: number;
    iconSize: number;
    buttonSize: number;
  }
> = {
  sm: { height: 36, fontSize: 13, paddingX: 14, iconSize: 16, buttonSize: 36 },
  md: { height: 44, fontSize: 15, paddingX: 18, iconSize: 20, buttonSize: 44 },
  lg: { height: 52, fontSize: 16, paddingX: 22, iconSize: 24, buttonSize: 52 },
};

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    setReduced(mq.matches);
    const update = () => setReduced(mq.matches);
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

function WaveformIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <line x1="4" y1="10" x2="4" y2="14" />
      <line x1="8" y1="6" x2="8" y2="18" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="16" y1="7" x2="16" y2="17" />
      <line x1="20" y1="10" x2="20" y2="14" />
    </svg>
  );
}

function ArrowUpIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  );
}

function Spinner({ size = 18, color }: { size?: number; color?: string }) {
  const reduced = useReducedMotion();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{
        animation: reduced
          ? undefined
          : "prompt-input-spin 0.8s linear infinite",
      }}
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke={color ?? "currentColor"}
        strokeWidth="2.2"
        strokeOpacity="0.25"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke={color ?? "currentColor"}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Modern AI prompt bar with a hand-drawn (rough.js) sketch border. A voice
 * waveform icon animates into a circular send button when the input is
 * focused or has text.
 *
 * @example
 * <PromptInput
 *   placeholder="Ask anything..."
 *   onSubmit={(text) => handleSend(text)}
 *   onVoiceClick={() => startVoiceMode()}
 * />
 */
export const PromptInput = forwardRef<HTMLInputElement, PromptInputProps>(
  function PromptInput(
    {
      className,
      style,
      containerClassName,
      containerStyle,
      size: sizeProp = "md",
      placeholder = "Ask anything...",
      value,
      defaultValue,
      onChange,
      onSubmit,
      onVoiceClick,
      voiceIcon,
      sendIcon,
      loading = false,
      disabled = false,
      keepOpenOnBlur = false,
      showSendButton: showSendButtonProp,
      onFocus,
      onBlur,
      onKeyDown,
      roughness,
      seed,
      sketchColor,
      bowing,
      id,
      ...rest
    },
    ref,
  ) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const sizeConf = SIZE_CONFIG[sizeProp];
    const reducedMotion = useReducedMotion();

    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState<string>(
      () => (defaultValue as string) ?? "",
    );
    const [resolvedSeed] = useState(
      () => seed ?? Math.floor(Math.random() * 100000),
    );

    const isControlled = value !== undefined;
    const currentValue = isControlled ? String(value) : internalValue;
    const hasText = currentValue.trim().length > 0;

    const theme = useSketchTheme(sketchColor);
    const ink = sketchColor ?? theme.ink;

    const showSend =
      showSendButtonProp ?? (focused || hasText || (keepOpenOnBlur && focused));

    const handleFocus = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        setFocused(true);
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        onBlur?.(e);
      },
      [onBlur],
    );

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) setInternalValue(e.target.value);
        onChange?.(e);
      },
      [isControlled, onChange],
    );

    const handleSend = useCallback(() => {
      if (disabled || loading) return;
      onSubmit?.(currentValue);
    }, [currentValue, disabled, loading, onSubmit]);

    const handleFormSubmit = useCallback(
      (e: FormEvent) => {
        e.preventDefault();
        handleSend();
      },
      [handleSend],
    );

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSend();
        }
        onKeyDown?.(e);
      },
      [handleSend, onKeyDown],
    );

    const iconColor = theme.isDark
      ? "rgba(243, 244, 246, 0.65)"
      : "rgba(31, 29, 26, 0.65)";
    const sendButtonTextColor = hasText
      ? (sketchColor ?? theme.accent)
      : iconColor;

    return (
      <form
        onSubmit={handleFormSubmit}
        className={containerClassName}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          width: "100%",
          position: "relative",
          boxSizing: "border-box",
          opacity: disabled ? 0.6 : 1,
          ...containerStyle,
        }}
      >
        <motion.div
          layout={!reducedMotion}
          transition={{ type: "spring", stiffness: 450, damping: 35 }}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            flex: 1,
            minWidth: 0,
            height: sizeConf.height,
            background: "transparent",
            boxSizing: "border-box",
          }}
        >
          <RoughSvg
            shape="rectangle"
            roughness={roughness}
            seed={resolvedSeed}
            sketchColor={focused ? (sketchColor ?? theme.accent) : ink}
            bowing={bowing}
            strokeWidth={focused ? 2.1 : 1.75}
          />

          <input
            ref={(node) => {
              inputRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref)
                (
                  ref as React.MutableRefObject<HTMLInputElement | null>
                ).current = node;
            }}
            id={inputId}
            value={currentValue}
            placeholder={placeholder}
            disabled={disabled}
            aria-label={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={className}
            style={{
              flex: 1,
              minWidth: 0,
              height: "100%",
              paddingLeft: sizeConf.paddingX,
              paddingRight: showSend
                ? sizeConf.paddingX
                : sizeConf.iconSize + 20,
              border: "none",
              outline: "none",
              background: "transparent",
              color: ink,
              fontSize: sizeConf.fontSize,
              zIndex: 2,
              boxSizing: "border-box",
              ...style,
            }}
            {...rest}
          />

          <AnimatePresence>
            {!showSend && (
              <motion.button
                key="waveform-action"
                type="button"
                onClick={onVoiceClick}
                disabled={disabled}
                aria-label="Voice input"
                initial={reducedMotion ? false : { opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0, scale: 0.6 }}
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { duration: 0.2, ease: "easeOut" }
                }
                style={{
                  position: "absolute",
                  right: sizeConf.paddingX - 4,
                  top: 0,
                  bottom: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  width: sizeConf.iconSize + 8,
                  cursor: disabled ? "not-allowed" : "pointer",
                  color: iconColor,
                  zIndex: 3,
                }}
              >
                {voiceIcon ?? <WaveformIcon size={sizeConf.iconSize} />}
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {showSend && (
            <motion.button
              key="send-action"
              type="submit"
              disabled={disabled}
              aria-label="Send message"
              initial={reducedMotion ? false : { opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0, scale: 0.4 }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 480, damping: 28 }
              }
              whileTap={
                !disabled && !reducedMotion ? { scale: 0.92 } : undefined
              }
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: sizeConf.buttonSize,
                height: sizeConf.buttonSize,
                borderRadius: "50%",
                background: "transparent",
                border: "none",
                color: sendButtonTextColor,
                cursor: disabled ? "not-allowed" : "pointer",
                flexShrink: 0,
                position: "relative",
                outline: "none",
                padding: 0,
              }}
            >
              <RoughSvg
                shape="ellipse"
                roughness={roughness}
                seed={resolvedSeed}
                sketchColor={hasText ? (sketchColor ?? theme.accent) : ink}
                bowing={bowing}
                strokeWidth={hasText ? 2.05 : 1.75}
              />
              {loading ? (
                <Spinner
                  size={sizeConf.iconSize - 2}
                  color={sendButtonTextColor}
                />
              ) : (
                (sendIcon ?? <ArrowUpIcon size={sizeConf.iconSize} />)
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </form>
    );
  },
);

PromptInput.displayName = "PromptInput";

/** Alias for {@link PromptInput}. */
export const ChatInput = PromptInput;

export default PromptInput;
