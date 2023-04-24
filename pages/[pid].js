import { getCount, getPoke } from '@/helpers/ui-utils';
import PokeDetails from '@/sections/details';
import Loading from '@/sections/loading';
import NextPage from '@/ui/next';
import PreviousPage from '@/ui/previous';

export async function getStaticProps({ params }) {
	let poke = false;

	try {
		const response = await fetch(
			`${process.env.API_PATH}/api/pokemon/${params.pid}`
		);
		const data = await response.json();
		const results = data;
		results.evos = true;
		poke = await getPoke(results);
	} catch (error) {
		console.log(error);
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
		return <Loading />;
	}

	const prevId = poke.id === 1 ? getCount() : poke.id - 1;
	const nextId = poke.id === getCount() ? 1 : poke.id + 1;

	return (
		<>
			<PreviousPage id={prevId} />
			<PokeDetails poke={poke} />
			<NextPage id={nextId} />
		</>
	);
}
