import { Controller } from 'react-hook-form';
import GeoMultiSelect from '@components/form-control/MultiSelect';
import Select from '@components/form-control/Select';
import { capitalizeFirstLetter } from './utils';
import GeoInput from '@components/form-control/Input';
import SelectCountry from '@components/form-control/SelectCountry';
import GeoCheckbox from '@components/form-control/Checkbox';

export const InputWrapper = props => {
	const { errors, inputProps, keyName, label, placeholder, type, readOnly = false, disabled = false, size = 'md', variant = 'primary', required = false } = props;
	return (
		<div className="input-container">
			<GeoInput
				type={type || 'text'}
				size={size}
				inputProps={{ ...inputProps }}
				label={label}
				disabled={disabled}
				readOnly={readOnly}
				placeholder={placeholder}
				hasError={errors[keyName]}
				message={generateError(errors[keyName])}
				variant={variant}
				required={required}
				name={keyName}
				// rightChild={
				// 	rightChild || (
				// 		<ValidInputIndicator {...{ error: errors[keyName], data }} />
				// 	)
				// }
			/>
		</div>
	);
};

export const MultiSelectWrapper = props => {
	const { name, errors, multiSelect, control, placeholder, selectedLabel, options, label, onChangeHandler = val => null, overflow = false } = props;

	return (
		<Controller
			name={name}
			control={control}
			defaultValue={[]}
			render={({ field: { onChange, onBlur, value } }) => (
				<GeoMultiSelect
					name={name}
					label={label}
					value={value}
					onChange={val => {
						onChange(val);
						onChangeHandler(val);
					}}
					multiSelect={multiSelect}
					placeholder={placeholder}
					selectedLabel={selectedLabel}
					options={options}
					message={generateError(errors[name])}
					overflow={overflow}
				/>
			)}
		/>
	);
};

const generateError = error =>
	error && {
		type: 'error',
		text: error.message,
	};

export const SelectWrapper = ({
	control,
	setError,
	clearErrors,
	errors,
	label,
	name,
	options,
	leftChild = null,
	placeholder,
	required = false,
	size = 'medium',
	variant = 'primary',
	searchable = false,
	overflow = false,
	onChangeHandler = val => null,
	onClear = () => null,
}) => {
	const onSelectChange = (val, onChange) => {
		onChangeHandler(val);
		if (!val || val === undefined) {
			setError(name, {
				type: 'manual',
				message: `${capitalizeFirstLetter(name)} is required`,
			});
			return;
		} else {
			clearErrors(name);
		}
		onChange(val);
	};

	const onClearValue = onChange => {
		onChange(null);
		onClear();
	};

	return (
		<div className="input-container">
			<Controller
				name={name}
				control={control}
				defaultValue={''}
				rules={{
					required: required && `${capitalizeFirstLetter(name)} is required`,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<Select
						size={size}
						label={label}
						name={name}
						options={options}
						placeholder={placeholder}
						hasError={errors[name]}
						message={generateError(errors[name])}
						leftChild={leftChild}
						onChange={val => onSelectChange(val, onChange)}
						selected={value}
						variant={variant}
						searchable={searchable}
						overflow={overflow}
						clearValue={() => onClearValue(onChange)}
					/>
				)}
			/>
		</div>
	);
};

export const SelectCountryWrapper = props => {
	const { name, errors, control, label, placeholder, size = 'md', countries = [], onChangeHandler, onClear } = props;
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={''}
			render={({ field: { onChange, onBlur, value } }) => (
				<SelectCountry
					label={label}
					name={name}
					selected={value}
					onChange={country => {
						onChange(country);
						onChangeHandler(country);
					}}
					placeholder={placeholder}
					size={size}
					message={generateError(errors[name])}
					countries={countries}
					clearValue={() => {
						onChange(null);
						onClear();
					}}
				/>
			)}
		/>
	);
};

export const CheckboxWrapper = ({ control, errors, name = '', label = '' }) => (
	<Controller
		name={name}
		control={control}
		defaultValue={false}
		rules={{ required: 'Please agree to continue' }}
		render={({ field: { onChange, onBlur, value } }) => (
			<GeoCheckbox
				onChange={e => onChange(e)}
				checked={value}
				name={name || ''}
				size="large"
				label={label}
				message={generateError(errors[name])}
				inputProps={{
					onBlur,
				}}
			/>
		)}
	/>
);
