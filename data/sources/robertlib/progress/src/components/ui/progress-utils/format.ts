import logger from "./logger";
import type { DeepPartial, Locale, PluralMessage } from "./types";

type MessageParams = Record<string, string | number>;

const FALLBACK_LOCALE_CODE = "en-US";

const intlLocaleCodes = new Map<string, string>();

export function toIntlLocale(code: string) {
  let resolved = intlLocaleCodes.get(code);

  if (resolved === undefined) {
    try {
      resolved = Intl.getCanonicalLocales(code)[0];
    } catch {
      // Not a language tag - replaced below
    }

    if (!resolved) {
      logger.warn(
        `The locale code "${code}" is no valid language tag (like "en-GB") - "${FALLBACK_LOCALE_CODE}" is used instead.`,
      );
      resolved = FALLBACK_LOCALE_CODE;
    }

    intlLocaleCodes.set(code, resolved);
  }

  return resolved;
}

export function formatMessage(template: string, params?: MessageParams) {
  if (!params) return template;

  return template.replace(/\{(\w+)\}/g, (placeholder, key: string) =>
    Object.hasOwn(params, key) ? String(params[key]) : placeholder,
  );
}

const pluralRules = new Map<string, Intl.PluralRules>();

export function pluralForm(
  localeCode: string,
  message: PluralMessage,
  count: number,
) {
  let rules = pluralRules.get(localeCode);

  if (!rules) {
    rules = new Intl.PluralRules(toIntlLocale(localeCode));
    pluralRules.set(localeCode, rules);
  }

  return message[rules.select(count)] ?? message.other;
}

const numberFormats = new Map<string, Intl.NumberFormat>();

export function formatNumber(localeCode: string, value: number) {
  let format = numberFormats.get(localeCode);

  if (!format) {
    format = new Intl.NumberFormat(toIntlLocale(localeCode));
    numberFormats.set(localeCode, format);
  }

  return format.format(value);
}

export function formatPlural(
  localeCode: string,
  message: PluralMessage,
  count: number,
  params?: MessageParams,
) {
  return formatMessage(pluralForm(localeCode, message, count), {
    count: formatNumber(localeCode, count),
    ...params,
  });
}

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const PLURAL_CATEGORIES: ReadonlySet<string> = new Set<Intl.LDMLPluralRule>([
  "few",
  "many",
  "one",
  "other",
  "two",
  "zero",
]);

const isPluralMessage = (value: Record<string, unknown>) =>
  typeof value.other === "string" &&
  Object.keys(value).every((key) => PLURAL_CATEGORIES.has(key));

export function deepMerge<T>(base: T, overrides?: DeepPartial<T>): T {
  if (!overrides) return base;

  const result = { ...base } as Record<string, unknown>;

  for (const [key, value] of Object.entries(overrides)) {
    if (value === undefined || value === null) continue;

    const current = result[key];
    result[key] =
      isPlainObject(current) &&
      isPlainObject(value) &&
      !(isPluralMessage(current) && isPluralMessage(value))
        ? deepMerge(current, value)
        : value;
  }

  return result as T;
}

export function createLocale(base: Locale, overrides: DeepPartial<Locale>) {
  return deepMerge(base, overrides);
}
