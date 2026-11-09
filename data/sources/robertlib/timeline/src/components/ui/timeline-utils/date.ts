import { dateTimeZone } from "@/components/ui/timeline-utils/time-zone";

const PATTERN_TOKEN = /\[([^\]]*)]|YYYY|MM|M|DD|D|HH|H|hh|h|mm|WW|W|A/g;

/** Whether a pattern shows the hours on the 12-hour clock (`h`, `hh`). */
export const usesHour12 = (pattern: string) =>
  Array.from(pattern.matchAll(PATTERN_TOKEN)).some(
    ([token]) => token === "h" || token === "hh",
  );

void dateTimeZone;
