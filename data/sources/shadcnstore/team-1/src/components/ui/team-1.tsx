import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Languages, Home } from "lucide-react";
import { agents } from "@/components/ui/team-1-utils/team-1-agents";

export function Team1() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <header className="mb-12 text-center">
        <h1 className="text-foreground text-4xl font-bold text-balance md:text-5xl">
          All Agents
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {agents.map((agent) => (
          <Card
            key={agent.id}
            className="group relative overflow-hidden py-0 transition-all duration-300 hover:shadow-lg"
          >
            <CardContent className="flex h-full flex-col p-0">
              {/* Image Container */}
              <div className="bg-muted relative h-64 overflow-hidden">
                <img
                  src={agent.image}
                  alt={`${agent.name}, ${agent.title}`}
                  width={400}
                  height={400}
                  className="size-full object-cover object-center grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  style={{ objectPosition: "50% 15%" }}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex grow flex-col p-6">
                <div className="mb-6">
                  <h3 className="text-foreground mb-1 text-xl font-semibold">
                    {agent.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{agent.title}</p>
                </div>

                <div className="mb-6 grow flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <Home className="bg-muted text-foreground/70 mt-0.5 size-8 shrink-0 rounded-full p-1.5" />
                    <div>
                      <p className="text-muted-foreground text-sm">
                        Properties
                      </p>
                      <p className="text-foreground text-sm font-medium">
                        {agent.properties} listed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Languages className="bg-muted text-foreground/70 mt-0.5 size-8 shrink-0 rounded-full p-1.5" />
                    <div>
                      <p className="text-muted-foreground text-sm">Languages</p>
                      <p className="text-foreground text-sm font-medium">
                        {agent.languages.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-foreground mt-auto">
                <Button
                  variant="ghost"
                  className="h-9 px-4 py-2 text-background hover:bg-foreground/80 hover:text-background w-full cursor-pointer p-6"
                >
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Team1;
