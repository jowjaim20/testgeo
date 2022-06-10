import React from 'react';
import map from '@public/images/about/map2.png';
import newMap from "@public/images/about/updatedMap.png"

const mockData = {
	description: '',
	stats: [
		{ title: 'Proxies', data: '2,000,000+' },
		{
			title: 'Countries around the globe',
			data: '145',
		},
		// {
		// 	title: 'Uptime',
		// 	data: '99.9%',
		// },
		// {
		// 	title: 'Happy customers',
		// 	data: '99.8%',
		// },
	],
};

const AboutSection = (props) => {
	const { showHead = false } = props;

	return (
		<div className='relative'>
			<div className='relative lg:mx-auto w-full max-w-screen-xl lg:grid lg:grid-cols-2 lg:gap-4'>
				<div className='relative z-10'>
						<h3 className='text-sm leading-5 font-semibold text-subtle-300 uppercase tracking-wide'>
						About
						</h3>
					<p className='mt-2 text-3xl font-bold text-support1-base'>
				     	We democratize access to data
					</p>
					<p className='mt-4 text-lg text-subtle-300 '>
					Geonode was started from the realization that data is becoming so important in the world and that there was definite 
					room for improvement in the proxy space. While we pride ourselves on our developer friendliness, we envision a future 
					where data collection becomes accessible to non-developers too. 
					</p>
				</div>

				<div className='hidden lg:block sm:mx-auto sm:max-w-3xl'>
					<div className='lg:inset-y-0 left-0 '>
						<img
							className='absolute left-1/2 top-1/2 transform'
							src={newMap}
							alt='world maps'
							// height={653}
							// width={1677}
							style={{
								// height: '653px',
								width: '1112px',
								maxWidth: 'none',
								transform: 'translate(0%, -35%)',
							}}
						/>
						<img src='' alt='' />
					</div>
				</div>
			</div>

			<div className='relative z-10'>
				<div className='w-full max-w-screen-xl lg:mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mt-12'>
					{mockData.stats.map((item, idx) => (
						<div className='' key={idx}>
							<div className=' leading-10 font-bold md:text-2xl md:leading-8 md:font-bold text-white mb-2'>
								<span>{item.data}</span>
							</div>
							<div className='text-base leading-6 font-medium text-subtle-400'>
								<span>{item.title}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
