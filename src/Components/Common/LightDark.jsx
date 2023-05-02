import React from 'react';

const LightDark = () => {
	return (
		<div className='ms-1 header-item d-none d-sm-flex'>
			<button
				type='button'
				className='btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode'
			>
				<i className='bx bx-moon fs-22'></i>
			</button>
		</div>
	);
};

export default LightDark;
