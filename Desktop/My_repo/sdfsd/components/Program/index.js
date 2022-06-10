import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import PageHeader from '../PageHeaderV2';
import Companies from '../Companies';
import AlternatingSection from '../AlternatingSection';
import UseCases from '../LandingSections/UseCases';
import DarkSection from '../DarkSection';
import GeoButton from '../Button';
import UseCasesCover from '@public/images/backgrounds/features-bg.jpg';
import headerBg from '@public/images/backgrounds/header-bg.jpg';

import BackgroundLines from '../BackgroundLines';

const features = [
	{
		id: 1,
		name: 'Large Proxy Pool',
		description:
			'With over 2 Million unique IPs, we offer a large vareity of proxies you can choose from.',
	},
	{
		id: 2,
		name: 'High Success Rate',
		description:
			'Our proxies are resilient and can handle a high load of traffic.',
	},
	{
		id: 3,
		name: 'High Uptime',
		description:
			'Run your operations using our proxies  for long periods of without experiencing significant downtime.',
	},
	{
		id: 4,
		name: 'Code Generator For API',
		description:
			'We provide API wrappers for any language or platform that your stack is based on.',
	},
	{
		id: 5,
		name: 'Unlimited Bandwidth',
		description:
			'Several plans offer no data caps so you can keep scraping without limits.',
	},
	{
		id: 6,
		name: 'Instant Access',
		description:
			'No more frustration getting started. Geonode offers instant activation of your proxies upon payment.',
	},
	{
		id: 7,
		name: 'High Anonymity',
		description:
			'Our well-encrypted proxy network allows you to use automated software to visit websites or complete tasks. ',
	},
	{
		id: 8,
		name: 'In-house Rotation',
		description:
			'Rotation via preset values in the dashboard or via API. Flexible rotation time from 1 second to 30 minutes.',
	},
];

const ProgramTemplate = (props) => {
	const { header = [], alternatingData = [], featureHeader } = props;
	return (
		<div>
			<section
				className='relative'
				style={{
					width: '100%',
					height: '100%',
					backgroundImage: `url(${headerBg})`,
					backgroundSize: 'cover',
				}}
			>
				<PageHeader>
					<div>
						<div className='relative'>
							<div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
							<div className='max-w-screen-xl mx-auto'>
								<div className='relative sm:rounded-2xl sm:overflow-hidden'>
									<div className='absolute inset-0'>
										<img
											className='w-full object-cover'
											src={header.background}
											alt='People working on laptops'
											style={{ height: '100%' }}
										/>
										<div className='absolute inset-0 bg-primary-500 mix-blend-multiply' />
									</div>
									<div className='relative py-16 sm:py-24 lg:py-32 pl-5 pr-5'>
										<h1 className='text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
											<span className='block text-white'>
												{header.title.main}
											</span>
											<span className='block text-support2-base'>
												{header.title.sub}
											</span>
										</h1>
										<p className='mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl'>
											{header.titleSupportText}
										</p>
										<div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
											<div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
												<GeoButton
													linkButton
													label='Purchase full plan'
													linkWidth='w-full'
												/>
												<GeoButton
													linkButton
													label='Start trial for $7'
													variant='secondary'
													linkWidth='w-full'
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<Companies showHead />
					</div>
				</PageHeader>
			</section>

			<DarkSection>
				<div className='relative pb-52' style={{ overflow: 'hidden' }}>
					<div
						className='absolute darkbg h-full'
						style={{
							overflow: 'visible',
							transform: 'skewY(-6deg)',
							height: '99%',
							top: '-120px',
						}}
					>
						<BackgroundLines />
					</div>
					<div
						className='absolute w-full h-full'
						style={{
							overflow: 'visible',
							transform: 'skewY(-6deg)',
							transformOrigin: '26% 0',
							height: '95px',
							bottom: '74px',
							background:
								'linear-gradient(89.57deg, #7C3AED 0.02%, #4F09C6 99.94%)',
						}}
					></div>

					<div className='relative max-w-screen-xl m-auto py-20 lg:py-40 text-gray-50 pb-32 lg:pb-64 px-6'>
						{alternatingData && (
							<div className='mb-20 lg:mb-32'>
								<AlternatingSection dataSection={alternatingData} />
							</div>
						)}

						<div className=''>
							<FeatureContent
								features={features}
								featureHeader={featureHeader}
							/>
						</div>
					</div>
				</div>
			</DarkSection>

			<section
				style={{
					backgroundImage: `url(${UseCasesCover})`,
					backgroundPosition: 'center',
					marginTop: '-250px',
					backgroundSize: 'cover',
					paddingTop: '118px',
				}}
			>
				<div className='py-40'>
					<UseCases />
				</div>
			</section>
		</div>
	);
};

const FeatureContent = (props) => {
	const { features, featureHeader } = props;
	return (
		<div className='mx-auto pt-16 lg:pt-24 lg:grid lg:grid-cols-3 lg:gap-x-8'>
			<div>
				<h2 className='text-base leading-6 font-semibold text-subtle-300 uppercase tracking-wide'>
					Features
				</h2>
				<p className='mt-2 text-3xl font-bold text-support1-base'>
					{featureHeader.title}
				</p>
				<p className='mt-4 text-lg text-subtle-300'>
					{featureHeader.description}
				</p>
			</div>
			<div className='mt-12 lg:mt-0 lg:col-span-2'>
				<dl className='space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8'>
					{features.map((feature) => (
						<div key={feature.id} className='relative'>
							<dt>
								<CheckIcon
									className='absolute h-6 w-6 text-green-500'
									aria-hidden='true'
								/>
								<p className='ml-9 text-lg leading-6 font-medium text-support1-base'>
									{feature.name}
								</p>
							</dt>
							<dd className='mt-2 ml-9 text-base leading-6 font-normal text-subtle-300'>
								{feature.description}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
};

export default ProgramTemplate;
