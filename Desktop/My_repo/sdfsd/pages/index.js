import React, { useEffect } from 'react';
import Home from '@components/LandingSections/Home';
import LiveProxy from '@components/LandingSections/LiveProxy';
import Features from '@components/LandingSections/Features';
import About from '@components/LandingSections/About';
import Faq from '@components/LandingSections/Faq';
import Packages from '@components/LandingSections/Packages';
import UseCases from '@components/LandingSections/UseCases';

import styles from '../styles/home.module.scss';
import BackgroundLines from '@components/BackgroundLines';
import GeoHead from '@components/Head';
// import Router from 'next/router';
// import { eventTrackingService } from '@services/index';

const LandingPage = () => {
	// useEffect(() => {
	// 	const handleRouteChange = (url) => eventTrackingService.GTMPageView(url);
	// 	Router.events.on('routeChangeComplete', handleRouteChange);
	// 	return () => {
	// 		Router.events.off('routeChangeComplete', handleRouteChange);
	// 	};
	// }, []);

	return (
		<>
			<GeoHead
				title="🤖 Best Proxy Server For Developers [Resi &amp; DC] - Free Trial"
				description="Unique and high quality IPs for desktop and mobile devices. With millions of rotating residential proxies in the background. Try it out 7 days for just $7"
				children={<script type="text/javascript" src="/static/cookies.js"></script>}
			/>

			<div className={`${styles.container} relative`}>
				<section className="headerContainer">
					<Home />
				</section>
				<section className="">
					<div className="relative overflow-hidden sm:overflow-visible bg-background-bg sm:bg-ghostWhite-50	">
						<div
							className={`absolute darkbg h-full hidden sm:block `}
							style={{
								overflow: 'visible',
								transform: 'skewY(-6deg)',
								height: '100%',
								top: '-135px',
							}}
						>
							<BackgroundLines />
						</div>
						<div
							className="absolute w-full h-full hidden sm:block"
							style={{
								overflow: 'visible',
								transform: 'skewY(-6deg)',
								transformOrigin: '26% 0',
								height: '62px',
								bottom: '70px',
								background: 'linear-gradient(89.57deg, #7C3AED 0.02%, #4F09C6 99.94%)',
							}}
						></div>

						<div
							className="absolute w-full h-full "
							style={{
								overflow: 'visible',
								transform: 'skewY(-6deg)',
								transformOrigin: '26% 0',
								height: '60px',
								top: '-140px',
								background: 'linear-gradient(89.57deg, #7C3AED 0.02%, #4F09C6 99.94%)',
							}}
						></div>
						<LiveProxy />
					</div>
				</section>

				<section className={`relative useCasesWrapper pt-8 ${styles.useCasesContainer}`}>
					<div className="pb-52 sm:pb-64">
						<UseCases />
					</div>
				</section>

				<section className="">
					<div className="relative">
						<div
							className={`absolute ${styles.coverage} h-full`}
							style={{
								overflow: 'visible',
								zIndex: '5',
								transform: 'skewY(-6deg)',
								height: '106%',
								top: '-100px',
							}}
						>
							<BackgroundLines />
						</div>
						<div
							className="absolute w-full h-full"
							style={{
								overflow: 'visible',
								transform: 'skewY(-6deg)',
								transformOrigin: '35% 0',
								height: '79px',
								top: '-144px',
								background: 'linear-gradient(89.57deg, #7C3AED 0.02%, #4F09C6 99.94%)',
							}}
						></div>
						<div className="overflow-hidden">
							<Packages />
							<Faq />
							<About />
						</div>

						<div
							className="absolute w-full h-full"
							style={{
								overflow: 'visible',
								transform: 'skewY(-6deg)',
								transformOrigin: '26% 0',
								zIndex: '10',
								height: '62px',
								bottom: '-147px',
								background: 'linear-gradient(89.57deg, #7C3AED 0.02%, #4F09C6 99.94%)',
							}}
						></div>
					</div>
				</section>

				<section className={`relative py-24 md:py-28 lg:py-32 ${styles.useCasesContainer}`}>
					<Features />
				</section>
			</div>
		</>
	);
};

export default LandingPage;
