import React from 'react';
import styles from './about.module.scss';
import AboutSection from '../../AboutSection';
import ClientFeedback from '../../ClientFeedback';

export default function About() {
	return (
		<div className='max-w-screen-xl mx-auto relative px-4 sm:pb-16 z-10'>
			<div id='about' className={`${styles.about}`}>
				<div className='sm:mb-16'>
					<AboutSection />
				</div>

				<ClientFeedback />
			</div>
		</div>
	);
}
