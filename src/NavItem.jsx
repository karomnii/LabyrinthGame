const NavItem = ({ itemId, children, setCurrent, current }) => {
	return (
		<div className={`col-12 col-lg-3`}>
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
