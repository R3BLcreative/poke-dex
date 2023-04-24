export function getCount() {
	return 1281;
}

async function getNames(objects) {
	return await Promise.all(
		objects.map(async ({ type, ability }) => {
			return type ? type.name : ability.name;
		})
	);
}

async function buildChain(evo) {
	let chain;
	chain = `,${evo[0].species.name}`;

	if (evo[0].evolves_to.length > 0) {
		chain += await buildChain(evo[0].evolves_to);
	}

	return chain;
}

async function getEvolutions({ url }) {
	// Get Species
	const specRes = await fetch(url);
	const specData = await specRes.json();

	// Get Evolution Chain
	const evoRes = await fetch(specData.evolution_chain.url);
	const evoData = await evoRes.json();

	// Get Species URLs in chain
	let specChain = evoData.chain.species.name;
	if (evoData.chain.evolves_to.length > 0) {
		specChain += await buildChain(evoData.chain.evolves_to);
	}
	const specNames = specChain.split(',');

	// Loop through species urls and get pokemon names & sprites
	return await Promise.all(
		specNames.map(async (name) => {
			// Get species
			const pokeRes = await fetch(
				`${process.env.API_PATH}/api/pokemon/${name}`
			);
			const pokeData = await pokeRes.json();

			const img =
				pokeData.sprites.other.dream_world.front_default == null
					? pokeData.sprites.other['official-artwork'].front_default
					: pokeData.sprites.other.dream_world.front_default;

			return {
				name: pokeData.name,
				image: img == null ? '/images/gfx_default_sprite.png' : img,
			};
		})
	);
}

export async function getPoke({
	id,
	name,
	height,
	weight,
	types,
	abilities,
	sprites,
	species,
	evos,
}) {
	const img =
		sprites.other.dream_world.front_default == null
			? sprites.other['official-artwork'].front_default
			: sprites.other.dream_world.front_default;

	return {
		id,
		name,
		height,
		weight,
		types: await getNames(types),
		abilities: await getNames(abilities),
		evolutions: evos ? await getEvolutions(species) : {},
		image: img == null ? '/images/gfx_default_sprite.png' : img,
	};
}

export async function pokeObject(objects) {
	return await Promise.all(
		objects.map(async (object) => {
			const response = await fetch(object.url);
			const data = await response.json();
			data.evos = false;

			return await getPoke(data);
		})
	);
}

export function typeStyles(type) {
	const styles = {
		grass: {
			wrapper: 'border-grass-700',
			inner: 'bg-grass-200',
			image: 'bg-card-grass bg-grass',
			badge: 'border-grass-600 bg-grass',
			detailsImage: 'bg-grass-400',
			detailsCard: 'bg-grass-200 border-grass-700',
			detailsName: 'text-grass-600',
			detailsIcon: 'text-grass-800',
			detailsH2: 'text-grass-800',
		},
		poison: {
			wrapper: 'border-poison-700',
			inner: 'bg-poison-200',
			image: 'bg-card-poison bg-poison',
			badge: 'border-poison-600 bg-poison',
			detailsImage: 'bg-poison-400',
			detailsCard: 'bg-poison-200 border-poison-700',
			detailsName: 'text-poison-600',
			detailsIcon: 'text-poison-800',
			detailsH2: 'text-poison-800',
		},
		fire: {
			wrapper: 'border-fire-700',
			inner: 'bg-fire-200',
			image: 'bg-card-fire bg-fire',
			badge: 'border-fire-600 bg-fire',
			detailsImage: 'bg-fire-400',
			detailsCard: 'bg-fire-200 border-fire-700',
			detailsName: 'text-fire-600',
			detailsIcon: 'text-fire-800',
			detailsH2: 'text-fire-800',
		},
		flying: {
			wrapper: 'border-flying-700',
			inner: 'bg-flying-200',
			image: 'bg-card-flying bg-flying',
			badge: 'border-flying-600 bg-flying',
			detailsImage: 'bg-flying-400',
			detailsCard: 'bg-flying-200 border-flying-700',
			detailsName: 'text-flying-600',
			detailsIcon: 'text-flying-800',
			detailsH2: 'text-flying-800',
		},
		water: {
			wrapper: 'border-water-700',
			inner: 'bg-water-200',
			image: 'bg-card-water bg-water',
			badge: 'border-water-600 bg-water',
			detailsImage: 'bg-water-400',
			detailsCard: 'bg-water-200 border-water-700',
			detailsName: 'text-water-600',
			detailsIcon: 'text-water-800',
			detailsH2: 'text-water-800',
		},
		bug: {
			wrapper: 'border-bug-700',
			inner: 'bg-bug-200',
			image: 'bg-card-bug bg-bug',
			badge: 'border-bug-600 bg-bug',
			detailsImage: 'bg-bug-400',
			detailsCard: 'bg-bug-200 border-bug-700',
			detailsName: 'text-bug-600',
			detailsIcon: 'text-bug-800',
			detailsH2: 'text-bug-800',
		},
		normal: {
			wrapper: 'border-normal-700',
			inner: 'bg-normal-200',
			image: 'bg-card-normal bg-normal',
			badge: 'border-normal-600 bg-normal',
			detailsImage: 'bg-normal-400',
			detailsCard: 'bg-normal-200 border-normal-700',
			detailsName: 'text-normal-600',
			detailsIcon: 'text-normal-800',
			detailsH2: 'text-normal-800',
		},
		electric: {
			wrapper: 'border-electric-700',
			inner: 'bg-electric-200',
			image: 'bg-card-electric bg-electric',
			badge: 'border-electric-600 bg-electric',
			detailsImage: 'bg-electric-400',
			detailsCard: 'bg-electric-200 border-electric-700',
			detailsName: 'text-electric-600',
			detailsIcon: 'text-electric-800',
			detailsH2: 'text-electric-800',
		},
		ground: {
			wrapper: 'border-ground-700',
			inner: 'bg-ground-200',
			image: 'bg-card-ground bg-ground',
			badge: 'border-ground-600 bg-ground',
			detailsImage: 'bg-ground-400',
			detailsCard: 'bg-ground-200 border-ground-700',
			detailsName: 'text-ground-600',
			detailsIcon: 'text-ground-800',
			detailsH2: 'text-ground-800',
		},
		fairy: {
			wrapper: 'border-fairy-700',
			inner: 'bg-fairy-200',
			image: 'bg-card-fairy bg-fairy',
			badge: 'border-fairy-600 bg-fairy',
			detailsImage: 'bg-fairy-400',
			detailsCard: 'bg-fairy-200 border-fairy-700',
			detailsName: 'text-fairy-600',
			detailsIcon: 'text-fairy-800',
			detailsH2: 'text-fairy-800',
		},
		fighting: {
			wrapper: 'border-fighting-700',
			inner: 'bg-fighting-200',
			image: 'bg-card-fighting bg-fighting',
			badge: 'border-fighting-600 bg-fighting',
			detailsImage: 'bg-fighting-400',
			detailsCard: 'bg-fighting-200 border-fighting-700',
			detailsName: 'text-fighting-600',
			detailsIcon: 'text-fighting-800',
			detailsH2: 'text-fighting-800',
		},
		psychic: {
			wrapper: 'border-psychic-700',
			inner: 'bg-psychic-200',
			image: 'bg-card-psychic bg-psychic',
			badge: 'border-psychic-600 bg-psychic',
			detailsImage: 'bg-psychic-400',
			detailsCard: 'bg-psychic-200 border-psychic-700',
			detailsName: 'text-psychic-600',
			detailsIcon: 'text-psychic-800',
			detailsH2: 'text-psychic-800',
		},
		rock: {
			wrapper: 'border-rock-700',
			inner: 'bg-rock-200',
			image: 'bg-card-rock bg-rock',
			badge: 'border-rock-600 bg-rock',
			detailsImage: 'bg-rock-400',
			detailsCard: 'bg-rock-200 border-rock-700',
			detailsName: 'text-rock-600',
			detailsIcon: 'text-rock-800',
			detailsH2: 'text-rock-800',
		},
		ice: {
			wrapper: 'border-ice-700',
			inner: 'bg-ice-200',
			image: 'bg-card-ice bg-ice',
			badge: 'border-ice-600 bg-ice',
			detailsImage: 'bg-ice-400',
			detailsCard: 'bg-ice-200 border-ice-700',
			detailsName: 'text-ice-600',
			detailsIcon: 'text-ice-800',
			detailsH2: 'text-ice-800',
		},
		steel: {
			wrapper: 'border-steel-700',
			inner: 'bg-steel-200',
			image: 'bg-card-steel bg-steel',
			badge: 'border-steel-600 bg-steel',
			detailsImage: 'bg-steel-400',
			detailsCard: 'bg-steel-200 border-steel-700',
			detailsName: 'text-steel-600',
			detailsIcon: 'text-steel-800',
			detailsH2: 'text-steel-800',
		},
		ghost: {
			wrapper: 'border-ghost-700',
			inner: 'bg-ghost-200',
			image: 'bg-card-ghost bg-ghost',
			badge: 'border-ghost-600 bg-ghost',
			detailsImage: 'bg-ghost-400',
			detailsCard: 'bg-ghost-200 border-ghost-700',
			detailsName: 'text-ghost-600',
			detailsIcon: 'text-ghost-800',
			detailsH2: 'text-ghost-800',
		},
		dragon: {
			wrapper: 'border-dragon-700',
			inner: 'bg-dragon-200',
			image: 'bg-card-dragon bg-dragon',
			badge: 'border-dragon-600 bg-dragon',
			detailsImage: 'bg-dragon-400',
			detailsCard: 'bg-dragon-200 border-dragon-700',
			detailsName: 'text-dragon-600',
			detailsIcon: 'text-dragon-800',
			detailsH2: 'text-dragon-800',
		},
		dark: {
			wrapper: 'border-dark-700',
			inner: 'bg-dark-200',
			image: 'bg-card-dark bg-dark',
			badge: 'border-dark-600 bg-dark text-dark-50',
			detailsImage: 'bg-dark-400',
			detailsCard: 'bg-dark-200 border-dark-700',
			detailsName: 'text-dark-600',
			detailsIcon: 'text-dark-800',
			detailsH2: 'text-dark-800',
		},
	};

	return styles[type];
}
