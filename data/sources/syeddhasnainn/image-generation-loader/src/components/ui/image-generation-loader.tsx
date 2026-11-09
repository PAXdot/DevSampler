'use client'

import { ExportIcon } from '@solar-icons/react/linear/export'
import * as React from 'react'
import { cn } from 'cn'
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

const GRID_GAP = 40 / 3

const BASE_DOT_RADIUS = 1.1

const BASE_ALPHA = 0.2

const ORB_RADIUS_SCALE = 0.5

const MIN_ACTIVE_DOT_DIAMETER = 2

const MAX_ACTIVE_DOT_DIAMETER = 7

const FULL_SIZE_PROGRESS = 0.7

const PROGRESS_NORMALIZER = 0.82

const FRAME_DURATION = 1000 / 30

interface ImageGenerationCanvasProps {
  progress: number
}

interface DrawLoaderOptions {
  accentColor: string
  elapsedMilliseconds: number
  height: number
  progress: number
  reducedMotion: boolean
  width: number
}

function clamp(value: number) {
  return Math.min(1, Math.max(0, value))
}

function smoothstep(value: number) {
  const clampedValue = clamp(value)
  return clampedValue * clampedValue * (3 - 2 * clampedValue)
}

function pingPong(from: number, to: number, duration: number, elapsed: number) {
  const phase = (elapsed / duration) % 2
  const triangle = phase <= 1 ? phase : 2 - phase
  const easedProgress = (1 - Math.cos(triangle * Math.PI)) / 2

  return from + (to - from) * easedProgress
}

function orbFalloff(radius: number, distance: number) {
  const innerRadius = radius * 0.14
  const broadFalloff = (distance - innerRadius) / Math.max(radius - innerRadius, 0.001)
  const coreFalloff = (distance - innerRadius) / Math.max(radius * 0.32, 0.001)

  return (1 - smoothstep(broadFalloff)) * (1 - smoothstep(coreFalloff) * 0.12)
}

function drawLoader(
  context: CanvasRenderingContext2D,
  { accentColor, elapsedMilliseconds, height, progress, reducedMotion, width }: DrawLoaderOptions,
) {
  context.clearRect(0, 0, width, height)

  if (width < GRID_GAP || height < GRID_GAP) return

  const columns = Math.floor(width / GRID_GAP)
  const rows = Math.floor(height / GRID_GAP)
  const offsetX = (width - (columns - 1) * GRID_GAP) / 2
  const offsetY = (height - (rows - 1) * GRID_GAP) / 2
  const elapsedSeconds = reducedMotion ? 0 : Math.max(0, elapsedMilliseconds) / 1000
  const isCorner = (column: number, row: number) =>
    (column === 0 || column === columns - 1) && (row === 0 || row === rows - 1)

  context.save()
  context.fillStyle = accentColor
  context.globalAlpha = BASE_ALPHA
  context.beginPath()

  for (let column = 0; column < columns; column += 1) {
    for (let row = 0; row < rows; row += 1) {
      if (isCorner(column, row)) continue

      const x = offsetX + column * GRID_GAP
      const y = offsetY + row * GRID_GAP
      context.moveTo(x + BASE_DOT_RADIUS, y)
      context.arc(x, y, BASE_DOT_RADIUS, 0, Math.PI * 2)
    }
  }

  context.fill()

  const progressFactor = clamp(progress / PROGRESS_NORMALIZER) ** 1.28
  const growth = progressFactor * (0.72 - 0.08 * smoothstep((progressFactor - 0.5) / 0.5))
  const firstOrbX = pingPong(0.18, 0.82, 3.46, elapsedSeconds)
  const firstOrbY = pingPong(0.18, 0.82, 4.87, elapsedSeconds)
  const secondOrbX = pingPong(0.82, 0.18, 4.31, elapsedSeconds)
  const secondOrbY = pingPong(0.82, 0.18, 4.42, elapsedSeconds)
  const firstOrbRadius = pingPong(0.35, 0.6, 3.6, elapsedSeconds) * ORB_RADIUS_SCALE + growth
  const secondOrbRadius = pingPong(0.43, 0.7, 2.4, elapsedSeconds) * ORB_RADIUS_SCALE + growth
  const radiusStrength = reducedMotion ? 0.234 : pingPong(0.105, 0.234, 2.25, elapsedSeconds)
  const minimumBrightAlpha = pingPong(0.58, 0.82, 2.1, elapsedSeconds)
  const maxDotDiameter =
    MIN_ACTIVE_DOT_DIAMETER +
    (MAX_ACTIVE_DOT_DIAMETER - MIN_ACTIVE_DOT_DIAMETER) * smoothstep(progress / FULL_SIZE_PROGRESS)
  const maximumRadius = Math.min(GRID_GAP * 0.48, maxDotDiameter / 2)

  for (let column = 0; column < columns; column += 1) {
    for (let row = 0; row < rows; row += 1) {
      if (isCorner(column, row)) continue

      const normalizedX = columns === 1 ? 0.5 : column / (columns - 1)
      const normalizedY = rows === 1 ? 0.5 : row / (rows - 1)
      const firstOrbStrength = orbFalloff(
        firstOrbRadius,
        Math.hypot(normalizedX - firstOrbX, normalizedY - firstOrbY),
      )
      const secondOrbStrength = orbFalloff(
        secondOrbRadius,
        Math.hypot(normalizedX - secondOrbX, normalizedY - secondOrbY),
      )
      const fieldStrength = Math.max(firstOrbStrength, secondOrbStrength)
      const brightness = progressFactor * fieldStrength ** (0.85 + progressFactor * 1.1)
      const dotRadius = maximumRadius * fieldStrength ** 1.15 * (radiusStrength / 0.234)

      if (dotRadius <= 0.2) continue

      const x = offsetX + column * GRID_GAP
      const y = offsetY + row * GRID_GAP
      context.globalAlpha = minimumBrightAlpha + (1 - minimumBrightAlpha) * brightness * 0.64
      context.beginPath()
      context.arc(x, y, dotRadius, 0, Math.PI * 2)
      context.fill()
    }
  }

  context.restore()
}

function ImageGenerationCanvas({ progress }: ImageGenerationCanvasProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const progressRef = React.useRef(progress)

  React.useEffect(() => {
    progressRef.current = progress
  }, [progress])

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const drawingCanvas = canvas
    const drawingContext = context

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const startedAt = performance.now()
    let animationFrame = 0
    let reducedMotionTimeout = 0
    let lastFrameAt = Number.NEGATIVE_INFINITY
    let width = 0
    let height = 0

    function resize() {
      const nextWidth = drawingCanvas.clientWidth
      const nextHeight = drawingCanvas.clientHeight
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      const backingWidth = Math.round(nextWidth * pixelRatio)
      const backingHeight = Math.round(nextHeight * pixelRatio)

      if (drawingCanvas.width !== backingWidth || drawingCanvas.height !== backingHeight) {
        drawingCanvas.width = backingWidth
        drawingCanvas.height = backingHeight
      }

      width = nextWidth
      height = nextHeight
      drawingContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }

    function draw(timestamp: number) {
      if (timestamp - lastFrameAt >= FRAME_DURATION) {
        drawLoader(drawingContext, {
          accentColor: getComputedStyle(drawingCanvas).color,
          elapsedMilliseconds: timestamp - startedAt,
          height,
          progress: clamp(progressRef.current),
          reducedMotion,
          width,
        })
        lastFrameAt = timestamp
      }

      if (reducedMotion) {
        reducedMotionTimeout = window.setTimeout(() => draw(performance.now()), 1000)
      } else {
        animationFrame = window.requestAnimationFrame(draw)
      }
    }

    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(drawingCanvas)
    animationFrame = window.requestAnimationFrame(draw)

    return () => {
      resizeObserver.disconnect()
      window.cancelAnimationFrame(animationFrame)
      window.clearTimeout(reducedMotionTimeout)
    }
  }, [])

  return (
    <canvas
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full text-foreground"
      ref={canvasRef}
    />
  )
}

const GRID_SIZE = 17

const TICK_RATE = 120

interface Cell {
  x: number
  y: number
}

interface Direction extends Cell {}

interface GameState {
  direction: Direction
  food: Cell
  gameOver: boolean
  paused: boolean
  queuedDirection: Direction
  snake: Cell[]
}

type GameAction =
  | { direction: Direction; type: 'turn' }
  | { type: 'restart' }
  | { type: 'tick' }
  | { type: 'toggle-pause' }

interface ImageGenerationSnakeProps extends React.ComponentProps<'button'> {
  onExit: () => void
}

const directions = {
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
  up: { x: 0, y: -1 },
} satisfies Record<string, Direction>

const initialState: GameState = {
  direction: directions.right,
  food: { x: 3, y: 8 },
  gameOver: false,
  paused: false,
  queuedDirection: directions.right,
  snake: [
    { x: 10, y: 8 },
    { x: 9, y: 8 },
    { x: 8, y: 8 },
    { x: 7, y: 8 },
  ],
}

function cellsMatch(first: Cell, second: Cell) {
  return first.x === second.x && first.y === second.y
}

function nextFood(snake: Cell[]) {
  const offset = snake.length * 7

  for (let index = 0; index < GRID_SIZE * GRID_SIZE; index += 1) {
    const candidate = {
      x: (offset + index * 5) % GRID_SIZE,
      y: (offset * 3 + index * 7) % GRID_SIZE,
    }

    if (!snake.some((cell) => cellsMatch(cell, candidate))) return candidate
  }

  return { x: 0, y: 0 }
}

function gameReducer(state: GameState, action: GameAction): GameState {
  if (action.type === 'restart') return initialState

  if (action.type === 'toggle-pause') {
    return state.gameOver ? state : { ...state, paused: !state.paused }
  }

  if (action.type === 'turn') {
    const reversesDirection =
      action.direction.x + state.direction.x === 0 && action.direction.y + state.direction.y === 0

    return reversesDirection ? state : { ...state, queuedDirection: action.direction }
  }

  if (state.paused || state.gameOver) return state

  const direction = state.queuedDirection
  const head = state.snake[0]
  const nextHead = {
    x: (head.x + direction.x + GRID_SIZE) % GRID_SIZE,
    y: (head.y + direction.y + GRID_SIZE) % GRID_SIZE,
  }
  const ateFood = cellsMatch(nextHead, state.food)
  const body = ateFood ? state.snake : state.snake.slice(0, -1)

  if (body.some((cell) => cellsMatch(cell, nextHead))) {
    return { ...state, gameOver: true }
  }

  const snake = [nextHead, ...state.snake]
  if (!ateFood) snake.pop()

  return {
    ...state,
    direction,
    food: ateFood ? nextFood(snake) : state.food,
    queuedDirection: direction,
    snake,
  }
}

function ImageGenerationSnake({ className, onExit, ...props }: ImageGenerationSnakeProps) {
  const [state, dispatch] = React.useReducer(gameReducer, initialState)
  const boardRef = React.useRef<HTMLButtonElement>(null)
  const pointerStartRef = React.useRef<Cell | null>(null)

  React.useEffect(() => {
    boardRef.current?.focus()
  }, [])

  React.useEffect(() => {
    const timer = window.setInterval(() => dispatch({ type: 'tick' }), TICK_RATE)
    return () => window.clearInterval(timer)
  }, [])

  function turn(direction: Direction) {
    dispatch({ direction, type: 'turn' })
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    const direction = {
      ArrowDown: directions.down,
      ArrowLeft: directions.left,
      ArrowRight: directions.right,
      ArrowUp: directions.up,
      a: directions.left,
      d: directions.right,
      s: directions.down,
      w: directions.up,
    }[event.key]

    if (direction) {
      event.preventDefault()
      turn(direction)
      return
    }

    if (event.key === ' ') {
      event.preventDefault()
      dispatch({ type: 'toggle-pause' })
    }

    if (event.key === 'Escape') onExit()
    if (event.key === 'Enter' && state.gameOver) dispatch({ type: 'restart' })
  }

  function handlePointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    pointerStartRef.current = { x: event.clientX, y: event.clientY }
  }

  function handlePointerUp(event: React.PointerEvent<HTMLButtonElement>) {
    const start = pointerStartRef.current
    pointerStartRef.current = null
    if (!start) return

    const x = event.clientX - start.x
    const y = event.clientY - start.y
    if (Math.max(Math.abs(x), Math.abs(y)) < 18) return

    if (Math.abs(x) > Math.abs(y)) turn(x > 0 ? directions.right : directions.left)
    else turn(y > 0 ? directions.down : directions.up)
  }

  const cellSize = 100 / GRID_SIZE

  return (
    <button
      aria-label="Snake. Use arrow keys, WASD, or swipe to move. Press Space to pause or resume, or Escape to exit."
      className={cn(
        'relative size-full touch-none overflow-hidden border-0 bg-transparent p-0 text-foreground outline-none select-none',
        className,
      )}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      ref={boardRef}
      type="button"
      {...props}
    >
      <DotField />

      {state.snake.map((cell, index) => (
        <span
          className={cn(
            'absolute rounded-full bg-foreground shadow-sm',
            index === 0 &&
              "before:absolute before:top-[28%] before:right-[28%] before:size-[12%] before:rounded-full before:bg-background before:content-[''] after:absolute after:top-[28%] after:left-[28%] after:size-[12%] after:rounded-full after:bg-background after:content-['']",
          )}
          key={`${index}-${cell.x}-${cell.y}`}
          style={{
            height: `${cellSize * 0.64}%`,
            left: `${cell.x * cellSize + cellSize * 0.18}%`,
            top: `${cell.y * cellSize + cellSize * 0.18}%`,
            width: `${cellSize * 0.64}%`,
          }}
        />
      ))}

      <span
        className="absolute rounded-full bg-foreground ring-4 ring-background/20"
        style={{
          height: `${cellSize * 0.55}%`,
          left: `${state.food.x * cellSize + cellSize * 0.225}%`,
          top: `${state.food.y * cellSize + cellSize * 0.225}%`,
          width: `${cellSize * 0.55}%`,
        }}
      />

      <div className="absolute top-4 right-4 rounded-full bg-foreground/80 px-2.5 py-1 text-[11px] font-medium text-background tabular-nums backdrop-blur-sm">
        {state.snake.length - initialState.snake.length}
      </div>

      {(state.paused || state.gameOver) && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/72 backdrop-blur-sm">
          <div className="text-center">
            <p className="text-[15px] font-medium tracking-[-0.05px]">{state.gameOver ? 'Game over' : 'Paused'}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {state.gameOver ? 'Press Enter to restart' : 'Press Space to continue'}
            </p>
          </div>
        </div>
      )}

      <span aria-live="polite" className="sr-only">
        Score {state.snake.length - initialState.snake.length}
      </span>
    </button>
  )
}

function DotField() {
  return (
    <>
      <div className="absolute inset-0 [background-image:radial-gradient(circle,var(--foreground)_1px,transparent_1.25px)] [mask-image:radial-gradient(ellipse_at_28%_28%,black_0%,transparent_64%)] [background-size:18px_18px] opacity-35" />
      <div className="absolute inset-0 [background-image:radial-gradient(circle,var(--foreground)_1px,transparent_1.25px)] [mask-image:radial-gradient(ellipse_at_72%_72%,black_0%,transparent_64%)] [background-size:18px_18px] opacity-35" />
    </>
  )
}

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

interface ImageGenerationLoaderProps extends React.ComponentProps<'figure'> {
  alt?: string
  imageUrl?: string
  onEdit?: () => void
  onShare?: () => void
  playable?: boolean
  progress?: number
  prompt: string
  status?: 'complete' | 'generating' | 'queued'
}

function ImageGenerationLoader({
  alt = 'Generated image',
  className,
  imageUrl,
  onEdit,
  onShare,
  playable = true,
  progress = 0,
  prompt,
  status = 'complete',
  ...props
}: ImageGenerationLoaderProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const displayedProgress = Math.max(0, Math.min(Math.round(progress), 100))
  const isComplete = status === 'complete'
  const showGame = status === 'generating' && playable && isPlaying

  return (
    <figure data-slot="image-generation-loader" className={cn('w-full', className)} {...props}>
      <div className="relative aspect-square overflow-hidden rounded-[16px] border-[0.5px] border-border bg-background">
        {isComplete ? (
          <CompletedImage alt={alt} imageUrl={imageUrl} onEdit={onEdit} onShare={onShare} />
        ) : showGame ? (
          <ImageGenerationSnake onExit={() => setIsPlaying(false)} />
        ) : (
          <div className="absolute inset-0 flex flex-col">
            <button
              aria-label={
                playable && status === 'generating'
                  ? 'Play Snake while your image is generating'
                  : 'Image generation in progress'
              }
              className="relative min-h-0 flex-1 overflow-hidden rounded-[16px] text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default"
              disabled={!playable || status === 'queued'}
              onClick={() => setIsPlaying(true)}
              type="button"
            >
              <ImageGenerationCanvas progress={displayedProgress / 100} />
            </button>
            <progress
              aria-label="Image generation progress"
              className="sr-only"
              max={100}
              value={displayedProgress}
            />
            {playable && status === 'generating' && (
              <span className="pointer-events-none absolute top-3.5 left-3.5 z-30 flex h-7 items-center gap-1.5 rounded-full border-[0.5px] border-border bg-background/80 px-2.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-md transition-[opacity,translate] [transition-delay:1200ms] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] select-none starting:-translate-y-1 starting:opacity-0 motion-reduce:starting:translate-y-0">
                <span className="relative flex size-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-current opacity-50 motion-reduce:animate-none" />
                  <span className="relative size-1.5 rounded-full bg-current" />
                </span>
                Click to play Snake while you wait
              </span>
            )}
            <span className="pointer-events-none absolute right-3.5 bottom-3.5 z-30 flex h-7 min-w-14 items-center justify-center rounded-full border-[0.5px] border-border bg-background/80 px-2 text-sm font-medium text-foreground tabular-nums shadow-sm backdrop-blur-md select-none">
              {status === 'queued' ? 'Queued' : `${displayedProgress}%`}
            </span>
          </div>
        )}
      </div>
      <figcaption className="sr-only">{prompt}</figcaption>
    </figure>
  )
}

interface CompletedImageProps {
  alt: string
  imageUrl?: string
  onEdit?: () => void
  onShare?: () => void
}

const revealClass =
  'transition-[opacity,scale,filter] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] starting:scale-[1.06] starting:opacity-0 starting:blur-xl motion-reduce:starting:scale-100 motion-reduce:starting:blur-none'

function CompletedImage({ alt, imageUrl, onEdit, onShare }: CompletedImageProps) {
  return (
    <div className="group relative size-full">
      {imageUrl ? (
        <img
          alt={alt}
          className={cn('size-full object-cover', revealClass)}
          height={480}
          src={imageUrl}
          width={480}
        />
      ) : (
        <div
          className={cn(
            'size-full bg-[radial-gradient(circle_at_50%_30%,var(--background),var(--muted)_48%,var(--foreground)_160%)]',
            revealClass,
          )}
        />
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-foreground/45 to-transparent" />
      {onEdit && (
        <Button
          className="absolute bottom-4 left-4 border-0 bg-background/16 text-primary-foreground shadow-sm backdrop-blur-md transition-[opacity,translate,background-color] [transition-delay:150ms,150ms,0ms] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-background/25 starting:translate-y-1 starting:opacity-0 motion-reduce:starting:translate-y-0"
          onClick={onEdit}
          size="sm"
          variant="outline"
        >
          Edit
        </Button>
      )}
      {onShare && (
        <Button
          aria-label="Share generated image"
          className="absolute right-4 bottom-4 border-0 bg-background/16 text-primary-foreground shadow-sm backdrop-blur-md transition-[opacity,translate,background-color] [transition-delay:200ms,200ms,0ms] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-background/25 starting:translate-y-1 starting:opacity-0 motion-reduce:starting:translate-y-0"
          onClick={onShare}
          size="icon-sm"
          variant="outline"
        >
          <ExportIcon />
        </Button>
      )}
    </div>
  )
}

export { ImageGenerationLoader }
export type { ImageGenerationLoaderProps, CompletedImageProps }
export default ImageGenerationLoader
