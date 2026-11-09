import {
  Group,
  GroupSeparator,
  GroupText,
} from "@/components/ui/domain-input-group-utils/group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Particle() {
  return (
    <Group aria-label="Domain input">
      <GroupText render={<Label aria-label="Domain" htmlFor="domain" />}>
        https://
      </GroupText>
      <GroupSeparator />
      <Input
        aria-label="Domain"
        defaultValue="ui.cnippet.dev"
        id="domain"
        type="text"
      />
    </Group>
  );
}
