"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { UserPlusIcon, UserCheckIcon, UserMinusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
} from "@/components/ui/button-group-09-utils/avatar";
import { cn } from "@/lib/utils";

export default function Pattern({
  defaultFollowing = false,
}: {
  defaultFollowing?: boolean;
}) {
  const [isFollowing, setIsFollowing] = useState(defaultFollowing);
  const [isHovered, setIsHovered] = useState(false);
  const baseFollowers = 2418;
  const followersCount = isFollowing ? baseFollowers + 1 : baseFollowers;

  return (
    <ButtonGroup>
      <Button
        size="sm"
        variant={isFollowing ? "secondary" : "outline"}
        className={cn(
          "h-9 px-3 gap-2 transition-all duration-300 border-border cursor-pointer select-none",
          isFollowing &&
            isHovered &&
            "bg-destructive/10 hover:bg-destructive/20! text-destructive! border-destructive/50!",
        )}
        onClick={() => setIsFollowing(!isFollowing)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isFollowing ? (
            isHovered ? (
              <motion.span
                key="unfollow"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2"
              >
                <UserMinusIcon className="size-4 shrink-0" />
                <span>Unfollow</span>
              </motion.span>
            ) : (
              <motion.span
                key="following"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2"
              >
                <UserCheckIcon className="size-4 shrink-0 text-green-500" />
                <span>Following</span>
              </motion.span>
            )
          ) : (
            <motion.span
              key="follow"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center gap-2"
            >
              <UserPlusIcon className="size-4 shrink-0" />
              <span>Follow</span>
            </motion.span>
          )}
        </AnimatePresence>
      </Button>

      <ButtonGroupText className="text-muted-foreground h-9 px-3 flex items-center gap-2">
        <AvatarGroup className="-space-x-1.5 mr-0.5">
          <Avatar className="size-5 border border-background">
            <AvatarImage src="https://cdn.21st.dev/assets/mirror/41/41aae27fbf35b21d2918f0574264bfbfad4b65ed395690e49aa24d911cb2f426.jpg" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar className="size-5 border border-background">
            <AvatarImage src="https://cdn.21st.dev/assets/mirror/84/84af64b6499dde5e3c7a2ba37775656c4e758d732b4f6b272f5da51f7b6b2d16.jpg" />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Avatar className="size-5 border border-background">
            <AvatarImage src="https://cdn.21st.dev/assets/mirror/8b/8bf2dddbcc4c6ea0d32fddaaa8f6b41afb32115ab86277845187981c12e44057.jpg" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
        </AvatarGroup>

        <div className="overflow-hidden h-5 flex items-center tabular-nums">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={followersCount}
              initial={{ y: isFollowing ? 12 : -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: isFollowing ? -12 : 12, opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="font-semibold text-foreground"
            >
              {followersCount.toLocaleString()}
            </motion.span>
          </AnimatePresence>
        </div>

        <span>followers</span>
      </ButtonGroupText>
    </ButtonGroup>
  );
}
