import React from 'react';

import {
	MirageIcon,
	StaticKitIcon,
	TransistorIcon,
	TupleIcon,
	WorkcationIcon,
} from '@shared/svgIcons';

const companies = [
	{ id: 1, name: 'Tuple', logo: TupleIcon },
	{ id: 2, name: 'Mirage', logo: MirageIcon },
	{ id: 3, name: 'StaticKit', logo: StaticKitIcon },
	{ id: 4, name: 'Transistor', logo: TransistorIcon },
	{ id: 5, name: 'Workcation', logo: WorkcationIcon },
];

const Companies = (props) => {
	const { showHead = false, headClass = '' } = props;
	return (
		<div className='bg-transparent'>
			<div className='max-w-screen-xl mx-auto pt-8 pb-16 px-4'>
				{showHead && (
					<p
						className={`text-center text-sm leading-5 font-semibold uppercase text-gray-500 tracking-wide ${headClass}`}
					>
						Trusted by companies around the globe
					</p>
				)}

				<div className='mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
					{companies.map((item) => (
						<div
							key={item.id}
							className='col-span-1 flex lg:justify-center md:col-span-2 lg:col-span-1'
						>
							<span>{item.logo}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Companies;
