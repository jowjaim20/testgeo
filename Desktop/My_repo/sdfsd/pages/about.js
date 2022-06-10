import React from 'react';
import { CIcon, CleanUniqueIpsIcon, FastReliableIcon, DashboardCircleIcon, RotationIcon } from '@shared/svgIcons';

import base from '@public/images/about/base.png';
import profile1 from '@public/images/about/profile1.png';
import profile2 from '@public/images/about/profile2.png';
import profile3 from '@public/images/about/profile3.png';

import monitoringStatsPic from '@public/images/about/monitoringStatistics.png';
import valueForMoney from '@public/images/about/geonodeService.png';

import PageHeader from '@components/PageHeaderV2';
import DarkSection from '@components/DarkSection';
import AboutSection from '@components/AboutSection';
import UseCases from '@components/LandingSections/UseCases';
import BackgroundFeatures from '@public/images/backgrounds/features-bg.jpg';

import BackgroundLines from '@components/BackgroundLines';
import GeoHead from '@components/Head';

import worldmap2 from '@public/images/location/worldmap2.png';
import GeoButton from '@components/Button';

const contentData = {
	valueForMoney: [
		{
			id: 1,
			name: 'Instant activation with multiple locations',
			description: 'No need to go through a lengthy vetting process. We offer turnkey proxy services for many different GEOs',
			icon: DashboardCircleIcon,
		},
		{
			id: 2,
			name: 'Unlimited scraping without data cap',
			description: 'Several plans offer data so you can scrape to your heart’s content.', //This "unmetered" inside text needs to be asked!!
			icon: CIcon,
		},
		{
			id: 3,
			name: 'In-house proxy rotation',
			description: 'Every proxy is tested for performance, and our proxy pool is  often renewed. Our in-house rotation schedule guarantees the  highest success rates.',
			icon: RotationIcon,
		},
	],
	monitoringData: [
		{
			id: 1,
			name: 'Clean and unique residential IPs',
			description: "Clean and unique residential IPs You'll be sourcing the web from a large proxy pool of real residential addresses that are constantly monitored and refreshed.",
			icon: CleanUniqueIpsIcon,
		},
		{
			id: 2,
			name: 'Fast and steady connections',
			description: 'Slow and jittery proxies are automatically replaced by fast and stable ones, ensuring a smooth and reliable data collection  experience.',
			icon: FastReliableIcon,
		},
	],
};

const dataCenter = {
	monitoringData: [
		{
			id: 1,
			name: 'Clean and Unique IPs',
			description:
				"We update our proxy list regularly to make  sure that everything is always fresh. You can be sure that our IPs are clean and that they won't cause any problems for you or your account.",
			icon: CleanUniqueIpsIcon,
		},
		{
			id: 2,
			name: 'Fast and Reliable Connections',
			description: 'Slow and unstable proxies are automatically replaced by faster more reliable ones. This is excellent for high speed crawling and scraping operations.',
			icon: FastReliableIcon,
		},
	],
};

const AboutPage = () => {
	return (
		<div className="overflow-hidden">
			<GeoHead
				title="About Us Geonode"
				description="Our mission and vision is to build tools to empower our customers to collect mission-critical web data that helps level the playing field in their industries."
			/>
			<section className="headerContainer2">
				<PageHeader>
					<Header />
				</PageHeader>
			</section>

			<DarkSection>
				<div className="relative pb-52" style={{ overflow: 'hidden' }}>
					<div
						className="absolute darkbg h-full"
						style={{
							overflow: 'visible',
							transform: 'skewY(-6deg)',
							height: '100%',
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
							bottom: '74px',
							background: 'linear-gradient(89.57deg, #7C3AED 0.02%, #4F09C6 99.94%)',
						}}
					></div>

					<div className="relative max-w-screen-xl px-4 m-auto py-16 md:py-36 text-gray-50">
						<div className="relative flex flex-col items-center md:flex-row mb-32 md:mb-24">
							<div className="w-full md:w-6/12 text-center md:text-left md:pr-8 mb-16">
								<h2 className="text-4xl leading-10 font-medium text-support1-base mb-6">Stay on top of customer support</h2>
								<p className="text-lg leading-7 font-normal text-subtle-200 mb-10">
									All our packages allow you to gather the data you need to support your business needs. Our API is easy to use and tech support is availble to you 24/7. Be several steps ahead of the
									competition by providing acccurate solutions to your customers' problems.
								</p>
								<GeoButton label="Get started" linkButton />
							</div>
							<div className="relative w-full md:w-6/12 mt-8 lg:mt-0" aria-hidden="true">
								<img className="relative px-8 sm:px-12 md:px-8 w-full mx-auto shadow-lg" src={base} alt="base" />
								<img
									className="absolute w-32 sm:w-48 md:w-44 bottom-0 right-0 transform translate-x-1 sm:-translate-x-8 md:translate-x-1 translate-y-1/3 z-10 shadow-2xl"
									src={profile1}
									alt="support customer 1"
								/>
								<img
									className="absolute w-44 sm:w-60 md:w-52 bottom-8 left-0 transform -translate-x-1 -translate-y-4/5 sm:-translate-x-1 sm:-translate-y-1/3  md:-translate-x-4 md:-translate-y-1/2 z-10 shadow-2xl"
									src={profile2}
									alt="support customer 2"
								/>
								<img
									className="absolute w-48 sm:w-72 md:w-60 top-0 right-0 transform -translate-x-10 sm:-translate-x-16 md:-translate-x-12 -translate-y-1/3 z-10 shadow-2xl"
									src={profile3}
									alt="support customer 2"
								/>
							</div>
						</div>

						<div className="relative flex justify-center">
							<div>
								<h2 className="text-center text-4xl leading-none font-bold tracking-tight text-gray-50 sm:text-5xl px-4">Scrape any website in one click</h2>
								<p className="w-full sm:w-10/12 mt-4 max-w-3xl mx-auto text-center text-xl leading-7 font-normal text-subtle-300">
									Geonode proxies are premium operational web-scraping proxies for developers and researchers. Our easy-to-use application is the perfect cheat code for web scraping success.
								</p>
							</div>
						</div>

						<div className="relative mt-12 md:mt-24 md:grid md:grid-cols-2 md:gap-12 md:items-center">
							<div className="relative px-4">
								<h3 className="text-3xl font-bold leading-9 text-gray-50 tracking-tight ">Value for money</h3>
								<p className="mt-2 text-lg leading-7 font-normal text-subtle-300">
									We offer the best value for money services. All our offers come with but are not limited to the following benefits:
								</p>
								<dl className="mt-12 space-y-11 mb-12 lg:mb-0">
									{contentData.valueForMoney.map(item => (
										<div key={item.id} className="relative">
											<dt>
												<div className="lg:absolute flex items-center justify-center h-12 w-12 text-white mb-4 lg:mb-0">
													<span className={''}>{item.icon}</span>
												</div>
												<p className="lg:ml-16 text-lg leading-6 font-medium text-gray-50">{item.name}</p>
											</dt>
											<dd className="mt-2 lg:ml-16 text-base text-subtle-300">{item.description}</dd>
										</div>
									))}
								</dl>
							</div>

							<div className="relative mt-8 lg:mt-0" aria-hidden="true">
								<img className="relative shadow-2xl w-full mx-auto" src={valueForMoney} alt="geonode-service" />
							</div>
						</div>

						<div className="relative my-16 md:my-32 lg:my-40">
							<MonitoringStats />
						</div>

						<div className="px-4">
							<AboutSection showHead />
						</div>
					</div>
				</div>
			</DarkSection>

			<section
				style={{
					backgroundImage: `url(${BackgroundFeatures})`,
					backgroundSize: 'cover',
				}}
			>
				<div>
					<UseCases />
				</div>
			</section>
		</div>
	);
};

export const MonitoringStats = ({ title, description, isDataCenter }) => (
	<div className="relative md:grid md:grid-flow-row-dense md:grid-cols-2 md:gap-12 md:items-center px-4">
		<div className="md:col-start-2 z-10">
			<div className="relative">
				<h3 className="text-2xl font-bold text-gray-50 tracking-tight sm:text-3xl">{title ? title : ' Bid goodbye to bans and blocks'}</h3>
				<p className={`mt-3 text-lg ${isDataCenter ? 'text-subtle-300' : 'text-gray-500'}`}>
					{description ? description : 'Our 2M+ pool of carefully selected and maintained proxies reduce authentication problems to a minimum'}
				</p>
			</div>
			<div>
				<dl className="mt-10 space-y-10">
					{isDataCenter
						? dataCenter.monitoringData.map(item => (
								<div key={item.id} className="relative">
									<dt>
										<div className="lg:absolute flex items-center justify-center h-12 w-12 text-white mb-4 lg:mb-0">
											<span className={''}>{item.icon}</span>
										</div>
										<p className="lg:ml-16 text-lg leading-6 font-medium text-gray-50">{item.name}</p>
									</dt>
									<dd className={`mt-2 lg:ml-16 text-base ${isDataCenter ? 'text-subtle-200' : 'text-gray-500'}`}>{item.description}</dd>
								</div>
						  ))
						: contentData.monitoringData.map(item => (
								<div key={item.id} className="relative">
									<dt>
										<div className="lg:absolute flex items-center justify-center h-12 w-12 text-white mb-4 lg:mb-0">
											<span className={''}>{item.icon}</span>
										</div>
										<p className="lg:ml-16 text-lg leading-6 font-medium text-gray-50">{item.name}</p>
									</dt>
									<dd className="mt-2 lg:ml-16 text-base text-gray-500">{item.description}</dd>
								</div>
						  ))}
				</dl>
			</div>

			{isDataCenter || (
				<div className="relative mt-8 text-left lg:mx-0">
					<a
						href="https://help.geonode.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="w-full px-4 py-2.5 flex justify-center sm:inline sm:w-auto border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-support4-100 shadow-sm"
					>
						Read the docs
					</a>
				</div>
			)}
		</div>

		<div className="relative hidden md:block">
			<img
				className="absolute shadow-2xl left-1/3 top-1/2 transform"
				src={monitoringStatsPic}
				alt="monitoring-stats"
				style={{
					// maxWidth: 'none',
					transform: 'translate(-33%, -50%)',
				}}
			/>
		</div>
	</div>
);

const Header = () => {
	return (
		<div className="relative">
			{/* <div
				className='hidden absolute lg:block'
				style={{
					backgroundImage: `url(${topLeftLines})`,
					left: '0%',
					top: '50%',
					height: '220px',
					position: 'absolute',
					width: '70%',
					backgroundRepeat: 'no-repeat',
					transform: 'translate(-55%, -50%)',
				}}
			></div>

			<div
				className='hidden lg:block'
				style={{
					backgroundImage: `url(${topRightLines})`,
					right: '0%',
					top: '50%',
					height: '220px',
					position: 'absolute',
					width: '70%',
					backgroundRepeat: 'no-repeat',
					transform: 'translate(55%, -50%)',
				}}
			></div>

			<div
				className='hidden lg:block'
				style={{
					backgroundImage: `url(${bottomLeftLines})`,
					left: '0%',
					top: '50%',
					height: '220px',
					position: 'absolute',
					width: '75%',
					backgroundRepeat: 'no-repeat',
					transform: 'translate(-51%, 48%)',
				}}
			></div>

			<div
				className='hidden lg:block'
				style={{
					backgroundImage: `url(${bottomRightLines})`,
					right: '0%',
					top: '50%',
					height: '220px',
					position: 'absolute',
					width: '75%',
					backgroundRepeat: 'no-repeat',
					transform: 'translate(58%, 48%)',
				}}
			></div> */}

			<div className="flex flex-col">
				<div className="text-center md:w-9/12 lg:w-9/12 mx-auto ">
					<div className="text-3xl leading-10 font-bold md:text-5xl md:leading-none md:font-bold text-primary-unknown mb-5">
						<h1>Data collection made easy</h1>
					</div>
					<div className="text-lg leading-6 md:text-2xl md:leading-8 font-normal text-subtle-400">
						<p>
							Geonode wants to democratize access to global data. We provide you with the tools you need to grow your business with accurate, real-time data. We simplify the process so that you can
							focus on delivering value to your customers.
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col text-center w-full mx-auto py-16">
				<div className="flex justify-center">
					<img className="w-full" src={worldmap2} alt="geonode-profile" />
				</div>
			</div>

			{/* <div className={`flex flex-col md:flex-row items-center gap-12`}>
				<div className='w-full text-left'>
					<h1>
						<span className='mt-1 block text-4xl leading-10 font-medium tracking-tight'>
							<span className='block text-background-high'>
								Customer service
							</span>
						</span>
					</h1>
					<p className='mt-3 text-lg font-normal leading-7 text-subtle-400 sm:mt-5 sm:text-xl lg:text-lg'>
						Our API is easy to use and comes with extensive documentation.
						Customer service is available 24/7 and ready to support you every
						step of the way, no matter your level of experience or expertise.
						You'll be up and running in no time.
					</p>
					<div className='mt-8 text-left lg:mx-0'>
						<GeoButton label='Get started' linkButton />
					</div>
				</div>
				<div className='w-full relative lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
					<div className='relative mx-auto w-full rounded-lg'>
						<div className='relative block w-full bg-transparent rounded-lg overflow-hidden text-secondary-100'>
							<img
								className='w-full'
								src={customerSupport}
								alt='customer support'
							/>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default AboutPage;
