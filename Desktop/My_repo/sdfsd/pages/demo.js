import React, { useState, useRef } from 'react';
import { Switch } from '@headlessui/react';
import DarkSection from '@components/DarkSection';
import PageHeader from '@components/PageHeaderV2';
import { CheckIcon } from '@shared/svgIcons';
import ReCAPTCHA from 'react-google-recaptcha';

import BackgroundLines from '@components/BackgroundLines';
import GeoHead from '@components/Head';
import { demoApiService } from '../services';
import GeoButton from '@components/Button';

import { useForm } from 'react-hook-form';
import { PhoneNumberWrapper } from '@components/PhoneWrapper';

const initState = {
	agree: false,
	firstName: '',
	lastName: '',
	companyName: '',
	companySize: 0,
	email: '',
	phoneNumber: '',
	message: '',
};

const features = [
	{
		id: 1,
		title: 'Learn about our dashboard',
		description: "We'll show you around in our best-of-breed user dashboard  from which you'll control your operations.",
	},
	{
		id: 2,
		title: 'The more, the merrier',
		description: 'Ask your team members to join, and they are more than  welcome.',
	},
	{
		id: 3,
		title: 'No tech expertise required',
		description: 'While you can ask your developer questions as well, this demo  requires no prior knowledge of proxies and can be followed by  anyone interested in the subject.',
	},
	{
		id: 4,
		title: 'AUA',
		description: 'Ask us anything. This time is for you to resolve any lingering  questions about using Geonode proxies.',
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const DemoPage = () => {
	const recaptchaRef = useRef({});
	const [isAgree, setIsAgree] = useState(false);
	const [isAgreeError, setIsAgreeError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		getValues,
		reset,
		setError,
		clearErrors,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: initState,
	});

	const onChange = e => {
		if (typeof e === 'boolean') {
			setIsAgree(!isAgree);
			return;
		}
	};

	const onSubmit = async values => {
		if (!isAgree) {
			return setIsAgreeError('Please agree to Privacy and Cookie Policy');
		}

		setIsLoading(true);
		const recaptchaValue = await recaptchaRef.current.executeAsync();

		let filterPayload = {};
		if (values.phoneNumber) {
			filterPayload = {
				...values,
				companySize: parseInt(values.companySize),
				agree: isAgree,
				'g-recaptcha-response': recaptchaValue,
			};
		} else {
			filterPayload = {
				agree: isAgree,
				firstName: values.firstName,
				lastName: values.lastName,
				companyName: values.companyName,
				companySize: parseInt(values.companySize),
				email: values.email,
				message: values.message,
				'g-recaptcha-response': recaptchaValue,
			};
		}

		// send api request;
		await demoApiService
			.post('', filterPayload)
			.then(({ data }) => {
				if (data.message.variant === 'success') {
					reset();
					setIsAgreeError('');
					alert('Sucessfully sent! Please wait for our team to contact you.');
				}
				setIsLoading(false);
			})
			.catch(err => {
				setIsLoading(false);
				if (recaptchaRef.current) recaptchaRef.current.reset();
				alert(err.err);
			});
	};

	const onChangeRecaptcha = value => {};

	return (
		<div className="">
			<DarkSection>
				<div style={{ backgroundColor: '#F7FAFC' }}>
					<BackgroundLines />

					<PageHeader noContent />
				</div>
			</DarkSection>

			<section className="lg:pb-96">
				<div className="max-w-screen-xl m-auto text-background-high px-4 pt-16 pb-24 md:pb-28 lg:pb-32">
					<div className="relative">
						<GeoHead title="Request Live Demo" description="Schedule a live demo with Geonode and we'll support your operational needs." />

						<div className="mx-auto max-w-7x pb-10 lg:pb-24">
							<div className="lg:grid lg:grid-cols-12 lg:gap-8">
								<div className="text-left md:text-center lg:col-span-6 lg:text-left lg:flex lg:items-center">
									<div className="mx-auto mt-6 lg:mx-0 md:max-w-lg lg:max-w-md">
										<div className="mb-11 ">
											<h2 className="text-2xl leading-10 font-normal text-background-high sm:leading-8 sm:text-4xl">
												<span className="block">See Geonode in action.</span>
												<span>Request live demo</span>
											</h2>
											<p className="mt-4 text-base leading-6 font-normal text-subtle-300 mb-7">
												Allow us to show you around and explain how Geonode proxies can help you meet your data-gathering efforts.
											</p>
											<p className="text-base leading-6 font-normal text-subtle-300">Sessions typically take 30 mins to 1 hr and are conducted via Google Meet or Zoom.</p>
											<div className=""></div>
										</div>

										<div className="hidden lg:block mt-2 text-background-high text-sm leading-5 font-normal">
											<div className="mb-11 flex lg:block justify-center">
												<dd className="space-y-3">
													{features.map(item => (
														<div key={item.id} className="relative">
															<dt>
																<div className="lg:absolute flex items-center justify-center h-12 w-12 text-white mb-4 lg:mb-0">
																	<span className={''}>{CheckIcon}</span>
																</div>
																<p className="text-base leading-6 font-semibold lg:ml-16 text-subtle-600">{item.title}</p>
															</dt>
															<dd className="mt-2 lg:ml-16 text-sm leading-5 font-normal text-subtle-400">{item.description}</dd>
														</div>
													))}
												</dd>
											</div>
										</div>
									</div>
								</div>

								<div className="relative mt-12 lg:mt-0 lg:col-span-6">
									<div className="relative lg:absolute ml-0 mr-0 bg-white rounded-lg shadow-xl sm:transform sm:-translate-x-1/2 sm:left-1/2 w-full sm:w-3/4 lg:w-full lg:mx-auto sm:rounded-lg sm:overflow-hidden">
										<div className="px-4 py-8 sm:px-10 ">
											<div className="text-xl sm:text-2xl eading-8 font-bold text-gray-900 mb-8 sm:mb-12">
												<h2>Tell us about yourself, and a member of our team will reach out to schedule a demo</h2>
											</div>
											<div className="mx-auto">
												<form onSubmit={handleSubmit(val => onSubmit(val))} method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
													<div>
														<label htmlFor="first-name" className="block text-sm  leading-5 font-medium text-gray-700">
															First name
														</label>
														<div className="mt-1">
															<input
																{...register('firstName')}
																type="text"
																name="firstName"
																id="firstName"
																className="py-3 px-4 border-1 border-gray-100 text-secondary-100 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
															/>
														</div>
													</div>
													<div>
														<label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
															Last name
														</label>
														<div className="mt-1">
															<input
																{...register('lastName')}
																type="text"
																name="lastName"
																id="lastName"
																className="py-3 px-4 border-1 border-gray-100 text-secondary-100 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
															/>
														</div>
													</div>

													<div className="sm:col-span-2">
														<label htmlFor="email" className="block text-sm font-medium text-gray-700">
															Email
														</label>
														<div className="mt-1">
															<input
																{...register('email', {
																	required: 'Email is required',
																})}
																type="email"
																name="email"
																id="email"
																className="py-3 px-4 border border-gray-100 text-secondary-100 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
															/>
															<div className="text-xs py-2 text-red-500">{errors.email?.message && errors.email?.message}</div>
														</div>
													</div>

													<div className="sm:col-span-2">
														<PhoneNumberWrapper
															{...{
																control,
																setError,
																clearErrors,
																errors,
																size: 'md',
																isRequired: false,
																defaultValue: getValues('phoneNumber'),
															}}
														/>
													</div>

													<div className="sm:col-span-2">
														<label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
															Company
														</label>
														<div className="mt-1">
															<input
																{...register('companyName')}
																type="text"
																name="companyName"
																id="companyName"
																className="py-3 px-4 border-1 border-gray-100 text-secondary-100 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
															/>
														</div>
													</div>

													<div className="sm:col-span-2">
														<label htmlFor="companySize" className="block text-sm font-medium text-gray-700">
															Company size
														</label>
														<div className="mt-1">
															<input
																{...register('companySize')}
																type="number"
																name="companySize"
																id="companySize"
																autoComplete="organization"
																className="py-3 px-4 border-1 border-gray-100 text-secondary-100 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
															/>
														</div>
													</div>

													<div className="sm:col-span-2">
														<label htmlFor="message" className="block text-sm font-medium text-gray-700">
															What is your biggest question? Or what do you get into the most?
														</label>
														<div className="mt-1">
															<textarea
																{...register('message', {
																	required: 'Message is required',
																})}
																id="message"
																name="message"
																rows={4}
																className="py-3 px-4 border-1 border-gray-100 text-secondary-100 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
															/>
															<div className="text-xs py-2 text-red-500">{errors.message?.message && errors.message?.message}</div>
														</div>
													</div>
													<div className="sm:col-span-2">
														<div className="flex items-start">
															<div className="flex-shrink-0">
																<Switch
																	style={{ height: 24 }}
																	checked={isAgree}
																	onChange={onChange}
																	className={classNames(
																		isAgree ? 'bg-primary-base' : 'bg-gray-200',
																		'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200',
																	)}
																>
																	<span className="sr-only">Agree to policies</span>
																	<span
																		aria-hidden="true"
																		style={{ height: 20 }}
																		className={classNames(
																			isAgree ? 'translate-x-5' : 'translate-x-0',
																			'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
																		)}
																	/>
																</Switch>
															</div>
															<div className="ml-3">
																<span className="text-sm text-gray-500">
																	By selecting this, you agree to the{' '}
																	<a href="/privacy-policy/">
																		<span className="text-sm font-medium text-primary-base underline">Privacy Policy</span>
																	</a>{' '}
																	and{' '}
																	<a href="/cookie-policy/">
																		<span className="text-sm font-medium text-primary-base underline">Cookie Policy</span>
																	</a>
																</span>
															</div>
														</div>
														<div className="text-xs py-2 text-red-500">{isAgreeError && isAgreeError}</div>
													</div>
													<div className="sm:col-span-2 mb-8">
														<GeoButton isLoading={isLoading} label="Let's talk" buttonClassName="w-full" labelClassName="text-sm leading-5 font-medium p-3" type="submit" />
													</div>
													<div className="">
														<ReCAPTCHA size="invisible" ref={recaptchaRef} sitekey="6LccwXscAAAAAKy7qRaD3uhtu2ruAR_drOTXQ4Gs" onChange={onChangeRecaptcha} />
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default DemoPage;
