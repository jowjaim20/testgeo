import React, { useEffect, useState } from 'react';
import PricingSlider from '@components/Pricing/PricingSlider';
import PageHeader from '@components/PageHeaderV2';
import mockedData from '../mocks2';
import { Pricing } from '@components/Services/Pricing';
import { planServiceService } from '../services';
import { CheckIcon } from '@heroicons/react/outline';
import { VioletCircleIcon } from '@shared/svgIcons';
import BackgroundLines from '@components/BackgroundLines';
import GeoHead from '@components/Head';
import bg from '@public/images/backgrounds/pricing-bg.png';

const ProductPage = () => {
	const [planServices, setPlanServices] = useState(null);
	useEffect(async () => {
		const services = await planServiceService.getServices();
		setPlanServices(services);
	}, []);

	return (
		<div
			className="relative"
			style={{
				backgroundSize: 'cover',
				backgroundPosition: 'top',
				backgroundImage: `url(${bg})`,
			}}
		>
			<BackgroundLines lineColor="secondary" />
			<GeoHead title="Proxy Pricing" description="Browse through various pricing options. View details and buy now starting from $47 per month! Get access to proxies from 150+ countries worldwide!" />

			<section className="relative">
				<PageHeader
					headingProps={{
						text: {
							title: 'Pricing for residential proxies',
							subTitle: 'Collect data at scale with affordable starter plans',
						},
						textAlign: 'center',
					}}
				/>
			</section>
			<section className="relative max-w-screen-xl m-auto px-4">
				{planServices && (
					<div className="hidden lg:flex relative justify-center z-10">
						<PricingSlider products={planServices} />
					</div>
				)}
			</section>

			<section className="relative max-w-screen-xl mx-auto pb-24 md:pb-28 lg:pb-32">
				<div className="relative px-4 pt-8">
					<div>
						<Pricing
							tiers={mockedData.products.pricing.tiers}
							sections={mockedData.products.pricing.sections}
							isDesignChanged={true}
							showSections={true}
							mobileTiers={mockedData.productsSlider.pricing.tiers}
							mobileSections={mockedData.productsSlider.pricing.sections}
						/>
					</div>
					<div className="max-w-screen-xl mx-auto bg-transparent pt-32">
						<div className="mb-11">
							<h2 className="text-3xl leading-8 font-extrabold tracking-tight">Residential proxies features</h2>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
							{mockedData.products.pricing.residentialProxiesFeatures.map((f, idx) => {
								return <Feature key={idx} {...f} />;
							})}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

const Feature = ({ title, description, list }) => {
	return (
		<div className="w-full">
			<div className="flex items-center bg-support1-base p-2 rounded-full mb-3">
				<span>{VioletCircleIcon}</span>
				<span className="text-lg leading-6 font-medium ml-2 text-secondary-100 pt-0.5">{title}</span>
			</div>
			<div>
				<p className="text-base leading-6 font-normal text-subtle-400">{description}</p>
			</div>
			<ul role="list" className="space-y-2 mt-6">
				{list.map(item => (
					<li key={item} className="flex">
						<div>
							<CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
						</div>
						<div>
							<span className="ml-3 text-subtle-400">{item}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProductPage;
