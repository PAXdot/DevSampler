'use client'

import { AltArrowDownIcon as ChevronDownIcon } from '@solar-icons/react/linear/alt-arrow-down'
import { ChecklistIcon as ListTodoIcon } from '@solar-icons/react/linear/checklist'
import { LoaderIcon as LoaderCircleIcon } from '@solar-icons/react/linear/loader'
import * as React from 'react'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible'
import { cn } from 'cn'

function Collapsible({ ...props }: CollapsiblePrimitive.Root.Props) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({ ...props }: CollapsiblePrimitive.Trigger.Props) {
  return <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />
}

function CollapsibleContent({ ...props }: CollapsiblePrimitive.Panel.Props) {
  return <CollapsiblePrimitive.Panel data-slot="collapsible-content" {...props} />
}

interface AgentTodoItem {
  detail?: string
  id: string
  label: string
  status: 'complete' | 'in-progress' | 'pending'
}

interface TodoListProps extends React.ComponentProps<typeof Collapsible> {
  items: AgentTodoItem[]
  onItemToggle?: (id: string) => void
  title?: string
}

const ease = [0.23, 1, 0.32, 1] as const
const spring = { type: 'spring', stiffness: 500, damping: 30 } as const

function TodoList({
  className,
  defaultOpen = true,
  items,
  onItemToggle,
  title = 'Plan',
  ...props
}: TodoListProps) {
  const complete = items.filter((item) => item.status === 'complete').length
  const [openId, setOpenId] = React.useState<string>()

  return (
    <MotionConfig reducedMotion="user">
      <style
        href="pastaui-shimmer"
        precedence="default"
      >{`@keyframes pastaui-shimmer{from{background-position:200% 0}to{background-position:-200% 0}}`}</style>
      <Collapsible
        data-slot="todo-list"
        className={cn(
          'rounded-[16px] bg-card p-4 font-sans text-sm font-[450] tracking-[-0.05px] text-muted-foreground shadow-[0_0_0_0.5px_rgb(0_0_0/0.088),0_3px_6px_-2px_rgb(0_0_0/0.02),0_1px_1px_0_rgb(0_0_0/0.04)] dark:shadow-[0_0_0_0.5px_rgb(255_255_255/0.088),0_3px_6px_-2px_rgb(0_0_0/0.02),0_1px_1px_0_rgb(0_0_0/0.04)]',
          className,
        )}
        defaultOpen={defaultOpen}
        {...props}
      >
        <CollapsibleTrigger
          className="group flex w-full items-center gap-2 rounded-sm text-left text-[15px] font-medium tracking-[-0.05px] leading-5 outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
          render={<button aria-label="Toggle agent plan" type="button" />}
        >
          <ListTodoIcon aria-hidden="true" className="size-4 shrink-0" />
          <span>{title}</span>
          <span className="ml-auto flex shrink-0 overflow-hidden text-xs leading-5 font-[450] text-muted-foreground tabular-nums">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.span
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                initial={{ opacity: 0, y: 10 }}
                key={complete}
                transition={spring}
              >
                {complete}
              </motion.span>
            </AnimatePresence>
            /{items.length}
          </span>
          <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground transition-[rotate] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-data-panel-open:rotate-180 motion-reduce:transition-none" />
        </CollapsibleTrigger>
        <div className="mt-3 h-0.5 overflow-hidden rounded-full bg-muted">
          <motion.div
            animate={{ scaleX: items.length ? complete / items.length : 0 }}
            className="h-full origin-left rounded-full bg-foreground/50"
            initial={false}
            transition={{ duration: 0.5, ease }}
          />
        </div>
        <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height,opacity] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] data-ending-style:h-0 data-ending-style:opacity-0 data-starting-style:h-0 data-starting-style:opacity-0 motion-reduce:transition-opacity">
          <ol className="mt-4 space-y-3">
            {items.map((item) => (
              <motion.li
                animate={{ opacity: item.status === 'pending' ? 0.6 : 1 }}
                className="flex gap-3"
                initial={false}
                key={item.id}
                transition={{ duration: 0.3, ease }}
              >
                {onItemToggle ? (
                  <button
                    aria-label={
                      item.status === 'complete'
                        ? `Mark ${item.label} as not done`
                        : `Mark ${item.label} as done`
                    }
                    aria-pressed={item.status === 'complete'}
                    className="-m-1 rounded-full p-1 outline-none transition-[scale] duration-150 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/30 active:scale-90"
                    onClick={() => onItemToggle(item.id)}
                    type="button"
                  >
                    <TodoStatus status={item.status} />
                  </button>
                ) : (
                  <TodoStatus status={item.status} />
                )}
                <div className="min-w-0 flex-1">
                  <p
                    aria-expanded={
                      item.detail ? openId === item.id || item.status === 'in-progress' : undefined
                    }
                    className={cn(
                      'relative w-fit max-w-full cursor-default text-sm leading-5 font-[450] transition-colors duration-300',
                      item.detail &&
                        item.status !== 'in-progress' &&
                        'cursor-pointer hover:text-foreground',
                      item.status === 'in-progress' &&
                        'bg-gradient-to-r from-muted-foreground via-foreground to-muted-foreground bg-[length:200%_100%] bg-clip-text text-transparent animate-[pastaui-shimmer_1.6s_linear_infinite] motion-reduce:animate-none motion-reduce:bg-none motion-reduce:text-muted-foreground',
                    )}
                  >
                    {item.label}
                    {item.detail && item.status !== 'in-progress' && (
                      <button
                        aria-label={
                          openId === item.id
                            ? `Hide details for ${item.label}`
                            : `Show details for ${item.label}`
                        }
                        className="absolute inset-0 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
                        onClick={() =>
                          setOpenId((current) => (current === item.id ? undefined : item.id))
                        }
                        type="button"
                      />
                    )}
                    <motion.span
                      animate={{ scaleX: item.status === 'complete' ? 1 : 0 }}
                      aria-hidden="true"
                      className="absolute inset-x-0 top-1/2 h-px origin-left bg-current"
                      initial={false}
                      transition={{ duration: 0.35, ease }}
                    />
                  </p>
                  <AnimatePresence initial={false}>
                    {item.detail && (item.status === 'in-progress' || openId === item.id) && (
                      <motion.p
                        animate={{ height: 'auto', opacity: 1 }}
                        className="overflow-hidden text-xs leading-5 font-[450] text-muted-foreground"
                        exit={{ height: 0, opacity: 0 }}
                        initial={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease }}
                      >
                        <span className="block pt-0.5">{item.detail}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>
            ))}
          </ol>
        </CollapsibleContent>
      </Collapsible>
    </MotionConfig>
  )
}

function TodoStatus({ status }: Pick<AgentTodoItem, 'status'>) {
  return (
    <span className="relative mt-0.5 flex size-4 shrink-0 items-center justify-center">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          animate={{ opacity: 1, scale: 1 }}
          className="flex size-4 items-center justify-center"
          exit={{ opacity: 0, scale: 0.6 }}
          initial={{ opacity: 0, scale: 0.6 }}
          key={status}
          transition={spring}
        >
          {status === 'complete' ? (
            <svg
              aria-label="Complete"
              className="size-4 text-emerald-500"
              role="img"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" fill="currentColor" r="7.5" />
              <motion.path
                animate={{ pathLength: 1 }}
                d="M5 8.25 7 10.25 11 6"
                fill="none"
                initial={{ pathLength: 0 }}
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                transition={{ delay: 0.08, duration: 0.3, ease }}
              />
            </svg>
          ) : status === 'in-progress' ? (
            <LoaderCircleIcon
              aria-label="In progress"
              className="size-3.5 animate-spin motion-reduce:animate-none"
            />
          ) : (
            <>
              <span aria-hidden="true" className="size-3.5 rounded-full border border-current" />
              <span className="sr-only">Pending</span>
            </>
          )}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export { TodoList }
export type { AgentTodoItem, TodoListProps }
export default TodoList
