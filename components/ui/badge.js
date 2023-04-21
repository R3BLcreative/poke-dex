import { typeStyles } from '@/helpers/ui-utils';

export default function TypeBadge({ type }) {
	const style = typeStyles(type);
	return (
		<div
			className={`uppercase px-8 py-1 rounded-md text-gray-800 font-bold shadow border mobile:text-sm tablet:text-base ${style.badge}`}
		>
			{type}
		</div>
	);
}
