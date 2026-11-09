import { PlusIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar-stack-utils/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/avatar-stack-utils/tooltip";

const members = [
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "Lead Designer",
    src: "https://cdn.21st.dev/assets/mirror/37/37e13852d9131364ad451046403c08bc497f86f914518aa6c2ba78c58d9e1811.jpg",
  },
  {
    initials: "MK",
    name: "Marcus Kim",
    role: "Frontend Engineer",
    src: "https://cdn.21st.dev/assets/mirror/54/54773704df065508594f531ad45d9eeb31e1c28d4ae58e5967979d7f341a4430.jpg",
  },
  {
    initials: "AJ",
    name: "Aisha Johnson",
    role: "Product Manager",
    src: "https://cdn.21st.dev/assets/mirror/f3/f3826a26f7081a3b8c8949dd1ba30a92c71c3f982a9836aa3a15d54ef5523c39.jpg",
  },
  {
    initials: "LR",
    name: "Liam Rivera",
    role: "Backend Engineer",
    src: "https://cdn.21st.dev/assets/mirror/c0/c01c7571b7c8e890165e46e3383ec7ed3e0a8cf61bbe76e73d8f9fa3a4593db9.jpg",
  },
  {
    initials: "PW",
    name: "Priya Wang",
    role: "QA Engineer",
    src: "",
  },
] as const;

const overflow = ["Nina Patel", "Omar Hassan", "Lea Müller"];

export default function AvatarStack() {
  return (
    <div className="flex min-h-[100px] items-center justify-center">
      <TooltipProvider>
        <div className="flex items-center">
          {members.map((member, i) => (
            <Tooltip key={member.name}>
              <TooltipTrigger
                className="focus-visible:outline-none"
                style={{ zIndex: members.length - i }}
              >
                <Avatar className="-ml-2.5 size-9 ring-2 ring-background transition-transform first:ml-0 hover:z-10 hover:-translate-y-1">
                  {member.src && (
                    <AvatarImage alt={member.name} src={member.src} />
                  )}
                  <AvatarFallback className="text-xs">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent className="px-3 py-2">
                <p className="font-medium">{member.name}</p>
                <p className="text-muted-foreground">{member.role}</p>
              </TooltipContent>
            </Tooltip>
          ))}

          <Tooltip>
            <TooltipTrigger className="-ml-2.5 focus-visible:outline-none">
              <div className="flex size-9 items-center justify-center rounded-full bg-muted font-medium text-muted-foreground text-xs ring-2 ring-background transition-colors hover:bg-muted/80">
                +{overflow.length}
              </div>
            </TooltipTrigger>
            <TooltipContent className="px-3 py-2">
              <p className="mb-1 font-medium">{overflow.length} more members</p>
              <div className="space-y-0.5">
                {overflow.map((name) => (
                  <p className="text-muted-foreground" key={name}>
                    {name}
                  </p>
                ))}
              </div>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger className="-ml-2 focus-visible:outline-none">
              <div className="flex size-9 items-center justify-center rounded-full border-2 border-border border-dashed bg-background text-muted-foreground transition-colors hover:bg-muted">
                <PlusIcon className="size-4" />
              </div>
            </TooltipTrigger>
            <TooltipContent>Add member</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
}
