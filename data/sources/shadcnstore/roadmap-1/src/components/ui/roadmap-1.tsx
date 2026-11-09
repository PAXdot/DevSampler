import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import {
  roadmapColumnLabels,
  roadmapColumnOrder,
  roadmapEntries,
  simpleRoadmapCopy,
} from "@/components/ui/roadmap-1-utils/roadmap-1-data";

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

/**
 * A three-column roadmap that publishes order rather than dates.
 *
 * The columns are Now / Next / Later, not quarters. A quarter is a promise a roadmap cannot keep,
 * and the day one slips the whole board reads as stale — which is why so many public roadmaps are
 * eighteen months out of date. Order is a promise a team can actually keep, so the board stays
 * true for longer and needs editing less often.
 *
 * Only the first column is marked. Every column tinted is no emphasis at all, and the one thing a
 * reader wants from a roadmap on first glance is which of these is happening now.
 *
 * No hooks and no handlers, so it renders as a server component straight from your own board.
 */
export function Roadmap1() {
  return (
    <section
      aria-labelledby="roadmap-1-heading"
      className="w-full py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-muted-foreground text-sm font-medium">
            {simpleRoadmapCopy.eyebrow}
          </p>
          <h2
            id="roadmap-1-heading"
            className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {simpleRoadmapCopy.heading}
          </h2>
          <p className="text-muted-foreground mt-3 text-lg text-pretty">
            {simpleRoadmapCopy.lede}
          </p>
          <p className="text-muted-foreground mt-3 text-sm">
            {"Last updated "}
            <time dateTime={simpleRoadmapCopy.updatedAt}>
              {dateFormat.format(new Date(simpleRoadmapCopy.updatedAt))}
            </time>
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {roadmapColumnOrder.map((column, columnIndex) => {
            const entries = roadmapEntries.filter(
              (entry) => entry.column === column,
            );
            const label = roadmapColumnLabels[column];

            return (
              /*
                A section per column, each labelled, so a screen reader can move between them and
                hear which is which rather than meeting one long undifferentiated list.
              */
              <section
                key={column}
                aria-labelledby={`roadmap-1-${column}`}
                className="flex flex-col gap-4"
              >
                <div
                  className={cn(
                    "border-t pt-4",
                    // Only "Now" is marked. Emphasis on every column is emphasis on none.
                    columnIndex === 0 && "border-t-primary border-t-2",
                  )}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 id={`roadmap-1-${column}`} className="font-medium">
                      {label.title}
                    </h3>
                    {/*
                      The count is decorative next to a list the reader can see; the heading above
                      already names the column, so this is hidden rather than read out as a stray
                      number after it.
                    */}
                    <span
                      aria-hidden="true"
                      className="text-muted-foreground text-sm tabular-nums"
                    >
                      {entries.length}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {label.hint}
                  </p>
                </div>

                <ul className="flex flex-col gap-3">
                  {entries.map((entry) => (
                    <li key={entry.id}>
                      {/*
                        The full Card composition rather than everything dumped in CardContent:
                        the title and the sentence under it are a header and its description, and
                        saying so is what lets a buyer restyle one card in one place.
                      */}
                      <Card className="h-full gap-3 py-4">
                        <CardHeader className="px-4">
                          <CardTitle className="text-base leading-6 text-balance">
                            {entry.title}
                          </CardTitle>
                          <CardDescription className="text-pretty">
                            {entry.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="px-4">
                          <Badge
                            variant="secondary"
                            className="rounded-full font-normal"
                          >
                            {entry.area}
                          </Badge>
                        </CardContent>
                      </Card>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Roadmap1;
