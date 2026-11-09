"use client";

import { useState } from "react";

import { Field } from "@/components/ui/v-label-8-utils/field";
import { Label } from "@/components/ui/v-label-8-utils/label";
import { Textarea } from "@/components/ui/v-label-8-utils/textarea";

export default function Pattern() {
  const [length, setLength] = useState(0);

  return (
    <Field className="w-full max-w-xs">
      <Label className="justify-between" htmlFor="label-counter">
        Bio
        <span className="text-muted-foreground">{length}/200</span>
      </Label>
      <Textarea
        id="label-counter"
        maxLength={200}
        onChange={(e) => setLength(e.target.value.length)}
        placeholder="Tell us about yourself…"
      />
    </Field>
  );
}
