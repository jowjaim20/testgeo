import React, { useEffect } from 'react';

import GeoHead from '@components/Head';
import { eventTrackingService } from '@services/index';
import {
	PrimaryLogo,
	DocumentationIcon404,
	APIReferenceIcon404,
	BlogIcon404,
} from '@shared/svgIcons';
import Link from 'next/link';

import { ChevronRightIcon } from '@heroicons/react/solid';

const links = [
	{
		title: 'Documentation',
		description: 'Learn how to integrate our proxies',
		icon: DocumentationIcon404,
		url: 'https://help.geonode.com/',
		target: '_blank',
	},
	{
		title: 'API Reference',
		description: 'A complete API reference',
		icon: APIReferenceIcon404,
		url: '/developers/',
	},
	{
		title: 'Blog',
		description: 'Read our latest news and articles',
		icon: BlogIcon404,
		url: '/blog/',
		target: '_self',
	},
];

export default function ErrorPage() {
	useEffect(() => {
		eventTrackingService.on404Page();
	});
	return (
		<div className='bg-white'>
			<GeoHead title='404' description='Page not found' />

			<main className='max-w-screen-xl w-full mx-auto px-4 pb-24 md:pb-28 lg:pb-32'>
				<div className='flex-shrink-0 pt-16'>
					<div className='flex justify-center'>
						<Link href='/'>
							<a>{PrimaryLogo}</a>
						</Link>
					</div>
					{/* <img className='mx-auto h-12 w-auto' src={logo} alt='Workflow' /> */}
				</div>

				<div className='max-w-xl mx-auto pt-16 sm:pt-24'>
					<div className='text-center'>
						<p className='text-sm font-semibold text-support4-base uppercase tracking-wide'>
							404 error
						</p>
						<h1 className='mt-2 text-4xl font-bold text-secondary-base tracking-tight sm:text-5xl'>
							This page does not exist.
						</h1>
						<p className='mt-2 text-lg text-subtle-400'>
							The page you are looking for could not be found.
						</p>
					</div>
					<div className='mt-12'>
						<h2 className='text-sm font-semibold text-subtle-400 tracking-wide uppercase'>
							Popular pages
						</h2>
						<ul
							role='list'
							className='mt-4 border-t border-b border-subtle-100 divide-y divide-gray-200'
						>
							{links.map((link, linkIdx) => (
								<li
									key={linkIdx}
									className='relative py-6 flex items-start space-x-4'
								>
									<div className='flex-shrink-0'>
										<span className='flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50'>
											{link.icon}
										</span>
									</div>
									<div className='min-w-0 flex-1'>
										<h3 className='text-base font-medium text-secondary-100'>
											<span className='rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
												<a
													href={link.url}
													target={link.target}
													className='focus:outline-none'
												>
													<span
														className='absolute inset-0'
														aria-hidden='true'
													/>
													{link.title}
												</a>
											</span>
										</h3>
										<p className='text-base text-subtle-400'>
											{link.description}
										</p>
									</div>
									<div className='flex-shrink-0 self-center'>
										<ChevronRightIcon
											className='h-5 w-5 text-subtle-200'
											aria-hidden='true'
										/>
									</div>
								</li>
							))}
						</ul>
						<div className='mt-8'>
							<a href='/' className='text-base font-medium text-primary-base'>
								Or go back home<span aria-hidden='true'> &rarr;</span>
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
