import React, { useState, useRef, useCallback, useEffect } from 'react';
import PageHeader from '@components/PageHeaderV2';
import { contactApiService } from '../../services';
import GeoHead from '@components/Head';
import { useForm } from 'react-hook-form';
import Router from 'next/router';

const initState = {
	firstName: '',
	lastName: '',
	companyName: '',
	email: '',
	phoneNumber: '',
	message: '',
	subject: '',
};

const Contact = () => {
	// const recaptchaRef = useRef({});

	// const [isAgree, setIsAgree] = useState(false);
	// const [isAgreeError, setIsAgreeError] = useState('');
	// const [isLoading, setIsLoading] = useState(false);
	// const [isSubmitError, setSubmitError] = useState('');
	const [isExistingUser, setIsExistingUser] = useState(null);

	useEffect(() => {
		const scriptTag = document.createElement('script');
		scriptTag.type = 'text/javascript';
		scriptTag.src = '//js-eu1.hsforms.net/forms/v2.js';
		document.body.appendChild(scriptTag);
	}, []);

	// const {
	// 	register,
	// 	handleSubmit,
	// 	getValues,
	// 	reset,
	// 	setError,
	// 	clearErrors,
	// 	control,
	// 	formState: { errors },
	// } = useForm({
	// 	defaultValues: initState,
	// });

	// const onChange = (key, value) => {
	// 	setIsAgree(!isAgree);
	// };

	// const onSubmit = async values => {
	// 	if (!isAgree) {
	// 		return setIsAgreeError('Please agree to Privacy and Cookie Policy');
	// 	}

	// 	setIsLoading(true);

	// 	const recaptchaValue = await recaptchaRef.current.executeAsync();

	// 	let filterPayload = {};
	// 	if (values.phoneNumber) {
	// 		filterPayload = {
	// 			...values,
	// 			'g-recaptcha-response': recaptchaValue,
	// 		};
	// 	} else {
	// 		filterPayload = {
	// 			firstName: values.firstName,
	// 			lastName: values.lastName,
	// 			companyName: values.companyName,
	// 			subject: values.subject,
	// 			email: values.email,
	// 			message: values.message,
	// 			'g-recaptcha-response': recaptchaValue,
	// 		};
	// 	}

	// 	// send api request;
	// 	await contactApiService
	// 		.post('', filterPayload)
	// 		.then(({ data }) => {
	// 			if (data.data.status === 'success') {
	// 				reset();
	// 				setIsAgreeError('');
	// 				alert('Sent successfully.');
	// 			} else {
	// 				alert('Something went wrong.');
	// 			}
	// 			setIsLoading(false);
	// 		})
	// 		.catch(err => {
	// 			setIsLoading(false);
	// 			if (recaptchaRef.current) recaptchaRef.current.reset();

	// 			setSubmitError(err.err);
	// 		});
	// };

	// const onChangeRecaptcha = value => {};

	const handleUserChange = useCallback(e => {
		if (e.target.value === 'true') {
			setIsExistingUser(true);
		} else {
			setIsExistingUser(false);
		}
	}, []);

	return (
		<div className="bg-contact">
			<GeoHead title="Geonode Contact" description="For help & support or sales, contact us 24/7! We're here for you! How can we help?">
				{/* FOR EXISTING USER */}
				{/* <script charset="utf-8" type="text/javascript" src="//js-eu1.hsforms.net/forms/v2.js" /> */}
				<script
					dangerouslySetInnerHTML={{
						__html: `hbspt.forms.create({
							region: "eu1",
							portalId: "25252445",
							formId: "63dc9fcc-88dd-4eea-a5c0-a56fb8025ebf",
							target: '#hubspotForm'
						});`,
					}}
				/>

				{/* FOR NEW USER */}

				<script
					dangerouslySetInnerHTML={{
						__html: `hbspt.forms.create({
							region: "eu1",
							portalId: "25252445",
							formId: "1eb79967-d420-424c-a054-972b970bc3b4",
							target: '#hubspotForm2'
						});`,
					}}
				/>
			</GeoHead>

			<PageHeader noBackground noContent />

			<div className="px-6 m-auto max-w-screen-md flex flex-col justify-center text-gray-50 pt-16 ">
				<div className="flex justify-center flex-col ">
					<h1 className="text-3xl	md:text-4xl mb-4 leading-10 font-bold tracking-tight text-secondary-100 text-center">Contact our support team</h1>
					<p className="max-w-[392px] m-auto text-gray-400 text-center">
						You can reach us anytime via{' '}
						<a href="mailto:hello@geonode.com" className="text-primary-base">
							hello@geonode.com
						</a>{' '}
						or via{' '}
						<a href="tel:+12055960959" className="text-primary-base">
							+12055960959
						</a>
					</p>
				</div>
			</div>
			<hr
				className="my-16"
				style={{
					color: '#ccc',
				}}
			/>

			<div className="px-6 m-auto max-w-screen-md flex flex-col justify-center text-gray-50 pb-24 md:pb-28 lg:pb-32">
				<GeoHead title="Geonode Contact" />

				<p className="text-black w-full mb-3 text-sm">Are you a Geonode customer</p>

				<div>
					<div className="flex flex-col justify-center ">
						<select onChange={handleUserChange} className="mb-10 w-full text-black contactForm-user-select">
							<option selected disabled>
								Choose an option
							</option>
							<option value={true}>Yes</option>
							<option value={false}>No</option>
						</select>

						<div id="hubspotForm" className={isExistingUser !== null && isExistingUser ? 'block' : 'hidden'}></div>
						<div id="hubspotForm2" className={isExistingUser !== null && !isExistingUser ? 'block' : 'hidden'}></div>
					</div>
				</div>
				{/* <form
							action="#"
							method="POST"
							className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
							onSubmit={handleSubmit(val => {
								onSubmit(val);
							})}
						>
							<div>
								<label htmlFor="firstName" className="block text-base font-semibold text-background-high">
									First name
								</label>
								<div className="mt-1">
									<input
										{...register('firstName')}
										type="text"
										name="firstName"
										id="firstName"
										className="py-3 px-4 block w-full shadow-sm text-secondary-100 focus:ring-indigo-500 focus:border-indigo-500 border-gray-100 rounded-md"
									/>
								</div>
							</div>
							<div>
								<label htmlFor="lastName" className="block text-base font-semibold text-background-high">
									Last name
								</label>
								<div className="mt-1">
									<input
										{...register('lastName')}
										type="text"
										name="lastName"
										id="lastName"
										className="py-3 px-4 block w-full shadow-sm text-secondary-100 focus:ring-indigo-500 focus:border-indigo-500 border-gray-100 rounded-md"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="companyName" className="block text-base font-semibold text-background-high">
									Company
								</label>
								<div className="mt-1">
									<input
										{...register('companyName')}
										type="text"
										name="companyName"
										id="companyName"
										className="py-3 px-4 block w-full shadow-sm text-secondary-100 focus:ring-indigo-500 focus:border-indigo-500 border-gray-100 rounded-md"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="email" className="block text-base font-semibold text-background-high">
									Email
								</label>
								<div className="mt-1">
									<input
										{...register('email', {
											required: 'Email is required',
										})}
										id="email"
										name="email"
										type="email"
										className="py-3 px-4 block w-full shadow-sm text-secondary-100 focus:ring-indigo-500 focus:border-indigo-500 border-gray-100 rounded-md"
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
								<div className="flex justify-between">
									<label htmlFor="subject" className="block text-base font-semibold text-background-high">
										Subject
									</label>
								</div>
								<div className="mt-1">
									<input
										{...register('subject', {
											required: 'Subject is required',
										})}
										type="text"
										name="subject"
										id="subject"
										className="py-3 px-4 block w-full shadow-sm text-secondary-100 focus:ring-indigo-500 focus:border-indigo-500 border-gray-100 rounded-md"
									/>
									<div className="text-xs py-2 text-red-500">{errors.subject?.message && errors.subject?.message}</div>
								</div>
							</div>
							<div className="sm:col-span-2">
								<div className="flex justify-between">
									<label htmlFor="message" className="block text-base font-semibold text-background-high">
										Message
									</label>
								</div>
								<div className="mt-1">
									<textarea
										{...register('message', {
											required: 'Message is required',
										})}
										id="message"
										name="message"
										rows={4}
										className="py-3 px-4 block w-full shadow-sm text-secondary-100 focus:ring-indigo-500 focus:border-indigo-500 border-gray-100 rounded-md"
										aria-describedby="message-max"
									/>
									<div className="text-xs py-2 text-red-500">{errors.message?.message && errors.message?.message}</div>
								</div>
							</div>

							<div className="sm:col-span-2">
								<div className="flex items-center">
									<Switch
										style={{ height: 24 }}
										checked={isAgree}
										onChange={e => onChange('agree', e)}
										className={` ${
											isAgree ? 'bg-primary-base' : 'bg-gray-200'
										} mr-2 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none`}
									>
										<span className="sr-only">Agree to policies</span>
										<span
											aria-hidden="true"
											style={{ height: 20 }}
											className={` ${isAgree ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
										/>
									</Switch>
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
								<div className="text-xs py-2 text-red-500">{isAgreeError && isAgreeError}</div>
							</div>

							{isSubmitError && <div className="text-xs py-1 text-red-500">{isSubmitError}</div>}

							<div className="sm:col-span-2 mb-8">
								<GeoButton isLoading={isLoading} label="Let's talk" buttonClassName="w-full" labelClassName="text-sm leading-5 font-medium p-3" type="submit" />
							</div>

							<div className="">
								<ReCAPTCHA size="invisible" ref={recaptchaRef} sitekey="6LccwXscAAAAAKy7qRaD3uhtu2ruAR_drOTXQ4Gs" onChange={onChangeRecaptcha} />
							</div>
						</form> */}
			</div>
		</div>
	);
};

export default Contact;
