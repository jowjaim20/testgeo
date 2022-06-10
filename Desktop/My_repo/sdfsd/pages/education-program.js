import React from 'react';
import GeoHead from '@components/Head';
import Template from '@components/Program';
import education_bg from '@public/images/programs/education_bg.png';
import webFiltering from '@public/images/programs/template-first-round.png';
import fastOperations from '@public/images/programs/template-second-round.png';

const EducationProgram = () => {
	const header = {
		title: { main: 'Proxies that helps', sub: 'students and teachers' },
		titleSupportText:
			'Rotating proxies to support academic research. Gather the most relevant data',
		background: education_bg,
	};

	const alternatingSectionData = [
		{
			id: 1,
			title: 'Web Filtering',
			description:
				'Our proxies offer a second layer of protection of your assets against malicious attacks. They act as firewall and web filters to ensure that data being accessed by students and other internet users is free from malware and harmful content.',
			img: webFiltering,
		},
		{
			id: 2,
			title: 'Faster Operations',
			description:
				'You can set up a dedicated, secure server on our private network to cache your data and speed up requests. This service is perfect for improving the performance of web applications or APIs.',
			img: fastOperations,
		},
	];

	const featureHeader = {
		title: 'Here is how we support Academic Excellence',
		description: 'We offer the following features to support academia',
	};

	return (
		<div>
			<GeoHead
				title='Education Program - '
				description='We have proxies that help students and teachers. Our proxies act as fire walls and web filters to ensure that data is free from harmful content'
			/>
			<Template
				header={header}
				alternatingData={alternatingSectionData}
				featureHeader={featureHeader}
			/>
		</div>
	);
};

export default EducationProgram;
