import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { sizeClass } from "../Input";
import styles from "./SelectCountry.module.scss";

// type SizeTypes = 'small' | 'medium' | 'large' | 'xl';

// interface ISelectCountry {
// 	inputProps?: any;
// 	name: string;
// 	label: string;
// 	placeholder: string;
// 	onChange: (code: any) => void;
// 	selected: any;
// 	className?: string;
// 	size?: SizeTypes;
// 	hasError?: boolean;
// 	disabled?: boolean;
// 	sessionType?: string;
// 	useServiceCountries?: boolean;
// 	message?: { type: 'error' | 'info'; text: string };
// }

const inputSize = {
	sm: "select-sm",
	md: "select-md",
	lg: "select-lg",
	xl: "select-xl",
};

const SelectCountry = (props) => {
	const {
		useServiceCountries = false,
		sessionType,
		placeholder,
		selected,
		onChange,
		label,
		name,
		size = "md",
		hasError,
		disabled = false,
		className = "",
		countries = [],
		// message = {},
	} = props;

	const [contryIcon, setCountryIcon] = useState(null);

	const { inputClassName } = generateWrapperClass(
		size,
		// hasError || message.type === 'error',
		disabled,
		className,
		useServiceCountries
	);

	// const onChangeHandler = (val) => {
	// 	if (val?.icon) {
	// 		// let elIcon = <span className="selected-country-icon">{val?.icon}</span>;
	// 		setCountryIcon(val?.icon);
	// 	}
	// 	onChange(val);
	// };

	return (
		<div className={`${styles.geoSelectCountry}`}>
			{label && (
				<div className="text-sm leading-5 font-medium text-gray-50 mb-1">
					<label htmlFor={name}>{label}</label>
				</div>
			)}

			<ReactFlagsSelect
				className={`${styles.selectCountry} ${inputClassName}`}
				placeholder={placeholder}
				selected={selected}
				onSelect={onChange}
				countries={countries.length !== 0 ? countries : null}
			/>
			{/* 
			{message && message.text && !useServiceCountries && (
				<p
					className={`mt-1 ${
						message.type === 'error'
							? 'err-msg text-alert-400'
							: 'info-msg text-subtle-200'
					}`}
				>
					{message.text}
				</p>
			)} */}
		</div>
	);
};

const generateWrapperClass = (
	size,
	hasError = false,
	disabled,
	className,
	useServiceCountries
) => {
	const sizeCustomClass = inputSize[size];
	const errorClass =
		hasError && !useServiceCountries
			? "input-error border-alert-900"
			: "border-subtle-700";
	const disabledClass = disabled
		? "bg-background-container border-subtle-600"
		: "bg-secondary-50 focus:outline-none focus:shadow-none focus:ring-transparent ring-0 cursor-pointer";

	const inputClassName = `relative w-full input-root text-subtle-50 outline-none w-px border rounded-md shadow-sm pr-3 py-1 text-left cursor-default focus:outline-none ${sizeClass[size]} ${disabledClass} ${sizeCustomClass} ${className} ${errorClass}`;

	const wrapperClass = `input-wrapper wrapper-${sizeCustomClass} ${errorClass} flex flex-wrap ${
		disabled
			? "bg-background-container border-subtle-600 disabled"
			: "bg-background-code border-subtle-700"
	} border items-stretch items-center rounded`;

	return { inputClassName, wrapperClass, disabledClass };
};

export default SelectCountry;
