import '../styles/FontSizeControls.css';
const FontSizeControls = () => {
	const decreaseFontSize = () => {
		const currentFontSize = parseInt(document.body.style.fontSize) || 16;
		const newFontSize = Math.max(currentFontSize - 2, 10);
		document.body.style.fontSize = newFontSize + 'px';
	};
	const increaseFontSize = () => {
		const currentFontSize = parseInt(document.body.style.fontSize) || 16;

		const newFontSize = Math.min(currentFontSize + 2, 24);

		document.body.style.fontSize = newFontSize + 'px';
	};
	const backgroundColor = getComputedStyle(document.body).getPropertyValue(
		'background-color'
	);
	return (
		<div id='font-size-controls'>
			<button
				onClick={increaseFontSize}
				style={{ backgroundColor: backgroundColor, color: 'white' }}
			>
				A
			</button>
			<button
				onClick={decreaseFontSize}
				style={{ backgroundColor: backgroundColor, color: 'white' }}
			>
				a
			</button>
		</div>
	);
};
export default FontSizeControls;
