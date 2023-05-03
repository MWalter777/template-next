import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import UpgradeAccountNotise from '../../Components/DashboardAnalytics/UpgradeAccountNotise';
import UsersByDevice from '../../Components/DashboardAnalytics/UsersByDevice';
import Widget from '../../Components/DashboardAnalytics/Widget';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import AudiencesMetrics from '../../Components/DashboardAnalytics/AudiencesMetrics';
import AudiencesSessions from '../../Components/DashboardAnalytics/AudiencesSessions';
import LiveUsers from '../../Components/DashboardAnalytics/LiveUsers';
import TopReferrals from '../../Components/DashboardAnalytics/TopReferrals';
import TopPages from '../../Components/DashboardAnalytics/TopPages';
import Layout from '@/Layouts';

const DashboardAnalytics = () => {
	return (
		<Layout title='Analytics | Velzon - React Admin & Dashboard Template'>
			<Container fluid>
				<BreadCrumb link='/' title='Analytics' pageTitle='Dashboards' />
				<Row>
					<Col xxl={5}>
						<UpgradeAccountNotise />
						<Widget />
					</Col>
					<LiveUsers />
				</Row>
				<Row>
					<AudiencesMetrics />
					<AudiencesSessions />
				</Row>
				<Row>
					<UsersByDevice />
					<TopReferrals />
					<TopPages />
				</Row>
			</Container>
		</Layout>
	);
};

export default DashboardAnalytics;
