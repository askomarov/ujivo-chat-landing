/** URL веб-кабинета. Пока заглушка — заменить на реальный адрес. */
export const LOGIN_URL = '/login';

/**
 * Куда писать за доступом (Telegram / email / форма).
 * Пока заглушка — подставь свой контакт перед публикацией.
 */
export const CONTACT_URL = 'https://t.me/';

/** Прод-виджет на этом лендинге. */
export const WIDGET_SRC = 'https://ujivo.com/widget.js';
export const WIDGET_API_URL = 'https://uzivo-chat-production.up.railway.app';
export const WIDGET_SITE_ID = '79c81c62-9475-4298-8d39-3ea0f00d20d4';
export const WIDGET_SITE_KEY = 'ae2dc329-f660-408f-8937-10b332d513da';

/** Сниппет для блока «как это работает». Не переводится. */
export const WIDGET_SNIPPET = `<script src="${WIDGET_SRC}"
  data-site-id="YOUR_SITE_ID"
  data-site-key="YOUR_SITE_KEY"
  data-api-url="${WIDGET_API_URL}">
</script>`;
