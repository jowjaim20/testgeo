import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './useCase.module.scss';

const UseCase = ({ icon, title, body, link, onClick, isViolet }) => {
	return (
		<div className={styles.useCaseContainer} onClick={() => onClick(link)}>
			<div className='flex justify-between'>
				<span className={clsx('rounded-lg inline-flex ring-white')}>
					<span className={styles.icon}>{icon}</span>
				</span>
				{
					isViolet ? (
						<span
						style={{color: "#d8b1ff"}}
						className={`pointer-events-none absolute top-6 right-6 text-subtle-300 group-hover:text-lightViolet-50`}
						aria-hidden='true'
					>
						<svg
							className='h-6 w-6'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 24 24'
						>
							<path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
						</svg>
					</span>
					) : (
						<span
						className={`pointer-events-none absolute top-6 right-6 text-subtle-300 group-hover:text-lightViolet-50`}
						aria-hidden='true'
					>
						<svg
							className='h-6 w-6'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 24 24'
						>
							<path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
						</svg>
					</span>
				)}
			</div>
			<div className='mt-8'>
				<h3 className='text-xl leading-7 font-medium'>
					<a href={link} target='_blank' className='focus:outline-none'>
						{/* Extend touch target to entire panel */}
						<span className='absolute inset-0' aria-hidden='true' />
						{title}
					</a>
				</h3>
				<p className='mt-2 text-base leading-6 font-normal text-subtle-400'>
					{body}
				</p>
			</div>
		</div>
	);
};

export default UseCase;
