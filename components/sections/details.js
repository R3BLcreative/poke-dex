import PokeEvos from '@/ui/poke-evos';
import Row from './row';
import Section from './section';
import PokeImage from '@/ui/poke-image';
import PokeInfo from '@/ui/poke-info';

export default function PokeDetails({ poke }) {
	return (
		<Section>
			<Row className="items-start !gap-16">
				<PokeImage poke={poke} />
				<PokeInfo poke={poke} />
				<PokeEvos poke={poke} />
			</Row>
		</Section>
	);
}
