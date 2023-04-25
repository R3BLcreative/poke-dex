import { useEffect, useState } from 'react';
import PagiItem from './pagi-item';

export default function Pagination({ count, page, onPageChange }) {
	if (!count) {
		count = 1281;
	}

	const pgCount = Math.ceil(count / 20);

	const [before, setBefore] = useState();
	const [after, setAfter] = useState();

	useEffect(() => {
		const startPage = +page - 3 > 1 ? +page - 3 : 1;
		const endPage = +page + 3 < pgCount ? +page + 3 : pgCount;

		let before = [];
		for (let i = startPage; i < +page; ++i) {
			before.push(
				<PagiItem
					key={i}
					page={i}
					text={i}
					style="mobile:hidden tablet:block"
					onPageChange={onPageChange}
				/>
			);
		}

		setBefore(before);

		let after = [];
		for (let i = +page + 1; i <= endPage; ++i) {
			after.push(
				<PagiItem
					key={i}
					page={i}
					text={i}
					style="mobile:hidden tablet:block"
					onPageChange={onPageChange}
				/>
			);
		}
		setAfter(after);
	}, [page]);

	const prevPage = +page - 1 < 1 ? pgCount : +page - 1;
	const nextPage = +page + 1 > pgCount ? 1 : +page + 1;

	return (
		<nav
			role="navigation"
			aria-label="Pagination"
			className="col-span-full w-full flex flex-row items-center justify-center mobile:gap-4 tablet:gap-6 first:mb-8 last:mt-8"
		>
			<PagiItem
				page={1}
				text="First"
				style="px-3"
				onPageChange={onPageChange}
			/>
			<PagiItem
				page={prevPage}
				text="Prev"
				style="px-3"
				onPageChange={onPageChange}
			/>

			{before}
			<span className="mobile:hidden tablet:block py-1 w-[40px] rounded-md text-center bg-white text-red font-black">
				{page}
			</span>
			{after}

			<PagiItem
				page={nextPage}
				text="Next"
				style="px-3"
				onPageChange={onPageChange}
			/>
			<PagiItem
				page={pgCount}
				text="Last"
				style="px-3"
				onPageChange={onPageChange}
			/>
		</nav>
	);
}
