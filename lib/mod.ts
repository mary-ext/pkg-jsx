import { TrustedHTML } from './types.ts';

export * from './types.ts';

/**
 * Creates a TrustedHTML instance from a raw string, used for inserting raw HTML
 * without escaping.
 * @param str Raw HTML string
 * @returns TrustedHTML instance
 */
export const html = (str: string): TrustedHTML => {
	return new TrustedHTML(str);
};
