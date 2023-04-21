// import Nav from '@/ui/nav';
import Logo from './logo';
import Row from '@/sections/row';

export default function Header() {
	return (
		<header className="bg-primary sticky top-0 z-50 border-b-4 border-secondary">
			<Row className="items-center justify-items-center h-[100px]">
				<Logo className="col-span-full hover:animate-pulse flex items-center justify-center max-h-[100px] max-w-[400px] py-2" />
				{/* <Logo className="mobile:col-span-2 tablet:col-span-3 laptop:col-span-4 hover:animate-pulse flex items-center" /> */}
				{/* <Nav className="mobile:col-span-2 tablet:col-span-5 laptop:col-span-8 flex items-stretch justify-end" /> */}
			</Row>
		</header>
	);
}
