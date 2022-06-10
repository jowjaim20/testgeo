import React from 'react';
import GeoButton from '../../Button';
import Lottie from 'react-lottie';
import { CodeBlock, atomOneDark } from 'react-code-blocks';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { documentationCode } from '../../ApiCodeGenerator/codes';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ApiIntegration from '../../ApiIntegration';
import { ArrowCircleDownIcon, GlobeLocatorIcon, ViewTimelineIcon, SimpleAuthenticationIcon, MultiLanguageIcon, AdvanceProxyIcon } from '@shared/svgIcons';

import animation1 from '../../../lotties/animation1.json';
import animation2 from '../../../lotties/animation2.json';
import animation3 from '../../../lotties/animation3.json';
import animation4 from '../../../lotties/animation4.json';
import animation5 from '../../../lotties/animation5.json';
import styles from '../Home/home.module.scss';

const features = [
	{
		key: 1,
		id: 'animation-timelineIcon',
		icon: ViewTimelineIcon,
		title: 'Unlimited scraping without data cap',
		description: 'No data caps on several subscriptions to give you the tools and flexibility you need to succeed.',
		options: {
			loop: true,
			autoplay: true,
			animationData: animation4,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice',
			},
		},
	},
	{
		key: 2,
		id: 'animation-globeSelectorIcon',
		icon: GlobeLocatorIcon,
		title: 'Human support & superb user experience',
		description: 'Live chat assistance, best-in-class user dashboard and extensive documentation ensure hassle-free operation',
		options: {
			loop: true,
			autoplay: true,
			animationData: animation2,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice',
			},
		},
	},
	{
		key: 3,
		id: 'animation-arrowCircleDownIcon',
		icon: ArrowCircleDownIcon,
		title: 'Built to scale',
		description: 'Geonode proxies adapt to any project need, support many protocols and are easily managed and integrated',
		options: {
			loop: true,
			autoplay: true,
			animationData: animation1,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice',
			},
		},
	},
];

const apiFeature = [
	{
		key: 1,
		icon: SimpleAuthenticationIcon,
		id: 'animation-stackIcon',
		title: 'Simple authentication',
		description: 'Quickly authenticate API calls with user/pass or IP whitelist',
		options: {
			loop: true,
			autoplay: true,
			animationData: animation5,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice',
			},
		},
	},
	{
		key: 2,
		icon: MultiLanguageIcon,
		id: 'animation-dashCircleIcon',
		title: 'Multi-language support',
		description: 'Geonode API plays nice with many common languages such as PHP, Python, .Net, Java, JavaScript, C/C++, and C#',
		options: {
			loop: true,
			autoplay: true,
			animationData: animation3,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice',
			},
		},
	},
	{
		key: 3,
		icon: AdvanceProxyIcon,
		id: 'animation-dashCircleIcon',
		title: 'Advanced Proxy Control',
		description: 'Fine-tune your proxies to suit your needs. Auto-replace, rotating interval, geo-targeting, ISP-targeting, and many other customization options available',
		options: {
			loop: true,
			autoplay: true,
			animationData: animation3,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice',
			},
		},
	},
];

const LiveProxy = () => {
	return (
		<div
			className={`${styles.liveProxyBlock} max-w-screen-xl m-auto text-gray-50 pb-24 
			px-4 relative mb-6 sm:pb-52 lg:pb-64 md:mb-12 
			pt-32 lg:pt-96 lg:pt-72`}
		>
			<div className="space-y-16 sm:space-y-32 mb-20">
				<ApiIntegration />
				<div className="">
					<div className="lg:bg-secondary-300 rounded-lg lg:p-12">
						<div className="grid gap-8 lg:grid-cols-3 lg:gap-32">
							{features.map(feature => (
								<div key={feature.key}>
									<dt>
										<div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
											{/* {feature.icon} */}
											<Lottie id={feature.id} options={feature.options} height={64} width={48} title="desktopAnimation" />
										</div>
										<p className="mt-2 text-lg leading-6 font-medium text-gray-50 mb-2">{feature.title}</p>
									</dt>
									<dd className="text-subtle-300 text-base leading-6 font-normal">{feature.description}</dd>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="relative mt-24 lg:mt-32 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
					<div className="relative col-span-1">
						<h3 className="text-3xl leading-9 font-bold">Try Geonode's developer-friendly API</h3>

						<p className="mt-4 max-w-3xl text-left text-lg leading-7 text-subtle-300 mb-4">Geonode's efficient API allows for straightforward integration with any application</p>

						<GeoButton label="Get started" linkButton />

						<dl className="mt-10 space-y-10">
							{apiFeature.map(item => (
								<div className="relative" key={item.key}>
									<dt>
										<div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">{item.icon}</div>
										<p className="ml-16 text-lg leading-6 font-medium text-gray-50">{item.title}</p>
									</dt>
									<dd className="mt-2 ml-16 text-base leading-6 font-normal text-subtle-300">{item.description}</dd>
								</div>
							))}
						</dl>
					</div>

					<div className="col-span-1 mt-10 relative lg:mt-0" aria-hidden="true">
						<DocumentationCodeBlocks />
					</div>
				</div>
			</div>
		</div>
	);
};

const codeBlocksCustomStyle = {
	backgroundColor: '#0D1020',
	minHeight: '380px',
	overflowX: 'unset',
	fontFamily: 'Roboto Mono',
	fontSize: '14px',
};

const DocumentationCodeBlocks = () => {
	return (
		<div className="code-blocks-container w-full">
			<div className="hidden lg:block bg-background-code rounded w-full h-full pt-8 px-5">
				<div className="border-b border-background-high">
					<PerfectScrollbar style={{ maxHeight: 380 }}>
						<CodeBlock
							customStyle={{ ...codeBlocksCustomStyle }}
							text={documentationCode}
							theme={atomOneDark}
							language="javascript"
							showLineNumbers={true}
							// wrapLines
						/>
					</PerfectScrollbar>
				</div>
				<div className="relative py-8">
					{/* <div className='mb-4'>
						<span className='text-lg leading-6 font-medium text-gray-50 mb-2'>
							Documentation
						</span>
						<p className='text-base leading-6 font-normal text-subtle-300'>
							Interactively implement global customer service after efficient
							infrastructures. Proactively underwhelm competitive niches for
							client-based networks. Professionally incentivize.
						</p>
					</div> */}

					<div className="">
						<a href="https://help.geonode.com/" target="_blank" rel="noopener noreferrer" className="text-base leading-6 font-medium text-support2-base">
							Read the docs
							<span className="ml-1">
								<ArrowForwardIcon fontSize="small" />
							</span>
						</a>
					</div>
				</div>
			</div>
			<div className="block lg:hidden">
				<GeoButton label="Read the docs" linkButton variant="secondary" redirectUrl="https://help.geonode.com/" />
			</div>
		</div>
	);
};

export default LiveProxy;
