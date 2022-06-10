import React from 'react';
import mockedData from '../../mocks2';
import overlay from '@public/images/pictures/Overlay.png';
import face from '@public/images/pictures/face.png';
import PageHeader from '../PageHeaderV2';

export default function ArticlePage() {
	return (
		<div className='relative'>
			<PageHeader noContent noBackground></PageHeader>
			<section className='max-w-screen-xl mx-auto px-4 mt-16'>
				<div className='flex flex-col-reverse	sm:flex-col'>
					<div className='my-8 flex items-center justify-start sm:justify-center'>
						<div className='flex-shrink-0'>
							<a href={mockedData.blogPostTemplate[0].author.href}>
								<span className='sr-only'>
									{mockedData.blogPostTemplate[0].author.name}
								</span>
								<img
									className='h-10 w-10 rounded-full'
									src={mockedData.blogPostTemplate[0].author.imageUrl}
									alt=''
								/>
							</a>
						</div>
						<div className='ml-3'>
							<p className='text-sm font-medium text-gray-900'>
								<a
									href={mockedData.blogPostTemplate[0].author.href}
									className='hover:underline'
								>
									{mockedData.blogPostTemplate[0].author.name}
								</a>
							</p>
							<div className='flex space-x-1 text-sm text-gray-500'>
								<time>{mockedData.blogPostTemplate[0].date}</time>
								<span aria-hidden='true'>&middot;</span>
								<span>{mockedData.blogPostTemplate[0].readingTime} read</span>
							</div>
						</div>
					</div>
					<div>
						<p className='text-sm pt-12 mb-2 sm:hidden font-medium text-purple-600'>
							<a href='' className='hover:underline'>
								Category
							</a>
						</p>
						<div className='block text-3xl text-start sm:text-center leading-10 font-bold tracking-tight text-gray-900 sm:text-4xl mb-8'>
							JavaScript for Beginners
						</div>
						<div className='max-w-3xl text-xl text-gray-500 leading-8 text-start mx-auto font-medium'>
							Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
							At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
							vitae feugiat egestas ac. Diam nulla orci at in viverra
							scelerisque eget. Eleifend egestas fringilla sapien.
						</div>
					</div>
				</div>
			</section>
			<section className='max-w-screen-xl mx-auto px-4 pt-14 pb-36'>
				<div className='relative mx-auto  pb-20'>
					<div className='md:px-12 mb-7'>
						<img className='w-full rounded-lg' src={overlay} alt='moutains' />
					</div>
					<div className=' max-w-3xl text-lg leading-8 font-normal prose prose-indigo prose-lg text-gray-500 mx-auto'>
						<div className='mb-16'>
							<p className='mb-6'>
								Faucibus commodo massa rhoncus, volutpat.{' '}
								<strong className='text-black'>Dignissim</strong> sed{' '}
								<strong className='text-black'>eget risus enim</strong>. Mattis
								mauris semper sed amet vitae sed turpis id. Id dolor praesent
								donec est. Odio penatibus risus viverra tellus varius sit neque
								erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim
								sed eget risus enim.{' '}
								<a href='#' className='text-purple-400 font-medium underline'>
									Mattis mauris semper
								</a>{' '}
								sed amet vitae sed turpis id.
							</p>

							<ul role='list' className='list-disc list-inside space-y-3 mb-6'>
								<li>Quis elit egestas venenatis mattis dignissim.</li>
								<li>
									Cras cras lobortis vitae vivamus ultricies facilisis tempus.
								</li>
								<li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
							</ul>
							<p className=''>
								Quis semper vulputate aliquam venenatis egestas sagittis quisque
								orci. Donec commodo sit viverra aliquam porttitor ultrices
								gravida eu. Tincidunt leo, elementum mattis elementum ut nisl,
								justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
								Amet, duis sed elit interdum dignissim.
							</p>
						</div>

						<div className='mb-16'>
							<h2 className='mb-8 font-bold leading-10 text-black text-3xl'>
								From beginner to expert in 30 days
							</h2>

							<p className='mb-7'>
								Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
								consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
								vitae interdum mauris enim, consequat vulputate nibh. Maecenas
								pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
								enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
								turpis ipsum eu a sed convallis diam.
							</p>

							<blockquote className='mb-7 border-l-4 border-gray-200'>
								<div className='text-black italic font-medium ml-5'>
									“Sagittis scelerisque nulla cursus in enim consectetur quam.
									Dictum urna sed consectetur neque tristique pellentesque.
									Blandit amet, sed aenean erat arcu morbi.”
								</div>
							</blockquote>

							<p className='mb-8'>
								Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
								risus enim. Mattis mauris semper sed amet vitae sed turpis id.
								Id dolor praesent donec est. Odio penatibus risus viverra tellus
								varius sit neque erat velit.
							</p>
							<figure>
								<img
									className='w-full rounded-lg'
									src={face}
									alt=''
									width={1310}
									height={873}
								/>
								<figcaption className='mt-4 text-base leading-6 text-gray-500'>
									Sagittis scelerisque nulla cursus in enim consectetur quam.
								</figcaption>
							</figure>
						</div>

						<div className='mb-24'>
							<h2 className='mb-8 font-semibold text-black text-3xl'>
								Everything you need to get up and running
							</h2>
							<p className='mb-6'>
								Purus morbi dignissim senectus mattis{' '}
								<a href='#' className='text-purple-400 font-medium underline'>
									adipiscing
								</a>
								. Amet, massa quam varius orci dapibus volutpat cras. In amet eu
								ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
								viverra ridiculus non molestie. Gravida quis fringilla amet eget
								dui tempor dignissim. Facilisis auctor venenatis varius nunc,
								congue erat ac. Cras fermentum convallis quam.
							</p>
							<p className=''>
								Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
								risus enim. Mattis mauris semper sed amet vitae sed turpis id.
								Id dolor praesent donec est. Odio penatibus risus viverra tellus
								varius sit neque erat velit.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
