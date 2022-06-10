import axios from 'axios';
import * as Promise from 'bluebird';

class HttpService {
	axios;
	auth;
	constructor(
		httpInterceptingHandler,
		httpResponseHandler,
		httpResponseErrorHandler
	) {
		this.axios = axios.create();
		this.axios.interceptors.request.use(httpInterceptingHandler);
		this.axios.interceptors.response.use(
			httpResponseHandler,
			httpResponseErrorHandler
		);
	}
	get(url, params) {
		return this.axios.get(url, { params });
	}
	post(url, payload) {
		return this.axios.post(url, payload);
	}
}

function accessTokenHandler(config) {
	const accessToken = null;
	if (accessToken) {
		if (config.method !== 'OPTIONS') {
			config.headers.authorization = `Bearer ${accessToken}`;
		}
	} else {
		// redirect
	}
}

const httpInterceptingHandler = async (config) => {
	accessTokenHandler(config);

	return config;
};

const httpResponseHandler = (response) => {
	if (response && response.data) {
		const { data } = response;
		if (data.message) {
		}
	}
	return response;
};

const httpResponseErrorHandler = (data) => {
	console.log('httpResponseErrorHandler :', data);
	const response = data && data.response;

	if (response) {
		if (response.status === 401) {
			if (response.data.message) {
				console.log(response.data.message);
			}
		}

		if (response.data) {
			console.log(response.data);
			return Promise.reject(response.data);
		}
	} else {
		return Promise.reject({});
	}
};

const httpService = new HttpService(
	httpInterceptingHandler,
	httpResponseHandler,
	httpResponseErrorHandler
);
export default httpService;
