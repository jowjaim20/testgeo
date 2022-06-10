import React from 'react';
import Navigation from '../components/Navigation';
import FreeProxyListImg from '@public/images/freeTools/free-proxy-list.svg';
import WhatsMyIpImg from '@public/images/freeTools/what-is-my-ip.svg';
import ProxyChecker from '@public/images/freeTools/proxy-checker.svg';
import Dot from '@public/images/freeTools/dot.svg';
import GeoHead from '@components/Head';

const freeTools = [
	{
		title: 'Free proxy list',
		description: 'Thousands of free proxies to help you get started at no cost.',
		image: FreeProxyListImg,
		link: '/free-proxy-list/',
	},
	{
		title: 'What’s my IP',
		description: 'Detailed information about your IP and internet connection.',
		image: WhatsMyIpImg,
		link: '/what-is-my-ip/',
	},
	{
		title: 'Proxy checker',
		description: 'Easily bulk check proxies to see which are alive/dead.',
		image: ProxyChecker,
		link: '/proxy-checker/',
	},
];

const FreeToolsPage = () => {
	return (
		<>
		<GeoHead
		title='🤖 Free Proxy Tools [Did I get your attention?]'
		description='Residential Proxies' //This "unmetered" needs to be asked!!
	  />
		<div className="bg-background-bg">
			<div style={{ backgroundColor: '#1B1F31', width: '100%' }}>
				<div style={{paddingTop: "7px", paddingBottom: "7px"}} className="flex justify-between items-center text-support1-base max-w-screen-xl m-auto font-fontFamily-inter px-4 ">
					<div className="text-xs items-center hidden lg:flex">
						<div className="mr-2 font-medium  font-fontFamily-Inter">Network status </div>
						<div>
							<img src={Dot}></img>
						</div>
					</div>
					<div className="inline text-center md:flex">
						<div className="text-sm font-normal font-fontFamily-inter mr-2 inline">Datacenter proxies launching soon, claim your beta testing account.</div>
						<a className="text-sm font-bold text-support2-base inline-block" href="/datacenter-proxies">
							Join beta - It’s free →
						</a>
					</div>
					<a className="text-xs hidden md:flex font-medium font-fontFamily-Inter lg:w-28 justify-end" href="https://app.geonode.com/login" target="_blank">
						Log in
					</a>
				</div>
			</div>

			<div className="relative max-w-screen-xl m-auto px-4 ">
				<Navigation darkMode={true} />
				<div className="pt-24 pb-20">
					<h1 className="font-semibold text-4xl	md:text-5xl text-center pb-12" style={{ color: '#F5F6FA' }}>
						Free proxy tools
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3 lg:gap-8">
						{freeTools.map(({ title, description, link, image }) => {
							return <Tool title={title} description={description} image={image} link={link}></Tool>;
						})}
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

const Tool = ({ title, description, image, link }) => {
	return (
		<a href={link} target="_blank">
			<div className="py-12 md:py-6 lg:py-12 px-8 md:px-4 lg:px-8 bg-background-high	border border-secondary-50 rounded cursor-pointer hover:bg-primary-base">
				<h3 className="font-medium text-xl text-white mb-2">{title}</h3>
				<h5 className="mb-4 font-normal	text-sm	text-subtle-200">{description}</h5>
				<div>
					<img className="w-full lg:w-auto" src={image}></img>
				</div>
			</div>
		</a>
	);
};

export default FreeToolsPage;
