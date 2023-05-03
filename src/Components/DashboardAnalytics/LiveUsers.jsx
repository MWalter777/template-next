import React, { useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import classNames from 'classnames';
import { CountriesCharts } from './DashboardAnalyticsCharts';

import Vector from './VectorMap';

const LiveUsers = () => {
	const [countryData, setcountryData] = useState([
		{
			name: 'serie-test',
			data: [20.56, 89.02, 35.89, 34, 45, 54, 34, 45, 65, 45],
		},
	]);
	const [periodType, setPeriodType] = useState('halfyearly');

	const onChangeChartPeriod = (pType) => {
		setPeriodType(pType);
		console.log(pType);
	};

	return (
		<React.Fragment>
			<Col xxl={7}>
				<Row className='h-100'>
					<Col xl={6}>
						<Card className='card-height-100'>
							<div className='card-header align-items-center d-flex'>
								<h4 className='card-title mb-0 flex-grow-1'>
									Live Users By Country
								</h4>
								<div className='flex-shrink-0'>
									<button type='button' className='btn btn-soft-primary btn-sm'>
										Export Report
									</button>
								</div>
							</div>

							<CardBody>
								<div
									className='text-center'
									style={{ height: '252px', overflow: 'hidden' }}
								>
									<Vector width='100%' value='world_mill' color='#071522' />
								</div>

								<div className='table-responsive table-card mt-3'>
									<table className='table table-borderless table-sm table-centered align-middle table-nowrap mb-1'>
										<thead className='text-muted border-dashed border border-start-0 border-end-0 bg-soft-light'>
											<tr>
												<th>Duration (Secs)</th>
												<th style={{ width: '30%' }}>Sessions</th>
												<th style={{ width: '30%' }}>Views</th>
											</tr>
										</thead>
										<tbody className='border-0'>
											<tr>
												<td>0-30</td>
												<td>2,250</td>
												<td>4,250</td>
											</tr>
											<tr>
												<td>31-60</td>
												<td>1,501</td>
												<td>2,050</td>
											</tr>
											<tr>
												<td>61-120</td>
												<td>750</td>
												<td>1,600</td>
											</tr>
											<tr>
												<td>121-240</td>
												<td>540</td>
												<td>1,040</td>
											</tr>
										</tbody>
									</table>
								</div>
							</CardBody>
						</Card>
					</Col>

					<Col xl={6}>
						<Card className='card-height-100'>
							<div className='card-header align-items-center d-flex'>
								<h4 className='card-title mb-0 flex-grow-1'>
									Sessions by Countries
								</h4>
								<div className='d-flex gap-1'>
									<button
										type='button'
										className={classNames(
											{ active: periodType === 'all' },
											'btn btn-soft-secondary btn-sm'
										)}
										onClick={() => {
											onChangeChartPeriod('all');
										}}
									>
										ALL
									</button>
									<button
										type='button'
										className={classNames(
											{ active: periodType === 'monthly' },
											'btn btn-soft-info btn-sm'
										)}
										onClick={() => {
											onChangeChartPeriod('monthly');
										}}
									>
										1M
									</button>
									<button
										type='button'
										className={classNames(
											{ active: periodType === 'halfyearly' },
											'btn btn-soft-secondary btn-sm'
										)}
										onClick={() => {
											onChangeChartPeriod('halfyearly');
										}}
									>
										6M
									</button>
								</div>
							</div>
							<div className='card-body p-0'>
								<div>
									<CountriesCharts
										series={countryData}
										dataColors='["--vz-primary", "--vz-primary", "--vz-primary", "--vz-primary", "--vz-secondary", "--vz-primary", "--vz-primary", "--vz-primary", "--vz-primary", "--vz-primary"]'
									/>
								</div>
							</div>
						</Card>
					</Col>
				</Row>
			</Col>
		</React.Fragment>
	);
};

export default LiveUsers;
