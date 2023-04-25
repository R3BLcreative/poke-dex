async function getAllPoke() {
	let data;
	try {
		const response = await fetch(
			`${process.env.BASE_URL}/api/pokemon?` +
				new URLSearchParams({
					limit: 100000,
				})
		);
		data = await response.json();
	} catch (error) {
		// Error reporting
	}

	return data.results.map((poke) => {
		// const parts = poke.url.split('/');

		return poke.name;
	});
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
	let specData;
	try {
		const specRes = await fetch(url);
		specData = await specRes.json();
	} catch (error) {
		// Error reporting
	}

	// Get Evolution Chain
	let evoData;
	try {
		const evoRes = await fetch(specData.evolution_chain.url);
		evoData = await evoRes.json();
	} catch (error) {
		// Error reporting
	}

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
			let pokeData;
			try {
				const pokeRes = await fetch(
					`${process.env.BASE_URL}/api/pokemon/${name}`
				);
				pokeData = await pokeRes.json();
			} catch (error) {
				// Error reporting
			}

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

async function getPrev(name) {
	const allPoke = await getAllPoke();
	const current = allPoke.findIndex((e) => e === name);

	if (current === 0) {
		return allPoke[allPoke.length - 1];
	}

	return allPoke[current - 1];
}

async function getNext(name) {
	const allPoke = await getAllPoke();
	const current = allPoke.findIndex((e) => e === name);

	if (current === allPoke.length - 1) {
		return allPoke[0];
	}

	return allPoke[current + 1];
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
	single,
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
		prev: single ? await getPrev(name) : '',
		next: single ? await getNext(name) : '',
	};
}

export async function pokeObject(objects) {
	return await Promise.all(
		objects.map(async (object) => {
			let data;
			try {
				const response = await fetch(object.url);
				data = await response.json();
			} catch (error) {
				// Error reporting
			}
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
			detailsImage: 'bg-grass-400 bg-icon-grass',
			detailsCard:
				'bg-gradient-to-br from-grass-400 via-grass-200 to-grass-400 border-grass-700',
			detailsName: 'text-grass-600',
			detailsIcon: 'text-grass-800',
			detailsH2: 'text-grass-800',
		},
		poison: {
			wrapper: 'border-poison-700',
			inner: 'bg-poison-200',
			image: 'bg-card-poison bg-poison',
			badge: 'border-poison-600 bg-poison',
			detailsImage: 'bg-poison-400 bg-icon-poison',
			detailsCard:
				'bg-gradient-to-br from-poison-400 via-poison-200 to-poison-400 border-poison-700',
			detailsName: 'text-poison-600',
			detailsIcon: 'text-poison-800',
			detailsH2: 'text-poison-800',
		},
		fire: {
			wrapper: 'border-fire-700',
			inner: 'bg-fire-200',
			image: 'bg-card-fire bg-fire',
			badge: 'border-fire-600 bg-fire',
			detailsImage: 'bg-fire-400 bg-icon-fire',
			detailsCard:
				'bg-gradient-to-br from-fire-400 via-fire-200 to-fire-400 border-fire-700',
			detailsName: 'text-fire-600',
			detailsIcon: 'text-fire-800',
			detailsH2: 'text-fire-800',
		},
		flying: {
			wrapper: 'border-flying-700',
			inner: 'bg-flying-200',
			image: 'bg-card-flying bg-flying',
			badge: 'border-flying-600 bg-flying',
			detailsImage: 'bg-flying-400 bg-icon-flying',
			detailsCard:
				'bg-gradient-to-br from-flying-400 via-flying-200 to-flying-400 border-flying-700',
			detailsName: 'text-flying-600',
			detailsIcon: 'text-flying-800',
			detailsH2: 'text-flying-800',
		},
		water: {
			wrapper: 'border-water-700',
			inner: 'bg-water-200',
			image: 'bg-card-water bg-water',
			badge: 'border-water-600 bg-water',
			detailsImage: 'bg-water-400 bg-icon-water',
			detailsCard:
				'bg-gradient-to-br from-water-400 via-water-200 to-water-400 border-water-700',
			detailsName: 'text-water-600',
			detailsIcon: 'text-water-800',
			detailsH2: 'text-water-800',
		},
		bug: {
			wrapper: 'border-bug-700',
			inner: 'bg-bug-200',
			image: 'bg-card-bug bg-bug',
			badge: 'border-bug-600 bg-bug',
			detailsImage: 'bg-bug-400 bg-icon-bug',
			detailsCard:
				'bg-gradient-to-br from-bug-400 via-bug-200 to-bug-400 border-bug-700',
			detailsName: 'text-bug-600',
			detailsIcon: 'text-bug-800',
			detailsH2: 'text-bug-800',
		},
		normal: {
			wrapper: 'border-normal-700',
			inner: 'bg-normal-200',
			image: 'bg-card-normal bg-normal',
			badge: 'border-normal-600 bg-normal',
			detailsImage: 'bg-normal-400 bg-icon-normal',
			detailsCard:
				'bg-gradient-to-br from-normal-400 via-normal-200 to-normal-400 border-normal-700',
			detailsName: 'text-normal-600',
			detailsIcon: 'text-normal-800',
			detailsH2: 'text-normal-800',
		},
		electric: {
			wrapper: 'border-electric-700',
			inner: 'bg-electric-200',
			image: 'bg-card-electric bg-electric',
			badge: 'border-electric-600 bg-electric',
			detailsImage: 'bg-electric-400 bg-icon-electric',
			detailsCard:
				'bg-gradient-to-br from-electric-400 via-electric-200 to-electric-400 border-electric-700',
			detailsName: 'text-electric-600',
			detailsIcon: 'text-electric-800',
			detailsH2: 'text-electric-800',
		},
		ground: {
			wrapper: 'border-ground-700',
			inner: 'bg-ground-200',
			image: 'bg-card-ground bg-ground',
			badge: 'border-ground-600 bg-ground',
			detailsImage: 'bg-ground-400 bg-icon-ground',
			detailsCard:
				'bg-gradient-to-br from-ground-400 via-ground-200 to-ground-400 border-ground-700',
			detailsName: 'text-ground-600',
			detailsIcon: 'text-ground-800',
			detailsH2: 'text-ground-800',
		},
		fairy: {
			wrapper: 'border-fairy-700',
			inner: 'bg-fairy-200',
			image: 'bg-card-fairy bg-fairy',
			badge: 'border-fairy-600 bg-fairy',
			detailsImage: 'bg-fairy-400 bg-icon-fairy',
			detailsCard:
				'bg-gradient-to-br from-fairy-400 via-fairy-200 to-fairy-400 border-fairy-700',
			detailsName: 'text-fairy-600',
			detailsIcon: 'text-fairy-800',
			detailsH2: 'text-fairy-800',
		},
		fighting: {
			wrapper: 'border-fighting-700',
			inner: 'bg-fighting-200',
			image: 'bg-card-fighting bg-fighting',
			badge: 'border-fighting-600 bg-fighting',
			detailsImage: 'bg-fighting-400 bg-icon-fighting',
			detailsCard:
				'bg-gradient-to-br from-fighting-400 via-fighting-200 to-fighting-400 border-fighting-700',
			detailsName: 'text-fighting-600',
			detailsIcon: 'text-fighting-800',
			detailsH2: 'text-fighting-800',
		},
		psychic: {
			wrapper: 'border-psychic-700',
			inner: 'bg-psychic-200',
			image: 'bg-card-psychic bg-psychic',
			badge: 'border-psychic-600 bg-psychic',
			detailsImage: 'bg-psychic-400 bg-icon-psychic',
			detailsCard:
				'bg-gradient-to-br from-psychic-400 via-psychic-200 to-psychic-400 border-psychic-700',
			detailsName: 'text-psychic-600',
			detailsIcon: 'text-psychic-800',
			detailsH2: 'text-psychic-800',
		},
		rock: {
			wrapper: 'border-rock-700',
			inner: 'bg-rock-200',
			image: 'bg-card-rock bg-rock',
			badge: 'border-rock-600 bg-rock',
			detailsImage: 'bg-rock-400 bg-icon-rock',
			detailsCard:
				'bg-gradient-to-br from-rock-400 via-rock-200 to-rock-400 border-rock-700',
			detailsName: 'text-rock-600',
			detailsIcon: 'text-rock-800',
			detailsH2: 'text-rock-800',
		},
		ice: {
			wrapper: 'border-ice-700',
			inner: 'bg-ice-200',
			image: 'bg-card-ice bg-ice',
			badge: 'border-ice-600 bg-ice',
			detailsImage: 'bg-ice-400 bg-icon-ice',
			detailsCard:
				'bg-gradient-to-br from-ice-400 via-ice-200 to-ice-400 border-ice-700',
			detailsName: 'text-ice-600',
			detailsIcon: 'text-ice-800',
			detailsH2: 'text-ice-800',
		},
		steel: {
			wrapper: 'border-steel-700',
			inner: 'bg-steel-200',
			image: 'bg-card-steel bg-steel',
			badge: 'border-steel-600 bg-steel',
			detailsImage: 'bg-steel-400 bg-icon-steel',
			detailsCard:
				'bg-gradient-to-br from-steel-400 via-steel-200 to-steel-400 border-steel-700',
			detailsName: 'text-steel-600',
			detailsIcon: 'text-steel-800',
			detailsH2: 'text-steel-800',
		},
		ghost: {
			wrapper: 'border-ghost-700',
			inner: 'bg-ghost-200',
			image: 'bg-card-ghost bg-ghost',
			badge: 'border-ghost-600 bg-ghost',
			detailsImage: 'bg-ghost-400 bg-icon-ghost',
			detailsCard:
				'bg-gradient-to-br from-ghost-400 via-ghost-200 to-ghost-400 border-ghost-700',
			detailsName: 'text-ghost-600',
			detailsIcon: 'text-ghost-800',
			detailsH2: 'text-ghost-800',
		},
		dragon: {
			wrapper: 'border-dragon-700',
			inner: 'bg-dragon-200',
			image: 'bg-card-dragon bg-dragon',
			badge: 'border-dragon-600 bg-dragon',
			detailsImage: 'bg-dragon-400 bg-icon-dragon',
			detailsCard:
				'bg-gradient-to-br from-dragon-400 via-dragon-200 to-dragon-400 border-dragon-700',
			detailsName: 'text-dragon-600',
			detailsIcon: 'text-dragon-800',
			detailsH2: 'text-dragon-800',
		},
		dark: {
			wrapper: 'border-dark-700',
			inner: 'bg-dark-200',
			image: 'bg-card-dark bg-dark',
			badge: 'border-dark-600 bg-dark text-dark-50',
			detailsImage: 'bg-dark-400 bg-icon-dark',
			detailsCard:
				'bg-gradient-to-br from-dark-400 via-dark-200 to-dark-400 border-dark-700',
			detailsName: 'text-dark-600',
			detailsIcon: 'text-dark-800',
			detailsH2: 'text-dark-800',
		},
	};

	return styles[type];
}
