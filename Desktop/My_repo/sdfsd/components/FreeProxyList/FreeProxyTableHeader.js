import React, { useState } from 'react';
import { DownloadIcon } from '@shared/svgIcons';
import GeoInput from '@components/form-control/Input';
import GeoButton from '@components/Button';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const FreeProxyTableHeader = (props) => {
	const { value, onChange, proxyList } = props;

	const [exportType, setExportType] = useState('json');

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

		if (exportType === 'csv') {
			saveData(formatted, 'Free_Proxy_List.csv');
		}
		if (exportType === 'json') {
			saveData(JSON.stringify(proxyList), 'Free_Proxy_List.json');
		}
		if (exportType === 'txt') {
			saveData(formatted, 'Free_Proxy_List.txt');
		}
	};

	return (
		<div className='flex gap-4 pb-5 px-6'>
			<div className='w-full'>
				<div className='text-sm leading-5 font-medium text-support1-base'>
					<h3>Load proxies through a URL</h3>
				</div>
				<div className='text-support1-base font-roboto'>
					<GeoInput
						placeholder='Proxy url'
						inputProps={{
							onChange,
							value,
							readOnly: true,
						}}
					/>
				</div>
			</div>
			<div className=''>
				<div className='text-sm leading-5 font-medium text-support1-base mb-1'>
					<h3>Export list as</h3>
				</div>
				<div className='flex gap-3'>
					<span className='relative z-0 inline-flex shadow-sm rounded-md'>
						<button
							type='button'
							className={classNames(
								exportType === 'json' ? 'bg-secondary-50' : 'bg-secondary-100',
								'relative inline-flex items-center px-4 py-2 rounded-l-md border border-secondary-50 text-sm font-medium text-support1-base uppercase hover:bg-opacity-20'
							)}
							onClick={(e) => setExportType('json')}
						>
							JSON
						</button>
						<button
							type='button'
							className={classNames(
								exportType === 'txt' ? 'bg-secondary-50' : 'bg-secondary-100',
								'-ml-px relative inline-flex items-center px-4 py-2 border border-secondary-50 text-sm font-medium text-support1-base uppercase hover:bg-opacity-20'
							)}
							onClick={(e) => setExportType('txt')}
						>
							TXT
						</button>
						<button
							type='button'
							className={classNames(
								exportType === 'csv' ? 'bg-secondary-50' : 'bg-secondary-100',
								'-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-secondary-50 text-sm font-medium text-support1-base uppercase hover:bg-opacity-20'
							)}
							onClick={(e) => setExportType('csv')}
						>
							CSV
						</button>
					</span>

					<GeoButton
						label='Download'
						size='sm'
						startIcon={DownloadIcon}
						variant='blue'
						onClick={downloadData}
						disabled={proxyList.length === 0}
					/>
				</div>
			</div>
		</div>
	);
};

export default FreeProxyTableHeader;
