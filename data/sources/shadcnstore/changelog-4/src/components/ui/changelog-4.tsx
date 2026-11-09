import { Rss } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  simpleChangelogCopy,
  simpleReleases,
  type ChangeKind,
} from "@/components/ui/changelog-4-utils/changelog-4-data";

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

/**
 * A tint and the word, never the tint alone.
 *
 * "Added", "Improved" and "Fixed" are the three states a reader scans for, and colour is the
 * fastest way to separate them — but it is never the only way here: each badge says which it is,
 * so the list survives greyscale, colour blindness and a customizer preset that happens to put
 * two of these close together.
 */
const kindClasses: Record<ChangeKind, string> = {
  Added: "bg-primary/10 text-primary",
  Improved: "bg-secondary text-secondary-foreground",
  Fixed: "bg-muted text-muted-foreground",
};

/**
 * The plainest changelog that is still worth reading.
 *
 * No filters, no expanding rows, no screenshots — a buyer who wants those has `changelog-1` to
 * `-3`. What this one is for is the team that ships weekly and wants the page to stay a list: a
 * date rail on the left, the release beside it, and every line tagged with what kind of change it
 * was so the reader can find the fix they came for without reading the prose around it.
 *
 * No hooks and no handlers, so it renders as a server component straight from your release
 * records.
 */
export function Changelog4() {
  return (
    <section
      aria-labelledby="changelog-4-heading"
      className="w-full py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-muted-foreground text-sm font-medium">
              {simpleChangelogCopy.eyebrow}
            </p>
            <h2
              id="changelog-4-heading"
              className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {simpleChangelogCopy.heading}
            </h2>
            <p className="text-muted-foreground mt-3 text-pretty">
              {simpleChangelogCopy.lede}
            </p>
          </div>

          {/* Named, so it is linked. A feed the copy mentions and does not offer is a dead end. */}
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={<a href={simpleChangelogCopy.feedHref} />}
          >
            <Rss data-icon="inline-start" aria-hidden="true" />
            {simpleChangelogCopy.feedLabel}
          </Button>
        </div>

        {/*
          One list, one rule between entries. The rail is a border on the container rather than a
          segment per release, so it stays continuous whether a release carries two lines or ten.
        */}
        <ol className="mt-12 flex flex-col">
          {simpleReleases.map((release, index) => (
            <li
              key={release.version}
              className={cn(
                // A grid, not an absolutely placed date column. Absolute positions against the
                // list item's border box, so on every entry after the first the date floated at
                // the top rule while the title started below the padding — the two columns
                // disagreed by exactly the amount of space between releases. A grid row cannot
                // drift: both cells start on the same line by definition.
                "sm:grid sm:grid-cols-[7rem_1fr] sm:gap-x-8",
                index > 0 && "mt-10 border-t pt-10",
              )}
            >
              <div className="mb-3 flex items-baseline gap-3 sm:mb-0 sm:flex-col sm:gap-1.5 sm:pt-1">
                <time
                  dateTime={release.date}
                  className="text-muted-foreground text-sm tabular-nums"
                >
                  {dateFormat.format(new Date(release.date))}
                </time>
                <Badge
                  variant="outline"
                  className="rounded-full font-mono text-xs"
                >
                  {release.version}
                </Badge>
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-tight text-balance">
                  {release.title}
                </h3>

                {/*
                  A definition list, not a bulleted one: each row is a kind and the change under
                  it, which is exactly what `dt`/`dd` mean. The badge column is fixed so every
                  change starts at the same x and the eye has one line to run down.
                */}
                <dl className="mt-4 flex flex-col gap-2.5">
                  {release.changes.map((change) => (
                    <div
                      key={change.text}
                      className="flex items-baseline gap-3"
                    >
                      <dt className="w-20 shrink-0">
                        <Badge
                          className={cn(
                            "rounded-full font-normal",
                            kindClasses[change.kind],
                          )}
                        >
                          {change.kind}
                        </Badge>
                      </dt>
                      <dd className="text-muted-foreground text-sm leading-6 text-pretty">
                        {change.text}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Changelog4;
