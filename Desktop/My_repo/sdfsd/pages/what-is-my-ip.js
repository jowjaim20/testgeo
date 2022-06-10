import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Typography, Grid } from '@material-ui/core';
import styles from '../styles/what-is-my-ip.module.scss';
import GoogleMapReact from 'google-map-react';

import moment from 'moment';

import Header from '@components/v1/FreeProxyHeader/freeProxyHeader';
import IpVersion from '@components/v1/IPVersion/ipVersion';
import MyIpTable from '@components/v1/MyIPTable/myIpTable';

import GeoHead from '@components/Head';

import connectionIcon from '@public/images/whatsMyIP/connection.svg';
import deviceIcon from '@public/images/whatsMyIP/device.svg';
import locationIcon from '@public/images/whatsMyIP/location.svg';

const API_KEY = 'AIzaSyA29ByL2s3UzuH5lw5n8ffcrHDSGea9mt0';
const AnyReactComponent = ({ text }) => <div style={{ fontSize: '30px', color: 'red' }}>{text}</div>;

function getDeviceInfo() {
	const module = {
		options: [],
		header: [window.navigator.platform, window.navigator.userAgent, window.navigator.appVersion, window.navigator.vendor, window.opera],
		dataos: [
			{ name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
			{ name: 'Windows', value: 'Win', version: 'NT' },
			{ name: 'iPhone', value: 'iPhone', version: 'OS' },
			{ name: 'iPad', value: 'iPad', version: 'OS' },
			{ name: 'Kindle', value: 'Silk', version: 'Silk' },
			{ name: 'Android', value: 'Android', version: 'Android' },
			{ name: 'PlayBook', value: 'PlayBook', version: 'OS' },
			{ name: 'BlackBerry', value: 'BlackBerry', version: '/' },
			{ name: 'Macintosh', value: 'Mac', version: 'OS X' },
			{ name: 'Linux', value: 'Linux', version: 'rv' },
			{ name: 'Palm', value: 'Palm', version: 'PalmOS' },
		],
		databrowser: [
			{ name: 'Chrome', value: 'Chrome', version: 'Chrome' },
			{ name: 'Firefox', value: 'Firefox', version: 'Firefox' },
			{ name: 'Safari', value: 'Safari', version: 'Version' },
			{ name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
			{ name: 'Opera', value: 'Opera', version: 'Opera' },
			{ name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
			{ name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' },
		],
		init: function () {
			var agent = this.header.join(' '),
				os = this.matchItem(agent, this.dataos),
				browser = this.matchItem(agent, this.databrowser);

			return { os: os, browser: browser };
		},
		matchItem: function (string, data) {
			var i = 0,
				j = 0,
				html = '',
				regex,
				regexv,
				match,
				matches,
				version;

			for (i = 0; i < data.length; i += 1) {
				regex = new RegExp(data[i].value, 'i');
				match = regex.test(string);
				if (match) {
					regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
					matches = string.match(regexv);
					version = '';
					if (matches) {
						if (matches[1]) {
							matches = matches[1];
						}
					}
					if (matches) {
						matches = matches.split(/[._]+/);
						for (j = 0; j < matches.length; j += 1) {
							if (j === 0) {
								version += matches[j] + '.';
							} else {
								version += matches[j];
							}
						}
					} else {
						version = '0';
					}
					return {
						name: data[i].name,
						version: parseFloat(version),
					};
				}
			}
			return { name: 'unknown', version: 0 };
		},
	};

	var e = module.init(),
		debug = '';

	const deviceData = {
		os: {
			name: e.os.name,
			version: e.os.version,
		},
		browser: {
			name: e.browser.name,
			version: e.browser.version,
		},
	};

	return deviceData;
}

const SimpleMap = ({ lat, lng }) => {
	let defaultProps = {
		center: {
			lat,
			lng,
		},
		zoom: 11,
	};

	if (!lat || !lng) {
		return null;
	}
	return (
		<div className={styles.mapBlock}>
			<GoogleMapReact bootstrapURLKeys={{ key: API_KEY }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
				<AnyReactComponent lat={lat} text="&#x25BC;" lng={lng} />
			</GoogleMapReact>
		</div>
	);
};

/**
 * Get the user IP throught the webkitRTCPeerConnection
 * @param onNewIP {Function} listener function to expose the IP locally
 * @return undefined
 */

// Usage

export default function WhatsMyIP() {
	const [ipv4, setIpv4] = useState();
	const [ipv6, setIpv6] = useState();
	const [locationData, setLocationData] = useState({
		city: '',
		regionName: '',
		country: '',
		timezone: '',
		zip: '',
		isp: '',
		lat: 0,
		lon: 0,
		as: '',
		continent_name: '',
		reverse: '',
		proxy: '',
	});
	const [deviceInfo, setDeviceInfo] = useState({
		device: '',
		browser: '',
		os: '',
		height: '',
		width: '',
		langiage: '',
		useAgent: '',
		cookie: '',
	});

	const [connectionData, setConnectionData] = useState({
		asn: '',
		domain: '',
		name: '',
		route: '',
		type: '',
		proxy: '',
		services: '',
		isp: '',
		hostname: '',
	});

	useEffect(() => {
		const info = getDeviceInfo();
		setDeviceInfo({
			height: window.innerHeight,
			width: window.innerWidth,
			language: navigator.language,
			userAgent: navigator.userAgent,
			cookie: navigator.cookieEnabled,
			device: navigator.platform,
			browser: info.browser.name,
			os: info.os.name,
		});
	}, []);

	useEffect(() => {
		let userIPDataParsed = JSON.parse(localStorage.getItem('userIpData'));

		axios
			.get('https://proxylist.geonode.com/api/ip', {
				mode: 'cors',
				headers: { 'Content-Type': 'application/json' },
			})
			.then(res => {
				if (res.data && res.data.data) {
					const data = res.data.data;
					// getPostalCode(data.lat, data.lon);
					setIpv4(data.ipV4);
					setIpv6(data.ipV6);
					setLocationData({
						...locationData,
						city: data.city,
						regionName: data.region,
						country: data.country,
						timezone: data.timezone,
						zip: data.zip,
						continent: data.continent,
						isp: data.isp,
						lat: data.lat,
						lon: data.lon,
						// as: data.as,
						reverse: data.reverse,
						proxy: data.proxy,
						as: data.as,
						callingCode: data.callingCode,
					});

					setConnectionData({
						...connectionData,
						asn: data.asn,
						name: data.asname,
						proxy: data.proxy,
						isp: data.isp,
						hosting: data.hosting,
						internet: data.internet,
						mobile: data.mobile,
						offset: data.offset,
						status: data.status,
					});
				}
			});
	}, []);

	// const getPostalCode = (latitude, longitude) => {
	//   const url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true&key=' + API_KEY;
	//   axios.post(url).then(({data}) => {
	//         var addresses = data.results;
	//         console.log('addresses :' , addresses);
	//     })
	// }

	useEffect(() => {
		let userIpData = {
			...locationData,
			...connectionData,
			ipv4: ipv4,
			ipv6: ipv6,
		};
		localStorage.setItem('userIpData', JSON.stringify(userIpData));
	}, [locationData, connectionData, ipv4, ipv6]);

	const location = [
		{ title: 'City', result: locationData.city ? locationData.city : 'N/A' },
		{
			title: 'State/Region',
			result: locationData.regionName ? locationData.regionName : 'N/A',
		},
		{
			title: 'Country',
			result: locationData.country ? locationData.country : 'N/A',
		},
		{
			title: 'Continent',
			result: locationData.continent ? locationData.continent : 'N/A',
		},
		{
			title: 'Postal code',
			result: locationData.zip ? locationData.zip : 'N/A',
		},
		{
			title: 'As',
			result: locationData.as,
		},
		{
			title: 'Calling Code',
			result: locationData.callingCode,
		},
		{
			title: 'Time zone',
			result: locationData.timezone ? locationData.timezone : 'N/A',
		},
		{ title: 'Local time', result: moment().format('HH:MM') },
		{
			title: 'Latitude / Longitude',
			result: `${locationData.lat ? locationData.lat : 'N/A'} / ${locationData.lon ? locationData.lon : 'N/A'}`,
		},
	];

	const connection = [
		{ title: 'ISP', result: connectionData.isp ? connectionData.isp : 'N/A' },
		{ title: 'ASN', result: connectionData.name ? connectionData.name : 'N/A' },
		{
			title: 'Internet',
			result: connectionData.internet ? connectionData.internet : 'N/A',
		},
		{ title: 'Proxy', result: connectionData.proxy === true ? 'Yes' : 'No' },
		{
			title: 'Hosting',
			result: connectionData.hosting === true ? 'Yes' : 'No',
		},
		{
			title: 'Mobile',
			result: connectionData.mobile === true ? 'Yes' : 'No',
		},
		{
			title: 'Offset',
			result: connectionData.offset ? connectionData.offset : 'N/A',
		},
		{
			title: 'Status',
			result: connectionData.status ? connectionData.status : 'N/A',
		},
	];

	const device = [
		{ title: 'Device', result: deviceInfo.device },
		{ title: 'Browser', result: deviceInfo.browser },
		{ title: 'Operating system', result: deviceInfo.os },
		{
			title: 'Screen resolution  ',
			result: `${deviceInfo.height} / ${deviceInfo.width}`,
		},
		{ title: 'Browser language', result: deviceInfo.language },
		{ title: 'User agent', result: deviceInfo.userAgent },
		{
			title: 'Cookie',
			result: deviceInfo.cookie === true ? 'Enabled' : 'Disabled',
		},
		{
			title: 'Javascript',
			result:
				(
					<>
						<noscript>Disabled</noscript>
					</>
				) && 'Enabled',
		},
	];

	return (
		<div>
			<GeoHead
				title={`🤖 What's My IP [Free Instant Results]`}
				description="Residential Proxies" //This "unmetered" needs to be asked!!
			/>

			<Grid style={{ backgroundColor: '#181a40' }}>
				{/* Google Tag Manager (noscript)  */}
				<noscript>
					<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WFJR5DV" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
				</noscript>
				{/* End Google Tag Manager (noscript)  */}
				<Header />
				<main className={`${styles.homepage} max-w-screen-xl mx-auto px-4`}>
					<Grid className={`${styles.section1}  mb-60`}>
						<div style={{ height: '35%' }} className={styles.cover}></div>
						<Grid className={styles.container} container direction="row" wrap="nowrap" justify="space-between" alignItems="center">
							<Grid className={styles.mainContent}>
								<div className={styles.freeProxyWrapper}>
									<Typography variant="h1" className={styles.title}>
										What Is My IP Address
									</Typography>
								</div>
							</Grid>
						</Grid>
						<Grid className={styles.ipContainer}>
							<IpVersion title="IPv4" ip={ipv4 ? ipv4 : 'N/A'}></IpVersion>
							{/* <IpVersion title='IPv6' ip={ipv6 ? ipv6 : 'N/A'}></IpVersion> */}
						</Grid>
						<Grid className={styles.tablesContainer}>
							<div className={styles.firstTable}>
								<MyIpTable style={{ width: '50%' }} title="Location" titleImg={locationIcon} data={location}></MyIpTable>
								<SimpleMap lat={locationData.lat} lng={locationData.lon}></SimpleMap>
							</div>
							<div className={styles.tableScroll}>
								<MyIpTable title="Connection" style={{ marginBottom: '65px' }} titleImg={connectionIcon} data={connection}></MyIpTable>
							</div>
							<div className={styles.tableScroll} style={{ marginBottom: '65px', marginTop: '65px' }}>
								<MyIpTable title="Device" titleImg={deviceIcon} data={device}></MyIpTable>
							</div>
						</Grid>
					</Grid>
				</main>
				{/* <Footer freeProxy={true} title='Ready to grab the limited deal?' /> */}
			</Grid>
		</div>
	);
}
