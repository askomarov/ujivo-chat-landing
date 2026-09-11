// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://ujivo.chat',
	i18n: {
		defaultLocale: 'sr',
		locales: ['sr', 'ru', 'en'],
		routing: { prefixDefaultLocale: false },
	},
	// Старый URL после смены defaultLocale ru → sr
	redirects: {
		'/sr': '/',
	},
});
