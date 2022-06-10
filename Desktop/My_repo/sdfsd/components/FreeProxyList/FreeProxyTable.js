import Flags from 'country-flag-icons/react/3x2';
import GeoButton from '@components/Button';
import { ArrowIcon, CheckIcon, CloseIcon } from '@shared/svgIcons';
import styles from '@styles/freeProxy.module.scss';
import Badge from '@components/Badge';
import moment from 'moment';
import { CustomLoader } from '@components/customLoader';
import TableLoader from '@components/customLoader/tableLoader';

const FreeProxyTable = (props) => {
	const {
		columns = [],
		datasource,
		total,
		isLoading,
		totalPage,
		filters,
		setFilters,
	} = props;

	const prevHandler = () => {
		if (filters.page <= 1) {
			setFilters((prev) => ({ ...prev, page: 1 }));
			return;
		}

		setFilters((prev) => ({ ...prev, page: filters.page - 1 }));
	};

	const nextHandler = () => {
		if (filters.page >= parseInt(totalPage)) {
			setFilters((prev) => ({ ...prev, page: parseInt(totalPage) }));
			return;
		}
		setFilters((prev) => ({ ...prev, page: filters.page + 1 }));
	};

	const renderSpeed = (s) => {
		if (s > 500) {
			return <Badge label={`${s} sm`} variant='neon' showDot size='sm' />;
		} else if (s > 100) {
			return <Badge label={`${s} sm`} variant='secondary' showDot size='sm' />;
		} else {
			return <Badge label={`${s} sm`} showDot size='sm' />;
		}
	};

	return (
		<div className='flex flex-col overflow-hidden'>
			<div
				className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'
				style={{ width: '1180px' }}
			>
				<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
					<div className='shadow overflow-hidden border-b border-secondary-100'>
						<table className={`${styles.table} min-w-full`}>
							<thead className='bg-secondary-100'>
								<tr>
									{columns.map((col) => (
										<th
											scope='col'
											className={`${col.width} px-6 py-3 whitespace-nowrap text-left text-xs font-medium text-support1-base uppercase tracking-wider`}
											onClick={col.onClick && col.onClick}
										>
											<span className='flex items-center gap-1'>
												{col.label}
												<span
													className={`inline-flex ${
														filters.sortedType === 'asc' &&
														'transform rotate-180'
													} `}
												>
													{filters.sortedField === col.key && ArrowIcon}
												</span>
											</span>
										</th>
									))}
								</tr>
							</thead>
							<tbody className='bg-seondary-200 font-roboto'>
								{!isLoading &&
									datasource.map((data, idx) => (
										<tr key={idx}>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-supportShamrock-base'>
												{data.ip}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-supportShamrock-base'>
												{data.port}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-support1-base'>
												<div className='flex'>
													<span>{countryFlag(data.country)}</span>
													<span className='uppercase'>{data.country}</span>
												</div>
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-support1-base'>
												{data.protocols.map((protocol, idx) => (
													<span
														key={idx}
														className='bg-support4-200 px-2 py-1 rounded uppercase'
													>
														{protocol}
													</span>
												))}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-support1-base capitalize'>
												{data.anonymityLevel}
											</td>
											<td
												className={`${styles.overflowContainer} px-6 py-4 whitespace-nowrap text-sm text-support1-base`}
											>
												<div className='relative flex'>
													<span className='w-52 overflow-hidden mr-8'>
														{data.org === null ? 'N/A' : data.org}{' '}
														{data.asn === null ? 'N/A' : data.org}
													</span>
													<p
														className={`absolute ${styles.overlay}`}
														style={{ width: 83, height: 20 }}
													></p>
												</div>
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-support1-base'>
												{data.speed === null ? 'N/A' : renderSpeed(data.speed)}
												{/* <Badge label={data.speed} showDot size='sm' /> */}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-support1-base'>
												{!data.upTime ? 'N/A' : `${data.upTime.toFixed()}%`}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-support1-base'>
												{data.responseTime === null
													? 'N/A'
													: `${data.responseTime} ms`}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-support1-base'>
												{data.google
													? CheckIcon
													: CloseIcon({ color: '#F6F6F7' })}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-support1-base'>
												{data.latency === null
													? 'N/A'
													: `${data.latency.toFixed()} ms`}
											</td>
											<td className='px-6 py-4 whitespace-nowrap text-sm text-support1-base'>
												{data.lastChecked === null
													? 'N/A'
													: dataFormatted(data.lastChecked)}
											</td>
										</tr>
									))}
							</tbody>
						</table>
						{isLoading && (
							<div className=''>
								{/* <CustomLoader size='sm' /> */}
								<TableLoader />
							</div>
						)}
					</div>
				</div>
			</div>
			<nav
				className='px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'
				aria-label='Pagination'
			>
				<div className='hidden sm:block'>
					<p className='text-sm text-support1-base'>
						<span className='font-medium'>{datasource.length}</span> entries out
						of <span className='font-medium'>{total}</span>
					</p>
				</div>
				<div className='flex-1 flex justify-between sm:justify-end gap-2'>
					<GeoButton
						variant='secondary'
						label='Previous'
						size='sm'
						onClick={prevHandler}
						disabled={false}
					/>
					<GeoButton
						variant='secondary'
						label='Next'
						size='sm'
						onClick={nextHandler}
						disabled={totalPage === filters.page || totalPage === 0}
					/>
				</div>
			</nav>
		</div>
	);
};

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
			style={{ marginRight: '12px' }}
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

export default FreeProxyTable;
