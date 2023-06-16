export default function SvgIcon({
	name,
	prefix = 'icon',
	color = '#333',
	handleClick = null,
	...props
}) {
	const symbolId = `#${prefix}-${name}`;

	return (
		<svg
			{...props}
			style={{
				aspectRatio: 1 / 1,
				width: '1em',
				height: '1em',
				float: 'left',
			}}
			aria-hidden='true'
			onClick={handleClick}
		>
			<use href={symbolId} fill={color} />
		</svg>
	);
}
