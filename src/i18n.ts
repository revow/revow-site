import en from "./messages/en.json";
import pt from "./messages/pt.json";

export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const messages: Record<Locale, typeof en> = { en, pt };

export function getMessages(locale: string) {
  return messages[locale as Locale] ?? messages[defaultLocale];
}
