// deno-lint-ignore-file no-explicit-any

/**
 * @module
 * The actual JSX runtime, there's not much here to be had here.
 */

import type { JSXInternal } from './jsx-internal.ts';
import { type Component, Fragment, type JSXNode, TrustedHTML } from './types.ts';

export { Fragment };
export type { JSXInternal as JSX };

interface JSXFunction {
	<T extends keyof JSXInternal.IntrinsicElements>(
		type: T,
		props: JSXInternal.IntrinsicElements[T],
		key?: any,
	): TrustedHTML;
	<P>(type: Component<P>, props: P, key?: any): TrustedHTML;
}

const isArray = Array.isArray;

const UNSAFE_NAME = /[\s\\/='"\0<>]/;

const SELF_CLOSING = new Set([
	'area',
	'base',
	'br',
	'col',
	'command',
	'embed',
	'hr',
	'img',
	'input',
	'keygen',
	'link',
	'meta',
	'param',
	'source',
	'track',
	'wbr',
]);

const escape = (str: string, attr: boolean): string => {
	let escaped = '';
	let last = 0;

	for (let idx = 0, len = str.length; idx < len; idx++) {
		const char = str.charCodeAt(idx);

		if (char === 38 || char === (attr ? 34 : 60)) {
			escaped += str.substring(last, idx) + ('&#' + char + ';');
			last = idx + 1;
		}
	}

	if (last === 0) {
		return str;
	}

	return escaped + str.substring(last);
};

const renderStyleMap = (map: Record<string, any> | null): string => {
	let result = '';

	for (const prop in map) {
		const val = map[prop];
		result += prop + ':' + val + ';';
	}

	return result;
};

// JSX
/**
 * Creates a new element
 */
const createElement = ((type: string | Component, props: any, _key?: any): TrustedHTML => {
	if (typeof type === 'function') {
		let rendered: JSXNode;

		if (type === Fragment) {
			rendered = props.children;
		} else {
			rendered = type(props);
		}

		return new TrustedHTML(jsxEscape(rendered));
	}

	let res = '<' + type;
	let html = '';

	let children: JSXNode;
	let unsafeHTML: string | undefined;

	for (const name in props) {
		let value = props[name];

		switch (name) {
			case 'children':
				children = value;
				continue;

			case 'innerHTML':
				unsafeHTML = value;
				continue;

			case 'key':
			case 'ref':
			case '__self':
			case '__source':
				continue;

			case 'style':
				if (typeof value === 'object') {
					value = renderStyleMap(value);
				}
				break;

			default:
				if (UNSAFE_NAME.test(name)) {
					continue;
				}
		}

		if (value === true) {
			res += ' ' + name;
		} else if (value === '') {
			res += ' ' + name + '=';
		} else if (value !== undefined) {
			res += ' ' + name + '="' + escape('' + value, true) + '"';
		}
	}

	if (UNSAFE_NAME.test(type)) {
		throw new Error(`${type} is not a valid HTML tag name in ${res}>`);
	}

	if (unsafeHTML !== undefined) {
		html = unsafeHTML;
	} else if (typeof children === 'string') {
		html = escape(children, false);
	} else if (children != null && children !== false && children !== true) {
		html = jsxEscape(children);
	}

	if (SELF_CLOSING.has(type)) {
		res += '/>';
	} else {
		res += '>' + html + '</' + type + '>';
	}

	return new TrustedHTML(res);
}) as JSXFunction;

export { createElement as jsx, createElement as jsxDEV, createElement as jsxs, createElement as jsxsDEV };

// Deno's precompiled JSX
/**
 * Part of Deno's precompiled JSX transform, concatenates static HTML template
 * ith the dynamic values.
 * @param strings Static template
 * @param values Dynamic values
 * @returns Trusted HTML instance
 */
export const jsxTemplate = (strings: string[], ...values: (string | TrustedHTML)[]): TrustedHTML => {
	let str = strings[0];
	for (let i = 1, il = strings.length; i < il; i++) {
		let value = values[i - 1];
		if (value instanceof TrustedHTML) {
			value = value.value;
		}

		str += value + strings[i];
	}

	return new TrustedHTML(str);
};

/**
 * Part of Deno's precompiled JSX transform, renders attributes into string.
 * @param name Attribute name
 * @param value Attribute value
 * @returns Rendered attribute
 */
export const jsxAttr = (name: string, value: any): string => {
	if (name === 'style' && typeof value == 'object') {
		value = renderStyleMap(value);
	}

	if (value === true) {
		return name;
	} else if (value === '') {
		return name + '=';
	} else if (value !== undefined) {
		return name + '="' + escape('' + value, true) + '"';
	}

	return '';
};

/**
 * Part of Deno's precompiled JSX transform, renders valid JSX nodes into string.
 * @param node JSX node
 * @returns Rendered node
 */
export const jsxEscape = (node: JSXNode): string => {
	if (node == null || node === false || node === true || node === '') {
		return '';
	}

	if (node instanceof TrustedHTML) {
		return node.value;
	}

	if (isArray(node)) {
		let rendered = '';

		for (let idx = 0, len = node.length; idx < len; idx++) {
			const child = node[idx];
			rendered += jsxEscape(child);
		}

		return rendered;
	}

	if (typeof node === 'function') {
		return '';
	}

	return escape('' + node, false);
};
