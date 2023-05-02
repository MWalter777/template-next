import React from 'react';
import Layout from '@/Layouts';
import '@/assets/globals.scss';
import '@/assets/scss/jquery-jvectormap.scss';
import '@/assets/scss/themes.scss';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
