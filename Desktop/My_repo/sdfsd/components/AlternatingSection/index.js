import React from 'react';
import GeoButton from '../Button';

const AlternatingSection = (props) => {
	const { dataSection = [], darkMode = false, reverse = false } = props;
	let n = reverse ? 1 : 2;

	return (
		<div className='space-y-16 sm:space-y-32'>
			{dataSection.map((item, idx) => (
				<div
					key={item.id}
					className={`flex flex-col ${
						idx % 2 ? 'md:flex-row-reverse' : 'md:flex-row'
					} items-center gap-12`}
				>
					<div className='w-full text-left'>
						<h1>
							<span className='mt-1 block text-3xl leading-8 tracking-tight font-bold lg:text-5xl'>
								<span
									className={`${
										darkMode ? 'text-secondary-100' : 'text-gray-50'
									} block `}
								>
									{item.title}
								</span>
							</span>
						</h1>
						<p className='mt-3 text-lg sm:text-base font-normal leading-7 text-subtle-300 sm:mt-5 lg:text-lg'>
							{item.description}
						</p>
						<div className='mt-8 text-left lg:mx-0'>
							<GeoButton
								linkButton
								label='Get started'
								redirectUrl={item.url}
							/>
						</div>
					</div>
					<div className='w-full relative lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
						<div className='relative mx-auto w-full rounded-lg'>
							<div className='relative block w-full rounded-lg overflow-hidden'>
								<img className='m-auto' src={item.img} alt={item.title} />
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default AlternatingSection;
