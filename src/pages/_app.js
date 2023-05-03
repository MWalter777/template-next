import React from 'react';
import '@/assets/globals.scss';
import '@/assets/scss/jquery-jvectormap.scss';
import '@/assets/scss/themes.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
