import React from 'react';
import styles from './myIPTable.module.scss';

const MyIpTable = ({ title, titleImg, data }) => {
	return (
		<table className={styles.ipTable}>
			<thead>
				<tr>
					<th style={{ display: 'flex', alignItems: 'center' }}>
						<div>
							<img src={titleImg}></img>
						</div>
						<div className={styles.ipTitle}>{title}</div>
					</th>
					<th></th>
				</tr>
			</thead>

			<tbody>
				{data.map((elem, index) => {
					return (
						<tr key={index}>
							<td
								style={{
									color: 'rgba(255, 184, 184, 1)',
									padding: '12px 10px 12px 12px',
									width: '36%',
								}}
							>
								{elem.title}
							</td>
							<td
								style={{
									color: '#FFFFFF',
									padding: '12px 10px 12px 12px',
									display: 'flex',
								}}
							>
								{elem.result}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default MyIpTable;
