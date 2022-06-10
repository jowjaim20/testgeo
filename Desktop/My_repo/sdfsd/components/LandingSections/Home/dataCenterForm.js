import React, { useState, useRef, Fragment, useEffect } from "react";
import modalBg from "@public/images/backgrounds/datacenter-beta-bg.jpg";
import userDashboard from "@public/images/backgrounds/datacenter-beta-dashboard.png";
import GeoButton from "../../Button";
import { Dialog, Transition } from "@headlessui/react";
import ReCAPTCHA from "react-google-recaptcha";
import { datacenterBetaApiService } from "@services/index";
import { useForm } from "react-hook-form";
import { PhoneNumberWrapper } from "@components/PhoneWrapper";
import GeoTextarea from "@components/form-control/Textarea";
import {
	CheckIconWithGreenCircle,
	CloseIcon2,
	EmailIcon,
  WhiteLogo,
  ArrowRight3
} from "@shared/svgIcons";
import { CheckboxWrapper, InputWrapper } from "utils/helper";
import { AgreementLabel } from "./trialBusinessForm";
import { validateEmail, validateUrl } from 'utils/utils';


const initState = {
	fullName: "",
	email: "",
	phoneNumber: "",
	message: "",
	website: "",
	isAgree: false,
};

export function DataCenterTrial(props) {
	const cancelButtonRef = useRef(null);
	const recaptchaRef = useRef({});
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitError, setSubmitError] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

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
		mode: "onChange",
		reValidateMode: "onChange",
		defaultValues: initState,
	});

	useEffect(() => {
		setIsSubmitted(false);
	}, []);

	const handleModalClose = () => {
		props.setShowModal(false);
		setTimeout(() => {
			setIsSubmitted(false);
		}, [100]);
		// setSubmitError("");
		// reset();
	};

	const onSubmit = async (data) => {
		setIsLoading(true);
		const recaptchaValue = await recaptchaRef.current.executeAsync();
		let filterPayload = {
			serviceType: "DATACENTER",
			...data,
		};
		const payload = {
			...filterPayload,
			"g-recaptcha-response": recaptchaValue,
		};

		await datacenterBetaApiService
			.post("", payload)
			.then(({ data }) => {
				if (data.message.variant === "success") {
					reset();
					setSubmitError("");
					setIsSubmitted(true);
					reset();
				} else if (data.message.variant === "error") {
				}
				setIsLoading(false);
			})
			.catch((err) => {
				if (err?.err) {
					setSubmitError(err?.err);
				} else if (err?.message?.variant === "error") {
					setSubmitError(err?.message?.body);
				}
				setIsLoading(false);

				if (recaptchaRef.current) recaptchaRef.current.reset();
			});
	};
	const onChangeRecaptcha = (value) => {};

	const FreeTrialForm = () => {
		return (
			<div className="grid grid-cols-1 md:grid-cols-2 h-full ">
				<div
					className="relative hidden md:flex flex-col items-center h-full overflow-hidden"
					style={{
						backgroundImage: `url(${modalBg})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
					}}
				>
					<div className="absolute top-8 left-8">
						{WhiteLogo}
						{/* <img src={WhiteLogo} alt='geonode-logo' /> */}
					</div>
					<div className="absolute bottom-0 sm:-right-1/2 lg:-right-1/4 xl:right-0">
						<img src={userDashboard} alt="geonode user dashboard"></img>
					</div>
				</div>

				<div className="flex items-center h-full w-full bg-white py-8 px-6 md:py-28 md:px-16 rounded-2xl md:rounded-none">
					<div className="m-auto" style={{ maxWidth: 512 }}>
						<div className="mb-8">
							<h3 className="text-2xl font-bold sm:text-3xl sm:leading-9 lg:text-4xl text-gray-900 text-left mb-3">
								Free beta testing application
							</h3>
						</div>

						<form
							onSubmit={handleSubmit((val) => {
								onSubmit(val);
							})}
							method="POST"
							className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 gap-y-3"
						>
							<div className="col-span-2">
								<InputWrapper
									{...{
										errors,
										inputProps: {
											...register('email', {
												required: 'Email is required',
												validate: value => {
													if (!validateEmail(value)) {
														return 'You have entered an invalid email address';
													}
												},
											}),
										},
										placeholder: "Email",
										keyName: "email",
										required: true,
										leftIcon: EmailIcon,
									}}
								/>
							</div>

							<div className="col-span-2">
								<InputWrapper
									{...{
										errors,
										inputProps: {
											...register("fullName", {
												required: "Full name is required",
											}),
										},
										placeholder: "Full name",
										keyName: "fullName",
										required: true,
									}}
								/>
							</div>
							<div className="col-span-2">
								<PhoneNumberWrapper
									{...{
										control,
										setError,
										clearErrors,
										errors,
										size: "sm",
										isRequired: true,
										defaultValue: getValues("phoneNumber"),
										placeholder: "Mobile number",
									}}
								/>
							</div>
							<div className="col-span-2">
								<InputWrapper
									{...{
										errors,
										inputProps: {
											...register('website', {
												required: 'Website is required',
												validate: value => {
													if (!validateUrl(value)) {
														return 'Website url is not valid';
													}
												},
											}),
										},
										placeholder: "Website",
										keyName: "website",
										required: true,
									}}
								/>
							</div>
							<div className="sm:col-span-2">
								<GeoTextarea
									inputProps={{
										...register("message", {
											required: "Description is required",
										}),
									}}
									placeholder="What are you looking to achieve with Datacenter Proxies?"
									name="message"
									error={errors.message?.message}
									required={true}
								/>
							</div>
							<div className="col-span-2 flex items-center">
								<CheckboxWrapper
									{...{
                    control,
										errors,
										name: "isAgree",
										label: <AgreementLabel />,
									}}
								/>
							</div>

							{isSubmitError && (
								<div className="text-red-500 text-sm mt-2 col-span-2">
									{isSubmitError}
								</div>
							)}

							<div className="col-span-2 mt-3">
								<GeoButton
									isLoading={isLoading}
                  labelClassName="text-sm leading-5 font-medium p-3"
                  buttonClassName="w-full font-medium	" 
									label="Submit"
									type="submit"
									endIcon={<span>{ArrowRight3}</span>}
									
								/>
							</div>
							<div className="">
								<ReCAPTCHA
									size="invisible"
									ref={recaptchaRef}
									sitekey="6LccwXscAAAAAKy7qRaD3uhtu2ruAR_drOTXQ4Gs"
									onChange={onChangeRecaptcha}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	};

	const SuccessForm = () => {
		return (
			<div
				className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				style={{ minWidth: 343 }}
			>
				<div className="flex justify-center flex-col text-center">
					<div className="flex items-center justify-center mb-6">
						<span>{CheckIconWithGreenCircle}</span>
					</div>
					<div className="text-base text-secondary-200 mb-8">
						<h2 className="text-3xl font-semibold mb-3">Thank you</h2>
						<p className="font-normal text-subtle-500">
							We will review your information and get back to you ASAP.
						</p>
					</div>
					<div className="px-10">
						<GeoButton
							label="Back to home"
							buttonClassName="w-full"
							onClick={handleModalClose}
						/>
					</div>
				</div>
			</div>
		);
	};

	return (
		<Transition.Root show={props.showModal} as={Fragment}>
			<Dialog
				as="div"
				className="fixed z-10 inset-0 overflow-y-auto"
				initialFocus={cancelButtonRef}
				onClose={handleModalClose}
			>
				<div className="flex items-center justify-center text-center h-screen">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className="hidden sm:inline-block sm:align-middle sm:h-screen"
						aria-hidden="true"
					>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						{/* <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'> */}
						<div className="relative w-full h-full overflow-y-auto overflow-x-hidden bg-white text-left shadow-xl transform transition-all">
							<div
								className="absolute top-8 right-8 cursor-pointer"
								onClick={handleModalClose}
							>
								<span className="hidden sm:block">
									{CloseIcon2({ color: "#3B3B3B", size: 22 })}
								</span>
								<span className="block sm:hidden">
									{CloseIcon2({ color: "#3B3B3B", size: 14 })}
								</span>
							</div>

							{isSubmitted ? SuccessForm() : FreeTrialForm()}
						</div>
						{/* </div> */}
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
