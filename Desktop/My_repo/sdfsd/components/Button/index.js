import React from 'react';
import styles from './button.module.scss';
import { CustomLoader } from '../customLoader';

const variantType = {
	primary: 'bg-primary-base',
	secondary: 'bg-support4-100',
	transparent: 'bg-transparent',
	blue: 'bg-support4-base',
};

const sizeType = {
	sm: 'text-sm leading-5 px-4 py-2',
	md: 'text-base leading-6 px-6 py-3',
	lg: 'text-base leading-6 ',
	xl: 'text-lg leading-6 ',
};

const GeoButton = ({
	label,
	variant = 'primary',
	size = 'md',
	type = 'button',
	onClick,
	style,
	linkButton = false,
	redirectUrl = '',
	buttonProps,
	linkWidth,
	labelClassName,
	buttonStyle,
	className = '',
	textColor,
	buttonClassName = '',
	startIcon,
	endIcon,
	isLoading = false,
	disabled = false,
}) => {
	const sizeClass = `button-${size} ${sizeType[size]}`;
	const buttonVariantClass = `${variantType[variant]}`;

	const renderLabel = () => {
		return (
			<span className='flex gap-2 items-center'>
				{startIcon} {label} {endIcon}
			</span>
		);
	};

	return (
		<div
			className={`${styles.buttonWrapper} font-medium  ${className}`}
			style={style}
		>
			{!linkButton && (
				<button
					disabled={disabled || isLoading}
					type={type}
					style={buttonStyle}
					onClick={onClick}
					className={`${
						isLoading || disabled ? 'cursor-not-allowed' : 'cursor-pointer'
					} inline-flex justify-center items-center font-medium rounded shadow-sm ${buttonVariantClass} ${buttonClassName} ${sizeClass} text-white hover:bg-opacity-70`}
				>
					{isLoading ? <CustomLoader size='sm' /> : renderLabel()}
				</button>
			)}

			{linkButton && (
				<a
					href={redirectUrl ? redirectUrl : 'https://app.geonode.com/signup/'}
					target='_blank'
					rel='noopener noreferrer'
					className={`inline-flex ${
						linkWidth ? linkWidth : ''
					} justify-center items-center ${sizeClass} font-medium rounded shadow-sm ${buttonVariantClass} ${buttonClassName} ${
						textColor ? textColor : 'text-white'
					} hover:bg-opacity-70`}
				>
					{isLoading ? <CustomLoader size='sm' /> : renderLabel()}
				</a>
			)}
		</div>
	);
};

export default GeoButton;
