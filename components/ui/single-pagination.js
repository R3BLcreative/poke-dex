import { faCircleChevronLeft } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function SinglePagination({ id, direction }) {
	const styles = {
		prev: {
			link: 'left-5',
			icon: '',
			tab: 2,
		},
		next: {
			link: 'right-5',
			icon: 'rotate-180',
			tab: 3,
		},
	};
	return (
		<Link
			href={`/${id}`}
			className={`fixed z-50 text-8xl text-secondary opacity-10 top-[50%] transition-all ease-in-out hover:opacity-100 ${styles[direction].link}`}
			tabIndex={styles[direction].tab}
		>
			<FontAwesomeIcon
				icon={faCircleChevronLeft}
				className={styles[direction].icon}
			/>
		</Link>
	);
}
