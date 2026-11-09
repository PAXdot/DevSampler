"use client";

import * as React from "react";

import { UnitFieldDragArea } from "@/components/ui/unit-field-utils/unit-field-drag-area";
import { UnitFieldInput } from "@/components/ui/unit-field-utils/unit-field-input";
import { UnitFieldRoot } from "@/components/ui/unit-field-utils/unit-field-root";

export { UnitFieldRoot, UnitFieldInput, UnitFieldDragArea };

export const UnitField = {
  Root: UnitFieldRoot,
  Input: UnitFieldInput,
  DragArea: UnitFieldDragArea,
};

export default function UnitFieldComponent(
  props: React.ComponentProps<typeof UnitFieldRoot>,
) {
  return <UnitFieldRoot {...props} />;
}
