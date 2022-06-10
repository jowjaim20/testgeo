import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useModal } from 'react-hooks-use-modal';
import closeIcon from '@public/images/icon-close.svg';
import modalBackground from '@public/images/black_firday_back.svg';

export function BlackFridayModal() {
	const [Modal, open, close, isOpen] = useModal('__next', {
		preventScroll: true,
		closeOnOverlayClick: false,
	});

	useEffect(() => {
		open();
	}, []);

	return (
		<Modal>
			<div className={'black-friday-modal'}>
				<div className='top'>
					<img
						src={modalBackground}
						alt='icon-close'
						width={'100%'}
						height={'100%'}
					/>
					<img
						src={closeIcon}
						onClick={close}
						alt='icon-close'
						width={15}
						height={15}
						style={{
							position: 'absolute',
							top: 20,
							right: 20,
							cursor: 'pointer',
						}}
					/>
				</div>
				<div className='button'>
					<span className={'title'}>Black Friday Offer!</span>
					<span className={'sub-title'}>Enjoy 30% off any new purchase</span>

					<a href='https://app.geonode.com/signup' target='_self'>
						<Button variant='contained' className={'explore'}>
							30% off? Yes, please!
						</Button>
					</a>
				</div>
			</div>
		</Modal>
	);
}
