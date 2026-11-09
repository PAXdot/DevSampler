"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type OTPContextValue = {
  value: string
  setValue: (next: string) => void
  maxLength: number
  focused: boolean
  setFocused: (b: boolean) => void
  inputRef: React.RefObject<HTMLInputElement>
}
const OTPContext = React.createContext<OTPContextValue | null>(null)
const useOTP = () => {
  const ctx = React.useContext(OTPContext)
  if (!ctx) throw new Error("InputOTPSlot must be used inside <InputOTP>")
  return ctx
}

type InputOTPProps = React.HTMLAttributes<HTMLDivElement> & {
  maxLength: number
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  pattern?: string
  inputMode?: React.InputHTMLAttributes<HTMLInputElement>["inputMode"]
}

const InputOTP = React.forwardRef<HTMLDivElement, InputOTPProps>(
  (
    { className, maxLength, value, defaultValue, onChange, pattern, inputMode = "numeric", children, ...props },
    ref,
  ) => {
    const isControlled = value !== undefined
    const [internal, setInternal] = React.useState<string>(defaultValue ?? "")
    const current = isControlled ? value! : internal
    const setValue = (next: string) => {
      const clamped = next.slice(0, maxLength)
      if (!isControlled) setInternal(clamped)
      onChange?.(clamped)
    }
    const [focused, setFocused] = React.useState(false)
    const inputRef = React.useRef<HTMLInputElement>(null!)
    return (
      <OTPContext.Provider value={{ value: current, setValue, maxLength, focused, setFocused, inputRef }}>
        <div
          ref={ref}
          data-slot="input-otp"
          className={cn("relative inline-flex items-center", className)}
          onClick={() => inputRef.current?.focus()}
          {...props}
        >
          <input
            ref={inputRef}
            type="text"
            inputMode={inputMode}
            pattern={pattern}
            value={current}
            maxLength={maxLength}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
            aria-label="One-time code"
          />
          {children}
        </div>
      </OTPContext.Provider>
    )
  },
)
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} data-slot="input-otp-group" className={cn("flex", className)} {...props} />
  ),
)
InputOTPGroup.displayName = "InputOTPGroup"

type InputOTPSlotProps = React.HTMLAttributes<HTMLDivElement> & {
  index: number
}

const InputOTPSlot = React.forwardRef<HTMLDivElement, InputOTPSlotProps>(
  ({ index, className, ...props }, ref) => {
    const { value, focused, inputRef } = useOTP()
    const char = value[index] ?? ""
    const isActive = focused && index === value.length
    return (
      <div
        ref={ref}
        role="presentation"
        data-slot="input-otp-slot"
        data-active={isActive || undefined}
        className={cn(
          "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
          isActive && "z-10 ring-2 ring-ring ring-offset-background",
          className,
        )}
        onClick={() => inputRef.current?.focus()}
        {...props}
      >
        {char}
        {isActive && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
          </div>
        )}
      </div>
    )
  },
)
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} role="separator" data-slot="input-otp-separator" className={cn("mx-1", className)} {...props}>
      –
    </div>
  ),
)
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
