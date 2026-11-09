import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/v-table-6-utils/avatar";
import { Badge } from "@/components/ui/v-table-6-utils/badge";
import { Frame, FramePanel } from "@/components/ui/v-table-6-utils/frame";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/v-table-6-utils/table";

const members = [
  {
    avatar:
      "https://cdn.21st.dev/assets/mirror/f1/f196c8f46bd52c8e1ccb3d53dbe00ea28047a7d07ad42015b139b9b7a21ddcdc.jpg",
    email: "sarah@example.com",
    name: "Sarah Chen",
    role: "Admin",
    roleVariant: "default" as const,
    status: "Active",
    statusVariant: "success" as const,
  },
  {
    avatar:
      "https://cdn.21st.dev/assets/mirror/7a/7a441860d9b014f1d071006b567655c4fa0d3f45a693dcaa6a765ccd5953f7f0.jpg",
    email: "marcus@example.com",
    name: "Marcus Johnson",
    role: "Developer",
    roleVariant: "info" as const,
    status: "Active",
    statusVariant: "success" as const,
  },
  {
    avatar:
      "https://cdn.21st.dev/assets/mirror/cf/cf727f6ea4acac46e0f96d1d217b8a0d72a669d9c1a2c2721bfd478a07c1d810.jpg",
    email: "emily@example.com",
    name: "Emily Park",
    role: "Designer",
    roleVariant: "warning" as const,
    status: "Away",
    statusVariant: "warning" as const,
  },
  {
    avatar:
      "https://cdn.21st.dev/assets/mirror/d1/d1ec5561531e85766088af70f51f264f15e6e4fd33fd690f1149ece92f5fcc1a.jpg",
    email: "david@example.com",
    name: "David Kim",
    role: "Viewer",
    roleVariant: "outline" as const,
    status: "Offline",
    statusVariant: "outline" as const,
  },
];

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col">
      <Frame>
        <FramePanel className="p-0!">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.email}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage alt={member.name} src={member.avatar} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium text-sm">
                          {member.name}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {member.email}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge size="sm" variant={member.roleVariant}>
                      {member.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge size="sm" variant={member.statusVariant}>
                      {member.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </FramePanel>
      </Frame>
    </div>
  );
}

export default Pattern;
