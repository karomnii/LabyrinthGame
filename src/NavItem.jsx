const NavItem = ({ itemId, children, setCurrent, current, ...props }) => {
	return (
		<div {...props}>
			<a
				href={`#${itemId}`}
				className={`${current === itemId ? 'active' : ''}`}
				onClick={() => setCurrent(itemId)}
			>
				{children}
			</a>
		</div>
	);
};

export default NavItem;
