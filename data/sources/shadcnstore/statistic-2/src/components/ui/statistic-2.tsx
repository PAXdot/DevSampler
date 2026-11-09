import { Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { companyMetrics } from "@/components/ui/statistic-2-utils/statistic-2-data";

export function Statistic2() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          {/* Header with Side-by-Side Layout */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="h-auto [&>svg]:size-4! rounded-md flex items-center gap-2 px-4 py-2 text-sm font-medium"
                >
                  <Rocket />
                  Company Growth
                </Badge>
              </div>
              <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Building the future of{" "}
                <span className="from-primary to-primary/60 bg-linear-to-r bg-clip-text text-transparent">
                  developer tools
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From a small startup to a platform trusted by thousands of
                developers worldwide. Here's how we're scaling our impact and
                growing our team.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {companyMetrics.map((metric) => (
                <Card
                  key={metric.label}
                  className="text-center transition-shadow duration-200 hover:shadow-md py-6"
                >
                  <CardContent className="flex flex-col gap-3">
                    <div className="bg-primary/10 mx-auto flex size-12 items-center justify-center rounded-xl">
                      <metric.icon className="text-primary size-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <p className="text-muted-foreground text-sm">
                        {metric.label}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistic2;
