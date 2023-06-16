import React, { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import '../styles/GallerySwiper.css';
register();
const GallerySwiper = ({ children }) => {
	const swiperRef = useRef(null);

	return (
		<swiper-container
			class='swiper'
			ref={swiperRef}
			autoplay='true'
			loop='true'
			delay='7000'
			disable-on-interaction='false'
			navigation='true'
			pagination='true'
		>
			{children.map((c, key) => {
				return (
					<swiper-slide class='swiper-slide' key={key}>
						{c}
					</swiper-slide>
				);
			})}
		</swiper-container>
	);
};
export default GallerySwiper;
