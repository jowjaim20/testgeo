import React from 'react';
import {
	GlobeAltIcon,
	LightningBoltIcon,
	ScaleIcon,
} from '@heroicons/react/outline';

import GeoButton from '../../Button';

import componentStyle from './feature.module.scss';
import styles from '../services.module.scss';

const transferFeatures = [
	{
		id: 1,
		name: 'Competitive exchange rates',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: GlobeAltIcon,
	},
	{
		id: 2,
		name: 'No hidden fees',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: ScaleIcon,
	},
	{
		id: 3,
		name: 'Transfers are instant',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: LightningBoltIcon,
	},
];

export const CustomFeature = ({ feature }) => {
	const { title, description, items } = feature;
	return (
		<div className='relative'>
			<h3 className='text-5xl leading-none font-bold text-white'>
				{title}
			</h3>
			<p
				className={`text-lg leading-7 font-normal ${styles.sectionDescriptionText}`}
			>
				{description}
			</p>

			<dl className='mt-10 space-y-10'>
				{items.map((item, idx) => (
					<div key={idx} className='relative'>
						<dt className='flex'>
							<div className='mr-5'>
								<img src={item.icon} width={48} />
							</div>
							<div className='flex flex-col'>
								<h3 className='text-lg leading-6 font-medium text-subtle-50'>
									{item.title}
								</h3>
								<p
									className={`text-base leading-6 font-normal ${componentStyle.featureItemsText}`}
								>
									{item.description}
								</p>
							</div>
						</dt>
					</div>
				))}
			</dl>
			<div className='mt-10'>
				<GeoButton
					label='Read the docs'
					linkButton
					variant='secondary'
					redirectUrl='https://help.geonode.com/'
				/>
			</div>
		</div>
	);
};
