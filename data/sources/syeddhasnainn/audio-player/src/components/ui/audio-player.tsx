'use client'

import { SoundwaveIcon as AudioLinesIcon } from '@solar-icons/react/linear/soundwave'
import { PauseIcon } from '@solar-icons/react/bold/pause'
import { PlayIcon } from '@solar-icons/react/bold/play'
import { RewindBackIcon as PreviousIcon } from '@solar-icons/react/bold/rewind-back'
import { RewindForwardIcon as NextIcon } from '@solar-icons/react/bold/rewind-forward'
import { AirbudsIcon } from '@solar-icons/react/bold/airbuds'
import * as React from 'react'
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import { Slider as SliderPrimitive } from '@base-ui/react/slider'

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

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderPrimitive.Root.Props) {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max]

  return (
    <SliderPrimitive.Root
      className={cn('data-horizontal:w-full data-vertical:h-full', className)}
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control className="relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow overflow-hidden rounded-full bg-muted select-none data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="bg-primary select-none data-horizontal:h-full data-vertical:w-full"
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className="relative block size-3 shrink-0 rounded-full border border-ring bg-white ring-ring/50 transition-[color,box-shadow] select-none after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 disabled:pointer-events-none disabled:opacity-50"
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

interface AudioPlayerProps extends Omit<React.ComponentProps<'section'>, 'onChange'> {
  currentTime: number
  artworkUrl?: string
  duration: number
  isPlaying?: boolean
  onChange?: (time: number) => void
  onToggle?: () => void
  onPrevious?: () => void
  onNext?: () => void
  onOutput?: () => void
  subtitle?: string
  title: string
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const remainder = Math.floor(seconds % 60)
  return `${minutes}:${remainder.toString().padStart(2, '0')}`
}

function AudioPlayer({
  className,
  artworkUrl,
  currentTime,
  duration,
  isPlaying = false,
  onChange,
  onToggle,
  onPrevious,
  onNext,
  onOutput,
  subtitle,
  title,
  ...props
}: AudioPlayerProps) {
  return (
    <section
      data-slot="audio-player"
      className={cn(
        'rounded-[16px] bg-card p-6 font-sans text-sm font-[450] tracking-[-0.05px] text-muted-foreground shadow-card sm:p-7',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-5">
        {artworkUrl ? (
          <img src={artworkUrl} alt="" className="size-20 shrink-0 rounded-[10px] object-cover" />
        ) : (
          <span className="flex size-20 shrink-0 items-center justify-center rounded-[10px] bg-muted">
            <AudioLinesIcon aria-hidden="true" className="size-8 text-muted-foreground" />
          </span>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="truncate card-heading">{title}</h3>
          {subtitle && (
            <p className="mt-1 truncate text-xs leading-5 text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <AudioLinesIcon aria-hidden="true" className="size-7 shrink-0 text-muted-foreground" />
      </div>
      <div className="mt-5 flex items-center gap-2.5">
        <span className="shrink-0 text-xs leading-5 text-muted-foreground tabular-nums">
          {formatTime(currentTime)}
        </span>
        <Slider
          aria-label="Audio position"
          className="min-w-0 flex-1 [--muted:var(--audio-track)] [--primary:var(--audio-progress)] [&_[data-slot=slider-thumb]]:size-4 [&_[data-slot=slider-thumb]]:opacity-0 [&_[data-slot=slider-thumb]]:transition-opacity [&_[data-slot=slider-thumb]]:duration-150 [&_[data-slot=slider-thumb]:has(:focus-visible)]:opacity-100 [&_[data-slot=slider-track]]:h-1.5 [&:hover_[data-slot=slider-thumb]]:opacity-100"
          max={duration}
          min={0}
          onValueChange={(value) => onChange?.(Array.isArray(value) ? value[0] : value)}
          value={[currentTime]}
        />
        <span className="shrink-0 text-right text-xs leading-5 text-muted-foreground tabular-nums">
          −{formatTime(Math.max(0, duration - currentTime))}
        </span>
      </div>
      <div className="relative mt-4 flex items-center justify-center gap-6">
        <Button
          aria-label={onPrevious ? 'Previous track' : 'Rewind 10 seconds'}
          disabled={!onPrevious && !onChange}
          onClick={() => (onPrevious ? onPrevious() : onChange?.(Math.max(0, currentTime - 10)))}
          className="size-11 rounded-md text-muted-foreground hover:bg-foreground/10 hover:text-muted-foreground"
          size="icon"
          variant="ghost"
        >
          <PreviousIcon className="size-8" />
        </Button>
        <Button
          aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
          disabled={!onToggle}
          onClick={onToggle}
          className="size-14 rounded-md text-muted-foreground hover:bg-foreground/10 hover:text-muted-foreground"
          size="icon"
          variant="ghost"
        >
          <span className="grid *:col-start-1 *:row-start-1 *:transition-[opacity,scale] *:duration-150 *:ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:*:transition-opacity">
            <PlayIcon className={cn('size-10', isPlaying && 'scale-75 opacity-0')} />
            <PauseIcon className={cn('size-10', !isPlaying && 'scale-75 opacity-0')} />
          </span>
        </Button>
        <Button
          aria-label={onNext ? 'Next track' : 'Forward 10 seconds'}
          disabled={!onNext && !onChange}
          onClick={() => (onNext ? onNext() : onChange?.(Math.min(duration, currentTime + 10)))}
          className="size-11 rounded-md text-muted-foreground hover:bg-foreground/10 hover:text-muted-foreground"
          size="icon"
          variant="ghost"
        >
          <NextIcon className="size-8" />
        </Button>
        {onOutput ? (
          <Button
            aria-label="Audio output"
            onClick={onOutput}
            className="absolute right-0 size-8 rounded-md text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
            size="icon"
            variant="ghost"
          >
            <AirbudsIcon className="size-6" />
          </Button>
        ) : (
          <AirbudsIcon
            aria-hidden="true"
            className="absolute right-0 size-6 text-muted-foreground"
          />
        )}
      </div>
    </section>
  )
}

export { AudioPlayer }
export type { AudioPlayerProps }
export default AudioPlayer
