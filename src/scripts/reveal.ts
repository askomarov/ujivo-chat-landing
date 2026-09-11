const elements = document.querySelectorAll<HTMLElement>('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion || !('IntersectionObserver' in window)) {
	elements.forEach((element) => element.classList.add('visible'));
} else {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry, index) => {
				if (!entry.isIntersecting) return;
				setTimeout(() => entry.target.classList.add('visible'), index * 60);
				observer.unobserve(entry.target);
			});
		},
		{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
	);

	elements.forEach((element) => observer.observe(element));
}
