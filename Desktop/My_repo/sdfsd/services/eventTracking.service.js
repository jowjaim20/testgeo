export class EventTrackingService {
	GTMPageView(url) {
		const pageEvent = {
			event: 'pageview',
			page: url,
		};
		//@ts-ignore
		window && window.dataLayer && window.dataLayer.push(pageEvent);
		return pageEvent;
	}

	verifyProductionEnv(cl) {
		// change the !
		if (process.env.NODE_ENV !== 'production') {
			cl();
		}
	}

	on404Page() {
		this.verifyProductionEnv(() => {
			if (window['dataLayer']) {
				window['dataLayer'].push({ event: '404_page' });
			}
		});
	}

	// onTrialPayment() {
	//     this.verifyProductionEnv(() => {
	//         fetch('https://geolocation-db.com/json/')
	//             .then(res => res.json())
	//             .then(response => {
	//                 //Google ads
	//                 conversion('trail_payment', {
	//                     data: { value: 1, currency: 'USD' },
	//                     country: sha256(response.country_code),
	//                 });
	//             })
	//             .catch(() => {
	//                 console.log('Cannot get a country');
	//             });
	//
	//         window['dataLayer'].push({
	//             event: 'trial_payment',
	//             value: '1',
	//             currency: 'USD',
	//         });
	//
	//         //Facebook pixel
	//         this.facebookPixelEvent('track', 'StartTrial', {
	//             value: '1',
	//             currency: 'USD',
	//         });
	//     });
	// }
	//
	// onLogin(state) {
	//     this.verifyProductionEnv(() => {
	//         window['dataLayer'].push({ event: 'login' });
	//         //Google and Facebook Ads
	//         conversion('login', { content_name: state.email });
	//         //Facebook pixel
	//         this.facebookPixelEvent('trackCustom', 'Login', {
	//             content_name: state.email,
	//         });
	//     });
	// }
	//
	// onUpgradePayment(state) {
	//     this.verifyProductionEnv(() => {
	//         window['dataLayer'].push({
	//             event: 'upgrade_payment',
	//             value: state.price,
	//             currency: 'USD',
	//         });
	//         //Google and Facebook Ads
	//         conversion('upgrade_payment', {
	//             data: { value: state.price, currency: 'USD' },
	//         });
	//         //Facebook pixel
	//         this.facebookPixelEvent('track', 'Purchase', {
	//             value: state.price,
	//             currency: 'USD',
	//         });
	//     });
	// }
	//
	// onLogout(state) {
	//     this.verifyProductionEnv(() => {
	//         window['dataLayer'].push({ event: 'logout' });
	//         //Google and Facebook Ads
	//         conversion('logout', { content_name: null, country: state.country });
	//         //Facebook pixel
	//         this.facebookPixelEvent('trackCustom', 'Logout', {
	//             content_name: null,
	//             country: state.country,
	//         });
	//     });
	// }
	//
	// onViewSignup(state) {
	//     this.verifyProductionEnv(() => {
	//         window['dataLayer'].push({ event: 'view_signup' });
	//         //Google and Facebook Ads
	//         conversion('view_signup', { content_name: null, country: state.country });
	//         //Facebook pixel
	//         this.facebookPixelEvent('trackCustom', 'View Signup', {
	//             content_name: null,
	//             country: state.country,
	//         });
	//     });
	// }
	//
	// facebookPixelEvent(track, event, payload = {}) {
	//     if (typeof window !== 'undefined') {
	//         if (window['fbq'] != null) {
	//             window['fbq'](track, event, payload);
	//         }
	//     }
	// }
}
