import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Widget from './Widgets';
import BestSellingProducts from './BestSellingProducts';
import RecentActivity from './RecentActivity';
import RecentOrders from './RecentOrders';
import Revenue from './Revenue';
import SalesByLocations from './SalesByLocations';
import Section from './Section';
import StoreVisits from './StoreVisits';
import TopSellers from './TopSellers';
import Layout from '@/Layouts';

const DashboardEcommerce = () => {
	const [rightColumn, setRightColumn] = useState(false);
	const toggleRightColumn = () => {
		setRightColumn(!rightColumn);
	};

	return (
		<Layout title='Dashboard | Velzon - React Admin & Dashboard Template'>
			<Container fluid>
				<Row>
					<Col>
						<div className='h-100'>
							<Section rightClickBtn={toggleRightColumn} />
							<Row>
								<Widget />
							</Row>
							<Row>
								<Col xl={8}>
									<Revenue />
								</Col>
								<SalesByLocations />
							</Row>
							<Row>
								<BestSellingProducts />
								<TopSellers />
							</Row>
							<Row>
								<StoreVisits />
								<RecentOrders />
							</Row>
						</div>
					</Col>
					<RecentActivity
						rightColumn={rightColumn}
						hideRightColumn={toggleRightColumn}
					/>
				</Row>
			</Container>
		</Layout>
	);
};

export default DashboardEcommerce;
