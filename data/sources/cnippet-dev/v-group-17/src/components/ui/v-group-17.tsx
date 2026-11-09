import { Button } from "@/components/ui/v-group-17-utils/button";
import {
  Group,
  GroupSeparator,
  GroupText,
} from "@/components/ui/v-group-17-utils/group";
import { Input } from "@/components/ui/v-group-17-utils/input";
import { Label } from "@/components/ui/v-group-17-utils/label";

export default function Particle() {
  return (
    <Group aria-label="Price range">
      <GroupText render={<Label htmlFor="price-min" />}>$</GroupText>
      <GroupSeparator />
      <Input
        aria-label="Minimum price"
        defaultValue="0"
        id="price-min"
        inputMode="numeric"
        type="text"
      />
      <GroupSeparator />
      <GroupText>–</GroupText>
      <GroupSeparator />
      <Input
        aria-label="Maximum price"
        defaultValue="500"
        inputMode="numeric"
        type="text"
      />
      <GroupSeparator />
      <Button variant="outline">Apply</Button>
    </Group>
  );
}
