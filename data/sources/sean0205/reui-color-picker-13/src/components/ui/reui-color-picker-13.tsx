/*
MIT License

Copyright (c) 2025 Keenthemes Inc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
"use client"
import "./reui-color-picker-13-utils/review-theme.css";


import { useState } from "react"
import type { CSSProperties } from "react"
import { Badge } from "./reui-color-picker-13-utils/virtual-badge"
import {
  ColorPicker,
  getContrastRatio,
} from "./reui-color-picker-13-utils/virtual-color-picker"
import { Frame, FramePanel } from "./reui-color-picker-13-utils/virtual-frame"

import { Button } from "./reui-color-picker-13-utils/registry-bases-base-ui-button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./reui-color-picker-13-utils/registry-bases-base-ui-card"
import { Field, FieldLabel } from "./reui-color-picker-13-utils/registry-bases-base-ui-field"
import { IconPlaceholder } from "./reui-color-picker-13-utils/reui-icons"

/* WCAG 2.2 thresholds: 4.5 and 7 for body text, 3 for large text. */
const CHECKS = [
  { level: "AA", text: "Body", min: 4.5 },
  { level: "AAA", text: "Body", min: 7 },
  { level: "AA", text: "Large", min: 3 },
]

export function Pattern() {
  const [text, setText] = useState<string | null>("#1e3a8a")
  const [background, setBackground] = useState<string | null>("#dbeafe")
  const ratio = text && background ? getContrastRatio(text, background) : null

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Contrast checker</CardTitle>
        <CardDescription>
          WCAG ratios for a text and background pair.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-5">
          <Frame>
            <FramePanel
              style={
                {
                  "--frame-panel-bg": background ?? undefined,
                  color: text ?? undefined,
                } as CSSProperties
              }
            >
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold">
                  Quarterly report is ready
                </p>
                <p className="text-sm">
                  Revenue grew 18% on the quarter, led by self-serve plans.
                </p>
              </div>
            </FramePanel>
          </Frame>
          <div className="flex items-end gap-2">
            <Field className="min-w-0 flex-1">
              <FieldLabel id="contrast-text-label" htmlFor="contrast-text">
                Text
              </FieldLabel>
              <ColorPicker
                id="contrast-text"
                value={text}
                onValueChange={setText}
                aria-labelledby="contrast-text-label"
              />
            </Field>
            <Button
              variant="outline"
              size="icon"
              aria-label="Swap text and background"
              onClick={() => {
                setText(background)
                setBackground(text)
              }}
            >
              <IconPlaceholder
                lucide="ArrowLeftRightIcon"
                tabler="IconArrowsExchange"
                hugeicons="ArrowDataTransferHorizontalIcon"
                phosphor="ArrowsLeftRightIcon"
                remixicon="RiArrowLeftRightLine"
                aria-hidden="true"
              />
            </Button>
            <Field className="min-w-0 flex-1">
              <FieldLabel
                id="contrast-background-label"
                htmlFor="contrast-background"
              >
                Background
              </FieldLabel>
              <ColorPicker
                id="contrast-background"
                value={background}
                onValueChange={setBackground}
                aria-labelledby="contrast-background-label"
              />
            </Field>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div role="status">
              <p className="text-3xl font-semibold tabular-nums">
                {ratio ? `${ratio.toFixed(2)}:1` : "None"}
              </p>
              <p className="text-muted-foreground text-xs">Contrast ratio</p>
            </div>
            <ul className="flex flex-col items-end gap-1.5">
              {CHECKS.map((check) => {
                const pass = ratio !== null && ratio >= check.min
                return (
                  <li
                    key={`${check.level}-${check.text}`}
                    className="flex items-center gap-2 text-xs"
                  >
                    <span className="text-muted-foreground">
                      {check.text} {check.level}
                    </span>
                    <Badge
                      variant={pass ? "success-light" : "destructive-light"}
                    >
                      {pass ? "Pass" : "Fail"}
                    </Badge>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default Pattern;
