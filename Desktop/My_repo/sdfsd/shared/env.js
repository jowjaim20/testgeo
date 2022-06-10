import basConfig from './config';

const dev = {
	apiUrl: 'http://localhost:8080/api',
	baseUrl: 'http://localhost:8080',
};

const prod = {
	apiUrl: 'https://app.geonode.com/api',
	baseUrl: 'https://geonode.com',
};

let config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev; // TODO : CHAGE TO DEV

if (process.env.NODE_ENV === 'production') {
	config = prod;
}

export default {
	// Add common config values here
	MAX_ATTACHMENT_SIZE: 5000000,
	...basConfig,
	...config,
};
