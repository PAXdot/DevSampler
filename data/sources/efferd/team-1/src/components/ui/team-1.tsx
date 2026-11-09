import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  link: string;
};

const team: TeamMember[] = [
  {
    name: "Shaban Haider",
    role: "Founder & CEO",
    image:
      "https://cdn.21st.dev/assets/localized/29273f98396f9e34f6ba9ee298141e2b24fc8a2fd1420b388184a0f542076b49.jpg",
    link: "#",
  },
  {
    name: "Jordan Blake",
    role: "Head of Product",
    image:
      "https://cdn.21st.dev/assets/mirror/cc/ccbabf2b3634a1fdba500542e683706fd11f44ef24d260c57058d78a9f250343.jpg",
    link: "#",
  },
  {
    name: "Priya Nair",
    role: "Design Lead",
    image:
      "https://cdn.21st.dev/assets/mirror/71/7197a8b655e31b731a6fb907cb7da7eaf5eea59049b5e07c1e73c43750fb4217.jpg",
    link: "#",
  },
  {
    name: "Alex Rivera",
    role: "Engineering",
    image:
      "https://cdn.21st.dev/assets/mirror/f9/f995587e54e9f87bdda3cfba36c92e07d771e5eaae550ccd379c6e2cd57c2fd9.jpg",
    link: "#",
  },
  {
    name: "Sam Okonkwo",
    role: "Growth",
    image:
      "https://cdn.21st.dev/assets/mirror/9d/9d3e32a9523b2605f1b09f41058a51f034d67bfd02e1ac314fc06892a7520197.jpg",
    link: "#",
  },
  {
    name: "Leo Park",
    role: "Developer Experience",
    image:
      "https://cdn.21st.dev/assets/mirror/7f/7f0d995afd2b89031cb0f9947ad97735b9c1aa779ba44c94665077ce76967fe4.jpg",
    link: "#",
  },
  {
    name: "Elena Ross",
    role: "Brand",
    image:
      "https://cdn.21st.dev/assets/mirror/df/df3344b647a225067108fd4ac11c4c5bb1e38358da96d4c3876f625f0c66cc9e.jpg",
    link: "#",
  },
  {
    name: "Marcus Hale",
    role: "Support",
    image:
      "https://cdn.21st.dev/assets/mirror/a3/a365c9363b8fd540ae032339795358599edfd4b91a54b5f469eb052f4a6cd5f1.jpg",
    link: "#",
  },
];

export function TeamSection() {
  return (
    <section
      aria-labelledby="team-heading"
      className="mx-auto flex w-full max-w-5xl flex-col gap-8"
    >
      <h2
        className="text-balance font-medium text-3xl md:text-4xl"
        id="team-heading"
      >
        Our Incredible Team
      </h2>

      <div className="relative">
        <TeamMemberCardSeparator className="left-0 hidden sm:block" />
        <TeamMemberCardSeparator className="left-1/2 lg:hidden" />
        <TeamMemberCardSeparator className="left-1/3 hidden lg:block" />
        <TeamMemberCardSeparator className="left-2/3 hidden lg:block" />
        <TeamMemberCardSeparator className="left-full hidden sm:block" />
        <ul className="grid grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="text-pretty text-lg text-muted-foreground">
          <span className="font-medium text-foreground">Join us!</span> Let's
          shape the future of the web together
        </p>
        <Button asChild className="w-full md:w-auto">
          <a href="#careers">View openings</a>
        </Button>
      </div>
    </section>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  const { name, role, image, link } = member;

  return (
    <li>
      <a
        className="group flex flex-col items-center gap-4 px-6 py-8 text-center md:py-14"
        href={link}
      >
        <Avatar className="size-10 md:size-12">
          <AvatarImage
            alt={`${name}'s portrait`}
            className="grayscale group-hover:grayscale-0"
            src={image}
          />
          <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-0.5">
          <h3 className="font-medium text-foreground">{name}</h3>
          <p className="text-pretty text-muted-foreground text-xs">{role}</p>
        </div>
      </a>
    </li>
  );
}
function TeamMemberCardSeparator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-y-0 w-px",
        "bg-[linear-gradient(to_bottom,--theme(--color-foreground/.05)_0%,--theme(--color-foreground/.1)_2.5%,--theme(--color-foreground/.1)_97.5%,--theme(--color-foreground/.05)_100%)]",
        className,
      )}
      {...props}
    />
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
