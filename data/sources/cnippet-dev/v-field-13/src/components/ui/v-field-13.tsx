"use client";

import { Checkbox } from "@/components/ui/v-field-13-utils/checkbox";
import { CheckboxGroup } from "@/components/ui/v-field-13-utils/checkbox-group";
import {
  Field,
  FieldItem,
  FieldLabel,
} from "@/components/ui/v-field-13-utils/field";
import {
  Fieldset,
  FieldsetLegend,
} from "@/components/ui/v-field-13-utils/fieldset";

export default function Particle() {
  return (
    <Field
      className="gap-2"
      name="frameworks"
      render={(props) => <Fieldset {...props} />}
    >
      <FieldsetLegend className="font-medium text-sm">
        Frameworks
      </FieldsetLegend>
      <CheckboxGroup defaultValue={["react"]}>
        <FieldItem>
          <FieldLabel>
            <Checkbox value="react" /> React
          </FieldLabel>
        </FieldItem>
        <FieldItem>
          <FieldLabel>
            <Checkbox value="vue" /> Vue
          </FieldLabel>
        </FieldItem>
        <FieldItem>
          <FieldLabel>
            <Checkbox value="svelte" /> Svelte
          </FieldLabel>
        </FieldItem>
      </CheckboxGroup>
    </Field>
  );
}
