/**
 * Кортеж фиксированной длины. Гарантирует, что все локали описывают
 * одинаковое число карточек — иконки и цвета живут в компонентах и
 * сопоставляются с контентом по индексу.
 */
export type FixedArray<T, N extends number, R extends T[] = []> = R['length'] extends N
	? readonly [...R]
	: FixedArray<T, N, [...R, T]>;

export interface TopicItem {
	name: string;
	time: string;
	message: string;
	unread?: number;
}

export interface PainItem {
	problem: string;
	solution: string;
}

export interface StepItem {
	title: string;
	/** Текст, где фрагменты в бэктиках рендерятся как <code>. */
	text: string;
}

export interface CardItem {
	title: string;
	text: string;
}

export interface SpotlightItem {
	strong: string;
	rest: string;
}

export interface FaqItem {
	question: string;
	/** Текст, где фрагменты в бэктиках рендерятся как <code>. */
	answer: string;
}

export interface Dictionary {
	meta: {
		title: string;
		description: string;
	};

	nav: {
		how: string;
		features: string;
		forWhom: string;
		faq: string;
	};

	actions: {
		login: string;
		try: string;
	};

	a11y: {
		menu: string;
		theme: string;
		language: string;
		send: string;
		skipToContent: string;
		mainNav: string;
		footerNav: string;
	};

	hero: {
		badge: string;
		titleLine: string;
		titleAccent: string;
		subtitle: string;
		ctaPrimary: string;
		ctaSecondary: string;
	};

	mockup: {
		browserUrl: string;
		operatorName: string;
		operatorStatus: string;
		visitorMessage: string;
		operatorMessage: string;
		inputPlaceholder: string;
		arrowLabel: FixedArray<string, 2>;
		groupName: string;
		groupSubtitle: string;
		topics: FixedArray<TopicItem, 3>;
	};

	pain: {
		eyebrow: string;
		title: string;
		items: FixedArray<PainItem, 3>;
	};

	how: {
		eyebrow: string;
		title: string;
		items: FixedArray<StepItem, 3>;
	};

	spotlight: {
		eyebrow: string;
		title: string;
		subtitle: string;
		items: FixedArray<SpotlightItem, 4>;
		cta: string;
		phoneTitle: string;
		phoneBadge: string;
		phoneTopics: FixedArray<TopicItem, 4>;
	};

	features: {
		eyebrow: string;
		title: string;
		items: FixedArray<CardItem, 7>;
	};

	whom: {
		eyebrow: string;
		title: string;
		items: FixedArray<CardItem, 4>;
	};

	honest: {
		title: string;
		text: string;
	};

	faq: {
		eyebrow: string;
		title: string;
		items: FixedArray<FaqItem, 5>;
	};

	cta: {
		titleLine: string;
		titleAccent: string;
		subtitle: string;
		button: string;
		note: string;
	};

	footer: {
		tagline: string;
		brand: string;
	};

	notFound: {
		title: string;
		text: string;
		back: string;
	};
}
