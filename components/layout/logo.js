import Link from 'next/link';

export default function Logo(props) {
	return (
		<Link href="/" className="hover:animate-pulse">
			NextJS Blog
		</Link>
	);
}
