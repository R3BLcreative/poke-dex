import Link from 'next/link';

export default function PagiItem({ page, text, style }) {
	return (
		<Link
			href={`/?pg=${page}`}
			className={`py-1 min-w-[40px] rounded-md text-center uppercase bg-primary text-secondary font-black hover:bg-secondary hover:text-white ${style}`}
		>
			{text}
		</Link>
	);
}
