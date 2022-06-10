import { Controller } from "react-hook-form";
import React from "react";
import GeoPhoneNumber from "@components/PhoneNumber";
// import { generateError } from "@utils/forms-utils";
import { isValidPhoneNumber } from "react-phone-number-input";

export const PhoneNumberWrapper = ({
	control,
	setError,
	clearErrors,
	errors,
	size,
	isRequired = false,
	defaultValue = "",
	label = "",
	placeholder = "",
}) => {
	const onPhoneChange = (val, onChange) => {
		if (!val || val === undefined) {
			setError("phoneNumber", {
				type: "manual",
				message: "Phone Number is required",
			});
			return;
		} else if (val !== undefined && !isValidPhoneNumber(val.toString())) {
			setError("phoneNumber", {
				type: "manual",
				message: "Invalid Phone Number",
			});
			return;
		} else {
			clearErrors("phoneNumber");
		}
		onChange(val);
	};

	return (
		<Controller
			name="phoneNumber"
			defaultValue={defaultValue}
			control={control}
			rules={{ required: isRequired ? "Phone number is required" : false }}
			render={({ field: { onChange, onBlur, value } }) => (
				<GeoPhoneNumber
					placeholder={placeholder}
					value={value}
					size={size || "md"}
					onChange={(val) => onPhoneChange(val, onChange)}
					label={label}
					hasError={errors.phoneNumber}
					message={errors.phoneNumber && errors.phoneNumber.message}
					inputProps={{
						onBlur,
					}}
					required={isRequired}
				/>
			)}
		/>
	);
};
