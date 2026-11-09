import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/team-2-utils/button";
import { contactAgents as agents } from "@/components/ui/team-2-utils/team-2-contact-agents";

export function Team2() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mb-12 text-center">
          <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
            Check Out
          </p>
          <h2 className="text-foreground mt-1 mb-3 text-3xl font-bold text-balance md:text-4xl">
            Agents Grid
          </h2>
          <p className="text-muted-foreground">
            RealHomes Elementor widgets for Agents
          </p>
        </header>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="group relative pt-2 transition-all duration-300 hover:-translate-y-1"
            >
              <Card className="bg-card relative mt-8 overflow-visible py-0 pt-16 text-center transition-all duration-300 hover:shadow-lg">
                {/* Floating Image */}
                <div className="absolute inset-x-0 -top-8 flex justify-center">
                  <div className="border-border bg-background rounded-full border p-1.5 shadow-md transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="border-background bg-accent size-24 overflow-hidden rounded-full border-2">
                      <img
                        src={agent.image}
                        alt={`${agent.name}, Real Estate Agent`}
                        width={96}
                        height={96}
                        className="size-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <CardContent className="flex flex-col justify-between p-6">
                  <h3 className="text-foreground mb-3 text-xl font-semibold transition-colors">
                    {agent.name}
                  </h3>

                  <Button
                    variant="link"
                    size="sm"
                    className="h-8 px-3 text-xs text-muted-foreground hover:text-foreground h-auto cursor-pointer p-0 font-medium hover:no-underline"
                    nativeButton={false}
                    render={<a href={`tel:${agent.phone}`} />}
                  >
                    {agent.phone}
                  </Button>

                  <Button
                    variant="link"
                    size="sm"
                    className="h-8 px-3 text-xs text-muted-foreground hover:text-foreground mb-6 h-auto cursor-pointer p-0 text-sm hover:no-underline"
                    nativeButton={false}
                    render={<a href={`mailto:${agent.email}`} />}
                  >
                    {agent.email}
                  </Button>

                  <div className="border-border border-t pt-4 text-center">
                    <span className="text-foreground mb-1 block text-3xl font-bold">
                      {agent.properties}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      Listed Properties
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team2;
