"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/select-08-utils/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select-08-utils/select";
import { useState } from "react";

const users = [
  {
    value: "sarah",
    name: "Sarah Chen",
    email: "sarah@example.com",
    avatar:
      "https://cdn.21st.dev/assets/mirror/03/039131cd23196f79dda2cce8c0ed9e6a49832a0d73e33bbcae952cd528fe6b0f.jpg",
    initials: "SC",
  },
  {
    value: "marcus",
    name: "Marcus Lee",
    email: "marcus@example.com",
    avatar:
      "https://cdn.21st.dev/assets/mirror/9f/9f697a8fcb60a85ac182a832a9dcc35bd8700da190fb8e393cb7129856a4ee5e.jpg",
    initials: "ML",
  },
  {
    value: "priya",
    name: "Priya Patel",
    email: "priya@example.com",
    avatar:
      "https://cdn.21st.dev/assets/mirror/32/32ca3771d3e6dc40c332111e84c7480e9f1d28ba7a1b47aa8e35657c8e9f5588.jpg",
    initials: "PP",
  },
];

export function Select08() {
  const [value, setValue] = useState(users[0].value);
  const selected = users.find((user) => user.value === value);

  return (
    <Select value={value} onValueChange={(value) => setValue(value ?? "")}>
      <SelectTrigger className="w-full max-w-64">
        <SelectValue placeholder="Select a user">
          {selected && (
            <span className="flex items-center gap-2">
              <Avatar size="sm">
                <AvatarImage src={selected.avatar} alt="" />
                <AvatarFallback>{selected.initials}</AvatarFallback>
              </Avatar>
              <span>{selected.name}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {users.map((user) => (
            <SelectItem key={user.value} value={user.value}>
              <Avatar size="sm">
                <AvatarImage src={user.avatar} alt="" />
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">{user.name}</span>
                <span className="text-muted-foreground text-xs font-normal">
                  {user.email}
                </span>
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default Select08;
