import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavItem(props) {
	const { href, text } = props;
	const router = useRouter();

	const styles = {
		default:
			'mobile:px-2 tablet:px-4 font-heading uppercase mobile:text-sm tablet:text-xl font-black tracking-widest transition-all ease-in-out duration-700 flex items-center',
		inactive: ' text-secondary hover:text-secondary-100',
		active: ' bg-primary-100 text-secondary-100',
	};

	let classes = styles.default;
	if (router.pathname === href) {
		classes += styles.active;
	} else {
		classes += styles.inactive;
	}

	return (
		<Link href={href} className={classes}>
			{text}
		</Link>
	);
}
