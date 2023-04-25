import { typeStyles } from '@/helpers/ui-utils';
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-duotone-svg-icons';

export default function PokeEvos({ poke }) {
	// const style = typeStyles(poke.types[0]);

	return (
		<div className="mobile:col-span-full mobile:col-start-1 tablet:col-span-full laptop:col-span-8 laptop:col-start-3 p-6 rounded-lg bg-transparent flex flex-col justify-center items-center">
			<h2 className="mobile:text-3xl tablet:text-3xl laptop:text-4xl uppercase drop-shadow-poke-name font-heading font-black italic tracking-widest text-center w-full mb-8 text-primary">
				Evolutions
			</h2>

			<ol className="w-full flex mobile:flex-col tablet:flex-row items-stretch justify-between gap-10">
				{poke.evolutions.map((evolution, key) => (
					<Fragment key={key}>
						<li className="w-full">
							<Link
								href={`/${evolution.name}`}
								className="flex flex-col items-center gap-5 hover:animate-pulse"
								tabIndex={4}
							>
								<Image
									src={evolution.image}
									alt={evolution.name}
									width={300}
									height={150}
									className="h-[150px] w-auto"
								/>
								<h3 className="uppercase font-bold tracking-widest drop-shadow-poke-name text-primary">
									{evolution.name}
								</h3>
							</Link>
						</li>
						<li className="last-of-type:hidden flex items-center justify-center">
							<FontAwesomeIcon
								icon={faChevronRight}
								className="text-3xl text-primary mobile:rotate-90 tablet:rotate-0"
							/>
						</li>
					</Fragment>
				))}
			</ol>
		</div>
	);
}
