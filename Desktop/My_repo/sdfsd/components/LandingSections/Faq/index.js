import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import mockedData from '../../../mocks2';

export default function Faq() {
	return (
		<div className='relative pb-8 sm:pb-32 z-10' id='faq'>
			<div className='max-w-5xl	 mx-auto pt-16 sm:pt-24 lg:pt-28 px-4'>
				<div className='mx-auto'>
					<h2 className='text-center leading-10 text-4xl font-bold text-gray-50 sm:text-4xl'>
						Frequently asked questions
					</h2>
					<dl className='mt-6 space-y-2'>
						{mockedData.faqs.map((faq) => (
							<Disclosure as='div' key={faq.question} className='p-6 bg-secondary-50' style={{border: "1px solid #4D5674"}}>
								{({ open }) => (
									<>
										<dt className='text-lg'>
											<Disclosure.Button className='text-left w-full flex justify-between items-start text-subtle-400'>
												<span className='text-lg leading-7 font-medium text-support1-base'>
													{faq.question}
												</span>

												<span className='ml-6 h-7 flex items-center'>
													<ChevronDownIcon
														className={clsx(
															open ? '-rotate-180' : 'rotate-0',
															'h-6 w-6 transform'
														)}
														aria-hidden='true'
													/>
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel as='dd' className='mt-2 space-y-2'>
											{faq.answer.map((ans, idx) => (
												<p
													key={idx}
													className='text-base leading-6 font-normal text-subtle-300'
												>
													{ans}{' '}
													{faq.link && (
															<a href={faq.link} target="_blank" className='cursor-pointer'>{faq.link}</a>
													)}
												</p>
											))}
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
