const useCasesLink = '/use-cases';
import mockData from '../../mocks2';
// const faqLink = '/v2#faq';
// const aboutLink = '/v2#about';
export const footerEnums = {
	products: [
		/* { label: 'Residential Unlimited', link: '/residential-proxies/' }, */
		{ label: 'Residential Premium', link: '/residential-proxies/' },
		{ label: 'Residential Private', link: '/residential-proxies/' },
		// { label: 'Datacenter Rotating USA', link: '#' },
		// { label: 'Datacenter Static USA', link: '#' },
		// { label: 'Datacenter Canada', link: '#' },
		// { label: 'Datacenter Global', link: '#' },
	],
	useCases: mockData.useCases.map(usecase => ({
		label: usecase.title,
		link: `${useCasesLink}${usecase.link}`,
	})),
	company: [
		{ label: 'About', link: '/about/' },
		{ label: 'Pricing', link: '/pricing/' },
		{ label: 'Our mission', link: '/mission' },
		{ label: 'Contact', link: '/contact/' },
		{ label: 'Blog', link: '/blog/' },
		// { label: "Press", link: "#" },
		// { label: "Ethics", link: "#" },
		// { label: "Careers", link: "#" },
		// { label: "Reviews", link: "#" },
		// { label: 'Demo', link: '/demo/' },
		{ label: 'Affiliates', link: '/affiliate-program/' },
	],
	resources: [
		{
			label: 'FAQ',
			link: '/knowledgebase/',
		},
		// { label: 'Troubleshooting', link: '#' },
		{
			label: 'API Documentation',
			link: '/developers/',
		},
		// { label: 'Free Courses', link: '#' },
		// { label: 'Tutorials', link: '#' },
		{ label: 'Integrations', link: '#' },
	],
	programs: [
		{ label: 'Affiliates', link: '/affiliate-program/' },
		{ label: 'Startup', link: '/startup-program/' },
		{ label: 'Education', link: '/education-program/' },
	],
	tools: [
		{ label: 'Free Proxy List', link: '/free-proxy-list/' },
		{ label: 'Whats My IP', link: '/what-is-my-ip/' },
		{ label: 'Proxy Checker', link: '/proxy-checker/' },
	],
	legalLinks: [
		{ label: 'Privacy Policy', link: '/privacy-policy/' },
		{ label: 'GDPR Policy', link: '/cockie-policy' },
		{ label: 'Terms and Conditions', link: '/terms-and-conditions/' },
		{ label: 'Refund Policy', link: '/refund-policy/' },
		{ label: 'Disclaimer Policy', link: '/disclaimer/' },
	],
	topLocations: [
		{ label: 'United States', link: '/locations/united-states/' },
		{ label: 'United Kingdom', link: '/locations/united-kingdom/' },
		{ label: 'Canada', link: '/locations/canada/' },
		{ label: 'Germany', link: '/locations/germany/' },
		{ label: 'India', link: '/locations/india/' },
		{ label: 'All locations', link: '/locations/' },
	],
};

export const footerLinks = [
	[
		{
			title: 'Products',
			links: [
				/* {
          label: "Residential Unlimited",
          link: "/residential-proxies/",
        }, */
				{ label: 'Residential Proxies', link: '/residential-proxies/' },
				{ label: 'Datacenter Proxies', link: '/datacenter-proxies' },
			],
		},
		// {
		// 	title: 'Programs',
		// 	links: [
		// 		{ label: 'Affiliates', link: '/affiliate-program/' },
		// 		{ label: 'Startup', link: '/startup-program/' },
		// 		{ label: 'Education', link: '/education-program/' },
		// 	],
		// },
		{
			title: 'Company',
			links: [
				{ label: 'About us', link: '/about/' },
				{ label: 'Pricing', link: '/pricing/' },
				{ label: 'Contact', link: '/contact/' },
				// { label: "Blog", link: "/blog/" },
				// { label: "Press", link: "#" },
				// { label: "Ethics", link: "#" },
				// { label: "Careers", link: "#" },
				// { label: "Reviews", link: "#" },
				{ label: 'Affiliates', link: '/affiliate-program/' },
				{ label: 'Demo', link: '/demo/' },
				{ label: 'Business trial', link: '/', additionalAction: true },
			],
		},
	],
	[
		{
			title: 'Resources',
			links: [
				{ label: 'Blog', link: '/blog/' },
				{
					label: 'FAQ',
					link: 'https://help.geonode.com/faq',
				},
				{
					label: 'Troubleshooting',
					link: 'https://help.geonode.com/troubleshooting',
				},
				{
					label: 'API Documentation',
					link: 'https://help.geonode.com/api',
				},
				{
					label: 'Top Locations',
					link: '/locations/',
				},
				{
					label: 'Use cases',
					link: '/use-cases/',
				},
				// {
				// 	label: 'Free Courses',
				// 	link: 'https://help.geonode.com/en/',
				// 	target: true,
				// },
				// {
				// 	label: 'Tutorials',
				// 	link: 'https://help.geonode.com/en/',
				// 	target: true,
				// },
			],
		},
		// {
		//   title: "Use cases",
		//   links: [
		//     {
		//       label: "Scraping",
		//       link: "/use-cases/web-scraping/",
		//     },
		//     {
		//       label: "Price comparison",
		//       link: "/use-cases/price-intelligence/",
		//     },
		//     {
		//       label: "Ad verification",
		//       link: "/use-cases/ad-verification/",
		//     },     {
		//       label: "Ecommerce",
		//       link: "/use-cases/ecommerce/",
		//     },
		//      {
		//       label: "View more",
		//       link: "/use-cases/",
		//       target: true,
		//     },
		//   ]
		// },
	],
	[
		{
			title: 'Free tools',
			titleLink: '/tools',
			links: [
				// {
				// 	label: 'Chrome extension',
				// 	link: '#',
				// },
				{ label: 'Free Proxy List', link: '/free-proxy-list/' },
				{ label: 'Whats My IP', link: '/what-is-my-ip/' },
				{ label: 'Proxy Checker', link: '/proxy-checker/' },
			],
		},
		{
			title: 'Legal links',
			links: [
				{ label: 'Privacy Policy', link: '/privacy-policy/' },
				{ label: 'GDPR Policy', link: '/cookie-policy/' },
				{ label: 'Terms and Conditions', link: '/terms-and-conditions/' },
				{ label: 'Refund Policy', link: '/refund-policy/' },
				{ label: 'Disclaimer Policy', link: '/disclaimer/' },
			],
		},
	],
];

export const mobileFooterLinks = [
	[
		[
			{
				title: 'Products',
				links: [
					{
						label: 'Residential Proxies',
						link: '/residential-proxies/',
					},
					{ label: 'Datacenter Proxies', link: '/datacenter-proxies' },
					// {
					//   label: "Datacenter Proxies",
					//   link: "/",
					// },
				],
			},
		],
		[
			{
				title: 'Resources',
				links: [
					/* {
            label: "Residential Unlimited",
            link: "/residential-proxies/",
          }, */
					{ label: 'Blog', link: '/blog/' },
					{
						label: 'FAQ',
						link: 'https://help.geonode.com/faq',
					},
					{
						label: 'Troubleshooting',
						link: 'htthttps://help.geonode.com/troubleshooting',
					},
					{
						label: 'API Documentation',
						link: 'https://help.geonode.com/api',
					},
					{
						label: 'Top Locations',
						link: '/locations/',
					},
					{
						label: 'Use cases',
						link: '/use-cases/',
					},
				],
			},
			{
				title: 'Legal links',
				links: [
					{ label: 'Privacy Policy', link: '/privacy-policy/' },
					{ label: 'GDPR Policy', link: '/cookie-policy/' },
					{ label: 'Terms and Conditions', link: '/terms-and-conditions/' },
					{ label: 'Refund Policy', link: '/refund-policy/' },
					{ label: 'Disclaimer Policy', link: '/disclaimer/' },
				],
			},
		],
	],

	[
		[
			{
				title: 'Company',
				links: [
					{ label: 'About us', link: '/about/' },
					{ label: 'Pricing', link: '/pricing/' },
					{ label: 'Contact', link: '/contact/' },
					// { label: "Blog", link: "/blog/" },
					// { label: "Press", link: "#" },
					// { label: "Ethics", link: "#" },
					// { label: "Careers", link: "#" },
					// { label: "Reviews", link: "#" },
					{ label: 'Affiliates', link: '/affiliate-program/' },
					{ label: 'Demo', link: '/demo/' },
					{ label: 'Business trial', link: '-', additionalAction: true },
				],
			},
			{
				title: 'Tools',
				titleLink: '/tools',
				links: [
					// {
					// 	label: 'Chrome extension',
					// 	link: '#',
					// },
					{ label: 'Free Proxy List', link: '/free-proxy-list/' },
					{ label: 'Whats My IP', link: '/what-is-my-ip/' },
					{ label: 'Proxy Checker', link: '/proxy-checker/' },
				],
			},
		],
	],
];
