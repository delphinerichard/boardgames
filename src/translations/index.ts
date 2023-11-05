import FrTranslations from "./fr.json";
import EnTranslations from "./en.json";

export type LocaleCode = string;
export type LocalizedMessages = Record<string, string>;
export type IntlMessageMapping = Record<LocaleCode, LocalizedMessages>;

const messages: IntlMessageMapping = {
  fr: FrTranslations,
  en: EnTranslations,
};

export default messages;
