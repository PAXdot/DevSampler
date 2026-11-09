import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";

export function Item24() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemHeader className="justify-start">
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:grayscale *:data-[slot=avatar]:ring-2">
          <Avatar>
            <AvatarImage
              src="https://cdn.21st.dev/assets/localized/513d06f542692036ff0bb17938f04b3efd60567ba2cae08049469d21f18e0524.jpg"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://cdn.21st.dev/assets/localized/218688eaf50a9380355622deaa0d087a808e4967bb39bf653ccef7d46193a169.png"
              alt="@maxleiter"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://cdn.21st.dev/assets/localized/ef407ec862dd072b8624fad7a331df80f56694e98bc1d89b0feb0ea0185e8954.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </div>
      </ItemHeader>
      <ItemContent>
        <ItemTitle>No team members</ItemTitle>
        <ItemDescription>
          Invite your team to collaborate on this project.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Invite
        </Button>
      </ItemActions>
    </Item>
  );
}

export default Item24;
