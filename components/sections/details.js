import Image from 'next/image';
import Row from './row';
import Section from './section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronRight,
	faRulerVertical,
	faWeightScale,
} from '@fortawesome/pro-duotone-svg-icons';
import TypeBadge from '@/ui/badge';
import { typeStyles } from '@/helpers/ui-utils';
import { Fragment } from 'react';
import Link from 'next/link';

export default function PokeDetails({ poke }) {
	const style = typeStyles(poke.types[0]);

	const weight = Math.ceil(poke.weight * 2.20462) / 10;
	const heightDec = (poke.height * 0.0328084 * 10).toFixed(1);
	const height = heightDec.split('.');
	return (
		<Section>
			<Row className="items-start !gap-16">
				{/* IMAGE */}
				<div className="mobile:col-span-full mobile:col-start-1 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-3 flex justify-center">
					<div
						className={`mobile:w-[400px] mobile:h-[400px] laptop:w-[500px] laptop:h-[500px] rounded-full flex items-center justify-center ${style.detailsImage}`}
					>
						<Image
							src={poke.image}
							alt={poke.name}
							width={500}
							height={500}
							className="w-full h-auto mobile:max-h-[450px] laptop:max-h-[550px]"
						/>
					</div>
				</div>

				{/* DETAILS */}
				<div
					className={`mobile:col-span-full mobile:col-start-1 tablet:col-span-full laptop:col-span-8 laptop:col-start-3 p-6 rounded-lg border-[15px] flex flex-col items-start justify-center text-center gap-10 ${style.detailsCard}`}
				>
					<div className="flex flex-col items-center w-full">
						{/* NAME */}
						<h1
							className={`mobile:text-3xl tablet:text-5xl laptop:text-6xl uppercase drop-shadow-poke-name font-black tracking-wider text-center w-full ${style.detailsName}`}
						>
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

				{/* EVOLUTIONS */}
				<div className="mobile:col-span-full mobile:col-start-1 tablet:col-span-full laptop:col-span-8 laptop:col-start-3 p-6 rounded-lg border-[15px] border-secondary-100 bg-black flex flex-col justify-center items-center">
					<h2 className="mobile:text-3xl tablet:text-3xl laptop:text-4xl uppercase drop-shadow-poke-name font-heading font-medium italic tracking-wider text-center w-full mb-8 text-secondary">
						Evolutions
					</h2>

					<ol className="w-full flex mobile:flex-col tablet:flex-row items-stretch justify-between gap-10">
						{poke.evolutions.map((evolution, key) => (
							<Fragment key={key}>
								<li className="w-full">
									<Link
										href={`/${evolution.name}`}
										className="flex flex-col items-center gap-5 hover:animate-pulse"
									>
										<Image
											src={evolution.image}
											alt={evolution.name}
											width={300}
											height={150}
											className="h-[150px] w-auto"
										/>
										<h3
											className={`uppercase font-medium tracking-widest ${style.detailsName}`}
										>
											{evolution.name}
										</h3>
									</Link>
								</li>
								<li className="last-of-type:hidden flex items-center justify-center">
									<FontAwesomeIcon
										icon={faChevronRight}
										className="text-3xl text-secondary-100 mobile:rotate-90 tablet:rotate-0"
									/>
								</li>
							</Fragment>
						))}
					</ol>
				</div>
			</Row>
		</Section>
	);
}
