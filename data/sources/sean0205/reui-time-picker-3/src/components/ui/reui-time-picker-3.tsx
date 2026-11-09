/*
MIT License

Copyright (c) 2025 Keenthemes Inc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
"use client"
import "./reui-time-picker-3-utils/review-theme.css";


import { useId, useState } from "react"
import {
  TimePicker,
  TimePickerContent,
  TimePickerInput,
} from "./reui-time-picker-3-utils/virtual-time-picker"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "./reui-time-picker-3-utils/registry-bases-base-ui-field"

export function Pattern() {
  const id = useId()
  const [value, setValue] = useState<string | null>(null)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Field>
        {/* `htmlFor` alone is enough: the input speaks its own value. */}
        <FieldLabel htmlFor={id}>Pickup time</FieldLabel>
        <TimePicker
          id={id}
          minuteStep={5}
          value={value}
          onValueChange={setValue}
          aria-describedby={`${id}-description`}
        >
          {/* Typed text commits on blur or Enter; unreadable text reverts.
              The popover anchors on the clock button at the end of the
              field, so `align="end"` keeps it under the field. */}
          <TimePickerInput />
          <TimePickerContent align="end" />
        </TimePicker>
        <FieldDescription id={`${id}-description`}>
          Type 930, 14:30 or 2:30 pm. Times snap to 5 minutes.
        </FieldDescription>
      </Field>
      <p role="status" className="text-muted-foreground text-sm">
        {value ? `Pickup at ${value}` : "No pickup time yet"}
      </p>
    </div>
  )
}
export default Pattern;
