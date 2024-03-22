# jsx

[View on JSR](https://jsr.io/@mary/jsx)\
[Source code](https://codeberg.org/mary-ext/pkg-jsx)

Serialize JSX to string, fully type-safe.

## Usage

```tsx
/** @jsxImportSource jsr:@mary/jsx */

import type { JSXNode } from 'jsr:@mary/jsx';

const Card = ({ title, children }: { title: string; children: JSXNode }) => {
	return (
		<div class='card'>
			<div class='card__title'>{title}</div>
			<div class='card__body'>{children}</div>
		</div>
	);
};

const App = () => {
	return (
		<>
			<h1>Hello!</h1>
			<Card title='Card title'>
				<p>We're inside a card!</p>
			</Card>
		</>
	);
};

const result = <App />;

result.value;
```

JSX templates are eagerly interpreted.

### Precompiled JSX templates

This library supports Deno's precompiled JSX transformation for even faster serialization, you can make use of
it by adding the following configuration to your `deno.json` file:

```jsonc
{
	"compilerOptions": {
		"jsx": "precompile",
		"jsxImportSource": "jsr:@mary/jsx"
	}
}
```
