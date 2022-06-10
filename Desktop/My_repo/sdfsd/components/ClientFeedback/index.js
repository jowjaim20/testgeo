import React from 'react';
import { WorkcationWhiteIcon } from '@shared/svgIcons';
import bg from '@public/images/programs/education_bg.png';

const data = {
	message:
		'We are really happy with Geonode and the proxies they provide. Getting started was quick, and the quality of residential IP’s top level.',
	name: 'Sally Chilvers',
	position: 'Sr. Data Analyst Bellamy Research',
};

const ClientFeedback = (props) => {
	const {
		bgImage = bg,
		companyLogo = WorkcationWhiteIcon,
		info = data,
	} = props;
	return (
		<div className='relative sm:rounded-2xl sm:overflow-hidden text-white'>
			{/* <div className='absolute inset-0'>
				<img
					className='w-full object-cover'
					src={bgImage}
					alt='People working on laptops'
					style={{ height: '100%' }}
				/>
				<div className='absolute inset-0 bg-subtle-300 mix-blend-multiply' />
			</div>
			<div className='relative'>
				<div className='flex justify-start p-8 sm:p-16'>
					<div className='lg:w-1/2 lg:max-w-lg'>
						<div className='mb-8'>{companyLogo}</div>

						<div className='text-xl sm:text-2xl leading-8 font-medium text-white mb-6'>
							<p>“{info.message}”</p>
						</div>

						<div className='text-base leading-6 font-medium'>
							<div>
								<span>{info.name}</span>
							</div>
							<div>
								<span>{info.position}</span>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default ClientFeedback;
