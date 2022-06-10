import React from 'react';
import styles from './freeProxyTable.module.scss';
import downloadImg from '../../../public/images/free-proxy/download-2.svg';
import info from '../../../public/images/free-proxy/info.svg';
import newTabImg from '../../../public/images/free-proxy/new-tab.svg';
const { getName, overwrite } = require('country-list');

const ChevronUp = () => {
	return (
		<svg
			aria-hidden='true'
			focusable='false'
			data-prefix='fas'
			data-icon='chevron-down'
			className='svg-inline--fa fa-chevron-down fa-w-14'
			role='img'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 448 512'
		>
			<path
				fill='white'
				d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'
			></path>
		</svg>
	);
};

const ChevronUpPagination = () => {
	return (
		<svg
			aria-hidden='true'
			focusable='false'
			data-prefix='fas'
			data-icon='chevron-down'
			className='svg-inline--fa fa-chevron-down fa-w-14'
			role='img'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 448 512'
		>
			<path
				fill='#F5F6FA'
				d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'
			></path>
		</svg>
	);
};

const PageLeft = ({ color }) => {
	return (
		<svg
			width='11'
			height='14'
			viewBox='0 0 11 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M10.3087 13.5907C10.2113 13.6413 10.1053 13.6667 9.99935 13.6667C9.86602 13.6667 9.73402 13.6267 9.62002 13.548L0.953348 7.54799C0.773349 7.42333 0.666016 7.21866 0.666016 6.99999C0.666016 6.78133 0.773349 6.57666 0.953348 6.45199L9.62002 0.451993C9.82335 0.311326 10.0893 0.294659 10.3087 0.409326C10.5287 0.524659 10.666 0.751993 10.666 0.999993V13C10.666 13.248 10.5287 13.4753 10.3087 13.5907Z'
				fill={color}
			/>
		</svg>
	);
};

const PageRight = ({ color }) => {
	return (
		<svg
			width='11'
			height='14'
			viewBox='0 0 11 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M0.691318 13.5907C0.788651 13.6413 0.894651 13.6667 1.00065 13.6667C1.13398 13.6667 1.26598 13.6267 1.37998 13.548L10.0467 7.54799C10.2267 7.42333 10.334 7.21866 10.334 6.99999C10.334 6.78133 10.2267 6.57666 10.0467 6.45199L1.37998 0.451993C1.17665 0.311326 0.910651 0.294659 0.691318 0.409326C0.471318 0.524659 0.333984 0.751993 0.333984 0.999993V13C0.333984 13.248 0.471318 13.4753 0.691318 13.5907Z'
				fill={color}
			/>
		</svg>
	);
};

const FilterDropDowm = ({
	countries,
	children,
	orgsAsn,
	filters,
	setFilters,
	totalPages,
	exportAs,
	setExportAs,
	proxyList,
	link,
	total,
}) => {
	const handlePrevPage = () => {
		if (filters.page <= 1) {
			setFilters({ ...filters, page: 1 });
			return;
		}
		setFilters({ ...filters, page: filters.page - 1 });
	};

	const handleNextPage = () => {
		if (filters.page >= parseInt(totalPages)) {
			setFilters({ ...filters, page: parseInt(totalPages) });
			return;
		}
		setFilters({ ...filters, page: filters.page + 1 });
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
		const items = proxyList;
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
					'workingPercent',
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
			saveData(formatted, 'Free_Proxy_List.csv');
		}
		if (exportAs === 'json') {
			saveData(JSON.stringify(proxyList), 'Free_Proxy_List.json');
		}
		if (exportAs === 'txt') {
			saveData(formatted, 'Free_Proxy_List.txt');
		}
	};

	overwrite([
		{
			code: 'XK',
			name: 'Kosovo',
		},
		{
			code: 'TZ',
			name: 'Tanzania',
		},
		{
			code: 'VE',
			name: 'Venezuela',
		},
		{
			code: 'US',
			name: 'United States',
		},
		{
			code: 'CD',
			name: 'Congo',
		},
		{
			code: 'BO',
			name: 'Bolivia',
		},
		{
			code: 'GB',
			name: 'United Kingdom',
		},
		{
			code: 'IR',
			name: 'Iran',
		},
		{
			code: 'AE',
			name: 'Arab Emirates',
		},
		{
			code: 'LA',
			name: 'Laos',
		},
		{
			code: 'MD',
			name: 'Moldova',
		},
		{
			code: 'RU',
			name: 'Russia',
		},
		{
			code: 'KR',
			name: 'Korea',
		},
		{
			code: 'PS',
			name: 'Palestine',
		},
	]);

	return (
		<>
			<div>
				<div className={styles.filterWrapper}>
					<div className={styles.filterWrapperItem}>
						<div style={{ width: '100%' }}>
							<label htmlFor='country'>
								<span
									className={styles.mobileFilter}
									style={{ color: '#9D9EAA' }}
								>
									Country
								</span>{' '}
								<br></br>
								{/* <div className={styles.chevronUpFilter}>
									<ChevronUp></ChevronUp>
								</div> */}
								<select
									onChange={(e) => {
										setFilters({ ...filters, countries: e.target.value });
									}}
									style={{
										width: '100%',
										position: 'relative',
										paddingRight: '35px',
									}}
									id='country'
									name='country'
								>
									<option defaultValue={filters.countries === ''} value=''>
										All Countries
									</option>
									{countries.map((country, index) => {
										return (
											<option
												key={index}
												defaultValue={filters.countries === { country }}
												value={country}
											>
												{getName(country)}
											</option>
										);
									})}
								</select>
							</label>
						</div>
						<div
							className={`${styles.portInputWrapper} ${styles.mobileFilter}`}
							style={{ width: '100%' }}
						>
							<label htmlFor='port'>
								<div style={{ color: '#9D9EAA', display: 'flex' }}>
									<div>Port</div>{' '}
									<div className={styles.tooltip}>
										<img
											className={styles.infoImg}
											style={{ marginLeft: '10px' }}
											src={info}
										></img>
										<span className={styles.tooltipText}>
											Ports can be separated by commas or spaces, as well as
											ranges separated by hyphens.<br></br> For example:
											25,80-500,8080,9000-10000
										</span>
									</div>
								</div>
								<input
									type='text'
									className={styles.portInput}
									style={{ width: '100%' }}
									values={filters.filterPort}
									onChange={(e) => {
										setFilters({ ...filters, filterPort: e.target.value });
									}}
								></input>
							</label>
						</div>

						<div className={`${styles.selectWrapper} ${styles.mobileFilter}`}>
							<span style={{ color: '#9D9EAA' }}>Google Passed</span>
							<div style={{ marginTop: '15px', display: 'flex' }}>
								<input
									type='checkbox'
									id='yes'
									name='yes'
									value='yes'
									checked={filters.google === 'true'}
									onChange={(e) => {
										setFilters({
											...filters,
											google: filters.google === 'true' ? '' : 'true',
										});
									}}
								/>
								<label htmlFor='yes'>Yes</label>
								<input
									type='checkbox'
									id='no'
									name='no'
									value='no'
									checked={filters.google === 'false'}
									onChange={(e) => {
										setFilters({
											...filters,
											google: filters.google === 'false' ? '' : 'false',
										});
									}}
								/>
								<label htmlFor='no'>No</label>
							</div>
						</div>
					</div>

					<div className={styles.filterWrapperItem}>
						<div className={`${styles.selectWrapper} ${styles.mobileFilter}`}>
							<span style={{ color: '#9D9EAA' }}>Anonymity</span>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									marginTop: '10px',
								}}
							>
								<input
									type='checkbox'
									id='hia'
									name='hia'
									value='hia'
									checked={filters.anonymityLevel.elite}
									onChange={(e) => {
										setFilters({
											...filters,
											anonymityLevel: {
												...filters.anonymityLevel,
												elite: e.target.checked,
											},
										});
									}}
								/>
								<label htmlFor='hia'>High anonymous proxy (HIA)</label>
								<input
									type='checkbox'
									id='anm'
									name='anm'
									value='anm'
									checked={filters.anonymityLevel.anonymous}
									onChange={(e) => {
										setFilters({
											...filters,
											anonymityLevel: {
												...filters.anonymityLevel,
												anonymous: e.target.checked,
											},
										});
									}}
								/>
								<label htmlFor='anm'>Anonymous proxy server (ANM)</label>
								<input
									type='checkbox'
									id='noa'
									name='noa'
									value='noa'
									checked={filters.anonymityLevel.transparent}
									onChange={(e) => {
										setFilters({
											...filters,
											anonymityLevel: {
												...filters.anonymityLevel,
												transparent: e.target.checked,
											},
										});
									}}
								/>
								<label htmlFor='noa'>Non anonymous proxy (NOA)</label>
							</div>
						</div>

						<div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
							<div className={styles.mobileFilterAnonymity}>
								<div style={{ color: '#9D9EAA' }}>Anonymity</div>
								<div
									style={{
										display: 'flex',
										width: '70%',
										margin: '10px 0 6px 10px',
										justifyContent: 'space-around',
									}}
								>
									<div>
										<input
											type='checkbox'
											id='hia'
											name='hia'
											value='hia'
											checked={filters.anonymityLevel.elite}
											onChange={(e) => {
												setFilters({
													...filters,
													anonymityLevel: {
														...filters.anonymityLevel,
														elite: e.target.checked,
													},
												});
											}}
										/>
										<label htmlFor='hia'>HIA</label>
									</div>
									<div>
										<input
											type='checkbox'
											id='anm'
											name='anm'
											value='anm'
											checked={filters.anonymityLevel.anonymous}
											onChange={(e) => {
												setFilters({
													...filters,
													anonymityLevel: {
														...filters.anonymityLevel,
														anonymous: e.target.checked,
													},
												});
											}}
										/>
										<label htmlFor='anm'>ANM</label>
									</div>
									<div>
										<input
											type='checkbox'
											id='noa'
											name='noa'
											value='noa'
											checked={filters.anonymityLevel.transparent}
											onChange={(e) => {
												setFilters({
													...filters,
													anonymityLevel: {
														...filters.anonymityLevel,
														transparent: e.target.checked,
													},
												});
											}}
										/>
										<label htmlFor='noa'>NOA</label>
									</div>
								</div>
							</div>

							<div className={styles.mobileFilterProxy}>
								<span style={{ color: '#9D9EAA' }}>Proxy</span>
								<div className={styles.protocolInputs}>
									<div style={{ marginBottom: '5x' }}>
										<input
											type='checkbox'
											id='http'
											name='http'
											value='http'
											checked={filters.protocols.http}
											onChange={(e) => {
												setFilters({
													...filters,
													protocols: {
														...filters.protocols,
														http: e.target.checked,
													},
												});
											}}
										/>
										<label style={{ marginBottom: '25px' }} htmlFor='http'>
											HTTP
										</label>
										<input
											type='checkbox'
											id='https'
											name='https'
											value='https'
											checked={filters.protocols.https}
											onChange={(e) => {
												setFilters({
													...filters,
													protocols: {
														...filters.protocols,
														https: e.target.checked,
													},
												});
											}}
										/>
										<label htmlFor='https'>HTTPS</label>
									</div>
									<div>
										<input
											type='checkbox'
											id='socks4'
											name='socks4'
											value='socks4'
											checked={filters.protocols.socks4}
											onChange={(e) => {
												setFilters({
													...filters,
													protocols: {
														...filters.protocols,
														socks4: e.target.checked,
													},
												});
											}}
										/>
										<label style={{ marginBottom: '25px' }} htmlFor='socks4'>
											SOCKS4
										</label>
										<input
											type='checkbox'
											id='socks5'
											name='socks5'
											value='socks5'
											checked={filters.protocols.socks5}
											onChange={(e) => {
												setFilters({
													...filters,
													protocols: {
														...filters.protocols,
														socks5: e.target.checked,
													},
												});
											}}
										/>
										<label htmlFor='socks5'>SOCKS5</label>
									</div>
								</div>
							</div>
						</div>

						<div className={`${styles.selectWrapper} ${styles.mobileFilter}`}>
							<span style={{ color: '#9D9EAA' }}>Proxy protocol</span>
							<div className={styles.protocolInputs}>
								<input
									type='checkbox'
									id='http'
									name='http'
									value='http'
									checked={filters.protocols.http}
									onChange={(e) => {
										setFilters({
											...filters,
											protocols: {
												...filters.protocols,
												http: e.target.checked,
											},
										});
									}}
								/>
								<label htmlFor='http'>HTTP</label>
								<input
									type='checkbox'
									id='https'
									name='https'
									value='https'
									checked={filters.protocols.https}
									onChange={(e) => {
										setFilters({
											...filters,
											protocols: {
												...filters.protocols,
												https: e.target.checked,
											},
										});
									}}
								/>
								<label htmlFor='https'>HTTPS</label>
								<input
									type='checkbox'
									id='socks4'
									name='socks4'
									value='socks4'
									checked={filters.protocols.socks4}
									onChange={(e) => {
										setFilters({
											...filters,
											protocols: {
												...filters.protocols,
												socks4: e.target.checked,
											},
										});
									}}
								/>
								<label htmlFor='socks4'>SOCKS4</label>
								<input
									type='checkbox'
									id='socks5'
									name='socks5'
									value='socks5'
									checked={filters.protocols.socks5}
									onChange={(e) => {
										setFilters({
											...filters,
											protocols: {
												...filters.protocols,
												socks5: e.target.checked,
											},
										});
									}}
								/>
								<label htmlFor='socks5'>SOCKS5</label>
							</div>
						</div>

						<div className={`${styles.selectWrapper} ${styles.mobileFilter}`}>
							<span style={{ color: '#9D9EAA' }}>Speed</span>
							<div style={{ marginTop: '10px', display: 'flex' }}>
								<input
									type='checkbox'
									id='fast'
									checked={filters.speed === 'fast'}
									onChange={(e) => {
										setFilters({
											...filters,
											speed: filters.speed === 'fast' ? '' : 'fast',
										});
									}}
									name='fast'
									value='fast'
								/>
								<label htmlFor='fast'>Fast</label>
								<input
									type='checkbox'
									id='medium'
									checked={filters.speed === 'medium'}
									onChange={(e) => {
										setFilters({
											...filters,
											speed: filters.speed === 'medium' ? '' : 'medium',
										});
									}}
									name='medium'
									value='medium'
								/>
								<label htmlFor='medium'>Medium</label>
								<input
									type='checkbox'
									id='slow'
									checked={filters.speed === 'slow'}
									onChange={(e) => {
										setFilters({
											...filters,
											speed: filters.speed === 'slow' ? '' : 'slow',
										});
									}}
									name='slow'
									value='slow'
								/>
								<label htmlFor='slow'>Slow</label>
							</div>
						</div>
					</div>

					<div className={`${styles.filterWrapperItem} ${styles.mobileFilter}`}>
						<div style={{ width: '100%' }}>
							<label htmlFor='isps'>
								<span style={{ color: '#9D9EAA' }}>ORG & ASN</span> <br></br>
								{/* <div className={styles.chevronUpFilter}>
									<ChevronUp></ChevronUp>
								</div> */}
								<select
									onChange={(e) => {
										setFilters({ ...filters, filterByOrg: e.target.value });
									}}
									style={{ width: '100%', paddingRight: '35px' }}
									id='isps'
									name='isps'
								>
									<option defaultValue={filters.filterByOrg === ''} value=''>
										All ORGs & ASNs
									</option>
									{orgsAsn.map((elem, index) => {
										return (
											<option
												key={index}
												defaultValue={filters.filterByOrg === { elem }}
												value={elem}
											>
												{elem}
											</option>
										);
									})}
								</select>
							</label>
						</div>

						<div
							className={`${styles.uptimeChecked} flex justify-between gap-4`}
						>
							<label
								className='w-full'
								htmlFor='uptime'
								style={{ position: 'relative' }}
							>
								<span style={{ color: '#9D9EAA' }}>Uptime</span> <br></br>
								{/* <div className={styles.chevronUpFilterUptime}>
									<ChevronUp></ChevronUp>
								</div> */}
								<select
									onChange={(e) => {
										setFilters({ ...filters, filterUpTime: e.target.value });
									}}
									// style={{ width: '135px' }}
									id='uptime'
									name='uptime'
								>
									<option selected={filters.filterUpTime === '100'} value='100'>
										= 100%
									</option>
									<option selected={filters.filterUpTime === '90'} value='90'>
										>= 90%
									</option>
									<option selected={filters.filterUpTime === '80'} value='80'>
										>= 80%
									</option>
									<option selected={filters.filterUpTime === '70'} value='70'>
										>= 70%
									</option>
									<option selected={filters.filterUpTime === '60'} value='60'>
										>= 60%
									</option>
									<option selected={filters.filterUpTime === '50'} value='50'>
										>= 50%
									</option>
									<option selected={filters.filterUpTime === '40'} value='40'>
										>= 40%
									</option>
									<option selected={filters.filterUpTime === '30'} value='30'>
										>= 30%
									</option>
									<option selected={filters.filterUpTime === '20'} value='20'>
										>= 20%
									</option>
									<option selected={filters.filterUpTime === '10'} value='10'>
										>= 10%
									</option>
									<option selected={filters.filterUpTime === ''} value=''>
										>= 0%
									</option>
								</select>
							</label>
							<label
								className='w-full'
								htmlFor='proxy-limit'
								style={{ position: 'relative' }}
							>
								<span style={{ color: '#9D9EAA' }}>Last Checked</span> <br></br>
								{/* <div className={styles.chevronUpFilterUptime}>
									<ChevronUp></ChevronUp>
								</div> */}
								<select
									onChange={(e) => {
										setFilters({
											...filters,
											filterLastChecked: e.target.value,
										});
									}}
									// style={{ width: '135px' }}
								>
									<option
										defaultValue={filters.filterLastChecked === ''}
										value=''
									>
										All
									</option>
									<option
										defaultValue={filters.filterLastChecked === '60'}
										value='60'
									>
										&#60;= 60 mins
									</option>
									<option
										defaultValue={filters.filterLastChecked === '50'}
										value='50'
									>
										&#60;= 50 mins
									</option>
									<option
										defaultValue={filters.filterLastChecked === '40'}
										value='40'
									>
										&#60;= 40 mins
									</option>
									<option
										defaultValue={filters.filterLastChecked === '30'}
										value='30'
									>
										&#60;= 30 mins
									</option>
									<option
										defaultValue={filters.filterLastChecked === '20'}
										value='20'
									>
										&#60;= 20 mins
									</option>
									<option
										defaultValue={filters.filterLastChecked === '10'}
										value='10'
									>
										&#60;= 10 mins
									</option>
									<option
										defaultValue={filters.filterLastChecked === '9'}
										value='9'
									>
										&#60;= 9 mins
									</option>
									<option
										defaultValue={filters.filterLastChecked === '8'}
										value='8'
									>
										&#60;= 8 mins
									</option>
									<option
										defaultValue={filters.filterLastChecked === '7'}
										value='7'
									>
										&#60;= 7 mins
									</option>
									<option
										defaultValue={filters.filterLastChecked === '6'}
										value='6'
									>
										&#60;= 6 mins
									</option>
									<option
										defaultValue={filters.filterLastChecked === '5'}
										value='5'
									>
										&#60;= 5 mins
									</option>
									<option
										defaultValue={filters.filterLastChecked === '4'}
										value='4'
									>
										&#60;= 4 mins
									</option>
									<option
										defaultValue={filters.filterLastChecked === '3'}
										value='3'
									>
										&#60;= 3 mins
									</option>
									<option
										defaultValue={filters.filterLastChecked === '2'}
										value='2'
									>
										&#60;= 2 mins
									</option>
									<option
										defaultValue={filters.filterLastChecked === '1'}
										value='1'
									>
										&#60;= 1 min
									</option>
								</select>
							</label>
						</div>
					</div>
				</div>

				<div className={styles.openLinkInput}>
					<div className={styles.openLinkInputWrapper}>
						<div
							style={{
								color: '#9D9EAA',
								minWidth: '235px',
								display: 'flex',
								alignItems: 'center',
								marginLeft: '5px',
							}}
						>
							Load proxies through a URL
						</div>
						<input disabled readOnly type='text' value={link}></input>
						<img
							onClick={() => window.open(link, '_blank')}
							className={styles.openLinkImg}
							src={newTabImg}
							alt='new-tab'
							width={15}
							height={15}
						/>
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
				<div className={styles.tableResponsive}>{children}</div>
			</div>
			<div className={styles.tableFooterWrapper}>
				<div className={styles.footerProxyPerPage}>
					Proxy IP per page:
					<label style={{ position: 'relative', backgroundColor: '#11122d' }}>
						<div
							style={{
								position: 'absolute',
								right: '34px',
								width: '1em',
								height: '1em',
							}}
						>
							<ChevronUpPagination></ChevronUpPagination>
						</div>
						<select
							onChange={(e) => {
								setFilters({ ...filters, perPage: e.target.value });
							}}
							style={{ minWidth: '48px' }}
							id='proxy-per-page'
							name='proxy-per-page'
						>
							<option selected={filters.perPage === '50'} value='50'>
								50
							</option>
							<option selected={filters.perPage === '100'} value='100'>
								100
							</option>
							<option selected={filters.perPage === '150'} value='150'>
								150
							</option>
							<option selected={filters.perPage === '200'} value='200'>
								200
							</option>
						</select>
					</label>
					{1 + (filters.page - 1) * filters.perPage}—
					{filters.perPage * filters.page} of {`${total.toLocaleString()}`}{' '}
					proxies
				</div>

				<div style={{ display: 'flex', alignItems: 'center' }}>
					<label
						style={{
							position: 'relative',
							backgroundColor: '#11122d',
							display: 'flex',
							marginRight: '15px',
						}}
					>
						{totalPages === 0 ? null : (
							<div style={{ position: 'absolute', left: '37px' }}>
								<ChevronUpPagination></ChevronUpPagination>
							</div>
						)}
						<select
							onChange={(e) => {
								setFilters({ ...filters, page: Number(e.target.value) });
							}}
							id='proxy-per-page'
							style={{ margin: '0 !important', minWidth: '40px' }}
							name='proxy-per-page'
						>
							{Array.from({ length: parseInt(totalPages) }).map(
								(elem, index) => {
									return (
										<option
											selected={filters.page === index + 1}
											key={index}
											value={`${index + 1}`}
										>{`${index + 1}`}</option>
									);
								}
							)}
						</select>
					</label>
					{totalPages === 0 ? null : (
						<>
							of {totalPages} pages
							<div
								style={{ marginLeft: '15px', display: 'flex' }}
								onClick={handlePrevPage}
							>
								<PageLeft
									color={`${filters.page > 1 ? '#EDEEFF' : '#28283e'}`}
								></PageLeft>
							</div>
							<div
								style={{ marginLeft: '15px', display: 'flex' }}
								onClick={handleNextPage}
							>
								<PageRight
									color={`${
										filters.page >= totalPages ? '#28283e' : '#EDEEFF'
									}`}
								></PageRight>
							</div>
						</>
					)}
				</div>
			</div>

			<div className={styles.tableFooterWrapperMobile}>
				<div style={{ display: 'flex' }} onClick={handlePrevPage}>
					<PageLeft
						color={`${filters.page > 1 ? '#BFD0FF' : '#9D9EAA'}`}
					></PageLeft>
					<div
						style={{
							color: `${filters.page > 1 ? '#BFD0FF' : '#9D9EAA'}`,
							marginLeft: '4px',
						}}
					>
						Previous
					</div>
				</div>
				<div className={styles.footerMobileProxies}>
					{1 + (filters.page - 1) * filters.perPage}—
					{filters.perPage * filters.page} of {total} proxies
				</div>
				<div>
					<div style={{ display: 'flex' }} onClick={handleNextPage}>
						<div
							style={{
								color: `${filters.page >= totalPages ? '#9D9EAA' : '#BFD0FF'}`,
								marginRight: '4px',
							}}
						>
							Next
						</div>
						<PageRight
							color={`${filters.page >= totalPages ? '#9D9EAA' : '#BFD0FF'}`}
						></PageRight>
					</div>
				</div>
			</div>
		</>
	);
};

export default FilterDropDowm;
