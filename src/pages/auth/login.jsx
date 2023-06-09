import React, { useEffect, useState } from 'react';
import {
	Card,
	CardBody,
	Col,
	Container,
	Input,
	Label,
	Row,
	Button,
	Form,
	FormFeedback,
	Alert,
	Spinner,
} from 'reactstrap';
import ParticlesAuth from '../../Components/AuthenticationInner/ParticlesAuth';

import Link from 'next/link';

// Formik validation
import * as Yup from 'yup';
import { useFormik } from 'formik';

import logoLight from '../../assets/images/logo-light.png';
import { useRouter } from 'next/router';

const Login = (props) => {
	const router = useRouter();
	const [userLogin, setUserLogin] = useState([]);
	const [passwordShow, setPasswordShow] = useState(false);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const { 'access-denied': accessDenied } = router.query;
		console.log(router.query);
		if (accessDenied !== undefined) {
			setError('Access Denied. Please login to continue');
		}
	}, [router.query]);

	const validation = useFormik({
		// enableReinitialize : use this flag when initial values needs to be changed
		enableReinitialize: true,

		initialValues: {
			email: userLogin.email || 'admin@themesbrand.com' || '',
			password: userLogin.password || '123456' || '',
		},
		validationSchema: Yup.object({
			email: Yup.string().required('Please Enter Your Email'),
			password: Yup.string().required('Please Enter Your Password'),
		}),
		onSubmit: (values) => {
			console.log(values, props.router.navigate);
		},
	});

	const signIn = (res, type) => {
		if (type === 'google' && res) {
			const postData = {
				name: res.profileObj.name,
				email: res.profileObj.email,
				token: res.tokenObj.access_token,
				idToken: res.tokenId,
			};
			console.log(postData, props.router.navigate, type);
		} else if (type === 'facebook' && res) {
			const postData = {
				name: res.name,
				email: res.email,
				token: res.accessToken,
				idToken: res.tokenId,
			};
			console.log(postData, props.router.navigate, type);
		}
	};

	//handleGoogleLoginResponse
	const googleResponse = (response) => {
		signIn(response, 'google');
	};

	//handleTwitterLoginResponse
	// const twitterResponse = e => {}

	//handleFacebookLoginResponse
	const facebookResponse = (response) => {
		signIn(response, 'facebook');
	};

	return (
		<ParticlesAuth title='Basic SignIn | Velzon - React Admin & Dashboard Template'>
			<div className='auth-page-content'>
				<Container>
					<Row>
						<Col lg={12}>
							<div className='text-center mt-sm-5 mb-4 text-white-50'>
								<div>
									<Link href='/' className='d-inline-block auth-logo'>
										<img src={logoLight} alt='' height='20' />
									</Link>
								</div>
								<p className='mt-3 fs-15 fw-medium'>
									Premium Admin & Dashboard Template
								</p>
							</div>
						</Col>
					</Row>

					<Row className='justify-content-center'>
						<Col md={8} lg={6} xl={5}>
							<Card className='mt-4'>
								<CardBody className='p-4'>
									<div className='text-center mt-2'>
										<h5 className='text-primary'>Welcome Back !</h5>
										<p className='text-muted'>Sign in to continue to Velzon.</p>
									</div>
									{error && error ? (
										<Alert color='danger'> {error} </Alert>
									) : null}
									<div className='p-2 mt-4'>
										<Form
											onSubmit={(e) => {
												e.preventDefault();
												validation.handleSubmit();
												return false;
											}}
											action='#'
										>
											<div className='mb-3'>
												<Label htmlFor='email' className='form-label'>
													Email
												</Label>
												<Input
													name='email'
													className='form-control'
													placeholder='Enter email'
													type='email'
													onChange={validation.handleChange}
													onBlur={validation.handleBlur}
													value={validation.values.email || ''}
													invalid={
														validation.touched.email && validation.errors.email
															? true
															: false
													}
												/>
												{validation.touched.email && validation.errors.email ? (
													<FormFeedback type='invalid'>
														{validation.errors.email}
													</FormFeedback>
												) : null}
											</div>

											<div className='mb-3'>
												<div className='float-end'>
													<Link
														href='/auth/forgot-password'
														className='text-muted'
													>
														Forgot password?
													</Link>
												</div>
												<Label className='form-label' htmlFor='password-input'>
													Password
												</Label>
												<div className='position-relative auth-pass-inputgroup mb-3'>
													<Input
														name='password'
														value={validation.values.password || ''}
														type={passwordShow ? 'text' : 'password'}
														className='form-control pe-5'
														placeholder='Enter Password'
														onChange={validation.handleChange}
														onBlur={validation.handleBlur}
														invalid={
															validation.touched.password &&
															validation.errors.password
																? true
																: false
														}
													/>
													{validation.touched.password &&
													validation.errors.password ? (
														<FormFeedback type='invalid'>
															{validation.errors.password}
														</FormFeedback>
													) : null}
													<button
														className='btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted'
														type='button'
														id='password-addon'
														onClick={() => setPasswordShow(!passwordShow)}
													>
														<i className='ri-eye-fill align-middle'></i>
													</button>
												</div>
											</div>

											<div className='form-check'>
												<Input
													className='form-check-input'
													type='checkbox'
													value=''
													id='auth-remember-check'
												/>
												<Label
													className='form-check-label'
													htmlFor='auth-remember-check'
												>
													Remember me
												</Label>
											</div>

											<div className='mt-4'>
												<Button
													color='secondary'
													disabled={error ? null : loading ? true : false}
													className='w-100'
													type='submit'
												>
													{loading ? (
														<Spinner size='sm' className='me-2'>
															{' '}
															Loading...{' '}
														</Spinner>
													) : null}
													Sign In
												</Button>
											</div>

											<div className='mt-4 text-center'>
												<div className='signin-other-title'>
													<h5 className='fs-13 mb-4 title'>Sign In with</h5>
												</div>
											</div>
										</Form>
									</div>
								</CardBody>
							</Card>

							<div className='mt-4 text-center'>
								<p className='mb-0'>
									Don't have an account ?{' '}
									<Link
										href='/auth/register'
										className='fw-semibold text-primary text-decoration-underline'
									>
										{' '}
										Signup{' '}
									</Link>{' '}
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</ParticlesAuth>
	);
};

export default Login;
