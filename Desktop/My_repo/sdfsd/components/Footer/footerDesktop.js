import Link from 'next/link';
import { footerLinks, mobileFooterLinks } from './enums';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { NewTabIcon } from '@shared/svgIcons';
import topRotatingProxy from '@public/images/homepage/big-badge.svg';
import logo from '@public/images/logos/geonode.svg';
import { FreeBusinessTrial } from '../LandingSections/Home/trialBusinessForm';

const scrollToTop = () => {
	if (window) {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}
};

const FooterDeskTop = () => {
	const router = useRouter();
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		router.events.on('routeChangeComplete', scrollToTop);
		return () => {
			router.events.off('routeChangeComplete', scrollToTop);
		};
	}, [router.events]);

	return (
		<div style={{ fontFamily: 'Inter' }} className="flex justify-between flex-col lg:flex-row">
			<div className="mb-14 lg:mr-8">
				<div className="mb-8 flex justify-center lg:justify-start">
					<img src={logo} alt="logo" width={153} height={86} />
				</div>
				<div className={`flex items-center justify-center font-medium text-gray-700`}>
					<div className="cursor-pointer w-56	">
						<a href="https://truely.com/rotating-proxies" target="_blank" rel="noopener noreferrer">
							<img src={topRotatingProxy} alt="Truely top rotating proxy" className="shadow-sm rounded-lg overflow-hidden" />
						</a>
					</div>
				</div>
			</div>

			<div className="hidden sm:grid grid-cols-2 gap-x-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 w-full text-subtle-300 justify-between">
				{footerLinks.map((item, idx) => {
					return item.map(d => (
						<div key={d.title} className="mb-8 lg:mb-0">
							<div className="font-semibold tracking-wider text-ghostWhite-150 mb-4 text-sm">{d.titleLink ? <a href={d.titleLink}>{d.title}</a> : <span>{d.title}</span>}</div>
							<ul className="list-none font-medium space-y-3 lg:space-y-4 text-ghostWhite-100 text-base	">
								{d.links.map(i => {
									return (
										<li key={i.label}>
											{i.target ? (
												<>
													<a href={i.link} target="_blank" className="flex cursor-pointer" onClick={() => scrollToTop()} rel="noopener noreferrer">
														{i.label}
														<p className="ml-2">{NewTabIcon}</p>
													</a>
												</>
											) : (
												<div className="flex flex-wrap cursor-pointer ">
													{i.additionalAction ? (
														<div
															onClick={() => {
																setShowModal(true);
															}}
														>
															{i.label}
														</div>
													) : (
														<div className="flex items-center">
															<Link onClick={() => scrollToTop()} href={i.link}>
																<a>{i.label}</a>
															</Link>
														</div>
													)}
												</div>
											)}
										</li>
									);
								})}
							</ul>
						</div>
					));
				})}
			</div>

			<div className={`flex sm:hidden w-full justify-between gap-6`}>
				{mobileFooterLinks.map((item, idx) => (
					<div className="w-1/2 space-y-12" key={idx}>
						{item.label}
						{item.map((link, idx) => (
							<div className="flex flex-col text-sm leading-5 font-normal space-y-12" key={idx}>
								{link.map(d => (
									<div key={d.title}>
										<div className="font-semibold tracking-wider mb-4 text-sm">
											{d.titleLink ? <a className="text-ghostWhite-150" href={d.titleLink}>{d.title}</a> : <span className="text-ghostWhite-150">{d.title}</span>}
										</div>
										<ul className="list-none space-y-4 text-ghostWhite-100 text-base	">
											{d.links.map(i => {
												return (
													<li key={i.label}>
														{i.target ? (
															<a href={i.link} target="_blank" onClick={() => scrollToTop()} rel="noopener noreferrer">
																{i.label}
															</a>
														) : (
															<>
																{i.additionalAction ? (
																	<div
																		onClick={() => {
																			setShowModal(true);
																		}}
																	>
																		{i.label}
																	</div>
																) : (
																	<Link href={i.link} onClick={() => scrollToTop()}>
																		{i.label}
																	</Link>
																)}
															</>
														)}
													</li>
												);
											})}
										</ul>
									</div>
								))}
							</div>
						))}
					</div>
				))}
			</div>
			<div></div>
			<div>
				<FreeBusinessTrial showModal={showModal} setShowModal={setShowModal}></FreeBusinessTrial>
			</div>
		</div>
	);
};

export default FooterDeskTop;
