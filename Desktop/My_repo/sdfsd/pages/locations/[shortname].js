import React, { useEffect, useState } from 'react';
import { utilsService } from '../../services';
import mockData from '@mockdata/location';
import worldmap from '@public/images/location/worldmap.png';
import worldmap2 from '@public/images/location/worldmap2.png';
import random from '@public/images/location/random.png';
import rectangle from '@public/images/programs/rectangle.png';
import Features from '@components/LandingSections/Features';

import DarkSection from '@components/DarkSection';
import PageHeader from '@components/PageHeaderV2';
import GeoButton from '@components/Button';
import BackgroundLines from '@components/BackgroundLines/index';
import GeoHead from '@components/Head';
import UseCases from '@components/LandingSections/UseCases';

// This also gets called at build time
export async function getStaticPaths() {
	return {
		paths: [
			...mockData.countries.map((item, id) => ({
				params: { shortname: item.shortname },
			})),
		],
		fallback: false, // See the "fallback" section below
	};
}

export async function getStaticProps({ params }) {
	const shortname = params.shortname;
	// Pass post data to the page via props
	return { props: { shortname } };
}

const data = [
	{
		id: 1,
		title: 'Localized proxy targeting',
		description: 'Target by state or by city with fast, highly available proxies with  fewer IP bans.',
		img: rectangle,
	},
	{
		id: 2,
		title: 'Gathering data in the United States',
		description: 'Retrieve all that data you need without compromising the  anonymity, security, and stability of your connection.',
		img: rectangle,
	},
];

const Location = props => {
	const [name, setName] = useState('');
	const pageData = mockData.countries.find(item => item.shortname === props.shortname);

	useEffect(() => {
		setName(pageData.name);
		console.log(name);
	}, [pageData]);

	return (
		<div>
			<GeoHead
				title={pageData.metaTitle} //This "unmetered" needs to be asked!!
			/>
			<DarkSection>
				<div
					className="darkbg"
					// style={{
					// 	background: 'rgb(21,29,46)',
					// 	background:
					// 		'-moz-linear-gradient(0deg, rgba(21,29,46,1) 0%, rgba(30,40,63,1) 27%, rgba(34,45,72,1) 63%, rgba(17,24,40,1) 100%)',
					// 	background:
					// 		'-webkit-linear-gradient(0deg, rgba(21,29,46,1) 0%, rgba(30,40,63,1) 27%, rgba(34,45,72,1) 63%, rgba(17,24,40,1) 100%)',
					// 	background:
					// 		'linear-gradient(0deg, rgba(21,29,46,1) 0%, rgba(30,40,63,1) 27%, rgba(34,45,72,1) 63%, rgba(17,24,40,1) 100%)',
					// }}
				>
					<BackgroundLines />
					<PageHeader darkMode>
						<div className="relative flex flex-col md:flex-row items-center gap-16 py-32">
							<div className="w-full sm:w-8/12 md:text-left">
								<h1>
									<div className="mt-1 flex items-center gap-4">
										{utilsService.countryFlag(pageData.code, 48)}
										<span className="block text-4xl leading-10 font-bold text-gray-50">{pageData.name} Proxies</span>
									</div>
								</h1>
								<p className="mt-3 text-lg font-normal leading-7 text-subtle-300 sm:mt-5 md:text-xl">
									Swap IPs with a fast, reliable and anonymous {pageData.name} based proxy service, unblock the internet and protect your privacy.
								</p>
								<div className="mt-8 text-left lg:mx-0">
									<GeoButton label="Get started" linkButton size="sm" />
								</div>
							</div>
							<div className="hidden md:block w-full relative lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
								<div className="relative mx-auto w-full rounded-lg">
									<div className="relative block w-full rounded-lg overflow-hidden">
										<img className="w-full" src={worldmap} alt="world map" />
									</div>
								</div>
							</div>
						</div>
					</PageHeader>
				</div>
			</DarkSection>

			<section className="bg-white">
				<div className="max-w-screen-xl m-auto py-16 md:py-32 text-gray-50 px-4 space-y-24">
					{/* <AlternatingSection dataSection={data} darkMode reverse /> */}

					<div className="">
						<div className="w-full md:w-4/5 mx-auto text-left md:text-center mb-16">
							<div className="text-2xl leading-8 md:text-3xl md:leading-9 font-bold tracking-tight text-secondary-100 mb-4">
								<h2>Highly localized proxy targeting</h2>
							</div>
							<div className="text-base leading-6 md:text-lg md:leading-7 font-normal text-subtle-400 mb-6">
								<p>
									All our packages allow you to gather the data you need to support your business needs. Our API is easy to use and tech support is availble to you 24/7. Be several steps ahead of the
									competition by providing acccurate solutions to your customers' problems.
								</p>
							</div>
							<GeoButton linkButton label="Get started" size="sm" />
						</div>

						<div>
							<img className="w-full" src={worldmap2} alt="world map" />
						</div>
					</div>

					<div className="block md:flex items-center flex-row-reverse gap-16">
						<div className="w-full">
							<div className="text-3xl leading-9 font-bold tracking-tight text-secondary-100 mb-4">
								<h3>Getting you reliable data points {`in ${name}`}</h3>
							</div>
							<div className="text-lg leading-7 font-normal text-subtle-400 mb-6">
								<p>Retrieve all the datasets you need without compromising on anonimity, security and stability in your connections.</p>
							</div>
							<GeoButton linkButton label="Get started" size="sm" />
						</div>
						<div className="hidden md:block w-full">
							<img className="w-full" src={random} alt="unknown" />
						</div>
					</div>
				</div>
			</section>

			<section className="bg-white pb-16 md:pb-32">
				<Features />
			</section>

			<section className="bg-white">
				<UseCases />
			</section>
		</div>
	);
};

export default Location;
