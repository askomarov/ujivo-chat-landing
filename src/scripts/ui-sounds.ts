import { load, press, release, type SoundName } from 'button-sounds';

/** Совпадает с инлайн-скриптом в SoundToggle.astro. */
const STORAGE_KEY = 'ujivo:sound';

export const CLICK_SOUND = 'hi75-soft' satisfies SoundName;
export const BOOP_SOUND = 'popper-dice' satisfies SoundName;
export const THEME_ON_SOUND = 'tonal-on' satisfies SoundName;
export const THEME_OFF_SOUND = 'tonal-off' satisfies SoundName;

const CLICK_VOLUME = 0.3;
const BOOP_VOLUME = 0.4;
const PITCH = 0.05;

const VOLUMES = {
	[CLICK_SOUND]: CLICK_VOLUME,
	[BOOP_SOUND]: BOOP_VOLUME,
	[THEME_ON_SOUND]: CLICK_VOLUME,
	[THEME_OFF_SOUND]: CLICK_VOLUME,
} as const satisfies Partial<Record<SoundName, number>>;

type WiredSound = keyof typeof VOLUMES;

interface SoundBoot {
	muted: boolean;
	started: boolean;
}

function readMuted(): boolean {
	try {
		return localStorage.getItem(STORAGE_KEY) === '0';
	} catch {
		return false;
	}
}

function boot(): SoundBoot {
	const host = window as Window & { __ujivoSound?: SoundBoot };
	host.__ujivoSound ??= { muted: readMuted(), started: false };
	return host.__ujivoSound;
}

function isWired(name: string): name is WiredSound {
	return Object.hasOwn(VOLUMES, name);
}

function playbackRate(): number {
	return 1 + (Math.random() * 2 - 1) * PITCH;
}

export function isMuted(): boolean {
	return boot().muted;
}

export function setMuted(next: boolean): void {
	boot().muted = next;
	try {
		localStorage.setItem(STORAGE_KEY, next ? '0' : '1');
	} catch {
		// Приватный режим: звук выключается до перезагрузки.
	}
}

/** Только нажатие. Тема так отличает включение от выключения. */
export function playPress(name: WiredSound): void {
	if (boot().muted) return;
	press(name, { volume: VOLUMES[name], playbackRate: playbackRate() });
}

/** Нажатие сразу, отпускание на ближайшем pointerup — одним тоном. */
export function playClick(name: WiredSound): void {
	if (boot().muted) return;
	const volume = VOLUMES[name];
	const rate = playbackRate();
	press(name, { volume, playbackRate: rate });
	window.addEventListener(
		'pointerup',
		() => {
			if (boot().muted) return;
			release(name, { volume, playbackRate: rate });
		},
		{ once: true },
	);
}

function init(): void {
	const state = boot();
	if (state.started) return;
	state.started = true;

	for (const name of Object.keys(VOLUMES) as WiredSound[]) load(name);

	document.addEventListener('pointerdown', (event) => {
		if (event.button !== 0) return;
		if (!(event.target instanceof Element)) return;
		const source = event.target.closest('[data-sound]');
		if (!(source instanceof HTMLElement)) return;
		const name = source.dataset.sound;
		if (!name || !isWired(name)) return;
		playClick(name);
	});
}

init();
