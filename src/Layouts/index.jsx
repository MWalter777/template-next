import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children, title = 'Dashboard', content = '' }) => {
	const [isOpenSidebar, setIsOpenSidebar] = useState({
		isOpenSidebar: true,
		className: {
			sidebar: 'vertical-collpsed',
			content: 'content-margin',
		},
	});
	const toggleSidebar = () => {
		setIsOpenSidebar(() => ({
			...isOpenSidebar,
			isOpenSidebar: !isOpenSidebar.isOpenSidebar,
			className: !isOpenSidebar.isOpenSidebar
				? {
						sidebar: 'vertical-collpsed',
						content: 'content-margin',
				  }
				: {
						sidebar: 'vertical-hidden',
						content: '',
				  },
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
				<Header
					toggleSidebar={toggleSidebar}
					headerClass={`topbar-shadow ${isOpenSidebar.className.content}`}
				/>

				<Sidebar
					toggleSidebar={toggleSidebar}
					className={isOpenSidebar.className.sidebar}
				/>
				<div className={`main-content ${isOpenSidebar.className.content}`}>
					<div className='page-content'>{children}</div>
					<Footer className={isOpenSidebar.className.content} />
				</div>
			</div>
		</>
	);
};

export default Layout;
