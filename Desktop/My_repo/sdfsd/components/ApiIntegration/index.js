import React from 'react';
import ApiCodeGenerator from '../ApiCodeGenerator';
import {
	CPIcon,
	DjangoIcon,
	FlutterIcon,
	JavaIcon,
	JavascriptIcon,
	NodeJsIcon,
	PhpIcon,
	PythonIcon,
} from '@shared/svgIcons';
import GeoButton from '../Button';

const logos = [
	{
		key: 1,
		logo: NodeJsIcon,
	},
	{
		key: 2,
		logo: PythonIcon,
	},
	{
		key: 3,
		logo: CPIcon,
	},
	{
		key: 4,
		logo: FlutterIcon,
	},
	{
		key: 5,
		logo: PhpIcon,
	},
	{
		key: 6,
		logo: JavaIcon,
	},
	{
		key: 7,
		logo: JavascriptIcon,
	},
	{
		key: 8,
		logo: DjangoIcon,
	},
];

const ApiIntegration = ({title, showButton}) => {
	return (
		<div className='relative max-w-screen-xl m-auto px-4 lg:px-0'>
			<div className='relative'>
				<h2 className='text-left text-3xl leading-8 font-bold tracking-tight sm:text-4xl'>
					Instant API integrations
				</h2>
				<p className='mt-4 max-w-3xl text-left text-lg leading-7 text-subtle-300 mb-4'>
					{
						title ? title : "With our code generator, you can integrate your application with our tools and synchronize your devices with our database."
					}
				</p>
				{
					showButton || (
						<GeoButton label='Get started' linkButton />
					)
				}
			</div>

			<div className='mt-12 '>
				<ApiCodeGenerator />
			</div>

			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pt-16 gap-8'>
				{logos.map((logo) => (
					<div className='m-auto' key={logo.key}>
						{logo.logo}
					</div>
				))}
			</div>
		</div>
	);
};

export default ApiIntegration;
