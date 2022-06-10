import { findFlagUrlByIso2Code } from 'country-flags-svg';

export class UtilsService {
	formattingNumber = (n, d = 0) =>
		n.toLocaleString('en', {
			minimumFractionDigits: d,
			maximumFractionDigits: d,
		});
	copyToClipboard = (text) =>
		text && window.navigator.clipboard.writeText(text.toString());
	countryFlag = (code, size) => {
		let flagUrl = findFlagUrlByIso2Code(encodeURIComponent(code));
		// if (!flagUrl && iso3Code) {
		// 	flagUrl = findFlagUrlByIso3Code(encodeURIComponent(iso3Code));
		// }

		if (code === 'AF' || code === 'af') {
			flagUrl =
				'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Flag_of_Afghanistan_%28Colored_Emblem%29.svg/800px-Flag_of_Afghanistan_%28Colored_Emblem%29.svg.png';
		} else if (code === 'CD' || code === 'cd') {
			flagUrl =
			'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/188px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png';
		}

		return <img src={flagUrl} alt='flag' style={{ width: size }} />;
	};
}
