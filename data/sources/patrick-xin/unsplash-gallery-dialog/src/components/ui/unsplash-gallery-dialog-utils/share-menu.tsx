"use client";

import {
  AtSign,
  Camera,
  LinkIcon,
  MessageCircle,
  ShareIcon,
} from "lucide-react";
import { Button } from "@/components/ui/unsplash-gallery-dialog-utils/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/unsplash-gallery-dialog-utils/dropdown-menu";
import { toast } from "@/components/ui/unsplash-gallery-dialog-utils/toast";

export const ShareMenu = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("https://lumiui.dev");

    toast.success({
      title: "Copied",
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="w-20"
        render={
          <Button variant="outline">
            <ShareIcon className="size-4" /> Share
          </Button>
        }
      />
      <DropdownMenuContent align="end" matchAnchorWidth={false} side="top">
        <DropdownMenuGroup>
          <DropdownMenuGroupLabel>Socials</DropdownMenuGroupLabel>
          <DropdownMenuItem>
            <MessageCircle className="size-4" /> <span>Facebook</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <AtSign className="size-4" /> <span>Twitter</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Camera className="size-4" /> <span>Instagram</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleCopy}>
          <LinkIcon className="size-4" /> Copy link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
