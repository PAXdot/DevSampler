import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const members = [
  {
    name: "Olivia Martin",
    email: "olivia@example.com",
    role: "Owner",
    image: "https://cdn.21st.dev/assets/mirror/51/513d06f542692036ff0bb17938f04b3efd60567ba2cae08049469d21f18e0524.jpg",
    initials: "OM",
  },
  {
    name: "Jackson Lee",
    email: "jackson@example.com",
    role: "Member",
    image: "",
    initials: "JL",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella@example.com",
    role: "Admin",
    image: "https://cdn.21st.dev/assets/mirror/75/750f6ec055e825533be5a5f62844312beeb7f41870eac9fa7d1e168f9f352246.png",
    initials: "IN",
  },
];

export function Table02() {
  return (
    <div className="w-full max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Member</TableHead>
            <TableHead className="text-right">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.email}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="size-8">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium">{member.name}</span>
                    <span className="text-muted-foreground text-xs">
                      {member.email}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground text-right">
                {member.role}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Table02;
