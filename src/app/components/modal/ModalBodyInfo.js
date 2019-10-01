import React from 'react';


const ModalBodyInfo = ({ modal, overview, director, voteAverage }) => {
	return (
		<>
			<h6>{modal.overview}</h6>
			<p>{overview}</p>
			<h6>{modal.director}</h6>
			<p>{director}</p>
			<h6>{modal.rating}</h6>
			<p>{voteAverage}</p>
		</>				
	);
}

export default ModalBodyInfo;