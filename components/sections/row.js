export default function Row(props) {
	return (
		<div
			className={`grid mobile:grid-cols-4 mobile:w-full mobile:max-w-[432px] mobile:gap-8 mobile:px-6 tablet:grid-cols-8 tablet:max-w-full tablet:px-12 laptop:grid-cols-12 laptop:gap-6 laptop:px-[70px] desktop:max-w-[1140px] desktop:w-[1140px] desktop:px-0 mx-auto  even:my-6 last:!mb-0 relative ${
				props.className ? props.className : 'items-start'
			}`}
		>
			{props.children}
		</div>
	);
}
