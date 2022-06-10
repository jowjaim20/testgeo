import React, { useEffect, useState } from 'react';

const borderColorClass = {
	primary: 'border-border divide-border',
	secondary: 'border-support1-base divide-support1-base',
	teritiary: 'border-slate-200 border-slate-200',
};

const BackgroundLines = ({ lineColor = 'primary' }) => {
	const borderClass = borderColorClass[lineColor];

	return (
		<div className='w-full hidden lg:flex justify-center'>
			<div
				className={`empty w-full flex absolute max-w-screen-xl border-l border-r border-t-0 divide-x ${borderClass}`}
				style={{ height: '100%' }}
			>
				<div className='flex-grow w-full h-full'></div>
				<div className='flex-grow w-full h-full'></div>
				<div className='flex-grow w-full h-full'></div>
				<div className='flex-grow w-full h-full'></div>
			</div>
		</div>
	);
};

export default BackgroundLines;
