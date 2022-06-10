import React, { useState } from 'react';
import styles from './proxyCheckerTable.module.scss';
import Flags from 'country-flag-icons/react/3x2';
import downloadImg from '../../../public/images/free-proxy/download-2.svg';
import validImg from '../../../public/images/proxyChecker/valid.svg';
import invalidImg from '../../../public/images/proxyChecker/invalid.svg';
import stick from '../../../public/images/proxyChecker/stick.svg';
import thinStick from '../../../public/images/proxyChecker/thinStick.svg';

const ProxyCheckerTable = ({
	setFilters,
	filters,
	showTable,
	checkedProxies,
	checkedNumber,
	proxiesToCheck,
	checking,
}) => {
	const [exportAs, setExportAs] = useState('json');
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

	const downloadData = () => {
		let saveData = (function () {
			let a = document.createElement('a');
			return function (data, fileName) {
				let json = data,
					blob = new Blob([json], { type: 'octet/stream' }),
					url = window.URL.createObjectURL(blob);
				a.href = url;
				a.download = fileName;
				a.click();
				window.URL.revokeObjectURL(url);
			};
		})();
		const items = checkedProxies;
		const replacer = (key, value) => {
			if (value === null || value === '') {
				return 'N/A';
			} else if (Array.isArray(value)) {
				return value.join();
			} else if (typeof value === 'number') {
				return value.toFixed(0);
			}
			return value;
		};
		const header = Object.keys(items[0]).filter(
			(key) =>
				![
					'_id',
					'city',
					'created_at',
					'lastChecked',
					'region',
					'workingPercentage',
					'hostName',
					'google',
				].includes(key)
		);

		const formatted = [
			header.join(','),
			...items.map((row) =>
				header
					.map((fieldName) => JSON.stringify(row[fieldName], replacer))
					.join(',')
			),
		].join('\r\n');

		if (exportAs === 'csv') {
			saveData(formatted, 'Proxy-Checker.csv');
		}
		if (exportAs === 'json') {
			saveData(JSON.stringify(checkedProxies), 'Proxy-Checker.json');
		}
		if (exportAs === 'txt') {
			saveData(formatted, 'Proxy-Checker.txt');
		}
	};

	const calculateProxies = (status) => {
		let count = 0;
		if (checkedProxies) {
			checkedProxies.map((el) => {
				if (el.ip_info.status === status) {
					count++;
				}
			});
		}
		return count;
	};

	const filteredProxies = proxiesToCheck.length - checkedProxies.length;

	let sortedProxies = checkedProxies;

	if (!checking) {
		function sortBySpeed(first, second) {
			if (filters.sortedType === 'asc') {
				if (
					first.protocols &&
					second.protocols &&
					first.protocols[0] &&
					second.protocols[0]
				) {
					return first.protocols[0].speed - second.protocols[0].speed;
				}
			} else if (filters.sortedType === 'desc') {
				if (
					first.protocols &&
					second.protocols &&
					first.protocols[0] &&
					second.protocols[0]
				) {
					return second.protocols[0].speed - first.protocols[0].speed;
				}
			}
			return -1;
		}

		function sortByResponse(first, second) {
			if (filters.sortedType === 'asc') {
				if (
					first.protocols &&
					second.protocols &&
					first.protocols[0] &&
					second.protocols[0]
				) {
					return (
						first.protocols[0].response_time - second.protocols[0].response_time
					);
				}
			} else if (filters.sortedType === 'desc') {
				if (
					first.protocols &&
					second.protocols &&
					first.protocols[0] &&
					second.protocols[0]
				) {
					return (
						second.protocols[0].response_time - first.protocols[0].response_time
					);
				}
			}
			return 0;
		}

		function sortByCountry(a, b) {
			if (filters.sortedType === 'asc') {
				if (a.ip_info && b.ip_info && a.ip_info.country && b.ip_info.country) {
					var nameA = a.ip_info.country.toUpperCase();
					var nameB = b.ip_info.country.toUpperCase();
					if (nameA < nameB) {
						return -1;
					}
					if (nameA > nameB) {
						return 1;
					}
					return 0;
				}
			} else if (filters.sortedType === 'desc') {
				if (a.ip_info && b.ip_info && a.ip_info.country && b.ip_info.country) {
					var nameA = a.ip_info.country.toUpperCase();
					var nameB = b.ip_info.country.toUpperCase();
					if (nameA > nameB) {
						return -1;
					}
					if (nameA < nameB) {
						return 1;
					}
					return 0;
				}
			}
		}

		if (filters.sortedField === 'speed') {
			sortedProxies = sortedProxies.sort(sortBySpeed);
		} else if (filters.sortedField === 'responseTime') {
			sortedProxies = sortedProxies.sort(sortByResponse);
		} else if (filters.sortedField === 'country') {
			sortedProxies = sortedProxies.sort(sortByCountry);
		}
	}

	return (
		<>
			{!showTable ? null : (
				<div className={styles.freeProxyBlock}>
					<div style={{ margin: '32px 0px 120px 0px' }}>
						<div className={styles.testResult}>
							<div className={styles.testResultTitle}>Test results</div>
							<div className={styles.resultWrapper}>
								{checkedNumber !== proxiesToCheck.length ? (
									<div>
										Checked {checking ? checkedNumber : proxiesToCheck?.length}{' '}
										from {proxiesToCheck ? proxiesToCheck.length : '0'}{' '}
										<span style={{ color: '#efadb0' }}>{`(${
											checking
												? Math.ceil(
														100 * (checkedNumber / proxiesToCheck.length)
												  )
												: '100'
										}%)`}</span>
									</div>
								) : (
									<div>All proxies have been checked.</div>
								)}
								<div style={{ display: 'flex' }} className={styles.validStats}>
									<div style={{ color: '#9D9EAA', marginRight: '10px' }}>
										<img src={validImg} style={{ marginRight: '5px' }}></img>
										Valid{' '}
										<span style={{ color: '#EFF7FF' }}>
											{calculateProxies('success')}
										</span>
									</div>
									<img
										style={{ marginRight: '10px', marginLeft: '10px' }}
										src={stick}
									></img>
									<div style={{ color: '#9D9EAA', marginRight: '10px' }}>
										<img src={invalidImg} style={{ marginRight: '5px' }}></img>
										Invalid{' '}
										<span style={{ color: '#EFF7FF' }}>
											{calculateProxies('failed')}
										</span>
									</div>
								</div>
							</div>

							<div className={styles.progress}>
								<div
									style={{
										width: `${
											checking
												? Math.ceil(
														100 * (checkedNumber / proxiesToCheck.length)
												  )
												: '100'
										}%`,
									}}
									className={styles.progressBar}
								></div>
							</div>
						</div>

						<div className={styles.exportPaginationWrapper}>
							<div className={styles.exportWrapper}>
								<div className={styles.exportTitle}>Export list as</div>
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<div
										className={styles.exportContainer}
										style={{
											display: 'flex',
											margin: '0 20px 0 25px',
											alignItems: 'center',
										}}
									>
										<div>
											<input
												type='radio'
												checked={exportAs === 'json'}
												onChange={(e) => {
													setExportAs(e.target.value);
												}}
												id='json'
												name='json'
												value='json'
											/>
											<label
												style={{ borderRadius: '4px 0px 0px 4px' }}
												htmlFor='json'
											>
												json
											</label>
										</div>
										<div>
											<input
												type='radio'
												checked={exportAs === 'txt'}
												onChange={(e) => {
													setExportAs(e.target.value);
												}}
												id='txt'
												name='txt'
												value='txt'
											/>
											<label htmlFor='txt'>txt</label>
										</div>
										<div>
											<input
												type='radio'
												id='csv'
												name='csv'
												value='csv'
												checked={exportAs === 'csv'}
												onChange={(e) => {
													setExportAs(e.target.value);
												}}
											/>
											<label
												style={{ borderRadius: '0px 4px 4px 0px' }}
												htmlFor='csv'
											>
												csv
											</label>
										</div>
									</div>
									<img
										style={{ marginRight: '10px' }}
										onClick={downloadData}
										src={downloadImg}
										alt='filter'
										width={25}
										height={25}
									/>
								</div>
							</div>
						</div>

						<div className={styles.tableResponsive}>
							<table className={styles.freeProxyTable}>
								<thead>
									<tr className={styles.tableHeader}>
										<th
											className={styles.freeProxyTableRowTitle}
											style={{ textAlign: 'left' }}
										>
											Status
										</th>
										<th
											className={styles.freeProxyTableRowTitle}
											style={{ textAlign: 'left' }}
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
														filters.sortedField === 'country'
															? 'inline-block'
															: 'none'
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
														filters.sortedField === 'speed' &&
														filters.sortedType === 'desc'
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
														filters.sortedField === 'speed' &&
														filters.sortedType === 'desc'
															? 'rotate(0deg)'
															: 'rotate(180deg)'
													}`,
													display: `${
														filters.sortedField === 'speed'
															? 'inline-block'
															: 'none'
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
														filters.sortedField === 'responseTime'
															? 'inline-block'
															: 'none'
													}`,
												}}
											>
												▼
											</div>
										</th>
										<th
											className={styles.freeProxyTableRowTitle}
											style={{ textAlign: 'center', paddingRight: '15px' }}
										>
											Google
										</th>
									</tr>
								</thead>
								{proxiesToCheck.length === 0 || checkedProxies.length === 0 ? (
									<tbody>
										<tr>
											<td
												colSpan='9'
												className={styles.noResults}
												style={{ textAlign: 'center' }}
											>
												Please check your input again.
											</td>
										</tr>
									</tbody>
								) : (
									sortedProxies.map((el, index) => {
										return (
											<tbody key={index}>
												<tr className={styles.freeProxyTableItem}>
													<td
														className={styles.freeProxyTableRow}
														style={{ color: '#FFB8B8', textAlign: 'left' }}
													>
														{checking ? (
															'Cheking'
														) : el.ip_info.status === 'success' ? (
															<div
																style={{
																	color: '#9D9EAA',
																	marginRight: '10px',
																	display: 'flex',
																}}
															>
																<img
																	src={validImg}
																	style={{ marginRight: '5px' }}
																></img>
																<span>Valid</span>
															</div>
														) : (
															<div
																style={{
																	color: '#9D9EAA',
																	marginRight: '10px',
																	display: 'flex',
																}}
															>
																<img
																	src={invalidImg}
																	style={{ marginRight: '5px' }}
																></img>
																<span>Invalid</span>
															</div>
														)}
													</td>
													<td
														className={styles.freeProxyTableRow}
														style={{ color: '#FFB8B8', textAlign: 'left' }}
													>
														{el.ip}
													</td>
													<td
														className={styles.freeProxyTableRow}
														style={{ color: '#BFD0FF', textAlign: 'left' }}
													>
														{el.port}
													</td>
													<td
														className={styles.freeProxyTableRow}
														style={{ justifyContent: 'center' }}
													>
														<div
															style={{
																display: 'flex',
																alignItems: 'center',
																whiteSpace: 'nowrap',
															}}
														>
															{checking ? (
																<div>-</div>
															) : (
																<>
																	<div>
																		{countryFlag(`${el.ip_info.countryCode}`)}
																	</div>
																	<div>{el.ip_info.country}</div>
																</>
															)}
														</div>
													</td>
													<td
														className={styles.freeProxyTableRow}
														style={{ textTransform: 'uppercase' }}
													>
														{el.protocols
															? el.protocols
																	.map((data) => data.protocol)
																	.join(', ')
															: '-'}
													</td>
													<td
														className={styles.freeProxyTableRow}
														style={{ textTransform: 'uppercase' }}
													>
														-
													</td>
													<td
														className={styles.freeProxyTableRow}
														style={{ whiteSpace: 'nowrap' }}
													>
														{!checking ? (
															<div>
																{`${
																	el.protocols && el.protocols[0]
																		? `${el.protocols[0].speed.toLocaleString()} ms`
																		: '-'
																}`}
																<div
																	style={{
																		width: `${
																			parseInt(
																				el.protocols && el.protocols[0]
																					? el.protocols[0].speed
																					: 0
																			) >= 1 &&
																			parseInt(
																				el.protocols && el.protocols[0]
																					? el.protocols[0].speed
																					: 0
																			) <= 250
																				? '95%'
																				: parseInt(
																						el.protocols && el.protocols[0]
																							? el.protocols[0].speed
																							: 0
																				  ) > 251 &&
																				  parseInt(
																						el.protocols && el.protocols[0]
																							? el.protocols[0].speed
																							: 0
																				  ) <= 800
																				? '60%'
																				: '20%'
																		}`,
																		backgroundColor: `${
																			(el.protocols && el.protocols[0]
																				? el.protocols[0].speed
																				: 0) >= 1 &&
																			parseInt(
																				el.protocols && el.protocols[0]
																					? el.protocols[0].speed
																					: 0
																			) <= 250
																				? '#00954c'
																				: parseInt(
																						el.protocols && el.protocols[0]
																							? el.protocols[0].speed
																							: 0
																				  ) > 251 &&
																				  parseInt(
																						el.protocols && el.protocols[0]
																							? el.protocols[0].speed
																							: 0
																				  ) <= 800
																				? '#dcb00d'
																				: '#e31d1c'
																		}`,
																		height: `${
																			el.protocols && el.protocols[0]
																				? '10px'
																				: '0px'
																		} `,
																	}}
																></div>
															</div>
														) : (
															<div>-</div>
														)}
													</td>
													<td
														className={styles.freeProxyTableRow}
														style={{
															color: `${
																el.protocols && el.protocols[0]
																	? el.protocols[0].response_time
																	: 0 >= 70
																	? 'red'
																	: '#BFD0FF'
															}`,
														}}
													>
														{checking ? (
															<div>-</div>
														) : (
															<div>
																{' '}
																{`${
																	el.protocols && el.protocols[0]
																		? `${el.protocols[0].response_time} ms`
																		: '-'
																}`}{' '}
															</div>
														)}
													</td>
													<td
														className={styles.freeProxyTableRow}
														style={{ textAlign: 'center' }}
													>
														{checking ? (
															<div>-</div>
														) : (
															<div>
																{' '}
																{el.is_google === false
																	? 'false'
																	: el.is_google === true
																	? 'true'
																	: '-'}
															</div>
														)}
													</td>
												</tr>
											</tbody>
										);
									})
								)}
							</table>
						</div>

						<div className={styles.tableFooter}>
							<div>
								Total{' '}
								<span style={{ color: '#FEC900' }}>
									{proxiesToCheck.length}
								</span>{' '}
								proxies
							</div>
							<img style={{ margin: '0 12px 0 12px' }} src={thinStick}></img>
							<div>
								{' '}
								<span style={{ color: '#BFD0FF' }}>{filteredProxies}</span>{' '}
								proxies filtered out
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProxyCheckerTable;
