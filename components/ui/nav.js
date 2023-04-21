import NavItem from './nav-item';

export default function Nav(props) {
	return (
		<nav
			role="navaigation"
			aria-label="Main Navigation"
			className={props.className}
		>
			<NavItem href="/" text="Home" />
			<NavItem href="/link" text="Link" />
			<NavItem href="/blah" text="Blah" />
		</nav>
	);
}
