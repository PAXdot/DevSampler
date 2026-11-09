import { UserPlusIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

export function Empty04() {
  return (
    <Empty className="bg-muted/30 w-full max-w-md rounded-xl border border-dashed">
      <EmptyHeader>
        <div className="*:data-[slot=avatar]:ring-background mb-2 flex -space-x-2 *:data-[slot=avatar]:grayscale *:data-[slot=avatar]:ring-2">
          <Avatar>
            <AvatarImage src="https://cdn.21st.dev/assets/mirror/51/513d06f542692036ff0bb17938f04b3efd60567ba2cae08049469d21f18e0524.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://cdn.21st.dev/assets/mirror/21/218688eaf50a9380355622deaa0d087a808e4967bb39bf653ccef7d46193a169.png"
              alt="@maxleiter"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://cdn.21st.dev/assets/mirror/ef/ef407ec862dd072b8624fad7a331df80f56694e98bc1d89b0feb0ea0185e8954.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </div>
        <EmptyTitle>No team members</EmptyTitle>
        <EmptyDescription>
          Invite people to collaborate on this workspace.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <UserPlusIcon data-icon="inline-start" />
          Invite people
        </Button>
      </EmptyContent>
    </Empty>
  );
}

export default Empty04;
