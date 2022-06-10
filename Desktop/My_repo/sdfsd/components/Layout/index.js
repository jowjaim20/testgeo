import React from 'react';
import styles from './layout.module.scss';
// import Navigation from '../Navigation';
import Footer from '../Footer/footerLanding';

const Layout = ({ children }) => {
	return (
		<>
			<div className={`w-full bg-contact`}>
				<div className={styles.pageContainer}>
					{/* <div className={styles.pageHeader}>
						<Navigation />
					</div> */}
					<div className={styles.pageContent}>{children}</div>
					<div className={styles.pageFooter}>
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
