import { getPoke } from '@/helpers/ui-utils';
import PokeDetails from '@/sections/details';
import Loading from '@/sections/loading';

export async function getServerSideProps({ params }) {
	const response = await fetch(
		`http://localhost:3000/api/pokemon/${params.pid}`
	);
	const data = await response.json();
	const results = data;

	const poke = await getPoke(results);

	return {
		props: {
			poke,
		},
	};
}

export default function PokePage({ poke }) {
	if (!poke) {
		return <Loading />;
	}

	return <PokeDetails poke={poke} />;
}
