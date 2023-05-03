import React from 'react';
import {
	Card,
	CardBody,
	Col,
	Row,
	CardHeader,
	Form,
	Container,
} from 'reactstrap';
import UiContent from '../../../Components/Common/UiContent';

import BreadCrumb from '../../../Components/Common/BreadCrumb';

import { useQuill } from 'react-quilljs';
import Layout from '@/Layouts';
import dynamic from 'next/dynamic';

const FormEditor = () => {
	const { quillRef } = useQuill();
	return (
		<Layout title='Editors'>
			<UiContent />
			<Container fluid>
				<BreadCrumb title='Editors' pageTitle='Forms' />
				<Row className='mt-2'>
					<Col lg={12}>
						<div className='justify-content-between d-flex align-items-center mb-3'>
							<h5 className='mb-0 pb-1 text-decoration-underline'>
								Quilljs Editor
							</h5>
						</div>
						<Card>
							<CardHeader>
								<h4 className='card-title mb-0'>Snow Editor</h4>
							</CardHeader>
							<CardBody>
								<div className='snow-editor' style={{ height: 300 }}>
									<div ref={quillRef} />
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default dynamic(() => Promise.resolve(FormEditor), { ssr: false });
