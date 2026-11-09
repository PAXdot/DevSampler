"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/coss-avatar";
import { Badge } from "@/components/ui/coss-badge";
import { Button } from "@/components/ui/coss-button";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from "@/components/ui/combobox";

type TeamMember = {
  avatar: string;
  initials: string;
  label: string;
  priority: "Lowest" | "Low" | "Medium" | "High" | "Highest";
  value: string;
  weight: number;
};

const teamMembers: TeamMember[] = [
  {
    avatar:
      "https://cdn.21st.dev/assets/mirror/15/150eaf514973fb663386699184ca4cd53e1ec9c1f56b806b13390a48e03dc0f8.jpg",
    initials: "JH",
    label: "Jenny Hamilton",
    priority: "Highest",
    value: "jenny",
    weight: 200,
  },
  {
    avatar:
      "https://cdn.21st.dev/assets/mirror/72/7273089923e10f582554f38359b06e99013c20b0eaabf7b8657332be405233c4.jpg",
    initials: "PS",
    label: "Paul Smith",
    priority: "Medium",
    value: "paul",
    weight: 100,
  },
  {
    avatar:
      "https://cdn.21st.dev/assets/mirror/36/367c7202bd4560aba2cca9d5ab0af7bf350abe419f65cafa41faf87b5563783e.jpg",
    initials: "LW",
    label: "Luna Wyen",
    priority: "High",
    value: "luna",
    weight: 150,
  },
  {
    avatar:
      "https://cdn.21st.dev/assets/mirror/c5/c5a1a2993c312a712efb9cba06c96ff124251303bc6c4c07dc7a18c32dd18337.jpg",
    initials: "AC",
    label: "Alex Chen",
    priority: "Low",
    value: "alex",
    weight: 100,
  },
  {
    avatar:
      "https://cdn.21st.dev/assets/mirror/4c/4ceed780f2fac8f08cdf8494c126f9227aa2a65e6cc36219fcf2096812c96441.jpg",
    initials: "SJ",
    label: "Sarah Johnson",
    priority: "Medium",
    value: "sarah",
    weight: 50,
  },
  {
    avatar:
      "https://cdn.21st.dev/assets/mirror/3e/3e321881e4faad1b40d809056836f53ec9740b6da9d312dd3b50b8434ba389fd.jpg",
    initials: "ED",
    label: "Emma Davis",
    priority: "Lowest",
    value: "emma",
    weight: 100,
  },
];

export default function Particle() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<TeamMember[]>(
    teamMembers.slice(0, 2),
  );

  return (
    <div className="flex w-full flex-col gap-2">
      <Combobox
        autoHighlight
        items={teamMembers}
        multiple
        onOpenChange={setOpen}
        onValueChange={(value) => {
          setSelected(value);
          setOpen(false);
        }}
        open={open}
        value={selected}
      >
        <ComboboxInput
          aria-label="Add team members"
          placeholder="Add team members…"
          startAddon={<SearchIcon />}
        />
        <ComboboxPopup>
          <ComboboxEmpty>No team members found.</ComboboxEmpty>
          <ComboboxList>
            {(item: TeamMember) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
      {selected.length > 0 && (
        <ul className="divide-y rounded-lg border">
          {selected.map((member) => (
            <li
              className="flex items-center gap-2 p-1 ps-2 text-base sm:text-sm"
              key={member.value}
            >
              <Avatar className="size-5">
                <AvatarImage alt={member.label} src={member.avatar} />
                <AvatarFallback className="text-[.625rem]">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <span className="truncate font-medium">{member.label}</span>
              <Badge className="ms-auto" size="sm" variant="outline">
                {member.priority}
              </Badge>
              <span className="text-muted-foreground text-xs tabular-nums">
                {member.weight}%
              </span>
              <Button
                aria-label={`Remove ${member.label}`}
                onClick={() =>
                  setSelected((current) =>
                    current.filter((item) => item.value !== member.value),
                  )
                }
                size="icon-xs"
                variant="ghost"
              >
                <XIcon />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
