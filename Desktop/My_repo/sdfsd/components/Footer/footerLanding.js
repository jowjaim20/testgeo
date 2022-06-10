import React from 'react';
import FooterDeskTop from './footerDesktop';
import styles from './footerLanding.module.scss';
import GeoButton from '../Button';
const navigation = [
	{
		name: 'Twitter',
		href: 'https://twitter.com/geonodeproxy',
		icon: props => (
			<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M7.55016 19.75C16.6045 19.75 21.5583 12.2468 21.5583 5.74192C21.5583 5.53098 21.5536 5.31536 21.5442 5.10442C22.5079 4.40752 23.3395 3.54432 24 2.55536C23.1025 2.95466 22.1496 3.21544 21.1739 3.3288C22.2013 2.71297 22.9705 1.74553 23.3391 0.605828C22.3726 1.17862 21.3156 1.58267 20.2134 1.80067C19.4708 1.01162 18.489 0.489177 17.4197 0.314112C16.3504 0.139047 15.2532 0.321111 14.2977 0.832157C13.3423 1.3432 12.5818 2.15477 12.1338 3.14137C11.6859 4.12798 11.5754 5.23468 11.8195 6.29036C9.86249 6.19215 7.94794 5.68377 6.19998 4.79816C4.45203 3.91255 2.90969 2.6695 1.67297 1.14958C1.0444 2.2333 0.852057 3.51571 1.13503 4.73615C1.418 5.9566 2.15506 7.02351 3.19641 7.72005C2.41463 7.69523 1.64998 7.48474 0.965625 7.10598V7.16692C0.964925 8.30421 1.3581 9.40665 2.07831 10.2868C2.79852 11.167 3.80132 11.7706 4.91625 11.995C4.19206 12.1932 3.43198 12.2221 2.69484 12.0794C3.00945 13.0575 3.62157 13.913 4.44577 14.5264C5.26997 15.1398 6.26512 15.4807 7.29234 15.5013C5.54842 16.8712 3.39417 17.6142 1.17656 17.6107C0.783287 17.6101 0.390399 17.586 0 17.5385C2.25286 18.9838 4.87353 19.7514 7.55016 19.75Z"
					fill="#98A2B3"
				/>
			</svg>
		),
	},
	{
		name: 'LinkedIn',
		href: 'https://linkedin.com/company/geonode/',
		icon: props => (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
					fill="#98A2B3"
				/>
			</svg>
		),
	},
	{
		name: 'Facebook',
		href: 'https://www.facebook.com/geonodeproxy',
		icon: props => (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
					fill="#98A2B3"
				/>
			</svg>
		),
	},
];

export default function Footer() {
	return (
		<div>
			<div className="overflow-hidden bg-background-bg">
				<div style={{ fontFamily: 'Inter' }} className={`grid ${styles.footerWrapper} coverage relative`}>
					<div className="relative w-full">
						<div className="w-full max-w-screen-xl mx-auto px-4">
							<div className="block text-center mb-16 lg:mb-24 pt-16">
								<h2 style={{ lineHeight: '42px' }} className="text-2xl	md:text-3xl lg:text-4xl leading-9 font-bold text-white sm:leading-10 sm:text-4xl">
									Try packages for only $7
								</h2>
								<p className="mt-6 mx-auto leading-6 max-w-3xl text-base md:text-xl text-ghostWhite-100 font-normal">Includes unlimited access to every feature we offer. Cancel at any time!</p>
								<div className="mt-12 w-full sm:mx-auto sm:max-w-lg sm:flex justify-center">
									<div className="mt-4 w-full md:w-52 sm:mt-0 sm:ml-3">
										<GeoButton linkWidth="w-full" linkButton label="Start 7-day free trial" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={`relative w-full z-10 mb-8 md:mb-12 lg:mb-16`}>
						<div className="max-w-screen-xl mx-auto px-4">
							<FooterDeskTop />
						</div>
					</div>
					<div className="relative z-10  w-full max-w-screen-xl mx-auto py-8 md:flex md:items-center md:justify-between px-4">
						<div className="flex flex-col-reverse items-center md:flex-row justify-between border-t-2 w-full border-subtle-600 py-8">
							<div className="mt-6 md:mt-0 flex items-end text-center text-base text-ghostWhite-150">© Copyright {new Date().getFullYear()} Geonode Pte Ltd</div>
							<div className="flex justify-center text-md text-gray-400">
								<p>12 Eu Tong Sen Street #08-169, The Central, 059819. Singapore.</p>
							</div>
							<div className="flex justify-end gap-5 items-center md:order-2">
								{navigation.map(item => (
									<a key={item.name} onClick={() => scrollToTop()} href={item.href} target="_blank" rel="noopener noreferrer" className="text-subtle-400 hover:text-subtle-400">
										<span className="sr-only">{item.name}</span>
										<item.icon className="h-6 w-6" aria-hidden="true" />
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
