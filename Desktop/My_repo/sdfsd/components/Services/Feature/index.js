import React, {useState} from 'react';
import {
	AnnotationIcon,
	GlobeAltIcon,
	LightningBoltIcon,
	MailIcon,
	ScaleIcon,
} from '@heroicons/react/outline';
import { DataCenterTrial } from '@components/LandingSections/Home/dataCenterForm';


import GeoButton from '../../Button';
import { CheckCircleIcon } from '@shared/svgIcons';

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

export const Feature = ({ feature, isDataCenter }) => {
	const { title, description, items } = feature;
	const [showModal, setShowModal] = useState(false);

	return (
		<div className='relative'>
			<div className='mb-6'>
				<h3 className='text-3xl leading-9 sm:text-4xl sm:leading-10 font-bold text-white mb-6'>
					{title}
				</h3>
				{
					isDataCenter ? (
						description.map((item) => {
						return <p className="text-lg leading-7 font-normal text-subtle-300 mb-8">{item}</p>
						})
					) : (
						<p className={`text-lg leading-7 font-normal text-subtle-300`}>
						{description}
					</p>
					)
				}
			</div>
			<dl className=' space-y-2'>
				{items.map((item) => (
					<dt key={item} className='flex items-center'>
						<span>{CheckCircleIcon}</span>
						<p
							className={`ml-4 text-sm leading-5 font-semibold text-subtle-100`}
						>
							{item}
						</p>
					</dt>
				))}
			</dl>
			<div className='mt-10'>
				{title === 'Premium residential proxies' ?
					<GeoButton
						label={`${isDataCenter ? "Free Beta Testing Now Available" : "Get started"}`}
						size='sm'
						labelClassName='text-sm leading-5 font-medium p-3'
						linkButton={isDataCenter ? false : true}
						onClick={isDataCenter ? () => setShowModal(true) : () => {}}
					/>
					:
					<GeoButton
						label={`${isDataCenter ? "Free Beta Testing Now Available" : "Get started for only $7"}`}
						size='sm'
						labelClassName='text-sm leading-5 font-medium p-3'
						linkButton={isDataCenter ? false : true}
						onClick={isDataCenter ? () => setShowModal(true) : () => {}}
					/>
				}
			</div>
			<DataCenterTrial
        showModal={showModal}
        setShowModal={setShowModal}
      ></DataCenterTrial>
		</div>
	);
};
