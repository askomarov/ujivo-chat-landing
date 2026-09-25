import type { Dictionary } from './types';

export const en: Dictionary = {
	meta: {
		title: 'Ujivo Chat — Website messages straight into Telegram',
		description:
			'A visitor writes on your site — you reply from Telegram. No dashboard glued to your phone. Free during MVP.',
	},

	nav: {
		how: 'How it works',
		features: 'Features',
		forWhom: 'Who it’s for',
		faq: 'FAQ',
	},

	actions: {
		login: 'Log in',
		try: 'Try it free',
	},

	a11y: {
		menu: 'Menu',
		theme: 'Dark theme',
		language: 'Language',
		send: 'Send',
		skipToContent: 'Skip to content',
		mainNav: 'Main navigation',
		footerNav: 'Footer navigation',
	},

	hero: {
		badge: 'Website chat → Telegram',
		titleLine: 'Website messages —',
		titleAccent: 'straight into Telegram',
		subtitle:
			'A visitor writes on your site — you reply from the group you already use. No need to open a dashboard just to keep the lead.',
		ctaPrimary: 'Try it free',
		ctaSecondary: 'How it works',
	},

	mockup: {
		browserUrl: 'yoursite.com',
		operatorName: 'Support',
		operatorStatus: 'online',
		visitorMessage: 'Hi! Is this item still in stock?',
		operatorMessage: 'Hi! Yes, it’s in stock. Want to place an order?',
		inputPlaceholder: 'Type a message…',
		arrowLabel: ['message', 'sent to TG'],
		groupName: 'Ujivo Chat · Threads',
		groupSubtitle: 'topics · 12 chats',
		topics: [
			{
				name: 'John — yoursite.com',
				time: '14:32',
				message: 'Hi! Is this item still in stock?',
				unread: 2,
			},
			{ name: 'Mary — yoursite.com', time: '14:18', message: 'Thanks! Placing the order ✅' },
			{ name: 'Alex — yoursite.com', time: '13:45', message: 'Can I get a custom order?' },
		],
	},

	pain: {
		eyebrow: 'Sound familiar?',
		title: 'The dashboard slows you down',
		items: [
			{
				problem: 'You can’t live in a dashboard all day',
				solution: 'Reply from Telegram on your phone — like any other chat',
			},
			{
				problem: 'Every conversation dumped into one feed',
				solution: 'Each visitor gets their own topic. Threads stay clean',
			},
			{
				problem: 'The widget looks off-brand',
				solution: 'Set the colours in the dashboard to match your site',
			},
		],
	},

	how: {
		eyebrow: 'How it works',
		title: 'Three steps to launch',
		items: [
			{
				title: 'Paste the snippet',
				text: 'One tag before the closing `</body>` — the widget is live.',
			},
			{
				title: 'Connect a Telegram group',
				text: 'A topics-enabled supergroup, bot as admin — messages land there.',
			},
			{
				title: 'Reply from your phone',
				text: 'Type in Telegram — the visitor sees it in the widget instantly.',
			},
		],
	},

	spotlight: {
		eyebrow: 'Core feature',
		title: 'Telegram is your operator desk',
		subtitle:
			'No separate chat app. Conversations land where you’re already reachable.',
		items: [
			{
				strong: 'Group notifications.',
				rest: 'A new message from the site — an instant ping in Telegram.',
			},
			{
				strong: 'A topic per conversation.',
				rest: 'Each visitor gets their own topic. Nothing gets mixed up.',
			},
			{
				strong: 'Reply in a topic = reply on the site.',
				rest: 'Type in the topic — the text shows up in the visitor’s widget.',
			},
			{
				strong: 'Dashboard link from Telegram.',
				rest: 'Inside the topic — an “Open in dashboard” button: chat, settings, history.',
			},
		],
		cta: 'Try it free',
		phoneTitle: 'Ujivo · Threads',
		phoneBadge: 'Open in dashboard',
		phoneTopics: [
			{
				name: 'John — yoursite.com',
				time: 'now',
				message: 'Hi! Is this item still in stock?',
				unread: 2,
			},
			{ name: 'Mary — yoursite.com', time: '14:18', message: 'Thanks! Placing the order ✅' },
			{ name: 'Alex — yoursite.com', time: '13:45', message: 'Can I get a custom order?' },
			{ name: 'Olivia — yoursite.com', time: '12:10', message: 'When does the next batch arrive?' },
		],
	},

	features: {
		eyebrow: 'Features',
		title: 'What Ujivo Chat does',
		items: [
			{
				title: 'Widget for any site',
				text: 'A light script — no heavy framework, doesn’t slow the page.',
			},
			{
				title: 'Instant replies',
				text: 'Messages, typing indicator, online status — all without lag.',
			},
			{
				title: 'Web dashboard',
				text: 'Replies, settings, history, unread counters — when you’re at a computer.',
			},
			{
				title: 'Visitor contact',
				text: 'A form on the first message — fill or skip. Details go to the dashboard and Telegram; later there’s a button to send the contact.',
			},
			{
				title: 'Colours that match',
				text: 'Panel, bubbles, buttons — tune them to your brand.',
			},
			{
				title: 'Operator name and avatar',
				text: 'The widget header shows who’s replying. Visitors see a real person.',
			},
			{
				title: 'One site to start',
				text: 'For now — one site per account. Enough to run chat on your main funnel.',
			},
		],
	},

	whom: {
		eyebrow: 'Who it’s for',
		title: 'If you run the business from your phone',
		items: [
			{
				title: 'Online store',
				text: 'Someone asks “is it in stock?” — you answer in Telegram and close the sale.',
			},
			{
				title: 'Service with enquiries',
				text: 'A client writes in the landing widget — the request hits your group instantly.',
			},
			{
				title: 'Course / webinar',
				text: 'A hot question from the page — a fast reply while they’re still there.',
			},
			{
				title: 'Solo, no team',
				text: 'One person, one Telegram — no extra apps or tabs.',
			},
		],
	},

	honest: {
		title: 'Honestly, what’s missing so far',
		text: 'Right now: widget + Telegram + dashboard, one site per account. No AI agent, no WhatsApp or Max, pricing isn’t ready. It’s an MVP — but it’s live and it works.',
	},

	faq: {
		eyebrow: 'FAQ',
		title: 'Frequent questions',
		items: [
			{
				question: 'Do I have to sit in the dashboard?',
				answer:
					'No. You can reply from Telegram — the dashboard isn’t required. You can also reply from the dashboard; settings and history live there too.',
			},
			{
				question: 'Is it hard to install?',
				answer: 'No. One `<script>` before `</body>` — and the widget is on your site.',
			},
			{
				question: 'Is it a bot? Who replies?',
				answer:
					'A real person replies. The bot only relays messages between the site and Telegram — it doesn’t write for you.',
			},
			{
				question: 'How many sites can I use?',
				answer:
					'One site per account for now. Enough to put chat on your main funnel.',
			},
			{
				question: 'What about visitor data?',
				answer:
					'On the first message, visitors see a contact form (name, email, phone) — fill it now or skip. If they submit it, the contact lands in the dashboard and Telegram. If not, the widget has a button to send details later.',
			},
		],
	},

	cta: {
		titleLine: 'Don’t lose leads',
		titleAccent: 'while opening a dashboard',
		subtitle: 'Paste the widget. Connect Telegram. Reply from your phone.',
		button: 'Message me',
		note: 'Want to try it free? Message me and I’ll create your account. No card required.',
	},

	footer: {
		tagline: 'Website messages — straight into Telegram.',
		brand: 'Ujivo Chat',
	},

	notFound: {
		title: 'Page not found',
		text: 'Looks like this page doesn’t exist. Head back home.',
		back: 'Back home',
	},
};
