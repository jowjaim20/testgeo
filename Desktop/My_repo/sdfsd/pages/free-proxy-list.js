import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Typography, Grid } from '@material-ui/core';
import dynamic from 'next/dynamic';
import styles from '../styles/freeProxy.module.scss';
import axios from 'axios';

const HeaderFreeProxy = dynamic(import('../components/v1/FreeProxyHeader/freeProxyHeader'));
import FreeProxyTable from '../components/v1/FreeProxyTable/freeProxyTable';
import GeoHead from '../components/Head';

export default function FreeProxyList() {
	const [total, setTotal] = useState(0);

	useEffect(() => {
		axios.get(`https://proxylist.geonode.com/api/proxy-list`).then(res => {
			setTotal(res.data.total.toLocaleString('en-US'));
		});
	});

	return (
		<div>
			<GeoHead
				title={`🤖 Free Proxy List [${total} IPs Online]`}
				description="Unmetered Residential Proxies" // This "unmetered" in text needs to be asked!!
			/>
			<Grid className="pb-60" style={{ backgroundColor: '#181a40' }}>
				{/* <div className={styles.viewMore}>
					View on desktop for more proxy filters
				</div> */}
				<HeaderFreeProxy />
				<main className={`${styles.homepage} max-w-screen-xl mx-auto px-4`}>
					<Grid className={styles.section1}>
						<div style={{ height: '35%' }} className={styles.cover}></div>
						<Grid
							className={styles.container}
							container
							// direction='row'
							// wrap='nowrap'
							// justify='space-between'
							// alignItems='center'
						>
							<Grid className={styles.mainContent}>
								<div className={styles.freeProxyWrapper}>
									<Typography variant="h1" className={styles.title}>
										Free Proxy List
									</Typography>
								</div>
							</Grid>
							<FreeProxyTable></FreeProxyTable>
						</Grid>
					</Grid>
				</main>
			</Grid>
		</div>
	);
}
// new Free proxy list
// import React, { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';
// import styles from '@styles/freeProxy.module.scss';
// import axios from 'axios';

// import GeoHead from '../components/Head';
// import PageHeader from '@components/PageHeaderV2';
// import BackgroundLines from '@components/BackgroundLines';

// import FreeProxyList from '@components/FreeProxyList';

// export default function FreeProxyListPage() {
// 	// const [total, setTotal] = useState(0);

// 	// useEffect(() => {
// 	// 	axios.get(`https://proxylist.geonode.com/api/proxy-list`).then((res) => {
// 	// 		setTotal(res.data.total);
// 	// 	});
// 	// });

// 	return (
// 		<div className={`${styles['free-proxy-list']} darkbg`}>
// 			<GeoHead
// 				title='🤖Free Proxy List'
// 				description='Unmetered Residential Proxies'
// 			/>
// 			<BackgroundLines />
// 			<section className='px-4'>
// 				<PageHeader darkMode noBackground noContent />
// 			</section>

// 			<section className='max-w-screen-xxl m-auto items-center mx-auto mt-24 pb-24 lg:pb-64 relative px-4'>
// 				<FreeProxyList />
// 			</section>
// 		</div>
// 	);
// }
