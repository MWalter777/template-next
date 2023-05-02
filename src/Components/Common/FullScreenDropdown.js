import React, { useState } from 'react';

const FullScreenDropdown = () => {
	/*
    mode
    */
	const [isFullScreenMode, setIsFullScreenMode] = useState(true);

	/*
    full screen
    */
	const toggleFullscreen = () => {};

	return (
		<React.Fragment>
			<div className='ms-1 header-item d-none d-sm-flex'>
				<button
					onClick={toggleFullscreen}
					type='button'
					className='btn btn-icon btn-topbar btn-ghost-secondary rounded-circle'
				>
					<i
						className={
							isFullScreenMode
								? 'bx bx-fullscreen fs-22'
								: 'bx bx-exit-fullscreen fs-22'
						}
					></i>
				</button>
			</div>
		</React.Fragment>
	);
};

export default FullScreenDropdown;
