import { excludeEmailDomainsBusinessTrial } from './constant';

export const mapPortsOptions = options => {
	// @ts-ignore
	// const existValues = countryTarget.map((c) => parseInt(Object.keys(c)));
	return options.map(i => ({
		label: i.label,
		value: i.value,
		checked: false,
		disabled: false,
	}));
};

export const capitalizeFirstLetter = text => {
	return text ? `${text.charAt(0).toUpperCase()}${text.slice(1)}` : '';
};

export const validateEmail = email => {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		return true;
	}
	return false;
};

export const validateEmailDomain = email => {
	const emailDomain = email.split('@')[1];
	return excludeEmailDomainsBusinessTrial.some(substring => emailDomain.toLowerCase().includes(substring));
};

export const validateUrl = str => {
	var pattern = new RegExp(
		'^(https?:\\/\\/)?' + // protocol
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
			'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
			'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
			'(\\#[-a-z\\d_]*)?$',
		'i',
	);
	return !!pattern.test(str);
};

export const validateLinkedInUrl = str => {
	var pattern = new RegExp(/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile|company)/gm);
	return !!pattern.test(str);
};
