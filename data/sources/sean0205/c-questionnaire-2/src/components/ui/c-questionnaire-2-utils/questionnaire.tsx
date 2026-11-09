"use client"

import * as React from "react"
import { createContext, useContext, useState } from "react"

import { cn } from "@/lib/utils"

type ChoiceConfig = { value: string }
type ItemConfig = {
  name: string
  required?: boolean
  choices: ChoiceConfig[]
}

interface QuestionnaireContextValue {
  items: ItemConfig[]
  order: string[]
  currentName: string
  currentIndex: number
  isLast: boolean
  shortcuts?: string
  errors: Record<string, boolean>
  getAnswer: (name: string) => string[]
  setAnswer: (name: string, values: string[]) => void
  goNext: () => void
  goPrev: () => void
}

const QuestionnaireContext = createContext<QuestionnaireContextValue | null>(
  null
)

function useQuestionnaire() {
  const ctx = useContext(QuestionnaireContext)
  if (!ctx) {
    throw new Error(
      "Questionnaire parts must be rendered inside <Questionnaire>."
    )
  }
  return ctx
}

const ItemContext = createContext<{ name: string; multiple?: boolean } | null>(
  null
)

interface QuestionnaireProps extends React.ComponentProps<"form"> {
  defaultItem?: string
  items: ItemConfig[]
  shortcuts?: string
  onSubmit?: React.FormEventHandler<HTMLFormElement>
}

function Questionnaire({
  className,
  defaultItem,
  items,
  shortcuts,
  onSubmit,
  children,
  ...props
}: QuestionnaireProps) {
  const order = items.map((item) => item.name)
  const [currentIndex, setCurrentIndex] = useState(() => {
    const idx = defaultItem ? order.indexOf(defaultItem) : 0
    return idx >= 0 ? idx : 0
  })
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const currentName = order[currentIndex]
  const isLast = currentIndex === order.length - 1

  function getAnswer(name: string) {
    return answers[name] ?? []
  }

  function setAnswer(name: string, values: string[]) {
    setAnswers((prev) => ({ ...prev, [name]: values }))
    setErrors((prev) => ({ ...prev, [name]: false }))
  }

  function isValid(name: string) {
    const config = items.find((item) => item.name === name)
    if (!config?.required) return true
    return (answers[name] ?? []).length > 0
  }

  function goNext() {
    if (!isValid(currentName)) {
      setErrors((prev) => ({ ...prev, [currentName]: true }))
      return
    }
    setCurrentIndex((index) => Math.min(index + 1, order.length - 1))
  }

  function goPrev() {
    setCurrentIndex((index) => Math.max(index - 1, 0))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    for (let i = 0; i < order.length; i++) {
      if (!isValid(order[i])) {
        event.preventDefault()
        setCurrentIndex(i)
        setErrors((prev) => ({ ...prev, [order[i]]: true }))
        return
      }
    }
    onSubmit?.(event)
  }

  return (
    <QuestionnaireContext.Provider
      value={{
        items,
        order,
        currentName,
        currentIndex,
        isLast,
        shortcuts,
        errors,
        getAnswer,
        setAnswer,
        goNext,
        goPrev,
      }}
    >
      <form
        data-slot="questionnaire"
        className={cn("flex flex-col gap-4", className)}
        onSubmit={handleSubmit}
        {...props}
      >
        {children}
      </form>
    </QuestionnaireContext.Provider>
  )
}

function QuestionnaireProgress({ className }: { className?: string }) {
  const ctx = useQuestionnaire()
  const total = ctx.order.length
  const step = ctx.currentIndex + 1
  const percent = (step / total) * 100

  return (
    <div className={cn("flex flex-1 items-center gap-2", className)}>
      <div
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={step}
        className="bg-muted h-1.5 flex-1 overflow-hidden rounded-full"
      >
        <div
          className="bg-primary h-full rounded-full transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-muted-foreground shrink-0 text-xs">
        {step}/{total}
      </span>
    </div>
  )
}

interface QuestionnaireItemProps {
  name: string
  multiple?: boolean
  required?: boolean
  className?: string
  children?: React.ReactNode
}

function QuestionnaireItem({
  name,
  multiple,
  className,
  children,
}: QuestionnaireItemProps) {
  const ctx = useQuestionnaire()
  if (ctx.currentName !== name) return null

  return (
    <ItemContext.Provider value={{ name, multiple }}>
      <div data-slot="questionnaire-item" className={cn("flex flex-col gap-3", className)}>
        {children}
      </div>
    </ItemContext.Provider>
  )
}

function QuestionnaireTitle({
  className,
  children,
}: React.ComponentProps<"h3">) {
  return (
    <h3 className={cn("text-base font-semibold", className)}>{children}</h3>
  )
}

function QuestionnaireChoices({
  className,
  children,
}: React.ComponentProps<"div">) {
  return (
    <div role="group" className={cn("flex flex-col gap-2", className)}>
      {children}
    </div>
  )
}

interface QuestionnaireChoiceProps {
  value: string
  className?: string
  children?: React.ReactNode
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

function QuestionnaireChoice({
  value,
  className,
  children,
  onChange,
}: QuestionnaireChoiceProps) {
  const item = useContext(ItemContext)
  const ctx = useQuestionnaire()
  if (!item) return null

  const { name, multiple } = item
  const current = ctx.getAnswer(name)
  const checked = current.includes(value)

  const config = ctx.items.find((entry) => entry.name === name)
  const shortcutIndex = config?.choices.findIndex(
    (choice) => choice.value === value
  )
  const shortcutLetter =
    ctx.shortcuts === "letters" &&
    shortcutIndex !== undefined &&
    shortcutIndex >= 0
      ? String.fromCharCode(65 + shortcutIndex)
      : undefined

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked
    const next = multiple
      ? isChecked
        ? [...current, value]
        : current.filter((entry) => entry !== value)
      : [value]
    ctx.setAnswer(name, next)
    onChange?.(event)
  }

  return (
    <label
      data-slot="questionnaire-choice"
      data-type={multiple ? "checkbox" : "radio"}
      className={cn(
        "border-border hover:bg-accent/50 flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-sm transition-colors",
        checked && "border-primary bg-primary/5",
        className
      )}
    >
      <input
        type={multiple ? "checkbox" : "radio"}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        className="accent-primary mt-0.5 size-4 shrink-0"
      />
      <div className="flex flex-1 flex-col gap-0.5">{children}</div>
      {shortcutLetter && (
        <span className="border-border text-muted-foreground flex size-5 shrink-0 items-center justify-center rounded border text-[0.65rem]">
          {shortcutLetter}
        </span>
      )}
    </label>
  )
}

function QuestionnaireChoiceDescription({
  className,
  children,
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-muted-foreground text-xs", className)}>
      {children}
    </p>
  )
}

function QuestionnaireError({ className }: { className?: string }) {
  const item = useContext(ItemContext)
  const ctx = useQuestionnaire()
  if (!item || !ctx.errors[item.name]) return null

  return (
    <p className={cn("text-destructive text-xs", className)}>
      Select at least one answer to continue.
    </p>
  )
}

function QuestionnaireActions({
  className,
  children,
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center justify-between gap-2 pt-2", className)}>
      {children}
    </div>
  )
}

const buttonBase =
  "inline-flex items-center justify-center rounded-md text-sm font-medium h-8 px-3 transition-colors disabled:pointer-events-none disabled:opacity-50"

function QuestionnairePrevious({
  className,
  children,
}: React.ComponentProps<"button">) {
  const ctx = useQuestionnaire()
  if (ctx.currentIndex === 0) {
    return <span aria-hidden />
  }

  return (
    <button
      type="button"
      onClick={ctx.goPrev}
      className={cn(
        buttonBase,
        "border-border bg-background hover:bg-accent border",
        className
      )}
    >
      {children ?? "Previous"}
    </button>
  )
}

function QuestionnaireNext({
  className,
  children,
}: React.ComponentProps<"button">) {
  const ctx = useQuestionnaire()
  if (ctx.isLast) return null

  return (
    <button
      type="button"
      onClick={ctx.goNext}
      className={cn(
        buttonBase,
        "bg-primary text-primary-foreground hover:bg-primary/90",
        className
      )}
    >
      {children ?? "Next"}
    </button>
  )
}

function QuestionnaireSubmit({
  className,
  children,
}: React.ComponentProps<"button">) {
  const ctx = useQuestionnaire()
  if (!ctx.isLast) return null

  return (
    <button
      type="submit"
      className={cn(
        buttonBase,
        "bg-primary text-primary-foreground hover:bg-primary/90",
        className
      )}
    >
      {children ?? "Submit"}
    </button>
  )
}

export {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
}
