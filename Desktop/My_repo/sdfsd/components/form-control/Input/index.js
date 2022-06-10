import React from 'react';

const variantType = {
	primary: 'bg-white text-secondary-100 border-gray-100 focus:border-gray-100',
	secondary: 'bg-background-code text-support1-base border-subtle-700 focus:border-subtle-700',
};
const sizes = {
	sm: { paddingTop: 8, paddingBottom: 8 },
	md: { paddingTop: 9, paddingBottom: 9 },
	lg: { paddingTop: 10, paddingBottom: 10 },
};

export default function GeoInput(props) {
	const { label, placeholder = '', name = '', value, type = 'text', inputProps, variant = 'primary', size = 'md', message = {}, leftIcon = null, required = false } = props;

	const variantClass = variantType[variant];
	const sizeStyle = sizes[size];
	const hasErrorClass = Object.keys(message).length === 0 ? '' : 'border-error-400 focus:border-error-400';

	return (
		<div className="">
			{label && (
				<label htmlFor={name} className="block text-sm font-medium text-gray-50 mb-1">
					{label} {required && <span>*</span>}
				</label>
			)}

			<div className="relative flex items-center">
				{leftIcon && <span className="absolute left-3 top-1/2 transform -translate-y-1/2">{leftIcon}</span>}

				<input
					{...inputProps}
					type={type}
					name={name}
					className={`${variantClass} ${hasErrorClass} ${leftIcon ? 'pl-9' : ''} px-3 border shadow-sm block w-full text-sm rounded-md outline-none ring-0 focus:ring-0`}
					placeholder={`${placeholder}${required ? '*' : ''}`}
					style={sizeStyle}
				/>
			</div>
			{hasErrorClass && (
				<div className="text-red-500 text-xs pt-1.5">
					<span>{message.text}</span>
				</div>
			)}
		</div>
	);
}
