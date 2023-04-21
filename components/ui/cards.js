import Card from './card';

export default function Cards({ cards }) {
	return (
		<>
			{cards.map((card, key) => (
				<Card key={key} card={card} />
			))}
		</>
	);
}
