'use client'

import { CheckCircleIcon as CheckIcon } from '@solar-icons/react/linear/check-circle'
import { CloseIcon as XIcon } from '@solar-icons/react/linear/close'
import { AltArrowLeftIcon as ChevronLeftIcon } from '@solar-icons/react/linear/alt-arrow-left'
import { AltArrowRightIcon as ChevronRightIcon } from '@solar-icons/react/linear/alt-arrow-right'
import { CopyIcon } from '@solar-icons/react/linear/copy'
import { PenIcon } from '@solar-icons/react/linear/pen'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import * as React from 'react'
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        outline:
          'border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        ghost:
          'hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50',
        destructive:
          'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default:
          'h-8 gap-1.5 px-2.5 pb-0.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 pb-0.5 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 pb-0.5 text-[0.8rem] in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: 'h-9 gap-1.5 px-2.5 pb-0.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        icon: 'size-8',
        'icon-xs':
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        'icon-sm':
          'size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-md',
        'icon-lg': 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
        className,
      )}
      {...props}
    />
  )
}

interface EditMessageProps extends Omit<React.ComponentProps<'div'>, 'onCopy'> {
  activeVersion?: number
  defaultVersions?: string[]
  draft?: string
  editing?: boolean
  onActiveVersionChange?: (index: number) => void
  onCopy?: (value: string) => void
  onDraftChange?: (value: string) => void
  onEditingChange?: (editing: boolean) => void
  onSave?: (value: string) => void
  versions?: string[]
}

const ease = [0.23, 1, 0.32, 1] as const

function useControllable<T>(value: T | undefined, initial: T, onChange?: (next: T) => void) {
  const [internal, setInternal] = React.useState(initial)
  const current = value === undefined ? internal : value
  const set = (next: T) => {
    if (value === undefined) setInternal(next)
    onChange?.(next)
  }
  return [current, set] as const
}

function EditMessage({
  activeVersion,
  className,
  defaultVersions = [''],
  draft,
  editing,
  onActiveVersionChange,
  onCopy,
  onDraftChange,
  onEditingChange,
  onSave,
  versions,
  ...props
}: EditMessageProps) {
  const editorId = React.useId()
  const [internalVersions, setInternalVersions] = React.useState(defaultVersions)
  const allVersions = versions ?? internalVersions
  const [active, setActive] = useControllable(
    activeVersion,
    allVersions.length - 1,
    onActiveVersionChange,
  )
  const [isEditing, setEditing] = useControllable(editing, false, onEditingChange)
  const [value, setValue] = useControllable(draft, '', onDraftChange)
  const [copied, setCopied] = React.useState(false)
  const index = Math.min(active, allVersions.length - 1)
  const message = allVersions[index] ?? ''

  React.useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1400)
    return () => clearTimeout(timer)
  }, [copied])

  function startEditing() {
    setValue(message)
    setEditing(true)
  }

  function save() {
    const next = value.trim()
    if (!next || next === message) return setEditing(false)
    if (versions === undefined) setInternalVersions([...allVersions, next])
    setActive(allVersions.length)
    setEditing(false)
    onSave?.(next)
  }

  function copy() {
    void navigator.clipboard?.writeText(message).catch(() => undefined)
    setCopied(true)
    onCopy?.(message)
  }

  return (
    <MotionConfig reducedMotion="user">
      <div
        data-editing={isEditing}
        data-slot="edit-message"
        className={cn(
          'group/message flex w-full flex-col items-end font-sans text-sm tracking-[-0.05px]',
          className,
        )}
        {...props}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {isEditing ? (
            <motion.section
              animate={{ opacity: 1, scale: 1 }}
              className="w-full origin-top-right rounded-[16px] border-0 bg-muted/45 p-3 shadow-none ring-0"
              exit={{ opacity: 0, scale: 0.98 }}
              initial={{ opacity: 0, scale: 0.98 }}
              key="editor"
              transition={{ duration: 0.2, ease }}
            >
              <label className="sr-only" htmlFor={editorId}>
                Edit message
              </label>
              <Textarea
                autoFocus
                id={editorId}
                placeholder="Edit your message…"
                className="min-h-20 resize-none border-0 bg-transparent px-2 py-2 text-sm shadow-none ring-0 focus-visible:ring-0 dark:bg-transparent"
                onChange={(event) => setValue(event.target.value)}
                onFocus={(event) =>
                  event.currentTarget.setSelectionRange(
                    event.currentTarget.value.length,
                    event.currentTarget.value.length,
                  )
                }
                onKeyDown={(event) => {
                  if (event.key === 'Escape') setEditing(false)
                  if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) save()
                }}
                value={value}
              />
              <div className="mt-2 flex items-center justify-end gap-1.5 tracking-[-0.05px]">
                <Button
                  className="h-7 rounded-full px-3 text-muted-foreground hover:text-muted-foreground has-data-[icon=inline-start]:pl-3"
                  onClick={() => setEditing(false)}
                  size="sm"
                  type="button"
                  variant="ghost"
                >
                  <XIcon data-icon="inline-start" /> Cancel
                </Button>
                <Button
                  className="h-7 rounded-full border-0 bg-primary bg-linear-to-b from-[color-mix(in_oklch,var(--primary),var(--primary-foreground)_30%)] to-primary px-3 text-primary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_1px_2px_rgba(0,0,0,0.18)] shadow-none hover:brightness-110 has-data-[icon=inline-start]:pl-3 dark:bg-none"
                  disabled={!value.trim()}
                  onClick={save}
                  size="sm"
                  type="button"
                  variant="default"
                >
                  <CheckIcon data-icon="inline-start" /> Save and send
                </Button>
              </div>
            </motion.section>
          ) : (
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="flex max-w-[85%] origin-bottom-right flex-col items-end"
              exit={{ opacity: 0, scale: 0.97 }}
              initial={{ opacity: 0, scale: 0.97, y: 4 }}
              key="message"
              transition={{ duration: 0.2, ease }}
            >
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  className="w-fit rounded-[16px] bg-primary bg-linear-to-b from-[color-mix(in_oklch,var(--primary),var(--primary-foreground)_30%)] to-primary px-3.5 py-2.5 text-sm leading-6 whitespace-pre-wrap text-primary-foreground dark:bg-none"
                  exit={{ opacity: 0, filter: 'blur(2px)' }}
                  initial={{ opacity: 0, filter: 'blur(2px)' }}
                  key={`${index}-${message}`}
                  transition={{ duration: 0.2, ease }}
                >
                  {message}
                </motion.div>
              </AnimatePresence>
              <div
                className={cn(
                  'mt-1 flex items-center gap-0.5 text-muted-foreground transition-opacity duration-150 group-focus-within/message:opacity-100 group-hover/message:opacity-100',
                  allVersions.length > 1 ? 'opacity-100' : 'opacity-0',
                )}
              >
                {allVersions.length > 1 && (
                  <nav aria-label="Message versions" className="mr-1 flex items-center">
                    <Button
                      aria-label="Previous version"
                      className="text-muted-foreground hover:text-muted-foreground"
                      disabled={index === 0}
                      onClick={() => setActive(index - 1)}
                      size="icon-xs"
                      variant="ghost"
                    >
                      <ChevronLeftIcon />
                    </Button>
                    <span
                      aria-live="polite"
                      className="min-w-8 text-center text-xs leading-5 tabular-nums"
                    >
                      {index + 1}/{allVersions.length}
                    </span>
                    <Button
                      aria-label="Next version"
                      className="text-muted-foreground hover:text-muted-foreground"
                      disabled={index === allVersions.length - 1}
                      onClick={() => setActive(index + 1)}
                      size="icon-xs"
                      variant="ghost"
                    >
                      <ChevronRightIcon />
                    </Button>
                  </nav>
                )}
                <Button
                  aria-label={copied ? 'Copied' : 'Copy message'}
                  className="text-muted-foreground hover:text-muted-foreground"
                  onClick={copy}
                  size="icon-xs"
                  variant="ghost"
                >
                  <span className="grid *:col-start-1 *:row-start-1 *:transition-[opacity,scale] *:duration-150 motion-reduce:*:transition-opacity">
                    <CopyIcon className={cn(copied && 'scale-75 opacity-0')} />
                    <CheckIcon className={cn(!copied && 'scale-75 opacity-0')} />
                  </span>
                </Button>
                <Button
                  aria-label="Edit message"
                  className="text-muted-foreground hover:text-muted-foreground"
                  onClick={startEditing}
                  size="icon-xs"
                  variant="ghost"
                >
                  <PenIcon />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  )
}

export { EditMessage }
export type { EditMessageProps }
export default EditMessage
