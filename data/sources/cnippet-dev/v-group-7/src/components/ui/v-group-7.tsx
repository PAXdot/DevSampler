import {
  Group,
  GroupSeparator,
  GroupText,
} from "@/components/ui/v-group-7-utils/group";
import { Input } from "@/components/ui/v-group-7-utils/input";
import { Label } from "@/components/ui/v-group-7-utils/label";

export default function Particle() {
  return (
    <Group aria-label="Domain input">
      <Input
        aria-label="Domain"
        defaultValue="coss"
        id="domain-suffix"
        type="text"
      />
      <GroupSeparator />
      <GroupText
        render={<Label aria-label="Domain suffix" htmlFor="domain-suffix" />}
      >
        .com
      </GroupText>
    </Group>
  );
}
