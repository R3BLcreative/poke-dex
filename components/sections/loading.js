import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/pro-duotone-svg-icons';

export default function Loading() {
	return (
		<div className="col-span-full flex items-center justify-center text-3xl tracking-widest font-medium uppercase gap-6 text-primary-100 min-h-[500px]">
			<FontAwesomeIcon icon={faSpinner} className="text-5xl" spinPulse />
			<span>Shuffling the deck...</span>
		</div>
	);
}
