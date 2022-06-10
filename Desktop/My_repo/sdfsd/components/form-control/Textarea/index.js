import React from 'react';

const variantType = {
	primary: 'bg-white text-secondary-100 border-gray-100 focus:border-gray-100',
	secondary: 'bg-background-code text-support1-base border-subtle-700 focus:border-subtle-700',
};

const GeoTextarea = props => {
	const { label, placeholder, name = 'textarea', value, inputProps, variant = 'primary', error = '', required = false } = props;

	const variantClass = variantType[variant];
	const hasErrorClass = !error || error === '' ? 'test' : 'border-error-300 focus:border-error-300';

	return (
		<div>
			{label && (
				<label htmlFor="describeSituationMessage" className="block text-sm text-left font-medium text-gray-700">
					{label}
				</label>
			)}
			<div className="relative flex">
				<textarea
					{...inputProps}
					placeholder={`${placeholder}${required ? '*' : ''}`}
					name={name}
					rows={3}
					className={`${variantClass} ${hasErrorClass} py-2 px-3 border shadow-sm text-sm rounded-md w-full outline-none ring-0 focus:ring-0`}
				/>
			</div>
			{error && (
				<div className="text-red-500 text-xs pt-1.5">
					<span>{error}</span>
				</div>
			)}
		</div>
	);
};

export default GeoTextarea;
