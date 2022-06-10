import React from 'react';
import PropTypes from 'prop-types';
import styles from './customLoader.module.scss';

const sizeClasses = {
	xs: 'h-4 w-4 border-2 border-t-2',
	sm: 'h-6 w-6 border-2 border-t-2',
	md: 'h-8 w-8 border-4 border-t-4',
	lg: 'h-12 w-12 border-4 border-t-4',
};

const textSize = {
	xl: 'text-xs',
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
};

export const CustomLoader = (props) => {
	const { size = 'md', label } = props;

	const sizeClass = sizeClasses[size];
	const textSizeClass = textSize[size];

	return (
		<div className='flex justify-center items-center flex-col'>
			<div
				className={`${styles.customLoader} ease-linear rounded-full border-support1-base ${sizeClass}`}
				style={{ height: 24 }}
			></div>
			{label && (
				<span
					className={`${textSizeClass} leading-6 font-medium text-white mt-4`}
				>
					{label}
				</span>
			)}
		</div>
	);
};

CustomLoader.propTypes = {
	size: PropTypes.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
	label: PropTypes.string,
};
