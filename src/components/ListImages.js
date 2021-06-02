import React from 'react';
import Picture from './Picture';

const ListImages = ({ images }) => {
	return (
		<div className="col-12 p5 row">
			{images.map((picture) => (
				<Picture key={picture.id} picture={picture} />
			))}
		</div>
	);
};

export default ListImages;
