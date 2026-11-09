"use client";

import { MailIcon, PhoneIcon, MessageSquareIcon } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog-04-utils/dialog";
import { Button } from "@/components/ui/dialog-04-utils/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Tailwind safelist helper: these exact utility classes are generated at
// runtime by the Button component's cva() variants. Keeping the literal
// strings here (in a file that IS scanned by the CSS build) guarantees the
// corresponding utility rules exist in the compiled stylesheet even though
// they are assembled dynamically inside the shared support file.
function __ButtonClassSafelist() {
  return (
    <div
      aria-hidden
      className="hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-primary text-primary-foreground shadow hover:bg-primary/90 bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 border border-input bg-background hover:bg-accent hover:text-accent-foreground bg-secondary text-secondary-foreground hover:bg-secondary/80 underline-offset-4 hover:underline text-primary h-9 px-4 py-2 h-8 rounded-md px-3 text-xs h-10 px-8 h-9 w-9"
    />
  );
}

export default function Dialog04() {
  return (
    <Dialog>
      <__ButtonClassSafelist />
      <DialogTrigger
        render={<Button variant="outline" className="cursor-pointer" />}
      >
        View Profile
      </DialogTrigger>
      <DialogContent className="data-open:slide-in-from-right-8 data-closed:slide-out-to-right-8 data-open:zoom-in-100 data-closed:zoom-out-100 duration-300 [[data-slot=dialog-overlay]:has(~_&)]:duration-300">
        <div className="flex items-center gap-3">
          <Avatar className="size-12">
            <AvatarImage
              src="https://cdn.21st.dev/assets/localized/669818af5193841ad575558ad4a0963988989e8cd2a54afbc242186221e1491e.jpg"
              alt="Jessica Lee"
            />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <DialogTitle className="text-sm font-semibold leading-none">
              Jessica Lee
            </DialogTitle>
            <DialogDescription className="text-xs">
              Product Manager at Notion
            </DialogDescription>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-lg bg-muted dark:bg-muted/50 p-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MailIcon size={14} />
            <span className="text-xs">jessica.lee@notion.so</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <PhoneIcon size={14} />
            <span className="text-xs">+1 (415) 867-5309</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { label: "Projects", value: "38" },
            { label: "Tasks", value: "210" },
            { label: "Reviews", value: "4.9" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg bg-muted dark:bg-muted/50 p-2"
            >
              <p className="font-semibold text-sm">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <DialogClose
            render={
              <Button variant="outline" className="flex-1 cursor-pointer" />
            }
          >
            Close
          </DialogClose>
          <DialogClose
            render={
              <Button className="flex-1 cursor-pointer hover:bg-primary/80" />
            }
          >
            <MessageSquareIcon size={14} />
            Message
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
