"use client";

import { StarIcon, CopyIcon } from "lucide-react";
import { toast } from "sonner";

import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function InputGroupCopyButton() {
  return (
    <Field className="max-w-xs">
      <InputGroup>
        <InputGroupInput placeholder="Component name..." />
        <InputGroupAddon align="inline-end">
          <StarIcon className="text-muted-foreground size-4" />
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            onClick={() => toast.success("Copied to clipboard")}
          >
            <CopyIcon className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
