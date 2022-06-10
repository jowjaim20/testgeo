import React from 'react';
import bugWindow from '@public/images/topWebScrapping/bugWindow.svg';
import bugWindowGreen from '@public/images/topWebScrapping/bugWindowGreen.svg';
import PropTypes from 'prop-types';

const BlogHeader = props => {
	const { title } = props;
	return (
		<div className="relative">
			<div className="pt-8 pb-9">
				<div className="flex items-center justify-center flex-wrap ">
					<h1 className="text-background-bg text-4xl md:text-5xl  leading-10 font-semibold text-center ">{title}</h1>
				</div>
			</div>

			{/* <div className='bg-background-high w-full' style={{ height: 250 }}>
				<div className='flex justify-center p-8'>
					<img src={bugWindow} className='block sm:hidden' alt='bug-window' />
					<img
						src={bugWindowGreen}
						className='hidden sm:block'
						alt='bug-window'
					/>
				</div>
			</div>

			<div className='block sm:hidden absolute w-11/12 sm:w-2/3 transform top-1/2 right-1/2 translate-x-1/2 translate-y-1/4'>
				<div className='bg-white pt-6 pb-6'>
					<div className='flex items-center justify-center flex-wrap '>
						<h1 className='text-background-bg text-3xl leading-9 font-bold text-center'>
							{title}
						</h1>
					</div>
				</div>
			</div> */}
		</div>
	);
};

BlogHeader.propTypes = {
	title: PropTypes.string.isRequired,
};

export default BlogHeader;
