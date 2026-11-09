import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { XIcon } from "lucide-react";

interface User {
  id: number;
  name: string;
  image: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Alessandro",
    image: "https://cdn.21st.dev/assets/mirror/f0/f02fed36023656a5b5df6f247c83c96c53bfa9db5b98085cdee93ffc938a5f37.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://cdn.21st.dev/assets/mirror/5b/5b5b2f3487692d40f629010ea6448d150907f780d8c262c4ca194b7386115c2d.jpg",
  },
];

export default function BadgeComponent() {
  return (
    <div className="flex flex-wrap gap-2">
      {users.map((user) => (
        <Badge
          key={user.id}
          variant="outline"
          className="flex items-center gap-1 pr-1.5 pl-0.5"
        >
          <Avatar className="size-5">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span>{user.name}</span>
          <button>
            <XIcon className="size-3 cursor-pointer opacity-60 hover:opacity-100" />
          </button>
        </Badge>
      ))}
    </div>
  );
}
