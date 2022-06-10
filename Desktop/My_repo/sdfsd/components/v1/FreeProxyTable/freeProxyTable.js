import React, { useEffect, useState } from 'react';
import styles from './freeProxyTable.module.scss';
import FilterDropDowm from './tableFilterDropDowns';
import axios from 'axios';
import Flags from 'country-flag-icons/react/3x2';
import moment from 'moment';

import {
	EmailShareButton,
	FacebookShareButton,
	FacebookMessengerShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	RedditShareButton,
	TelegramShareButton,
	LinkedinShareButton,
	EmailIcon,
	FacebookIcon,
	FacebookMessengerIcon,
	LinkedinIcon,
	RedditIcon,
	TelegramIcon,
	TwitterIcon,
	WhatsappIcon,
} from 'react-share';

const FreeProxyTable = () => {
	const [proxyList, setProxyList] = useState([]);
	const [width, setWidth] = useState();
	const [link, setLink] = useState(
		'https://proxylist.geonode.com/api/proxy-list'
	);
	const [totalPages, setTotalPages] = useState('5');
	const [exportAs, setExportAs] = useState('json');
	const [orgsAsn, setOrgsAsn] = useState([]);
	const [countries, setAllCountries] = useState([]);
	const [total, setTotal] = useState(0);
	const [filters, setFilters] = useState({
		perPage: '50',
		page: 1,
		speed: '',
		protocols: {
			http: false,
			https: false,
			socks4: false,
			socks5: false,
		},
		anonymityLevel: {
			elite: false,
			anonymous: false,
			transparent: false,
		},
		google: '',
		countries: '',
		filterUpTime: '',
		filterLastChecked: '',
		filterByOrg: '',
		ipAdress: '',
		filterPort: '',
		sortedField: 'lastChecked',
		sortedType: 'desc',
	});

	useEffect(() => {
		setFilters({
			...filters,
			page: 1,
		});
	}, [
		filters.speed,
		filters.protocols,
		filters.anonymityLevel,
		filters.google,
		filters.countries,
		filters.filterUpTime,
		filters.filterLastChecked,
		filters.filterByOrg,
		filters.ipAdress,
		filters.filterPort,
		filters.sortedField,
	]);

	useEffect(() => {
		setTotalPages(Math.ceil(total / filters.perPage));
	}, [filters, total]);

	useEffect(() => {
		let request = new URL(
				`https://proxylist.geonode.com/api/proxy-list?limit=${filters.perPage}&page=${filters.page}&sort_by=${filters.sortedField}&sort_type=${filters.sortedType}`
			),
			params = {};

		filters.filterLastChecked !== '' &&
			(params.filterLastChecked = filters.filterLastChecked);
		filters.filterPort !== '' && (params.filterPort = filters.filterPort);
		filters.filterUpTime !== '' && (params.filterUpTime = filters.filterUpTime);
		filters.countries !== '' &&
			(params.country = filters.countries.toUpperCase());
		filters.google !== '' && (params.google = filters.google);
		filters.speed !== '' && (params.speed = filters.speed);
		filters.filterByOrg !== '' && (params.filterByOrg = filters.filterByOrg);

		let protocolParams = Object.keys(filters.protocols).filter(
			(key) => filters.protocols[key]
		);
		protocolParams.length && (params.protocols = protocolParams);
		let anonymityLevelParams = Object.keys(filters.anonymityLevel).filter(
			(key) => filters.anonymityLevel[key]
		);
		anonymityLevelParams.length &&
			(params.anonymityLevel = anonymityLevelParams);

		Object.keys(params).forEach((key) => {
			if (key === 'protocols') {
				request.searchParams.append('protocols', protocolParams.toString());
				// protocolParams.forEach((protocol) => {
				// })   // protocolParams.forEach((protocol) => {
				// })
				return;
			}

			if (key === 'anonymityLevel') {
				anonymityLevelParams.forEach((level) => {
					request.searchParams.append('anonymityLevel', level);
				});

				return;
			}

			return request.searchParams.append(key, params[key]);
		});

		setLink(request);

		axios.get(`${request}`).then((res) => {
			setProxyList(res.data.data);
			setTotal(res.data.total);
		});
	}, [filters]);

	useEffect(() => {
		axios
			.get(
				`https://proxylist.geonode.com/api/organdasn?limit=${filters.perPage}&page=${filters.page}`
			)
			.then((resp) => {
				setOrgsAsn(
					resp.data.data.map((elem) => {
						return elem.org;
					})
				);
			});
	}, [filters.perPage, filters.page]);

	useEffect(() => {
		axios.get('https://proxylist.geonode.com/api/countries').then((resp) => {
			setAllCountries(resp.data.data);
		});
	}, []);

	const countryFlag = (country) => {
		const Flag = Flags[country.toUpperCase()];

		if (!Flag) {
			return null;
		}
		return (
			<Flag
				title={country}
				width={20}
				height={20}
				style={{ marginRight: '15px' }}
			/>
		);
	};

	const dataFormatted = (data) => {
		let time = moment
			.unix(data.toString().substring(0, 10))
			.fromNow()
			.replace('ago', '')
			.replace('hours', 'h')
			.replace('minutes', 'min')
			.replace('seconds', 'sec')
			.replace('days', 'd');

		return time;
	};

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	const DesktopTableHeader = () => {
		return (
			<tr className={styles.tableHeader}>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ textAlign: 'left', paddingLeft: '16px' }}
				>
					IP address
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ textAlign: 'left' }}
				>
					Port
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ textAlign: 'center', paddingRight: '10px' }}
					onClick={() => {
						setFilters({
							...filters,
							sortedField: 'country',
							sortedType: `${
								filters.sortedField === 'country' &&
								filters.sortedType === 'desc'
									? 'asc'
									: 'desc'
							}`,
						});
					}}
				>
					Country{' '}
					<div
						style={{
							transform: `${
								filters.sortedField === 'country' &&
								filters.sortedType === 'desc'
									? 'rotate(0deg)'
									: 'rotate(180deg)'
							}`,
							display: `${
								filters.sortedField === 'country' ? 'inline-block' : 'none'
							}`,
						}}
					>
						▼
					</div>
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ textAlign: 'center', paddingRight: '10px' }}
				>
					ORG & ASN
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ textAlign: 'center', paddingRight: '10px' }}
				>
					Protocol
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ textAlign: 'center', paddingRight: '10px' }}
				>
					Anonymity
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					onClick={() => {
						setFilters({
							...filters,
							sortedField: 'speed',
							sortedType: `${
								filters.sortedField === 'speed' && filters.sortedType === 'desc'
									? 'asc'
									: 'desc'
							}`,
						});
					}}
					style={{ textAlign: 'center', paddingRight: '10px' }}
				>
					Speed{' '}
					<div
						style={{
							transform: `${
								filters.sortedField === 'speed' && filters.sortedType === 'desc'
									? 'rotate(0deg)'
									: 'rotate(180deg)'
							}`,
							display: `${
								filters.sortedField === 'speed' ? 'inline-block' : 'none'
							}`,
						}}
					>
						▼
					</div>
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					onClick={() => {
						setFilters({
							...filters,
							sortedField: 'upTime',
							sortedType: `${
								filters.sortedField === 'upTime' &&
								filters.sortedType === 'desc'
									? 'asc'
									: 'desc'
							}`,
						});
					}}
					style={{ textAlign: 'center', paddingRight: '10px' }}
				>
					Uptime{' '}
					<div
						style={{
							transform: `${
								filters.sortedField === 'upTime' &&
								filters.sortedType === 'desc'
									? 'rotate(0deg)'
									: 'rotate(180deg)'
							}`,
							display: `${
								filters.sortedField === 'upTime' ? 'inline-block' : 'none'
							}`,
						}}
					>
						▼
					</div>
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					onClick={() => {
						setFilters({
							...filters,
							sortedField: 'responseTime',
							sortedType: `${
								filters.sortedField === 'responseTime' &&
								filters.sortedType === 'desc'
									? 'asc'
									: 'desc'
							}`,
						});
					}}
					style={{ textAlign: 'center', paddingRight: '10px' }}
				>
					Response{' '}
					<div
						style={{
							transform: `${
								filters.sortedField === 'responseTime' &&
								filters.sortedType === 'desc'
									? 'rotate(0deg)'
									: 'rotate(180deg)'
							}`,
							display: `${
								filters.sortedField === 'responseTime' ? 'inline-block' : 'none'
							}`,
						}}
					>
						▼
					</div>
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					onClick={() => {
						setFilters({
							...filters,
							sortedField: 'latency',
							sortedType: `${
								filters.sortedField === 'latency' &&
								filters.sortedType === 'desc'
									? 'asc'
									: 'desc'
							}`,
						});
					}}
					style={{ textAlign: 'center', padding: '10px' }}
				>
					Latency{' '}
					<div
						style={{
							transform: `${
								filters.sortedField === 'latency' &&
								filters.sortedType === 'desc'
									? 'rotate(0deg)'
									: 'rotate(180deg)'
							}`,
							display: `${
								filters.sortedField === 'latency' ? 'inline-block' : 'none'
							}`,
						}}
					>
						▼
					</div>
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					onClick={() => {
						setFilters({
							...filters,
							sortedField: 'lastChecked',
							sortedType: `${
								filters.sortedField === 'lastChecked' &&
								filters.sortedType === 'desc'
									? 'asc'
									: 'desc'
							}`,
						});
					}}
				>
					Updated
					<span
						style={{
							marginLeft: '10px',
							marginRight: '20px',
							transform: `${
								filters.sortedField === 'lastChecked' &&
								filters.sortedType === 'desc'
									? 'rotate(0deg)'
									: 'rotate(180deg)'
							}`,
							display: `${
								filters.sortedField === 'lastChecked' ? 'inline-block' : 'none'
							}`,
						}}
					>
						▼
					</span>
				</th>
			</tr>
		);
	};

	const MobileTableHeader = () => {
		return (
			<tr className={styles.tableHeaderMobile}>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ textAlign: 'left', paddingLeft: '16px' }}
				>
					IP
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ textAlign: 'left' }}
				>
					Port
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ textAlign: 'center', paddingRight: '10px' }}
				>
					Country
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ textAlign: 'center', paddingRight: '10px' }}
				>
					ORG & ASN
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ textAlign: 'center', paddingRight: '10px' }}
				>
					Protocol
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ textAlign: 'center', paddingRight: '10px' }}
				>
					Anonymity
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ textAlign: 'center', paddingRight: '10px' }}
				>
					Speed
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ textAlign: 'center', paddingRight: '10px' }}
				>
					Uptime
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ textAlign: 'center', paddingRight: '10px' }}
				>
					Response
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ textAlign: 'center', padding: '10px' }}
				>
					Latency
				</th>
				<th
					className={styles.freeProxyTableRowTitle}
					style={{ paddingRight: '10px' }}
				>
					Updated
				</th>
			</tr>
		);
	};

	return (
		<>
			<div className={styles.freeProxyBlock}>
				<div style={{ margin: '32px 0px 0px 0px' }}>
					<FilterDropDowm
						countries={countries}
						orgsAsn={orgsAsn}
						link={link}
						total={total}
						proxyList={proxyList}
						exportAs={exportAs}
						setExportAs={setExportAs}
						filters={filters}
						setFilters={setFilters}
						totalPages={totalPages}
						setTotalPages={setTotalPages}
					>
						<table className={styles.freeProxyTable}>
							<thead>
								{width <= 460 ? (
									<MobileTableHeader></MobileTableHeader>
								) : (
									<DesktopTableHeader></DesktopTableHeader>
								)}
							</thead>
							<tbody>
								{proxyList.map((freeProxy, index) => {
									return (
										<tr className={styles.freeProxyTableItem} key={index}>
											<td
												className={styles.freeProxyTableRow}
												style={{ color: '#FFB8B8', textAlign: 'left' }}
											>
												{freeProxy.ip}
											</td>
											<td
												className={styles.freeProxyTableRow}
												style={{ color: '#BFD0FF', textAlign: 'left' }}
											>
												{freeProxy.port}
											</td>
											<td
												className={styles.freeProxyTableRow}
												style={{ justifyContent: 'center' }}
											>
												{!freeProxy.country ? (
													'N/A'
												) : (
													<div
														style={{
															display: 'flex',
															justifyContent: 'center',
															alignItems: 'center',
														}}
													>
														<div>{countryFlag(freeProxy.country)}</div>
														<div>{`${freeProxy.country}`.toUpperCase()}</div>
													</div>
												)}
											</td>

											<td
												className={`${styles.freeProxyTableRow} ${styles.orgAsnWrapper}`}
												style={{
													textAlign: 'left',
													whiteSpace: 'nowrap',
													display: 'flex',
													alignItems: 'center',
													width: '260px',
												}}
											>
												<span>{`${!freeProxy.org ? 'N/A' : freeProxy.org} (${
													!freeProxy.asn ? 'N/A' : freeProxy.asn
												})`}</span>
											</td>
											<td
												className={styles.freeProxyTableRow}
												style={{ textTransform: 'uppercase' }}
											>
												{!freeProxy.protocols
													? 'N/A'
													: freeProxy.protocols.join(', ')}
											</td>
											<td
												className={styles.freeProxyTableRow}
												style={{
													textTransform: 'uppercase',
													color:
														freeProxy.anonymityLevel === 'hia'
															? '#24EE82'
															: 'rgba(237, 238, 255, 0.5)',
												}}
											>
												{!freeProxy.anonymityLevel
													? 'N/A'
													: freeProxy.anonymityLevel}
											</td>
											<td
												className={styles.freeProxyTableRow}
												style={{ whiteSpace: 'nowrap' }}
											>
												{freeProxy.speed !== null
													? `${freeProxy.speed.toLocaleString()} ms`
													: 'N/A'}
												{!freeProxy.speed ? null : (
													<div
														style={{
															width: `${
																parseInt(freeProxy.speed) >= 1 &&
																parseInt(freeProxy.speed) <= 250
																	? '95%'
																	: parseInt(freeProxy.speed) > 251 &&
																	  parseInt(freeProxy.speed) <= 800
																	? '60%'
																	: '20%'
															}`,
															backgroundColor: `${
																parseInt(freeProxy.speed) >= 1 &&
																parseInt(freeProxy.speed) <= 250
																	? '#00954c'
																	: parseInt(freeProxy.speed) > 251 &&
																	  parseInt(freeProxy.speed) <= 800
																	? '#dcb00d'
																	: '#e31d1c'
															}`,
															height: '10px',
															margin: '5px 0 0 0',
														}}
													></div>
												)}
											</td>
											<td className={styles.freeProxyTableRow}>
												{!freeProxy.upTime
													? 'N/A'
													: `${freeProxy.upTime.toFixed(0)}%`}
											</td>
											<td
												className={styles.freeProxyTableRow}
												style={{
													color: `${
														freeProxy.responseTime >= 70 ? 'red' : '#BFD0FF'
													}`,
												}}
											>
												{!freeProxy.responseTime
													? 'N/A'
													: `${freeProxy.responseTime} ms`}
											</td>
											<td className={styles.freeProxyTableRow}>
												{' '}
												{!freeProxy.latency
													? 'N/A'
													: `${freeProxy.latency.toFixed()} ms`}
											</td>
											<td
												className={styles.freeProxyTableRow}
												style={{ textAlign: 'left' }}
											>
												{freeProxy.lastChecked === null
													? 'N/A'
													: dataFormatted(freeProxy.lastChecked)}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</FilterDropDowm>
				</div>
			</div>
			<div className={styles.shareProxies}>
				Enjoy these proxies? Share with your friends....
				<div
					style={{
						display: 'flex',
						width: '100%',
						flexWrap: 'wrap',
						marginTop: '20px',
						justifyContent: 'center',
					}}
				>
					<FacebookShareButton
						url='https://geonode.com/free-proxy-list'
						style={{ backgroundColor: '#3b5998' }}
						className={styles.shareButtons}
						hashtag='#proxies'
						quote='Geonode Proxy has a great Free Proxy Tool with lots of filtering and download options.'
					>
						<FacebookIcon size={32} round={true} />
					</FacebookShareButton>
					{/* <FacebookMessengerShareButton
          appId="1164356150698387"
          style={{backgroundColor: "#2196f3"}}
          className={styles.shareButtons}
        ><FacebookMessengerIcon size={32} round={true} /> 
        </FacebookMessengerShareButton> */}
					<TwitterShareButton
						url='https://geonode.com/free-proxy-list'
						style={{ backgroundColor: '#00aced' }}
						className={styles.shareButtons}
						title='@geonodeproxy has a great Free Proxy Tool with lots of filtering and download options.'
						hashtags={['proxies', 'geonode', 'scraping']}
					>
						<TwitterIcon size={32} round={true} />
					</TwitterShareButton>
					<WhatsappShareButton
						url='https://geonode.com/free-proxy-list'
						style={{ backgroundColor: '#25d366' }}
						className={styles.shareButtons}
						title='Geonode Proxy has a great Free Proxy Tool with lots of filtering and download options.'
					>
						<WhatsappIcon size={32} round={true} />
					</WhatsappShareButton>
					<RedditShareButton
						url='https://geonode.com/free-proxy-list'
						style={{ backgroundColor: '#ff4500' }}
						className={styles.shareTinyButtons}
						title='Geonode Proxy has a great Free Proxy Tool with lots of filtering and download options.'
					>
						<RedditIcon size={32} round={true} />
					</RedditShareButton>
					<LinkedinShareButton
						url='https://geonode.com/free-proxy-list'
						style={{ backgroundColor: '#007fb1' }}
						className={styles.shareTinyButtons}
						title='The Most Advanced Free Proxy List'
						summary='Geonode Proxy has a great Free Proxy Tool with lots of filtering and download options.'
					>
						<LinkedinIcon size={32} round={true} />
					</LinkedinShareButton>
					<EmailShareButton
						url='https://geonode.com/free-proxy-list'
						style={{ backgroundColor: '#7f7f7f' }}
						className={styles.shareTinyButtons}
						subject='The Most Advanced Free Proxy List'
						body='Geonode Proxy has a great Free Proxy Tool with lots of filtering and download options.'
					>
						<EmailIcon size={32} round={true} />
					</EmailShareButton>
					<TelegramShareButton
						url='https://geonode.com/free-proxy-list'
						style={{ backgroundColor: '#37aee2' }}
						className={styles.shareTinyButtons}
						title='Geonode Proxy has a great Free Proxy Tool with lots of filtering and download options.'
					>
						<TelegramIcon size={32} round={true} />
					</TelegramShareButton>
				</div>
				<div></div>
			</div>
		</>
	);
};

export default FreeProxyTable;
