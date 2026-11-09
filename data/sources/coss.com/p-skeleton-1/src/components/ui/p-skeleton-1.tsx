"use client";

import { UserRoundPlusIcon, UsersRoundIcon } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/p-skeleton-1-utils/avatar";
import { Button } from "@/components/ui/p-skeleton-1-utils/button";
import { Skeleton } from "@/components/ui/p-skeleton-1-utils/skeleton";

const users = [
  {
    delay: 3000,
    fallback: "SJ",
    followers: "15k",
    image:
      "https://cdn.21st.dev/assets/mirror/63/63ef676096070a1e523220e135396ba708d5a0de781cbf1fd4bc292c37d44402.jpg",
    name: "Sarah Johnson",
    role: "Design Engineer",
  },
  {
    delay: 4000,
    fallback: "MA",
    followers: "8k",
    image:
      "https://cdn.21st.dev/assets/mirror/c7/c78f744c61a340942c713a75973e1501b18ba1c727028f11a2f10f54ff1f93b7.jpg",
    name: "Mark Bennett Andersson",
    role: "Product Designer",
  },
  {
    delay: 3400,
    fallback: "AR",
    followers: "12k",
    image:
      "https://cdn.21st.dev/assets/mirror/8e/8eb68f084bdb1835c6ea272c5ce5d1d8e1004eccd1d490835001932cc54db0a3.jpg",
    name: "Alex Rivera",
    role: "UI/UX Designer",
  },
];

function UserCard({ delay, user }: { delay: number; user: (typeof users)[0] }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isLoaded) {
    return <UserCardSkeleton />;
  }

  return (
    <>
      <Avatar className="size-10">
        <AvatarImage alt={user.name} src={user.image} />
        <AvatarFallback>{user.fallback}</AvatarFallback>
      </Avatar>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h4 className="line-clamp-1 font-medium text-sm">{user.name}</h4>
        <div className="flex items-center gap-3 text-muted-foreground text-xs">
          <span className="truncate">{user.role}</span>
          <div className="flex min-w-0 items-center gap-1">
            <UsersRoundIcon className="size-3 shrink-0" />
            <span className="truncate">
              {user.followers}
              <span className="max-sm:hidden"> followers</span>
            </span>
          </div>
        </div>
      </div>
      <Button size="xs">
        <UserRoundPlusIcon />
        Follow
      </Button>
    </>
  );
}

function UserCardSkeleton() {
  return (
    <>
      <Skeleton className="size-10 rounded-full" />
      <div className="flex flex-1 flex-col">
        <Skeleton className="my-0.5 h-4 max-w-54" />
        <div className="flex max-w-54 items-center gap-1">
          <Skeleton className="my-0.5 h-4 w-1/2" />
          <Skeleton className="my-0.5 h-4 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-7 w-19 sm:h-6 sm:w-17" />
    </>
  );
}

export default function Particle() {
  return (
    <div className="flex w-full max-w-92 flex-col gap-6">
      {users.map((user) => (
        <div className="flex items-center gap-4" key={user.fallback}>
          <UserCard delay={user.delay} user={user} />
        </div>
      ))}
    </div>
  );
}
