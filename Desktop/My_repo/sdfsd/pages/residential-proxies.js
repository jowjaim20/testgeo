import React from 'react';
import GeoButton from '@components/Button';
import PageHeader from '@components/PageHeaderV2';
import { Pricing } from '@components/Services/Pricing';
import { Feature } from '@components/Services/Feature';
import UseCases from '@components/LandingSections/UseCases';

import mockedData from '../mocks2';
import styles from '../styles/home.module.scss';

import ApiIntegration from '@components/ApiIntegration';
import BackgroundLines from '@components/BackgroundLines';
import { CountriesIpsIcon, GlobalIpsIcon, InstantTransferIcon, NoHiddenFeesIcon, ProductHeaderIcon } from '@shared/svgIcons';
import { MonitoringStats } from './about';
import productHeaderImg from '@public/images/product/product.webp';
import GeoHead from '@components/Head';

const LandingPage = props => {
	return (
		<>
			<GeoHead
				title="🤖 Residential Proxies [Dedicated Rotating Shared] Trial Now"
				description="Real residential IP addresses that have no data caps or monthly transfer limits! Ideal for Data Mining/Scraping, web browsing and we don't charge per GB!"
			/>

			<div className={`${styles.container} relative`}>
				<section className="relative headerContainer2 overflow-hidden">
					<PageHeader
						headingProps={{
							text: {
								title: 'Rotating Residential Proxies',
								subTitle: <p>Unique mobile and desktop IPs, ethically sourced from real users and offered without bandwidth limits</p>,
							},
							// footer: <ResidentialHeadingFooter />,
							actions: <ButtonAction />,
							smallerPadding: 'lg:pt-10',
						}}
						addClass="pb-8"
						leftImg={
							<div>
								<img className="w-full" src={productHeaderImg} alt="Product Header image" />
							</div>
						}
						// footer={<Companies showHead headClass='text-subtle-300' />}
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

							<div className="py-24">
								<Pricing
									tiers={mockedData.products.pricing.tiers}
									sections={mockedData.products.pricing.sections}
									darkMode
									showHead
									mobileTiers={mockedData.products.pricing.tiers}
									mobileSections={mockedData.products.pricing.sections}
								/>
							</div>
							<div className="relative">
								<div className="flex flex-col gap-16 sm:gap-32">
									{mockedData.products.features.map((feature, idx) => {
										return (
											<div key={idx} className={`flex flex-col justify-center lg:justify-start w-full gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
												<div className="w-full lg:w-9/12">
													<Feature feature={feature} />
												</div>
												<div className="w-full hidden lg:block">
													<span className="flex justify-center">{feature.icon}</span>
												</div>
											</div>
										);
									})}
								</div>
								<div className="text-gray-50 pt-32 pb-8 hidden lg:block">
									<ApiIntegration />
								</div>
							</div>
						</div>
					</div>
					<div className="max-w-screen-xl mx-auto pt-16 sm:pt-32 pb-32 sm:pb-40">
						<div className="text-gray-50 w-full flex justify-center lg:justify-end ">
							<MonitoringStats />
							{/* <div className='w-full lg:w-full flex lg:space-x-16 flex-col lg:flex-row'>
									<div className='w-full'>
										<img src={monitoringStats} className='mb-9 lg:mb-0' />
									</div>
									<div className='w-full'>
										<CustomFeature
											feature={mockedData.products.customFeature}
										/>
									</div>
								</div> */}
						</div>
					</div>
				</section>
				<section>
					<div>
						<UseCases />
					</div>
				</section>
			</div>

			{/* <style jsx>{`
				.pricing {
					width: 100%;
					background: rgb(21,29,46);
					background: -moz-linear-gradient(0deg, rgba(21,29,46,1) 0%, rgba(30,40,63,1) 27%, rgba(34,45,72,1) 63%, rgba(17,24,40,1) 100%);
					background: -webkit-linear-gradient(0deg, rgba(21,29,46,1) 0%, rgba(30,40,63,1) 27%, rgba(34,45,72,1) 63%, rgba(17,24,40,1) 100%);
					background: linear-gradient(0deg, rgba(21,29,46,1) 0%, rgba(30,40,63,1) 27%, rgba(34,45,72,1) 63%, rgba(17,24,40,1) 100%);
				},
			`}</style> */}
		</>
	);
};

const ButtonAction = () => {
	return (
		<div className="flex">
			<GeoButton label="Get started for only $7" className="mr-6" linkButton />
		</div>
	);
};

// const ResidentialHeadingFooter = () => {
// 	return (
// 		<div className={`flex items-center `}>
// 			<div className='mr-5'>
// 				<img src={people} alt='people-rating' />
// 			</div>
// 			<div className={`text-subtle-500 font-medium text-sm mr-8`}>
// 				<span className=''>+ 902 reviewed Excelent</span>
// 			</div>
// 			{/* <div className={`mr-3 rating-status text-subtle-500 font-bold`}>
// 			<span>Excelent</span>
// 		</div> */}
// 			<div className='mr-3 font-bold'>
// 				<img src={stars} alt='stars-rating' />
// 			</div>
// 			<div>
// 				<img src={trustPilot} alt='trust-pilot' />
// 			</div>
// 		</div>
// 	);
// };

const mockdata = [
	{
		id: 1,
		icon: GlobalIpsIcon,
		title: '2.5M+',
		description: 'Our large, top-of-the-line residential IP address pool is perfect for your most ambitious operations. We guarantee high uptime and secure connections.',
	},
	{
		id: 2,
		icon: CountriesIpsIcon,
		title: '150+ Countries',
		description: 'Target by city or region, as wide or as narrowly as your operation demands.',
	},
	{
		id: 3,
		icon: NoHiddenFeesIcon,
		title: 'No hidden fees',
		description: 'Transparent pricing. The premium package is paid per gigabyte, and the private plan is paid by batches of ports.',
	}, //This "unmetered" needs to be asked!!
	{
		id: 4,
		icon: InstantTransferIcon,
		title: 'Instant transfers',
		description: 'We removed the frustration of starting up. Our packages get you up and running in minutes. Test with us for seven days before making your final purchase',
	},
];

const PricingFeatureSection = () => {
	return (
		<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10">
			{mockdata.map(d => (
				<div className="relative" key={d.id}>
					<dt className="mb-2 flex items-center">
						<span>{d.icon}</span>
						<p className="text-lg leading-6 font-medium text-support1-base ml-2">{d.title}</p>
					</dt>
					<dd className="mt-2 text-base leading-6 font-normal text-subtle-300">{d.description}</dd>
				</div>
			))}
		</dl>
	);
};

export default LandingPage;
