'use client'

import { Menu } from '@base-ui/react/menu'
import { CheckReadIcon as CheckIcon } from '@solar-icons/react/linear/check-read'
import { AltArrowDownIcon as ChevronDownIcon } from '@solar-icons/react/linear/alt-arrow-down'
import { AltArrowRightIcon as ChevronRightIcon } from '@solar-icons/react/linear/alt-arrow-right'
import { useState, type ReactNode } from 'react'
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

interface ModelOption {
  description?: string
  provider?: 'openai' | 'claude'
  family?: string
  id: string
  name: string
  price?: string
  badge?: string
  requiresUpgrade?: boolean
}

type ModelEffort = 'low' | 'medium' | 'high' | 'extra'

interface ModelPickerProps {
  className?: string
  defaultValue?: string
  models: ModelOption[]
  moreModels?: ModelOption[]
  onValueChange?: (value: string) => void
  value?: string
  effort?: ModelEffort
  defaultEffort?: ModelEffort
  onEffortChange?: (effort: ModelEffort) => void
  onUpgrade?: (modelId: string) => void
  footer?: ReactNode
}

const surface =
  'w-80 max-h-[var(--available-height)] max-w-[calc(100vw-2rem)] overflow-y-auto rounded-[16px] bg-card p-1.5 font-sans text-sm font-[450] tracking-[-0.05px] text-muted-foreground shadow-card outline-none origin-(--transform-origin) transition-[opacity,scale] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-opacity'

const row =
  'flex w-full cursor-pointer items-center gap-3 rounded-[10px] px-3 py-2 text-left outline-none data-highlighted:bg-muted data-disabled:cursor-default data-disabled:opacity-50'

const effortLabels: Record<ModelEffort, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
  extra: 'Extra',
}

function OpenAIIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 611 611" fill="currentColor" aria-hidden="true" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M252.794 108.802C289.191 99.0484 326.265 110.305 351.148 135.135C385.113 126.072 422.85 134.862 449.492 161.505C476.136 188.149 484.925 225.888 475.862 259.85V259.854C500.696 284.735 511.95 321.81 502.198 358.207C492.447 394.602 464.161 421.084 430.215 430.217C421.083 464.162 394.603 492.448 358.206 502.199C321.812 511.951 284.734 500.693 259.852 475.864C225.887 484.927 188.15 476.137 161.507 449.495C134.864 422.851 126.073 385.111 135.136 351.149C110.304 326.266 99.0496 289.192 108.801 252.795C118.552 216.4 146.84 189.918 180.784 180.785C189.917 146.841 216.396 118.553 252.794 108.802ZM374.292 407.145C374.292 411.271 372.092 415.086 368.517 417.148L283.723 466.102C302.487 480.585 327.555 486.459 352.217 479.852C386.997 470.532 410.068 439.312 410.555 405.006V317.717C410.555 315.08 409.125 312.621 406.843 311.303L374.292 292.509V407.145ZM251.868 415.897C248.296 417.959 243.893 417.959 240.317 415.897L155.526 366.942C152.366 390.436 159.811 415.08 177.866 433.136H177.863C203.325 458.594 241.896 462.962 271.85 446.232L347.449 402.586C349.735 401.268 351.148 398.8 351.148 396.163V358.579L251.868 415.897ZM368.602 220.628C366.319 219.309 363.474 219.318 361.191 220.637L328.641 239.431L427.921 296.749C431.496 298.811 433.697 302.627 433.697 306.752V404.661C455.622 395.654 473.244 376.881 479.851 352.218C489.169 317.442 473.668 281.85 444.201 264.274L368.602 220.628ZM177.303 206.34C155.377 215.348 137.756 234.122 131.148 258.783C121.832 293.561 137.331 329.153 166.799 346.727L242.398 390.373C244.68 391.692 247.525 391.684 249.807 390.366L282.357 371.572L183.078 314.253C179.504 312.189 177.303 308.375 177.303 304.251V206.34ZM259.849 279.145V331.858L305.5 358.213L351.15 331.858V279.145L305.5 252.789L259.849 279.145ZM327.276 144.9C308.512 130.418 283.445 124.543 258.782 131.15C224.002 140.471 200.931 171.691 200.445 205.995V293.286C200.445 295.923 201.875 298.381 204.158 299.7L236.707 318.493V203.856C236.707 199.731 238.909 195.916 242.483 193.853L327.276 144.9ZM433.137 177.867C407.675 152.407 369.103 148.038 339.149 164.769L263.55 208.415C261.265 209.734 259.852 212.202 259.852 214.838V252.423L359.132 195.105C362.703 193.041 367.108 193.041 370.682 195.105L455.473 244.06C458.635 220.567 451.189 195.922 433.135 177.867H433.137Z" />
    </svg>
  )
}

function ClaudeIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 256 257" aria-hidden="true" {...props}>
      <path fill="#D97757" d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z" />
    </svg>
  )
}

function ModelProviderIcon({ provider }: { provider?: ModelOption['provider'] }) {
  if (!provider) return null
  if (provider === 'claude') return <ClaudeIcon className="size-4 shrink-0" />
  return <OpenAIIcon className="size-4 shrink-0 scale-150 text-black dark:text-white" />
}

function ModelPicker({
  className,
  defaultValue,
  models,
  moreModels = [],
  onValueChange,
  value,
  effort,
  defaultEffort = 'medium',
  onEffortChange,
  onUpgrade,
  footer,
}: ModelPickerProps) {
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? models.find((model) => !model.requiresUpgrade)?.id ?? '',
  )
  const [internalEffort, setInternalEffort] = useState(defaultEffort)
  const selectedValue = value ?? internalValue
  const selectedEffort = effort ?? internalEffort
  const selectedModel = [...models, ...moreModels].find((model) => model.id === selectedValue)

  function selectModel(id: string) {
    if (value === undefined) setInternalValue(id)
    onValueChange?.(id)
  }

  function modelRows(items: ModelOption[]) {
    return items.map((model) => {
      const content = (
        <>
          <ModelProviderIcon provider={model.provider} />
          <span className="min-w-0 flex-1">
            <span className="flex flex-wrap items-center gap-2 text-sm">
              {model.name}
              {(model.badge || model.family) && (
                <span className="rounded-sm bg-muted px-1.5 text-xs leading-5">
                  {model.badge ?? model.family}
                </span>
              )}
            </span>
            {model.description && (
              <span className="mt-0.5 block text-xs leading-5">{model.description}</span>
            )}
          </span>
        </>
      )
      return model.requiresUpgrade ? (
        <Menu.Item
          className={row}
          key={model.id}
          disabled={!onUpgrade}
          onClick={() => onUpgrade?.(model.id)}
        >
          {content}
          <span className="shrink-0 rounded-full bg-primary bg-linear-to-b from-[color-mix(in_oklch,var(--primary),var(--primary-foreground)_30%)] to-primary px-2.5 py-1 text-xs leading-4 text-primary-foreground dark:bg-none">
            Upgrade
          </span>
        </Menu.Item>
      ) : (
        <Menu.RadioItem className={row} key={model.id} value={model.id} closeOnClick>
          {content}
          {model.price && <span className="text-xs">{model.price}</span>}
          <Menu.RadioItemIndicator className="ml-auto shrink-0">
            <CheckIcon className="size-4" />
          </Menu.RadioItemIndicator>
        </Menu.RadioItem>
      )
    })
  }

  return (
    <Menu.Root>
      <Menu.Trigger
        render={
          <Button
            className={cn(
              'h-8 gap-2 rounded-full px-3 text-sm font-[450] tracking-[-0.05px] text-muted-foreground',
              className,
            )}
            variant="ghost"
          />
        }
      >
        <ModelProviderIcon provider={selectedModel?.provider} />
        <span className="max-w-40 truncate">{selectedModel?.name ?? 'Select model'}</span>
        <span className="text-muted-foreground/80">{effortLabels[selectedEffort]}</span>
        <ChevronDownIcon className="size-3.5 transition-[rotate] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] in-data-popup-open:rotate-180" />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner side="bottom" align="end" sideOffset={8} className="z-50">
          <Menu.Popup className={surface}>
            <Menu.RadioGroup value={selectedValue} onValueChange={selectModel}>
              {modelRows(models)}
            </Menu.RadioGroup>
            <Menu.Separator className="mx-3 my-1 h-px bg-border/60" />
            <Menu.SubmenuRoot>
              <Menu.SubmenuTrigger className={row}>
                Effort <span className="ml-auto text-xs">{effortLabels[selectedEffort]}</span>
                <ChevronRightIcon className="size-3.5" />
              </Menu.SubmenuTrigger>
              <Menu.Portal>
                <Menu.Positioner side="right" align="start" sideOffset={6} className="z-50">
                  <Menu.Popup className={cn(surface, 'w-64')}>
                    <p className="px-3 py-2 text-xs leading-5">
                      Higher effort gives the model more time to work through complex tasks.
                    </p>
                    <Menu.RadioGroup
                      value={selectedEffort}
                      onValueChange={(next: ModelEffort) => {
                        if (effort === undefined) setInternalEffort(next)
                        onEffortChange?.(next)
                      }}
                    >
                      {(Object.keys(effortLabels) as ModelEffort[]).map((level) => (
                        <Menu.RadioItem className={row} key={level} value={level}>
                          {effortLabels[level]}
                          <Menu.RadioItemIndicator className="ml-auto">
                            <CheckIcon className="size-4" />
                          </Menu.RadioItemIndicator>
                        </Menu.RadioItem>
                      ))}
                    </Menu.RadioGroup>
                  </Menu.Popup>
                </Menu.Positioner>
              </Menu.Portal>
            </Menu.SubmenuRoot>
            {moreModels.length > 0 && (
              <>
                <Menu.Separator className="mx-3 my-1 h-px bg-border/60" />
                <Menu.SubmenuRoot>
                  <Menu.SubmenuTrigger className={row}>
                    More models
                    <ChevronRightIcon className="ml-auto size-3.5" />
                  </Menu.SubmenuTrigger>
                  <Menu.Portal>
                    <Menu.Positioner side="right" align="start" sideOffset={6} className="z-50">
                      <Menu.Popup className={surface}>
                        <Menu.RadioGroup value={selectedValue} onValueChange={selectModel}>
                          {modelRows(moreModels)}
                        </Menu.RadioGroup>
                      </Menu.Popup>
                    </Menu.Positioner>
                  </Menu.Portal>
                </Menu.SubmenuRoot>
              </>
            )}
            {footer && (
              <>
                <Menu.Separator className="mx-3 my-1 h-px bg-border/60" />
                <div className="px-3 py-2 text-xs leading-5">{footer}</div>
              </>
            )}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}

const defaultModels: ModelOption[] = [
  {
    id: 'gpt-6-astra',
    name: 'GPT-6 Astra',
    provider: 'openai',
    description: 'Complex reasoning and coding',
  },
  {
    id: 'gpt-5.6-sol',
    name: 'GPT-5.6 Sol',
    provider: 'openai',
    description: 'Professional work and everyday tasks',
  },
  {
    id: 'claude-opus-5',
    name: 'Claude Opus 5',
    provider: 'claude',
    description: 'Complex tasks and extended analysis',
  },
  {
    id: 'claude-sonnet-5',
    name: 'Claude Sonnet 5',
    provider: 'claude',
    description: 'Everyday tasks and agentic coding',
  },
]

const additionalModels: ModelOption[] = [
  {
    id: 'gpt-5.6-terra',
    name: 'GPT-5.6 Terra',
    provider: 'openai',
    description: 'Balanced capability and cost',
  },
  {
    id: 'gpt-5.6-luna',
    name: 'GPT-5.6 Luna',
    provider: 'openai',
    description: 'Fast, cost-sensitive workloads',
  },
  {
    id: 'claude-haiku-4-5',
    name: 'Claude Haiku 4.5',
    provider: 'claude',
    description: 'Quick answers and lightweight tasks',
  },
]

export { ModelPicker, defaultModels, additionalModels }
export type { ModelOption, ModelEffort, ModelPickerProps }
export default ModelPicker
