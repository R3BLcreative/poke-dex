import Footer from './footer';
import Header from './header';

export default function Template(props) {
	return (
		<div className="min-h-screen relative">
			<Header />
			<main className="pb-[103px]">{props.children}</main>
			<Footer />
		</div>
	);
}
