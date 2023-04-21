import Image from 'next/image';
import Link from 'next/link';

export default function Logo(props) {
	return (
		<Link href="/" className={props.className}>
			<Image
				src={'/images/logo_pokeDex.png'}
				alt="Poke-Dex Logo"
				width={400}
				height={200}
				className="w-full h-auto"
			/>
		</Link>
	);
}
