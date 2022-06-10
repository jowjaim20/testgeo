import React from 'react';
import styles from './pageheaderV2.module.scss';
import Navigation from '../Navigation';
import clsx from 'clsx';
import dot from '@public/images/icons/dot.png';

const PageHeader = props => {
	const { headingProps, leftImg, footer, style, children, darkMode = false, noBackground = false, noContent = false, hero, addClass } = props;

	return (
		<>
      <HeadingAnnouncement />
			<header className={`${styles.container} ${addClass ? addClass : ''} max-w-screen-xl m-auto px-4`}>
				<nav>
					<Navigation darkMode={darkMode} />
				</nav>

			{noContent ? null : children ? (
				<div className="sm:py-16 lg:py-24">{children}</div>
			) : (
				<div>
					<div className={`relative py-8 sm:py-8 lg:py-0 ${headingProps.smallerPadding ? headingProps.smallerPadding : "lg:pt-28"}`}>
						<div className={`${styles.headingContainer} ${headingProps?.textAlign ? 'mx-auto max-w-screen-xl' : 'mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:gap-14 py-8 md:py-28'}`}>
							<Heading headingProps={headingProps} style={headingProps.style} />
						</div>
						<div className="sm:mx-auto sm:max-w-3xl md:px-4">
							{hero && (
								<div className="relative py-12 sm:py-16 md:py-40 z-10">
									<div className="absolute transform left-1/2 top-0 -translate-x-1/2 shadow-2xl">{hero}</div>
								</div>
							)}
							{leftImg && (
								<div className="sm:relative lg:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
									<div className={`relative sm:pl-12 sm:mx-auto sm:max-w-3xl lg:max-w-none lg:h-full`}>{leftImg}</div>
								</div>
							)}
						</div>
						</div>
						{footer && <div className="">{footer}</div>}
					</div>
				)}
			</header>
		</>
	);
};

const Heading = props => {
	const { text, actions, footer, textAlign, styles, style, classNameText } = props.headingProps;

	return (
		<div className={`${textAlign === 'center' ? `text-center` : 'text-left'} mb-8 sm:mb-16 ${classNameText}`}>
			<div className={`${styles?.headingPrimary} text-4xl font-bold md:text-5xl ${style ? style : ''} font-bold text-primary-unknown mb-6 `}>
				<h1>{text.title}</h1>
			</div>
			<div className={`text-lg sm:text-2xl text-gray-700 mb-6 lg:max-w-4xl mx-auto`}>
				<span>{text.subTitle}</span>
			</div>
			{actions && (
				<div className={clsx('actions')}>
					{actions}
					{/* <GeoButton label={} style={{ width: 211 }} /> */}
				</div>
			)}
			{footer && <div className="mt-6">{footer}</div>}
		</div>
	);
};

const HeadingAnnouncement = () => {
	return (
		<div style={{ backgroundColor: '#1B1F31', width: "100%", position: "relative" }}>
		<div style={{paddingTop: "7px", paddingBottom: "7px"}} className="flex justify-between items-center text-support1-base max-w-screen-xl m-auto font-fontFamily-inter px-4 ">
			<div className="text-xs items-center hidden lg:flex">
				<div className="mr-2 font-medium	font-fontFamily-Inter">Network status </div>
				<div>
					<img src={dot}></img>
				</div>
			</div>
			<div className="inline text-center md:flex">
				<div className="text-sm font-normal	font-fontFamily-inter mr-2 inline">
				Datacenter proxies launching soon, claim your beta testing account.
				</div>
				<a className="text-sm font-bold text-support2-base inline-block" href="/datacenter-proxies">
				  Join beta - It’s free →
				</a>
			</div>
			<a className="text-xs hidden md:flex font-medium font-fontFamily-Inter lg:w-28 justify-end" href="https://app.geonode.com/login" target="_blank">
				Log in
			</a>
		</div>
	</div>
	)
}
export default PageHeader;
