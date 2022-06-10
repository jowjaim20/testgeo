import React from 'react';

const DarkSection = ({ children }) => {
	return (
		<section
			style={{
				width: '100%',
				position: 'relative',
				// background: "rgb(21,29,46)",
				// background: "-moz-linear-gradient(0deg, rgba(21,29,46,1) 0%, rgba(30,40,63,1) 27%, rgba(34,45,72,1) 63%, rgba(17,24,40,1) 100%)",
				// background: "-webkit-linear-gradient(0deg, rgba(21,29,46,1) 0%, rgba(30,40,63,1) 27%, rgba(34,45,72,1) 63%, rgba(17,24,40,1) 100%)",
				// background: "linear-gradient(0deg, rgba(21,29,46,1) 0%, rgba(30,40,63,1) 27%, rgba(34,45,72,1) 63%, rgba(17,24,40,1) 100%)",
			}}
		>
			{/* <BackgroundLines></BackgroundLines> */}

			{children}
		</section>
	);
};

export default DarkSection;
