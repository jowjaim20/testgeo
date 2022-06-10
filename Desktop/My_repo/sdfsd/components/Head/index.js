import React from 'react';
import Head from 'next/head';
import singleIcon from '@public/images/logo-symbol.svg';
import PropTypes from 'prop-types';

const GeoHead = props => {
	const { title = '🤖Unlimited Residential Proxies | Geonode', icon = singleIcon, children, description = '' } = props;
	return (
		<Head>
			<title>{title}</title>
			<link rel="icon" href={icon} />
			{description && <meta name="description" content={description} />}
			{children}

			{props.schema && <script type="application/ld+json">{props.schema}</script>}
			{/* Open Graph */}
			{props.title && <meta property="og:title" content={props.title} />}
			{props.description && <meta property="og:description" content={props.description} />}
			{props.ogImage && <meta property="og:image" content={props.ogImage} />}
			{props.ogImage && <meta property="og:image:width" content="1200" />}
			{props.ogImage && <meta property="og:image:height" content="630" />}
			{props.ogUrl && <meta property="og:url" content={props.ogUrl} />}
			{props.ogType && <meta property="og:type" content={props.ogType} />}

			{props.ogImage && <meta property="twitter:card" content="summary_large_image" />}
			{props.title && <meta property="twitter:title" content={props.title} />}
			{props.description && <meta property="twitter:description" content={props.description} />}
			{props.ogImage && <meta property="twitter:image" content={props.ogImage} />}
			{props.ogUrl && <meta property="twitter:url" content={props.ogUrl} />}
			{props.domain && <meta property="twitter:domain" content={props.domain} />}
		</Head>
	);
};

GeoHead.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.any,
	children: PropTypes.any,
	description: PropTypes.string,
};

export default GeoHead;
