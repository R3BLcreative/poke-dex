import { faCircleChevronRight } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function NextPage({ id }) {
	return (
		<Link
			href={`/${id}`}
			className="fixed z-50 text-8xl text-secondary opacity-10 right-5 top-[50%] transition-all ease-in-out hover:opacity-100"
		>
			<FontAwesomeIcon icon={faCircleChevronRight} />
		</Link>
	);
}
