import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children, title = 'Dashboard', content = '' }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={content} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div id='layout-wrapper'>
				<Header headerClass={'topbar-shadow'} />

				<Sidebar />
				<div className='main-content'>
					<div className='page-content'>{children}</div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Layout;
