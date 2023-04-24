import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from './row';
import Section from './section';
import { faBug } from '@fortawesome/pro-duotone-svg-icons';

export default function Error() {
	return (
		<Section>
			<Row>
				<div className="col-span-full flex items-center justify-center text-3xl tracking-widest font-medium uppercase gap-6 text-primary-100 min-h-[500px]">
					<FontAwesomeIcon icon={faBug} className="text-5xl opacity-50" />
					<span>Something went wrong...</span>
				</div>
			</Row>
		</Section>
	);
}
