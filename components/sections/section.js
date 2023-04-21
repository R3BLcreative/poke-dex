export default function Section(props) {
	return (
		<section className="relative mobile:flex mobile:flex-col mobile:items-center mobile:justify-center py-20 even:bg-black even:z-20 odd:z-10 odd:bg-black group/section">
			{props.children}
		</section>
	);
}
