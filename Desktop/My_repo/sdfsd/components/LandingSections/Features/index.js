import React, { useState } from 'react';
import mockedData from '../../../mocks2';

export default function FeaturesSection() {
	const getFeatures = mockedData.features.map((useCase, index) => {
		const { title, body, link, icon } = useCase;
		return (
			<div key={index}>
				<Feature title={title} body={body} icon={icon} />
			</div>
		);
	});
	return (
		<div className='max-w-screen-xl mx-auto pt-32 px-4'>
			<h2 className='text-primary-300 text-base leading-6 font-semibold tracking-wide uppercase mb-4'>
				Features
			</h2>
			<h3 className='text-4xl font-bold tracking-tight leading-10'>
				Strong infrastructure with robust support
			</h3>
			<div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 gap-x-10 gap-y-12'>
				{getFeatures}
			</div>
		</div>
	);
}

const Feature = ({ icon, title, body }) => {
	return (
		<div>
			<div>
				<span className='flex items-center justify-center h-12 w-12 rounded-md'>
					{icon}
				</span>
			</div>
			<div className='mt-6'>
				<h3 className='text-base font-bold leading-6 text-subtle-800'>
					{title}
				</h3>
				<p className='mt-2 text-base font-helvetica text-subtle-600'>{body}</p>
			</div>
		</div>
	);
};
