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

export default function GeoCheckbox(props) {
	const { label, name = '', inputProps, variant = 'primary', size = 'md', message = {}, checked, onChange } = props;

	const variantClass = variantType[variant];
	const sizeStyle = sizes[size];
	const hasError = Object.keys(message).length === 0 ? '' : '';

	return (
		<div className="relative ">
			<div className="flex items-center">
				<div className="flex items-center">
					<input
						aria-describedby={name}
						name={name}
						type="checkbox"
						checked={checked}
						onChange={val => onChange(val)}
						{...inputProps}
						className={`h-5 w-5 focus:ring-0 ring-offset-0 focus:ring-offset-0 focus:border-gray-300 text-primary-base border-gray-300 rounded`}
					/>
				</div>
				<div className="ml-3 text-sm">
					<label htmlFor="comments" className="font-medium text-secondary-50">
						{label}
					</label>
				</div>
			</div>
			{Object.keys(message).length !== 0 && (
				<div className="text-red-500 text-xs pt-1.5">
					<span>{message.text}</span>
				</div>
			)}
		</div>
	);
}
