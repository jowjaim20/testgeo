import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import styles from './phoneNumber.module.scss';

const variantType = {
	primary: 'bg-white text-secondary-100 border-gray-100 focus:border-gray-100',
	secondary: 'bg-background-code text-support1-base border-subtle-700 focus:border-subtle-700',
};

const PhoneNumber = props => {
	const { label, size = 'md', hasError = false, textLeft, message = '', value, placeholder, required = false, variant = 'primary' } = props;
	const [countryCode, setCountryCode] = useState(null);

	const sizes = {
		sm: `${styles.smInput} py-2`,
		md: `${styles.mdInput} py-3`,
		lg: `${styles.lgInput} py-4`,
	};

	const variantClass = variantType[variant];
	const hasErrorClass = !message || message === '' ? 'test' : 'border-error-400 focus:border-error-400';

	useEffect(() => {
		fetch('https://geolocation-db.com/json/')
			.then(res => res.json())
			.then(response => {
				setCountryCode(response.country_code);
			})
			.catch(() => {
				setCountryCode(null);
			});

		return () => {
			setCountryCode(null);
		};
	}, []);

	const handleNumber = e => {
		props.onChange(e);
	};
	return (
		<div className={classNames(`${styles.geoPhoneContainer} ${hasError && 'error'}`, props.inputProps && props.inputProps.disabled && 'is-disabled')}>
			{label && (
				<label className={`block mb-1 ${textLeft && 'text-left'} text-sm font-medium text-gray-700`}>
					{label} {required && <span>*</span>}
				</label>
			)}

			<div className="relative">
				<PhoneInput
					placeholder={`${placeholder}${required ? '*' : ''}`}
					defaultCountry={countryCode}
					{...props.inputProps}
					value={value}
					onChange={handleNumber}
					className={`${styles.phoneInput} ${variantClass} ${hasErrorClass} shadow-sm border ${sizes[size]} px-3 outline-none ring-0 focus:ring-0 rounded-md`}
				/>
			</div>
			{message && (
				<div className="text-red-500 text-xs pt-1.5">
					<span>{message}</span>
				</div>
			)}
		</div>
	);
};

export default PhoneNumber;
