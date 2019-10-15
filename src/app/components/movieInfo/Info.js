import React from 'react';

const Info = ({ movieInfo, overview, rating, director, cast }) => {

    const actors = [];

	for(let i = 0, max = cast.length; i < max; i++){
		actors.push(cast[i].name);
	}

    return (
        <>
            <h6>{movieInfo.overview}</h6>
            <p>{overview}</p>
            <h6>{movieInfo.director}</h6>
            <p>{director}</p>
            <h6>{movieInfo.cast}</h6>
            <p>{cast.length > 0 ? actors.join(', ') : 'no data'}</p>			
            <h6>{movieInfo.rating}</h6>
            <p>{rating}</p>
        </> 
    );
}

export default Info;