import React, { useCallback, useState, useRef, useEffect } from 'react';
import mockedData from '../../mocks2';
import axios from 'axios';

import PageHeader from '../PageHeaderV2';
import BackgroundLines from '../BackgroundLines';
import useInfiniteScroll from '../../utils/useInfiniteScroll';
import searchIcon from '../../public/images/icons/search_icon.svg';
import usericon from '@public/images/usericon.png';
import { useRouter } from 'next/router';

const posts2 = mockedData.allBlogs.filter((post, idx) => idx != 0);

export default function BlogPage() {
	const [searchQuery, setSearchQuery] = useState('');
	const [lastItem, setLastItem] = useState(0);
	const [blogs, setBlogs] = useState([]);
	const [loading, setIsLoading] = useState(false);
	const router = useRouter();
	console.log({ basePath: router.basePath });

	useEffect(() => {
		setIsLoading(true);
		// axios.get(`https://strapi-cms.geonode.com/api/blogposts?pagination[page]=1&pagination[pageSize]=200`).then(res => {
		// 	setBlogs(res.data.data);
		// 	setIsLoading(false);
		// });

		axios.get(`https://strapi-cms.geonode.com/api/blogpostv2s`).then(res => {
			// console.log(res.data.data[0].attributes.blogSections.split(','));
			console.log(res);
			setBlogs(res.data.data);
			setIsLoading(false);
		});
	}, []);

	const { blogPost, hasMore } = useInfiniteScroll(searchQuery, blogs, lastItem);
	// const date = new Date(blogPost.attributes.Date);

	const observer = useRef();
	const lastBlogPostElement = useCallback(
		node => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting && hasMore) {
					setLastItem(prevState => prevState + 15);
				}
			});

			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);

	const handleArticleSearch = useCallback(e => {
		setSearchQuery(e.target.value);
		setLastItem(0);
	}, []);

	return (
		<div className="bg-contact relative">
			<PageHeader noContent noBackground></PageHeader>
			<section className="hidden max-w-screen-xl mx-auto px-4 mt-8 md:mt-16 mb-14 md:mb-20">
				<div className="flex relative items-center flex-col md:flex-row">
					<div className="flex-1 flex flex-col justify-center mb-8">
						<div className="item-center justify-between pr-4">
							<h3 className="leading-8 md:leading-10 font-bold text-gray-900 text-2xl lg:text-4xl">
								<a href={`/blog/${mockedData.allBlogs[0].href}`}>{mockedData.allBlogs[0].title}</a>
							</h3>

							<p className="mt-6 text-lg leading-7 font-normal text-gray-500 mb-10 max-w-lg">{mockedData.allBlogs[0].description}</p>
							<p className="text-sm font-medium text-purple-600">
								<a href={`/blog/${mockedData.allBlogs[0].href}`} className="hover:underline px-4 py-2 rounded-md" style={{ border: '1px solid #D1D5DB' }}>
									Read more →
								</a>
							</p>
						</div>
					</div>
					<div className="flex-shrink-0">
						<img className="h-48 w-full md:max-w-md object-cover rounded-xl" src={mockedData.featuredArticleImg} alt="" />
					</div>
				</div>
			</section>
			<section className="flex justify-center items-center mb-14">
				<div className="flex flex-col">
					<h2 className="flex flex-col justify-center items-center">
						<span className="text-base font-semibold text-primary-base">Geonode blog</span>
						<span className="mt-3 text-4xl  text-gray-900 md:text-5xl font-semibold text-center">Resources and insights</span>
					</h2>
					<p className="mt-6 font-Inter text-lg md:text-xl text-secondary-50 text-center">The latest news, interviews, technologies, and resources</p>
				</div>
			</section>

			<section className="max-w-screen-xl mx-auto px-4">
				<div className={`relative`}>
					<div className="flex justify-center items-center w-full">
						<div className="relative w-full  md:w-80">
							<img className="absolute top-3 left-3" src={searchIcon} alt="Search" />

							<input value={searchQuery} onChange={handleArticleSearch} class="shadow rounded-lg pl-10 border border-gray-100 w-full  md:w-80 " type="text" placeholder="Search for article" />
						</div>
					</div>

					<div>
						<div className="mt-16 mb-9 mx-auto grid gap-y-12 md:gap-y-24 gap-x-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
							{blogPost.map((post, index) => {
								const date = post.attributes.publishedDate.split(':')[1].trim();

								if (blogPost.length === index + 1) {
									return (
										<div key={post.id} ref={lastBlogPostElement} className="flex flex-col ">
											<div className="flex-shrink-0 rounded-lg overflow-hidden">
												<img className="h-48 w-full object-cover" src={post.attributes.previewImage} alt="" />
											</div>
											<div className="flex bg-transparent pt-8 ">
												<div className="flex justify-center items-center w-8 h-8 bg-gray-400 rounded-full mr-2.5 ">
													<img className="object-cover w-8 h-8" src={post.attributes.authorImageUrl ? post.attributes.authorImageUrl : usericon} />
												</div>
												<div className="flex justify-center items-center mr-auto text-gray-900 text-sm font-medium">{post.attributes.authorName}</div>
												<div className="flex justify-center items-center font-normal text-sm text-gray-500">{date}</div>
											</div>
											<div className="flex-1 bg-transparent pt-4 flex flex-col justify-between">
												<div>
													<a href={`${post.attributes.slug}/`} className="block mt-2">
														<p className="text-xl leading-7 font-semibold text-secondary-100">{post.attributes.title}</p>
														<p className="mt-3 text-base leading-6 text-subtle-400">{post.attributes.previewDescription}</p>
													</a>
												</div>
											</div>
										</div>
									);
								} else {
									return (
										<div key={post.id} className="flex flex-col">
											<div className="flex-shrink-0 rounded-lg overflow-hidden">
												<img className="h-48 w-full object-cover" src={post.attributes.previewImage} alt="" />
											</div>
											<div className="flex bg-transparent pt-8 ">
												<div className="flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full mr-2.5 overflow-hidden">
													<img className="object-cover w-8 h-8" src={post.attributes.authorImageUrl ? post.attributes.authorImageUrl : usericon} />
												</div>
												<div className="flex justify-center items-center mr-auto text-gray-900 text-sm font-medium">{post.attributes.authorName}</div>
												<div className="flex justify-center items-center font-normal text-sm text-gray-500">{date}</div>
											</div>

											<div className="flex-1 bg-transparent pt-4 flex flex-col justify-between">
												<div>
													<a href={`${post.attributes.slug}/`} className="block mt-2">
														<p className="text-xl leading-7 font-semibold text-secondary-100">{post.attributes.title}</p>
														<p className="mt-3 text-base leading-6 text-subtle-400">{post.attributes.previewDescription}</p>
													</a>
												</div>
											</div>
										</div>
									);
								}
							})}

							{blogPost.length === 0 && !loading && (
								<div
									className="col-start-1 col-end-7 flex justify-center items-center text-gray-500"
									style={{
										height: '400px',
									}}
								>
									No search results found
								</div>
							)}
						</div>
						{loading && <div className="flex justify-center mb-16">Loading...</div>}
					</div>
				</div>
			</section>
		</div>
	);
}
