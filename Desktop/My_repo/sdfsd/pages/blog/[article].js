import PageHeader from '@components/PageHeaderV2';
import GeoHead from '@components/Head';
import BlogHeader from '@components/Blog/Header';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import usericon from '@public/images/usericon.png';
import ShareBlog from '@components/Blog/ShareBlog';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export async function getStaticPaths() {
	// const { data: blog } = await axios.get(`https://strapi-cms.geonode.com/api/blogposts`);
	const { data: blog } = await axios.get(`https://strapi-cms.geonode.com/api/blogpostv2s`);

	const paths = blog.data.map(post => ({
		params: {
			article: `${post.attributes.slug}`,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	// const { data: blog } = await axios.get(`https://strapi-cms.geonode.com/api/blogposts?filters[slug][$eq]=${params.article}`);

	const { data: blog } = await axios.get(`https://strapi-cms.geonode.com/api/blogpostv2s?filters[slug][$eq]=${params.article}`);

	return { props: { blog: blog.data[0] }, revalidate: 20 };
}

const LandingPage = ({ blog }) => {
	const blogSections = blog.attributes.blogSections.split(',');
	const router = useRouter();
	const [ogUrl, setOgUrl] = useState('');
	const [domain, setDomain] = useState('');

	useEffect(() => {
		const host = window.location.host;
		const baseUrl = `https://${host}`;

		setOgUrl(`${baseUrl}${router.asPath}`);
		setDomain(host);
	}, [router.asPath]);

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://geonode.com/blog/${blog.attributes.slug}/`,
		},
		headline: blog.attributes.title,
		image: blog.attributes.blogImageHeader,
		author: {
			'@type': 'Person',
			name: blog.attributes.authorName,
		},
		publisher: {
			'@type': 'Organization',
			name: '',
			logo: {
				'@type': 'ImageObject',
				url: '',
			},
		},
		datePublished: blog.attributes.publishedAt,
		dateModified: blog.attributes.updatedAt,
	};

	return (
		<div className="bg-transparent ">
			<GeoHead
				title={blog.attributes.metaTitle}
				description={blog.attributes.metaDescription}
				schema={JSON.stringify(schema)}
				ogImage={blog.attributes.previewImage}
				ogType="website"
				ogUrl={ogUrl}
				domain={domain}
			/>
			<div className={`relative mx-auto border-r border-l border-support1-base`}>
				<section>
					<PageHeader noContent noBackground />
				</section>

				<section className="max-w-screen-xl pt-2 pb-48 m-auto md:pt-16 ">
					<div className="blog-grid">
						<div className="relative py-16 pb-16 mx-4 bg-transparent rounded-lg blog-grid-content">
							{blog?.attributes?.publishedDate && <div className="py-6 text-sm font-semibold leading-7 text-center md:hidden text-primary-600">{blog?.attributes?.publishedDate}</div>}

							<BlogHeader title={blog.attributes.title} />

							<div className="flex items-center justify-center mb-16">
								<div className="text-lg text-center md:w-1/2">{blog?.attributes?.previewDescription}</div>
							</div>
							{blog.attributes.blogImageHeader && (
								<picture className="w-full mb-16 bg-background-high">
									<source media="(max-width:768px)" srcSet={blog.attributes.previewImage}></source>
									<img src={blog.attributes.blogImageHeader} className="block object-cover" />
								</picture>
							)}

							<div className="gap-16 grid-col">
								<div className="">
									<div className="hidden mt-16 mb-8 md:flex">
										<div className="flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
											<img className="object-cover w-10 h-10" src={blog.attributes.authorImageUrl ? blog.attributes.authorImageUrl : usericon} />
										</div>
										<div className="flex flex-col ml-4">
											<div className="text-sm font-medium text-gray-900">{blog.attributes.authorName}</div>
											<div className="text-sm font-normal text-gray-500 ">20 Jan 2022</div>
										</div>
									</div>
									<div className="flex-col hidden gap-3 py-8 border-t border-b border-gray-200 md:flex">
										<p className=" mb-0.5 text-primary-600">Table of Contents</p>
										{blogSections.map(
											(blogSection, index) =>
												blogSection && (
													<div key={index} className="text-base font-medium text-gray-500 ">
														<a href={`#${blogSection}`}>{blogSection}</a>
													</div>
												)
										)}
									</div>
									<div className="flex gap-2 pt-6 pb-12 mb-6 border-t border-b border-gray-200 md:hidden">
										<span className=" py-0.5 px-2.5 rounded-full text-sm text-primary-700 font-medium bg-primary-50">Design</span>
										<span className=" py-0.5 px-2.5  rounded-full text-sm  text-indigo-700 font-medium  bg-indigo-50">Research</span>
									</div>
									<p className="text-base font-semibold text-gray-500 md:hidden">Share this post</p>
									<ShareBlog ogUrl={ogUrl} />
								</div>

								<div className="flex flex-col">
									{blogSections.map(
										(blogSection, index) =>
											blogSection && (
												<div
													key={index}
													id={blogSection}
													className="mt-5 blog-content"
													style={{
														minHeight: 100,
													}}
												>
													<ReactMarkdown>{blog.attributes[`section${index + 1}`]}</ReactMarkdown>
												</div>
											)
									)}
								</div>
							</div>

							<div className="w-full px-4 mt-8 md:w-2/3 md:m-auto">
								<div className="space-y-10 text-base font-normal leading-7 text-subtle-400 blog-content">
									<ReactMarkdown>{blog.attributes.body}</ReactMarkdown>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default LandingPage;
