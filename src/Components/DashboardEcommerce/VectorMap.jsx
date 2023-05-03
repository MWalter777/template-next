import React, { useRef } from 'react';
import { VectorMap } from 'react-jvectormap';

const Vectormap = (props) => {
	const ref = useRef();
	return (
		<div style={{ width: props.width, height: 350 }}>
			<VectorMap
				map={props.value}
				zoomOnScroll={false}
				zoomButtons={false}
				markersSelectable={true}
				markerStyle={{
					initial: {
						fill: '#0ab39c',
					},
					selected: {
						fill: '#405189',
					},
				}}
				labels={{
					markers: {
						render: function (marker) {
							return marker.name;
						},
					},
				}}
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
						fill: '#f3f6f9',
						fillOpacity: 1,
					},
				}}
			/>
		</div>
	);
};

export default Vectormap;
