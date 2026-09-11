export interface InlineSegment {
	code: boolean;
	value: string;
}

/**
 * Разбирает строку словаря, где фрагменты в бэктиках должны стать <code>.
 * Позволяет держать переводы без HTML внутри.
 */
export const parseInline = (text: string): InlineSegment[] =>
	text
		.split(/`([^`]+)`/)
		.map((value, index) => ({ code: index % 2 === 1, value }))
		.filter((segment) => segment.value !== '');
