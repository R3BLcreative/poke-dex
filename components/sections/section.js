export default function Section(props) {
	return (
		<section className="relative mobile:flex mobile:flex-col mobile:items-center mobile:justify-center py-20 even:bg-black text-gray-50 even:z-20 odd:z-10 odd:bg-gray-700  group/section">
			{props.children}
		</section>
	);
}
