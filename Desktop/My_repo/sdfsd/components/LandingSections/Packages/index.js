import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import { ArrowRightIcon } from '@heroicons/react/solid';
import mockedData from '../../../mocks2';
import styles from './packages.module.scss';
import GeoButton from '../../Button';

export default function Packages() {
	return (
		<div
			className={`${styles.packages} max-w-screen-xl mx-auto px-4 pt-4 sm:pt-16 lg:pt-24 z-10`}
		>
			<div className='w-full'>
				<div className='relative'>
					<div className='flex flex-col lg:flex-row lg:items-center justify-start w-full text-left'>
						<h2 className='text-4xl leading-10 font-normal lg:font-semibold text-white lg:leading-none lg:text-6xl'>
							Packages
						</h2>
						<div
							className={`text-4xl leading-10 font-normal lg:text-5xl lg:leading-none lg:font-light lg:bg-support4-100 text-support2-base lg:py-3 lg:px-8 lg:ml-6`}
							style={{
								borderRadius: 38,
							}}
						>
							<p className=''>Trial service for $7 for 7 days</p>
						</div>
					</div>
					<div className='mt-5 lg:mt-6 w-full'>
						<p
							className={`max-w-2xl text-xl leading-7 font-normal text-subtle-100`}
						>
							Geonode offers proxies ethically sourced from real end-user
							devices from across the globe as well as scalable datacenter
							proxies without connection- or IP-limits
						</p>
					</div>
				</div>

				<div className='mt-16 grid lg:grid-cols-2 place-items-center gap-12'>
					{mockedData.packages.map((p) => (
						<div
							key={p.title}
							className='relative bg-white border border-subtle-200 rounded-2xl shadow-sm flex flex-col'
							style={{ maxWidth: 470 }}
						>
							<div className='flex-1 mt-5 p-8'>
								<h3 className=' text-3xl leading-8 font-bold tracking-tight'>
									{p.title}
								</h3>
								<p className='absolute top-0 py-1.5 transform -translate-y-1/2'>
									{p.icon}
									{/* <img src={dummyCircle} /> */}
								</p>
								<p className='mt-6 text-subtle-500'>{p.description}</p>
								<p className='text-xs leading-4 font-medium tracking-wide mt-5'>
									WHAT'S INCLUDED
								</p>
								<ul role='list' className='mt-6 space-y-2'>
									{p.includeds.map((item) => (
										<li key={item} className='flex'>
											<div>
											<CheckIcon
												className='flex-shrink-0 w-6 h-6 text-green-500'
												aria-hidden='true'
											/>
											</div>
											<div className='ml-3 text-subtle-500'>{item}</div>
										</li>
									))}
								</ul>
							</div>
							<div
								className={`bg-support1-300 flex justify-center items-center ${styles.actions} rounded-b-2xl`}
							>
								{p.available ? (
									<div className='flex w-full justify-center flex-col px-8'>
										<GeoButton
											label='Try Now'
											linkButton
											buttonClassName='w-full'
										/>

										<a
											href='/residential-proxies/'
											className='flex m-4 justify-center items-center'
										>
											<span className='text-subtle-900 text-base leading-6 font-normal mr-1'>
												See pricing
											</span>
											<ArrowRightIcon className='h-4 w-4 text-subtle-900' />
										</a>
									</div>
								) : (
									<div className=''>
										<span className='text-lg leading-6 font-medium'>
											Coming soon
										</span>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
