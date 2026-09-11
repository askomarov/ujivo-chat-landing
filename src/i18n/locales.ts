export const DEFAULT_LOCALE = 'sr' as const;

export const LOCALES = ['sr', 'ru', 'en'] as const;

export type Lang = (typeof LOCALES)[number];

export const isLang = (value: string): value is Lang =>
	(LOCALES as readonly string[]).includes(value);
