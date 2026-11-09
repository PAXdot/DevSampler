import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/v-accordion-9-utils/accordion";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/v-accordion-9-utils/avatar";
import { Badge } from "@/components/ui/v-accordion-9-utils/badge";
import { Frame, FramePanel } from "@/components/ui/v-accordion-9-utils/frame";

const users = [
  {
    avatar:
      "https://cdn.21st.dev/assets/mirror/7a/7a441860d9b014f1d071006b567655c4fa0d3f45a693dcaa6a765ccd5953f7f0.jpg",
    content:
      "Alex has full administrative access to the platform, including billing management, user provisioning, and security configurations.",
    email: "alex@apple.com",
    id: "1",
    initials: "AJ",
    name: "Alex Johnson",
    role: "Admin",
  },
  {
    avatar:
      "https://cdn.21st.dev/assets/mirror/30/3046299adaf36760e400c8c71d6f738d8dbec09de899c2b15eba88fcaa8d4ef0.jpg",
    content:
      "Sarah has read-only access to projects and reports. She cannot modify settings or invite new members.",
    email: "sarah@openai.com",
    id: "2",
    initials: "SC",
    name: "Sarah Chen",
    role: "Viewer",
  },
  {
    avatar:
      "https://cdn.21st.dev/assets/mirror/80/80037eb615485428bea8d3554ac30b5c9cad6f234b5c6a6df293e727429bb29e.jpg",
    content:
      "Michael is part of the design team and has permissions to edit projects, manage assets, and update design system components.",
    email: "michael@meta.com",
    id: "3",
    initials: "MR",
    name: "Michael Rodriguez",
    role: "Editor",
  },
];

export default function Pattern() {
  return (
    <div className="mx-auto mb-auto w-full max-w-lg">
      <Frame>
        {users.map((user) => (
          <FramePanel key={user.id}>
            <Accordion
              className="border-none"
              defaultValue={["1"]}
              multiple={false}
            >
              <AccordionItem
                className="border-none bg-transparent p-0 **:data-[slot=accordion-content]:p-0!"
                value={user.id}
              >
                <AccordionTrigger className="items-center px-1 py-1 hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Avatar className="size-8 border">
                      <AvatarImage alt={user.name} src={user.avatar} />
                      <AvatarFallback className="text-xs">
                        {user.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="inline-flex items-center gap-2">
                      <span className="font-semibold text-foreground/90 tracking-tight">
                        {user.name}
                      </span>
                      <Badge
                        size="sm"
                        variant={
                          user.role === "Admin" ? "success" : "secondary"
                        }
                      >
                        {user.role}
                      </Badge>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="py-0 pl-11 text-muted-foreground">
                  {user.content}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FramePanel>
        ))}
      </Frame>
    </div>
  );
}
