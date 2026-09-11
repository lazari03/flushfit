import { Messages } from "./types";
import en from "@/content/en.json";
import sq from "@/content/sq.json";
import it from "@/content/it.json";

export const LOCALES = ["en", "sq", "it"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

// JSON imports infer plain string[][] for spec tuples; the content files are
// verified to match the Messages shape by scripts/check-content.mjs.
const MESSAGES = { en, sq, it } as unknown as Record<Locale, Messages>;

export const isLocale = (value: string): value is Locale => (LOCALES as readonly string[]).includes(value);

export function getMessages(locale: Locale): Messages {
  return MESSAGES[locale] ?? MESSAGES[DEFAULT_LOCALE];
}

// Fills {placeholders} in a translated template, e.g. format("Hi {name}", { name: "Al" }).
export function format(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? String(vars[key]) : match));
}

// Splits "text *emphasis* text" into plain/emphasis segments for rendering.
export function splitEmphasis(text: string): { text: string; emphasis: boolean }[] {
  return text.split(/\*([^*]+)\*/).map((part, i) => ({ text: part, emphasis: i % 2 === 1 }));
}
