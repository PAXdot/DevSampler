import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IconPlaceholder } from "@/components/ui/activity-4-utils/icon-placeholder";

/** Props a call site may pass through to an icon. */
type IconProps = { className?: string; size?: number | string };

type ActivityType = "mention" | "comment" | "review";

type Item = {
  id: number;
  type: ActivityType;
  actor: { name: string; initials: string; avatar: string };
  action: string;
  target: string;
  time: string;
  unread: boolean;
};

const typeIcon = {
  mention: (p: IconProps) => (
    <IconPlaceholder
      lucide="AtSign"
      tabler="IconAt"
      hugeicons="AtIcon"
      phosphor="At"
      remixicon="RiAtLine"
      {...p}
    />
  ),
  comment: (p: IconProps) => (
    <IconPlaceholder
      lucide="MessageCircle"
      tabler="IconMessageCircle"
      hugeicons="Message01Icon"
      phosphor="ChatCircle"
      remixicon="RiChat3Line"
      {...p}
    />
  ),
  review: (p: IconProps) => (
    <IconPlaceholder
      lucide="GitPullRequest"
      tabler="IconGitPullRequest"
      hugeicons="GitPullRequestIcon"
      phosphor="GitPullRequest"
      remixicon="RiGitPullRequestLine"
      {...p}
    />
  ),
};

const items: Item[] = [
  {
    id: 1,
    type: "mention",
    actor: {
      name: "Mara Lin",
      initials: "ML",
      avatar: "https://cdn.21st.dev/assets/mirror/c8/c839283fbbc8b5174e41d8d779a0c700a8647e7b8fa42d933a544acde2ea58ef.jpg",
    },
    action: "mentioned you in",
    target: "Q3 Launch Plan",
    time: "9:42 AM",
    unread: true,
  },
  {
    id: 2,
    type: "review",
    actor: {
      name: "Leo Tanaka",
      initials: "LT",
      avatar: "https://cdn.21st.dev/assets/mirror/3b/3b0a3ee40a55d8217002ce43ee42ad7f55fff9d0f8d571cd699a260387638025.jpg",
    },
    action: "requested your review on",
    target: "PR #418",
    time: "9:15 AM",
    unread: true,
  },
  {
    id: 3,
    type: "comment",
    actor: {
      name: "Priya Nair",
      initials: "PN",
      avatar: "https://cdn.21st.dev/assets/mirror/51/513243ddb336cac94373daed86b5708fbe8204f747df84d619f1c93807e564fe.jpg",
    },
    action: "commented on",
    target: "Dark Theme Tokens",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 4,
    type: "mention",
    actor: {
      name: "Owen Reyes",
      initials: "OR",
      avatar: "https://cdn.21st.dev/assets/mirror/e2/e24d3172847968af1d8b3f1b4dbf227cd12f4197df8597a9fe0344994ce497e0.jpg",
    },
    action: "mentioned you in",
    target: "Standup Notes",
    time: "Yesterday",
    unread: false,
  },
];

const tabs: { value: string; label: string; filter?: ActivityType }[] = [
  { value: "all", label: "All" },
  { value: "mentions", label: "Mentions", filter: "mention" },
  { value: "comments", label: "Comments", filter: "comment" },
];

function ActivityRow({ item }: { item: Item }) {
  const Icon = typeIcon[item.type];
  return (
    <li className="flex items-start gap-3 px-4 py-3">
      <div className="relative">
        <Avatar className="size-9">
          <AvatarImage
            src={item.actor.avatar}
            alt={item.actor.name}
            className="grayscale"
          />
          <AvatarFallback>{item.actor.initials}</AvatarFallback>
        </Avatar>
        <span className="absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-background">
          <Icon className="size-3 text-muted-foreground" aria-hidden="true" />
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-pretty">
          <span className="font-medium">{item.actor.name}</span>{" "}
          <span className="text-muted-foreground">{item.action}</span>{" "}
          <span className="font-medium">{item.target}</span>
        </p>
        <span className="text-xs text-muted-foreground">{item.time}</span>
      </div>
      {item.unread && (
        <span
          className="mt-1.5 size-2 shrink-0 rounded-full bg-info"
          role="img"
          aria-label="Unread"
        />
      )}
    </li>
  );
}

function ActivityList({ filter }: { filter?: ActivityType }) {
  const list = filter ? items.filter((item) => item.type === filter) : items;
  return (
    <ul className="divide-y divide-border">
      {list.map((item) => (
        <ActivityRow key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default function ActivityBlock() {
  const unread = items.filter((item) => item.unread).length;

  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-background px-6 py-16 text-foreground">
      <div className="w-full max-w-md rounded-xl border border-border bg-card ring-1 ring-foreground/5">
        <div className="flex items-center justify-between gap-2 border-b border-border p-4">
          <h2 className="font-heading text-sm font-semibold">Activity</h2>
          <Badge variant="secondary">{unread} New</Badge>
        </div>
        <Tabs defaultValue="all">
          <div className="px-4 pt-3">
            <TabsList className="w-full">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-2">
              <ActivityList filter={tab.filter} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
