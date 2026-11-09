import { GithubIcon } from "@/components/ui/team-2-utils/github-icon";
import { LinkedinIcon } from "@/components/ui/team-2-utils/linkedin-icon";
import { XIcon } from "@/components/ui/team-2-utils/x-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/team-2-utils/button";
import { FullWidthDivider } from "@/components/ui/team-2-utils/full-width-divider";

type Social = {
  label: "X" | "GitHub" | "LinkedIn";
  href: string;
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
  socials: Social[];
};

const socialIcons = {
  X: XIcon,
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
} as const;

const team: TeamMember[] = [
  {
    name: "Shaban Haider",
    role: "Founder & CEO",
    image:
      "https://cdn.21st.dev/assets/localized/29273f98396f9e34f6ba9ee298141e2b24fc8a2fd1420b388184a0f542076b49.jpg",
    socials: [
      { label: "X", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  {
    name: "Jordan Blake",
    role: "Head of Product",
    image:
      "https://cdn.21st.dev/assets/mirror/66/667369889ffd12e510897fcb9ba5b817d56f735faea85f9ccd12bcedbfaa819b.jpg",
    socials: [
      { label: "X", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    name: "Priya Nair",
    role: "Design Lead",
    image:
      "https://cdn.21st.dev/assets/mirror/c6/c6c51783628e317008b03004640a273251c41c6373a6fc63738dc2d56df83965.jpg",
    socials: [
      { label: "X", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  {
    name: "Alex Rivera",
    role: "Engineering",
    image:
      "https://cdn.21st.dev/assets/mirror/bf/bf5e190044b602e47fe1fd6933360d80a1503e25b1f86bb28222d49e797224f3.jpg",
    socials: [
      { label: "X", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    name: "Sam Okonkwo",
    role: "Growth",
    image:
      "https://cdn.21st.dev/assets/mirror/b1/b139443f668603ec71ae0be3e12a55975bb87b1277b9bd1dcaa15c2cf8a1a205.jpg",
    socials: [
      { label: "X", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  {
    name: "Leo Park",
    role: "Developer Experience",
    image:
      "https://cdn.21st.dev/assets/mirror/6c/6c6d84386a9aef2d7d173c8cedc91a76ff102e4f629d23d5f58217f81241ed0d.jpg",
    socials: [
      { label: "X", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];

export function TeamSection() {
  return (
    <section
      aria-labelledby="team-heading"
      className="mx-auto flex h-screen w-full max-w-5xl flex-col justify-center border-x"
    >
      <div className="flex flex-col gap-2 px-4 py-8 md:px-6 md:py-12">
        <h2
          className="text-balance font-medium text-3xl md:text-4xl"
          id="team-heading"
        >
          Meet the team
        </h2>
        <p className="max-w-lg text-pretty text-muted-foreground text-sm md:text-base">
          The people who design, ship, and obsess over every Efferd block.
        </p>
      </div>

      <div className="relative">
        <FullWidthDivider position="top" />
        <ul className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </ul>
        <FullWidthDivider position="bottom" />
      </div>

      <div className="relative flex flex-col items-start justify-between gap-4 px-4 py-8 md:flex-row md:items-center md:px-6">
        <FullWidthDivider position="bottom" />
        <div className="flex flex-col gap-1">
          <p className="font-medium text-foreground">Want to join us?</p>
          <p className="text-pretty text-muted-foreground text-sm">
            We're always looking for people who care about craft.
          </p>
        </div>
        <Button asChild variant="outline">
          <a href="#careers">View openings</a>
        </Button>
      </div>
    </section>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  const { name, role, image, socials } = member;

  return (
    <li className="flex items-center gap-3 bg-background p-4 md:p-6">
      <Avatar className="size-12 rounded-sm shadow-sm *:rounded-sm after:rounded-sm">
        <AvatarImage alt={`${name}'s portrait`} src={image} />
        <AvatarFallback>{getInitials(name)}</AvatarFallback>
      </Avatar>
      <div className="flex min-w-0 flex-col gap-0.5">
        <h3 className="truncate font-medium text-foreground">{name}</h3>
        <p className="text-muted-foreground text-sm">{role}</p>
      </div>
      <div className="ms-auto flex h-full shrink-0 items-end gap-0.5">
        {socials.map((social) => {
          const Icon = socialIcons[social.label];

          return (
            <Button
              asChild
              className="text-muted-foreground"
              key={social.label}
              size="icon-xs"
              variant="ghost"
            >
              <a aria-label={`${name} on ${social.label}`} href={social.href}>
                <Icon />
              </a>
            </Button>
          );
        })}
      </div>
    </li>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default TeamSection;
