import { typeStyles } from '@/helpers/ui-utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faRulerVertical,
	faWeightScale,
} from '@fortawesome/pro-duotone-svg-icons';
import TypeBadge from '@/ui/badge';
import { Fragment } from 'react';

export default function PokeInfo({ poke }) {
	const style = typeStyles(poke.types[0]);

	const weight = Math.ceil(poke.weight * 2.20462) / 10;
	const heightDec = (poke.height * 0.0328084 * 10).toFixed(1);
	const height = heightDec.split('.');
	return (
		<div
			className={`mobile:col-span-full mobile:col-start-1 tablet:col-span-full laptop:col-span-8 laptop:col-start-3 p-6 rounded-lg border-[15px] flex flex-col items-start justify-center text-center gap-10 ${style.detailsCard}`}
		>
			<div className="flex flex-col items-center w-full">
				{/* NAME */}
				<h1 className="mobile:text-3xl tablet:text-5xl laptop:text-6xl uppercase drop-shadow-poke-name font-black tracking-wider text-center w-full text-stone-800">
					{poke.name}
				</h1>

				{/* MEASUREMENTS */}
				<div className="flex items-center justify-center mobile:gap-10 tablet:gap-[80px] w-full mobile:text-xl tablet:text-2xl font-normal tracking-normal mt-3">
					<div>
						<FontAwesomeIcon
							icon={faWeightScale}
							className={`mr-3 ${style.detailsIcon}`}
						/>
						<span className="text-gray-800">{`${weight} lbs`}</span>
					</div>

					<div>
						<FontAwesomeIcon
							icon={faRulerVertical}
							className={`mr-3 ${style.detailsIcon}`}
						/>
						<span className="text-gray-800">{`${height[0]}' ${height[1]}"`}</span>
					</div>
				</div>
			</div>

			{/* TYPES */}
			<div className="flex items-center justify-center gap-4 w-full">
				{poke.types.map((type, key) => (
					<TypeBadge key={key} type={type} />
				))}
			</div>

			{/* ABILITIES */}
			<div className="text-center w-full">
				<h2
					className={`uppercase italic font-semibold text-xl tracking-wider mb-3 ${style.detailsH2}`}
				>
					ABILITIES
				</h2>
				<ul className="flex flex-row items-center justify-center mobile:gap-2 tablet:gap-3 w-full mobile:text-xs tablet:text-base uppercase">
					{poke.abilities.map((ability, key) => (
						<Fragment key={key}>
							<li className="text-gray-800">{ability}</li>
							<li
								key="siudfs89dfs8d9f9shdf9"
								className="last-of-type:hidden text-gray-800"
							>
								||
							</li>
						</Fragment>
					))}
				</ul>
			</div>
		</div>
	);
}
