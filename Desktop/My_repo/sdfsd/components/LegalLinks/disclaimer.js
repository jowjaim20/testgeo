import React from 'react';
import Navigation from '../Navigation/index';

export default function DisclaimerPage() {
	return (
		<div className='bg-gray-50 px-5'>
			<Navigation />
			<div className='mx-auto pt-12 pb-24 md:pb-28 lg:pb-32 px-4 sm:pt-16 sm:px-6 lg:px-4 font-fontFamily-body'>
				<div className='max-w-4xl mx-auto p-4 sm:p-10 lg:p-24 text-lg text-subtle-400 bg-white '>
					<h1 className='font-bold text-4xl mb-12 text-center text-black'>
						Disclaimer
					</h1>
					<p className='mb-6'>
						If you require any more information or have any questions about our
						site's disclaimer, please feel free to{' '}
						<a className='text-link-200' href='/contact' target='_blank'>
							contact us.
						</a>
					</p>
					<p className='mb-6'>
						All the information on this website - {' '}
						<a href='https://geonode.com' target='_blank' className='text-link-200'>
						 https://geonode.com
						</a>{' '} - is
						published in good faith and for general information purpose only.
						Geonode PTE LTD does not make any warranties about the completeness,
						reliability, and accuracy of this information. Any action you take
						upon the information you find on this website is strictly at your
						own risk. Geonode PTE LTD will not be liable for any losses and/or
						damages in connection with the use of our website.
					</p>
					<p className='mb-6'>
						From our website, you can visit other websites by following
						hyperlinks to such external sites. While we strive to provide only
						quality links to useful and ethical websites, we have no control
						over the content and nature of these sites. These links to other
						websites do not imply a recommendation for all the content found on
						these sites. Site owners and content may change without notice and
						may occur before we have the opportunity to remove a link which may
						have gone 'bad'.
					</p>
					<p className='mb-12'>
						Please be also aware that when you leave our website, other sites
						may have different privacy policies and terms which are beyond our
						control. Please be sure to check the Privacy Policies of these sites
						as well as their "Terms of Service" before engaging in any business
						or uploading any information.
					</p>

					<h2 className='mb-6 text-black text-2xl font-bold'>Consent</h2>
					<p className='mb-12'>
						By using our website, you hereby consent to our disclaimer and agree
						to its terms.
					</p>
					<h2 className='mb-6 text-black text-2xl font-bold'>Update</h2>
					<p>
						Should we update, amend or make any changes to this document, those
						changes will be prominently posted here.
					</p>
				</div>
			</div>
		</div>
	);
}
