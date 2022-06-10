import React, { useEffect, useState } from 'react';
import { CodeBlock, atomOneDark } from 'react-code-blocks';
import PerfectScrollbar from 'react-perfect-scrollbar';
import GeoSelect from '../form-control/Select';
import GeoInput from '../form-control/Input';
import { proxyCountries } from '@mockdata/countries';
import { utilsService } from '../../services';
import {
	csCode,
	goCode,
	javaCode,
	jsCode,
	perlCode,
	phpCode,
	pythonCode,
	shallCode,
	visualBasicCode,
} from './codes';

import styles from './codes.module.scss';

const proxyServiceOptions = [
	/* {
		label: 'Residential Untemetered',
		value: 'rotating-residential.geonode.com',
		key: 'RESIDENTIAL-UNMETERED',
	}, */
	{
		label: 'Residential Premium',
		value: 'premium-residential.geonode.com',
		key: 'RESIDENTIAL-PREMIUM',
	},
	{
		label: 'Residential Private',
		value: 'private-residential.geonode.com',
		key: 'RESIDENTIAL-PRIVATE',
	},
];

const proxyTypeOptionData = [
	{ label: 'Rotating Proxy', value: 'rotating' },
	{ label: 'Sticky Proxy', value: 'sticky' },
];

const autoReplaceSessionOptions = [
	{
		label: 'Yes',
		value: true,
	},
	{
		label: 'No',
		value: false,
	},
];

const languages = [
	{ label: 'Node.js', language: 'javascript' },
	{ label: 'C#', language: 'c' },
	{ label: 'GO', language: 'go' },
	{ label: 'Java', language: 'java' },
	{ label: 'Perl', language: 'perl' },
	{ label: 'Php', language: 'php' },
	{ label: 'Python', language: 'python' },
	{ label: 'Shell', language: 'shell' },
	{ label: 'Visual Basic', language: 'vbnet' },
];

const proxyPortRangeData = {
	/* "RESIDENTIAL-UNMETERED": {
    rotatingPorts: { min: 9000, max: 9050 },
    stickyPorts: { min: 10000, max: 10500 },
  }, */
	'RESIDENTIAL-PREMIUM': {
		rotatingPorts: { min: 9000, max: 9000 },
		stickyPorts: { min: 10000, max: 10500 },
	},
	'RESIDENTIAL-PRIVATE': {
		stickyPorts: { min: 10000, max: 10500 },
	},
};

const ApiCodeGenerator = () => {
	const [destinationUrl, setDestinationUrl] = useState(
		'http://ip-api.com/json'
	);
	const [proxyTypeOptions, setProxyTypeOptions] = useState(proxyTypeOptionData);
	const [proxyService, setProxyService] = useState({
		label: 'Residential Premium',
		value: 'rotating-residential.geonode.com',
		key: 'RESIDENTIAL-PREMIUM',
	});
	const [proxyType, setProxyType] = useState(proxyTypeOptionData[0]);
	const [countryTarget, setCountryTarget] = useState({
		label: 'Any',
		value: false,
	});
	const [autoReplace, setAutoReplace] = useState({
		label: 'Yes',
		value: 'yes',
	});
	const [countriesOptions, setCountriesOptions] = useState([]);
	const [rotatingPorts, setRotatingPorts] = useState(null);
	const [stickyPorts, setStickyPorts] = useState(null);

	useEffect(() => {
		if (proxyService && proxyType) {
			setCountriesOptions(
				initProxyCountries(proxyService.key, proxyType.value)
			);
		}

		if (proxyService) {
			setRotatingPorts(proxyPortRangeData[proxyService.key]?.rotatingPorts);
			setStickyPorts(proxyPortRangeData[proxyService.key].stickyPorts);

			if (proxyService.key === 'RESIDENTIAL-PRIVATE') {
				setProxyType(proxyTypeOptionData[1]);
				setProxyTypeOptions(
					proxyTypeOptions.filter((item) => item.value === 'sticky')
				);
			} else {
				setProxyTypeOptions(proxyTypeOptionData);
			}
		}
	}, [proxyService, proxyType]);

	return (
		<div className='api-code-gererator'>
			<div className='page-card-container flex flex-col justify-center lg:flex-row gap-6'>
				<InputCard
					{...{
						proxyTypeOptions,
						setDestinationUrl,
						destinationUrl,
						setProxyService,
						proxyService,
						setProxyType,
						proxyType,
						setCountryTarget,
						countryTarget,
						setAutoReplace,
						autoReplace,
						countriesOptions,
					}}
				/>

				<CodeBlocks
					{...{
						destinationUrl,
						proxyService,
						countryTarget,
						proxyType,
						rotatingPorts: rotatingPorts,
						stickyPorts: stickyPorts,
						autoReplace: autoReplace && autoReplace.value,
					}}
				/>
			</div>
		</div>
	);
};

const InputCard = (props) => {
	const {
		proxyTypeOptions,
		countriesOptions,
		setDestinationUrl,
		destinationUrl,
		setProxyService,
		proxyService,
		proxyType,
		setProxyType,
		setCountryTarget,
		countryTarget,
		setAutoReplace,
		autoReplace,
		disabledProxyServiceOption = false,
	} = props;

	return (
		<div
			className='hidden lg:flex justify-center inputs-container mx-auto w-full sm:w-1/2 lg:w-2/6'
			style={{ height: 526 }}
		>
			<div className='w-full bg-secondary-200 rounded p-8 h-full shadow-xl text-gray-50'>
				<div className='inputs-header text-xl leading-7 font-semibold mb-6 text-primary-50'>
					<h2>API code generator</h2>
				</div>
				<div className=''>
					<div className='mb-4'>
						<GeoSelect
							label='Proxy service'
							size='medium'
							options={proxyServiceOptions}
							selected={proxyService}
							onChange={(val) => [setProxyService(val), setProxyType(null)]}
							disabled={disabledProxyServiceOption}
						/>
					</div>
					<div className='mb-4'>
						<GeoSelect
							label='Proxy Type'
							options={proxyTypeOptions}
							selected={
								proxyTypeOptions.length === 1 ? proxyTypeOptions[0] : proxyType
							}
							onChange={(val) => setProxyType(val)}
						/>
					</div>
					<div className='mb-4'>
						<GeoSelect
							label='Country Targeting'
							size='medium'
							options={countriesOptions}
							selected={countryTarget}
							onChange={(val) => setCountryTarget(val)}
						/>
					</div>
					<div className='mb-4'>
						<GeoSelect
							label='Auto-replace sessions'
							options={autoReplaceSessionOptions}
							selected={autoReplace}
							onChange={(val) => setAutoReplace(val)}
						/>
					</div>
					<div className='mb-4'>
						<GeoInput
							label='Destination site'
							placeholder='Destination site'
							inputProps={{
								onChange: (e) => setDestinationUrl(e.target.value),
								value: destinationUrl,
							}}
							variant='secondary'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const codeBlocksCustomStyle = {
	backgroundColor: '#0D1020',
	minHeight: '380px',
	overflowX: 'unset',
	fontFamily: 'Roboto Mono',
	fontSize: '14px',
};

const CodeBlocks = (props) => {
	const {
		destinationUrl,
		proxyService,
		countryTarget,
		autoReplace,
		proxyType,
		rotatingPorts,
		stickyPorts,
	} = props;
	const [code, setCode] = useState(jsCode);
	const [activeTab, setActiveTab] = useState('javascript');
	const authDetails = {
		username: 'geonode_tGsXR6vkQ8',
		apiKey: 'b98a3a57-5902-4275-8826-f5da2e01e381',
	};

	useEffect(() => {
		updateAllFields(null);
	}, [
		destinationUrl,
		proxyService,
		countryTarget,
		autoReplace,
		proxyType,
		rotatingPorts,
		stickyPorts,
	]);

	const updateCodeParam = (data, currentCode) => {
		let newCode = currentCode;
		data.map((d) => {
			for (const [key, value] of Object.entries(d)) {
				while (newCode.indexOf(key) >= 0) {
					newCode = newCode.replace(key, value);
				}
				return d;
			}
			return d;
		});
		setCode(newCode);
	};

	const getConfiguration = () => {
		let conf = '';
		if (countryTarget && countryTarget.value)
			conf += `-country-${countryTarget.value}`;
		if (autoReplace) conf += `-autoReplace-True`;

		return conf;
	};

	const updateAllFields = (currentCode) => {
		updateCodeParam(
			[
				{
					DESTINATION_URL: destinationUrl,
				},
				{
					PROXY_SERVICE: proxyService.value,
				},
				{
					YOURUSERNAME: `${authDetails.username}${getConfiguration()}`,
				},
				{
					PROXY_PORT:
						proxyType && proxyType.value === 'sticky'
							? stickyPorts?.min
							: rotatingPorts?.min,
				},
			],
			currentCode || getCurrentCode(activeTab)
		);
	};

	const getCurrentCode = (activeTabLanguage) => {
		// setActiveTab(lang);
		switch (activeTabLanguage) {
			case 'javascript':
				return updateUserNameAndApiKey(jsCode, null);
			case 'c':
				return updateUserNameAndApiKey(csCode, null);
			case 'go':
				return updateUserNameAndApiKey(goCode, null);
			case 'java':
				return updateUserNameAndApiKey(javaCode, null);
			case 'perl':
				return updateUserNameAndApiKey(perlCode, null);
			case 'php':
				return updateUserNameAndApiKey(phpCode, null);
			case 'python':
				return updateUserNameAndApiKey(pythonCode, null);
			case 'shell':
				return updateUserNameAndApiKey(shallCode, null);
			case 'vbnet':
				return updateUserNameAndApiKey(visualBasicCode, null);
		}
	};

	const updateUserNameAndApiKey = (str, conf) => {
		if (authDetails) {
			if (str) {
				return str
					.replace(
						'YOURUSERNAME',
						`${authDetails.username}${getConfiguration()}`
					)
					.replace('YOURPASSWORD', authDetails.apiKey);
			}
		} else {
			return str;
		}
	};

	const updateCodeAndLang = (lang) => {
		const currentCode = getCurrentCode(lang);
		setActiveTab(lang);
		updateAllFields(currentCode);
	};

	return (
		<div className='code-container w-full lg:w-4/6 shadow-xl overflow-x-auto'>
			<div
				className='bg-secondary-base rounded w-full h-full py-4'
				style={{ height: 526 }}
			>
				<div className='code-header flex gap-3 px-6 pb-3'>
					<span
						className='bg-support2-base rounded-lg'
						style={{ width: 12, height: 12 }}
					></span>
					<span
						className='bg-support4-base rounded-lg'
						style={{ width: 12, height: 12 }}
					></span>
					<span
						className='bg-support3-base rounded-lg'
						style={{ width: 12, height: 12 }}
					></span>
				</div>

				<PerfectScrollbar
					className={`${styles.scrollBar}`}
					style={{ maxHeight: 36 }}
				>
					<div className={`w-full flex bg-secondary-100`}>
						{languages.map((lang, index) => {
							return (
								<div
									key={index}
									className={`tab-title cursor-pointer flex items-center text-sm leading-5 font-medium px-5 py-2 whitespace-nowrap ${
										lang.language === activeTab
											? 'bg-subtle-600 text-primary-50'
											: 'text-subtle-400 '
									}`}
									onClick={() => updateCodeAndLang(lang.language)}
								>
									<span className={`tab-label`} key={index}>
										{lang.label}
									</span>
								</div>
							);
						})}
					</div>
				</PerfectScrollbar>

				{/* code block */}
				<PerfectScrollbar
					className={`${styles.codesContainer}`}
					style={{ maxHeight: 430 }}
				>
					<div
						className={` codes-blocks-container relative bg-secondary-base px-4 py-2`}
					>
						{/* <div className='copy-icon-container'>
							<div className='copy-icon'>
								<CopyBtn
									copyTextHandler={utilsService.copyToClipboard(
										code.toString()
									)}
									type='icon'
								/>
							</div>
						</div> */}
						<CodeBlock
							customStyle={{
								...codeBlocksCustomStyle,
								borderRadius:
									activeTab === 'javascript'
										? '4px 0px 4px 4px'
										: activeTab === 'vbnet'
										? '0px 4px 4px 4px'
										: '0px 0px 4px 4px',
							}}
							text={code}
							theme={atomOneDark}
							language={activeTab}
							showLineNumbers={true}
							// wrapLines
						/>
					</div>
				</PerfectScrollbar>
			</div>
		</div>
	);
};

const initProxyCountries = (selectedService, proxyType) => {
	const countries = proxyCountries[selectedService][proxyType];

	return [
		{ label: 'Any', value: false, icon: null },
		...countries.items.map((item) => {
			return {
				label: item.name,
				value: item.Alpha2code,
				icon: utilsService.countryFlag(item.Alpha2code, 24),
			};
		}),
	];
};

export default ApiCodeGenerator;
