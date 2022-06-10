import React, { useEffect, useState } from 'react';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ClickAwayListener, Tooltip } from '@material-ui/core';

const icons = {
	copyLink: (
		<svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_d_705_86651)">
				<path d="M2 9C2 4.58172 5.58172 1 10 1H38C42.4183 1 46 4.58172 46 9V37C46 41.4183 42.4183 45 38 45H10C5.58172 45 2 41.4183 2 37V9Z" fill="white" />
				<path
					d="M22.3335 23.8333C22.6914 24.3118 23.148 24.7077 23.6723 24.9941C24.1966 25.2806 24.7764 25.4509 25.3724 25.4936C25.9683 25.5363 26.5665 25.4503 27.1263 25.2415C27.6861 25.0327 28.1944 24.7059 28.6168 24.2833L31.1168 21.7833C31.8758 20.9975 32.2958 19.945 32.2863 18.8525C32.2768 17.76 31.8386 16.715 31.0661 15.9424C30.2935 15.1699 29.2485 14.7317 28.156 14.7222C27.0635 14.7127 26.011 15.1327 25.2252 15.8917L23.7918 17.3167M25.6668 22.1667C25.309 21.6882 24.8524 21.2923 24.328 21.0059C23.8037 20.7194 23.2239 20.5491 22.628 20.5064C22.032 20.4637 21.4338 20.5497 20.874 20.7585C20.3142 20.9673 19.8059 21.2941 19.3835 21.7167L16.8835 24.2167C16.1245 25.0025 15.7045 26.055 15.714 27.1475C15.7235 28.24 16.1617 29.285 16.9343 30.0576C17.7068 30.8301 18.7518 31.2683 19.8443 31.2778C20.9368 31.2873 21.9893 30.8673 22.7752 30.1083L24.2002 28.6833"
					stroke="#344054"
					strokeWidth="1.67"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M10 2H38V0H10V2ZM45 9V37H47V9H45ZM38 44H10V46H38V44ZM3 37V9H1V37H3ZM10 44C6.13401 44 3 40.866 3 37H1C1 41.9706 5.02944 46 10 46V44ZM45 37C45 40.866 41.866 44 38 44V46C42.9706 46 47 41.9706 47 37H45ZM38 2C41.866 2 45 5.13401 45 9H47C47 4.02944 42.9706 0 38 0V2ZM10 0C5.02944 0 1 4.02944 1 9H3C3 5.13401 6.13401 2 10 2V0Z"
					fill="#D0D5DD"
				/>
			</g>
			<defs>
				<filter id="filter0_d_705_86651" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
					<feOffset dy="1" />
					<feGaussianBlur stdDeviation="1" />
					<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_705_86651" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_705_86651" result="shape" />
				</filter>
			</defs>
		</svg>
	),
	twitter: (
		<svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_d_705_86652)">
				<path d="M2 9C2 4.58172 5.58172 1 10 1H38C42.4183 1 46 4.58172 46 9V37C46 41.4183 42.4183 45 38 45H10C5.58172 45 2 41.4183 2 37V9Z" fill="white" />
				<path
					d="M20.2918 31.125C27.8371 31.125 31.9652 24.8723 31.9652 19.4516C31.9652 19.2758 31.9613 19.0961 31.9535 18.9204C32.7566 18.3396 33.4496 17.6203 34 16.7961C33.2521 17.1289 32.458 17.3462 31.6449 17.4407C32.5011 16.9275 33.1421 16.1213 33.4492 15.1715C32.6438 15.6488 31.763 15.9856 30.8445 16.1672C30.2257 15.5097 29.4075 15.0743 28.5164 14.9284C27.6253 14.7825 26.711 14.9343 25.9148 15.3601C25.1186 15.786 24.4848 16.4623 24.1115 17.2845C23.7382 18.1066 23.6462 19.0289 23.8496 19.9086C22.2187 19.8268 20.6233 19.4031 19.1667 18.6651C17.71 17.9271 16.4247 16.8912 15.3941 15.6246C14.8703 16.5278 14.71 17.5964 14.9459 18.6135C15.1817 19.6305 15.7959 20.5196 16.6637 21.1C16.0122 21.0794 15.375 20.9039 14.8047 20.5883V20.6391C14.8041 21.5868 15.1317 22.5055 15.7319 23.239C16.3321 23.9725 17.1678 24.4755 18.0969 24.6625C17.4934 24.8277 16.86 24.8517 16.2457 24.7328C16.5079 25.5479 17.018 26.2608 17.7048 26.772C18.3916 27.2832 19.2209 27.5672 20.077 27.5844C18.6237 28.726 16.8285 29.3452 14.9805 29.3422C14.6527 29.3417 14.3253 29.3216 14 29.2821C15.8774 30.4865 18.0613 31.1262 20.2918 31.125Z"
					fill="#98A2B3"
				/>
				<path
					d="M10 2H38V0H10V2ZM45 9V37H47V9H45ZM38 44H10V46H38V44ZM3 37V9H1V37H3ZM10 44C6.13401 44 3 40.866 3 37H1C1 41.9706 5.02944 46 10 46V44ZM45 37C45 40.866 41.866 44 38 44V46C42.9706 46 47 41.9706 47 37H45ZM38 2C41.866 2 45 5.13401 45 9H47C47 4.02944 42.9706 0 38 0V2ZM10 0C5.02944 0 1 4.02944 1 9H3C3 5.13401 6.13401 2 10 2V0Z"
					fill="#D0D5DD"
				/>
			</g>
			<defs>
				<filter id="filter0_d_705_86652" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
					<feOffset dy="1" />
					<feGaussianBlur stdDeviation="1" />
					<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_705_86652" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_705_86652" result="shape" />
				</filter>
			</defs>
		</svg>
	),
	facebook: (
		<svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_d_705_86653)">
				<path d="M2 9C2 4.58172 5.58172 1 10 1H38C42.4183 1 46 4.58172 46 9V37C46 41.4183 42.4183 45 38 45H10C5.58172 45 2 41.4183 2 37V9Z" fill="white" />
				<path
					d="M34 23C34 17.4771 29.5229 13 24 13C18.4771 13 14 17.4771 14 23C14 27.9912 17.6568 32.1283 22.4375 32.8785V25.8906H19.8984V23H22.4375V20.7969C22.4375 18.2906 23.9305 16.9063 26.2146 16.9063C27.3084 16.9063 28.4531 17.1016 28.4531 17.1016V19.5625H27.1922C25.95 19.5625 25.5625 20.3334 25.5625 21.125V23H28.3359L27.8926 25.8906H25.5625V32.8785C30.3432 32.1283 34 27.9912 34 23Z"
					fill="#98A2B3"
				/>
				<path
					d="M10 2H38V0H10V2ZM45 9V37H47V9H45ZM38 44H10V46H38V44ZM3 37V9H1V37H3ZM10 44C6.13401 44 3 40.866 3 37H1C1 41.9706 5.02944 46 10 46V44ZM45 37C45 40.866 41.866 44 38 44V46C42.9706 46 47 41.9706 47 37H45ZM38 2C41.866 2 45 5.13401 45 9H47C47 4.02944 42.9706 0 38 0V2ZM10 0C5.02944 0 1 4.02944 1 9H3C3 5.13401 6.13401 2 10 2V0Z"
					fill="#D0D5DD"
				/>
			</g>
			<defs>
				<filter id="filter0_d_705_86653" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
					<feOffset dy="1" />
					<feGaussianBlur stdDeviation="1" />
					<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_705_86653" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_705_86653" result="shape" />
				</filter>
			</defs>
		</svg>
	),
	linkedIn: (
		<svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_d_705_86654)">
				<path d="M2 9C2 4.58172 5.58172 1 10 1H38C42.4183 1 46 4.58172 46 9V37C46 41.4183 42.4183 45 38 45H10C5.58172 45 2 41.4183 2 37V9Z" fill="white" />
				<path
					d="M32.5195 13H15.4766C14.6602 13 14 13.6445 14 14.4414V31.5547C14 32.3516 14.6602 33 15.4766 33H32.5195C33.3359 33 34 32.3516 34 31.5586V14.4414C34 13.6445 33.3359 13 32.5195 13ZM19.9336 30.043H16.9648V20.4961H19.9336V30.043ZM18.4492 19.1953C17.4961 19.1953 16.7266 18.4258 16.7266 17.4766C16.7266 16.5273 17.4961 15.7578 18.4492 15.7578C19.3984 15.7578 20.168 16.5273 20.168 17.4766C20.168 18.4219 19.3984 19.1953 18.4492 19.1953ZM31.043 30.043H28.0781V25.4023C28.0781 24.2969 28.0586 22.8711 26.5352 22.8711C24.9922 22.8711 24.7578 24.0781 24.7578 25.3242V30.043H21.7969V20.4961H24.6406V21.8008H24.6797C25.0742 21.0508 26.043 20.2578 27.4844 20.2578C30.4883 20.2578 31.043 22.2344 31.043 24.8047V30.043Z"
					fill="#98A2B3"
				/>
				<path
					d="M10 2H38V0H10V2ZM45 9V37H47V9H45ZM38 44H10V46H38V44ZM3 37V9H1V37H3ZM10 44C6.13401 44 3 40.866 3 37H1C1 41.9706 5.02944 46 10 46V44ZM45 37C45 40.866 41.866 44 38 44V46C42.9706 46 47 41.9706 47 37H45ZM38 2C41.866 2 45 5.13401 45 9H47C47 4.02944 42.9706 0 38 0V2ZM10 0C5.02944 0 1 4.02944 1 9H3C3 5.13401 6.13401 2 10 2V0Z"
					fill="#D0D5DD"
				/>
			</g>
			<defs>
				<filter id="filter0_d_705_86654" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
					<feOffset dy="1" />
					<feGaussianBlur stdDeviation="1" />
					<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_705_86654" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_705_86654" result="shape" />
				</filter>
			</defs>
		</svg>
	),
};

const ShareBlog = ({ ogUrl }) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (open) {
			setTimeout(() => {
				setOpen(!open);
			}, 5000);
		}
	}, [open]);
	return (
		<div className="flex gap-3 mt-8">
			<ClickAwayListener onClickAway={() => setOpen(false)} mouseEvent={open ? 'onClick' : false} touchEvent={open ? 'onTouchEnd' : false}>
				<Tooltip open={open} title="Copied" arrow placement="top-end">
					<div onClick={() => setOpen(!open)}>
						<CopyToClipboard text={ogUrl}>{icons.copyLink}</CopyToClipboard>
					</div>
				</Tooltip>
			</ClickAwayListener>

			<TwitterShareButton url={ogUrl}>
				<div>{icons.twitter}</div>
			</TwitterShareButton>

			<FacebookShareButton url={ogUrl}>
				<div>{icons.facebook}</div>
			</FacebookShareButton>
			<LinkedinShareButton url={ogUrl}>
				<div>{icons.linkedIn}</div>
			</LinkedinShareButton>
		</div>
	);
};

export default ShareBlog;
