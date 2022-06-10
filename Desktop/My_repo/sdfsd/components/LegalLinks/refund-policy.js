import React from 'react';
import Navigation from '../Navigation/index';
import { hubspotService } from '@services/index';

export default function RefundPolicyPage() {
	return (
		<div className='bg-gray-50 px-5'>
			<Navigation />
			<div className='mx-auto pt-12 pb-24 md:pb-28 lg:pb-32 px-4 sm:pt-16 sm:px-6 lg:px-4 font-fontFamily-body'>
				<div className='max-w-4xl mx-auto p-4 sm:p-10 lg:p-24 text-lg text-subtle-400 bg-white'>
					<h1 className='font-bold text-4xl mb-12 text-center text-black'>
						Refund Policy
					</h1>
					<p className='mb-12'>
						Geonode users are only allowed one account per person. Any duplicate
						account/s linked to any refund request/s may be void if a previous
						subscription for the service exists.
					</p>
					<h2 className='mb-6 text-black text-2xl font-bold'>
						Residential Proxies Refund Policy
					</h2>
					<p className='mb-6'>
						Subscriptions paid on a recurring basis can be cancelled at any
						time. However, if you do not cancel your subscription before the
						next bill, please contact our Customer Support team for refund
						purposes.
					</p>
					<p className='mb-6'>
						A refund will be issued if Geonode has not fulfilled its promise.
					</p>
					<p className='mb-6'>
						If your refund is approved, access to your proxy subscription will
						cease immediately (cancellations with no refund will have access
						until the end of the current billing period).
					</p>
					<p className='mb-6'>
						We do offer pro-rata refunds for upgrades and some changes to
						subscriptions, please contact our{' '}
						<span
							className='text-link-200 cursor-pointer'
							onClick={() => hubspotService.openWidget()}
						>
							customer service
						</span>{' '}
						for more information.
					</p>
					<p>
						Didn't find your answer?{' '}
						<a href='/contact' target="_blank" className='text-link-200 cursor-pointer'>
							Contact us here
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
