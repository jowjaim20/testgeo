import React, { useState } from 'react';
import GeoButton from '@components/Button';
import PageHeader from '@components/PageHeaderV2';
import { Pricing } from '@components/Services/Pricing';
import { Feature } from '@components/Services/Feature';
import UseCases from '@components/LandingSections/UseCases';
import { DataCenterTrial } from '@components/LandingSections/Home/dataCenterForm';

import mockedData from '../mocks2';
import styles from '../styles/home.module.scss';

import ApiIntegration from '@components/ApiIntegration';
import BackgroundLines from '@components/BackgroundLines';
import { CountriesIpsIcon, GlobalIpsIcon, InstantTransferIcon, NoHiddenFeesIcon } from '@shared/svgIcons';
import { MonitoringStats } from './about';
import productHeaderImg from '@public/images/product/datacenter-transparent.png';
import GeoHead from '@components/Head';
import sharedDatacenter from '@public/images/icons/Shared.svg';
import dedicatedDatacenter from '@public/images/icons/Dedicated.svg';
import RatatingDatacenter from '@public/images/icons/Rotating.svg';
import countries from '@public/images/product/datacenter-countries.png';

const LandingPage = props => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<GeoHead
				title="🤖 Datacenter Proxies [Dedicated Rotating Shared] Trial Now"
				description="Real residential IP addresses that have no data caps or monthly transfer limits! Ideal for Data Mining/Scraping, web browsing and we don't charge per GB!"
			/>

			<div className={`${styles.container} relative`}>
				<section className="relative mx-auto">
					<div
						className="absolute max-w-screen-xl -bottom-72 md:-bottom-36 lg:-bottom-12 bg-bottom lg:bg-right-bottom	"
						style={{
							backgroundImage: `url(${productHeaderImg})`,
							backgroundRepeat: 'no-repeat',
							height: '100%',
							width: '100%',
							left: '50%',
							transform: 'translate(-50%, 0)',
						}}
					></div>

					<PageHeader
						headingProps={{
							text: {
								title: 'Datacenter proxies',
								subTitle: <p>We offer The Largest pool of The Highest-Quality and Most Unique IPs. Say Bye-bye to Data Caps & Monthly Transfer Limits</p>,
							},
							actions: <ButtonAction setShowModal={setShowModal} />,
							smallerPadding: 'lg:pt-10',
							classNameText: 'flex flex-col items-center text-center md:items-start md:text-left',
						}}
					/>
				</section>
				<section className=" relative pb-52" style={{ overflow: 'hidden' }}>
					<div
						className="absolute darkbg h-full"
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
						className="absolute w-full h-full"
						style={{
							overflow: 'visible',
							transform: 'skewY(-6deg)',
							transformOrigin: '26% 0',
							height: '95px',
							bottom: '105px',
							background: 'linear-gradient(89.57deg, #7C3AED 0.02%, #4F09C6 99.94%)',
						}}
					></div>

					<div className="relative">
						<div className="max-w-screen-xl mx-auto pt-32 px-4">
							<div className="">
								<PricingFeatureSection />
							</div>

							<div className="w-full md:flex justify-center mt-10 hidden">
								<img src={countries}></img>
							</div>

							<div className="py-24">
								<Pricing
									tiers={mockedData.dataCenterProduct.pricing.tiers}
									sections={mockedData.dataCenterProduct.pricing.sections}
									darkMode
									showHead
									isDataCenter={true}
									mobileTiers={mockedData.dataCenterProduct.pricing.tiers}
									mobileSections={mockedData.dataCenterProduct.pricing.sections}
								/>
							</div>
							<div className="relative">
								<div className="flex flex-col gap-16 sm:gap-32">
									{features.map((feature, idx) => {
										return (
											<div key={idx} className={`flex flex-col justify-center lg:justify-start items-center w-full gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
												<div className="w-full lg:w-9/12">
													<Feature feature={feature} isDataCenter={true} />
												</div>
												<div className="w-full hidden lg:block">
													<div className="flex justify-center">
														<img src={feature.icon}></img>
													</div>
												</div>
											</div>
										);
									})}
								</div>
								<div className="text-gray-50 pt-32 pb-8 hidden lg:block">
									<ApiIntegration
										showButton={true}
										title="With our code generator, you can integrate your application to use our tools and synchronize your devices with our database. Instant implementation for all of your operations."
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="max-w-screen-xl mx-auto pt-16 sm:pt-32 pb-32 sm:pb-40">
						<div className="text-gray-50 w-full flex justify-center lg:justify-end ">
							<MonitoringStats
								title="Tired Of Getting Banned?"
								description="We have a large pool of proxies that are carefully selected and maintained to offer you smooth operations. wIth our network, you are guaranteed:"
								isDataCenter
							/>
						</div>
					</div>
				</section>
				<section>
					<div>
						<UseCases />
					</div>
				</section>
			</div>
			<DataCenterTrial showModal={showModal} setShowModal={setShowModal}></DataCenterTrial>
		</>
	);
};

const ButtonAction = ({ setShowModal }) => {
	return (
		<div className="flex">
			<GeoButton
				label="Join beta — it’s free"
				className="mr-6"
				onClick={() => {
					setShowModal(true);
				}}
			/>
		</div>
	);
};

const features = [
	{
		title: 'Dedicated Datacenter Proxies',
		icon: dedicatedDatacenter,
		description: [
			'These are the crème de la crème of Datacenter Proxies. Exclusive to you, no one else will be lowering your success rate and sharing these IPs.',
			'Access Datacenter Proxies from up to 27 countries, generous data per IP and straightforward pricing.',
		],
		items: [],
	},
	{
		title: 'Shared Datacenter Proxies',
		icon: sharedDatacenter,
		description: [
			'You can be confident these are not overloaded because we share with a maximum of three users, including you',
			'If you are looking to save your proxy expenses; however, you still require a high quality, fast and reliable service, then this is for you.',
		],
		items: [],
	},
	{
		title: 'Rotating Datacenter Proxies',
		icon: RatatingDatacenter,
		description: [
			'This service is your best option when the number of IPs you can access is critical.',
			'Get access to a large pool of IPs across 27 countries, all bundled into one rock-solid Rotating Proxy service.',
		],
		items: [],
	},
];

const mockdata = [
	{
		id: 1,
		icon: GlobalIpsIcon,
		title: '25+ Countries',
		description: 'Get better results with servers in over 25 countries.',
	},
	{
		id: 2,
		icon: CountriesIpsIcon,
		title: 'Diverse IP Pool',
		description: 'Access a diverse range of IPs from Datacenters all over the globe.',
	},
	{
		id: 3,
		icon: NoHiddenFeesIcon,
		title: 'Free IP Replacement',
		description: 'Replace your IPs once per month at no additional cost.',
	}, //This "unmetered" needs to be asked!!
	{
		id: 4,
		icon: InstantTransferIcon,
		title: 'Multi-Protocal Support',
		description: 'Route requests via HTTP, HTTPS and SOCKS5.',
	},
];

const PricingFeatureSection = () => {
	return (
		<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10">
			{mockdata.map(d => (
				<div className="relative" key={d.id}>
					<dt className="mb-2 flex items-center">
						{/* <span className=""mr-2>{d.icon}</span> */}
						<p className="text-lg leading-6 font-medium text-support1-base">{d.title}</p>
					</dt>
					<dd className="mt-2 text-base leading-6 font-normal text-subtle-300">{d.description}</dd>
				</div>
			))}
		</dl>
	);
};

export default LandingPage;
