import React from 'react';

const Info = ({ movieInfo, overview, rating, director, cast }) => {
    return (
        <>
            <h6>{movieInfo.overview}</h6>
            <p>{overview}</p>
            <h6>{movieInfo.director}</h6>
            <p>{director}</p>
            <h6>{movieInfo.cast}</h6>
            <p>{cast}</p>			
            <h6>{movieInfo.rating}</h6>
            <p>{rating}</p>
        </> 
    );
}

export default Info;