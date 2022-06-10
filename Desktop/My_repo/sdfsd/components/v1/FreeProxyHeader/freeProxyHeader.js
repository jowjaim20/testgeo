import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import styles from './freeProxyHeader.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../public/images/homepage/logo.svg';

export default function AdditionalHeader() {
	const [data, handleMenu] = useState(false);

	return (
		<Grid className={`${styles.headerMain} max-w-screen-xl mx-auto px-4`}>
			<Grid className={styles.navBlock}>
				<Grid
					className={styles.container}
					container
					alignItems='center'
					justify='space-between'
					wrap='nowrap'
					direction='row'
					style={{
						maxWidth: '1385px',
						// paddingRight: '36px',
						backgroundColor: '#181a40',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<ul className={styles.menuList}>
						<Link href='/'>
							<img src={logo} alt='logo' width={126} height={57} />
						</Link>
					</ul>
					<input id='burger' className={styles.burger} type='checkbox' />
					<label
						htmlFor='burger'
						className={styles.burger}
						onClick={() => handleMenu(true)}
					>
						<span></span>
						<span></span>
						<span></span>
					</label>
					<nav className={data ? styles.active : ''}>
						<Grid
							container
							justify='flex-end'
							wrap='nowrap'
							className={styles.btnWrap}
							direction='row'
						>
							<FontAwesomeIcon
								icon={faTimes}
								onClick={() => handleMenu(false)}
								className={styles.closeBtn}
							/>
						</Grid>
						<ul>
							<li>
								<Link href='/'>Home</Link>
							</li>
							<li>
								<Link href='/use-cases'>Use Cases</Link>
							</li>
							<li>
								<Link href='/affiliate'>Affiliate Program</Link>
							</li>
							<li>
								<a href='https://app.geonode.com/login'>Login</a>
							</li>
							<li>
								<a href='https://consumerchoice.hasoffers.com/'>
									Affiliate Login
								</a>
							</li>
						</ul>
					</nav>
				</Grid>
			</Grid>
		</Grid>
	);
}
