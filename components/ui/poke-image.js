import Image from 'next/image';
import { typeStyles } from '@/helpers/ui-utils';

export default function PokeImage({ poke }) {
	const style = typeStyles(poke.types[0]);

	return (
		<div className="mobile:col-span-full mobile:col-start-1 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-3 flex justify-center">
			<div
				className={`mobile:w-[400px] mobile:h-[400px] laptop:w-[500px] laptop:h-[500px] rounded-full flex items-center justify-center bg-center bg-cover bg-no-repeat ${style.detailsImage}`}
			>
				<Image
					src={poke.image}
					alt={poke.name}
					width={500}
					height={500}
					className=""
				/>
			</div>
		</div>
	);
}
