import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children, title = 'Dashboard', content = '' }) => {
	const [isOpenSidebar, setIsOpenSidebar] = useState({
		isOpenSidebar: true,
		className: 'vertical-collpsed',
	});
	const toggleSidebar = () => {
		setIsOpenSidebar(() => ({
			...isOpenSidebar,
			isOpenSidebar: !isOpenSidebar.isOpenSidebar,
			className: !isOpenSidebar.isOpenSidebar
				? 'vertical-collpsed'
				: 'vertical-hidden',
		}));
	};
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={content} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div id='layout-wrapper'>
				<Header toggleSidebar={toggleSidebar} headerClass={'topbar-shadow'} />

				<Sidebar className={isOpenSidebar.className} />
				<div className='main-content'>
					<div className='page-content'>{children}</div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Layout;
