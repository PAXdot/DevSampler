/*
MIT License

Copyright (c) 2025 Keenthemes Inc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
"use client"
import "./reui-signature-pad-5-utils/review-theme.css";


import { useState } from "react"
import { Frame, FramePanel } from "./reui-signature-pad-5-utils/virtual-frame"
import {
  getSignaturePadBounds,
  SignaturePad,
  SignaturePadArea,
  SignaturePadClear,
  SignaturePadGuide,
  SignaturePadPlaceholder,
  SignaturePadSave,
  type SignaturePadFormat,
} from "./reui-signature-pad-5-utils/virtual-signature-pad"

import { buttonVariants } from "./reui-signature-pad-5-utils/registry-bases-base-ui-button"
import {
  ButtonGroup,
  ButtonGroupText,
} from "./reui-signature-pad-5-utils/registry-bases-base-ui-button-group"

const FORMATS: { format: SignaturePadFormat; label: string; ext: string }[] = [
  { format: "png", label: "PNG", ext: "png" },
  { format: "jpeg", label: "JPEG", ext: "jpg" },
  { format: "svg", label: "SVG", ext: "svg" },
  { format: "json", label: "JSON", ext: "json" },
]

type Result = (typeof FORMATS)[number] & {
  value: string
  width: number
  height: number
}

const PADDING = 16

export function Pattern() {
  const [result, setResult] = useState<Result | null>(null)
  const isImage = result !== null && result.format !== "json"

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-4">
      <SignaturePad onValueChange={() => setResult(null)}>
        <SignaturePadArea className="h-44">
          <SignaturePadGuide />
          <SignaturePadPlaceholder />
        </SignaturePadArea>
        <div className="flex flex-wrap items-center gap-2">
          <ButtonGroup aria-label="Export format">
            <ButtonGroupText>Export</ButtonGroupText>
            {FORMATS.map((item) => (
              <SignaturePadSave
                key={item.format}
                format={item.format}
                /* Paper-white, so the export reads the same in a dark UI. */
                options={{ background: "#ffffff", padding: PADDING }}
                size="sm"
                onSave={(value, strokes) => {
                  const bounds = getSignaturePadBounds(strokes)
                  setResult({
                    ...item,
                    value,
                    width: Math.ceil((bounds?.width ?? 0) + PADDING * 2),
                    height: Math.ceil((bounds?.height ?? 0) + PADDING * 2),
                  })
                }}
              >
                {item.label}
              </SignaturePadSave>
            ))}
          </ButtonGroup>
          <SignaturePadClear variant="ghost" size="sm" className="ms-auto">
            Clear
          </SignaturePadClear>
        </div>
      </SignaturePad>
      <p role="status" className="sr-only">
        {result &&
          `${result.label} ready, ${(new Blob([result.value]).size / 1024).toFixed(1)} KB`}
      </p>
      {result && (
        <Frame spacing="sm">
          <FramePanel>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">{result.label}</span>
                <span
                  aria-hidden="true"
                  className="bg-muted-foreground/40 size-1 shrink-0 rounded-full"
                />
                <span className="text-muted-foreground">
                  {(new Blob([result.value]).size / 1024).toFixed(1)} KB
                </span>
                <a
                  href={
                    isImage
                      ? result.value
                      : `data:application/json;charset=utf-8,${encodeURIComponent(result.value)}`
                  }
                  download={`signature.${result.ext}`}
                  className={buttonVariants({
                    variant: "outline",
                    size: "xs",
                    className: "ms-auto",
                  })}
                >
                  Download
                </a>
              </div>
              {isImage ? (
                <img
                  src={result.value}
                  alt={`Signature exported as ${result.label}`}
                  width={result.width}
                  height={result.height}
                  className="max-h-32 w-auto self-start"
                />
              ) : (
                <p className="text-muted-foreground line-clamp-3 font-mono text-xs break-all">
                  {result.value}
                </p>
              )}
            </div>
          </FramePanel>
        </Frame>
      )}
    </div>
  )
}
export default Pattern;
