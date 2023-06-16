import { useEffect, useRef } from 'react';
import '../styles/ContentSection.css';
const ContentSection = ({ children, id, className, heading }) => {
	const ref = useRef(null);

	return (
		<>
			<br />
			<br />
			<br />
			<section ref={ref} id={id} className={className}>
				<h2>{heading}</h2>
				{children}
			</section>
		</>
	);
};

export default ContentSection;
