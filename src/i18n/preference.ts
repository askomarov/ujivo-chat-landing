import { DEFAULT_LOCALE, isLang, type Lang } from './locales';

export const LANG_STORAGE_KEY = 'ujivo-lang';

/** Домашний URL локали при prefixDefaultLocale: false. */
export const localeHomePath = (lang: Lang, defaultLocale: Lang = DEFAULT_LOCALE): string =>
	lang === defaultLocale ? '/' : `/${lang}/`;

/** Первичный тег языка из Accept-Language / navigator.languages → Lang или null. */
export const matchBrowserLang = (languages: readonly string[]): Lang | null => {
	for (const raw of languages) {
		const primary = raw.trim().toLowerCase().split('-')[0];
		if (primary && isLang(primary)) return primary;
	}
	return null;
};

/**
 * Приоритет: storage → язык браузера → DEFAULT_LOCALE (sr).
 * `stored` — сырое значение из localStorage (может быть мусором).
 */
export const resolvePreferredLang = (
	stored: string | null | undefined,
	browserLanguages: readonly string[],
): Lang => {
	if (stored && isLang(stored)) return stored;
	return matchBrowserLang(browserLanguages) ?? DEFAULT_LOCALE;
};

export const persistLang = (lang: Lang): void => {
	try {
		localStorage.setItem(LANG_STORAGE_KEY, lang);
	} catch {
		/* private mode / disabled storage */
	}
};
