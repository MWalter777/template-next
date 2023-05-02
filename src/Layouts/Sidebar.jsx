import React from 'react';
import SimpleBar from 'simplebar-react';
import logoSm from '../assets/images/logo-sm.png';
import logoDark from '../assets/images/logo-dark.png';
import logoLight from '../assets/images/logo-light.png';
import VerticalLayout from './VerticalLayout';
import { Container } from 'reactstrap';
import Link from 'next/link';

const Sidebar = () => {
	return (
		<React.Fragment>
			<div className='app-menu navbar-menu'>
				<div className='navbar-brand-box'>
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
					<button
						type='button'
						className='btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover'
						id='vertical-hover'
					>
						<i className='ri-record-circle-line'></i>
					</button>
				</div>

				<React.Fragment>
					<SimpleBar id='scrollbar' className='h-100'>
						<Container fluid>
							<div id='two-column-menu'></div>
							<ul className='navbar-nav' id='navbar-nav'>
								<VerticalLayout />
							</ul>
						</Container>
					</SimpleBar>
					<div className='sidebar-background'></div>
				</React.Fragment>
			</div>
			<div className='vertical-sidebar-enable'></div>
		</React.Fragment>
	);
};

export default Sidebar;
