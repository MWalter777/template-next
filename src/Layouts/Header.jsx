import React, { useState } from 'react';
import Link from 'next/link';

import { Dropdown, DropdownMenu, DropdownToggle, Form } from 'reactstrap';

import logoSm from '../assets/images/logo-sm.png';
import logoDark from '../assets/images/logo-dark.png';
import logoLight from '../assets/images/logo-light.png';

import SearchOption from '../Components/Common/SearchOption';
import LanguageDropdown from '../Components/Common/LanguageDropdown';
import WebAppsDropdown from '../Components/Common/WebAppsDropdown';
import MyCartDropdown from '../Components/Common/MyCartDropdown';
import FullScreenDropdown from '../Components/Common/FullScreenDropdown';
import NotificationDropdown from '../Components/Common/NotificationDropdown';
import ProfileDropdown from '../Components/Common/ProfileDropdown';
import LightDark from '../Components/Common/LightDark';

const Header = ({ layoutModeType, headerClass }) => {
	const [search, setSearch] = useState(false);
	const toogleSearch = () => {
		setSearch(!search);
	};

	const toogleMenuBtn = () => {};
	return (
		<header id='page-topbar' className={headerClass}>
			<div className='layout-width'>
				<div className='navbar-header'>
					<div className='d-flex'>
						<div className='navbar-brand-box horizontal-logo'>
							<Link href='/' className='logo logo-dark'>
								<span className='logo-sm'>
									<img src={logoSm} alt='' height='22' />
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
							onClick={toogleMenuBtn}
							type='button'
							className='btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger'
							id='topnav-hamburger-icon'
						>
							<span className='hamburger-icon'>
								<span></span>
								<span></span>
								<span></span>
							</span>
						</button>

						<SearchOption />
					</div>

					<div className='d-flex align-items-center'>
						<Dropdown
							isOpen={search}
							toggle={toogleSearch}
							className='d-md-none topbar-head-dropdown header-item'
						>
							<DropdownToggle
								type='button'
								tag='button'
								className='btn btn-icon btn-topbar btn-ghost-secondary rounded-circle'
							>
								<i className='bx bx-search fs-22'></i>
							</DropdownToggle>
							<DropdownMenu className='dropdown-menu-lg dropdown-menu-end p-0'>
								<Form className='p-3'>
									<div className='form-group m-0'>
										<div className='input-group'>
											<input
												type='text'
												className='form-control'
												placeholder='Search ...'
												aria-label="Recipient's username"
											/>
											<button className='btn btn-primary' type='submit'>
												<i className='mdi mdi-magnify'></i>
											</button>
										</div>
									</div>
								</Form>
							</DropdownMenu>
						</Dropdown>

						{/* LanguageDropdown */}
						<LanguageDropdown />

						{/* WebAppsDropdown */}
						<WebAppsDropdown />

						{/* MyCartDropdwon */}
						<MyCartDropdown />

						<FullScreenDropdown />

						<LightDark layoutMode={layoutModeType} />

						<NotificationDropdown />

						<ProfileDropdown />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
