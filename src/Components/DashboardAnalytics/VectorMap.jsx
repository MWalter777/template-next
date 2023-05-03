import React, { useRef } from 'react';
import { VectorMap } from 'react-jvectormap';

const Vectormap = ({ width, value, color }) => {
	const ref = useRef();
	return (
		<div style={{ width: width, height: 350 }}>
			<VectorMap
				map={value}
				zoomOnScroll={false}
				zoomButtons={false}
				backgroundColor='transparent'
				ref={ref}
				containerStyle={{
					width: '100%',
					height: '80%',
				}}
				regionStyle={{
					initial: {
						stroke: '#9599ad',
						strokeWidth: 0.25,
						fill: color,
						fillOpacity: 1,
					},
				}}
				lineStyle={{
					animation: true,
					strokeDasharray: '6 3 6',
				}}
				// containerClassName="map"
			/>
		</div>
	);
};

export default Vectormap;
