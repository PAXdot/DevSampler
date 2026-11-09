import { Columns2Icon, LayoutGridIcon, ListIcon } from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/cnippet-toggle-group";

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <ToggleGroup defaultValue={["list"]} variant="outline">
        <ToggleGroupItem aria-label="List view" value="list">
          <ListIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Grid view" value="grid">
          <LayoutGridIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Kanban view" value="kanban">
          <Columns2Icon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

export default Pattern;
