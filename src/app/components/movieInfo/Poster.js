import React from 'react';

import { Figure } from 'react-bootstrap';

const Poster = ({ path }) => {
    return (
        <Figure>
            <Figure.Image
                height={500}
                alt="poster"
                src={`https://image.tmdb.org/t/p/w500/${path}`}
            />
        </Figure>
    );
}

export default Poster;