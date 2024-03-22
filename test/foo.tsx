import { JSXNode } from '../lib/mod.ts';

const Card = ({ title, children }: { title: string; children: JSXNode }) => {
	return (
		<div class='card'>
			<div class='card__title'>{title}</div>
			<div class='card__body'>{children}</div>
			{2 ** 8}
		</div>
	);
};

const App = () => {
	return (
		<>
			{2 ** 2}
			<h1>Hello!</h1>
			<Card title='Card title'>
				{2 ** 4}
				<p>We're inside a card!</p>
			</Card>
		</>
	);
};

const result = <App />;

console.log(result.value);
