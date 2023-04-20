import Nav from '@/ui/nav';
import Logo from './logo';
import Row from '@/sections/row';

export default function Header() {
	return (
		<>
			<header className="sticky top-0 z-50">
				<Row>
					<Logo />
					<Nav />
				</Row>
			</header>
		</>
	);
}
