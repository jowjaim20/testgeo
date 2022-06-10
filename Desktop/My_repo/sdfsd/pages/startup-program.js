import React from 'react';
import Template from '@components/Program';
import statup_bg from '@public/images/programs/startup_bg.png';
import GeoHead from '@components/Head';
import fastOperations from '@public/images/programs/template-first-round.png';
import compAdvantage from '@public/images/programs/template-second-round.png';

const StartupProgram = () => {
	const header = {
		title: { main: 'Proxies that scale', sub: 'as your startup grows' },
		titleSupportText:
			"From start-up to scale-up, with Geonode's flexible plans the scraper is the limit.",
		background: statup_bg,
	};

	const alternatingSectionData = [
		{
			id: 1,
			title: 'Fast operations',
			description:
				'You can set up a dedicated, secure server on our private network to cache your data and speed up requests. This service is perfect for improving the performance of web applications or APIs.',
			img: fastOperations,
		},
		{
			id: 2,
			title: 'Competitive advantage',
			description:
				"We offer fast, secure and reliable proxies that can be used for multiple purposes - from scraping to deep-diving analysis of your competitors' SEO strategy.",
			img: compAdvantage,
		},
	];

	const featureHeader = {
		title: 'What we offer your business',
		description:
			'We offer the following features to support your business growth',
	};

	return (
		<div>
			<GeoHead title='Startup Program - ' />
			<Template
				header={header}
				alternatingData={alternatingSectionData}
				featureHeader={featureHeader}
			/>
		</div>
	);
};

export default StartupProgram;
