import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { PlusIcon } from "lucide-react";

const people = [
  {
    username: "shadcn",
    avatar:
      "https://cdn.21st.dev/assets/localized/513d06f542692036ff0bb17938f04b3efd60567ba2cae08049469d21f18e0524.jpg",
    email: "shadcn@vercel.com",
  },
  {
    username: "maxleiter",
    avatar:
      "https://cdn.21st.dev/assets/localized/218688eaf50a9380355622deaa0d087a808e4967bb39bf653ccef7d46193a169.png",
    email: "maxleiter@vercel.com",
  },
  {
    username: "evilrabbit",
    avatar:
      "https://cdn.21st.dev/assets/localized/ef407ec862dd072b8624fad7a331df80f56694e98bc1d89b0feb0ea0185e8954.png",
    email: "evilrabbit@vercel.com",
  },
];

export default function ItemComponent() {
  return (
    <ItemGroup className="max-w-sm w-full gap-3">
      {people.map((person, index) => (
        <Item key={person.username} variant="outline">
          <ItemMedia>
            <Avatar>
              <AvatarImage src={person.avatar} className="grayscale" />
              <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent className="gap-1">
            <ItemTitle>{person.username}</ItemTitle>
            <ItemDescription>{person.email}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="icon" className="rounded-full">
              <PlusIcon />
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  );
}
