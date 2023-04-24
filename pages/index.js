import { pokeObject } from '@/helpers/ui-utils';
import Error from '@/sections/error';
import Loading from '@/sections/loading';
import Row from '@/sections/row';
import Section from '@/sections/section';
import Cards from '@/ui/cards';
import Pagination from '@/ui/pagination';
import { useEffect, useState } from 'react';

export async function getStaticProps() {
	let cards = false;

	try {
		const response = await fetch(
			`${process.env.API_PATH}/api/pokemon?` +
				new URLSearchParams({
					limit: 20,
				})
		);
		const data = await response.json();
		const results = data.results;

		cards = await pokeObject(results);
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			cards,
		},
	};
}

export default function Home({ cards }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [theCards, setTheCards] = useState(cards);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const offset = currentPage > 1 ? currentPage * 20 - 20 : 0;
		fetch(
			`/api/pokemon?` +
				new URLSearchParams({
					limit: 20,
					offset,
				})
		)
			.then((response) => response.json())
			.then((data) => data.results)
			.then((results) => pokeObject(results))
			.then((cards) => {
				setTheCards(cards);
				setIsLoading(false);
			});
	}, [currentPage]);

	const onPageChange = (page) => {
		setCurrentPage(page);
	};

	if (!theCards) {
		return <Error />;
	}

	if (isLoading) {
		return (
			<Section>
				<Row>
					<Pagination page={currentPage} onPageChange={onPageChange} />
					<Loading />
				</Row>
			</Section>
		);
	}

	return (
		<Section>
			<Row>
				<Pagination page={currentPage} onPageChange={onPageChange} />
				<Cards cards={theCards} />
				<Pagination page={currentPage} onPageChange={onPageChange} />
			</Row>
		</Section>
	);
}
