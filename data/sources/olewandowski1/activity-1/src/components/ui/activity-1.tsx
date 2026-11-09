import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Event = {
  id: string;
  actor: string;
  initials: string;
  avatar: string;
  action: string;
  target: string;
  time: string;
};

const events: Event[] = [
  {
    id: "merge-main",
    actor: "Mara Ellis",
    initials: "ME",
    avatar: "https://cdn.21st.dev/assets/mirror/93/93a1ee3f10b9da51ac1432f03a0680fa3016b4a2eb6659aef46c25df091ab930.jpg",
    action: "merged a pull request into",
    target: "main",
    time: "12 Min Ago",
  },
  {
    id: "deploy-v241",
    actor: "Leo Tanaka",
    initials: "LT",
    avatar: "https://cdn.21st.dev/assets/mirror/51/511e8a28ad384d1692e249771c5da88414ce778aec74ea21451d519db92e0038.jpg",
    action: "deployed",
    target: "v2.4.1 to production",
    time: "1 Hour Ago",
  },
  {
    id: "comment-roadmap",
    actor: "Priya Nair",
    initials: "PN",
    avatar: "https://cdn.21st.dev/assets/mirror/ff/ff69e06d986306dd387813d2e4f8afda62c6ee5f9fbc7bb83dc69b323b9d3869.jpg",
    action: "commented on",
    target: "Q3 Roadmap",
    time: "3 Hours Ago",
  },
  {
    id: "invite-members",
    actor: "Owen Brooks",
    initials: "OB",
    avatar: "https://cdn.21st.dev/assets/mirror/2b/2b7b08655f93dbb0d950da430b1e251dcfede184e47d81a2c425514cd529b0fe.jpg",
    action: "invited",
    target: "two new members",
    time: "5 Hours Ago",
  },
  {
    id: "close-482",
    actor: "Sasha Kim",
    initials: "SK",
    avatar: "https://cdn.21st.dev/assets/mirror/a4/a4f796780e78d2c6c13f57c2f81a3fa8c26c8fcdbfdbfe2c32cdbe4dc3d940e2.jpg",
    action: "closed issue",
    target: "#482",
    time: "Yesterday",
  },
];

export default function ActivityBlock() {
  return (
    <section className="flex w-full items-center justify-center bg-muted/30 px-6 py-16 text-foreground">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Activity</CardTitle>
          <CardDescription>
            Recent actions across your workspace.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ul className="flex flex-col divide-y divide-border">
            {events.map((event) => (
              <li
                key={event.id}
                className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
              >
                <Avatar className="size-8 border border-border">
                  <AvatarImage
                    src={event.avatar}
                    alt={event.actor}
                    className="grayscale"
                  />
                  <AvatarFallback className="text-xs">
                    {event.initials}
                  </AvatarFallback>
                </Avatar>
                <p className="flex-1 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {event.actor}
                  </span>{" "}
                  {event.action}{" "}
                  <span className="font-medium text-foreground">
                    {event.target}
                  </span>
                </p>
                <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                  {event.time}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
