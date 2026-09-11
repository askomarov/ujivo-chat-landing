import { en } from './en';
import { DEFAULT_LOCALE, isLang, LOCALES, type Lang } from './locales';
import { ru } from './ru';
import { sr } from './sr';
import type { Dictionary } from './types';

export { DEFAULT_LOCALE, isLang, LOCALES, type Lang };

const dictionaries: Record<Lang, Dictionary> = { sr, ru, en };

export const useTranslations = (lang: Lang): Dictionary => dictionaries[lang];

/** Названия языков в селекторе — на языке оригинала. */
export const LOCALE_LABELS: Record<Lang, string> = {
	sr: 'Srpski',
	ru: 'Русский',
	en: 'English',
};

/** Значение атрибута lang / hreflang. */
export const HTML_LANG: Record<Lang, string> = { sr: 'sr', ru: 'ru', en: 'en' };

/** Open Graph locale (language_TERRITORY). */
export const OG_LOCALE: Record<Lang, string> = {
	sr: 'sr_RS',
	ru: 'ru_RU',
	en: 'en_US',
};

/** Определяет локаль по пути, чтобы 404 и middleware не зависели от пропсов. */
export const langFromPath = (pathname: string): Lang => {
	const segment = pathname.split('/').find(Boolean);
	return segment && isLang(segment) ? segment : DEFAULT_LOCALE;
};

export type { Dictionary } from './types';
export {
	LANG_STORAGE_KEY,
	localeHomePath,
	matchBrowserLang,
	persistLang,
	resolvePreferredLang,
} from './preference';
