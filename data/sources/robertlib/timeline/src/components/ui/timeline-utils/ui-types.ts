import type appMessages from "@/components/ui/timeline-utils/app-messages";

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends readonly unknown[]
    ? T[K]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

export type PluralMessage = Partial<Record<Intl.LDMLPluralRule, string>> & {
  other: string;
};

export interface MessageCatalog {
  [key: string]: string | PluralMessage | MessageCatalog;
}

export type MessageShape<T> = T extends string
  ? string
  : T extends PluralMessage
    ? keyof T extends Intl.LDMLPluralRule
      ? PluralMessage
      : { [K in keyof T]: MessageShape<T[K]> }
    : { [K in keyof T]: MessageShape<T[K]> };

export type AppMessages = MessageShape<typeof appMessages>;

export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DatePatternToken =
  | "A"
  | "D"
  | "DD"
  | "H"
  | "HH"
  | "M"
  | "MM"
  | "W"
  | "WW"
  | "YYYY"
  | "h"
  | "hh"
  | "mm";

export interface DateFormats {
  date: string;
  dateTime: string;
  month: string;
  time: string;
  week: string;
}

export interface UIMessages {
  timeline: {
    pending: string;
  };
  [key: string]: unknown;
}

export type Messages = AppMessages & { ui: UIMessages };

export interface Locale {
  code: string;
  formats: DateFormats;
  messages: Messages;
  weekStartsOn: WeekDay;
}
