import Link from 'next/link';
import Row from '@/sections/row';

export default function Footer() {
	return (
		<footer className="py-3 absolute bottom-0 w-full">
			<Row>
				<div className="col-span-full text-xs italic flex mobile:flex-col tablet:flex-row items-center justify-center gap-3 tracking-wide">
					<span>&copy; {new Date().getFullYear()} James Cook</span>
					<span className="mobile:hidden tablet:block">||</span>
					<span>All Rights Reserved.</span>
					<span className="mobile:hidden tablet:block">||</span>
					<span>
						Developed on&nbsp;
						<Link
							href="https://nextjs.org/"
							target="_blank"
							className="underline hover:no-underline"
						>
							NextJS
						</Link>
						&nbsp;&amp;&nbsp;
						<Link
							href="https://tailwindcss.com"
							target="_blank"
							className="underline hover:no-underline"
						>
							Tailwind CSS
						</Link>
					</span>
				</div>
			</Row>
		</footer>
	);
}
