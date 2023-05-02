import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div id='layout-wrapper'>
			<Header headerClass={'topbar-shadow'} layoutModeType='dark' />
			<Sidebar />
			<div className='main-content'>
				{children}
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
