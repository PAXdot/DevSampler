"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { VerifiedIcon } from "lucide-react";
const BadgeAvatarDemo = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="flex flex-row justify-center items-center gap-3">
        <div className="relative w-fit">
          <Avatar >
            <AvatarImage
              alt="user"
              src="https://cdn.21st.dev/assets/mirror/c7/c70d48e47d3a2d79ad07d16bff3aa3cff686580be031b6102cad73a15b47d8fd.jpg"
            />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
          <span className="absolute -right-1 -bottom-1 flex size-3 items-center justify-center rounded-full bg-background">
            <VerifiedIcon className="size-full fill-blue-500 text-white" />
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default BadgeAvatarDemo;
