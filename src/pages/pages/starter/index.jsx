import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import Layout from '@/Layouts';

const Starter = () => {
	return (
		<Layout title='Starter | Velzon - React Admin & Dashboard Template'>
			<Container fluid>
				<BreadCrumb title='Starter' pageTitle='Pages' />
				<Row>
					<Col xs={12}></Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default Starter;
