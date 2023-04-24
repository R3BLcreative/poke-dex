export default function PagiItem({ page, text, style, onPageChange }) {
	function clickHandler(e) {
		e.preventDefault();
		onPageChange(page);
	}
	return (
		<button
			type="button"
			onClick={clickHandler}
			className={`py-1 min-w-[40px] rounded-md text-center uppercase bg-primary text-secondary font-black hover:bg-secondary hover:text-white ${style}`}
		>
			{text}
		</button>
	);
}
