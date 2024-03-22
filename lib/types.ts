export class TrustedHTML {
	constructor(public readonly value: string) {}
}

export type JSXNode = TrustedHTML | string | number | JSXNode[] | boolean | null | undefined;

// deno-lint-ignore ban-types
export interface Component<P = {}> {
	(props: P): JSXNode;
}

export const Fragment = (props: { children: JSXNode }): JSXNode => {
	return props.children;
};
