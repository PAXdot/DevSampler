'use client'

import { CheckCircleIcon as CheckIcon } from '@solar-icons/react/linear/check-circle'
import { CopyIcon } from '@solar-icons/react/linear/copy'
import { Highlight, type PrismTheme } from 'prism-react-renderer'
import * as React from 'react'
import { useState } from 'react'
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

const codeTheme: PrismTheme = {
  plain: {
    backgroundColor: 'transparent',
    color: 'var(--foreground)',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: { color: 'var(--syntax-comment)', fontStyle: 'italic' },
    },
    {
      types: ['keyword', 'atrule'],
      style: { color: 'var(--syntax-keyword)' },
    },
    {
      types: ['string', 'char', 'attr-value', 'inserted'],
      style: { color: 'var(--syntax-string)' },
    },
    {
      types: ['function', 'class-name'],
      style: { color: 'var(--syntax-function)' },
    },
    {
      types: ['number', 'boolean', 'constant'],
      style: { color: 'var(--syntax-number)' },
    },
    {
      types: ['tag', 'property', 'attr-name', 'selector', 'symbol', 'deleted'],
      style: { color: 'var(--syntax-property)' },
    },
    {
      types: ['punctuation', 'operator'],
      style: { color: 'var(--syntax-punctuation)' },
    },
  ],
}

interface CodeBlockProps extends React.ComponentProps<'figure'> {
  code: string
  filename?: string
  highlightLines?: number[]
  language?: string
  showLineNumbers?: boolean
}

function CodeBlock({
  className,
  code,
  filename,
  highlightLines = [],
  language = 'text',
  showLineNumbers = true,
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const highlightedLines = new Set(highlightLines)
  const syntaxLanguage = language === 'shell' ? 'bash' : language

  async function copyCode() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <figure
      data-slot="agent-code-block"
      className={cn(
        'overflow-hidden rounded-[16px] bg-card font-sans text-sm font-[450] tracking-[-0.05px] text-muted-foreground shadow-card',
        className,
      )}
      {...props}
    >
      <figcaption className="flex h-10 items-center gap-2 px-3 metadata-label">
        {(/\.tsx?$/i.test(filename ?? '') || ['ts', 'tsx', 'typescript'].includes(language)) && (
          <TypeScriptIcon aria-hidden="true" className="size-4 shrink-0 text-[#3178c6]" />
        )}
        <span className="min-w-0 truncate text-[13px]">{filename ?? language}</span>
        <Button
          aria-label="Copy code"
          className="ml-auto"
          onClick={copyCode}
          size="icon-xs"
          type="button"
          variant="ghost"
        >
          <span className="grid *:col-start-1 *:row-start-1 *:transition-[opacity,scale] *:duration-150 *:ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:*:transition-opacity">
            <CopyIcon className={cn(copied && 'scale-75 opacity-0')} />
            <CheckIcon className={cn(!copied && 'scale-75 opacity-0')} />
          </span>
        </Button>
      </figcaption>
      <Highlight code={code.trim()} language={syntaxLanguage} theme={codeTheme}>
        {({ getLineProps, getTokenProps, style, tokens }) => (
          <pre className="overflow-x-auto pb-4 font-mono text-[13px] leading-6" style={style}>
            <code>
              {tokens.map((line, lineIndex) => {
                const lineNumber = lineIndex + 1

                return (
                  <span
                    {...getLineProps({ line })}
                    className={cn(
                      'block min-w-max px-4',
                      highlightedLines.has(lineNumber) && 'bg-foreground/[0.045]',
                    )}
                    key={lineIndex}
                  >
                    {showLineNumbers && (
                      <span
                        aria-hidden="true"
                        className="mr-5 inline-block w-4 text-right text-muted-foreground/55 select-none"
                      >
                        {lineNumber}
                      </span>
                    )}
                    {line.map((token, tokenIndex) => (
                      <span {...getTokenProps({ token })} key={tokenIndex} />
                    ))}
                  </span>
                )
              })}
            </code>
          </pre>
        )}
      </Highlight>
    </figure>
  )
}

function TypeScriptIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg fill="currentColor" height="1em" viewBox="0 0 24 24" width="1em" {...props}>
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75q.918 0 1.627.111a6.4 6.4 0 0 1 1.306.34v2.458a4 4 0 0 0-.643-.361a5 5 0 0 0-.717-.26a5.5 5.5 0 0 0-1.426-.2q-.45 0-.819.086a2.1 2.1 0 0 0-.623.242q-.254.156-.393.374a.9.9 0 0 0-.14.49q0 .294.156.529q.156.234.443.444c.287.21.423.276.696.41q.41.203.926.416q.705.296 1.266.628q.561.333.963.753q.402.418.614.957q.213.538.214 1.253q0 .986-.373 1.656a3 3 0 0 1-1.012 1.085a4.4 4.4 0 0 1-1.487.596q-.85.18-1.79.18a10 10 0 0 1-1.84-.164a5.5 5.5 0 0 1-1.512-.493v-2.63a5.03 5.03 0 0 0 3.237 1.2q.5 0 .872-.09q.373-.09.623-.25q.249-.162.373-.38a1.02 1.02 0 0 0-.074-1.089a2.1 2.1 0 0 0-.537-.5a5.6 5.6 0 0 0-.807-.444a28 28 0 0 0-1.007-.436q-1.377-.575-2.053-1.405t-.676-2.005q0-.92.369-1.582q.368-.662 1.004-1.089a4.5 4.5 0 0 1 1.47-.629a7.5 7.5 0 0 1 1.77-.201m-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  )
}

export { CodeBlock }
export type { CodeBlockProps }
export default CodeBlock
