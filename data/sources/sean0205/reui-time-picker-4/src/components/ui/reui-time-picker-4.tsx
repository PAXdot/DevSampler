/*
MIT License

Copyright (c) 2025 Keenthemes Inc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

import "./reui-time-picker-4-utils/review-theme.css";
import { TimePicker } from "./reui-time-picker-4-utils/virtual-time-picker"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "./reui-time-picker-4-utils/registry-bases-base-ui-field"

export function Pattern() {
  return (
    <div className="w-full max-w-xs">
      <Field>
        <FieldLabel id="stream-live-label" htmlFor="stream-live">
          Stream goes live
        </FieldLabel>
        {/* Only the display is 12-hour: the trigger shows 02:45:30 PM while
            the value stays 24-hour `HH:mm:ss`, "14:45:30". The popover
            gets 4 columns, hour, minute, second and AM/PM. */}
        <TimePicker
          id="stream-live"
          hourCycle={12}
          granularity="second"
          defaultValue="14:45:30"
          aria-labelledby="stream-live-label"
          aria-describedby="stream-live-description"
        />
        <FieldDescription id="stream-live-description">
          Pick the exact second the broadcast starts.
        </FieldDescription>
      </Field>
    </div>
  )
}
export default Pattern;
