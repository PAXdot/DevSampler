/*
MIT License

Copyright (c) 2025 Keenthemes Inc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
"use client"
import "./reui-time-picker-10-utils/review-theme.css";


import { useId, useState } from "react"
import { TimePicker } from "./reui-time-picker-10-utils/virtual-time-picker"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "./reui-time-picker-10-utils/registry-bases-base-ui-field"

export function Pattern() {
  const id = useId()
  /* Only a committed value reaches this state. Column picks, Now and Clear
     stay a draft in the popover until OK, and closing it discards them, so
     the roster never sees a half-made change. */
  const [shiftStart, setShiftStart] = useState<string | null>("08:00")

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col gap-3">
      <Field>
        <FieldLabel id={`${id}-label`} htmlFor={id}>
          Shift start
        </FieldLabel>
        <TimePicker
          id={id}
          aria-labelledby={`${id}-label`}
          aria-describedby={`${id}-hint`}
          value={shiftStart}
          onValueChange={setShiftStart}
          minuteStep={15}
          /* Also adds OK to the footer, drawn as the primary button. */
          requireConfirm
        />
        <FieldDescription id={`${id}-hint`}>
          Changes apply when you press OK.
        </FieldDescription>
      </Field>
      {/* Announced once per applied change, not on every pick in the
          columns. */}
      <p role="status" className="text-muted-foreground text-sm">
        {shiftStart ? `Shift starts at ${shiftStart}` : "No shift start set"}
      </p>
    </div>
  )
}
export default Pattern;
