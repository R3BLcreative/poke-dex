import { getPoke } from '@/helpers/ui-utils';
import PokeDetails from '@/sections/details';
import Error from '@/sections/error';
import SinglePagination from '@/ui/single-pagination';

export async function getStaticProps({ params }) {
	let poke = false;

	try {
		const response = await fetch(`${process.env.BASE_URL}/api/pokemon/${params.pid}`);
		const data = await response.json();
		const results = data;

		// Set object flags
		results.evos = true;
		results.single = true;

		poke = await getPoke(results);
	} catch (error) {
		// Error reporting
		console.log('There was an error');
	}

	return {
		props: {
			poke,
		},
	};
}

export function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export default function PokePage({ poke }) {
	if (!poke) {
		return <Error />;
	}

	return (
		<>
			<SinglePagination
				id={poke.prev}
				direction="prev"
			/>
			<PokeDetails poke={poke} />
			<SinglePagination
				id={poke.next}
				direction="next"
			/>
		</>
	);
}
