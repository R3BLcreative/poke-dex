import { typeStyles } from '@/helpers/ui-utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ card }) {
	const style = typeStyles(card.types[0]);
	return (
		<div
			id="card-wrapper"
			className={`rounded-md bg-transparent mobile:col-span-full tablet:col-span-4 laptop:col-span-3 border-[10px] relative ${style.wrapper}`}
		>
			<Link href={`/${card.id}`} className="hover:animate-pulse">
				<div id="card-inner" className={`py-2 px-4 ${style.inner}`}>
					<span className="text-black capitalize font-bold text-lg tracking-wide">
						{card.name}
					</span>
					<div
						className={`h-[150px] bg-left bg-cover bg-no-repeat flex items-center justify-center py-5 bg-white rounded-md ${style.image}`}
					>
						<Image
							src={card.image}
							alt={card.name}
							width={300}
							height={200}
							className="w-auto h-full"
						/>
					</div>
				</div>
			</Link>
		</div>
	);
}
