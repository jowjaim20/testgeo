import React, { useState, Fragment, useRef } from 'react';
import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react';
import GeoButton from '../Button';
import styles from './navigation.module.scss';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FreeBusinessTrial } from '@components/LandingSections/Home/trialBusinessForm';
import newTabIcon from '@public/images/icons/openNewTabIcon.svg';
import geoMobileLogo from '@public/images/icons/geoMobileLogo.svg';

import {
	UnmeteredIcon,
	PremiumIcon,
	PrivateIcon,
	MarketSearchIcon,
	BrandProtectIcon,
	AddVerificationIcon,
	BulbIcon,
	DemoIcon,
	DocumentIcon,
	ECommerceIcon,
	GeonodeSmallIcon,
	PhoneIcon,
	PriceComparisonIcon,
	PrimaryLogoRound,
	WhiteLogo,
	SearchEngineIcon,
	SEOMonitoringIcon,
	SocialMediaIcon,
	StockMarketIcon,
	TravelAggretionIcon,
	WebDataExtractionIcon,
	WebTestingIcon,
	WebScrapingIcon,
	SneakerBottingIcon,
	RealEstateIcon,
	CyberSecurityIcon,
	NGOIcon,
	ReviewMonitoringIcon,
	SharedDataCenterProxy,
	RotatingDataCenterProxy,
	DedicatedDataCenterProxy,
	AffiliateIcon,
} from '@shared/svgIcons';

const classNames = (...classes) => {
	return classes.filter(Boolean).join(' ');
};

const mobileNavigation = [
	{ name: 'Use cases', href: '/use-cases' },
	{ name: 'Company', href: '/about' },
	{ name: 'Pricing', href: '/pricing' },
	{ name: 'Blog', href: '/blog' },
	{
		name: 'Resources',
		target: '_blank',
		href: 'https://help.geonode.com/',
	},
	{
		name: 'Business trial',
		type: 'button',
	},
	{
		name: 'Free proxies',
		href: '/free-proxy-list/',
	},
	{
		name: 'API docs',
		target: '_blank',
		href: 'https://help.geonode.com/api',
	},
	{ name: 'Affiliate program', href: '/affiliate-program/' },
	{
		name: 'Free tools',
		href: '/tools/',
	},
	{ name: 'Contact', href: '/contact/' },
];

const dataCenterProducts = [
	{
		name: 'Dedicated',
		description: 'Proxies exclusive for you only',
		href: '/datacenter-proxies',
		icon: DedicatedDataCenterProxy,
	},
	{
		name: 'Shared',
		description: 'Shared with up to two other people',
		href: '/datacenter-proxies',
		icon: SharedDataCenterProxy,
	},
	{
		name: 'Rotating',
		description: 'New IP on every single request',
		href: '/datacenter-proxies',
		icon: RotatingDataCenterProxy,
	},
];

const freeProxyTools = [
	{
		name: 'Free proxy list',
		description: 'Thousands of free proxies to help you get started at no cost.',
		href: '/free-proxy-list',
		noIcon: true,
	},
	{
		name: 'What’s my IP',
		description: 'Detailed information about your IP and internet connection.',
		href: '/what-is-my-ip',
		noIcon: true,
	},
	{
		name: 'Proxy checker',
		description: 'Easily bulk check proxies to see which are alive/dead.',
		href: '/proxy-checker/',
		noIcon: true,
		titleIcon: newTabIcon,
	},
];

const products = [
	/* {
		name: 'Unmetered',
		description: 'Shared rotating proxies with unlimited bandwidth',
		href: '/residential-proxies',
		icon: UnmeteredIcon,
	}, */
	{
		name: 'Premium',
		description: 'Fast proxies charged per GB',
		href: '/residential-proxies',
		icon: PremiumIcon,
	},
	{
		name: 'Private',
		description: 'Private proxies charged per Port',
		href: '/residential-proxies',
		icon: PrivateIcon,
	},
];

const useCasesRoutes = [
	{
		name: 'Market research',
		description: 'Intel on your target audience, their interests, preferences and pain points',
		href: '/market-research',
		noCenter: true,
		icon: MarketSearchIcon,
	},
	{
		name: 'Price comparison',
		description: 'Gather accurate product price information from e-commerce sites',
		href: '/price-intelligence',
		noCenter: true,
		icon: PriceComparisonIcon,
	},
	{
		name: 'Search engine crawling',
		description: 'Collect public data without block or bias',
		href: '/search-engine-crawling',
		icon: SearchEngineIcon,
		noCenter: true,
	},
	{
		name: 'Brand protection',
		description: 'Be proactive about your brand reputation and nip counterfeit sellers in the bud',
		href: '/brand-protection',
		icon: BrandProtectIcon,
		noCenter: true,
	},
	{
		name: 'Ad verification',
		description: 'Check if your ads are reaching the right audience',
		href: '/ad-verification',
		icon: AddVerificationIcon,
		noCenter: true,
	},
	{
		name: 'Web testing',
		description: 'Identify vulnerabilities and ensure an optimal user experience worldwide',
		href: '/web-testing',
		icon: WebTestingIcon,
		noCenter: true,
	},
	{
		name: 'Travel aggregation',
		description: 'Collect accurate fare information from hotel and flight company websites',
		href: '/travel-aggregation',
		icon: TravelAggretionIcon,
		noCenter: true,
	},
	{
		name: 'Ecommerce',
		description: 'Track competitor inventory, pricing and collect rich product data',
		href: '/ecommerce',
		icon: ECommerceIcon,
		noCenter: true,
	},
	{
		name: 'Stock market data',
		description: 'Extract alternative financial data to get a better pulse of the market',
		href: '/stock-market-data',
		icon: StockMarketIcon,
		noCenter: true,
	},
	{
		name: 'Web data extraction',
		description: 'Scrape accurate data from around the globe without block or bias',
		href: '/web-data-extraction',
		icon: WebDataExtractionIcon,
		noCenter: true,
	},
	{
		name: 'SEO monitoring',
		description: 'Extract reliable SERP information at scale',
		href: '/seo',
		icon: SEOMonitoringIcon,
		noCenter: true,
	},
	{
		name: 'Social media',
		description: 'Mobile IPs to manage multiple accounts',
		href: '/social-media',
		icon: SocialMediaIcon,
		noCenter: true,
	},
	{
		name: 'Web scraping',
		description: 'Harvest reliable data at scale',
		href: '/web-scraping',
		icon: WebScrapingIcon,
		noCenter: true,
	},
	{
		name: 'Sneaker Botting',
		description: 'Add-to-cart, checkout, cha-ching!',
		href: '/sneaker-botting',
		icon: SneakerBottingIcon,
		noCenter: true,
	},
	{
		name: 'Real estate',
		description: 'Gather valuable data from real estate listings',
		href: '/real-estate',
		icon: RealEstateIcon,
		noCenter: true,
	},
	{
		name: 'Cyber security',
		description: 'Safeguard your clients from cyber threats',
		href: '/cyber-security',
		icon: CyberSecurityIcon,
		noCenter: true,
	},
	{
		name: 'NGOs',
		description: 'Collect information in the service of human rights',
		href: '/ngo',
		icon: NGOIcon,
		noCenter: true,
	},
	{
		name: 'Review monitoring',
		description: 'Maintain your public reputation',
		href: '/review-monitoring',
		icon: ReviewMonitoringIcon,
		noCenter: true,
	},
];

const resourcesRoutes = [
	{
		name: 'Documentation',
		description: 'Set up guides, FAQs, and API docs to help you out quickly',
		href: 'https://help.geonode.com/',
		icon: DocumentIcon,
		target: '_blank',
	},
];

const companyRoutes = [
	{
		name: 'About',
		description: null,
		href: '/about',
		icon: GeonodeSmallIcon,
	},
	{
		name: 'Demo',
		description: null,
		href: '/demo',
		icon: DemoIcon,
	},
	{
		name: 'Our mission',
		description: null,
		href: '/mission',
		icon: BulbIcon,
	},
	{
		name: 'Affiliate',
		description: null,
		href: '/affiliate-program',
		icon: AffiliateIcon,
	},
	// {
	// 	name: 'Contact',
	// 	description: null,
	// 	href: '/contact',
	// 	icon: PhoneIcon,
	// },
];

const pricingDataCenterRoutes = [
	{
		name: 'Dedicated proxies',
		description: 'Proxies exclusive for you only',
		addOn: {
			price: 4,
			measure: 'Per IP',
		},
		href: '/pricing',
		icon: DedicatedDataCenterProxy,
	},
	{
		name: 'Shared proxies',
		description: 'Shared with up to two other people',
		addOn: {
			price: 3,
			measure: 'Per IP',
		},
		href: '/pricing',
		icon: SharedDataCenterProxy,
	},
	{
		name: 'Rotating proxies',
		description: 'New IP on every single request',
		addOn: {
			price: 5,
			measure: 'Per IP',
		},
		href: '/pricing',
		icon: RotatingDataCenterProxy,
	},
];

const pricingRoutes = [
	{
		name: 'Premium residential proxies',
		description: 'Fast proxies charged per GB',
		addOn: {
			price: 14,
		},
		href: '/pricing',
		icon: PremiumIcon,
	},
	{
		name: 'Private residential proxies',
		description: 'Private proxies charged per Port',
		addOn: {
			price: 70,
		},
		href: '/pricing',
		icon: PrivateIcon,
	},
];

const Navigation = props => {
	const { darkMode } = props;
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Popover className="relative max-w-screen-xl m-auto">
				<div className="flex justify-between items-center py-4 lg:justify-start">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<Link href="/">
							<a>
								<span className="cursor-pointer">{darkMode ? WhiteLogo : PrimaryLogoRound}</span>
							</a>
						</Link>
					</div>
					<div className="-mr-2 -my-2 lg:hidden">
						<Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
							<span className="sr-only">Open menu</span>
							<MenuIcon className="h-6 w-6" aria-hidden="true" />
						</Popover.Button>
					</div>

					<Popover.Group as="nav" className="hidden lg:flex lg:gap-7">
						{webRoutes.map((route, idx) => {
							if (route?.type === 'button') {
								return <NavigationMenu darkMode={darkMode} key={idx} {...route} action={() => setShowModal(true)} />;
							}
							return <NavigationMenu darkMode={darkMode} key={idx} {...route} />;
						})}
					</Popover.Group>

					<div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
						<a href="/contact/" target="_blank" rel="noopener noreferrer" className="text-primary-base text-sm font-semibold p-3">
							Contact
						</a>
						<a href="https://app.geonode.com/signup/" target="_blank" rel="noopener noreferrer">
							<Popover.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
								Sign up
							</Popover.Button>
						</a>

						{/* <Popover.Button className='text-white hover:text-white focus:text-white group rounded-md inline-flex items-center text-base font-medium focus:outline-none px-4 py-2 bg-primary-base hover:bg-primary-base'>
						<Link href='#'>
							<span>Get started</span>
						</Link>
					</Popover.Button> */}
					</div>
				</div>

				<MobileMenu action={() => setShowModal(true)} />
				<div>
					<FreeBusinessTrial showModal={showModal} setShowModal={setShowModal} />
				</div>
			</Popover>
		</>
	);
};

const ProductFooter = () => {
	const router = useRouter();

	const onClickHandler = () => {
		router.push('/pricing/');
	};

	return (
		<div className="px-5 py-6 sm:p-8 bg-primary-50 sm:flex justify-between items-center">
			<div className="text-base leading-6 font-medium text-subtle-400">
				<span className="text-secondary-100">Pricing</span>
				{/* <div className='text-sm leading-5 font-normal mt-1'>
					<p>Empower your entire team wit</p>
				</div> */}
			</div>

			<div>
				<GeoButton onClick={onClickHandler} linkButton redirectUrl="/pricing/" label="Learn more" size="sm" />
			</div>
		</div>
	);
};

const ViweAllFooter = ({ link, label }) => {
	return (
		<div className="px-8 py-4 bg-gray-50 sm:flex justify-end items-center">
			<div>
				<GeoButton className="border border-ghostWhite-250 rounded" linkButton redirectUrl={link} label={label} size="sm" variant="transparent" textColor="text-ghostWhite-200" />
			</div>
		</div>
	);
};

const CompanyFooter = () => (
	<div className="px-5 py-6 sm:p-8 bg-gray-50 sm:grid  sm:grid-cols-1 justify-between">
		<div className="text-sm leading-6 font-medium text-subtle-800">
			<div className="text-gray-400 uppercase mb-5 font-semibold">
				<span className="font-semibold text-sm font-fontFamily-inter">LATEST FROM BLOG</span>
			</div>
			<ul>
				<li className="cursor-pointer mb-4 text-sm font-semibold">
					<Link href="/blog/top-web-scraping-companies">
						<span>Top Web Scraping Companies</span>
					</Link>
				</li>
				<li className="cursor-pointer mb-4 text-sm font-semibold">
					<Link href="/blog/how-to-use-proxies-with-google-chrome/">
						<span>How To Use Proxies With Google Chrome</span>
					</Link>
				</li>
				<li className="cursor-pointer mb-4 text-sm font-semibold">
					<Link href="/blog/how-to-use-proxies-with-youtube/">
						<span>How To Use Proxies With YouTube</span>
					</Link>
				</li>
				<li className="cursor-pointer mb-4 text-sm font-semibold">
					<Link href="/blog/how-to-use-proxies-with-safari/">
						<span>How To Use Proxies with Safari</span>
					</Link>
				</li>
				<li className="cursor-pointer mb-5 text-sm font-semibold">
					<Link href="/blog/how-to-use-proxies-with-android/">
						<span>How To Use Proxies with Android</span>
					</Link>
				</li>

				{/* <li className='cursor-pointer mb-3'>
					<Link href='/blog/article'>
						<span>What is API (Application Progamming Interface)?</span>
					</Link>
				</li>
				<li className='cursor-pointer mb-3'>
					<Link href='/blog/article'>
						<span>Python web scraping tutorial: Step-By-Step</span>
					</Link>
				</li> */}
				<li className="cursor-pointer text-indigo-600">
					<GeoButton className="border border-ghostWhite-250 rounded w-32	" linkButton redirectUrl="/blog" label="View all posts" size="sm" variant="transparent" textColor="text-ghostWhite-200" />
				</li>
			</ul>
		</div>
	</div>
);

const ResourcesFooter = () => (
	<div className="px-8 pb-6 sm:pt-2 bg-white sm:grid  sm:grid-cols-2 justify-between">
		<div className="text-sm leading-6 font-medium text-subtle-800">
			<div className="text-gray-400 uppercase mb-5 font-semibold">
				<span className="font-fontFamily-inter text-sm	font-semibold">API</span>
			</div>
			<ul className="text-sm leading-5 font-semibold text-secondary-base">
				<li className="cursor-pointer mb-3">
					<a href="https://help.geonode.com/proxy-authentication/" target="_blank" rel="noopener noreferrer">
						Authentication
					</a>
				</li>
				<li className="cursor-pointer mb-3">
					<a href="https://help.geonode.com/sticky-vs-rotating/" target="_blank" rel="noopener noreferrer">
						Sticky vs Rotating
					</a>
				</li>
				<li className="cursor-pointer mb-3">
					<a href="https://help.geonode.com/supported-protocols/" target="_blank" rel="noopener noreferrer">
						Supported protocols
					</a>
				</li>
				<li className="cursor-pointer mb-3">
					<a href="https://help.geonode.com/checking-proxy-connection/" target="_blank" rel="noopener noreferrer">
						Checking Proxy Connection
					</a>
				</li>
			</ul>
		</div>
		<div className="text-sm leading-6 font-medium text-gray-800">
			<div className="text-gray-400 uppercase mb-5 font-semibold">
				<span className="font-fontFamily-inter text-sm font-semibold	">GETTING STARTED</span>
			</div>
			<ul className="text-sm  leading-5 font-semibold text-secondary-base">
				<li className="cursor-pointer mb-3">
					<a href="https://help.geonode.com/getting-started/" target="_blank" rel="noopener noreferrer">
						Getting started
					</a>
				</li>

				<li className="cursor-pointer mb-3">
					<a href="https://help.geonode.com/what-is-a-thread/" target="_blank" rel="noopener noreferrer">
						What is thread
					</a>
				</li>
				<li className="cursor-pointer mb-3">
					<a href="https://help.geonode.com/threads-vs-ip-address-vs-ports/" target="_blank" rel="noopener noreferrer">
						Thread vs IP address vs Ports
					</a>
				</li>
				<li className="cursor-pointer mb-3">
					<a href="https://help.geonode.com/bulk-country-targeting/" target="_blank" rel="noopener noreferrer">
						Bulk country targeting
					</a>
				</li>
			</ul>
		</div>
	</div>
);

const NavigationMenu = props => {
	const router = useRouter();
	const {
		darkMode,
		col = 1,
		footer = null,
		label,
		menuList = [],
		popoverClass = 'lg:max-w-md lg:-translate-x-1/2',
		popoverStructureClass = '',
		popoverPaddingClass = '',
		basePath = '/',
		menuTitle = '',
		type = 'link',
		firstElemStyle = '',
		action = () => null,
		doubleMenu,
	} = props;
	const buttonRef = useRef(null);
	let timeout;
	const timeoutDuration = 100;
	const handleMenu = () => buttonRef?.current.click();

	const onMouseEnter = closed => {
		clearTimeout(timeout);
		closed && (timeout = setTimeout(() => handleMenu(), timeoutDuration));
	};

	const onMouseLeave = open => {
		open && (timeout = setTimeout(() => handleMenu(), timeoutDuration));
	};

	const redirectToPage = label => {
		if (label === 'Pricing') {
			router.push('/pricing/');
			return;
		}

		if (label === 'Use cases') {
			router.push('/use-cases/');
			return;
		}
	};

	const menuTextClass = darkMode
		? 'text-support1-base hover:outline-none hover:border-none focus-visible:outline-none  hover:text-support1-base focus:text-support1-base'
		: 'text-subtle-800 hover:outline-none hover:border-none focus-visible:outline-none hover:text-secondary-100 focus:text-secondary-100';

	return (
		<>
			{menuList.length === 0 ? (
				<Popover.Button className={`${menuTextClass} ${styles.btn} group font-semibold bg-transparent rounded-md inline-flex items-center text-sm focus:outline-none`}>
					{type === 'link' ? (
						<a href={basePath} target="_blank" rel="noopener noreferrer">
							{label}
						</a>
					) : (
						<span onClick={() => action()}>{label}</span>
					)}
				</Popover.Button>
			) : (
				<Popover className="relative">
					{({ open }) => (
						<div onMouseEnter={() => onMouseEnter(!open)} onMouseLeave={() => onMouseLeave(open)}>
							<Popover.Button
								ref={buttonRef}
								className={classNames(
									open ? 'text-subtle-300' : menuTextClass,
									` ${styles.btn} group font-semibold	 hover:outline-none hover:border-none focus-visible:outline-none bg-transparent rounded-md inline-flex items-center text-sm`
								)}
							>
								<span onClick={() => redirectToPage(label)}>{label}</span>
							</Popover.Button>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className={`absolute z-20 -ml-4 mt-3 transform px-2 w-screen ${popoverClass} sm:px-0 lg:ml-0 lg:left-1/2`}>
									<div className={`rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden w-full`}>
										<div className={`relative bg-white px-5 py-6 sm:p-8 ${popoverStructureClass && popoverStructureClass}`}>
											{menuTitle &&
												menuTitle.map((title, index) => {
													return (
														<div>
															<div className={`font-fontFamily-inter ${firstElemStyle && index === 1 ? firstElemStyle : ''} text-sm leading-6 font-semibold text-subtle-300 uppercase mb-5`}>
																<h3 className="text-sm font-medium flex items-center">
																	{title === 'Free tools' ? (
																		<a className="flex" href="/tools/" target="_blank">
																			{title}
																			<img className="ml-2" src={newTabIcon}></img>
																		</a>
																	) : (
																		<>{title}</>
																	)}
																</h3>
															</div>
															<div className={`grid gap-6 lg:grid-cols-${col}`}>
																{menuList[index].map(item => {
																	if (item.target === '_blank') {
																		return (
																			<a target={item.target} href={item.href} className="flex items-start divide-x cursor-pointer hover:bg-gray-50 -m-3 p-3 rounded-lg">
																				<span className={`flex flex-1 items-start rounded-lg gap-4`}>
																					<span className="flex-shrink-0 flex items-center justify-center h-10">{item.icon}</span>
																					<span className="flex flex-col gap-1">
																						<span className="block text-base font-bold text-gray-700">{item.name}</span>
																						{item.description && <span className="block text-sm font-medium text-subtle-400">{item.description}</span>}
																					</span>
																				</span>
																			</a>
																		);
																	}

																	return (
																		<Popover.Button key={item.name}>
																			<Link href={`${basePath}${item.href}`} key={item.name}>
																				<a className="flex items-center cursor-pointer hover:bg-gray-50 -m-3 p-3 rounded-lg">
																					<span className={`flex flex-1 items-center rounded-lg ${!item.noIcon && 'gap-4'} text-left ${item.addOn && 'mr-4'}`}>
																						<span className="flex-shrink-0 flex items-center justify-center h-8">{item.icon}</span>
																						<span className="flex flex-col gap-1">
																							<span className="block text-sm font-semibold text-gray-700">{item.name}</span>
																							{item.description && <span className="block text-xs font-medium text-subtle-400">{item.description}</span>}
																						</span>
																					</span>
																					{item.addOn && (
																						<span className="block text-sm text-subtle-400 font-medium pl-4 space-y-1 text-left" style={{ width: 118 }}>
																							<span>{item.addOn.measure ? item.addOn.measure : 'Starts from'}</span>
																							<span className="block">
																								<span className="text-secondary-100 text-lg font-semibold leading-6">${item.addOn.price} </span>
																								<span className="font-semibold leading-6" style={{ fontSize: 10 }}>
																									/month
																								</span>
																							</span>
																						</span>
																					)}
																				</a>
																			</Link>
																		</Popover.Button>
																	);
																})}
															</div>
														</div>
													);
												})}
											{doubleMenu || (
												<div className={`grid ${popoverPaddingClass ? 'gap-2' : 'gap-8'} lg:grid-cols-${col}`}>
													{menuList.map(item => {
														if (item.target === '_blank') {
															return (
																<a target={item.target} href={item.href} className="flex items-start divide-x cursor-pointer hover:bg-gray-50 -m-3 p-3 rounded-lg">
																	<span className={`flex flex-1 items-start rounded-lg gap-4`}>
																		<span className="flex-shrink-0 flex items-center justify-center h-10">{item.icon}</span>
																		<span className="flex flex-col gap-1">
																			<span className="block text-sm font-semibold text-background-high">{item.name}</span>
																			{item.description && <span className="block text-xs font-medium text-gray-400">{item.description}</span>}
																		</span>
																	</span>
																</a>
															);
														}

														return (
															<Popover.Button key={item.name}>
																<Link href={`${basePath}${item.href}`} key={item.name}>
																	<a className={`flex items-center divide-x cursor-pointer hover:bg-gray-50 ${popoverPaddingClass ? '-m-1 p-1' : '-m-3 p-3'}  rounded-lg`}>
																		<span className={`flex flex-1 ${item.noCenter ? 'items-start' : 'items-center'}  rounded-lg gap-4 text-left ${item.addOn && 'mr-4'}`}>
																			<span className="flex-shrink-0 flex items-center justify-center h-8">{item.icon}</span>
																			<span className="flex flex-col gap-1">
																				<span className="block text-sm font-semibold font-fontFamily-inter text-background-high">{item.name}</span>
																				{item.description && <span className="block text-xs font-normal	 text-subtle-400">{item.description}</span>}
																			</span>
																		</span>
																		{item.addOn && (
																			<span className="block text-sm text-subtle-400 pl-4 space-y-1" style={{ width: 118 }}>
																				<span>Starts from</span>
																				<span className="block">
																					<span className="text-secondary-100 text-lg font-semibold leading-6">${item.addOn.price} </span>
																					<span className="font-semibold leading-6" style={{ fontSize: 10 }}>
																						/month
																					</span>
																				</span>
																			</span>
																		)}
																	</a>
																</Link>
															</Popover.Button>
														);
													})}
												</div>
											)}
										</div>

										{footer && footer}
									</div>
								</Popover.Panel>
							</Transition>
						</div>
					)}
				</Popover>
			)}
		</>
	);
};

const MobileMenu = props => {
	const { action } = props;
	const buttonMobileRef = useRef(null);

	return (
		<Transition
			as={Fragment}
			enter="duration-200 ease-out"
			enterFrom="opacity-0 scale-95"
			enterTo="opacity-100 scale-100"
			leave="duration-100 ease-in"
			leaveFrom="opacity-100 scale-100"
			leaveTo="opacity-0 scale-95"
		>
			<Popover.Panel focus className="absolute z-30 top-0 inset-x-0 py-2 transition transform origin-top-right lg:hidden">
				<div className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
					<div className="pt-5 pb-6 px-5">
						<div className="flex items-center justify-between">
							<div className="flex justify-between w-full">
								<div>
									<img src={geoMobileLogo}></img>
								</div>
								<div>
									<GeoButton
										className="border border-ghostWhite-250 rounded mr-5"
										linkButton
										redirectUrl="https://app.geonode.com/signup"
										label="Sign up"
										size="sm"
										variant="transparent"
										textColor="text-ghostWhite-200"
									></GeoButton>
								</div>
							</div>
							<div className="-mr-2">
								<Popover.Button
									ref={buttonMobileRef}
									className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
								>
									<span className="sr-only">Close menu</span>
									<XIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>
						</div>
						<div className="mt-6">
							<nav className="grid grid-cols-1 gap-7">
								{[products, dataCenterProducts].map((menu, index) => {
									return (
										<div>
											{index === 0 ? (
												<div className="ml-3 mb-4 text-sm leading-6 font-semibold text-subtle-300 uppercase font-fontFamily-inter ">Residential Proxies</div>
											) : (
												<div className="ml-3 mb-4 text-sm leading-6 font-semibold text-subtle-300 uppercase font-fontFamily-inter ">Datacenter proxies</div>
											)}
											{menu.map(item => {
												return (
													<Link key={item.name} href={`${item.href}`}>
														<div onClick={() => buttonMobileRef?.current.click()} className="p-3 flex items-center cursor-pointer rounded-lg hover:bg-gray-50">
															{item.icon && (
																<div className="flex-shrink-0 flex justify-start h-10 w-10 rounded-md text-white">
																	<span className="h-6 w-6" aria-hidden="true">
																		{item.icon}
																	</span>
																</div>
															)}

															<div className="ml-4 text-base font-bold text-gray-700">
																<span className="block">{item.name}</span>
																<span className="block mt-1 text-xs font-medium text-gray-400">{item.description}</span>
															</div>
														</div>
													</Link>
												);
											})}
										</div>
									);
								})}
							</nav>
						</div>
					</div>
					<div className="py-6 px-5">
						<div className="grid grid-cols-2 gap-4">
							{mobileNavigation.map(item => {
								if (item.target === '_blank') {
									return (
										<a href={item.href} key={item.name} target={item.target} onClick={() => buttonMobileRef?.current.click()}>
											<span className="text-sm font-semibold text-gray-900 hover:text-gray-700 cursor-pointer">{item.name}</span>
										</a>
									);
								}
								if (item?.type === 'button') {
									return (
										<span className="text-sm font-semibold text-gray-900 hover:text-gray-700 cursor-pointer" onClick={() => action()}>
											{item.name}
										</span>
									);
								}
								return (
									<Link key={item.name} href={item.href}>
										<span className="text-sm font-semibold text-gray-900 hover:text-gray-700 cursor-pointer" onClick={() => buttonMobileRef?.current.click()}>
											{item.name}
										</span>
									</Link>
								);
							})}
						</div>
						<div className="mt-6">
							<GeoButton label="Free business trial" size="sm" onClick={action} buttonClassName="w-full h-10" />
							<GeoButton
								className="border border-ghostWhite-250 rounded mt-5 w-full text-center h-10"
								buttonClassName="h-10"
								linkButton
								redirectUrl="https://app.geonode.com/signup"
								label="Log in"
								variant="transparent"
								textColor="text-ghostWhite-200"
								size="sm"
							></GeoButton>
						</div>
					</div>
				</div>
			</Popover.Panel>
		</Transition>
	);
};

const webRoutes = [
	{
		label: 'Products',
		basePath: '',
		menuList: [products, dataCenterProducts, freeProxyTools],
		doubleMenu: true,
		menuTitle: ['Residential Proxies', 'DataCenter Proxies', 'Free tools'],
		popoverClass: 'max-w-4xl lg:-translate-x-32 flex',
		popoverStructureClass: 'grid grid-cols-3 gap-14',
	},
	{
		label: 'Use cases',
		basePath: '/use-cases',
		menuList: useCasesRoutes,
		doubleMenu: false,
		col: 3,
		footer: <ViweAllFooter link="/use-cases" label="View all use cases" />,
		popoverClass: 'lg:max-w-5xl lg:-translate-x-1/4',
	},
	{
		label: 'Pricing',
		basePath: '',
		doubleMenu: true,
		menuList: [pricingRoutes, pricingDataCenterRoutes],
		menuTitle: ['Residential Proxies', 'Datacenter proxies'],
		footer: <ViweAllFooter link="/pricing" label="View all pricing" />,
		popoverClass: 'lg:max-w-lg lg:-translate-x-1/2',
		firstElemStyle: 'mt-11',
	},
	{
		label: 'Resources',
		basePath: '/resourcesRoutes',
		doubleMenu: false,
		menuList: resourcesRoutes,
		footer: <ResourcesFooter />,
		popoverClass: 'lg:max-w-xl lg:-translate-x-1/2',
	},
	{
		label: 'Free proxies',
		doubleMenu: false,
		basePath: '/free-proxy-list/',
	},
	{
		label: 'Company',
		doubleMenu: false,
		basePath: '',
		menuList: companyRoutes,
		footer: <CompanyFooter />,
		popoverPaddingClass: true,
	},
	{
		label: 'Business trial',
		type: 'button',
	},
];

export default Navigation;
