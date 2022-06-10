import React, { useEffect, useState } from 'react';
import styles from '@styles/freeProxy.module.scss';
import axios from 'axios';
import GeoInput from '@components/form-control/Input';
import { useForm } from 'react-hook-form';
import FilterContainer from './FilterContainer';
import FreeProxyTableHeader from './FreeProxyTableHeader';
import FreeProxyTable from './FreeProxyTable';

const testSelecVal = [
	{ label: 'Test', value: 'test' },
	{ label: 'Test1', value: 'test1' },
	{ label: 'Test2', value: 'test2' },
];

const initFilter = {
	perPage: '50',
	page: 1,
	speed: '',
	protocols: [],
	anonymityLevel: [],
	google: '',
	countries: '',
	filterUpTime: '',
	filterLastChecked: '',
	filterByOrg: '',
	ipAdress: '',
	filterPort: '',
	sortedField: 'lastChecked',
	sortedType: 'desc',
};

const FreeProxyList = () => {
	const [proxyList, setProxyList] = useState([]);
	const [total, setTotal] = useState(0);
	const [isLoading, setIsloading] = useState(false);
	const [countries, setCountries] = useState([]);
	const [orgAsnList, setOrgAsnList] = useState([]);
	const [totalPage, setTotalPage] = useState(1);

	const [proxyUrl, setProxyUrl] = useState('');

	const [filters, setFilters] = useState(initFilter);

	// useEffect(() => {
	// 	setFilters({
	// 		...filters,
	// 		page: 1,
	// 	});
	// }, [
	// 	filters.speed,
	// 	filters.protocols,
	// 	filters.anonymityLevel,
	// 	filters.google,
	// 	filters.countries,
	// 	filters.filterUpTime,
	// 	filters.filterLastChecked,
	// 	filters.filterByOrg,
	// 	filters.ipAdress,
	// 	filters.filterPort,
	// 	filters.sortedField,
	// ]);

	useEffect(() => {
		setIsloading(true);
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

		// let protocolParams = Object.keys(filters.protocols).filter(
		// 	(key) => filters.protocols[key]
		// );
		let protocolParams = filters.protocols.map((protocol) => protocol.value);
		protocolParams.length && (params.protocols = protocolParams);

		let anonymityLevelParams = filters.anonymityLevel.map(
			(anonymity) => anonymity.value
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

		setProxyUrl(request);

		axios.get(`${request}`).then((res) => {
			setProxyList(res.data.data);
			setTotal(res.data.total);
			setIsloading(false);
		});
	}, [filters]);

	useEffect(() => {
		axios.get('https://proxylist.geonode.com/api/countries').then((resp) => {
			setCountries(resp.data.data);
		});
	}, []);

	useEffect(() => {
		axios
			.get(
				`https://proxylist.geonode.com/api/organdasn?limit=${filters.perPage}&page=${filters.page}`
			)
			.then((resp) => {
				setOrgAsnList([
					{ label: 'All ORGs & ASNs', value: '' },
					...resp.data.data.map((elem) => {
						return { label: elem.org, value: elem.org };
					}),
				]);
			});
	}, [filters.perPage, filters.page]);

	useEffect(() => {
		setTotalPage(Math.ceil(total / filters.perPage));
	}, [filters, total]);

	const onChangeProxyUrl = (e) => {
		setProxyUrl(e.target.value);
	};

	const onChangefilter = (filterName, val) => {
		setFilters((prev) => ({ ...prev, [filterName]: val }));
	};

	const onSortColumn = (colName) => {
		setFilters((prev) => ({
			...prev,
			sortedField: colName,
			sortedType: prev.sortedType === 'desc' ? 'asc' : 'desc',
		}));
	};

	const columns = [
		{
			key: 'ipAddress',
			label: 'IP address',
			width: 'w-32',
		},
		{
			key: 'port',
			label: 'Port',
			width: 'w-16',
		},
		{
			key: 'country',
			label: 'Country',
			width: 'w-16',
			onClick: () => onSortColumn('country'),
		},
		{
			key: 'protocols',
			label: 'Protocols',
			width: 'w-16',
		},
		{
			key: 'anonymity',
			label: 'Anonymity',
			width: 'w-16',
		},
		{
			key: 'orgAsn',
			label: 'ORG & ASN',
			width: 'w-32',
		},
		{
			key: 'speed',
			label: 'Speed',
			width: 'w-16',
			onClick: () => onSortColumn('speed'),
		},
		{
			key: 'upTime',
			label: 'Uptime',
			width: 'w-16',
			onClick: () => onSortColumn('upTime'),
		},
		{
			key: 'responseTime',
			label: 'Response',
			width: 'w-16',
			onClick: () => onSortColumn('responseTime'),
		},
		{
			key: 'google',
			label: 'Google',
			width: 'w-16',
		},
		{
			key: 'latency',
			label: 'Latency',
			width: 'w-16',
			onClick: () => onSortColumn('latency'),
		},
		{
			key: 'lastChecked',
			label: 'Updated',
			width: 'w-16',
			onClick: () => onSortColumn('lastChecked'),
		},
	];

	return (
		<div className='relative'>
			<div className='text-5xl leading-none font-bold text-white text-center mb-16'>
				<h1>Free Proxy List</h1>
			</div>

			<div className='flex items-start gap-8'>
				<div className='max-w-64'>
					<FilterContainer
						countriesOptions={countries}
						orgAsnOptions={orgAsnList}
						onChangefilter={onChangefilter}
					/>
				</div>
				<div className='w-full'>
					<div className='bg-secondary-200 rounded-lg py-6 border border-secondary-50'>
						<FreeProxyTableHeader
							value={proxyUrl}
							onChange={onChangeProxyUrl}
							proxyList={proxyList}
						/>

						<FreeProxyTable
							columns={columns}
							datasource={proxyList}
							total={total}
							isLoading={isLoading}
							filters={filters}
							setFilters={setFilters}
							totalPage={totalPage}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FreeProxyList;
