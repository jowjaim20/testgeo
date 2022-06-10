import React, { useState } from 'react';
import Lottie from 'react-lottie';
import PageHeader from '../../PageHeaderV2';
import GeoButton from '../../Button';
import styles from './home.module.scss';
import { FreeBusinessTrial } from './trialBusinessForm';

import hero from '../../../lotties/hero.json';

const Home = props => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: hero,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<div className={'text-gray-50'}>
			<PageHeader
				headingProps={{
					text: {
						title: 'Hassle-free proxies with unlimited data',
						subTitle: (
							<>
								<p className="mb-0">Geonode offers a best-in-breed user dashboard, competitive prices & real human support. Test drive our rotating residential proxy plans.</p>
							</>
						),
					}, //This "unmetered" inside the text needs to be asked!!
					actions: <ActionButton />,
					style: 'biggerFont ',
					textAlign: 'center',
				}}
				hero={
					<div className={`${styles.animationWrapper} cursor-move`}>
						<Lottie id="lottie-animation" options={defaultOptions} height={625} width={1046} title="Hassle-free proxies with unlimited data" />
					</div>
				}
			/>
		</div>
	);
};

const ActionButton = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className="flex items-center justify-center flex-col">
				<GeoButton label="Get started for only $7" buttonStyle="w-full" buttonClassName="w-full" linkButton className="mb-4 sm:mb-0 w-full sm:w-auto" />
				<div className="mt-6 font-medium flex flex-row">
					<div className="text-gray-700 mr-1">{`Are you a business? `}</div>
					<div
						className="cursor-pointer text-primary-base"
						onClick={() => {
							setShowModal(true);
						}}
					>
						Apply for free trial here
					</div>
				</div>
			</div>
			<div>
				<FreeBusinessTrial showModal={showModal} setShowModal={setShowModal}></FreeBusinessTrial>
			</div>
		</>
	);
};

export default Home;
