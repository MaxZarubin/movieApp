import React from 'react';

import { Figure, Spinner } from 'react-bootstrap';

const ModalBodyFigure = ({ posterPath }) => { 
	return (
		<Figure className="poster-wrap">
			{ posterPath 
				? <Figure.Image 
					className="poster" 
					alt="poster" 
					src={`https://image.tmdb.org/t/p/w500/${posterPath}`} /> 
				: <Spinner animation="border" /> 
			}
		</Figure>
	);
}

export default ModalBodyFigure;