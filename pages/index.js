import { pokeObject } from '@/helpers/ui-utils';
import Loading from '@/sections/loading';
import Row from '@/sections/row';
import Section from '@/sections/section';
import Cards from '@/ui/cards';
import Pagination from '@/ui/pagination';

export async function getServerSideProps({ query }) {
	const { pg } = query;
	const page = pg ? pg : 1;
	const offset = page > 1 ? page * 20 - 20 : 0;

	const response = await fetch(
		'http://localhost:3000/api/pokemon?' +
			new URLSearchParams({
				limit: 20,
				offset,
			})
	);
	const data = await response.json();
	const results = data.results;
	const count = 1010;

	const cards = await pokeObject(results);

	return {
		props: {
			cards,
			page,
			count,
		},
	};
}

export default function Home({ cards, page, count }) {
	if (!cards) {
		return <Loading />;
	}

	console.log(count);

	return (
		<Section>
			<Row>
				<Pagination page={page} count={count} />
				<Cards cards={cards} />
				<Pagination page={page} count={count} />
			</Row>
		</Section>
	);
}
