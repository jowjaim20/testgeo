const withPlugins = require('next-compose-plugins');
const images = require('remark-images');
const optimizedImages = require('next-optimized-images');

const withMDX = require('@zeit/next-mdx')({
	extension: /\.mdx?$/,
	options: {
		mdPlugins: [images],
	},
});

module.exports = withPlugins([
	[
		withMDX,
		{
			pageExtensions: ['js', 'jsx', 'md', 'mdx'],
		},
	],
	[optimizedImages],
	{
		images: {
			disableStaticImages: true,
		},
		trailingSlash: true,

		async redirects() {
			return [
				{
					source: '/pricing-and-plans/',
					destination: '/pricing/',
					permanent: true,
				},
				{
					source: '/affiliate/',
					destination: '/affiliate-program/',
					permanent: true,
				},
				{
					source: '/use-cases/e-commerce/',
					destination: '/use-cases/ecommerce/',
					permanent: true,
				},
				{
					source: '/contact-us/',
					destination: '/contact/',
					permanent: true,
				},
				{
					source: '/how-it-works/',
					destination: 'https://help.geonode.com/faq',
					permanent: true,
				},
				{
					source: '/use-cases/seo-monitoring/',
					destination: '/use-cases/seo/',
					permanent: true,
				},
				{
					source: '/developers/',
					destination: 'https://help.geonode.com/api',
					permanent: true,
				},
				{
					source: '/knowledgebase/',
					destination: 'https://help.geonode.com/',
					permanent: true,
				},
			];
		},
	},
]);
