"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

const roles = ["Admin", "Member", "Viewer"];

function MemberRoleInputGroup() {
  const [role, setRole] = useState("Admin");

  return (
    <Field className="max-w-xs">
      <InputGroup>
        <InputGroupAddon className="pr-1">
          <Avatar className="size-5">
            <AvatarImage
              src="https://cdn.21st.dev/assets/localized/513d06f542692036ff0bb17938f04b3efd60567ba2cae08049469d21f18e0524.jpg"
              alt="Avatar"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </InputGroupAddon>

        <InputGroupInput defaultValue="@shadcn" className="pl-1!" />

        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost" className="h-7 text-xs">
                {role}
                <ChevronDownIcon className="size-3.5 opacity-60" />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-32">
              {roles.map((r) => (
                <DropdownMenuItem key={r} onClick={() => setRole(r)}>
                  {r}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}

export default MemberRoleInputGroup;
