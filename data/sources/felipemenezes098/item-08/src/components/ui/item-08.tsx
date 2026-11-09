import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export function Item08() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemMedia variant="image">
        <Avatar className="size-full rounded-sm">
          <AvatarImage
            src="https://cdn.21st.dev/assets/mirror/03/039131cd23196f79dda2cce8c0ed9e6a49832a0d73e33bbcae952cd528fe6b0f.jpg"
            alt=""
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Sarah Chen</ItemTitle>
        <ItemDescription>Product designer · Berlin</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Follow
        </Button>
      </ItemActions>
    </Item>
  );
}

export default Item08;
