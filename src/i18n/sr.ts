import type { Dictionary } from './types';

export const sr: Dictionary = {
	meta: {
		title: 'Ujivo Chat — Poruke sa sajta odmah u Telegram',
		description:
			'Posetilac piše na sajtu — ti odgovaraš iz Telegrama. Bez posebnog panela u džepu. Besplatno tokom MVP-a.',
	},

	nav: {
		how: 'Kako radi',
		features: 'Mogućnosti',
		forWhom: 'Za koga',
		faq: 'FAQ',
	},

	actions: {
		login: 'Prijava',
		try: 'Isprobaj besplatno',
	},

	a11y: {
		menu: 'Meni',
		theme: 'Tamna tema',
		language: 'Jezik',
		send: 'Pošalji',
		skipToContent: 'Preskoči na sadržaj',
		mainNav: 'Glavna navigacija',
		footerNav: 'Navigacija u podnožju',
	},

	hero: {
		badge: 'Chat za sajt → Telegram',
		titleLine: 'Poruke sa sajta —',
		titleAccent: 'odmah u Telegram',
		subtitle:
			'Posetilac piše na sajtu — ti odgovaraš iz grupe koju već koristiš. Ne moraš da otvaraš panel da ne izgubiš lead.',
		ctaPrimary: 'Isprobaj besplatno',
		ctaSecondary: 'Kako radi',
	},

	mockup: {
		browserUrl: 'yoursite.rs',
		operatorName: 'Podrška',
		operatorStatus: 'online',
		visitorMessage: 'Zdravo! Da li je ovaj artikal još na stanju?',
		operatorMessage: 'Zdravo! Da, ima. Da poručimo?',
		inputPlaceholder: 'Unesite poruku…',
		arrowLabel: ['poruka', 'otišla u TG'],
		groupName: 'Ujivo Chat · Dijalozi',
		groupSubtitle: 'teme · 12 dijaloga',
		topics: [
			{
				name: 'Ivan — yoursite.rs',
				time: '14:32',
				message: 'Zdravo! Da li je ovaj artikal još na stanju?',
				unread: 2,
			},
			{ name: 'Marija — yoursite.rs', time: '14:18', message: 'Hvala! Poručujem ✅' },
			{ name: 'Aleksa — yoursite.rs', time: '13:45', message: 'Može li individualna porudžbina?' },
		],
	},

	pain: {
		eyebrow: 'Zvuči poznato?',
		title: 'Panel usporava odgovore',
		items: [
			{
				problem: 'Ne sediš ceo dan u kabinetu',
				solution: 'Odgovaraš iz Telegrama sa telefona — kao u običnom četu',
			},
			{
				problem: 'Svi dijalozi u jednoj traci',
				solution: 'Svaki posetilac — posebna tema. Prepiske se ne mešaju',
			},
			{
				problem: 'Vidžet izgleda strano na sajtu',
				solution: 'Boje podešavaš u kabinetu — pod svoj brend',
			},
		],
	},

	how: {
		eyebrow: 'Kako radi',
		title: 'Tri koraka do pokretanja',
		items: [
			{
				title: 'Ubaci kod na sajt',
				text: 'Jedan tag pre zatvarajućeg `</body>` — vidžet je na mestu.',
			},
			{
				title: 'Poveži Telegram grupu',
				text: 'Supergrupa sa temama, bot kao admin — poruke idu tamo.',
			},
			{
				title: 'Odgovaraj sa telefona',
				text: 'Pišeš u Telegramu — posetilac odmah vidi odgovor u vidžetu.',
			},
		],
	},

	spotlight: {
		eyebrow: 'Glavna funkcija',
		title: 'Telegram je tvoj radni sto',
		subtitle:
			'Posebna aplikacija za chat nije potrebna. Dijalozi stižu tamo gde si već dostupan.',
		items: [
			{
				strong: 'Obaveštenje u grupu.',
				rest: 'Nova poruka sa sajta — odmah push u Telegram.',
			},
			{
				strong: 'Tema za svaki dijalog.',
				rest: 'Svaki posetilac — svoja tema. Prepiske se ne mešaju.',
			},
			{
				strong: 'Odgovor u temi = odgovor na sajtu.',
				rest: 'Pišeš u temu — tekst se pojavi u vidžetu kod posetioca.',
			},
			{
				strong: 'Link u kabinet iz Telegrama.',
				rest: 'Iz teme — dugme „Otvori u admin panelu”: dijalog, podešavanja, istorija.',
			},
		],
		cta: 'Isprobaj besplatno',
		phoneTitle: 'Ujivo · Dijalozi',
		phoneBadge: 'Otvori u admin panelu',
		phoneTopics: [
			{
				name: 'Ivan — yoursite.rs',
				time: 'sada',
				message: 'Zdravo! Da li je ovaj artikal još na stanju?',
				unread: 2,
			},
			{ name: 'Marija — yoursite.rs', time: '14:18', message: 'Hvala! Poručujem ✅' },
			{ name: 'Aleksa — yoursite.rs', time: '13:45', message: 'Može li individualna porudžbina?' },
			{ name: 'Olga — yoursite.rs', time: '12:10', message: 'Kad stiže nova pošiljka?' },
		],
	},

	features: {
		eyebrow: 'Mogućnosti',
		title: 'Šta Ujivo Chat ume',
		items: [
			{
				title: 'Vidžet za bilo koji sajt',
				text: 'Lagani skript: ne vuče framework i ne usporava stranicu.',
			},
			{
				title: 'Trenutni odgovori',
				text: 'Poruke, „kuca…”, status online — sve bez kašnjenja.',
			},
			{
				title: 'Web kabinet',
				text: 'Odgovori, podešavanja, istorija, nepročitano — kad ti više odgovara računar.',
			},
			{
				title: 'Kontakt posetioca',
				text: 'Forma pri prvoj poruci — može da popuni ili preskoči. Podaci idu u kabinet i Telegram; kasnije — dugme za slanje kontakta.',
			},
			{
				title: 'Boje pod sajt',
				text: 'Panel, balončići, dugmad — podešavaš pod svoj brend.',
			},
			{
				title: 'Ime i avatar operatera',
				text: 'U zaglavlju vidžeta — ko odgovara. Posetilac vidi živog čoveka.',
			},
			{
				title: 'Jedan sajt na startu',
				text: 'Za sada — jedan sajt po nalogu. Dovoljno za MVP i jedan funnel.',
			},
		],
	},

	whom: {
		eyebrow: 'Za koga',
		title: 'Ako vodiš biznis sa telefona',
		items: [
			{
				title: 'Online prodavnica',
				text: 'Pitaju „ima li na stanju?” — odgovaraš iz Telegrama i zatvaraš porudžbinu.',
			},
			{
				title: 'Usluga sa upitima',
				text: 'Klijent piše u vidžet na landing stranici — zahtev odmah u tvojoj grupi.',
			},
			{
				title: 'Kurs / vebinar',
				text: 'Vruće pitanje sa landinga — brz odgovor dok je osoba još na stranici.',
			},
			{
				title: 'Solo bez tima',
				text: 'Jedna osoba, jedan Telegram — bez suvišnih aplikacija i tabova.',
			},
		],
	},

	honest: {
		title: 'Iskreno o tome čega još nema',
		text: 'Sada: vidžet + Telegram + kabinet, jedan sajt po nalogu. Nema AI agenta, nema WhatsApp i Max, tarife još nisu spremne. MVP — ali živi i radi.',
	},

	faq: {
		eyebrow: 'FAQ',
		title: 'Česta pitanja',
		items: [
			{
				question: 'Moram li da sedim u admin panelu?',
				answer:
					'Ne. Možeš da odgovaraš iz Telegrama — kabinet nije obavezan. Iz kabineta takođe pišeš posetiocima; tu su i podešavanja i istorija.',
			},
			{
				question: 'Teško je instalirati?',
				answer: 'Ne. Jedan `<script>` pre `</body>` — i vidžet je na sajtu.',
			},
			{
				question: 'Da li je to bot? Ko odgovara?',
				answer:
					'Odgovara živ čovek. Bot samo prenosi poruke između sajta i Telegrama — ne piše umesto tebe.',
			},
			{
				question: 'Koliko sajtova mogu?',
				answer:
					'Za sada jedan sajt po nalogu. Dovoljno da pokreneš chat na glavnom funnelu.',
			},
			{
				question: 'Šta je sa podacima posetilaca?',
				answer:
					'Pri prvoj poruci posetilac vidi formu (ime, email, telefon) — može odmah da popuni ili da preskoči. Ako popuni — kontakt ide u kabinet i Telegram. Ako ne — kasnije u vidžetu postoji dugme da pošalje podatke.',
			},
		],
	},

	cta: {
		titleLine: 'Ne gubi leadove',
		titleAccent: 'dok otvaraš admin panel',
		subtitle: 'Ubaci vidžet. Poveži Telegram. Odgovaraj sa telefona.',
		button: 'Piši mi',
		note: 'Želiš da isprobaš besplatno? Piši mi — napraviću ti nalog. Bez kartice.',
	},

	footer: {
		tagline: 'Poruke sa sajta — odmah u Telegram.',
		brand: 'Ujivo Chat',
	},

	notFound: {
		title: 'Stranica nije pronađena',
		text: 'Izgleda da ova stranica ne postoji. Vrati se na početnu.',
		back: 'Na početnu',
	},
};
