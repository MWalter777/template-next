import React from 'react';
import Link from 'next/link';
import logoSm from '../assets/images/logo-sm.png';
import logoDark from '../assets/images/logo-dark.png';
import logoLight from '../assets/images/logo-light.png';

import WebAppsDropdown from '../Components/Common/WebAppsDropdown';
import MyCartDropdown from '../Components/Common/MyCartDropdown';
import FullScreenDropdown from '../Components/Common/FullScreenDropdown';
import NotificationDropdown from '../Components/Common/NotificationDropdown';
import ProfileDropdown from '../Components/Common/ProfileDropdown';
import LightDark from '../Components/Common/LightDark';

const Header = ({ headerClass, toggleSidebar = () => {} }) => {
	return (
		<header id='page-topbar' className={headerClass}>
			<div className='layout-width'>
				<div className='navbar-header'>
					<div className='d-flex'>
						<div className='navbar-brand-box horizontal-logo'>
							<Link href='/' className='logo logo-dark'>
								<span className='logo-sm'>
									<img src={logoSm} alt='here should be the logo' height='22' />
								</span>
								<span className='logo-lg'>
									<img src={logoDark} alt='' height='17' />
								</span>
							</Link>

							<Link href='/' className='logo logo-light'>
								<span className='logo-sm'>
									<img src={logoSm} alt='' height='22' />
								</span>
								<span className='logo-lg'>
									<img src={logoLight} alt='' height='17' />
								</span>
							</Link>
						</div>

						<button
							type='button'
							className='btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger'
							id='topnav-hamburger-icon'
							onClick={toggleSidebar}
						>
							<span className='hamburger-icon'>
								<span></span>
								<span></span>
								<span></span>
							</span>
						</button>
					</div>

					<div className='d-flex align-items-center'>
						<WebAppsDropdown />

						<MyCartDropdown />

						<FullScreenDropdown />

						<LightDark />

						<NotificationDropdown />

						<ProfileDropdown />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
