import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Card, CardBody } from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';

//Images
import avatar2 from '../../assets/images/users/avatar-2.jpg';
import avatar4 from '../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../assets/images/users/avatar-5.jpg';

const SwiperCards = () => {
	SwiperCore.use([Autoplay]);

	return (
		<Swiper
			className='project-swiper'
			slidesPerView={3}
			spaceBetween={20}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			pagination={{ clickable: true }}
		>
			<div className='swiper-wrapper'>
				<SwiperSlide>
					<Card className='profile-project-card shadow-none profile-project-success mb-0'>
						<CardBody className='p-4'>
							<div className='d-flex'>
								<div className='flex-grow-1 text-muted overflow-hidden'>
									<h5 className='fs-14 text-truncate mb-1'>
										<Link href='#' className='text-dark'>
											ABC Project Customization
										</Link>
									</h5>
									<p className='text-muted text-truncate mb-0'>
										Last Update :{' '}
										<span className='fw-semibold text-dark'>4 hr Ago</span>
									</p>
								</div>
								<div className='flex-shrink-0 ms-2'>
									<div className='badge badge-soft-warning fs-10'>
										Inprogress
									</div>
								</div>
							</div>
							<div className='d-flex mt-4'>
								<div className='flex-grow-1'>
									<div className='d-flex align-items-center gap-2'>
										<div>
											<h5 className='fs-12 text-muted mb-0'>Members :</h5>
										</div>
										<div className='avatar-group'>
											<div className='avatar-group-item'>
												<div className='avatar-xs'>
													<Image
														src={avatar4}
														alt=''
														className='rounded-circle img-fluid'
													/>
												</div>
											</div>
											<div className='avatar-group-item'>
												<div className='avatar-xs'>
													<Image
														src={avatar5}
														alt=''
														className='rounded-circle img-fluid'
													/>
												</div>
											</div>
											<div className='avatar-group-item'>
												<div className='avatar-xs'>
													<div className='avatar-title rounded-circle bg-light text-primary'>
														A
													</div>
												</div>
											</div>
											<div className='avatar-group-item'>
												<div className='avatar-xs'>
													<Image
														src={avatar2}
														alt=''
														className='rounded-circle img-fluid'
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
				</SwiperSlide>

				<SwiperSlide>
					<Card className='profile-project-card shadow-none profile-project-danger mb-0'>
						<CardBody className='p-4'>
							<div className='d-flex'>
								<div className='flex-grow-1 text-muted overflow-hidden'>
									<h5 className='fs-14 text-truncate mb-1'>
										<Link href='#' className='text-dark'>
											Client - John
										</Link>
									</h5>
									<p className='text-muted text-truncate mb-0'>
										Last Update :{' '}
										<span className='fw-semibold text-dark'>1 hr Ago</span>
									</p>
								</div>
								<div className='flex-shrink-0 ms-2'>
									<div className='badge badge-soft-success fs-10'>
										Completed
									</div>
								</div>
							</div>
							<div className='d-flex mt-4'>
								<div className='flex-grow-1'>
									<div className='d-flex align-items-center gap-2'>
										<div>
											<h5 className='fs-12 text-muted mb-0'>Members :</h5>
										</div>
										<div className='avatar-group'>
											<div className='avatar-group-item'>
												<div className='avatar-xs'>
													<Image
														src={avatar2}
														alt=''
														className='rounded-circle img-fluid'
													/>
												</div>
											</div>
											<div className='avatar-group-item'>
												<div className='avatar-xs'>
													<div className='avatar-title rounded-circle bg-light text-primary'>
														C
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card className='profile-project-card shadow-none profile-project-info mb-0'>
						<CardBody className='p-4'>
							<div className='d-flex'>
								<div className='flex-grow-1 text-muted overflow-hidden'>
									<h5 className='fs-14 text-truncate mb-1'>
										<Link href='#' className='text-dark'>
											Brand logo Design
										</Link>
									</h5>
									<p className='text-muted text-truncate mb-0'>
										Last Update :{' '}
										<span className='fw-semibold text-dark'>2 hr Ago</span>
									</p>
								</div>
								<div className='flex-shrink-0 ms-2'>
									<div className='badge badge-soft-warning fs-10'>
										Inprogress
									</div>
								</div>
							</div>
							<div className='d-flex mt-4'>
								<div className='flex-grow-1'>
									<div className='d-flex align-items-center gap-2'>
										<div>
											<h5 className='fs-12 text-muted mb-0'>Members :</h5>
										</div>
										<div className='avatar-group'>
											<div className='avatar-group-item'>
												<div className='avatar-xs'>
													<Image
														src={avatar5}
														alt=''
														className='rounded-circle img-fluid'
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card className='profile-project-card shadow-none profile-project-danger mb-0'>
						<CardBody className='p-4'>
							<div className='d-flex'>
								<div className='flex-grow-1 text-muted overflow-hidden'>
									<h5 className='fs-14 text-truncate mb-1'>
										<Link href='#' className='text-dark'>
											Project update
										</Link>
									</h5>
									<p className='text-muted text-truncate mb-0'>
										Last Update :{' '}
										<span className='fw-semibold text-dark'>4 hr Ago</span>
									</p>
								</div>
								<div className='flex-shrink-0 ms-2'>
									<div className='badge badge-soft-success fs-10'>
										Completed
									</div>
								</div>
							</div>

							<div className='d-flex mt-4'>
								<div className='flex-grow-1'>
									<div className='d-flex align-items-center gap-2'>
										<div>
											<h5 className='fs-12 text-muted mb-0'>Members :</h5>
										</div>
										<div className='avatar-group'>
											<div className='avatar-group-item'>
												<div className='avatar-xs'>
													<Image
														src={avatar4}
														alt=''
														className='rounded-circle img-fluid'
													/>
												</div>
											</div>
											<div className='avatar-group-item'>
												<div className='avatar-xs'>
													<Image
														src={avatar5}
														alt=''
														className='rounded-circle img-fluid'
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
				</SwiperSlide>

				<SwiperSlide>
					<Card className='profile-project-card shadow-none profile-project-warning mb-0'>
						<CardBody className='p-4'>
							<div className='d-flex'>
								<div className='flex-grow-1 text-muted overflow-hidden'>
									<h5 className='fs-14 text-truncate mb-1'>
										<Link href='#' className='text-dark'>
											Chat App
										</Link>
									</h5>
									<p className='text-muted text-truncate mb-0'>
										Last Update :{' '}
										<span className='fw-semibold text-dark'>1 hr Ago</span>
									</p>
								</div>
								<div className='flex-shrink-0 ms-2'>
									<div className='badge badge-soft-warning fs-10'>
										Inprogress
									</div>
								</div>
							</div>

							<div className='d-flex mt-4'>
								<div className='flex-grow-1'>
									<div className='d-flex align-items-center gap-2'>
										<div>
											<h5 className='fs-12 text-muted mb-0'>Members :</h5>
										</div>
										<div className='avatar-group'>
											<div className='avatar-group-item'>
												<div className='avatar-xs'>
													<Image
														src={avatar4}
														alt=''
														className='rounded-circle img-fluid'
													/>
												</div>
											</div>
											<div className='avatar-group-item'>
												<div className='avatar-xs'>
													<Image
														src={avatar5}
														alt=''
														className='rounded-circle img-fluid'
													/>
												</div>
											</div>
											<div className='avatar-group-item'>
												<div className='avatar-xs'>
													<div className='avatar-title rounded-circle bg-light text-primary'>
														A
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
				</SwiperSlide>
			</div>
		</Swiper>
	);
};

export default SwiperCards;
