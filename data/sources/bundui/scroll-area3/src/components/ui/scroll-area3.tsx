"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://cdn.21st.dev/assets/mirror/f0/f02fed36023656a5b5df6f247c83c96c53bfa9db5b98085cdee93ffc938a5f37.jpg"
  },
  {
    id: 2,
    name: "Sarah Miller",
    email: "sarah.miller@example.com",
    avatar: "https://cdn.21st.dev/assets/mirror/5b/5b5b2f3487692d40f629010ea6448d150907f780d8c262c4ca194b7386115c2d.jpg"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    avatar: "https://cdn.21st.dev/assets/mirror/10/10e2bfa5446e5c116e269b649b5f5e0106d96643f0a903048f3a056e40c35cd8.jpg"
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    avatar: "https://cdn.21st.dev/assets/mirror/fa/fae47bb0faba45d1e0696b6557ca36c551a738c7d6e3950e82bb69dd2f963a72.jpg"
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.brown@example.com",
    avatar: "https://cdn.21st.dev/assets/mirror/4f/4fb45af36b546e069b72527fdf4d904855a2b11b301fa738c8bc4d235595c4df.jpg"
  },
  {
    id: 6,
    name: "Lisa Anderson",
    email: "lisa.anderson@example.com",
    avatar: "https://cdn.21st.dev/assets/mirror/a4/a4dd47498f54944edb9cd8095fb751847193faac01d922bae494e68d0cf90f4f.jpg"
  },
  {
    id: 7,
    name: "Chris Taylor",
    email: "chris.taylor@example.com",
    avatar: "https://cdn.21st.dev/assets/mirror/b2/b2cd3e4ad761fd9954c265df5f86090c4f17c388c07f78332e75edfd7420f66a.jpg"
  },
  {
    id: 8,
    name: "Amy Martinez",
    email: "amy.martinez@example.com",
    avatar: "https://cdn.21st.dev/assets/mirror/9a/9a3f3f88dac2ceb807e98d4cbe99acc9813da6d0ce2859b1cf026747727e1667.jpg"
  },
  {
    id: 9,
    name: "Ryan Garcia",
    email: "ryan.garcia@example.com",
    avatar: "https://cdn.21st.dev/assets/mirror/b7/b78f8c42f62ae61f6ebe5c4e79f3af27f49dc05c4f366d2be599d1e14318be86.jpg"
  },
  {
    id: 10,
    name: "Jessica Lee",
    email: "jessica.lee@example.com",
    avatar: "https://cdn.21st.dev/assets/mirror/45/45482403ecbfd4f326c4388ca63773a1fbe79376213456ae0f422eea1a94d589.jpg"
  }
];

export default function Example() {
  return (
    <ScrollArea className="h-96 max-w-xs w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Users</h4>
        <div className="space-y-3">
          {users.map((user) => (
            <div key={user.id} className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-0.5">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-muted-foreground text-xs">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}