import { BoldIcon, ItalicIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export function Pattern() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Toggle aria-label="Toggle italic" variant="outline">
        <ItalicIcon />
        Italic
      </Toggle>
      <Toggle aria-label="Toggle bold" variant="outline">
        <BoldIcon />
        Bold
      </Toggle>
    </div>
  );
}

export default Pattern;
