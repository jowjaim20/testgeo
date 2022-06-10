// import 'tailwindcss/tailwind.css';
import '@fonts/stylesheet.css';
import '@styles/globals.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Head from 'next/head';
import warning from '@public/images/warning.png';

import Layout from '@components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<script src="https://consent.cookiefirst.com/banner.js" data-cookiefirst-key="6c02dd02-65ae-4fe4-8aca-f107073117e4"></script>

				<script charset="utf-8" type="text/javascript" src="//js-eu1.hsforms.net/forms/v2.js" />
				{/* Google Tag Manager  */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-WFJR5DV');`,
					}}
				></script>

				{/* Google Tag Manager (noscript)  */}
				<noscript>
					<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WFJR5DV" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
				</noscript>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				{/* End Google Tag Manager (noscript)  */}
			</Head>
			{/* <div className='global-maintenance-banner relative z-10 text-sm text-white font-normal'>
				<div className='max-w-screen-lg p-3 m-auto relative'>
					<div className='flex justify-start items-center'>
						<div className='global-maintenance-icon flex-none p-3'>
							<img src={warning} alt='warning-icon' className='w-5 h-4' />
						</div>

						<div className='flex items-center'>
							We are working on resolving the issues related to our Residential
							services. We apologize for any inconvenience and thank you for
							your patience.
						</div>
					</div>
				</div>
			</div> */}
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
