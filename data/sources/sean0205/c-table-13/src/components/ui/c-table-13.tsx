import { Badge } from "@/components/ui/c-table-13-utils/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FileTextIcon,
  FolderIcon,
  FileSpreadsheetIcon,
  ImageIcon,
  PenToolIcon,
} from "lucide-react";

const files = [
  {
    name: "Q4 Financial Report.pdf",
    icon: (
      <FileTextIcon
        className="text-muted-foreground size-4 shrink-0"
        aria-hidden="true"
      />
    ),
    size: "2.4 MB",
    owner: "Sarah Chen",
    ownerAvatar:
      "https://cdn.21st.dev/assets/mirror/f1/f196c8f46bd52c8e1ccb3d53dbe00ea28047a7d07ad42015b139b9b7a21ddcdc.jpg",
    sharing: "Team",
    sharingVariant: "info-light" as const,
    modified: "2 hours ago",
  },
  {
    name: "Brand Guidelines",
    icon: (
      <FolderIcon
        className="text-muted-foreground size-4 shrink-0"
        aria-hidden="true"
      />
    ),
    size: "—",
    owner: "Emily Park",
    ownerAvatar:
      "https://cdn.21st.dev/assets/mirror/cf/cf727f6ea4acac46e0f96d1d217b8a0d72a669d9c1a2c2721bfd478a07c1d810.jpg",
    sharing: "Public",
    sharingVariant: "success-light" as const,
    modified: "1 day ago",
  },
  {
    name: "Product Roadmap 2025.xlsx",
    icon: (
      <FileSpreadsheetIcon
        className="text-muted-foreground size-4 shrink-0"
        aria-hidden="true"
      />
    ),
    size: "856 KB",
    owner: "Marcus Johnson",
    ownerAvatar:
      "https://cdn.21st.dev/assets/mirror/7a/7a441860d9b014f1d071006b567655c4fa0d3f45a693dcaa6a765ccd5953f7f0.jpg",
    sharing: "Private",
    sharingVariant: "outline" as const,
    modified: "3 days ago",
  },
  {
    name: "App Screenshots",
    icon: (
      <ImageIcon
        className="text-muted-foreground size-4 shrink-0"
        aria-hidden="true"
      />
    ),
    size: "48.2 MB",
    owner: "David Kim",
    ownerAvatar:
      "https://cdn.21st.dev/assets/mirror/d1/d1ec5561531e85766088af70f51f264f15e6e4fd33fd690f1149ece92f5fcc1a.jpg",
    sharing: "Team",
    sharingVariant: "info-light" as const,
    modified: "1 week ago",
  },
  {
    name: "Architecture Diagram.fig",
    icon: (
      <PenToolIcon
        className="text-muted-foreground size-4 shrink-0"
        aria-hidden="true"
      />
    ),
    size: "12.8 MB",
    owner: "Sofia Davis",
    ownerAvatar:
      "https://cdn.21st.dev/assets/mirror/30/3046299adaf36760e400c8c71d6f738d8dbec09de899c2b15eba88fcaa8d4ef0.jpg",
    sharing: "Restricted",
    sharingVariant: "warning-light" as const,
    modified: "2 weeks ago",
  },
];

export default function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Sharing</TableHead>
            <TableHead>Size</TableHead>
            <TableHead className="text-right">Modified</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.map((file) => (
            <TableRow key={file.name}>
              <TableCell>
                <div className="flex items-center gap-3">
                  {file.icon}
                  <span className="text-sm font-medium">{file.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="size-6">
                    <AvatarImage src={file.ownerAvatar} alt={file.owner} />
                    <AvatarFallback>
                      {file.owner
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{file.owner}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={file.sharingVariant} size="sm">
                  {file.sharing}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {file.size}
              </TableCell>
              <TableCell className="text-muted-foreground text-right text-sm">
                {file.modified}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
