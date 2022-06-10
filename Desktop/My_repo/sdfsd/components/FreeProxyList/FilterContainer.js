import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	SelectWrapper,
	InputWrapper,
	MultiSelectWrapper,
	SelectCountryWrapper,
} from 'utils/helper';
import {
	anonymityOptions,
	googlePassedOptions,
	lastCheckedOptions,
	protocolOptions,
	speedOptions,
	uptimeOptions,
} from '@components/FreeProxyList/filter';

const FilterContainer = (props) => {
	const { countriesOptions, orgAsnOptions, onChangefilter } = props;

	const {
		register,
		handleSubmit,
		getValues,
		setError,
		control,
		clearErrors,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	const [filterInputs, setFilterInputs] = useState([]);

	useEffect(() => {
		setFilterInputs([
			{
				control,
				errors,
				label: 'Country',
				placeholder: 'Select Country',
				name: 'country',
				type: 'countrySelect',
				size: 'sm',
				countries: [...countriesOptions],
				onChangeHandler: (code) => onChangefilter('countries', code),
			},
			{
				errors,
				inputProps: {
					...register('port', {}),
					onChange: (e) => onChangefilter('filterPort', e.target.value),
				},
				data: getValues('port'),
				placeholder: '8080',
				label: 'Port',
				keyName: 'port',
				type: 'input',
			},
			{
				control,
				setError,
				errors,
				label: 'Anonymity',
				name: 'anonymity',
				placeholder: 'Select',
				selectedLabel: 'Selected',
				options: anonymityOptions,
				variant: 'secondary',
				multiSelect: true,
				type: 'multiSelect',
				onChangeHandler: (val) => onChangefilter('anonymityLevel', val),
			},
			{
				control,
				setError,
				clearErrors,
				errors,
				label: 'ORG & ASN',
				name: 'orgAsn',
				placeholder: 'Select',
				options: orgAsnOptions,
				size: 'medium',
				variant: 'secondary',
				onChangeHandler: (val) => onChangefilter('filterByOrg', val.value),
			},
			{
				control,
				setError,
				clearErrors,
				errors,
				label: 'Proxy protocol',
				name: 'protocol',
				placeholder: 'Select',
				selectedLabel: 'Selected',
				options: protocolOptions,
				variant: 'secondary',
				multiSelect: true,
				type: 'multiSelect',
				onChangeHandler: (val) => onChangefilter('protocols', val),
			},
			{
				control,
				setError,
				clearErrors,
				errors,
				label: 'Speed',
				name: 'speed',
				placeholder: 'Select',
				options: speedOptions,
				size: 'medium',
				variant: 'secondary',
				onChangeHandler: (val) => onChangefilter('speed', val.value),
			},
			{
				control,
				setError,
				clearErrors,
				errors,
				label: 'Uptime',
				name: 'uptime',
				placeholder: 'Select',
				options: uptimeOptions,
				size: 'medium',
				variant: 'secondary',
				onChangeHandler: (val) => onChangefilter('filterUpTime', val.value),
			},
			{
				control,
				setError,
				clearErrors,
				errors,
				label: 'Last checked',
				name: 'lastChecked',
				placeholder: 'Select',
				options: lastCheckedOptions,
				size: 'medium',
				variant: 'secondary',
				onChangeHandler: (val) =>
					onChangefilter('filterLastChecked', val.value),
			},
			{
				control,
				setError,
				clearErrors,
				errors,
				label: 'Google passed',
				name: 'google',
				placeholder: 'Select',
				options: googlePassedOptions,
				size: 'medium',
				variant: 'secondary',
				onChangeHandler: (val) => onChangefilter('google', val.value),
			},
		]);
	}, [countriesOptions, orgAsnOptions]);

	const renderInputs = () => {
		return filterInputs.map((input) => {
			let renderInput = null;
			if (input.type === 'input') {
				renderInput = <InputWrapper {...input} />;
			} else if (input.type === 'multiSelect') {
				renderInput = <MultiSelectWrapper {...input} />;
			} else if (input.type === 'countrySelect') {
				renderInput = <SelectCountryWrapper {...input} />;
			} else {
				renderInput = <SelectWrapper {...input} />;
			}

			return renderInput;
		});
	};

	return (
		<form action=''>
			<div className='space-y-5 w-60'>{renderInputs()}</div>
		</form>
	);
};

export default FilterContainer;
