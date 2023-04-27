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
	let count = 0;

	try {
		const response = await fetch(
			`${process.env.BASE_URL}/api/pokemon?` +
				new URLSearchParams({
					limit: 20,
				})
		);
		const data = await response.json();
		const results = data.results;

		cards = await pokeObject(results);
		count = data.count;
	} catch (error) {
		// Error reporting
	}

	return {
		props: {
			cards,
			count,
		},
	};
}

export default function Home({ cards, count }) {
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

	if (isLoading) {
		return (
			<Section>
				<Row>
					<Pagination
						page={currentPage}
						onPageChange={onPageChange}
						count={count}
					/>
					<Loading />
				</Row>
			</Section>
		);
	}

	if (!theCards) {
		return <Error />;
	}

	return (
		<Section>
			<Row>
				<Pagination
					page={currentPage}
					onPageChange={onPageChange}
					count={count}
				/>
				<Cards cards={theCards} />
				<Pagination
					page={currentPage}
					onPageChange={onPageChange}
					count={count}
				/>
			</Row>
		</Section>
	);
}
