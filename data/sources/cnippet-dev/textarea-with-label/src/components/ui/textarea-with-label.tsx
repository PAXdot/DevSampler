import { useId } from "react";
import { Label } from "@/components/ui/textarea-with-label-utils/label";
import { Textarea } from "@/components/ui/textarea-with-label-utils/textarea";

export default function TextareaWithLabel() {
  const id = useId();
  return (
    <div className="flex flex-col items-start gap-2">
      <Label htmlFor={id}>Message</Label>
      <Textarea id={id} placeholder="Type your message here" />
    </div>
  );
}
