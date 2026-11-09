import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconPlaceholder } from "@/components/ui/features-2-utils/icon-placeholder";

/** Props a call site may pass through to an icon. */
type IconProps = { className?: string; size?: number | string };

const rows = [
  {
    eyebrow: "Collaboration",
    Icon: (p: IconProps) => (
      <IconPlaceholder
        lucide="Users"
        tabler="IconUsersGroup"
        hugeicons="UserGroupIcon"
        phosphor="UsersThree"
        remixicon="RiTeamLine"
        {...p}
      />
    ),
    title: "Work as one, ship faster together",
    body: "One shared workspace where roles, live presence, and threaded comments keep everyone aligned.",
    bullets: [
      "Granular roles: viewer, editor, admin",
      "Real-time presence and inline comments",
      "Version history with one-click restore",
      "Guest access with expiring links",
    ],
    cta: "Explore Collaboration",
    img: "https://cdn.21st.dev/assets/mirror/8a/8a54ed424f08d3d8c9a634c111fb92bc7066b5dbb1bc701ecc8ee1a978eb5236.jpg",
    imgAlt: "Team collaboration interface showing shared workspace",
    avatars: [
      {
        name: "Sarah Kim",
        initials: "SK",
        src: "https://cdn.21st.dev/assets/mirror/a3/a37358a09c532474e3246a94e5e5104b1b6b6907f83b44259509f8c776506120.jpg",
      },
      {
        name: "Marcus Webb",
        initials: "MW",
        src: "https://cdn.21st.dev/assets/mirror/be/be1b67757a13dfec4386e8627236a7194c6bcfb07502dbd82f727f6ccac46bcd.jpg",
      },
      {
        name: "Priya Nair",
        initials: "PN",
        src: "https://cdn.21st.dev/assets/mirror/38/38eeaa3b65facaccd15508865c22bb499d64e3908f3054899844eb1068d7cada.jpg",
      },
    ],
    stat: { value: "4.2×", label: "Faster Review Cycles" },
  },
  {
    eyebrow: "Analytics",
    Icon: (p: IconProps) => (
      <IconPlaceholder
        lucide="BarChart"
        tabler="IconChartBar"
        hugeicons="BarChartIcon"
        phosphor="ChartBar"
        remixicon="RiBarChartLine"
        {...p}
      />
    ),
    title: "Decisions grounded in real data",
    body: "Turn raw events into clear, actionable dashboards in minutes, with no SQL or data-engineering bottleneck.",
    bullets: [
      "Sub-second query engine for large datasets",
      "Funnel, retention, and cohort views built-in",
      "Scheduled email and Slack reports",
      "CSV and REST API export",
    ],
    cta: "See Analytics In Action",
    img: "https://cdn.21st.dev/assets/mirror/8b/8be6d00d327ebf1eb18291a09a105621538f49db1f4dce53142cfaf6edca37d0.jpg",
    imgAlt: "Analytics dashboard with funnel and retention charts",
    avatars: [
      {
        name: "James Okafor",
        initials: "JO",
        src: "https://cdn.21st.dev/assets/mirror/34/346464a2e3f1a5ef41c81c73d08727d0c784e9445031fa30849ee60fc48dd425.jpg",
      },
      {
        name: "Lena Strauss",
        initials: "LS",
        src: "https://cdn.21st.dev/assets/mirror/4f/4fb45af36b546e069b72527fdf4d904855a2b11b301fa738c8bc4d235595c4df.jpg",
      },
    ],
    stat: { value: "98%", label: "Query Success Rate" },
  },
  {
    eyebrow: "Security",
    Icon: (p: IconProps) => (
      <IconPlaceholder
        lucide="ShieldCheck"
        tabler="IconShieldCheck"
        hugeicons="Shield01Icon"
        phosphor="ShieldCheck"
        remixicon="RiShieldCheckLine"
        {...p}
      />
    ),
    title: "Enterprise-grade protection, zero friction",
    body: "Controls your compliance team will love and developers barely notice, with SSO, MFA, audit logs, and data residency built in.",
    bullets: [
      "SOC 2 Type II and ISO 27001 certified",
      "SSO via SAML 2.0 and OIDC",
      "Immutable audit log with SIEM export",
      "EU and US data-residency regions",
    ],
    cta: "Review Security Docs",
    img: "https://cdn.21st.dev/assets/mirror/83/83e1fbccf7593d23be12525530591103414b7fe0d54dd78c536d298230b8531e.jpg",
    imgAlt: "Security controls panel with audit log",
    avatars: [
      {
        name: "Diana Reyes",
        initials: "DR",
        src: "https://cdn.21st.dev/assets/mirror/b7/b78f8c42f62ae61f6ebe5c4e79f3af27f49dc05c4f366d2be599d1e14318be86.jpg",
      },
      {
        name: "Tom Eriksen",
        initials: "TE",
        src: "https://cdn.21st.dev/assets/mirror/0e/0e070896705960db5025f59cd13d62e3ab4289d8702d084c79e11234b7ee1eab.jpg",
      },
      {
        name: "Aiko Tanaka",
        initials: "AT",
        src: "https://cdn.21st.dev/assets/mirror/c9/c9038553755a8c1c3753ccd0a14af4854745b83bd3a97609f81d2c0d48f35517.jpg",
      },
    ],
    stat: { value: "0", label: "Reported Breaches" },
  },
];

export default function FeaturesBlock() {
  return (
    <section className="flex w-full items-center justify-center bg-background px-6 py-24 text-foreground">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <Badge variant="outline" className="mb-5">
            Platform
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Built for every part of your workflow
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Acme brings collaboration, analytics, and security into one cohesive
            platform, so nothing falls between the cracks.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {rows.map((row, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={row.eyebrow}>
                <div
                  className={`flex flex-col gap-10 py-16 md:flex-row md:items-center md:gap-20 ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex flex-1 flex-col gap-6">
                    <div className="flex items-center gap-2">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-border bg-muted">
                        <row.Icon
                          className="size-3.5 text-muted-foreground"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                        {row.eyebrow}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-[1.75rem] sm:leading-snug">
                      {row.title}
                    </h3>

                    <p className="leading-relaxed text-muted-foreground">
                      {row.body}
                    </p>

                    <ul className="flex flex-col gap-3">
                      {row.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-center gap-3 text-sm"
                        >
                          <span className="flex size-[18px] shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <IconPlaceholder
                              lucide="Check"
                              tabler="IconCheck"
                              hugeicons="Tick02Icon"
                              phosphor="Check"
                              remixicon="RiCheckLine"
                              className="size-2.5"
                              aria-hidden="true"
                            />
                          </span>
                          <span className="text-foreground">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-4 border-t border-border pt-5">
                      <div className="flex -space-x-2">
                        {row.avatars.map((av) => (
                          <Avatar
                            key={av.name}
                            className="size-7 border-2 border-background"
                          >
                            <AvatarImage
                              src={av.src}
                              alt={av.name}
                              className="grayscale"
                            />
                            <AvatarFallback className="text-[10px]">
                              {av.initials}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-bold tabular-nums">
                          {row.stat.value}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {row.stat.label}
                        </span>
                      </div>
                    </div>

                    <div>
                      <Button variant="outline" size="sm">
                        {row.cta}
                        <IconPlaceholder
                          lucide="ArrowRight"
                          tabler="IconArrowRight"
                          hugeicons="ArrowRightIcon"
                          phosphor="ArrowRight"
                          remixicon="RiArrowRightLine"
                          data-icon="inline-end"
                        />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center justify-center">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-muted md:max-w-sm">
                      <img
                        src={row.img}
                        alt={row.imgAlt}
                        className="size-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 border-t border-border bg-background/80 px-4 py-2.5 backdrop-blur-sm">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                          <row.Icon
                            className="size-3 text-muted-foreground"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
                          {row.eyebrow} Preview
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {index < rows.length - 1 && <Separator />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
